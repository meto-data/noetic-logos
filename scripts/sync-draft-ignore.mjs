#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises"
import { spawnSync } from "node:child_process"
import { globby } from "globby"

const START_MARKER = "# === AUTO-DRAFT-IGNORE-START ==="
const END_MARKER = "# === AUTO-DRAFT-IGNORE-END ==="

function hasDraftFlag(fileContent) {
  if (!fileContent.startsWith("---\n")) return false

  const end = fileContent.indexOf("\n---", 4)
  if (end === -1) return false

  const frontmatter = fileContent.slice(4, end)
  return /^\s*draft\s*:\s*true\s*$/im.test(frontmatter)
}

function escapeGitignorePath(path) {
  return path.replace(/([\\ #!])/g, "\\$1")
}

function runGit(args) {
  return spawnSync("git", args, { encoding: "utf8" })
}

async function collectDraftFiles() {
  const files = await globby(["content/**/*.md"])
  const draftFiles = []

  for (const file of files) {
    const content = await readFile(file, "utf8")
    if (hasDraftFlag(content)) {
      draftFiles.push(file)
    }
  }

  draftFiles.sort((a, b) => a.localeCompare(b, "tr"))
  return draftFiles
}

function upsertManagedBlock(gitignoreContent, draftFiles) {
  const managedLines = [
    START_MARKER,
    "# Draft:true notes are intentionally kept local only",
    ...draftFiles.map(escapeGitignorePath),
    END_MARKER,
  ]
  const managedBlock = managedLines.join("\n")

  const startIndex = gitignoreContent.indexOf(START_MARKER)
  const endIndex = gitignoreContent.indexOf(END_MARKER)

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const before = gitignoreContent.slice(0, startIndex).trimEnd()
    const after = gitignoreContent.slice(endIndex + END_MARKER.length).trimStart()
    return `${before}\n\n${managedBlock}\n\n${after}`.trimEnd() + "\n"
  }

  return `${gitignoreContent.trimEnd()}\n\n${managedBlock}\n`
}

function getTrackedSubset(files) {
  if (files.length === 0) return []
  const res = runGit(["ls-files", "-z", "--", ...files])
  if (res.status !== 0) return []
  return res.stdout
    .split("\0")
    .map((line) => line.trim())
    .filter(Boolean)
}

async function main() {
  const args = new Set(process.argv.slice(2))
  const shouldWriteIgnore = args.has("--write-ignore")
  const shouldUntrack = args.has("--untrack")

  const draftFiles = await collectDraftFiles()

  if (shouldWriteIgnore) {
    const gitignorePath = ".gitignore"
    const current = await readFile(gitignorePath, "utf8")
    const next = upsertManagedBlock(current, draftFiles)
    if (next !== current) {
      await writeFile(gitignorePath, next, "utf8")
      console.log(`Updated ${gitignorePath} with ${draftFiles.length} draft entries.`)
    } else {
      console.log(`${gitignorePath} already up to date.`)
    }
  }

  let trackedDrafts = getTrackedSubset(draftFiles)
  if (shouldUntrack && trackedDrafts.length > 0) {
    const rm = runGit(["rm", "--cached", "--", ...trackedDrafts])
    if (rm.status !== 0) {
      console.error(rm.stderr || "Failed to untrack draft files.")
      process.exit(1)
    }
    console.log(`Untracked ${trackedDrafts.length} draft files (local files preserved).`)
    trackedDrafts = getTrackedSubset(draftFiles)
  }

  if (trackedDrafts.length > 0) {
    console.error("Draft files still tracked in git:")
    for (const file of trackedDrafts) {
      console.error(`- ${file}`)
    }
    process.exit(2)
  }

  console.log(`OK: ${draftFiles.length} draft file(s) detected, none tracked.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
