const moduleQuestions = [
  {
    number: 1,
    text: "İşletmelerin kısa vadeli borçlarını ödeyebilme gücünün ölçülmesinde ve çalışma sermayesinin yeterli olup olmadığı hakkında bilgi veren oran grubu aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Faaliyet oranları" },
      { label: 'B', text: "Finansal yapı oranları" },
      { label: 'C', text: "Borsa performans oranları" },
      { label: 'D', text: "Likidite oranları" },
      { label: 'E', text: "Büyüme oranları" }
    ],
    correctLabel: 'D'
  },
  {
    number: 2,
    text: "Net işletme sermayesini belirleyen iki tutarın birbirine oranını aşağıdakilerden hangisi göstermektedir?",
    options: [
      { label: 'A', text: "Likidite oranı" },
      { label: 'B', text: "Finansal kaldıraç oranlı" },
      { label: 'C', text: "Finansman oranı" },
      { label: 'D', text: "Cari oran" },
      { label: 'E', text: "Nakit oran" }
    ],
    correctLabel: 'D'
  },
  {
    number: 3,
    text: "Aşağıda bir işletmeye ait verilmiş olan cari oranlardan hangisinin istenilen düzeyde olduğu söylenilebilir?",
    options: [
      { label: 'A', text: "1" },
      { label: 'B', text: "1,9" },
      { label: 'C', text: "0,5" },
      { label: 'D', text: "3,5" },
      { label: 'E', text: "0,8" }
    ],
    correctLabel: 'B'
  },
  {
    number: 4,
    text: "Kısa vadeli borçlardan, hazır değerler ve menkul kıymetler çıkarıldıktan sonra kalan kısa vadeli borçların, stokların kaç katı olduğunu gösteren oran aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Nakit oran" },
      { label: 'B', text: "Hazır değerler oranı" },
      { label: 'C', text: "Stok bağımlılık oranı" },
      { label: 'D', text: "Stok devir hızı" },
      { label: 'E', text: "Asit test oranı" }
    ],
    correctLabel: 'C'
  },
  {
    number: 5,
    text: "Dönen varlık toplamı 600.000 TL olan bir işletmenin, kısa vadeli yabancı kaynaklar toplamı 200.000 TL ise, işletmenin cari oranı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "3" },
      { label: 'B', text: "4" },
      { label: 'C', text: "2" },
      { label: 'D', text: "1" },
      { label: 'E', text: "1,5" }
    ],
    correctLabel: 'A',
    isQuantitative: true
  },
  {
    number: 6,
    text: "Dönen varlık toplamı 600.000 TL olan bir işletmenin, kısa vadeli yabancı kaynaklar toplamı 200.000 TL ise net işletme(net çalışma) sermayesi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "200.000" },
      { label: 'B', text: "600.000" },
      { label: 'C', text: "400.000" },
      { label: 'D', text: "–200.000" },
      { label: 'E', text: "800.000" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 7,
    text: "İşletmenin genel likidite durumunu yansıtarak, işletmenin net çalışma sermayesi hakkında bilgi veren oran aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Likidite oranı" },
      { label: 'B', text: "Cari oran" },
      { label: 'C', text: "Asit test oranı" },
      { label: 'D', text: "Finansman oranı" },
      { label: 'E', text: "Faiz karşılama oranı" }
    ],
    correctLabel: 'B'
  },
  {
    number: 8,
    text: "Cari oranı 1,875 kısa vadeli yabancı kaynakları 800.000 TL olan işletmenin, çalışma sermayesi ve net çalışma sermayesi aşağıdakilerden hangisidir?\n\n<table class=\"question-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Çalışma Sermayesi</th>\n      <th>Net İşletme Sermayesi</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A)</td>\n      <td>1.600.000 TL</td>\n      <td>800.000 TL</td>\n    </tr>\n    <tr>\n      <td>B)</td>\n      <td>1.000.000 TL</td>\n      <td>200.000 TL</td>\n    </tr>\n    <tr>\n      <td>C)</td>\n      <td>1.500.000 TL</td>\n      <td>700.000 TL</td>\n    </tr>\n    <tr>\n      <td>D)</td>\n      <td>1.500.000 TL</td>\n      <td>800.000 TL</td>\n    </tr>\n    <tr>\n      <td>E)</td>\n      <td>2.000.000 TL</td>\n      <td>1.200.000 TL</td>\n    </tr>\n  </tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "1.600.000 TL | 800.000 TL" },
      { label: 'B', text: "1.000.000 TL | 200.000 TL" },
      { label: 'C', text: "1.500.000 TL | 700.000 TL" },
      { label: 'D', text: "1.500.000 TL | 800.000 TL" },
      { label: 'E', text: "2.000.000 TL | 1.200.000 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 9,
    text: "İşletmenin stokları dışındaki dönen varlıklarının, kısa vadeli borçlarını ne ölçüde karşılayabildiğini gösteren oran aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Asit test oranı" },
      { label: 'B', text: "Cari oran" },
      { label: 'C', text: "Hazır değerler oranı" },
      { label: 'D', text: "Stok bağımlılık oranı" },
      { label: 'E', text: "Nakit oran" }
    ],
    correctLabel: 'A'
  },
  {
    number: 10,
    text: "Asit test oranı olarak da bilinen likidite oranının hangi düzeyde olması işletmeler açısından yeterlidir?",
    options: [
      { label: 'A', text: "0,2" },
      { label: 'B', text: "2" },
      { label: 'C', text: "1,5" },
      { label: 'D', text: "1" },
      { label: 'E', text: "2,4" }
    ],
    correctLabel: 'D'
  },
  {
    number: 11,
    text: "Dönen varlıkları 900.000 TL, stokları 300.000 TL ve kısa vadeli alacakları 300.000 TL olan işletmenin, kısa vadeli yabancı kaynakları 500.000 TL ise asit test oranı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "1" },
      { label: 'B', text: "0,6" },
      { label: 'C', text: "1,2" },
      { label: 'D', text: "1,8" },
      { label: 'E', text: "2" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 12,
    text: "Yukarıdaki işletmenin cari oranı ve nakit oranı aşağıdakilerden hangisidir?\n\n<table class=\"question-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Cari Oran</th>\n      <th>Nakit Oran</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A)</td>\n      <td>1,2</td>\n      <td>0,9</td>\n    </tr>\n    <tr>\n      <td>B)</td>\n      <td>1,8</td>\n      <td>0,6</td>\n    </tr>\n    <tr>\n      <td>C)</td>\n      <td>1,2</td>\n      <td>0,8</td>\n    </tr>\n    <tr>\n      <td>D)</td>\n      <td>2</td>\n      <td>1,2</td>\n    </tr>\n    <tr>\n      <td>E)</td>\n      <td>1,4</td>\n      <td>0,6</td>\n    </tr>\n  </tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "1,2 | 0,9" },
      { label: 'B', text: "1,8 | 0,6" },
      { label: 'C', text: "1,2 | 0,8" },
      { label: 'D', text: "2 | 1,2" },
      { label: 'E', text: "1,4 | 0,6" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 13,
    text: "Aşağıdakilerden hangisi, oran analizinde kullanılan 4 temel oran grubundan değildir?",
    options: [
      { label: 'A', text: "Faaliyet etkinliği oranları" },
      { label: 'B', text: "Likidite oranları" },
      { label: 'C', text: "Kârlılık oranları" },
      { label: 'D', text: "Finansal yapı oranları" },
      { label: 'E', text: "Borsa performans oranları" }
    ],
    correctLabel: 'E'
  },
  {
    number: 14,
    text: "Bir işletmenin cari oranı, likidite oranına göre çok yüksek ise, bu işletme için aşağıdakilerden hangisi söylenebilir?",
    options: [
      { label: 'A', text: "Likiditesi yüksektir." },
      { label: 'B', text: "Stokları yüksektir." },
      { label: 'C', text: "Kısa vadeli borçları düşüktür." },
      { label: 'D', text: "Kısa vadeli borçları yüksektir." },
      { label: 'E', text: "Alacakları düşüktür." }
    ],
    correctLabel: 'B'
  },
  {
    number: 15,
    text: "İşletmenin stokları ve alacakları dışındaki dönen varlıkları ile kısa vadeli borçlarını ödeyebilme gücünü gösteren oran aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Cari oran" },
      { label: 'B', text: "Stok bağımlılık oranı" },
      { label: 'C', text: "Nakit oran" },
      { label: 'D', text: "Stokları karşılama oranı" },
      { label: 'E', text: "Likidite oranı" }
    ],
    correctLabel: 'C'
  },
  {
    number: 16,
    text: "Kısa vadeli borçların, hazır değerler ve menkul kıymetlerle ödenebilme gücünü gösteren oran aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Likidite oranı" },
      { label: 'B', text: "Hazır değerler oranı" },
      { label: 'C', text: "Nakit oran" },
      { label: 'D', text: "Stok bağımlılık oranı" },
      { label: 'E', text: "Cari oran" }
    ],
    correctLabel: 'C'
  },
  {
    number: 17,
    text: "Nakit oranın genel olarak kaç olması yeterli kabul edilir?\n\nŞİRİN A.Ş. nin 31.12.2018 tarihli bilanço verilerinden bazıları aşağıdaki gibidir. (18-26. Soruları bu verilere göre cevaplayınız.)\n<pre class=\"question-pre\">\nDönen Varlıklar                 Kısa Vadeli Borçlar\n-----------------------------   ---------------------------------\nHazır değerler: 150.000         Mali borçlar: 150.000\nMenkul kıymetler: 50.000        Ticari borçlar: 300.000\nAlacaklar: 300.000              Ödenecek vergi ve fonlar: 70.000\nStoklar: 300.000                Borç ve gider karşılıkları : 80.000\n</pre>",
    options: [
      { label: 'A', text: "1" },
      { label: 'B', text: "1,5-2" },
      { label: 'C', text: "2" },
      { label: 'D', text: "0,2" },
      { label: 'E', text: "0,5" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 18,
    text: "ŞİRİN A.Ş. nin cari oranı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "1" },
      { label: 'B', text: "1,75" },
      { label: 'C', text: "1,5" },
      { label: 'D', text: "1,33" },
      { label: 'E', text: "2" }
    ],
    correctLabel: 'D'
  },
  {
    number: 19,
    text: "ŞİRİN A.Ş. nin likidite oranı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "1" },
      { label: 'B', text: "0,83" },
      { label: 'C', text: "0,75" },
      { label: 'D', text: "0,64" },
      { label: 'E', text: "1,2" }
    ],
    correctLabel: 'B'
  },
  {
    number: 20,
    text: "ŞİRİN A.Ş. nin nakit oranı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "1,5" },
      { label: 'B', text: "1" },
      { label: 'C', text: "0,2" },
      { label: 'D', text: "0,5" },
      { label: 'E', text: "0,33" }
    ],
    correctLabel: 'E'
  },
  {
    number: 21,
    text: "ŞİRİN A.Ş. nin stok bağımlılık oranı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "1" },
      { label: 'B', text: "0,75" },
      { label: 'C', text: "0,8" },
      { label: 'D', text: "1,33" },
      { label: 'E', text: "0,50" }
    ],
    correctLabel: 'D'
  },
  {
    number: 22,
    text: "Nakit oran, likidite oranı ve cari oranın işletmeler açısından sırasıyla genel olarak hangi seviyede olması gerekir?",
    options: [
      { label: 'A', text: "0,2 – 2 – 2" },
      { label: 'B', text: "0,5 – 1 – 2" },
      { label: 'C', text: "0,2 – 0,5 – 2" },
      { label: 'D', text: "0,2 – 1 – 2,5" },
      { label: 'E', text: "0,2 – 1 – 2" }
    ],
    correctLabel: 'E'
  },
  {
    number: 23,
    text: "İşletmenin Çalışma Sermayesi yeterli ise Cari Oran için aşağıdakilerden hangisi doğrudur?",
    options: [
      { label: 'A', text: "Cari Oran 1' e eşittir." },
      { label: 'B', text: "Cari Oran sıfırdır." },
      { label: 'C', text: "Cari Oran 0 ile 1 arasındadır." },
      { label: 'D', text: "Cari Oran negatiftir." },
      { label: 'E', text: "Cari oran 1 'in üzerindedir." }
    ],
    correctLabel: 'E'
  },
  {
    number: 24,
    text: "Stok bağımlılık oranının hesaplanabilmesi için aşağıdakilerden hangilerine gerek yoktur?\n\ni. Kısa vadeli Borçlar<br>\nii. Stoklar<br>\niii. Hazır değerler<br>\niv. Menkul kıymetler<br>\nv. Dönen varlıklar<br>\nvi. Alacaklar",
    options: [
      { label: 'A', text: "i – v" },
      { label: 'B', text: "v – vi" },
      { label: 'C', text: "iii – v" },
      { label: 'D', text: "vi – i" },
      { label: 'E', text: "ii – vi" }
    ],
    correctLabel: 'B'
  },
  {
    number: 25,
    text: "Stok bağımlılık oranı yüksek olan bir işletme aşağıdakilerden hangisini yapmamalıdır?\n\ni. Pazarlama etkinliğini artırmalıdır.<br>\nii. Satışlarını artırmalıdır.<br>\niii. Stok alımlarını artırmalıdır.<br>\niv. Stok devir hızını artırmalıdır.<br>\nv. Kâr marjını artırmalıdır.<br>\nvi. Stok alımlarını peşin yapmalıdır.",
    options: [
      { label: 'A', text: "iii – v – vi" },
      { label: 'B', text: "iv – v – vi" },
      { label: 'C', text: "i – iii – v" },
      { label: 'D', text: "ii – iii – iv" },
      { label: 'E', text: "iv – v – vi" }
    ],
    correctLabel: 'A'
  },
  {
    number: 26,
    text: "Hangi oranın 1'den düşük olması durumunda stok bağımlılık oranının hesaplanması gerekir?",
    options: [
      { label: 'A', text: "Cari oran" },
      { label: 'B', text: "Asit-test oranı" },
      { label: 'C', text: "Faiz karşılama oranı" },
      { label: 'D', text: "Nakit oran" },
      { label: 'E', text: "Hazır değerler oranı" }
    ],
    correctLabel: 'B'
  },
  {
    number: 27,
    text: "Aşağıdaki bilanço kalemleri verilmiş olan işletmenin likidite oranları aşağıdakilerden hangisinde doğru olarak verilmiştir?\n\n<pre class=\"question-pre\">\nDönen Varlıklar   : 5000\nKVYK              : 4000\nStoklar           : 2000\nHazır Değerler    : 400\nMenkul Kıymetler  : 600\nAlacaklar         : 2000\nDuran Varlıklar   : 3000\nÖzkaynaklar       : 3000\n</pre>\n<table class=\"question-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Nakit Oran</th>\n      <th>Likidite Oranı</th>\n      <th>Cari Oran</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A)</td>\n      <td>0,20</td>\n      <td>1,00</td>\n      <td>1,50</td>\n    </tr>\n    <tr>\n      <td>B)</td>\n      <td>0,25</td>\n      <td>0,90</td>\n      <td>2,00</td>\n    </tr>\n    <tr>\n      <td>C)</td>\n      <td>0,25</td>\n      <td>0,75</td>\n      <td>1,25</td>\n    </tr>\n    <tr>\n      <td>D)</td>\n      <td>0,40</td>\n      <td>0,75</td>\n      <td>1,75</td>\n    </tr>\n    <tr>\n      <td>E)</td>\n      <td>0,20</td>\n      <td>1,00</td>\n      <td>1,25</td>\n    </tr>\n  </tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "0,20 | 1,00 | 1,50" },
      { label: 'B', text: "0,25 | 0,90 | 2,00" },
      { label: 'C', text: "0,25 | 0,75 | 1,25" },
      { label: 'D', text: "0,40 | 0,75 | 1,75" },
      { label: 'E', text: "0,20 | 1,00 | 1,25" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  }
];

const moduleMeta = {
  id: 'likidite_oranlari',
  title: 'Likidite Oranları',
  description: "Cari, likidite, nakit ve stok bağımlılık oranlarını hesaplatan kapsamlı tablo destekli test seti.",
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
  additionalNotes: "Çok sayıda tablo ve hesaplama içerir; oran hesapları otomatik raporlamadan hariç tutulur.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'likiditeOranlariHariciState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
