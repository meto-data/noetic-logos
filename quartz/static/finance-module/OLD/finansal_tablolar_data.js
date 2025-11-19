const moduleQuestions = [
  {
    number: 1,
    text: "Bir veya birkaç döneme ait finansal tablolarda yer alan kalemlerin, gerek kendi aralarındaki gerekse bütünle olan ilişkilerinin çeşitli analiz tekniklerinden yararlanılarak incelenmesi, yorumlanması ve işletmenin içinde bulunduğu koşullarında göz önünde bulundurularak değerlendirilmesi aşağıdakilerin hangisinin konu kapsamını oluşturmaktadır?",
    options: [
      { label: 'A', text: "Yatırım analizi" },
      { label: 'B', text: "Ekonomik analiz" },
      { label: 'C', text: "Finansal analiz" },
      { label: 'D', text: "Sermaye analizi" },
      { label: 'E', text: "İktisadi analiz" }
    ],
    correctLabel: 'C'
  },
  {
    number: 2,
    text: "Belirli bir tarihte işletmenin varlıklarının dağılımını ve bu varlıkların finansmanında kullanılan kaynakların tutarlarını ve dağılımlarını gösteren finansal tablo aşağıdakilerden hangisidir?",
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
    number: 3,
    text: "Aşağıdakilerden hangisi temel finansal tablolardandır?",
    options: [
      { label: 'A', text: "Özkaynak değişim tablosu" },
      { label: 'B', text: "Net çalışma sermayesindeki değişim tablosu" },
      { label: 'C', text: "Gelir tablosu" },
      { label: 'D', text: "Fon akım tablosu" },
      { label: 'E', text: "Nakit akım tablosu" }
    ],
    correctLabel: 'C'
  },
  {
    number: 5,
    text: "Aşağıdakilerden hangisi bilançoda yer almaz?",
    options: [
      { label: 'A', text: "Dönen Varlıklar" },
      { label: 'B', text: "Duran Varlıklar" },
      { label: 'C', text: "Kısa Vadeli Yabancı Kaynaklar" },
      { label: 'D', text: "Net Satış" },
      { label: 'E', text: "Özkaynaklar" }
    ],
    correctLabel: 'D'
  },
  {
    number: 6,
    text: "İşletmenin çalışanları dışındaki üçüncü kişiler tarafından işletmenin kamuoyu ile paylaşmış olduğu finansal raporlara dayanılaraktan yapılan analiz türü aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "İç analiz" },
      { label: 'B', text: "Statik analiz" },
      { label: 'C', text: "Dış analiz" },
      { label: 'D', text: "Dinamik analiz" },
      { label: 'E', text: "Yönetim analizi" }
    ],
    correctLabel: 'C'
  },
  {
    number: 7,
    text: "İşletmenin tek bir dönemine ait finansal tablo verilerinin kendi aralarındaki anlamlı ilişkilerini saptamak üzere yapılan analiz türü aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Yönetim analizi" },
      { label: 'B', text: "İç analiz" },
      { label: 'C', text: "Dinamik analiz" },
      { label: 'D', text: "Statik analiz" },
      { label: 'E', text: "Dış analiz" }
    ],
    correctLabel: 'D'
  },
  {
    number: 8,
    text: "İşletmenin birbirini izleyen yıllarına ait finansal verilerinin kullanıldığı analiz türü aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Dış analiz" },
      { label: 'B', text: "İç analiz" },
      { label: 'C', text: "Statik analiz" },
      { label: 'D', text: "Yönetim analizi" },
      { label: 'E', text: "Dinamik analiz" }
    ],
    correctLabel: 'E'
  },
  {
    number: 9,
    text: "İşletme yönetiminin alacağı kararlara dayanak oluşturmak üzere, genellikle işletmeye ait her türlü finansal verilerden yararlanılarak hazırlanan analiz türü aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Statik analiz" },
      { label: 'B', text: "Dış analiz" },
      { label: 'C', text: "Yönetim analizi" },
      { label: 'D', text: "Kredi analizi" },
      { label: 'E', text: "Yatırım analizi" }
    ],
    correctLabel: 'C'
  },
  {
    number: 10,
    text: "Aşağıdakilerden hangisinde kapsamına göre analiz türleri birlikte verilmiştir?",
    options: [
      { label: 'A', text: "İç Analiz - Dış Analiz" },
      { label: 'B', text: "İç Analiz - Yönetim Analizi" },
      { label: 'C', text: "Kredi Analizi – Yatırım Analizi" },
      { label: 'D', text: "Dinamik Analiz - Statik Analiz" },
      { label: 'E', text: "Yönetim Analizi - Statik Analiz" }
    ],
    correctLabel: 'D'
  },
  {
    number: 11,
    text: "Yönetim analizi ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
    options: [
      { label: 'A', text: "İşletmenin kısa vadeli borçlarını ödeyebilme yeteneği üzerine odaklanır." },
      { label: 'B', text: "Yönetim analizli genellikle iç analizdir." },
      { label: 'C', text: "İşletmenin verimlilik, kârlılık, likidite ve finansal durumu gibi konularda saptamalar yapılır." },
      { label: 'D', text: "İşletmenin planlaması ve kontrolü bakımından son derece önemlidir." },
      { label: 'E', text: "Yönetim analizinde, işletmenin geçmiş dönemlerine, diğer işletmelere ve bütçe hedeflerine göre karşılaştırmaları yapılmaktadır." }
    ],
    correctLabel: 'A'
  },
  {
    number: 12,
    text: "İşletmeye sermaye koyan veya koymayı düşünenler ile işletmeye uzun vadeli borç veren yada vermeyi düşünler tarafından yapılan analiz türü aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Yönetim analizi" },
      { label: 'B', text: "Kredi analizi" },
      { label: 'C', text: "Yatırım analizi" },
      { label: 'D', text: "Statik analiz" },
      { label: 'E', text: "İç analiz" }
    ],
    correctLabel: 'C'
  }
];

const moduleMeta = {
  id: 'finansal_tablolar',
  title: 'Finansal Tablolar',
  description: "Temel finansal tablo türlerini, fonksiyonlarını ve kapsamlarını sorgulayan kavramsal bir test seti.",
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
  additionalNotes: "Soruların tamamı sözel niteliktedir; tablo içermeyen sorular yalnızca kavramsal bilgiyi ölçer.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'finansalTablolarHariciState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
