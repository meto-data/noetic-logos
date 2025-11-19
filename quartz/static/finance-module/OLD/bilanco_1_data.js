const moduleQuestions = [
  {
    number: 1,
    text: "Aşağıdakilerden hangisi Brüt İşletme (Çalışma) Sermayesi olarak da adlandırılmaktadır?",
    options: [
      { label: 'A', text: "Net çalışma sermayesi" },
      { label: 'B', text: "Duran varlıklar" },
      { label: 'C', text: "Toplam varlıklar" },
      { label: 'D', text: "Dönen varlıklar" },
      { label: 'E', text: "Özkaynaklar" }
    ],
    correctLabel: 'D'
  },
  {
    number: 2,
    text: "Aşağıdakilerden hangisi maddi duran varlık değildir?",
    options: [
      { label: 'A', text: "Yapılmakta olan yatırımlar" },
      { label: 'B', text: "Yeraltı ve yerüstü düzenleri" },
      { label: 'C', text: "Özel maliyetler" },
      { label: 'D', text: "Arazi ve arsalar" },
      { label: 'E', text: "Demirbaşlar" }
    ],
    correctLabel: 'C'
  },
  {
    number: 3,
    text: "Aşağıdakilerden hangisi maddi olmayan duran varlıklardan değildir?",
    options: [
      { label: 'A', text: "Haklar" },
      { label: 'B', text: "Şerefiye" },
      { label: 'C', text: "Kuruluş ve örgütlenme giderleri" },
      { label: 'D', text: "Özel maliyetler" },
      { label: 'E', text: "İştirakler" }
    ],
    correctLabel: 'E'
  },
  {
    number: 4,
    text: "Aşağıdakilerden hangisi mali duran varlıklardan değildir?",
    options: [
      { label: 'A', text: "Bağlı menkul kıymetler" },
      { label: 'B', text: "İştirakler" },
      { label: 'C', text: "Bağlı ortaklıklara sermaye taahhütleri" },
      { label: 'D', text: "Çıkarılmış tahviller" },
      { label: 'E', text: "İştirakler sermaye payları değer düşüklüğü karşılığı" }
    ],
    correctLabel: 'D'
  },
  {
    number: 5,
    text: "Aşağıdakilerden hangisi özel tükenmeye tabi varlıklardan değildir?",
    options: [
      { label: 'A', text: "Hazırlık ve geliştirme giderleri" },
      { label: 'B', text: "Arama giderleri" },
      { label: 'C', text: "Birikmiş tükenme payları" },
      { label: 'D', text: "Diğer özel tükenmeye tabi varlıklar" },
      { label: 'E', text: "Birikmiş amortismanlar" }
    ],
    correctLabel: 'E'
  },
  {
    number: 6,
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
    number: 7,
    text: "Aşağıdakilerden hangisi Özkaynaklar grubunda yer almaz?",
    options: [
      { label: 'A', text: "Yasal Yedekler" },
      { label: 'B', text: "Menkul Kıymetler İhraç Farkları" },
      { label: 'C', text: "Maddi Duran Varlık Yeniden Değerleme Artışları" },
      { label: 'D', text: "Özel Fonlar" },
      { label: 'E', text: "Geçmiş Yıl Kârları" }
    ],
    correctLabel: 'A'
  },
  {
    number: 8,
    text: "Aşağıdakilerden hangisi bilançonun bölümlerinden biri değildir?",
    options: [
      { label: 'A', text: "Ödenmiş Sermaye" },
      { label: 'B', text: "Uzun Vadeli Yabancı Kaynaklar" },
      { label: 'C', text: "Kısa Vadeli Yabancı Kaynaklar" },
      { label: 'D', text: "Duran Varlıklar" },
      { label: 'E', text: "Dönen Varlıklar" }
    ],
    correctLabel: 'A'
  },
  {
    number: 9,
    text: "Aşağıdakilerden hangisi bilançonun özelliklerinden değildir?",
    options: [
      { label: 'A', text: "Aktif ve pasif olmak üzere iki eşit taraftan oluşmaktadır." },
      { label: 'B', text: "Bir dönemi kapsar." },
      { label: 'C', text: "İşletmenin varlıklarını ve kaynaklarını dağılımları ile birlikte gösterir." },
      { label: 'D', text: "Temel finansal tablolardandır." },
      { label: 'E', text: "Bilançoda aktif kalemler en likit olan kalemden en az likit olan kaleme doğru sıralanır." }
    ],
    correctLabel: 'B'
  },
  {
    number: 10,
    text: "Aşağıdakilerden hangisi “aktifi düzenleyici hesap”lardan biri değildir?",
    options: [
      { label: 'A', text: "Şüpheli Alacaklar Karşılığı Hesabı" },
      { label: 'B', text: "Stok Değer Düşüklüğü Karşılığı Hesabı" },
      { label: 'C', text: "Alacak Senetleri İskontosu Hesabı" },
      { label: 'D', text: "Birikmiş Amortismanlar Hesabı" },
      { label: 'E', text: "Borç Senetleri İskontosu Hesabı" }
    ],
    correctLabel: 'E'
  }
];

const moduleMeta = {
  id: 'bilanco_1',
  title: 'Bilanço - 1',
  description: "Bilanço kalemlerinin kapsamı, sınıflandırması ve sermaye yapısı üzerindeki etkilerini ölçen soru seti.",
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
  additionalNotes: "Tamamı kavramsal olan sorular bilançonun temel yapısı ve terminolojisine odaklanır.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'bilancoHarici1State_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
