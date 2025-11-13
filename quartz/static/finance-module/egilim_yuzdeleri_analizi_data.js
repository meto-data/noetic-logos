const moduleQuestions = [
  {
    number: 1,
    text: "İşletmenin aralarında ilişki bulunan mali tablo kalemlerinin uzun sürede göstermiş olduğu eğilimlerin incelenmesi amacıyla uygulanan analiz tekniği aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Trend analizi" },
      { label: 'B', text: "Karşılaştırmalı analiz" },
      { label: 'C', text: "Yüzde analizi" },
      { label: 'D', text: "Dikey analiz" },
      { label: 'E', text: "Oran analizi" }
    ],
    correctLabel: 'A'
  },
  {
    number: 2,
    text: "Trend analizi ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      { label: 'A', text: "Eğilim yüzdeleri endeks şeklinde ve genellikle pozitif değerlerdir." },
      { label: 'B', text: "Eğilim yüzdesi 100'ün altında olan kalemler, baz yıla göre azalmıştır." },
      { label: 'C', text: "Eğilim yüzdeleri aynı seyri göstermiyorsa, ilgili kalemin eğiliminden söz edilemez." },
      { label: 'D', text: "Kapsamına göre statik analizdir." },
      { label: 'E', text: "İstatistiksel (regresyon analizi) yöntemlerin kullanılabildiği bir analiz tekniğidir." }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 3,
    text: "Trend analizi ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      { label: 'A', text: "Mali tablo kalemlerinin uzun sürede göstermiş olduğu eğilimlerin incelenmesi amacıyla uygulanır." },
      { label: 'B', text: "Baz yılda rakamı olmayan bir kalemin, diğer yıllar için eğilim yüzdesi hesaplanamaz." },
      { label: 'C', text: "İstikrarlı bir yıl baz yıl olarak kabul edilmektedir." },
      { label: 'D', text: "Dinamik analizdir." },
      { label: 'E', text: "Bu analiz tekniğinde finansal tabloda yer alan her bir hesap kalemi, kendisinden bir önceki dönemin yine aynı finansal tablo kalemi ile mutlak olarak karşılaştırılmaktadır." }
    ],
    correctLabel: 'E'
  },
  {
    number: 4,
    text: "Aşağıda stok kalemine ilişkin yapılan hesaplamada soru işaretli yerlere aşağıdakilerden hangisi gelmelidir?\n\n<pre class=\"question-pre\">\n                    2013    2014    2015    2016\nStoklar             20.000  22.000  18.000  30.000\nEğilim Yüzdeleri    100     ?       ?       ?\n</pre>",
    options: [
      { label: 'A', text: "120 90 175" },
      { label: 'B', text: "125 75 120" },
      { label: 'C', text: "110 80 125" },
      { label: 'D', text: "110 90 150" },
      { label: 'E', text: "105 110 150" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 5,
    text: "Yukarıdaki yapılan hesaplamalarda hangi analiz tekniği uygulanmıştır?",
    options: [
      { label: 'A', text: "Dikey yüzdeleri analizi" },
      { label: 'B', text: "Yatay analiz" },
      { label: 'C', text: "Oran analizi" },
      { label: 'D', text: "Trend analizi" },
      { label: 'E', text: "Karşılaştırmalı analiz" }
    ],
    correctLabel: 'D'
  },
  {
    number: 6,
    text: "Ticari alacakların baz yıldaki ve 2016 yılındaki değerleri aşağıdakilerden hangisinde doğru olarak verilmiştir?\n\n<pre class=\"question-pre\">\n                    2014   2015     2016\nStoklar             ?      12.000   ?\nEğilim Yüzdeleri    100    75       150\n</pre>",
    options: [
      { label: 'A', text: "18.000 24.000" },
      { label: 'B', text: "15.000 20.000" },
      { label: 'C', text: "16.000 24.000" },
      { label: 'D', text: "17.500 25.000" },
      { label: 'E', text: "15.000 24.000" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 7,
    text: "Yukarıdaki yapılan hesaplamalarda hangi analiz tekniği uygulanmıştır?",
    options: [
      { label: 'A', text: "Trend analizi" },
      { label: 'B', text: "Dikey yüzdeleri analizi" },
      { label: 'C', text: "Yatay analiz" },
      { label: 'D', text: "Oran analizi" },
      { label: 'E', text: "Karşılaştırmalı analiz" }
    ],
    correctLabel: 'A'
  },
  {
    number: 8,
    text: "Trend veya eğilim yüzdeleri tekniği için en uygun analiz türü aşağıdakilerden hangisidir?\n\n9.\nI - Trend analizinin doğru sonuçlar verebilmesi için, baz yılın istikrarlı bir yıl olarak seçilmesi gerekir.\nII - Dikey Yüzdelere göre gelir tablosu analiz edilirken Dönem Net Kârı 100 olarak kabul edilir.\nIII - Mukayeseli Tablolar analizinde doğru değerlendirme yapabilmek için oranların yanında hesapların mutlak değerleri de göz önünde bulundurulmalı\n<br>Yukarıdaki ifadelerden hangileri doğrudur?",
    options: [
      { label: 'A', text: "Yalnız I" },
      { label: 'B', text: "Yalnız II" },
      { label: 'C', text: "Yalnız III" },
      { label: 'D', text: "I ve III" },
      { label: 'E', text: "I, II, II" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 10,
    text: "İşletmenin geçmişteki 5-10 yıllık dönemlerine ait finansal tablo verilerinden hareket ederek geleceğe yönelik ilişkiler belirlemeye olanak sağlayan analiz tekniğine ne ad verilir?",
    options: [
      { label: 'A', text: "Yatırım Analizi" },
      { label: 'B', text: "Dikey Analiz" },
      { label: 'C', text: "Statik Analiz" },
      { label: 'D', text: "Oran Analizi" },
      { label: 'E', text: "Trend Analizi" }
    ],
    correctLabel: 'E'
  }
];

const moduleMeta = {
  id: 'egilim_yuzdeleri_analizi',
  title: 'Eğilim Yüzdeleri (Trend) Analizi',
  description: "Trend analizinin yorumlanması, endeks hesapları ve baz yıl seçimlerine odaklanan soru seti.",
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
  additionalNotes: "Tablo içeren sorularda endeks değerleri soru metninde paylaşılır; hesaplamalar için ek bilgi gerekmez.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'egilimYuzdeleriHariciState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
