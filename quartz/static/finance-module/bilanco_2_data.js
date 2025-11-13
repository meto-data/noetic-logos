const moduleQuestions = [
  {
    number: 1,
    text: "Belirli bir tarihte işletmenin varlıklarının (maliyet değeriyle) dağılımını, bu varlıkların finansmanında kullanılan kaynakların tutarlarını ve dağılımlarını gösteren finansal tablo aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Gelir tablosu" },
      { label: 'B', text: "Satışların maliyeti tablosu" },
      { label: 'C', text: "Ek finansal tablolar" },
      { label: 'D', text: "Bilanço" },
      { label: 'E', text: "Nakit akış tablosu" }
    ],
    correctLabel: 'D'
  },
  {
    number: 2,
    text: "Normal faaliyet döneminden daha uzun bir sürede işletme faaliyetlerinde kullanılacak, paraya çevrilebilecek veya tüketilebilecek değerlerinin toplamı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Dönen varlıklar" },
      { label: 'B', text: "Duran varlıklar" },
      { label: 'C', text: "Net işletme sermayesi" },
      { label: 'D', text: "Çalışma sermayesi" },
      { label: 'E', text: "Özkaynaklar" }
    ],
    correctLabel: 'B'
  },
  {
    number: 3,
    text: "Aşağıdakilerden hangisi kısa vadeli yabancı kaynakların özelliklerin değildir?",
    options: [
      { label: 'A', text: "İşletmenin 1 yıl içinde ödemesi gereken her türlü borçlarının toplamından oluşmaktadır." },
      { label: 'B', text: "Vadesi geldiğinde genellikle dönen varlıklarla karşılanır." },
      { label: 'C', text: "Kısa vadeli borçları, dönen varlıklarından fazla olan işletmelerde net çalışma sermayesi noksanı vardır." },
      { label: 'D', text: "Likiditesine göre bilançoda sıralanır." },
      { label: 'E', text: "Diğer kaynaklara göre işletme açısından daha risklidir." }
    ],
    correctLabel: 'D'
  },
  {
    number: 4,
    text: "Aşağıdakilerden hangisi kısa vadeli borç değildir?",
    options: [
      { label: 'A', text: "Tahvil anapara borç taksit ve faizleri" },
      { label: 'B', text: "Banka kredileri" },
      { label: 'C', text: "Çıkarılmış tahviller" },
      { label: 'D', text: "Çıkarılmış bono ve senetler" },
      { label: 'E', text: "Alınan avanslar" }
    ],
    correctLabel: 'C'
  },
  {
    number: 5,
    text: "Aşağıdakilerden hangisi sermaye yedeklerinden değildir?",
    options: [
      { label: 'A', text: "Hisse senedi iptal kârları" },
      { label: 'B', text: "Hisse senedi ihraç primleri" },
      { label: 'C', text: "Maddi duran varlık yeniden değerleme artışları" },
      { label: 'D', text: "Özel fonlar" },
      { label: 'E', text: "İştirakler yeniden değerleme artışları" }
    ],
    correctLabel: 'D'
  },
  {
    number: 6,
    text: "Aşağıdakilerden hangisi kâr yedeklerinden değildir?",
    options: [
      { label: 'A', text: "Özel fonlar" },
      { label: 'B', text: "Statü yedekleri" },
      { label: 'C', text: "Olağanüstü yedekler" },
      { label: 'D', text: "Yasal yedekler" },
      { label: 'E', text: "Hisse senedi iptal kârları" }
    ],
    correctLabel: 'E'
  },
  {
    number: 7,
    text: "Bilanço ile ilgili olarak aşağıda verilen ifadelerden hangisi yanlıştır?",
    options: [
      { label: 'A', text: "Bilanço bir işletmenin belirli bir dönemdeki faaliyet sonuçlarını gösterir." },
      { label: 'B', text: "Bilanço belli muhasebe kavramları ve genel kabul görmüş muhasebe ilkelerine göre düzenlenir." },
      { label: 'C', text: "Bilançoda yer alan varlıkların ve kaynakların ifade edilmesinde ulusal para birimi esas alınır." },
      { label: 'D', text: "Bilanço işletmenin belirli bir tarihteki finansal durumunu göstermesi nedeniyle statik bir tablodur." },
      { label: 'E', text: "Bilançoda aktiflerin gösterilmesinde maliyet değeri esası, borçların gösterilmesinde tahakkuk esası kabul edilir." }
    ],
    correctLabel: 'A'
  },
  {
    number: 8,
    text: "Aşağıdakilerden hangisi bilanço hesabı değildir?",
    options: [
      { label: 'A', text: "Özkaynak hesapları" },
      { label: 'B', text: "Aktifi ve pasifi düzenleyici hesaplar" },
      { label: 'C', text: "Yabancı kaynak hesapları" },
      { label: 'D', text: "Aktif hesaplar" },
      { label: 'E', text: "Gelir ve gider hesapları" }
    ],
    correctLabel: 'E'
  },
  {
    number: 9,
    text: "Aşağıdakilerden hangisi Özkaynaklar grubunda yer almaz?",
    options: [
      { label: 'A', text: "Yasal Yedekler" },
      { label: 'B', text: "Menkul Kıymetler İhraç Farkları" },
      { label: 'C', text: "Maddi Duran Varlık Yeniden Değerleme Artışları" },
      { label: 'D', text: "Özel Fonlar" },
      { label: 'E', text: "Geçmiş Yıl Kârları" }
    ],
    correctLabel: 'B'
  },
  {
    number: 10,
    text: "Aşağıdakilerden hangisi bilançonun bölümlerinden biri değildir?",
    options: [
      { label: 'A', text: "Ödenmiş Sermaye" },
      { label: 'B', text: "Uzun Vadeli Yabancı Kaynaklar" },
      { label: 'C', text: "Kısa Vadeli Yabancı Kaynaklar" },
      { label: 'D', text: "Duran Varlıklar" },
      { label: 'E', text: "Dönen Varlıklar" }
    ],
    correctLabel: 'A'
  }
];

const moduleMeta = {
  id: 'bilanco_2',
  title: 'Bilanço - 2',
  description: "Bilançonun yorumlanması, varlık ve kaynak kalemlerinin dinamiklerini irdeleyen ikinci kavramsal set.",
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
  additionalNotes: "Sorular bilançonun kavramsal tanımlarını pekiştirir; tablo veya hesaplama gerektirmez.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'bilancoHarici2State_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
