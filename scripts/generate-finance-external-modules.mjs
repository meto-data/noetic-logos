#!/usr/bin/env node

/**
 * Generates finance quiz modules from the external taslak markdown.
 *
 * Usage:
 *   node scripts/generate-finance-external-modules.mjs
 */

import fs from "fs";
import path from "path";

const workspaceRoot = new URL("..", import.meta.url).pathname;
const taslakSource = path.resolve(workspaceRoot, "Finansal Yönetim", "Testler", "taslak.md");
const outputDir = path.resolve(workspaceRoot, "quartz/static/finance-module");

const moduleDefinitions = [
  {
    sectionNumber: 1,
    slug: "finansal_tablolar",
    storageKey: "finansalTablolarHariciState_v1",
    title: "Finansal Tablolar",
    hariciIndex: 1,
    description:
      "Temel finansal tablo türlerini, fonksiyonlarını ve kapsamlarını sorgulayan kavramsal bir test seti.",
    focusAreas: [
      "Finansal analiz kavramı ve kapsamı",
      "Temel finansal tabloların tanımı ve amaçları",
      "Analiz türleri ve kullanım alanları"
    ],
    learningObjectives: [
      "Finansal tabloların hangi amaçla kullanıldığını açıklamak",
      "İç, dış, statik ve dinamik analiz türlerini ayırt etmek",
      "Temel tablo bileşenlerini doğru şekilde konumlandırmak"
    ],
    notes:
      "Soruların tamamı sözel niteliktedir; tablo içermeyen sorular yalnızca kavramsal bilgiyi ölçer."
  },
  {
    sectionNumber: 2,
    slug: "temel_finansal_tablolar_ilkeler",
    storageKey: "temelFinansalTablolarIlkelerState_v1",
    title: "Temel Finansal Tabloların İlkeleri",
    hariciIndex: 2,
    description:
      "Bilançonun ve gelir tablosunun düzenlenme esaslarını, varlık-kaynak ilkelerini sınayan detaylı bir çalışma.",
    focusAreas: [
      "Finansal tablolarda bulunması gereken nitelikler",
      "Bilanço ve gelir tablosu düzenleme ilkeleri",
      "Varlık, kaynak ve özkaynak sınıflandırmaları"
    ],
    learningObjectives: [
      "Bilançonun zorunlu bileşenlerini sıralamak",
      "Varlık ve kaynak kalemlerini doğru sınıflandırmak",
      "Gelir tablosu ilkelerinde yapılan hataları tespit etmek"
    ],
    notes:
      "Sorular ağırlıklı olarak kavramsal olmakla birlikte bilanço kalemlerinin doğru konumlandırılmasına odaklanır."
  },
  {
    sectionNumber: 3,
    slug: "bilanco_1",
    storageKey: "bilancoHarici1State_v1",
    title: "Bilanço - 1",
    hariciIndex: 3,
    description:
      "Bilanço kalemlerinin kapsamı, sınıflandırması ve sermaye yapısı üzerindeki etkilerini ölçen soru seti.",
    focusAreas: [
      "Dönen ve duran varlık bileşenleri",
      "Özkaynak ve yabancı kaynak grupları",
      "Bilançonun yapısal özellikleri"
    ],
    learningObjectives: [
      "Bilanço hesap gruplarını doğru yorumlamak",
      "Özkaynak ve borç kalemlerini ayırt etmek",
      "Aktifi/pasifi düzenleyici hesapları doğru konumlandırmak"
    ],
    notes:
      "Tamamı kavramsal olan sorular bilançonun temel yapısı ve terminolojisine odaklanır."
  },
  {
    sectionNumber: 4,
    slug: "bilanco_2",
    storageKey: "bilancoHarici2State_v1",
    title: "Bilanço - 2",
    hariciIndex: 4,
    description:
      "Bilançonun yorumlanması, varlık ve kaynak kalemlerinin dinamiklerini irdeleyen ikinci kavramsal set.",
    focusAreas: [
      "Kısa ve uzun vadeli kaynak ayrımı",
      "Özkaynak ve yedek türleri",
      "Bilançonun statik/dinamik özellikleri"
    ],
    learningObjectives: [
      "Bilançoda yer almaması gereken kalemleri tespit etmek",
      "Kaynak grupları arasındaki farkları açıklamak",
      "Bilançonun kapsamına ilişkin hataları ayırt etmek"
    ],
    notes:
      "Sorular bilançonun kavramsal tanımlarını pekiştirir; tablo veya hesaplama gerektirmez."
  },
  {
    sectionNumber: 5,
    slug: "gelir_tablosu",
    storageKey: "gelirTablosuHariciState_v1",
    title: "Gelir Tablosu",
    hariciIndex: 5,
    description:
      "Gelir tablosu kalemleri, sınıflandırması ve bilançoyla ilişkisini sorgulayan kapsamlı test.",
    focusAreas: [
      "Gelir tablosu kalemlerinin kapsamı",
      "Gelir tablosu ve bilanço ilişkisi",
      "Olağan, olağandışı ve arızi kalemlerin ayrımı"
    ],
    learningObjectives: [
      "Gelir tablosunda yer alan/almayan kalemleri doğru işaretlemek",
      "Gelir ve gider sınıflandırmalarındaki hataları yakalamak",
      "Gelir tablosu düzenleme ilkelerini yorumlamak"
    ],
    notes:
      "Bazı sorular bilanço ile karşılaştırma yapar; ilgili kalemler için kısa açıklamalar sağlanmıştır."
  },
  {
    sectionNumber: 6,
    slug: "analiz_teknikleri_giris",
    storageKey: "analizTeknikleriHariciState_v1",
    title: "Finansal Analiz Tekniklerine Giriş",
    hariciIndex: 6,
    description:
      "Karşılaştırmalı, yatay, dikey ve trend analizlerine dair temel kavram ve uygulamaları içeren karma test.",
    focusAreas: [
      "Karşılaştırmalı tablo analizi prensipleri",
      "Yatay ve dikey analiz kavramları",
      "Trend (eğilim) analizinde yorumlama"
    ],
    learningObjectives: [
      "Analiz tekniklerini tanım ve kullanım açısından eşleştirmek",
      "Verilen tablolardan doğru analiz türünü çıkarmak",
      "Analiz sonuçlarını yüzdesel olarak yorumlamak"
    ],
    notes:
      "Tablo ve hesaplamaya dayalı sorularda ilgili veriler soru içinde HTML tablo olarak sunulur."
  },
  {
    sectionNumber: 7,
    slug: "dikey_yuzdeler_analizi",
    storageKey: "dikeyYuzdelerHariciState_v1",
    title: "Dikey Yüzdeler Analizi",
    hariciIndex: 7,
    description:
      "Tek dönemli finansal tablolarda grup ve toplam içi yüzde dağılımlarını hesaplatan sorular.",
    focusAreas: [
      "Dikey analiz mantığı ve 100 kabul edilen kalemler",
      "Dikey yüzde yorumları",
      "Aktif/pasif dağılımlarının değerlendirilmesi"
    ],
    learningObjectives: [
      "Verilen verilerden dikey yüzde hesaplamak",
      "Net satış ve aktif toplam referanslarını belirlemek",
      "Dikey analiz sonuçlarıyla işletme yapısını yorumlamak"
    ],
    notes:
      "Soruların bir kısmı tablo desteklidir; hesaplamalar için gerekli veriler soruda sunulmaktadır."
  },
  {
    sectionNumber: 8,
    slug: "egilim_yuzdeleri_analizi",
    storageKey: "egilimYuzdeleriHariciState_v1",
    title: "Eğilim Yüzdeleri (Trend) Analizi",
    hariciIndex: 8,
    description:
      "Trend analizinin yorumlanması, endeks hesapları ve baz yıl seçimlerine odaklanan soru seti.",
    focusAreas: [
      "Trend analizi tanımı ve kapsamı",
      "Baz yıl seçimi ve yorumlama",
      "Trend analizinin diğer tekniklerle ilişkisi"
    ],
    learningObjectives: [
      "Trend analizi adımlarını açıklamak",
      "Baz yıl ve yüzdeleri doğru hesaplamak",
      "Trend analizine ilişkin yanlış ifadeleri ayıklamak"
    ],
    notes:
      "Tablo içeren sorularda endeks değerleri soru metninde paylaşılır; hesaplamalar için ek bilgi gerekmez."
  },
  {
    sectionNumber: 9,
    slug: "likidite_oranlari",
    storageKey: "likiditeOranlariHariciState_v1",
    title: "Likidite Oranları",
    hariciIndex: 9,
    description:
      "Cari, likidite, nakit ve stok bağımlılık oranlarını hesaplatan kapsamlı tablo destekli test seti.",
    focusAreas: [
      "Likidite oranlarının tanımı ve ideal seviyeleri",
      "Çalışma sermayesi ve stok bağımlılığı",
      "Örnek finansal tablolar üzerinden oran hesaplama"
    ],
    learningObjectives: [
      "Verilen verilerden cari, asit-test ve nakit oranlarını hesaplamak",
      "Likidite oranlarına ilişkin yorumları değerlendirmek",
      "Çalışma sermayesi üzerindeki etkileri analiz etmek"
    ],
    notes:
      "Çok sayıda tablo ve hesaplama içerir; oran hesapları otomatik raporlamadan hariç tutulur."
  },
  {
    sectionNumber: 10,
    slug: "faaliyet_oranlari",
    storageKey: "faaliyetOranlariHariciState_v1",
    title: "Faaliyet Oranları",
    hariciIndex: 10,
    description:
      "Stok, alacak, aktif ve duran varlık devir hızlarını ölçen, uygulamalı faaliyet oranı soruları.",
    focusAreas: [
      "Faaliyet oranı formülleri",
      "Tahsil ve stokta kalma süreleri",
      "Devir hızlarının yorumlanması"
    ],
    learningObjectives: [
      "Faaliyet oranlarının formüllerini hatırlamak",
      "Verilen finansal verilerden ilgili oranları hesaplamak",
      "Oran sonuçlarının işletme performansına etkisini yorumlamak"
    ],
    notes:
      "Birden çok veri seti içerir; hesaplamaya dayalı sorularda sonuçlar raporlama analizine dahil edilmez."
  }
];

function ensureSourceFileExists() {
  if (!fs.existsSync(taslakSource)) {
    throw new Error(`Kaynak dosya bulunamadı: ${taslakSource}`);
  }
}

function readTaslak() {
  const raw = fs.readFileSync(taslakSource, "utf8");
  return raw.split(/\r?\n/);
}

function stripMarkdownBold(str) {
  return str.replace(/\*\*/g, "");
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ");
}

function normalizeWhitespace(str) {
  return str.replace(/\s+/g, " ").trim();
}

function appendClassName(existing, className) {
  const classes = existing.split(/\s+/).filter(Boolean);
  if (!classes.includes(className)) {
    classes.push(className);
  }
  return classes.join(" ");
}

function ensureTableClasses(line) {
  return line.replace(/<table([^>]*)>/gi, (match, attrs = "") => {
    const hasClass = /\bclass\s*=/.test(attrs);
    if (!hasClass) {
      const trimmed = attrs.trim();
      return `<table class="question-table"${trimmed ? ` ${trimmed}` : ""}>`;
    }
    return `<table${attrs.replace(
      /class\s*=\s*(['"])([^'"]*)\1/gi,
      (fullMatch, quote, classValue) => `class=${quote}${appendClassName(classValue, "question-table")}${quote}`
    )}>`;
  });
}

function ensurePreClasses(line) {
  return line.replace(/<pre([^>]*)>/gi, (match, attrs = "") => {
    const hasClass = /\bclass\s*=/.test(attrs);
    if (!hasClass) {
      const trimmed = attrs.trim();
      return `<pre class="question-pre"${trimmed ? ` ${trimmed}` : ""}>`;
    }
    return `<pre${attrs.replace(
      /class\s*=\s*(['"])([^'"]*)\1/gi,
      (fullMatch, quote, classValue) => `class=${quote}${appendClassName(classValue, "question-pre")}${quote}`
    )}>`;
  });
}

function normalizeBodyLine(line) {
  if (!line) return line;
  let normalized = line.replace(/\*\*/g, "");
  normalized = normalized.replace(/<\/?(strong|b)>/gi, "");
  normalized = ensureTableClasses(normalized);
  normalized = ensurePreClasses(normalized);
  return normalized;
}

function determineIsQuantitative(text, options) {
  const base = `${text} ${options.map(opt => opt.text).join(" ")}`;
  return /<table|<pre|(\d{3,})|%/.test(base);
}

function toJsString(str) {
  return JSON.stringify(str);
}

function questionToCode(question) {
  const lines = [];
  lines.push("  {");
  lines.push(`    number: ${question.number},`);
  lines.push(`    text: ${toJsString(question.text)},`);
  lines.push("    options: [");
  question.options.forEach((opt, idx) => {
    const suffix = idx === question.options.length - 1 ? "" : ",";
    lines.push(
      `      { label: '${opt.label}', text: ${toJsString(opt.text)} }${suffix}`
    );
  });
  lines.push("    ],");
  lines.push(`    correctLabel: '${question.correctLabel}'${question.isQuantitative ? "," : ""}`);
  if (question.isQuantitative) {
    lines.push("    isQuantitative: true");
  }
  lines.push("  }");
  return lines.join("\n");
}

function formatArray(array, indent = 2) {
  const innerIndent = " ".repeat(indent + 2);
  const closingIndent = " ".repeat(indent);
  if (!array.length) return "[]";
  const lines = array.map(item => `${innerIndent}${toJsString(item)}`);
  return `[\n${lines.join(",\n")}\n${closingIndent}]`;
}

function buildModuleFileContent(moduleDef, questions) {
  const questionCode = questions.map(questionToCode).join(",\n");
  const storageKey = moduleDef.storageKey;

  return `const moduleQuestions = [
${questionCode}
];

const moduleMeta = {
  id: '${moduleDef.slug}',
  title: '${moduleDef.title}',
  description: ${toJsString(moduleDef.description)},
  focusAreas: ${formatArray(moduleDef.focusAreas, 2)},
  learningObjectives: ${formatArray(moduleDef.learningObjectives, 2)},
  additionalNotes: ${toJsString(moduleDef.notes)},
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = '${storageKey}';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
`;
}

function buildModuleHtmlContent(moduleDef, dataFileName) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harici Test ${moduleDef.hariciIndex} - ${moduleDef.title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Harici Test ${moduleDef.hariciIndex}: ${moduleDef.title}</h1>
        <p>PDF kaynaklı soru seti</p>
    </header>

    <nav class="top-nav">
        <ul>
            <li><a href="#home" class="nav-link active" data-target="home">Ana Sayfa</a></li>
            <li><a href="#module-overview" class="nav-link" data-target="module-overview">Modül Tanıtımı</a></li>
            <li><a href="#module-quiz" class="nav-link" data-target="module-quiz">Modül Testi</a></li>
            <li><a href="#progress" class="nav-link" data-target="progress">İlerleme</a></li>
        </ul>
    </nav>
    <div class="home-link-container">
        <a href="index.html" class="back-to-hub">Ana Menüye Dön</a>
    </div>

    <main class="container">
        <section id="home" class="section active">
            <h2>Harici Soru Seti</h2>
            <p>Bu test, PDF kaynaklı dış çalışmalardan derlenen <strong>${moduleDef.title}</strong> sorularını içerir. Tablolu sorular özgün biçimleriyle sunulmuştur.</p>
        </section>

        <section id="module-overview" class="section">
             <h2>Harici Test ${moduleDef.hariciIndex} &mdash; ${moduleDef.title}</h2>
             <div id="moduleOverviewContent"></div>
        </section>

        <section id="module-quiz" class="section">
            <h2>Modül Testi</h2>
            <div class="progress-wrapper">
                <span id="quizProgressLabel">0% tamamlandı</span>
                <div class="progress-bar">
                    <div class="progress-bar-fill" id="quizProgressFill"></div>
                </div>
            </div>
            <div id="quizQuestionContainer" class="quiz-container"></div>
            <div id="quizFeedback" class="feedback"></div>
            <div class="quiz-navigation">
                <button id="prevQuestionBtn" class="btn secondary">Önceki Soru</button>
                <button id="nextQuestionBtn" class="btn">Sonraki Soru</button>
            </div>
            <button id="submitQuizBtn" class="btn">Testi Bitir</button>
            <button id="resetQuizBtn" class="btn reset">Testi Sıfırla</button>
            <div id="quizSummary" class="results"></div>
        </section>

        <section id="progress" class="section">
            <h2>İlerleme ve Skorlar</h2>
            <div class="scoreboard">
                <div class="score-card">
                    <h3>Modül Puanı</h3>
                    <p>Doğru Sayısı: <strong id="moduleCorrect">0</strong></p>
                    <p>Cevaplanan Soru: <strong id="moduleAnswered">0</strong> / <strong id="moduleTotal">0</strong></p>
                    <p>Başarı Oranı: <strong id="moduleAccuracy">0%</strong></p>
                </div>
                 <div class="score-card" id="challenges">
                     <h3>Tekrar Etmeniz Gerekenler</h3>
                    <ul id="challengeList"><li>Testi çözdükten sonra burada listelenir.</li></ul>
                    <button id="retryChallengesBtn" class="btn">Bu Soruları Tekrar Çöz</button>
                </div>
            </div>
            <button id="resetProgressBtn" class="btn reset">Tüm İlerlemeyi Sıfırla</button>
        </section>
    </main>

    <footer><small>© 2025 Finansal Yönetim Harici Test Setleri</small></footer>

    <script src="${dataFileName}"></script>
    <script src="module_engine.js"></script>
</body>
</html>
`;
}

function createOutputDirIfNeeded() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
}

function parseSections(lines) {
  const sections = [];
  let currentSection = null;
  let currentQuestion = null;

  const questionRegex = /^\s*\*\*\s*(\d+)\.\s*(.*?)\s*\*\*\s*$/;
  const sectionRegex = /^\s*###\s+(\d+)\.\s+(.*)$/;

  const finalizeQuestion = () => {
    if (!currentQuestion || !currentSection) return;
    const { number, prompt, blockLines } = currentQuestion;
    const blockLinesCopy = [...blockLines];
    const optionLineIndexes = new Set();
    const optionsMap = new Map();
    let correctLabel = null;

    blockLinesCopy.forEach((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return;
      const simpleMatch = trimmed.match(/^(?:\*\*)?([A-E])\)(?:\*\*)?\s*(.*)$/);
      if (simpleMatch) {
        const label = simpleMatch[1].toUpperCase();
        let text = stripMarkdownBold(simpleMatch[2]).trim();
        const isCorrect = trimmed.startsWith("**");
        if (!text) text = label;
        optionsMap.set(label, { label, text });
        if (isCorrect) correctLabel = label;
        optionLineIndexes.add(index);
      }
    });

    const blockText = blockLinesCopy.join("\n");
    const tableRowRegex = /<tr>([\s\S]*?)<\/tr>/gi;
    let match;
    while ((match = tableRowRegex.exec(blockText)) !== null) {
      const rowHtml = match[1];
      const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
      const cells = [];
      let cellMatch;
      while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
        cells.push(cellMatch[1].trim());
      }
      if (!cells.length) continue;
      const labelCellPlain = normalizeWhitespace(stripHtml(cells[0]));
      const labelMatch = labelCellPlain.match(/([A-E])\)/i);
      if (!labelMatch) continue;
      const label = labelMatch[1].toUpperCase();
      const rowIsCorrect = /<strong>|<b>/i.test(cells[0]);
      const payload = cells
        .slice(1)
        .map(cell => normalizeWhitespace(stripHtml(cell)))
        .filter(Boolean);
      const text = payload.length
        ? payload.join(" | ")
        : normalizeWhitespace(stripHtml(rowHtml)) || label;
      optionsMap.set(label, { label, text });
      if (rowIsCorrect) correctLabel = label;
    }

    const options = Array.from(optionsMap.values()).sort((a, b) =>
      a.label.localeCompare(b.label, "tr", { sensitivity: "base" })
    );

    const bodyLines = blockLinesCopy.filter((_, idx) => !optionLineIndexes.has(idx)).map(normalizeBodyLine);
    const bodyText = bodyLines.join("\n").trim();
    const promptText = stripMarkdownBold(prompt).trim();
    const combinedText = bodyText ? `${promptText}\n\n${bodyText}` : promptText;
    const questionText = normalizeBodyLine(combinedText);

    if (!correctLabel && options.length) {
      correctLabel = options[0].label;
    }

    currentSection.questions.push({
      number,
      text: questionText,
      options,
      correctLabel,
      isQuantitative: determineIsQuantitative(questionText, options)
    });
    currentQuestion = null;
  };

  const finalizeSection = () => {
    if (currentSection) {
      sections.push(currentSection);
    }
    currentSection = null;
  };

  lines.forEach(line => {
    if (!line) line = "";
    if (/^\s*\*\*\*\s*$/.test(line)) {
      return;
    }

    const sectionMatch = line.match(sectionRegex);
    if (sectionMatch) {
      finalizeQuestion();
      finalizeSection();
      currentSection = {
        index: Number.parseInt(sectionMatch[1], 10),
        title: sectionMatch[2].trim(),
        questions: []
      };
      currentQuestion = null;
      return;
    }

    const questionMatch = line.match(questionRegex);
    if (questionMatch && currentSection) {
      finalizeQuestion();
      currentQuestion = {
        number: Number.parseInt(questionMatch[1], 10),
        prompt: questionMatch[2],
        blockLines: []
      };
      return;
    }

    if (currentQuestion) {
      currentQuestion.blockLines.push(line);
    }
  });

  finalizeQuestion();
  finalizeSection();

  return sections;
}

function writeModuleFiles(sections) {
  const sectionMap = new Map(sections.map(section => [section.index, section]));

  moduleDefinitions.forEach(moduleDef => {
    const section = sectionMap.get(moduleDef.sectionNumber);
    if (!section) {
      console.warn(`Uyarı: ${moduleDef.sectionNumber}. bölüm taslakta bulunamadı.`);
      return;
    }

    const dataFileName = `${moduleDef.slug}_data.js`;
    const htmlFileName = `${moduleDef.slug}_module.html`;
    const dataFilePath = path.join(outputDir, dataFileName);
    const htmlFilePath = path.join(outputDir, htmlFileName);

    const moduleContent = buildModuleFileContent(moduleDef, section.questions);
    fs.writeFileSync(dataFilePath, moduleContent, "utf8");

    const htmlContent = buildModuleHtmlContent(moduleDef, dataFileName);
    fs.writeFileSync(htmlFilePath, htmlContent, "utf8");
  });
}

function main() {
  ensureSourceFileExists();
  createOutputDirIfNeeded();
  const lines = readTaslak();
  const sections = parseSections(lines);
  writeModuleFiles(sections);
  console.log("Harici finans modülleri başarıyla üretildi.");
}

main();


