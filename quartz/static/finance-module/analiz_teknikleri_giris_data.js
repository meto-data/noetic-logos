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
    text: "Aşağıda yüzdelik olarak değişimi verilen ilgili kalemlerin hangisinin hesaplaması doğru değildir?\n\n<br>\n<table class=\"question-table\">\n<thead>\n  <tr>\n    <th></th>\n    <th>Kalem</th>\n    <th>Önceki Yıl</th>\n    <th>Cari Yıl</th>\n    <th>Artış veya Azalış (%)</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <td>A)</td>\n    <td>Hazır Değerler</td>\n    <td>250</td>\n    <td>750</td>\n    <td>200</td>\n  </tr>\n  <tr>\n    <td>B)</td>\n    <td>Menkul Kıymetler</td>\n    <td>200</td>\n    <td>0</td>\n    <td>hesaplanamaz</td>\n  </tr>\n  <tr>\n    <td>C)</td>\n    <td>Ticari Alacaklar</td>\n    <td>1000</td>\n    <td>1500</td>\n    <td>50</td>\n  </tr>\n  <tr>\n    <td>D)</td>\n    <td>Stoklar</td>\n    <td>1200</td>\n    <td>1800</td>\n    <td>50</td>\n  </tr>\n    <tr>\n    <td>E)</td>\n    <td>Gelir Tahakkukları</td>\n    <td>0</td>\n    <td>150</td>\n    <td>hesaplanamaz</td>\n  </tr>\n</tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "Hazır Değerler | 250 | 750 | 200" },
      { label: 'B', text: "Menkul Kıymetler | 200 | 0 | hesaplanamaz" },
      { label: 'C', text: "Ticari Alacaklar | 1000 | 1500 | 50" },
      { label: 'D', text: "Stoklar | 1200 | 1800 | 50" },
      { label: 'E', text: "Gelir Tahakkukları | 0 | 150 | hesaplanamaz" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 4,
    text: "Yukarıdaki soruda hangi analiz tekniği uygulanmıştır?",
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
    text: "Aşağıdaki finansal verileri verilen işletmenin ilgili kalemlerindeki yüzdelik (oransal) değişimler aşağıdakilerden hangisinde doğru verilmiştir?\n\n<pre class=\"question-pre\">\n                    Önceki Yıl    Cari Yıl\nMali Borçlar        400           800\nTicari Borçlar      1.200         1.800\nMenkul Kıymetler    0             200\nTicari Alacaklar    800           1.000\nNet Satışlar        15.000        22.500\n</pre>\n<table class=\"question-table\">\n<thead>\n  <tr>\n    <th></th>\n    <th>Mali Borçlar</th>\n    <th>Ticari Borçlar</th>\n    <th>Menkul Kıymetler</th>\n    <th>Ticari Alacaklar</th>\n    <th>Net Satışlar</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <td>A)</td>\n    <td>200</td>\n    <td>50</td>\n    <td>-</td>\n    <td>50</td>\n    <td>50</td>\n  </tr>\n  <tr>\n    <td>B)</td>\n    <td>100</td>\n    <td>40</td>\n    <td>100</td>\n    <td>25</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>C)</td>\n    <td>100</td>\n    <td>50</td>\n    <td>-</td>\n    <td>25</td>\n    <td>50</td>\n  </tr>\n  <tr>\n    <td>D)</td>\n    <td>200</td>\n    <td>33</td>\n    <td>100</td>\n    <td>50</td>\n    <td>25</td>\n  </tr>\n    <tr>\n    <td>E)</td>\n    <td>100</td>\n    <td>100</td>\n    <td>-</td>\n    <td>25</td>\n    <td>50</td>\n  </tr>\n</tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "200 | 50 | - | 50 | 50" },
      { label: 'B', text: "100 | 40 | 100 | 25 | 25" },
      { label: 'C', text: "100 | 50 | - | 25 | 50" },
      { label: 'D', text: "200 | 33 | 100 | 50 | 25" },
      { label: 'E', text: "100 | 100 | - | 25 | 50" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 7,
    text: "Aşağıdaki finansal verileri verilen işletmenin ilgili kalemlerindeki yüzdelik (oransal) değişimler aşağıdakilerden hangisinde doğru verilmiştir?\n\n<pre class=\"question-pre\">\n                    Önceki yıl    Cari yıl\nKasa                600           400\nTicari mallar       2500          3000\nBanka kredileri     1600          1200\nİştirakler          4000          4000\nÖzel fonlar         2.000         0\n</pre>\n<table class=\"question-table\">\n<thead>\n  <tr>\n    <th></th>\n    <th>Kasa</th>\n    <th>Ticari Mallar</th>\n    <th>Banka Kredileri</th>\n    <th>İştirakler</th>\n    <th>Özel Fonlar</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <td>A)</td>\n    <td>33</td>\n    <td>20</td>\n    <td>25</td>\n    <td>0</td>\n    <td>100</td>\n  </tr>\n  <tr>\n    <td>B)</td>\n    <td>-66</td>\n    <td>20</td>\n    <td>-20</td>\n    <td>0</td>\n    <td>Tanımsız</td>\n  </tr>\n  <tr>\n    <td>C)</td>\n    <td>-33</td>\n    <td>25</td>\n    <td>20</td>\n    <td>-</td>\n    <td>Tanımsız</td>\n  </tr>\n  <tr>\n    <td>D)</td>\n    <td>-33</td>\n    <td>20</td>\n    <td>-25</td>\n    <td>0</td>\n    <td>-100</td>\n  </tr>\n    <tr>\n    <td>E)</td>\n    <td>-25</td>\n    <td>20</td>\n    <td>-20</td>\n    <td>-</td>\n    <td>100</td>\n  </tr>\n</tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "33 | 20 | 25 | 0 | 100" },
      { label: 'B', text: "-66 | 20 | -20 | 0 | Tanımsız" },
      { label: 'C', text: "-33 | 25 | 20 | - | Tanımsız" },
      { label: 'D', text: "-33 | 20 | -25 | 0 | -100" },
      { label: 'E', text: "-25 | 20 | -20 | - | 100" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 8,
    text: "Aşağıdaki finansal verileri verilen işletmenin ilgili kalemlerindeki yüzdelik (oransal) değişimler aşağıdakilerden hangisinde doğru verilmiştir?\n\n<pre class=\"question-pre\">\n                    Önceki Yıl    Cari Yıl\nDönen Varlıklar     5.000         6000\nDuran Varlıklar     8.000         10.000\nK.V.Y.K.            4.000         5.000\nU.V.Y.K             4.000         3.000\nÖzkaynaklar         ?             ?\n</pre>\n<table class=\"question-table\">\n<thead>\n  <tr>\n    <th></th>\n    <th>Dönen Varlıklar</th>\n    <th>Duran Varlıklar</th>\n    <th>KVYK</th>\n    <th>UVYK</th>\n    <th>Özkaynaklar</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <td>A)</td>\n    <td>20</td>\n    <td>20</td>\n    <td>25</td>\n    <td>25</td>\n    <td>50</td>\n  </tr>\n  <tr>\n    <td>B)</td>\n    <td>20</td>\n    <td>25</td>\n    <td>25</td>\n    <td>-25</td>\n    <td>60</td>\n  </tr>\n  <tr>\n    <td>C)</td>\n    <td>25</td>\n    <td>20</td>\n    <td>20</td>\n    <td>-20</td>\n    <td>40</td>\n  </tr>\n  <tr>\n    <td>D)</td>\n    <td>25</td>\n    <td>25</td>\n    <td>20</td>\n    <td>25</td>\n    <td>50</td>\n  </tr>\n    <tr>\n    <td>E)</td>\n    <td>25</td>\n    <td>25</td>\n    <td>20</td>\n    <td>-25</td>\n    <td>60</td>\n  </tr>\n</tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "20 | 20 | 25 | 25 | 50" },
      { label: 'B', text: "20 | 25 | 25 | -25 | 60" },
      { label: 'C', text: "25 | 20 | 20 | -20 | 40" },
      { label: 'D', text: "25 | 25 | 20 | 25 | 50" },
      { label: 'E', text: "25 | 25 | 20 | -25 | 60" }
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
  additionalNotes: "Tablo ve hesaplamaya dayalı sorularda ilgili veriler soru içinde HTML tablo olarak sunulur.",
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
