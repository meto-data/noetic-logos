const moduleQuestions = [
  {
    number: 1,
    text: "İşletmenin tek bir dönemine ait finansal tablo verilerindeki her kalemin, aynı tabloda yer alan grup toplamına oranlanması şeklinde hesaplanarak bulunan yüzdelere göre yorumların yapıldığı analiz tekniği aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Dikey analiz" },
      { label: 'B', text: "Yatay analiz" },
      { label: 'C', text: "Trend analizi" },
      { label: 'D', text: "Oran analizi" },
      { label: 'E', text: "Eğilim yüzdeleri analizi" }
    ],
    correctLabel: 'A'
  },
  {
    number: 2,
    text: "Gelir tablosunun yüzde analizinde aşağıdakilerden hangisi 100 olarak kabul edilmektedir?",
    options: [
      { label: 'A', text: "Satışların maliyeti" },
      { label: 'B', text: "Aktif toplam" },
      { label: 'C', text: "Brüt satışlar" },
      { label: 'D', text: "Net satışlar" },
      { label: 'E', text: "Dönem net kâr" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 3,
    text: "Finansman giderlerinin dikey yüzdesi % 10 olan işletmenin finansman giderleri 2.500 TL ise net satışları aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "100.000 TL" },
      { label: 'B', text: "250.000 TL" },
      { label: 'C', text: "25.000 TL" },
      { label: 'D', text: "50.000 TL" },
      { label: 'E', text: "10.000 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 4,
    text: "Duran varlıkları 9.000 TL, aktif toplamı 15.000 TL, ve ticari malları 3.000 TL olan işletmenin, ticari mallar hesabının grup içindeki ve genel toplam içindeki dikey yüzdesi sırasıyla kaçtır?",
    options: [
      { label: 'A', text: "Grup Toplamına Oranı: %33 | Genel Toplama Oranı: %25" },
      { label: 'B', text: "Grup Toplamına Oranı: %20 | Genel Toplama Oranı: %25" },
      { label: 'C', text: "Grup Toplamına Oranı: %33 | Genel Toplama Oranı: %20" },
      { label: 'D', text: "Grup Toplamına Oranı: %50 | Genel Toplama Oranı: %20" },
      { label: 'E', text: "Grup Toplamına Oranı: %25 | Genel Toplama Oranı: %20" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 5,
    text: "Ticari alacaklarının dikey yüzdesi %12,5 olan işletmenin, ticari alacakları 5.000 TL ise, aktif toplamı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "50.000 TL" },
      { label: 'B', text: "40.000 TL" },
      { label: 'C', text: "30.000 TL" },
      { label: 'D', text: "625 TL" },
      { label: 'E', text: "25.000 TL" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 6,
    text: "Brüt satışları 10.000 TL, satışlarının maliyeti 5.000 TL olan işletmenin net satışlarının dikey yüzdesi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "50" },
      { label: 'B', text: "150" },
      { label: 'C', text: "200" },
      { label: 'D', text: "100" },
      { label: 'E', text: "Hesaplanamaz" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 7,
    text: "Aktif toplam 60.000 TL, dönen varlıkları 40.000 TL ve net çalışma sermayesi 10.000 TL olan işletme ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
    options: [
      { label: 'A', text: "Dönen varlıkların dikey yüzdesi % 67'dir." },
      { label: 'B', text: "Kısa vadeli yabancı kaynakların dikey yüzdesi %50'dir" },
      { label: 'C', text: "İşletme, ticari işletme görünümündedir." },
      { label: 'D', text: "Duran varlıkların dikey yüzdesi % 33'dür." },
      { label: 'E', text: "İşletmenin devamlı sermayesi, duran varlıklarından küçüktür." }
    ],
    correctLabel: 'E',
    isQuantitative: true
  },
  {
    number: 8,
    text: "Dikey (Yüzde) Analiz Tekniğinin amacı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Finansal tablolar arasındaki ilişkileri incelemek" },
      { label: 'B', text: "Finansal Tablo kalemlerindeki değişimi incelemek" },
      { label: 'C', text: "Bilançonun geçmiş yıllarla olan ilişkilerini ortaya koymak" },
      { label: 'D', text: "Tek döneme ait finansal tablolardaki hesapların oransal ilişkilerini incelemek" },
      { label: 'E', text: "İşletmenin faaliyet sonuçlarının analizinin yapılması" }
    ],
    correctLabel: 'D'
  },
  {
    number: 9,
    text: "Aşağıdaki bilanço verilerine uygulanan analiz tekniği hangisidir?",
    contextHtml: `
      <table class="financial-table">
        <thead>
          <tr>
            <th>Hesap Adı</th>
            <th>2014 (TL)</th>
            <th>Dikey Yüzde (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mali Borçlar</td>
            <td class="numeric">4.500</td>
            <td class="numeric">32</td>
          </tr>
          <tr>
            <td>Ticari Borçlar</td>
            <td class="numeric">2.600</td>
            <td class="numeric">19</td>
          </tr>
          <tr>
            <td>Alınan Avanslar</td>
            <td class="numeric">1.300</td>
            <td class="numeric">9</td>
          </tr>
          <tr>
            <td>Borç ve Gider Karşılıkları</td>
            <td class="numeric">600</td>
            <td class="numeric">4</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td><strong>Pasif Toplamı</strong></td>
            <td class="numeric"><strong>14.000</strong></td>
            <td class="numeric"><strong>100</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "Trend Analiz" },
      { label: 'B', text: "Yüzde Yöntemi ile Analiz" },
      { label: 'C', text: "Karşılaştırmalı Tablo Analiz" },
      { label: 'D', text: "Oran Analiz" },
      { label: 'E', text: "Dikey Yüzde Analizi" }
    ],
    correctLabel: 'E',
    isQuantitative: true
  }
];

const moduleMeta = {
  id: 'dikey_yuzdeler_analizi',
  title: 'Dikey Yüzdeler Analizi',
  description: "Tek dönemli finansal tablolarda grup ve toplam içi yüzde dağılımlarını hesaplatan sorular.",
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
  additionalNotes: "Soruların bir kısmı tablo desteklidir; hesaplamalar için gerekli veriler soruda sunulmaktadır.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'dikeyYuzdelerHariciState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
