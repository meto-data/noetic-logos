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

const args = process.argv.slice(2)
const shouldWrite = args.some((arg) => ["--write", "--apply"].includes(arg))
const verbose = args.includes("--verbose")

if (!args.length) {
  args.push("--check")
}

const files = await globby("**/*.md", {
  cwd: contentDir,
  gitignore: true,
})

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

