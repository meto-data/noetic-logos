const moduleQuestions = [
  {
    number: 1,
    text: "Aşağıdakilerden hangisi finansal tabloların taşıması gereken özelliklerden değildir?",
    options: [
      { label: 'A', text: "Anlaşılabilirlik" },
      { label: 'B', text: "İhtiyaca uygunluk" },
      { label: 'C', text: "Güvenilirlik" },
      { label: 'D', text: "Karşılaştırılabilirlik" },
      { label: 'E', text: "Subjektiflik" }
    ],
    correctLabel: 'E'
  },
  {
    number: 2,
    text: "Aşağıdakilerden hangisi bilançonun özelliklerinden değildir?",
    options: [
      { label: 'A', text: "İşletmenin belirli bir tarihteki varlıklarını ve bu varlıkların finansmanında kullanılan kaynakları gösterir." },
      { label: 'B', text: "Aktif tarafı işletmenin varlıklarından oluşmaktadır." },
      { label: 'C', text: "Pasif tarafı işletmenin finansman kaynaklarından oluşmaktadır." },
      { label: 'D', text: "Bilançonun varlıkları ve kaynakları birbirine eşittir." },
      { label: 'E', text: "Dinamik bir finansal tablodur." }
    ],
    correctLabel: 'E'
  },
  {
    number: 3,
    text: "Aşağıdakilerden hangisi bilançoda yer almaz.",
    options: [
      { label: 'A', text: "Net Satışlar" },
      { label: 'B', text: "Duran Varlıklar" },
      { label: 'C', text: "Kısa Vadeli Yabancı Kaynaklar" },
      { label: 'D', text: "Uzun Vadeli Yabancı Kaynaklar" },
      { label: 'E', text: "Özkaynaklar" }
    ],
    correctLabel: 'A'
  },
  {
    number: 4,
    text: "Bilançoda aşağıdakilerden hangisinin bulunması gerekmemektedir?",
    options: [
      { label: 'A', text: "İşletmenin adı" },
      { label: 'B', text: "Bilanço sözcüğü" },
      { label: 'C', text: "Bilançonun düzenlenme tarihi" },
      { label: 'D', text: "Bilançoda esas alınan para birimi" },
      { label: 'E', text: "İşletme genel müdürünün adı" }
    ],
    correctLabel: 'E'
  },
  {
    number: 5,
    text: "Aşağıdakilerden hangisi bilançonun varlıklarına ilişkin ilkelerden değildir?",
    options: [
      { label: 'A', text: "İşletmenin bir yıl veya normal faaliyet dönemi içinde paraya dönüşebilecek varlıklarının bilançoda dönen varlıklar grubu içinde gösterilmesi" },
      { label: 'B', text: "İşletmenin bir yıl veya normal faaliyet dönemi içinde paraya dönüşemeyen hizmetlerinden bir hesap döneminden daha uzun süre yararlanılan uzun vadeli varlıklarının bilançoda duran varlıklar grubu içinde gösterilmesi" },
      { label: 'C', text: "Varlıkların bilanço tarihindeki gerçeğe uygun değerleriyle gösterebilmesi için, varlıklardaki değer düşüklüklerini göstererek karşılıkların ayrılması" },
      { label: 'D', text: "Gelecek dönemlere ait olarak önceden ödenen giderlerin bilançoda ayrıca gösterilmesi" },
      { label: 'E', text: "Özkaynakların bilançoda net olarak gösterilmesi için geçmiş yıllar zararları ile dönem zararının özkaynaklar grubunda indirim kalemleri olarak yer alması" }
    ],
    correctLabel: 'E'
  },
  {
    number: 6,
    text: "Aşağıdakilerden hangisi yabancı kaynaklara ilişkin ilkelerden değildir?",
    options: [
      { label: 'A', text: "İşletmenin bir yıl veya normal faaliyet dönemi içinde vadesi gelmemiş borçları, bilançoda uzun vadeli yabancı kaynaklar grubu içinde gösterilir." },
      { label: 'B', text: "İşletmenin bir yıl veya normal faaliyet dönemi içinde vadesi gelen borçları, bilançoda kısa vadeli yabancı kaynaklar grubu içinde gösterilir." },
      { label: 'C', text: "Tutarları kesinlikle saptanamayan alacaklar için herhangi bir tahakkuk işlemi yapılmayarak bu tür alacaklar bilanço dipnot veya eklerinde gösterilir." },
      { label: 'D', text: "Borç senetlerini bilanço tarihindeki gerçeğe uygun değerleri ile gösterebilmek için reeskont işlemleri yapılmalıdır." },
      { label: 'E', text: "İşletmenin sermaye ve yönetim bakımından ilgili bulunduğu ortaklara, personele, iştiraklere ve bağlı ortaklıklara ait olan borç tutarlarının ayrı gösterilmelidir." }
    ],
    correctLabel: 'C'
  },
  {
    number: 7,
    text: "Aşağıdakilerden hangisi özkaynaklara ilişkin ilkelerden değildir?",
    options: [
      { label: 'A', text: "İşletmenin bilanço tarihindeki ödenmiş sermayesi ile işletme faaliyetleri sonucu oluşup, çeşitli adlar altında işletmede bırakılan kârları ile dönem net kârı (zararı) bilançoda özkaynaklar grubu içinde gösterilir." },
      { label: 'B', text: "İşletme sahip veya ortaklarının sahip veya ortak sıfatıyla işletme varlıkları üzerindeki hakları özkaynaklar grubunu oluşturur." },
      { label: 'C', text: "İşletmenin ödenmiş sermayesi bilançonun kapsamı içinde tek bir kalem olarak gösterilir." },
      { label: 'D', text: "Özkaynakların bilançoda net olarak gösterilmesi için geçmiş yıllar zararları ile dönem zararı, özkaynaklar grubunda indirim kalemleri olarak yer alır." },
      { label: 'E', text: "Bilanço tarihinde var olan ve sonucu belirsiz bir olayın gelecekte ortaya çıkıp çıkmamasına bağlı durumları ifade eden, şarta bağlı olaylardan kaynaklanan, makul bir şekilde gerçeğe yakın olarak tahmin edilebilen gider ve zararlar, tahakkuk ettirilerek özkaynaklar içinde gösterilmesi." }
    ],
    correctLabel: 'E'
  },
  {
    number: 8,
    text: "İşletmenin belirli bir dönemde elde ettiği tüm gelirler ile aynı dönemde bu gelirleri elde etmek için katlanmış olduğu giderleri ve bunların sonucunda işletmenin elde etmiş olduğu dönem net kârını ya da dönemin net zararını gösteren muhasebe raporu aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Bilanço" },
      { label: 'B', text: "Özkaynaklar" },
      { label: 'C', text: "Satışların Maliyeti Tablosu" },
      { label: 'D', text: "Nakit Akış Tablosu" },
      { label: 'E', text: "Gelir Tablosu" }
    ],
    correctLabel: 'E'
  },
  {
    number: 9,
    text: "Aşağıdakilerden hangisi işletmenin belirli bir dönemdeki faaliyetlerinin sonucunu göstermektedir.",
    options: [
      { label: 'A', text: "Bilanço" },
      { label: 'B', text: "Nakit Akım Tablosu" },
      { label: 'C', text: "Satışların Maliyeti Tablosu" },
      { label: 'D', text: "Fon Akım Tablosu" },
      { label: 'E', text: "Gelir Tablosu" }
    ],
    correctLabel: 'E'
  },
  {
    number: 10,
    text: "Aşağıdakilerden hangisi gelir tablosunun düzenlenmesine ilişkin ilişkin ilkelerden değildir?",
    options: [
      { label: 'A', text: "Gerçekleşmemiş satışlar, gelir ve kârlar; gerçekleşmiş gibi gösterilmelidir." },
      { label: 'B', text: "Belirli bir dönemin satışları ve gelirleri bunları elde etmek için yapılan satışların maliyeti ve giderleri ile karşılaştırılmalıdır." },
      { label: 'C', text: "Arızi ve olağanüstü niteliğe sahip kâr ve zararlar meydana geldikleri dönemde tahakkuk ettirilmeli, fakat normal faaliyet sonuçlarından ayrı olarak gösterilmelidir." },
      { label: 'D', text: "Karşılıklar, işletmenin kârını keyfi bir şekilde azaltmak veya bir döneme ait kârı diğer döneme aktarmak amacıyla kullanılmamalıdır." },
      { label: 'E', text: "Şarta bağlı gelir ve kârların gerçekleşme ihtimaline göre tahakkuk işlemi yapılmaz, dipnotlarda açıklama yapılır." }
    ],
    correctLabel: 'A'
  }
];

const moduleMeta = {
  id: 'temel_finansal_tablolar_ilkeler',
  title: 'Temel Finansal Tabloların İlkeleri',
  description: "Bilançonun ve gelir tablosunun düzenlenme esaslarını, varlık-kaynak ilkelerini sınayan detaylı bir çalışma.",
  focusAreas: [
    "Finansal tablolarda bulunması gereken nitelikler",
    "Bilanço ve gelir tablosu düzenleme ilkeleri",
    "Varlık, kaynak ve özkaynak sınıflandırmaları"
  ],
  learningObjectives: [
    "Bilançonun zorunlu bileşenlerini sıralamak",
    "Varlık ve kaynak kalemlerini doğru sınıflandırmak",
    "Gelir tablosu ilkelerinde yapılan hataları tespit etmek"
  ],
  additionalNotes: "Sorular ağırlıklı olarak kavramsal olmakla birlikte bilanço kalemlerinin doğru konumlandırılmasına odaklanır.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'temelFinansalTablolarIlkelerState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
