#!/usr/bin/env node
/**
 * Synchronise frontmatter `created` dates across the Quartz content folder.
 *
 * Usage:
 *   node scripts/manage-created-dates.mjs --check   # default, no files modified
 *   node scripts/manage-created-dates.mjs --write   # applies updates in-place
 *
 * The script normalises existing dates to ISO (YYYY-MM-DD), deriving missing
 * values from git history when possible, and finally from filesystem metadata.
 * Any files that still lack a reliable source are reported for manual follow-up.
 */

import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import { globby } from "globby"
import matter from "gray-matter"
import { execSync } from "child_process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")
const contentDir = path.join(repoRoot, "content")

const rawArgs = process.argv.slice(2)

if (!rawArgs.some((arg) => ["--write", "--apply", "--check"].includes(arg))) {
  rawArgs.push("--check")
}

const shouldWrite = rawArgs.some((arg) => ["--write", "--apply"].includes(arg))
const verbose = rawArgs.includes("--verbose")

const scopeArg = rawArgs.find((arg) => arg.startsWith("--scope="))
const scope = scopeArg ? scopeArg.split("=")[1] ?? "all" : "all"
const validScopes = new Set(["all", "changed", "staged"])

if (!validScopes.has(scope)) {
  console.error(`Unknown scope "${scope}". Valid options: ${Array.from(validScopes).join(", ")}.`)
  process.exit(1)
}

const configPath = path.join(repoRoot, "dates.config.json")
let enforcementEnabled = true

const envOverride = process.env.DATES_ENFORCE
if (envOverride) {
  enforcementEnabled = !["false", "0", "no", "off"].includes(envOverride.toLowerCase())
} else {
  try {
    const rawConfig = await fs.readFile(configPath, "utf8")
    const parsed = JSON.parse(rawConfig)
    if (typeof parsed?.enabled === "boolean") {
      enforcementEnabled = parsed.enabled
    }
  } catch {
    // no config file, stick with default
  }
}

if (!enforcementEnabled) {
  console.log("\nCreated date normalisation is disabled (toggle via dates.config.json or DATES_ENFORCE env).")
  process.exit(0)
}

function collectContentFilesFromGit(scopeMode) {
  try {
    let output = ""
    if (scopeMode === "staged") {
      output = execSync("git diff --cached --name-only --diff-filter=ACMR", {
        cwd: repoRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      })
    } else {
      output = execSync("git status --porcelain", {
        cwd: repoRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      })
    }

    return output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .filter((line) => {
        // Skip deleted files (porcelain format: "D " or " D" at start)
        if (scopeMode !== "staged" && line.match(/^[DR]D?\s/)) {
          return false
        }
        return true
      })
      .map((line) => {
        if (scopeMode === "staged") {
          return line
        }
        // porcelain output starts with XY status markers
        return line.length > 3 ? line.slice(3) : line
      })
      .map((file) => file.replace(/\\/g, "/"))
      .filter((file) => file.startsWith("content/") && file.endsWith(".md"))
      .map((file) => file.slice("content/".length))
  } catch {
    return []
  }
}

let files
if (scope === "all") {
  files = await globby("**/*.md", {
    cwd: contentDir,
    gitignore: true,
  })
} else {
  const scoped = collectContentFilesFromGit(scope)
  const unique = Array.from(new Set(scoped))
  if (!unique.length) {
    console.log(`No Markdown files under content/ matched scope "${scope}". Nothing to do.`)
    process.exit(0)
  }
  files = unique
}

const pad = (num) => String(num).padStart(2, "0")

function toIsoDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return null
  }
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
}

function normaliseFrontmatterDate(value) {
  if (value == null) return null

  let str = String(value).trim()
  if (!str) return null

  if (str.startsWith("[[") && str.endsWith("]]")) {
    str = str.slice(2, -2).trim()
  }

  str = str.replace(/\//g, "-")

  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(str)) {
    const [d, m, y] = str.split(".")
    str = `${y}-${pad(m)}-${pad(d)}`
  } else if (/^\d{4}\.\d{1,2}\.\d{1,2}$/.test(str)) {
    const [y, m, d] = str.split(".")
    str = `${y}-${pad(m)}-${pad(d)}`
  }

  if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(str)) {
    const [y, m, d] = str.split("-")
    return `${pad(y)}-${pad(m)}-${pad(d)}`
  }

  const coerced = new Date(str)
  return toIsoDate(coerced)
}

function getGitCreatedDate(fullPath) {
  try {
    const relativePath = path.relative(repoRoot, fullPath).replace(/\\/g, "/")
    const output = execSync(`git log --diff-filter=A --follow --format=%cs -- "${relativePath}"`, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    })
      .trim()
      .split("\n")
      .filter(Boolean)

    if (!output.length) return null
    return normaliseFrontmatterDate(output[output.length - 1])
  } catch {
    return null
  }
}

async function getFilesystemCreatedDate(fullPath) {
  try {
    const stats = await fs.stat(fullPath)
    return toIsoDate(stats.birthtime)
  } catch {
    return null
  }
}

const updates = []
const alreadyOk = []
const unresolved = []

for (const relativePath of files) {
  const fullPath = path.join(contentDir, relativePath)
  const raw = await fs.readFile(fullPath, "utf8")
  const parsed = matter(raw)

  const existing = parsed.data?.created
  const normalisedExisting = normaliseFrontmatterDate(existing)

  let chosenDate = normalisedExisting
  let source = null

  if (normalisedExisting) {
    source = "frontmatter"
  } else {
    const gitDate = getGitCreatedDate(fullPath)
    if (gitDate) {
      chosenDate = gitDate
      source = "git"
    } else {
      const fsDate = await getFilesystemCreatedDate(fullPath)
      if (fsDate) {
        chosenDate = fsDate
        source = "filesystem"
      }
    }
  }

  if (!chosenDate) {
    unresolved.push(relativePath)
    continue
  }

  const currentIso = normalisedExisting
  if (currentIso === chosenDate) {
    alreadyOk.push(relativePath)
    continue
  }

  parsed.data = parsed.data ?? {}
  parsed.data.created = chosenDate

  const newContent = matter.stringify(parsed.content, parsed.data, {
    lineWidth: 120,
  })

  if (shouldWrite) {
    await fs.writeFile(fullPath, newContent, "utf8")
  }

  updates.push({ relativePath, source, previous: existing, next: chosenDate })
}

const summary = {
  total: files.length,
  unchanged: alreadyOk.length,
  updated: updates.length,
  unresolved: unresolved.length,
}

const header = shouldWrite ? "Created date normalisation (write mode)" : "Created date normalisation (check mode)"
console.log(`\n${header}`)
console.log("─".repeat(header.length))
console.log(`Analyzed files : ${summary.total}`)
console.log(`Already correct: ${summary.unchanged}`)
console.log(`Updated        : ${summary.updated}`)
console.log(`Unresolved     : ${summary.unresolved}`)

if (updates.length && (verbose || !shouldWrite)) {
  console.log("\nFiles needing updates:")
  for (const entry of updates) {
    const prev = entry.previous ?? "<missing>"
    console.log(`  - ${entry.relativePath} :: ${prev} → ${entry.next} (${entry.source})`)
  }
}

if (unresolved.length) {
  console.log("\nFiles requiring manual dates:")
  for (const file of unresolved) {
    console.log(`  - ${file}`)
  }
}

if (!shouldWrite && (updates.length || unresolved.length)) {
  process.exitCode = 1
}

