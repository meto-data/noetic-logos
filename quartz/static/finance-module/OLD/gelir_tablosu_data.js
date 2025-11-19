const moduleQuestions = [
  {
    number: 1,
    text: "Satışların maliyeti dışında kalan ve işletmenin ana faaliyet konusunu sürdürmek amacı ile yapmış olduğu her türlü giderleri, aşağıdakilerden hangisi göstermektedir?",
    options: [
      { label: 'A', text: "Satış indirimleri" },
      { label: 'B', text: "Diğer faaliyetlerden olağan gider ve zararlar" },
      { label: 'C', text: "Olağandışı faaliyetlerden gider ve zararlar" },
      { label: 'D', text: "Faaliyet giderleri" },
      { label: 'E', text: "Karşılık giderleri" }
    ],
    correctLabel: 'D'
  },
  {
    number: 2,
    text: "Aşağıdakilerden hangisi gelir tablosu kalemlerinden değildir?",
    options: [
      { label: 'A', text: "Temettü gelirleri" },
      { label: 'B', text: "Konusu kalmayan karşılıklar" },
      { label: 'C', text: "Çalışmayan kısım gider ve zararları" },
      { label: 'D', text: "İskonto faiz gelirleri" },
      { label: 'E', text: "Alacak senetleri iskontosu" }
    ],
    correctLabel: 'E'
  },
  {
    number: 3,
    text: "Aşağıdakilerden hangisi gelir tablosu'nda yer almaz?",
    options: [
      { label: 'A', text: "Menkul kıymet satış kârları" },
      { label: 'B', text: "Önceki dönem gider ve zararlar" },
      { label: 'C', text: "Hisse senedi ihraç primleri" },
      { label: 'D', text: "Çalışmayan kısım gider ve zararları" },
      { label: 'E', text: "İskonto faiz giderleri" }
    ],
    correctLabel: 'C'
  },
  {
    number: 4,
    text: "Aşağıdakilerden hangisi gelir tablosu'nda yer almaz?",
    options: [
      { label: 'A', text: "Borsa değer artış kârları" },
      { label: 'B', text: "Önceki dönem gelir ve kararlar" },
      { label: 'C', text: "İskonto faiz giderleri" },
      { label: 'D', text: "Faiz gelirleri" },
      { label: 'E', text: "Gelir tahakkukları" }
    ],
    correctLabel: 'E'
  },
  {
    number: 5,
    text: "Aşağıdakilerden hangisi bilançoda yer almaz?",
    options: [
      { label: 'A', text: "Verilen depozito ve teminatlar" },
      { label: 'B', text: "İştiraklere sermaye taahhütleri" },
      { label: 'C', text: "Konusu kalmayan karşılıklar" },
      { label: 'D', text: "Gelir tahakkukları" },
      { label: 'E', text: "Hisse senedi ihraç primleri" }
    ],
    correctLabel: 'D'
  },
  {
    number: 6,
    text: "Aşağıdakilerden hangisi bilançoda yer alır?",
    options: [
      { label: 'A', text: "Karşılık giderleri" },
      { label: 'B', text: "Kıdem tazminat karşılığı" },
      { label: 'C', text: "İskonto faiz gelirleri" },
      { label: 'D', text: "Konusu kalmayan karşılıklar" },
      { label: 'E', text: "Menkul kıymet satış kârları" }
    ],
    correctLabel: 'B'
  },
  {
    number: 7,
    text: "Aşağıdakilerden hangisi gelir tablosunda diğer faaliyetlerden olağan gider ve zararlar bölümünde yer almaz?",
    options: [
      { label: 'A', text: "Komisyon giderleri" },
      { label: 'B', text: "Kambiyo zararları" },
      { label: 'C', text: "Komisyon giderleri" },
      { label: 'D', text: "Finansman giderleri" },
      { label: 'E', text: "İskonto faiz giderleri" }
    ],
    correctLabel: 'D'
  },
  {
    number: 8,
    text: "Aşağıdakilerden hangisi gelir tablosunda diğer faaliyetlerden olağan gider ve zararlar bölümünde yer almaz?",
    options: [
      { label: 'A', text: "Karşılık giderleri" },
      { label: 'B', text: "Diğer olağan gider ve zararlar" },
      { label: 'C', text: "Menkul kıymet satış zararları" },
      { label: 'D', text: "Kambiyo zararları" },
      { label: 'E', text: "Konusu kalmayan karşılıklar" }
    ],
    correctLabel: 'E'
  },
  {
    number: 9,
    text: "Aşağıdakilerden hangisi gelir tablosunda diğer faaliyetlerden olağan gelir ve kârlar bölümünde yer almaz?",
    options: [
      { label: 'A', text: "Önceki dönem gelir ve kârlar" },
      { label: 'B', text: "Menkul kıymet satış kârları" },
      { label: 'C', text: "İskonto faiz gelirleri" },
      { label: 'D', text: "Faiz gelirleri" },
      { label: 'E', text: "Konusu kalmayan karşılıklar" }
    ],
    correctLabel: 'A'
  },
  {
    number: 10,
    text: "Gelir tablosu ile ilgili olarak aşağıda verilen ifadelerden hangisi yanlıştır?",
    options: [
      { label: 'A', text: "Gelirler ve giderler gelir tablosunda ulusal para birimi ile gösterilirler." },
      { label: 'B', text: "Genel tablosu genel kabul görmüş muhasebe ilkeleri ve muhasebe kavramlarına göre düzenlenir." },
      { label: 'C', text: "Gelir tablosu işletmenin belirli bir tarihteki varlıklarını, özsermayesini ve borçlarını ayrıntılı olarak gösterir." },
      { label: 'D', text: "Gelir ve giderlerin gösterilmesinde maliyet ve tahakkuk esasları uygulanır." },
      { label: 'E', text: "Gelir tablosu dinamik bir özelliğe sahiptir." }
    ],
    correctLabel: 'C'
  }
];

const moduleMeta = {
  id: 'gelir_tablosu',
  title: 'Gelir Tablosu',
  description: "Gelir tablosu kalemleri, sınıflandırması ve bilançoyla ilişkisini sorgulayan kapsamlı test.",
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
  additionalNotes: "Bazı sorular bilanço ile karşılaştırma yapar; ilgili kalemler için kısa açıklamalar sağlanmıştır.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'gelirTablosuHariciState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
