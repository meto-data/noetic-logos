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
    text: "Cari oranı 1,875 kısa vadeli yabancı kaynakları 800.000 TL olan işletmenin, çalışma sermayesi ve net çalışma sermayesi kaç TL'dir?",
    options: [
      { label: 'A', text: "Çalışma Sermayesi: 1.600.000 TL | Net İşletme Sermayesi: 800.000 TL" },
      { label: 'B', text: "Çalışma Sermayesi: 1.000.000 TL | Net İşletme Sermayesi: 200.000 TL" },
      { label: 'C', text: "Çalışma Sermayesi: 1.500.000 TL | Net İşletme Sermayesi: 700.000 TL" },
      { label: 'D', text: "Çalışma Sermayesi: 1.500.000 TL | Net İşletme Sermayesi: 800.000 TL" },
      { label: 'E', text: "Çalışma Sermayesi: 2.000.000 TL | Net İşletme Sermayesi: 1.200.000 TL" }
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
    text: "Aşağıdaki verilere sahip işletmenin asit test oranı kaçtır?",
    contextHtml: `
      <table class="financial-table">
        <thead>
          <tr>
            <th>Kalem</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dönen Varlıklar</td>
            <td class="numeric">900.000</td>
          </tr>
          <tr>
            <td>Stoklar</td>
            <td class="numeric">300.000</td>
          </tr>
          <tr>
            <td>Kısa Vadeli Alacaklar</td>
            <td class="numeric">300.000</td>
          </tr>
          <tr>
            <td>Kısa Vadeli Yabancı Kaynaklar</td>
            <td class="numeric">500.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
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
    text: "Yukarıdaki işletmenin cari oranı ve nakit oranı sırasıyla kaçtır?",
    getContextForQuestion: 11,
    options: [
      { label: 'A', text: "Cari Oran: 1,2 | Nakit Oran: 0,9" },
      { label: 'B', text: "Cari Oran: 1,8 | Nakit Oran: 0,6" },
      { label: 'C', text: "Cari Oran: 1,2 | Nakit Oran: 0,8" },
      { label: 'D', text: "Cari Oran: 2 | Nakit Oran: 1,2" },
      { label: 'E', text: "Cari Oran: 1,4 | Nakit Oran: 0,6" }
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
    text: "Nakit oranın genel olarak kaç olması yeterli kabul edilir?\n\n(ŞİRİN A.Ş. nin 31.12.2018 tarihli bilanço verilerini kullanarak 18-21. soruları cevaplayınız.)",
    contextHtml: `
      <h4>ŞİRİN A.Ş. Bilanço Verileri (31.12.2018)</h4>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Dönen Varlıklar</th>
            <th>Tutar (TL)</th>
            <th style="width: 20px;"></th>
            <th>Kısa Vadeli Borçlar</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hazır Değerler</td>
            <td class="numeric">150.000</td>
            <td></td>
            <td>Mali Borçlar</td>
            <td class="numeric">150.000</td>
          </tr>
          <tr>
            <td>Menkul Kıymetler</td>
            <td class="numeric">50.000</td>
            <td></td>
            <td>Ticari Borçlar</td>
            <td class="numeric">300.000</td>
          </tr>
          <tr>
            <td>Alacaklar</td>
            <td class="numeric">300.000</td>
            <td></td>
            <td>Ödenecek Vergi ve Fonlar</td>
            <td class="numeric">70.000</td>
          </tr>
          <tr>
            <td>Stoklar</td>
            <td class="numeric">300.000</td>
            <td></td>
            <td>Borç ve Gider Karşılıkları</td>
            <td class="numeric">80.000</td>
          </tr>
          <tr>
            <td><strong>Toplam</strong></td>
            <td class="numeric"><strong>800.000</strong></td>
            <td></td>
            <td><strong>Toplam</strong></td>
            <td class="numeric"><strong>600.000</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
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
    getContextForQuestion: 17,
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
    getContextForQuestion: 17,
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
    getContextForQuestion: 17,
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
    getContextForQuestion: 17,
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
    text: "Aşağıdaki bilanço kalemleri verilmiş olan işletmenin likidite oranları (nakit oran, likidite oranı, cari oran) sırasıyla kaçtır?",
    contextHtml: `
      <table class="financial-table">
        <thead>
          <tr>
            <th>Bilanço Kalemi</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dönen Varlıklar</td>
            <td class="numeric">5.000</td>
          </tr>
          <tr>
            <td>Kısa Vadeli Yabancı Kaynaklar (KVYK)</td>
            <td class="numeric">4.000</td>
          </tr>
          <tr>
            <td>Stoklar</td>
            <td class="numeric">2.000</td>
          </tr>
          <tr>
            <td>Hazır Değerler</td>
            <td class="numeric">400</td>
          </tr>
          <tr>
            <td>Menkul Kıymetler</td>
            <td class="numeric">600</td>
          </tr>
          <tr>
            <td>Alacaklar</td>
            <td class="numeric">2.000</td>
          </tr>
          <tr>
            <td>Duran Varlıklar</td>
            <td class="numeric">3.000</td>
          </tr>
          <tr>
            <td>Özkaynaklar</td>
            <td class="numeric">3.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "Nakit Oran: 0,20 | Likidite Oranı: 1,00 | Cari Oran: 1,50" },
      { label: 'B', text: "Nakit Oran: 0,25 | Likidite Oranı: 0,90 | Cari Oran: 2,00" },
      { label: 'C', text: "Nakit Oran: 0,25 | Likidite Oranı: 0,75 | Cari Oran: 1,25" },
      { label: 'D', text: "Nakit Oran: 0,40 | Likidite Oranı: 0,75 | Cari Oran: 1,75" },
      { label: 'E', text: "Nakit Oran: 0,20 | Likidite Oranı: 1,00 | Cari Oran: 1,25" }
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
