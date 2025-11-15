const moduleQuestions = [
  {
    number: 1,
    text: "Aşağıdakilerden hangisi finansal tablolar analizinde kullanılan analiz tekniklerinden değildir?",
    options: [
      { label: 'A', text: "Karşılaştırmalı analiz" },
      { label: 'B', text: "Trend analizi" },
      { label: 'C', text: "Oran analizi" },
      { label: 'D', text: "Yatay analiz" },
      { label: 'E', text: "Dinamik analiz" }
    ],
    correctLabel: 'E'
  },
  {
    number: 2,
    text: "İşletmenin 2 farklı dönem veya tarihteki verilerinin karşılaştırılarak tutar ve yüzde olarak ne yönde değiştiğinin belirlendiği analiz tekniği aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Yatay analiz" },
      { label: 'B', text: "Dikey analiz" },
      { label: 'C', text: "Trend analizi" },
      { label: 'D', text: "Oran analizi" },
      { label: 'E', text: "Yüzde analizi" }
    ],
    correctLabel: 'A'
  },
  {
    number: 3,
    text: "Referans panelinde yüzdelik olarak değişimi verilen ilgili kalemlerin hangisinin hesaplaması doğru değildir?",
    contextHtml: `
      <table class="financial-table">
        <thead>
          <tr>
            <th>Kalem</th>
            <th>Önceki Yıl</th>
            <th>Cari Yıl</th>
            <th>Artış veya Azalış (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hazır Değerler</td>
            <td class="numeric">250</td>
            <td class="numeric">750</td>
            <td class="numeric">200</td>
          </tr>
          <tr>
            <td>Menkul Kıymetler</td>
            <td class="numeric">200</td>
            <td class="numeric">0</td>
            <td>hesaplanamaz</td>
          </tr>
          <tr>
            <td>Ticari Alacaklar</td>
            <td class="numeric">1.000</td>
            <td class="numeric">1.500</td>
            <td class="numeric">50</td>
          </tr>
          <tr>
            <td>Stoklar</td>
            <td class="numeric">1.200</td>
            <td class="numeric">1.800</td>
            <td class="numeric">50</td>
          </tr>
          <tr>
            <td>Gelir Tahakkukları</td>
            <td class="numeric">0</td>
            <td class="numeric">150</td>
            <td>hesaplanamaz</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "Hazır Değerler" },
      { label: 'B', text: "Menkul Kıymetler" },
      { label: 'C', text: "Ticari Alacaklar" },
      { label: 'D', text: "Stoklar" },
      { label: 'E', text: "Gelir Tahakkukları" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 4,
    text: "Yukarıdaki soruda hangi analiz tekniği uygulanmıştır?",
    getContextForQuestion: 3,
    options: [
      { label: 'A', text: "Mukayeseli analiz" },
      { label: 'B', text: "Eğilim yüzdeleri analizi" },
      { label: 'C', text: "Dış analiz" },
      { label: 'D', text: "Dikey analiz" },
      { label: 'E', text: "Yüzde analiz" }
    ],
    correctLabel: 'A'
  },
  {
    number: 5,
    text: "Karşılaştırmalı analiz ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      { label: 'A', text: "Analiz tekniğinin uygulanabilmesi için en az iki yıl gereklidir." },
      { label: 'B', text: "Dinamik analizdir." },
      { label: 'C', text: "Fark ve yüzdelerdeki artış yada azalışa göre işletmenin geçmiş dönemine göre karşılaştırması yapılır." },
      { label: 'D', text: "İşletmenin kendi içinde analiz edilmesini sağlar." },
      { label: 'E', text: "Gelir tablosuna karşılaştırmalı analiz tekniği uygulanırken net satışlar 100 olarak kabul edilir." }
    ],
    correctLabel: 'E',
    isQuantitative: true
  },
  {
    number: 6,
    text: "Aşağıdaki finansal verileri verilen işletmenin ilgili kalemlerindeki yüzdelik (oransal) değişimler hangisinde doğru verilmiştir?",
    contextHtml: `
      <table class="financial-table">
        <thead>
          <tr>
            <th>Kalem</th>
            <th>Önceki Yıl</th>
            <th>Cari Yıl</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mali Borçlar</td>
            <td class="numeric">400</td>
            <td class="numeric">800</td>
          </tr>
          <tr>
            <td>Ticari Borçlar</td>
            <td class="numeric">1.200</td>
            <td class="numeric">1.800</td>
          </tr>
          <tr>
            <td>Menkul Kıymetler</td>
            <td class="numeric">0</td>
            <td class="numeric">200</td>
          </tr>
          <tr>
            <td>Ticari Alacaklar</td>
            <td class="numeric">800</td>
            <td class="numeric">1.000</td>
          </tr>
          <tr>
            <td>Net Satışlar</td>
            <td class="numeric">15.000</td>
            <td class="numeric">22.500</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "Mali Borçlar: 200 | Ticari Borçlar: 50 | Menkul Kıymetler: - | Ticari Alacaklar: 50 | Net Satışlar: 50" },
      { label: 'B', text: "Mali Borçlar: 100 | Ticari Borçlar: 40 | Menkul Kıymetler: 100 | Ticari Alacaklar: 25 | Net Satışlar: 25" },
      { label: 'C', text: "Mali Borçlar: 100 | Ticari Borçlar: 50 | Menkul Kıymetler: - | Ticari Alacaklar: 25 | Net Satışlar: 50" },
      { label: 'D', text: "Mali Borçlar: 200 | Ticari Borçlar: 33 | Menkul Kıymetler: 100 | Ticari Alacaklar: 50 | Net Satışlar: 25" },
      { label: 'E', text: "Mali Borçlar: 100 | Ticari Borçlar: 100 | Menkul Kıymetler: - | Ticari Alacaklar: 25 | Net Satışlar: 50" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 7,
    text: "Aşağıdaki finansal verileri verilen işletmenin ilgili kalemlerindeki yüzdelik (oransal) değişimler hangisinde doğru verilmiştir?",
    contextHtml: `
      <table class="financial-table">
        <thead>
          <tr>
            <th>Kalem</th>
            <th>Önceki Yıl</th>
            <th>Cari Yıl</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kasa</td>
            <td class="numeric">600</td>
            <td class="numeric">400</td>
          </tr>
          <tr>
            <td>Ticari Mallar</td>
            <td class="numeric">2.500</td>
            <td class="numeric">3.000</td>
          </tr>
          <tr>
            <td>Banka Kredileri</td>
            <td class="numeric">1.600</td>
            <td class="numeric">1.200</td>
          </tr>
          <tr>
            <td>İştirakler</td>
            <td class="numeric">4.000</td>
            <td class="numeric">4.000</td>
          </tr>
          <tr>
            <td>Özel Fonlar</td>
            <td class="numeric">2.000</td>
            <td class="numeric">0</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "Kasa: 33 | Ticari Mallar: 20 | Banka Kredileri: 25 | İştirakler: 0 | Özel Fonlar: 100" },
      { label: 'B', text: "Kasa: -66 | Ticari Mallar: 20 | Banka Kredileri: -20 | İştirakler: 0 | Özel Fonlar: Tanımsız" },
      { label: 'C', text: "Kasa: -33 | Ticari Mallar: 25 | Banka Kredileri: 20 | İştirakler: - | Özel Fonlar: Tanımsız" },
      { label: 'D', text: "Kasa: -33 | Ticari Mallar: 20 | Banka Kredileri: -25 | İştirakler: 0 | Özel Fonlar: -100" },
      { label: 'E', text: "Kasa: -25 | Ticari Mallar: 20 | Banka Kredileri: -20 | İştirakler: - | Özel Fonlar: 100" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 8,
    text: "Aşağıdaki finansal verileri verilen işletmenin ilgili kalemlerindeki yüzdelik (oransal) değişimler hangisinde doğru verilmiştir?",
    contextHtml: `
      <table class="financial-table">
        <thead>
          <tr>
            <th>Kalem</th>
            <th>Önceki Yıl</th>
            <th>Cari Yıl</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dönen Varlıklar</td>
            <td class="numeric">5.000</td>
            <td class="numeric">6.000</td>
          </tr>
          <tr>
            <td>Duran Varlıklar</td>
            <td class="numeric">8.000</td>
            <td class="numeric">10.000</td>
          </tr>
          <tr>
            <td>Kısa Vadeli Yabancı Kaynaklar (KVYK)</td>
            <td class="numeric">4.000</td>
            <td class="numeric">5.000</td>
          </tr>
          <tr>
            <td>Uzun Vadeli Yabancı Kaynaklar (UVYK)</td>
            <td class="numeric">4.000</td>
            <td class="numeric">3.000</td>
          </tr>
          <tr>
            <td>Özkaynaklar</td>
            <td class="numeric">?</td>
            <td class="numeric">?</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top: 10px; font-style: italic; font-size: 0.9em;">Not: Özkaynaklar bilanço eşitliğinden hesaplanabilir.</p>
    `.trim(),
    options: [
      { label: 'A', text: "Dönen Varlıklar: 20 | Duran Varlıklar: 20 | KVYK: 25 | UVYK: 25 | Özkaynaklar: 50" },
      { label: 'B', text: "Dönen Varlıklar: 20 | Duran Varlıklar: 25 | KVYK: 25 | UVYK: -25 | Özkaynaklar: 60" },
      { label: 'C', text: "Dönen Varlıklar: 25 | Duran Varlıklar: 20 | KVYK: 20 | UVYK: -20 | Özkaynaklar: 40" },
      { label: 'D', text: "Dönen Varlıklar: 25 | Duran Varlıklar: 25 | KVYK: 20 | UVYK: 25 | Özkaynaklar: 50" },
      { label: 'E', text: "Dönen Varlıklar: 25 | Duran Varlıklar: 25 | KVYK: 20 | UVYK: -25 | Özkaynaklar: 60" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 9,
    text: "Aşağıdakilerden hangisi karşılaştırmalı tablolar analiz tekniğinin özelliklerinden değildir?",
    options: [
      { label: 'A', text: "Yapılacak yorumlarda önceki döneme göre değişimin tutarı ve oranı (%) birlikte değerlendirilmelidir." },
      { label: 'B', text: "Kapsamına göre dinamik analizidir." },
      { label: 'C', text: "Analizi yapılacak finansal tabloların aynı muhasebe kuram ve ilkelerine göre belirlenmiş olması gerekir." },
      { label: 'D', text: "Finansal tabloların dönem uzunluklarının eşit olması" },
      { label: 'E', text: "Analizde seçilen baz yılın olağanüstü olayların yaşanmadığı bir yıl olması gerekir." }
    ],
    correctLabel: 'E',
    isQuantitative: true
  },
  {
    number: 10,
    text: "Finansal tablolar analizinden beklenilen yararın sağlanabilmesi için aşağıdakilerin hangisi gerekli değildir?",
    options: [
      { label: 'A', text: "Finansal tabloların aynı para biriminde ve aynı dilde hazırlanmış olması," },
      { label: 'B', text: "Tablodaki rakamların enflasyonun etkisinden arındırılmış olması," },
      { label: 'C', text: "Tabloların içerdiği bilgilerin aynı muhasebe kuram ve ilkelerine göre belirlenmiş olması," },
      { label: 'D', text: "Analizde sadece bir tek analiz tekniğine yer verilmesi gerekir." },
      { label: 'E', text: "Finansal tabloların dönem uzunluklarının eşit olması," }
    ],
    correctLabel: 'D'
  },
  {
    number: 11,
    text: "Bir işletmenin maddi duran varlıkları önceki döneme göre artmış veya azalmış ise, artış veya azalış üzerinde aşağıdakilerden hangisi etkili olmamıştır?",
    options: [
      { label: 'A', text: "Amortisman oranları artmıştır." },
      { label: 'B', text: "Taşıtlar satılmıştır." },
      { label: 'C', text: "Yeniden değerleme oranları artmıştır" },
      { label: 'D', text: "Binalar satılmıştır." },
      { label: 'E', text: "İştirakler satılmıştır." }
    ],
    correctLabel: 'E'
  }
];

const moduleMeta = {
  id: 'analiz_teknikleri_giris',
  title: 'Finansal Analiz Tekniklerine Giriş',
  description: "Karşılaştırmalı, yatay, dikey ve trend analizlerine dair temel kavram ve uygulamaları içeren karma test.",
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
  additionalNotes: "Tablo ve hesaplamaya dayalı sorularda ilgili veriler referans panelinde sunulur.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'analizTeknikleriHariciState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
