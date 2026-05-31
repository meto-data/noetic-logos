#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import { fileURLToPath } from "url"

// Define ES module context equivalents
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Colors for beautiful terminal output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
}

console.log(`\n${colors.bright}${colors.cyan}🔄 Noetic Modules Update Engine${colors.reset}\n`)

// ============================================================================
// Configuration
// ============================================================================

const MODULES = {
  web: {
    name: "Web Tasarım ve Programlama (web_module)",
    sourceDir: "/home/logos/_moduller/web_module",
    buildCmd: "npm run build",
    distDir: "/home/logos/_moduller/web_module/dist",
    targetDir: path.join(__dirname, "../quartz/static/web-module"),
    expectedBase: "/noetic-logos/static/web-module/",
  },
  "data-mining": {
    name: "Veri Madenciliği (veri_madenciligi)",
    sourceDir: "/home/logos/_moduller/veri_madenciligi/site",
    buildCmd: "npm run build",
    distDir: "/home/logos/_moduller/veri_madenciligi/site/dist",
    targetDir: path.join(__dirname, "../quartz/static/data-mining-module"),
    expectedBase: "/noetic-logos/static/data-mining-module/",
  },
  "turk-dili": {
    name: "Türk Dili II (turk_dili_v2)",
    sourceDir: "/home/logos/_moduller/turk_dili_v2",
    buildCmd: "npm run build",
    distDir: "/home/logos/_moduller/turk_dili_v2/out",
    targetDir: path.join(__dirname, "../quartz/static/turk-dili-2-module"),
    expectedBase: "/noetic-logos/static/turk-dili-2-module/",
  },
  "business-ethics": {
    name: "İş Etiği (business_ethics)",
    sourceDir: "/home/logos/_moduller/business_ethics",
    buildCmd: "npm run build",
    distDir: "/home/logos/_moduller/business_ethics/dist",
    targetDir: path.join(__dirname, "../quartz/static/business-ethics-module"),
    expectedBase: "/noetic-logos/static/business-ethics-module/",
  },
}

// ============================================================================
// Helper Functions
// ============================================================================

// Recursively find the latest modification time in a directory (ignoring built and cache folders)
function getLatestMtime(dirPath, excludeDirs = ["node_modules", ".git", ".next", "dist", "out", "backups"]) {
  let maxMtime = 0

  if (!fs.existsSync(dirPath)) return 0

  const files = fs.readdirSync(dirPath)
  for (const file of files) {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      if (excludeDirs.includes(file)) continue
      const childMax = getLatestMtime(fullPath, excludeDirs)
      if (childMax > maxMtime) maxMtime = childMax
    } else {
      if (file.startsWith(".")) continue // Ignore hidden files like .DS_Store
      if (stat.mtimeMs > maxMtime) maxMtime = stat.mtimeMs
    }
  }

  return maxMtime
}

// Recursive directory copy
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true })
  }

  const files = fs.readdirSync(from)
  for (const file of files) {
    const fromPath = path.join(from, file)
    const toPath = path.join(to, file)

    const stat = fs.statSync(fromPath)
    if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath)
    } else {
      fs.copyFileSync(fromPath, toPath)
    }
  }
}

// Recursively delete a directory
function deleteFolderRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(dirPath)
  }
}

// White-Screen Prevention system
function applyWhiteScreenProtection(targetDir, expectedBase, id) {
  const indexPath = path.join(targetDir, "index.html")
  if (!fs.existsSync(indexPath)) return

  console.log(`  ${colors.blue}🛡️  [Güvenlik Koruması] index.html analiz ediliyor...${colors.reset}`)
  let html = fs.readFileSync(indexPath, "utf8")
  let wasModified = false

  // 1. Absolute root assets paths (e.g. href="/assets/..." or src="/assets/...")
  // Rewrite them to be either relative or prefixed correctly with the base path.
  // In our case, changing "/assets/" to "./assets/" or putting the full base path works incredibly well.
  const badAssetPaths = [
    { regex: /href="\/assets\//g, replace: 'href="./assets/' },
    { regex: /src="\/assets\//g, replace: 'src="./assets/' },
    { regex: /href="\/_next\//g, replace: 'href="./_next/' },
    { regex: /src="\/_next\//g, replace: 'src="./_next/' },
    // Standard icon and logo links
    { regex: /href="\/html-favicon.svg"/g, replace: 'href="./html-favicon.svg"' },
    { regex: /href="\/favicon.ico"/g, replace: 'href="./favicon.ico"' },
  ]

  for (const rule of badAssetPaths) {
    if (rule.regex.test(html)) {
      html = html.replace(rule.regex, rule.replace)
      wasModified = true
    }
  }

  // 2. Extra verification for Vite CSS/JS imports:
  // If Vite's base path was '/' and produced absolute paths, and they didn't get caught, let's fix them to expectedBase
  if (html.includes('href="/') || html.includes('src="/')) {
    // Specifically looking for assets folder paths without the domain prefix
    const rootAssetsRegex = /(href|src)="\/assets\/([^"]+)"/g
    if (rootAssetsRegex.test(html)) {
      html = html.replace(rootAssetsRegex, `$1="${expectedBase}assets/$2"`)
      wasModified = true
    }
  }

  if (wasModified) {
    fs.writeFileSync(indexPath, html, "utf8")
    console.log(`  ${colors.green}✅ [Güvenlik Koruması] index.html içindeki hatalı mutlak yollar başarıyla düzeltildi! (Beyaz ekran önlendi)${colors.reset}`)
  } else {
    console.log(`  ${colors.green}✅ [Güvenlik Koruması] Yollar temiz ve uyumlu görünüyor! (Herhangi bir düzeltme gerekmedi)${colors.reset}`)
  }
}

// ============================================================================
// Main Execution
// ============================================================================

const args = process.argv.slice(2)
const targetModuleKey = args[0] // e.g. "web", "data-mining", "turk-dili"
const forceBuild = args.includes("--force") || args.includes("-f")

const modulesToProcess = targetModuleKey && MODULES[targetModuleKey] 
  ? { [targetModuleKey]: MODULES[targetModuleKey] }
  : MODULES

if (targetModuleKey && !MODULES[targetModuleKey]) {
  console.error(`❌ ${colors.red}Hata: Geçersiz modül anahtarı '${targetModuleKey}'!${colors.reset}`)
  console.log("Kullanılabilir modüller: web, data-mining, turk-dili")
  process.exit(1)
}

let updateCount = 0

for (const [id, config] of Object.entries(modulesToProcess)) {
  console.log(`${colors.bright}${colors.cyan}----------- [ ${config.name} ] -----------${colors.reset}`)

  if (!fs.existsSync(config.sourceDir)) {
    console.log(`⚠️  ${colors.yellow}Kaynak klasör bulunamadı, bu modül atlanıyor:${colors.reset} ${config.sourceDir}`)
    continue
  }

  const latestSourceTime = getLatestMtime(config.sourceDir)
  const distIndexPath = path.join(config.distDir, "index.html")
  const distExists = fs.existsSync(config.distDir) && fs.existsSync(distIndexPath)
  const latestDistTime = distExists ? fs.statSync(distIndexPath).mtimeMs : 0

  let shouldBuild = forceBuild || !distExists || latestSourceTime > latestDistTime

  console.log(`  ${colors.dim}Kaynak Değişim Zamanı:  ${new Date(latestSourceTime).toLocaleString()}${colors.reset}`)
  console.log(`  ${colors.dim}Derleme (Dist) Zamanı:  ${distExists ? new Date(latestDistTime).toLocaleString() : "Mevcut Değil"}${colors.reset}`)

  if (shouldBuild) {
    console.log(`  🛠️  ${colors.yellow}Kaynak dosyalarda güncelleme tespit edildi. Yeniden derleniyor...${colors.reset}`)
    try {
      // Set NODE_ENV to production during execSync to ensure correct production build configurations are respected
      execSync(config.buildCmd, {
        cwd: config.sourceDir,
        stdio: "inherit",
        env: {
          ...process.env,
          NODE_ENV: "production",
        },
      })
      console.log(`  ${colors.green}✅ Derleme başarıyla tamamlandı.${colors.reset}`)
    } catch (err) {
      console.error(`  ❌ ${colors.red}Hata: Derleme komutu başarısız oldu!${colors.reset}`)
      console.error(err)
      continue
    }
  } else {
    console.log(`  ✨ Derleme (dist) zaten güncel. Yeniden derleme atlanıyor.`)
  }

  // Double-check if dist folder exists now
  if (!fs.existsSync(config.distDir)) {
    console.error(`  ❌ ${colors.red}Hata: Derleme çıktısı (${config.distDir}) bulunamadı!${colors.reset}`)
    continue
  }

  // Compare dist/out vs targetDir in Quartz static
  const targetIndexPath = path.join(config.targetDir, "index.html")
  const targetExists = fs.existsSync(config.targetDir) && fs.existsSync(targetIndexPath)
  const latestTargetTime = targetExists ? fs.statSync(targetIndexPath).mtimeMs : 0
  const freshDistTime = fs.statSync(distIndexPath).mtimeMs

  if (freshDistTime > latestTargetTime || shouldBuild || !targetExists) {
    console.log(`  📦 ${colors.cyan}Yeni derleme çıktıları noetic-papers klasörüne kopyalanıyor...${colors.reset}`)
    
    // Clear old target directory files
    if (fs.existsSync(config.targetDir)) {
      try {
        deleteFolderRecursive(config.targetDir)
      } catch (e) {
        console.log(`  ${colors.dim}Eski dosyaları temizleme uyarısı (atlandı): ${e.message}${colors.reset}`)
      }
    }
    
    // Copy new files
    copyFolderSync(config.distDir, config.targetDir)
    console.log(`  ${colors.green}✅ Kopyalama tamamlandı -> ${path.relative(path.join(__dirname, ".."), config.targetDir)}${colors.reset}`)
    
    // Apply White-Screen Protection
    applyWhiteScreenProtection(config.targetDir, config.expectedBase, id)
    updateCount++
  } else {
    console.log(`  ✨ ${colors.green}noetic-papers içindeki dosyalar zaten en güncel build ile aynı. Senkronizasyon gerekmedi.${colors.reset}`)
  }
  console.log("")
}

if (updateCount > 0) {
  console.log(`${colors.bright}${colors.green}🎉 Güncelleme başarıyla tamamlandı! ${updateCount} modül güncellendi.${colors.reset}\n`)
} else {
  console.log(`${colors.bright}${colors.yellow}✨ Bütün modüller zaten en güncel durumda. Herhangi bir değişiklik yapılmadı.${colors.reset}\n`)
}
