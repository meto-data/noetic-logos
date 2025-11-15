#!/usr/bin/env node

/**
 * Module Generator CLI
 *
 * Yeni test modülü oluşturmak için CLI tool.
 *
 * Kullanım:
 *   node scripts/create-module.js --name yatay_analiz --title "Yatay Analiz Teknikleri"
 *   node scripts/create-module.js --name yatay_analiz --title "Yatay Analiz Teknikleri" --folder finance
 */

const fs = require("fs")
const path = require("path")

// ============================================================================
// Argument Parsing
// ============================================================================

const args = process.argv.slice(2)
const getArg = (flag) => {
  const index = args.indexOf(flag)
  return index !== -1 && args[index + 1] ? args[index + 1] : null
}

const moduleName = getArg("--name")
const moduleTitle = getArg("--title")
const moduleFolder = getArg("--folder") || "finance" // Default: finance

if (!moduleName || !moduleTitle) {
  console.error("❌ Hata: --name ve --title parametreleri zorunludur!")
  console.log("")
  console.log("Kullanım:")
  console.log('  node scripts/create-module.js --name yatay_analiz --title "Yatay Analiz Teknikleri"')
  console.log('  node scripts/create-module.js --name yatay_analiz --title "Yatay Analiz Teknikleri" --folder finance')
  process.exit(1)
}

// ============================================================================
// Paths
// ============================================================================

const ROOT_DIR = path.join(__dirname, "..")
const DATA_FILE = path.join(ROOT_DIR, `quartz/static/finance-module/${moduleName}_data.js`)
const MARKDOWN_FILE = path.join(ROOT_DIR, `content/${moduleFolder}/${moduleName.replace(/_/g, "-")}.md`)
const CSS_FILE = path.join(ROOT_DIR, `quartz/static/finance-module/${moduleName}.css`)

// ============================================================================
// Templates
// ============================================================================

const dataTemplate = `const moduleQuestions = [
  {
    number: 1,
    text: "",
    options: [
      { label: 'A', text: "" },
      { label: 'B', text: "" },
      { label: 'C', text: "" },
      { label: 'D', text: "" },
      { label: 'E', text: "" }
    ],
    correctLabel: 'A',
    isQuantitative: false
  },
  // Buraya daha fazla soru ekleyin...
];

const moduleMeta = {
  id: '${moduleName}',
  title: '${moduleTitle}',
  description: "",
  focusAreas: [
    // Örnek: "Yatay analiz mantığı ve hesaplama yöntemleri",
  ],
  learningObjectives: [
    // Örnek: "Verilerden yatay yüzde hesaplamak",
  ],
  additionalNotes: "",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = '${moduleName.replace(/_/g, "")}State_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
`

const markdownTemplate = `---
title: "${moduleTitle}"
date: ${new Date().toISOString().split("T")[0]}
tags:
  - ${moduleFolder}
  - test
---

<div id="moduleTestContainer">
  <div class="test-loading">
    <p>Test yükleniyor...</p>
  </div>
</div>

<script type="module" src="/static/finance-module/module_engine.js"></script>
<script src="/static/finance-module/${moduleName}_data.js"></script>
<link rel="stylesheet" href="/static/finance-module/style.css" />
${CSS_FILE.split("/").pop() !== `${moduleName}.css` ? "" : `<link rel="stylesheet" href="/static/finance-module/${moduleName}.css" />`}
`

const cssTemplate = `/* ${moduleTitle} - Özel Stiller */

/* Buraya modül-specific CSS ekleyin */

/* Örnek: */
/* .custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
} */
`

// ============================================================================
// File Creation
// ============================================================================

console.log(`\n📦 Modül oluşturuluyor: ${moduleTitle}\n`)

// 1. Data dosyası oluştur
if (fs.existsSync(DATA_FILE)) {
  console.error(`❌ Hata: ${DATA_FILE} zaten mevcut!`)
  process.exit(1)
}

fs.writeFileSync(DATA_FILE, dataTemplate, "utf8")
console.log(`✅ Oluşturuldu: ${path.relative(ROOT_DIR, DATA_FILE)}`)

// 2. Markdown dosyası oluştur
const markdownDir = path.dirname(MARKDOWN_FILE)
if (!fs.existsSync(markdownDir)) {
  fs.mkdirSync(markdownDir, { recursive: true })
  console.log(`📁 Klasör oluşturuldu: ${path.relative(ROOT_DIR, markdownDir)}`)
}

if (fs.existsSync(MARKDOWN_FILE)) {
  console.warn(`⚠️  Uyarı: ${MARKDOWN_FILE} zaten mevcut, üzerine yazılmadı.`)
} else {
  fs.writeFileSync(MARKDOWN_FILE, markdownTemplate, "utf8")
  console.log(`✅ Oluşturuldu: ${path.relative(ROOT_DIR, MARKDOWN_FILE)}`)
}

// 3. CSS dosyası oluştur (opsiyonel)
const createCSS = args.includes("--css")
if (createCSS) {
  if (fs.existsSync(CSS_FILE)) {
    console.warn(`⚠️  Uyarı: ${CSS_FILE} zaten mevcut, üzerine yazılmadı.`)
  } else {
    fs.writeFileSync(CSS_FILE, cssTemplate, "utf8")
    console.log(`✅ Oluşturuldu: ${path.relative(ROOT_DIR, CSS_FILE)}`)
  }
}

console.log("\n✨ Modül başarıyla oluşturuldu!\n")
console.log("Sonraki adımlar:")
console.log(`  1. ${path.relative(ROOT_DIR, DATA_FILE)} dosyasına soruları ekleyin`)
console.log(`  2. ${path.relative(ROOT_DIR, MARKDOWN_FILE)} dosyasındaki frontmatter'ı düzenleyin`)
if (createCSS) {
  console.log(`  3. ${path.relative(ROOT_DIR, CSS_FILE)} dosyasına özel stiller ekleyin`)
}
console.log("")
