// Soru Veri Yapısı
// Not: Her soru 5 şık içerir ve yalnızca bir doğru cevap vardır.
/**
Örnek Soru Objesi:
{
  "soru": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
  "siklar": [
    "Türk Dil Kurumunun son yayımlarını takip ediyorum.",
    "Bu akşamki maça sen de gelecek misin?",
    "Herşey yolunda gibi görünüyordu ama değildi.",
    "Onunla en son 15 Haziran'da görüşmüştük.",
    "TBMM'nin aldığı kararlar herkesi bağlar."
  ],
  "dogruCevap": "Herşey yolunda gibi görünüyordu ama değildi."
}
*/

// 2- Dilin Sosyal Yönü (25)
const questionsSosyal = [
    // 1. Yan/Alt/Üst Katman, Egemen Kültür, İki Dillilik
    {
        soru: "Yan katman etkisi hangi durumu ifade eder?",
        siklar: [
            "Zorlayıcı bir egemenlik olmadan karşılıklı ilişkilerle dillerin birbirini etkilemesi",
            "Egemen toplumun dilinin yönetim yoluyla diğer dili baskılaması",
            "Fethedilen toplumun dilinin egemen toplumun dilini bütünüyle değiştirmesi",
            "Sadece teknik terimlerin bilim yoluyla aktarılması",
            "Tek taraflı kültürel asimilasyon politikalarının uygulanması"
        ],
        dogruCevap: "Zorlayıcı bir egemenlik olmadan karşılıklı ilişkilerle dillerin birbirini etkilemesi"
    },
    {
        soru: "Alt katman etkisi en iyi nasıl tanımlanır?",
        siklar: [
            "Egemen toplumun dili, egemenliği altındaki toplumların dilinden etkilenir",
            "Egemen toplumun dili, diğer dillere hiç etkide bulunmaz",
            "Eşit statüdeki dillerin karışmadan yan yana kullanılması",
            "Sadece alfabe değişimi yoluyla etkilenme",
            "Tercümanlık kurumunun kurulmasıyla dilsel yakınlaşma"
        ],
        dogruCevap: "Egemen toplumun dili, egemenliği altındaki toplumların dilinden etkilenir"
    },
    {
        soru: "Üst katman etkisinin tipik sonucu hangisidir?",
        siklar: [
            "Egemen toplumun dilinin yönetim ve eğitim alanlarında baskın hâle gelmesi",
            "İki dilin tamamen eşitlenerek birlikte kaybolması",
            "Yerel dillerin egemen dili fonetik olarak dönüştürmesi",
            "Yalnızca söz varlığında tek yönlü sadeleşme",
            "Siyasi egemenlik olmadan dinî terimlerin yayılması"
        ],
        dogruCevap: "Egemen toplumun dilinin yönetim ve eğitim alanlarında baskın hâle gelmesi"
    },
    {
        soru: "Egemen kültür etkisi hangi durumda ortaya çıkar?",
        siklar: [
            "Siyasî egemenlik olmaksızın din, medeniyet veya kültür alanlarında güçlü etkinin oluşması",
            "Yalnızca ekonomik yaptırımlar yoluyla terim aktarımı",
            "Bir dilin diğerini tamamen yasaklaması",
            "Sadece tek yönlü fonetik değişim",
            "Alfabenin zorla değiştirilmesi"
        ],
        dogruCevap: "Siyasî egemenlik olmaksızın din, medeniyet veya kültür alanlarında güçlü etkinin oluşması"
    },
    {
        soru: "İki dillilik için doğru tanım hangisidir?",
        siklar: [
            "Bir birey veya grubun iki dili işlevsel olarak birlikte kullanabilmesi",
            "İki dilin aynı kökten gelmesi sebebiyle benzeşmesi",
            "Bir dilin yalnızca evde kullanılması",
            "Yerel lehçelerin yazı dili hâline gelmesi",
            "Sadece eğitim dilinin yabancı olması"
        ],
        dogruCevap: "Bir birey veya grubun iki dili işlevsel olarak birlikte kullanabilmesi"
    },

    // 2. Örnekler
    {
        soru: "Uygurların Maniheizm ve Budizm'i benimsemeleriyle Çince ve Sanskritçeden çok sayıda dinî terim almaları hangi etkiye örnektir?",
        siklar: [
            "Egemen kültür etkisi",
            "Yan katman etkisi",
            "Alt katman etkisi",
            "Üst katman etkisi",
            "Lehçe etkisi"
        ],
        dogruCevap: "Egemen kültür etkisi"
    },
    {
        soru: "Karahanlılar döneminde İslamiyet'in kabulüyle Arapça ve Farsça kelimelerin Türkçeye girmesi daha çok neyin sonucudur?",
        siklar: [
            "Egemen kültür etkisi",
            "Üst katman etkisi",
            "Alt katman etkisi",
            "Yan katman etkisi",
            "Ses değişimi"
        ],
        dogruCevap: "Egemen kültür etkisi"
    },
    {
        soru: "Sovyet döneminde Rusçanın Türk toplulukları üzerindeki etkisi hangi etkiye örnek verilir?",
        siklar: [
            "Üst katman etkisi",
            "Alt katman etkisi",
            "Yan katman etkisi",
            "Egemen kültür etkisi",
            "Bölgesel lehçe etkisi"
        ],
        dogruCevap: "Üst katman etkisi"
    },
    {
        soru: "ABD'de yerli dillerden İngilizceye geçen kelimeler (ör. toponimler) hangi etkiye örnek olabilir?",
        siklar: [
            "Alt katman etkisi",
            "Üst katman etkisi",
            "Egemen kültür etkisi",
            "Yan katman etkisi",
            "Ses benzeşmesi"
        ],
        dogruCevap: "Alt katman etkisi"
    },
    {
        soru: "Tanzimat sonrası Fransızca kökenli kelimelerin Türkçeye yoğun girişi hangi etkiyle daha iyi açıklanır?",
        siklar: [
            "Egemen kültür etkisi",
            "Üst katman etkisi",
            "Alt katman etkisi",
            "Yan katman etkisi",
            "Yer değiştirme etkisi"
        ],
        dogruCevap: "Egemen kültür etkisi"
    },

    // 3. Dil ve Kültür – Millî Kültür
    {
        soru: "Kültür için en uygun tanım aşağıdakilerden hangisidir?",
        siklar: [
            "Bir toplumu millet hâline getiren, milletten millete değişen değerler bütünü",
            "Sadece tarım ve zanaatla ilişkili üretim biçimleri",
            "Yalnızca yazılı eserlerden ibaret miras",
            "Ekonomik kaynakların toplamı",
            "Toplumun yalnızca hukuk kurumları"
        ],
        dogruCevap: "Bir toplumu millet hâline getiren, milletten millete değişen değerler bütünü"
    },
    {
        soru: "Aşağıdakilerden hangisi maddî kültüre örnektir?",
        siklar: [
            "Alet, giyim, ev, yemek gibi ögeler",
            "Dil, din, tarih, hukuk gibi ögeler",
            "Atasözleri ve deyimler",
            "Bilimsel teoriler",
            "Efsaneler ve mitler"
        ],
        dogruCevap: "Alet, giyim, ev, yemek gibi ögeler"
    },
    {
        soru: "Aşağıdakilerden hangisi manevî kültüre örnektir?",
        siklar: [
            "Dil, din, tarih, hukuk ve ahlâk",
            "Alet ve teknolojik araçlar",
            "Geleneksel yemek tarifleri",
            "Mimarî yapılar",
            "Doğal kaynaklar"
        ],
        dogruCevap: "Dil, din, tarih, hukuk ve ahlâk"
    },
    {
        soru: "Dil ve kültür ilişkisini en iyi anlatan ifade hangisidir?",
        siklar: [
            "Dil, kültürün ilk ve temel ögesidir; bir kültür yaratıcısıdır",
            "Dil, kültürü yansıtmaz; yalnızca iletişim aracıdır",
            "Kültür dili belirler fakat dil kültürü etkilemez",
            "Dil ve kültür birbirinden tamamen bağımsızdır",
            "Dil sadece bilimsel kavramları taşır"
        ],
        dogruCevap: "Dil, kültürün ilk ve temel ögesidir; bir kültür yaratıcısıdır"
    },
    {
        soru: "W. Humboldt'un meşhur sözü hangi ilişkiye vurgu yapar?",
        siklar: [
            "Dil ile millet ruhunun özdeşliği",
            "Dil ile ekonomi arasındaki bağ",
            "Dil ile coğrafya arasındaki ilişki",
            "Dil ile teknoloji arasındaki ilişki",
            "Dil ile yazı sistemi arasındaki bağ"
        ],
        dogruCevap: "Dil ile millet ruhunun özdeşliği"
    },
    {
        soru: "'Türk milleti demek, Türk dili demektir' sözü aşağıdaki hangi sonucu destekler?",
        siklar: [
            "Dil, millî birlik ve beraberliğin temel taşıdır",
            "Dil, kültürden bağımsızdır",
            "Dil yalnızca bireysel bir araçtır",
            "Dil, millî kimlikle ilişkisizdir",
            "Dil sadece yazılı metinlerde yaşar"
        ],
        dogruCevap: "Dil, millî birlik ve beraberliğin temel taşıdır"
    },
    {
        soru: "Arapçada devenin renklerine ilişkin çok sayıda kelime bulunması hangi yorumla bağdaşır?",
        siklar: [
            "Söz varlığı, toplumun yaşam biçimi ve odaklarıyla ilişkilidir",
            "Söz varlığı, dillerin kökenini belirler",
            "Her dilde aynı kavramlar eşit sayıda kelimeyle karşılanır",
            "Dil, kültürü asla etkilemez",
            "Kelimelerin çokluğu dilin zayıflığını gösterir"
        ],
        dogruCevap: "Söz varlığı, toplumun yaşam biçimi ve odaklarıyla ilişkilidir"
    },
    {
        soru: "Türkçede at türleri ve renklerinin zengin söz varlığı neyin göstergesidir?",
        siklar: [
            "Toplumsal kültürel odakların dile yansıması",
            "Dilbilgisel sadeleşme",
            "Ekonomik güçlenme",
            "Yalnızca coğrafî yayılım",
            "Yabancı dillerin etkisi"
        ],
        dogruCevap: "Toplumsal kültürel odakların dile yansıması"
    },
    {
        soru: "Eskimoların kar için çok sayıda kelime kullanması hangi başlıkla daha çok ilişkilidir?",
        siklar: [
            "Dil ve kültür ilişkisi",
            "Dil ve düşünce ayrılığı",
            "Dil ve duygu",
            "İki dillilik",
            "Alt katman etkisi"
        ],
        dogruCevap: "Dil ve kültür ilişkisi"
    },

    // 4. Dil ve Düşünce
    {
        soru: "Platon'a göre düşünme hangi ifadeyle betimlenir?",
        siklar: [
            "Sessiz bir konuşmadır",
            "Sesli bir yazıdır",
            "Soyut bir imgedir",
            "Görsel bir anlatıdır",
            "Bedensel bir ritüeldir"
        ],
        dogruCevap: "Sessiz bir konuşmadır"
    },
    {
        soru: "Vygotsky'nin yaklaşımı aşağıdakilerden hangisiyle özetlenebilir?",
        siklar: [
            "Düşünme = dil + ses",
            "Düşünme = duygu − dil",
            "Düşünme = kültür × yazı",
            "Düşünme = beden dili",
            "Düşünme = sessizlik"
        ],
        dogruCevap: "Düşünme = dil + ses"
    },
    {
        soru: "Wittgenstein'a göre dilin sınırları neyi belirler?",
        siklar: [
            "Dünyanın sınırlarını",
            "Dilbilgisel hataları",
            "Toplumun nüfusunu",
            "Sesbilgisi kurallarını",
            "Yazı sistemini"
        ],
        dogruCevap: "Dünyanın sınırlarını"
    },
    {
        soru: "D. Ricks'in çalışması hangi savı destekler?",
        siklar: [
            "Düşüncenin dil olmadan da ortaya çıkabileceği",
            "Dilin düşünceden bağımsız olamayacağı",
            "Yalnızca yazının düşünceyi mümkün kıldığı",
            "Duyguların dili belirlediği",
            "Tüm kavramların doğuştan verildiği"
        ],
        dogruCevap: "Düşüncenin dil olmadan da ortaya çıkabileceği"
    },
    {
        soru: "Langacker hangi örnek üzerinden düşüncenin dilden bağımsız olabileceğini tartışır?",
        siklar: [
            "Müzik bestelemek veya heykel yapmak",
            "Tarih yazmak",
            "Hukuk metni oluşturmak",
            "Dinî metin tercümesi",
            "Sözlük yazımı"
        ],
        dogruCevap: "Müzik bestelemek veya heykel yapmak"
    },

    // 5. Dil ve Duygu – İletişim
    {
        soru: "Dil olmadan duygu ifadesi hakkında hangisi doğrudur?",
        siklar: [
            "Beden diliyle ifade mümkündür fakat sınırlıdır",
            "Duygular hiç ifade edilemez",
            "Sadece yazıyla ifade mümkündür",
            "Yalnızca jestler yeterlidir ve sınırsızdır",
            "Duygu iletimi dilden bağımsız ve tamdır"
        ],
        dogruCevap: "Beden diliyle ifade mümkündür fakat sınırlıdır"
    },
    {
        soru: "Aşağıdakilerden hangisi iletişimin en temel aracı olarak vurgulanır?",
        siklar: [
            "Dil",
            "Görsel sanat",
            "Müzik",
            "Dans",
            "Mim"
        ],
        dogruCevap: "Dil"
    },
    {
        soru: "Dil → İletişim → Başarı formülü neyi anlatır?",
        siklar: [
            "Dili iyi kullanma becerisi etkili iletişim ve başarıyla ilişkilidir",
            "Başarı yalnızca teknik bilgiyle sağlanır",
            "İletişim dili gereksiz kılar",
            "Başarı ile dil arasında hiçbir bağ yoktur",
            "Yalnızca yazı dili başarıyı belirler"
        ],
        dogruCevap: "Dili iyi kullanma becerisi etkili iletişim ve başarıyla ilişkilidir"
    },
    {
        soru: "Hayati Develi'nin görüşüne göre insanlar karşısındakiler hakkında hangi yoldan yargıya varır?",
        siklar: [
            "Dil kullanımını gözlemleyerek",
            "Yalnızca kıyafete bakarak",
            "Doğum yerine göre",
            "Sadece ekonomik durumla",
            "Yalnızca yaşa göre"
        ],
        dogruCevap: "Dil kullanımını gözlemleyerek"
    },
    {
        soru: "Dillerin neden çeşitlenip farklı topluluklara ayrıldığını açıklayan Tevrat kökenli anlatı aşağıdakilerden hangisidir?",
        siklar: [
            "Babil Kulesi Efsanesi",
            "Yansıma Kuramı",
            "İş (Labor) Kuramı",
            "Nuh Tufanı",
            "Platon'un Kratylos Diyaloğu"
        ],
        dogruCevap: "Babil Kulesi Efsanesi"
    },
    {
        soru: "Platon'un Kratylos diyalogunda 'ad koyucu' hakkında hangi sonuca varılır?",
        siklar: [
            "Adlar tamamen rastgele verilmiştir",
            "Adlar yazı icat edilince ortaya çıkmıştır",
            "Adların doğruluğu ölçülemez",
            "Adları koyan kişi bu işin ustasıdır",
            "Ad koyucu toplum değil, devlettir"
        ],
        dogruCevap: "Adları koyan kişi bu işin ustasıdır"
    },
    {
        soru: "Doğuştancılar arasında aşağıdakilerden hangisi yer almaz?",
        siklar: [
            "J.G. Hamann",
            "J.G. Herder",
            "Platon",
            "Wundt",
            "Herakleitos'a 'dilin kelimeleri doğuştandır' atfı"
        ],
        dogruCevap: "Wundt" // Wundt is an experimentalist
    },
    {
        soru: "Wundt'un dilin doğuşu hakkındaki görüşü aşağıdakilerden hangisidir?",
        siklar: [
            "Dil, sadece yazı icat edilince ortaya çıkmıştır.",
            "Dil, tek bir kişinin icadıdır.",
            "Dil seslerinin ilk aşaması fizikî veya ruhî anlam taşıyan hayvanî ses belirtilerinden oluşur.",
            "Dil, sadece duygusal tepkilerden oluşur.",
            "Dil, sadece doğadaki seslerin taklididir."
        ],
        dogruCevap: "Dil seslerinin ilk aşaması fizikî veya ruhî anlam taşıyan hayvanî ses belirtilerinden oluşur."
    },
    {
        soru: "Dilin milleti birleştirip korumasının önemi aşağıdakilerden hangisiyle açıklanır?",
        siklar: [
            "Dil, millî kimlikle ilişkili değildir",
            "Millî kimlik sadece ekonomik göstergelerle korunur",
            "Dilin muhafazası millî kimliğin muhafazasıdır",
            "Dil değiştikçe kimlik güçlenir",
            "Dil, siyasetten tamamen bağımsızdır"
        ],
        dogruCevap: "Dilin muhafazası millî kimliğin muhafazasıdır"
    },
    {
        soru: "Atatürk'e göre dil ve millî his arasındaki ilişki için doğru ifade hangisidir?",
        siklar: [
            "Dil, millî his üzerinde etkisizdir",
            "Millî his, dilden bağımsız biçimde gelişir",
            "Dilin millî ve zengin olması, millî hissin gelişmesinde başlıca etkendir",
            "Dil, yalnızca bilimsel terimleri etkiler",
            "Dil, sadece yazı dili olursa millî his gelişir"
        ],
        dogruCevap: "Dilin millî ve zengin olması, millî hissin gelişmesinde başlıca etkendir"
    },
    {
        soru: "Söz ve yazı ilişkisi bakımından doğru olan hangisidir?",
        siklar: [
            "Yazı, sözden eskidir; söz yazıdan türemiştir",
            "Söz ve yazı aynı anda ortaya çıkmıştır",
            "Söz, yazıdan eskidir; yazı sözün kayıt altına alınması için keşfedilmiştir",
            "Söz, yazının bir alt sistemidir",
            "Yazı, sözün yerini bütünüyle almıştır"
        ],
        dogruCevap: "Söz, yazıdan eskidir; yazı sözün kayıt altına alınması için keşfedilmiştir"
    },
    {
        soru: "Aşağıdakilerden hangisi dilin kendisine ait kanunları (kuralları) olduğuna bir örnektir?",
        siklar: [
            "Dilin zamanla değişmesi",
            "Yapay dillerin başarısızlığı",
            "Büyük Ünlü Uyumu gibi kuralların varlığı",
            "Dilin anlaşma aracı olması",
            "Dilin sadece sözlü olması"        ],
        dogruCevap: "Büyük Ünlü Uyumu gibi kuralların varlığı"
    },
    {
        soru: "Dillerin kökeni hakkında 'deneyimle öğrenilir' görüşünü savunanlar kimlerdir?",
        siklar: [
            "J.G. Hamann",
            "J.G. Herder",
            "Platon",
            "Horatius",
            "Wundt"
        ],
        dogruCevap: "Horatius"
    },
    {
        soru: "Aşağıdakilerden hangisi dilin 'tabii (doğal) bir araç' olduğu niteliğini destekler?",
        siklar: [
            "Dilin sadece yazılı iletişime hizmet etmesi",
            "Dilin bir âlim tarafından icat edilmesi",
            "Her toplumun kendi dil mantığı ve kültürüyle dilini kendiliğinden oluşturması",
            "Dilin sabit ve değişmez bir yapıya sahip olması",
            "Yapılan tüm yapay dillerin geniş kabul görmesi"
        ],
        dogruCevap: "Her toplumun kendi dil mantığı ve kültürüyle dilini kendiliğinden oluşturması"
    }
];

// 3- Dil Türleri (25) – kaynağı: yenisoru.md
const questionsTurleri = [
    { soru: "\"Ana dil\" tanımı aşağıdakilerden hangisidir?", siklar: [
        "Bireyin okulda öğrendiği ilk kurallı dildir.",
        "Bir ülkenin resmî yazışmalarda kullandığı standart dildir.",
        "İnsanın başlangıçta ailesinden ve yakın çevresinden öğrendiği, toplumla güçlü bağ kurduğu dildir.",
        "Sadece edebî eserler üretmek için kullanılan gelişmiş dildir.",
        "Farklı milletlerin anlaşmak için oluşturduğu yapma dildir."
    ], dogruCevap: "İnsanın başlangıçta ailesinden ve yakın çevresinden öğrendiği, toplumla güçlü bağ kurduğu dildir." },
    { soru: "Tarihî dönemde ayrılarak büyük farklılık gösteren dil kollarına ne ad verilir?", siklar: [
        "Ağız", "Şive", "Argo", "Lehçe", "Jargon"
    ], dogruCevap: "Lehçe" },
    { soru: "Azerbaycan Türkçesine ait cümle hangisidir?", siklar: [
        "Karga karganın gözünü oymaz.",
        "Garga garganıng gözün çokmaz.",
        "Karğa karğanıng közin şokımas.",
        "Karga karganın gözünü çıkartmaz.",
        "Karga karganıng közüni çokumas."
    ], dogruCevap: "Karga karganın gözünü çıkartmaz." },
    { soru: "'Geliyorum' fiilinin 'geliyom, gelirem, geliyi' gibi söyleyişleri hangi türe örnektir?", siklar: [
        "Ağız", "Lehçe", "Yazı dili", "Resmî dil", "Yapma dil"
    ], dogruCevap: "Ağız" },
    { soru: "Günümüz Türkiye Türkçesi yazı dili hangi ağıza dayanır?", siklar: [
        "Konya", "Ankara", "Karadeniz", "İstanbul", "Rumeli"
    ], dogruCevap: "İstanbul" },
    { soru: "Bir ülkede kanunla belirlenip yazışmalarda kullanılması zorunlu olan dil nedir?", siklar: [
        "Uygarlık dili", "Bilim dili", "Resmî dil", "Edebî dil", "Ana dil"
    ], dogruCevap: "Resmî dil" },
    { soru: "Esperanto, Volapük ve Bâleybelen gibi diller hangi sınıfa girer?", siklar: [
        "Ölü diller", "Doğal diller", "Jargon", "Argo", "Yapma diller"
    ], dogruCevap: "Yapma diller" },
    { soru: "Belirli bir meslek veya zümreye özgü, dışarıdakilerin anlamaması için kullanılan dil?", siklar: [
        "Argo", "Jargon", "Lehçe", "Ağız", "Şive"
    ], dogruCevap: "Jargon" },
    { soru: "Kuralcı (prescriptive) yaklaşımı benimseyen alan hangisidir?", siklar: [
        "Filoloji", "Dil Bilimi", "Etimoloji", "Dil Bilgisi (Gramer)", "Anlambilim"
    ], dogruCevap: "Dil Bilgisi (Gramer)" },
    { soru: "Dili olduğu gibi, nesnel olarak betimleyen alan hangisidir?", siklar: [
        "Dil Bilgisi (Gramer)", "Filoloji", "Terminoloji", "Sentaks", "Dil Bilimi (Lengüistik)"
    ], dogruCevap: "Dil Bilimi (Lengüistik)" },
    { soru: "Yazılı metinler üzerinden dili ve tarihsel gelişimini inceleyen alan?", siklar: [
        "Dil Bilimi (Lengüistik)", "Filoloji (Betikbilim)", "Dil Bilgisi (Gramer)", "Fonetik", "Morfoloji"
    ], dogruCevap: "Filoloji (Betikbilim)" },
    { soru: "Dilbilimcilerin dilleri \"gelişmiş/gelişmemiş\" diye nitelememesinin nedeni?", siklar: [
        "Tümü aynı kökenden gelir", "Sözcük sayısı her zaman belirleyici değildir", "Her doğal dil, konuşurunun tüm ihtiyacını karşılar", "Zamanla hepsi gelişir", "Ölçüm aracı yoktur"
    ], dogruCevap: "Her doğal dil, konuşurunun tüm ihtiyacını karşılar" },
    { soru: "Doğan Aksan'a göre zenginlik ölçütlerinden hangisi değildir?", siklar: [
        "Sözcük sayısının durumu", "Soyut ve somut kavramları karşılama gücü", "Aynı alan için farklı anlatım yolları", "Söz varlığının kendi sözcüklerinden oluşma oranı", "Gramer kurallarının diğer dillerden farkı"
    ], dogruCevap: "Gramer kurallarının diğer dillerden farkı" },
    { soru: "TDK Büyük Türkçe Sözlük'te belirtilen toplam söz varlığı?", siklar: [
        "122.423", "200.000", "450.000", "616.767", "92.292"
    ], dogruCevap: "616.767" },
    { soru: "'Kayınbirader, bacanak, elti, görümce' örneği hangi ölçütü gösterir?", siklar: [
        "Kendi sözcük oranı", "Ayrıntılı adlandırma gücü", "Sözcük sayısı fazlalığı", "Lehçe çeşitliliği", "Anlatım yolları çeşitliliği"
    ], dogruCevap: "Ayrıntılı adlandırma gücü" },
    { soru: "'Dövüşmek' alanındaki çok sayıdaki sözcük neyi vurgular?", siklar: [
        "Türetme gücü", "Yabancı etkisinden arınmışlık", "Gramer karmaşıklığı", "Aynı alan için çeşitli sözcük ve anlatım", "Kendi kök oranı"
    ], dogruCevap: "Aynı alan için çeşitli sözcük ve anlatım" },
    { soru: "Konuşanı kalmadığı için \"ölü dil\" sayılanlar?", siklar: [
        "Türkçe ve İngilizce", "Esperanto ve Volapük", "Sümerce ve Hititçe", "Arapça ve Farsça", "Moğolca ve Almanca"
    ], dogruCevap: "Sümerce ve Hititçe" },
    { soru: "'Anafor, tırnakçı, cavlağı çekmek' gibi örnekler hangi türe aittir?", siklar: [
        "Argo", "Jargon", "Lehçe", "Standart dil", "Resmî dil"
    ], dogruCevap: "Argo" },
    { soru: "Söz varlığının önemli bölümü yabancı kökenli olan gelişmiş kültür dili?", siklar: [
        "Almanca", "Türkçe", "Arapça", "İngilizce", "İtalyanca"
    ], dogruCevap: "İngilizce" },
    { soru: "Yazı dilinin diğer adı ve toplumun kültürünü ifade eden tür?", siklar: [
        "Konuşma dili", "Argo", "Edebî dil", "Jargon", "Ağız"
    ], dogruCevap: "Edebî dil" },
    { soru: "Osmanlıcada 'kavâid, sarf ü nahiv' hangi kavrama karşılık gelir?", siklar: [
        "Linguistics", "Philology", "Gramer (Grammar)", "Semantics", "Etymology"
    ], dogruCevap: "Gramer (Grammar)" },
    { soru: "Konuşma dilinin yazı dilinden geniş sayılmasının temel sebebi?", siklar: [
        "Daha fazla kelime içermesi", "Kurallarının karmaşık olması", "Vurgu ve tonlama gibi yazıda olmayan unsurları barındırması", "Daha eski olması", "Daha çok kişi kullanması"
    ], dogruCevap: "Vurgu ve tonlama gibi yazıda olmayan unsurları barındırması" },
    { soru: "Söz varlığının çevreyle ilişkisini en iyi destekleyen örnek?", siklar: [
        "İngilizcede Latince kökler", "Çöl ve kutup topluluklarında uygun alan kelime zenginliği", "Yazı dilinin İstanbul ağzına dayanması", "Almancada felsefe terimleri", "TDK'de 600 binden fazla madde"
    ], dogruCevap: "Çöl ve kutup topluluklarında uygun alan kelime zenginliği" },
    { soru: "Yanlış eşleştirme hangisidir?", siklar: [
        "Dil Bilimi → Dili nesnel inceler", "Filoloji → Eserleri tarihsel bağlamda inceler", "Dil Bilgisi → Bir dilin sadece söz varlığını inceler", "Lehçe → Tarihî olarak ayrılmış kollardır", "Ağız → Bölgesel telaffuz farklılıklarıdır"
    ], dogruCevap: "Dil Bilgisi → Bir dilin sadece söz varlığını inceler" },
    { soru: "Metnin bütününe göre Türkçeyle ilgili hangisine varılamaz?", siklar: [
        "Söz varlığı zengindir", "Soyut-somut kavramlarda anlatım gücü yüksektir", "Yabancı etkiler olsa da yapı ve türetmeyle zengindir", "Bilimsel terim eksikliği yapısal yetersizliktendir", "İstanbul ağzına dayalı standart yazı dili vardır"
    ], dogruCevap: "Bilimsel terim eksikliği yapısal yetersizliktendir" }
];

// 3 - Dilin Sınıflandırılması (28) – kaynağı: 3-.md
const questionsSinif = [
    { soru: "Dillerin yapı bakımından sınıflandırılması hangi dilbilimci tarafından ilk kez yapılmıştır?", siklar: [
        "Jean Deny", "Muharrem Ergin", "A. Von Schleicher", "Max Müller", "Osman Nedim Tuna"
    ], dogruCevap: "A. Von Schleicher" },
    { soru: "Kelimelerin türetme ve çekim eki almadığı, anlamın cümledeki sıra ve vurguyla belirlendiği dil grubu hangisidir?", siklar: [
        "Bükümlü (Çekimli) Diller", "Eklemeli (Bağlantılı) Diller", "Tek Heceli (Yalınlayan) Diller", "Hami-Sami Dilleri", "Ural-Altay Dilleri"
    ], dogruCevap: "Tek Heceli (Yalınlayan) Diller" },
    { soru: "Çince, Vietnamca ve Tibetçe gibi diller yapısal olarak hangi kategoriye girer?", siklar: [
        "Bükümlü Diller", "Eklemeli Diller", "Tek Heceli (Yalınlayan) Diller", "Çekimli Diller", "Hint-Avrupa Dilleri"
    ], dogruCevap: "Tek Heceli (Yalınlayan) Diller" },
    { soru: "Kelime kökünün değişmeden sabit kaldığı ve yeni anlamlar türetmek için sonuna ekler getirildiği dil grubu hangisidir?", siklar: [
        "Yalınlayan Diller", "Bükümlü Diller", "Eklemeli (Bağlantılı) Diller", "Hami-Sami Dilleri", "Tek Heceli Diller"
    ], dogruCevap: "Eklemeli (Bağlantılı) Diller" },
    { soru: "Aşağıdaki dillerden hangisi yapı bakımından Türkçe ile aynı grupta yer alır?", siklar: [
        "Arapça", "İngilizce", "Japonca", "Çince", "İbranice"
    ], dogruCevap: "Japonca" },
    { soru: "Kelime türetilirken kökteki sesli ve sessiz harflerin değişime uğradığı, kökün içten kırılarak yeni kelimeler oluşturduğu dil grubu hangisidir?", siklar: [
        "Eklemeli Diller", "Bükümlü (Çekimli) Diller", "Tek Heceli Diller", "Altay Dilleri", "Yalınlayan Diller"
    ], dogruCevap: "Bükümlü (Çekimli) Diller" },
    { soru: "Aşağıdaki dillerden hangisi Bükümlü (Çekimli) dillere bir örnektir?", siklar: [
        "Türkçe", "Macarca", "Çince", "Arapça", "Korece"
    ], dogruCevap: "Arapça" },
    { soru: "Türkçe, köken (genetik) bakımından hangi dil ailesinin hangi kolunda yer alır?", siklar: [
        "Hint-Avrupa ailesinin Germen kolu", "Hami-Sami ailesinin Sami kolu", "Ural-Altay ailesinin Altay kolu", "Çin-Tibet ailesinin Tibet kolu", "Kafkas dilleri ailesi"
    ], dogruCevap: "Ural-Altay ailesinin Altay kolu" },
    { soru: "Dünyanın en yaygın ve en kalabalık nüfusa sahip dil ailesi aşağıdakilerden hangisidir?", siklar: [
        "Ural-Altay Dilleri", "Hint-Avrupa Dilleri", "Hami-Sami Dilleri", "Çin-Tibet Dilleri", "Bantu Dilleri"
    ], dogruCevap: "Hint-Avrupa Dilleri" },
    { soru: "Aşağıdaki dillerden hangisi Altay dilleri kolu içerisinde yer alır?", siklar: [
        "Fince", "Macarca", "Mançu-Tunguzca", "Farsça", "Estçe"
    ], dogruCevap: "Mançu-Tunguzca" },
    { soru: "Altay dillerinin ortak özellikleri arasında aşağıdakilerden hangisi yer almaz?", siklar: [
        "Kelimelerde ünlü uyumu bulunur.", "Kelimelerde eril-dişil (cinsiyet) ayrımı vardır.", "Cümle dizilimi genellikle özne-nesne-yüklem şeklindedir.", "Kelime türetilirken kökler sabit kalır.", "the, a/an gibi tanımlıklar (article) bulunmaz."
    ], dogruCevap: "Kelimelerde eril-dişil (cinsiyet) ayrımı vardır." },
    { soru: "Hami-Sami dil ailesi denildiğinde, akla öncelikle hangi diller ve coğrafya gelmelidir?", siklar: [
        "Doğu Asya; Çince, Japonca", "Güney Afrika; Bantu dilleri", "İskandinavya; İsveççe, Norveççe", "Orta Doğu ve Arap Yarımadası; Arapça, İbranice", "Kafkasya; Gürcüce, Çerkezce"
    ], dogruCevap: "Orta Doğu ve Arap Yarımadası; Arapça, İbranice" },
    { soru: "Afrika'nın orta ve güney bölgelerinde konuşulan dilleri kapsayan dil ailesi hangisidir?", siklar: [
        "Hami-Sami Dilleri", "Kafkas Dilleri", "Bantu Dilleri", "Çin-Tibet Dilleri", "Ural Dilleri"
    ], dogruCevap: "Bantu Dilleri" },
    { soru: "Gürcüce, Lazca ve Çerkezce gibi diller, köken bakımından hangi dil grubu içinde sınıflandırılmıştır?", siklar: [
        "Altay Dilleri", "Slav Dilleri", "Hami-Sami Dilleri", "Kafkas Dilleri", "Germen Dilleri"
    ], dogruCevap: "Kafkas Dilleri" },
    { soru: "Ermenicenin Hint-Avrupa dil ailesi içindeki konumuyla ilgili aşağıdakilerden hangisi doğrudur?", siklar: [
        "Asya kolunda bulunur ancak herhangi bir alt gruba dahil olmayan bağımsız bir dildir.", "Asya kolunun İran dilleri grubuna aittir.", "Avrupa kolunun Slav dilleri grubuna aittir.", "Aslında Ural-Altay ailesine ait bir dildir.", "Hint-Urdu dilleri grubunun bir lehçesidir."
    ], dogruCevap: "Asya kolunda bulunur ancak herhangi bir alt gruba dahil olmayan bağımsız bir dildir." },
    { soru: "İngilizce, Almanca, Fransızca, Rusça ve Farsça gibi diller hangi dil ailesi içinde gruplandırılır?", siklar: [
        "Ural-Altay Dilleri", "Hami-Sami Dilleri", "Kafkas Dilleri", "Hint-Avrupa Dilleri", "Çin-Tibet Dilleri"
    ], dogruCevap: "Hint-Avrupa Dilleri" },
    { soru: "Rusça, Sırpça ve Lehçe gibi diller, Hint-Avrupa ailesinin hangi alt grubuna dahildir?", siklar: [
        "Germen Dilleri", "Slav Dilleri", "Latin Dilleri", "Kelt Dilleri", "Asya Kolu"
    ], dogruCevap: "Slav Dilleri" },
    { soru: "İngilizce, Almanca ve İsveççe gibi diller, Hint-Avrupa dil ailesinin hangi alt grubunda yer almaktadır?", siklar: [
        "Germen Dilleri", "Slav Dilleri", "Latin Dilleri", "Hint Dilleri", "Kelt Dilleri"
    ], dogruCevap: "Germen Dilleri" },
    { soru: "Fransızca, İspanyolca ve İtalyanca gibi diller, Hint-Avrupa ailesinin hangi alt grubunda yer alır?", siklar: [
        "Germen Dilleri", "Slav Dilleri", "Latin Dilleri", "Hint-İran Dilleri", "Kelt Dilleri"
    ], dogruCevap: "Latin Dilleri" },
    { soru: "Türkçeye en yakın dil olarak kabul edilen dil hangisidir?", siklar: [
        "Japonca", "Macarca", "Fince", "Moğolca", "Arapça"
    ], dogruCevap: "Moğolca" },
    { soru: "Türkçenin günümüze ulaşan en eski yazılı belgeleri hangileridir?", siklar: [
        "Divan-ı Lügati't-Türk", "Dede Korkut Hikayeleri", "Yenisey-Orhun Kitabeleri", "Kutadgu Bilig", "Sümer Tabletleri"
    ], dogruCevap: "Yenisey-Orhun Kitabeleri" },
    { soru: "\"Büyük imparatorluklar kurabilmiş olması, Türkçenin ilkel ve yetersiz bir dil olmadığını gösterir\" düşüncesi ne olarak adlandırılır?", siklar: [
        "Matematiksel yapı argümanı", "Yaygınlık argümanı", "İmparatorluk argümanı", "Tarihsel derinlik argümanı", "Fonetik zenginlik argümanı"
    ], dogruCevap: "İmparatorluk argümanı" },
    { soru: "Tamlamalarda tamlayanın tamlanandan önce gelmesi, hangi dil grubunun ortak özelliğidir?", siklar: [
        "Altay Dilleri", "Hami-Sami Dilleri", "Latin Dilleri", "Slav Dilleri", "Germen Dilleri"
    ], dogruCevap: "Altay Dilleri" },
    { soru: "Prof. Dr. Osman Nedim Tuna'ya göre Türkçenin yaşı yaklaşık ne kadardır?", siklar: [
        "2500 yıl", "4000 yıl", "5500 yıl", "8500 yıl", "1500 yıl"
    ], dogruCevap: "8500 yıl" },
    { soru: "\"Türkçe dil bilgisi kitabını okumak... zevktir...\" diyerek Türkçenin düzenliliğini öven Alman bilim adamı kimdir?", siklar: [
        "Jean Deny", "Max Müller", "A. Von Schleicher", "Johan Vandavella", "Muharrem Ergin"
    ], dogruCevap: "Max Müller" },
    { soru: "\"Türk dili belki de dünyanın en matematik dilidir.\" diyen Türk dil bilgini kimdir?", siklar: [
        "Nadir Engin Uzun", "Osman Nedim Tuna", "Muharrem Ergin", "G. Sağol", "Hilal Zengin"
    ], dogruCevap: "Muharrem Ergin" },
    { soru: "\"Türkistan bozkırları ortasında... yarattığı bu dili...\" sözü kime aittir?", siklar: [
        "Jean Deny", "Max Müller", "Muharrem Ergin", "Osman Nedim Tuna", "A. Von Schleicher"
    ], dogruCevap: "Jean Deny" },
    { soru: "1988'de Babil Dünya Dil Ödülü'nü kazanan ve Türkçeyi satranca benzeten dilbilimci kimdir?", siklar: [
        "Max Müller", "Muharrem Ergin", "Jean Deny", "Johan Vandavella", "Osman Nedim Tuna"
    ], dogruCevap: "Johan Vandavella" }
];

// 7 - Yeni Türkçe Dönemi (25) – kaynağı: 7- Yeni Türkçe Dönemi.md
const questionsYeni = [
    { soru: "Türk dili, 13. yüzyılda Moğol istilası sonrası ilk defa hangi iki ana yazı dili koluna ayrılmıştır?", siklar: [
        "Köktürkçe ve Uygurca",
        "Kıpçakça ve Çağatayca",
        "Doğu Türkçesi ve Batı Türkçesi",
        "Osmanlıca ve Hakaniye Lehçesi",
        "Eski Anadolu Türkçesi ve Azerbaycan Türkçesi"
    ], dogruCevap: "Doğu Türkçesi ve Batı Türkçesi" },
    { soru: "Aşağıdaki şemalardan hangisi Türkçenin Yeni Türkçe dönemindeki temel dallanmasını doğru göstermektedir?", siklar: [
        "Türkçe → Oğuzca → Osmanlıca",
        "Türkçe → Kıpçakça → Çağatayça",
        "Türkçe → Doğu Türkçesi → Kıpçakça",
        "Türkçe → Batı Türkçesi → Güneybatı Türkçesi (Oğuz Grubu)",
        "Türkçe → Doğu Türkçesi → Eski Anadolu Türkçesi"
    ], dogruCevap: "Türkçe → Batı Türkçesi → Güneybatı Türkçesi (Oğuz Grubu)" },
    { soru: "Osmanlı Türkçesinin 16-19. yüzyıllar arasını kapsayan, dilin Arapça ve Farsça kurallarla en ağırlaştığı döneme ne ad verilir?", siklar: [
        "Yeni Osmanlıca",
        "Eski Anadolu Türkçesi",
        "Tanzimat Türkçesi",
        "Klasik Osmanlıca",
        "Çağatayca"
    ], dogruCevap: "Klasik Osmanlıca" },
    { soru: "Klasik Osmanlıca döneminde dilin ağırlaşmasının temel sebebi aşağıdakilerden hangisidir?", siklar: [
        "Sadece halk dilinden kelimeler alınması",
        "Arapça ve Farsçadan sadece kelime değil, aynı zamanda gramer kurallarının ve tamlamaların da alınması",
        "Diğer Türk lehçelerinden yoğun kelime alınması",
        "Sadece İstanbul ağzının yazı diline temel alınması",
        "Batı dillerinden yapılan çevirilerin artması"
    ], dogruCevap: "Arapça ve Farsçadan sadece kelime değil, aynı zamanda gramer kurallarının ve tamlamaların da alınması" },
    { soru: "Ders notunda \"Osmanlı Türkçesinde sadeliği bozan ögeler\" olarak belirtilen asıl unsur aşağıdakilerden hangisidir?", siklar: [
        "Halkın diline girmiş \"kitap, kalem, akıl\" gibi yabancı kökenli sözler",
        "Divan şairlerinin kullandığı Türkçe kelimeler",
        "Hece ölçüsüyle yazılmış şiirler",
        "Halkın diline girmemiş Arapça, Farsça sözler ile bu dillerin ekleri ve gramer kuralları",
        "Konuşma dilindeki yöresel ağız farklılıkları"
    ], dogruCevap: "Halkın diline girmemiş Arapça, Farsça sözler ile bu dillerin ekleri ve gramer kuralları" },
    { soru: "Tanzimat döneminde dilde sadeleşmeyi savunan aydınlar arasında aşağıdakilerden hangisi yer almaz?", siklar: [
        "Şinasi",
        "Ahmet Mithat Efendi",
        "Muallim Naci",
        "Abdülhak Hamit Tarhan",
        "Ahmed Cevdet Paşa"
    ], dogruCevap: "Abdülhak Hamit Tarhan" },
    { soru: "Günümüz Türkiye Türkçesinin temelini oluşturan ve 1911'de Genç Kalemler dergisi etrafında şekillenen hareketin adı nedir?", siklar: [
        "Dil Devrimi",
        "Tanzimat Hareketi",
        "Yeni Lisan Hareketi",
        "Servet-i Fünûn Edebiyatı",
        "Hecenin Beş Şairi"
    ], dogruCevap: "Yeni Lisan Hareketi" },
    { soru: "Aşağıdakilerden hangisi Yeni Lisan hareketinin ilkelerinden biri değildir?", siklar: [
        "Türkçeyi arındırmak için diğer Türk lehçelerinden (Özbekçe, Kırgızca vb.) kelime alınmalıdır.",
        "Arapça ve Farsça gramer kuralları ve tamlamaları kullanılmamalıdır.",
        "Yazı dili ile konuşma dili arasındaki fark kapatılmalı ve İstanbul konuşması esas alınmalıdır.",
        "Türkçeye girmiş Arapça ve Farsça kelimeler Türkçede söylendikleri gibi yazılmalıdır.",
        "Bilim terimi olarak kullanılan Arapça kelimelerin kullanılmasına devam edilmelidir."
    ], dogruCevap: "Türkçeyi arındırmak için diğer Türk lehçelerinden (Özbekçe, Kırgızca vb.) kelime alınmalıdır." },
    { soru: "\"Milli bir edebiyat ancak milli bir dille yaratılabilir\" düşüncesi hangi akımın temel sloganıdır?", siklar: [
        "Tanzimat Edebiyatı",
        "Divan Edebiyatı",
        "Fecr-i Ati Edebiyatı",
        "Halk Edebiyatı",
        "Milli Edebiyat (Yeni Lisan)"
    ], dogruCevap: "Milli Edebiyat (Yeni Lisan)" },
    { soru: "Yeni Lisan hareketinden sonra, Atatürk'ün öncülüğünde 1932'de başlayan ve devlet eliyle yürütülen Türkçeleştirme hareketine ne ad verilir?", siklar: [
        "Klasik Osmanlıca",
        "Dil Devrimi",
        "Rönesans Hareketi",
        "Türkçecilik Davası",
        "Lehçe Birleştirme Çalışması"
    ], dogruCevap: "Dil Devrimi" },
    { soru: "Osmanlı Türkçesi döneminde dilin ikiye ayrılmasıyla ortaya çıkan edebiyat kolları hangileridir?", siklar: [
        "Saray Edebiyatı ve Köy Edebiyatı",
        "Yazılı Edebiyat ve Sözlü Edebiyat",
        "Divan Edebiyatı ve Halk/Tekke Edebiyatı",
        "Doğu Edebiyatı ve Batı Edebiyatı",
        "Klasik Edebiyat ve Modern Edebiyat"
    ], dogruCevap: "Divan Edebiyatı ve Halk/Tekke Edebiyatı" },
    { soru: "Aşağıdaki yazarlardan hangisi, Klasik Osmanlıca döneminde ağır ve süslü bir dille eser veren Divan edebiyatı temsilcilerinden biridir?", siklar: [
        "Karacaoğlan",
        "Âşık Ömer",
        "Fuzûlî",
        "Köroğlu",
        "Şinasi"
    ], dogruCevap: "Fuzûlî" },
    { soru: "\"Terimleri Türkçeleştirme ve Türkçe eklerle terim yapma işi ilk defa bu dönemde ele alınmıştır.\" ifadesi hangi dönemi tanımlar?", siklar: [
        "Klasik Osmanlıca",
        "Yeni Lisan Hareketi",
        "Eski Anadolu Türkçesi",
        "Tanzimat Dönemi",
        "Dil Devrimi (1932 sonrası)"
    ], dogruCevap: "Dil Devrimi (1932 sonrası)" },
    { soru: "Yeni Lisan hareketinin temel amacı aşağıdakilerden hangisidir?", siklar: [
        "Arapça ve Farsçayı tamamen yasaklamak",
        "Osmanlı yazı dilini konuşma diline yaklaştırarak İstanbul Türkçesine dayalı milli bir yazı dili yaratmak",
        "Diğer Türk lehçeleriyle ortak bir dil oluşturmak",
        "Sadece Batı dillerinden kelimeler alarak dili modernleştirmek",
        "Divan edebiyatı geleneğini canlandırmak"
    ], dogruCevap: "Osmanlı yazı dilini konuşma diline yaklaştırarak İstanbul Türkçesine dayalı milli bir yazı dili yaratmak" },
    { soru: "\"Hecenin Beş Şairi\" olarak bilinen grup, hangi dil anlayışını benimseyerek şiirler yazmıştır?", siklar: [
        "Arapça ve Farsça tamlamaları yoğun olarak kullanarak",
        "Sadece Batı edebiyatını taklit ederek",
        "Divan şiiri geleneğini devam ettirerek",
        "Türkçeye Türk gramerini hâkim kılan ve heceye değer veren bir görüşle",
        "İstanbul ağzı yerine Anadolu'daki diğer ağızları esas alarak"
    ], dogruCevap: "Türkçeye Türk gramerini hâkim kılan ve heceye değer veren bir görüşle" },
    { soru: "Yeni Türkçe döneminin başlangıcına sebep olan ve Türk dilinin ilk kez Doğu ve Batı olarak iki yazı diline ayrılmasına yol açan tarihi olay nedir?", siklar: [
        "Selçukluların Anadolu'ya girişi",
        "İstanbul'un Fethi",
        "Moğol istilasının sebep olduğu göçler",
        "Tanzimat Fermanı'nın ilanı",
        "Haçlı Seferleri"
    ], dogruCevap: "Moğol istilasının sebep olduğu göçler" },
    { soru: "Batı Türkçesi, kendi içinde hangi iki ana kola ayrılarak incelenir?", siklar: [
        "Çağatayca ve Oğuzca",
        "Hakaniye Türkçesi ve Osmanlı Türkçesi",
        "Eski Anadolu Türkçesi ve Çağdaş Türkiye Türkçesi",
        "Kuzeybatı Türkçesi (Kıpçakça) ve Güneybatı Türkçesi (Oğuz-Türkmen Grubu)",
        "Rumeli Türkçesi ve Anadolu Türkçesi"
    ], dogruCevap: "Kuzeybatı Türkçesi (Kıpçakça) ve Güneybatı Türkçesi (Oğuz-Türkmen Grubu)" },
    { soru: "Klasik Osmanlıca döneminde Divan Edebiyatı'nın dil özellikleri aşağıdakilerden hangisidir?", siklar: [
        "Yalnızca Öz Türkçe kelimelerin kullanılması",
        "Halkın anlayabileceği sade ve duru bir üslup",
        "Batı dillerinden alınmış teknik terimlerin yoğunluğu",
        "Arapça ve Farsça kelimeler, tamlamalar ve gramer kurallarının yoğun olarak kullanıldığı ağır ve süslü bir dil",
        "Diğer Türk lehçelerinden bolca kelime alınması"
    ], dogruCevap: "Arapça ve Farsça kelimeler, tamlamalar ve gramer kurallarının yoğun olarak kullanıldığı ağır ve süslü bir dil" },
    { soru: "Osmanlı yazı dilini sadeleştirme çabaları ilk olarak hangi önemli tarihi olayla birlikte başlamıştır?", siklar: [
        "Cumhuriyet'in ilanı",
        "II. Meşrutiyet",
        "Tanzimat Fermanı'nın ilanı (1839)",
        "Yeni Lisan Hareketinin başlaması",
        "I. Dünya Savaşı"
    ], dogruCevap: "Tanzimat Fermanı'nın ilanı (1839)" },
    { soru: "Aşağıdaki yazarlardan hangisi Çağatay Türkçesi dönemine ait değildir?", siklar: [
        "Ali Şir Nevâî",
        "Hüseyin Baykara",
        "Babür Şah",
        "Seyf-i Sarayî",
        "Ebulgazi Bahadır Han"
    ], dogruCevap: "Seyf-i Sarayî" },
    { soru: "Satır Altı Kur'an Tercümeleri'nin en eski nüshası günümüzde nerede bulunmaktadır?", siklar: [
        "İngiltere, Manchester'da",
        "Özbekistan, Taşkent'te",
        "Mısır, Kahire'de",
        "Almanya, Dresden'de",
        "Türkiye, İstanbul'da"
    ], dogruCevap: "Türkiye, İstanbul'da" },
    { soru: "Divanü Lügati't-Türk'te yer alan haritanın en dikkat çekici özelliklerinden biri, o döneme kadar hiçbir haritada gösterilmeyen hangi coğrafyayı \"Cabarka\" adıyla göstermesidir?", siklar: [
        "Amerika",
        "Avustralya",
        "Japonya",
        "Madagaskar",
        "Grönland"
    ], dogruCevap: "Japonya" },
    { soru: "Aşağıdaki eser-yazar eşleştirmelerinden hangisi yanlıştır?", siklar: [
        "Kutadgu Bilig - Yusuf Has Hacib",
        "Divanü Lügati't-Türk - Kaşgarlı Mahmut",
        "Divan-ı Hikmet - Ahmet Yesevi",
        "Babürnâme - Babür Şah",
        "Dede Korkut Kitabı - Yunus Emre"
    ], dogruCevap: "Dede Korkut Kitabı - Yunus Emre" },
    { soru: "Karahanlı hükümdarı Satuk Buğra Han'ın İslamiyet'i kabul ettikten sonra aldığı isim aşağıdakilerден hangisidir?", siklar: [
        "Tavgaç Buğra Han",
        "Muktedi Billah",
        "Ebulgazi Bahadır Han",
        "Abdülkerim",
        "Ali Şir Nevâî"
    ], dogruCevap: "Abdülkerim" },
    { soru: "Harezm Türkçesi döneminde yazılan ve peygamberlerin hayatlarını konu edinen Kısasü'l-Enbiya adlı eserin yazarı kimdir?", siklar: [
        "Zemahşerî",
        "Kutb",
        "Mahmud bin Ali",
        "İslam",
        "Rabguzî"
    ], dogruCevap: "Rabguzî" },
    { soru: "Kutadgu Bilig'de \"akıbet, sonuç, kanaat\" gibi kavramları temsil eden ve vezirin kardeşi olan karakter kimdir?", siklar: [
        "Kün Togdı",
        "Ay Toldı",
        "Ögdülmüş",
        "Odgurmuş",
        "Alp Er Tunga"
    ], dogruCevap: "Odgurmuş" },
    { soru: "Harezm Türkçesi döneminde, Zemahşerî tarafından Arapça öğrenmek isteyen Harezmşah hükümdarı için kaleme alınan Arapça kelime ve cümlelerden oluşan sözlük hangisidir?", siklar: [
        "Kısasü'l-Enbiya",
        "Mukaddimetü'l-Edeb",
        "Nehcü'l-Feradis",
        "Hüsrev u Şirin",
        "Codex Cumanicus"
    ], dogruCevap: "Mukaddimetü'l-Edeb" },
    { soru: "Aşağıdakilerden hangisi Eski Anadolu Türkçesi döneminde (13-15. yüzyıl) eser vermiş şahsiyetlerden biri değildir?", siklar: [
        "Yunus Emre",
        "Aşık Paşa",
        "Süleyman Çelebi",
        "Ali Şir Nevâî",
        "Kadı Burhaneddin"
    ], dogruCevap: "Ali Şir Nevâî" },
    { soru: "Kaşgarlı Mahmut'un Divanü Lügati't-Türk dışında yazdığı bilinen ancak günümüze ulaşamamış (kayıp) olan gramer kitabının adı nedir?", siklar: [
        "Muhakemetü'l-Lügateyn",
        "Şecere-i Türkî",
        "Cevahirü'n-Nahv fi Lugati't-Türk",
        "Mecalisü'n-Nefais",
        "Risaletü'n-Nushiyye"
    ], dogruCevap: "Cevahirü'n-Nahv fi Lugati't-Türk" },
    { soru: "Ahmet Yesevi'nin şiirlerinin (hikmetlerinin) en belirgin biçimsel özelliği aşağıdakilerden hangisidir?", siklar: [
        "Genellikle aruz vezni ve beyitlerle yazılması",
        "Sanatlı, ağır ve ağdalı bir dil kullanılması",
        "Çoğunlukla hece vezni, dörtlükler ve sade bir dille yazılması",
        "Sadece nesir (düz yazı) şeklinde kaleme alınması",
        "Alegorik (sembolik) karakterler üzerine kurulması"
    ], dogruCevap: "Çoğunlukla hece vezni, dörtlükler ve sade bir dille yazılması" },
    { soru: "Fatih Sultan Mehmet'in (Avnî) \"Bizümle saltanat lafın idermiş ol Karamânî\" beytiyle başlayan şiirinde hedef aldığı ve Anadolu beylikleri mücadelesinde rakibi olan beylik aşağıdakilerden hangisidir?", siklar: [
        "Germiyanoğulları",
        "Candaroğulları",
        "Dulkadiroğulları",
        "Aydınoğulları",
        "Karamanoğulları"
    ], dogruCevap: "Karamanoğulları" },
    { soru: "Divanü Lügati't-Türk'te, Türklerin kullandığı \"On İki Hayvanlı Türk Takvimi\" ve kutladıkları \"Nevruz Bayramı\" gibi kültürel unsurlara yer verilmesi, eserin hangi yönünü ön plana çıkarır?", siklar: [
        "Sadece bir dil bilgisi kitabı olduğunu",
        "Tamamen askeri bir strateji kılavuzu olduğunu",
        "Dilin yanı sıra zengin bir kültür ve folklor kaynağı olduğunu",
        "Sadece Arapça'nın üstünlüğünü kanıtlamayı amaçladığını",
        "Yalnızca İslami döneme ait bilgileri içerdiğini"
    ], dogruCevap: "Dilin yanı sıra zengin bir kültür ve folklor kaynağı olduğunu" },
    { soru: "Hüseyin Baykara ile yakın dost olan ve Çağatay edebiyatında \"Nevâî-Baykara Devri\" olarak anılan bir dönemin başlamasına öncülük eden büyük şair kimdir?", siklar: [
        "Babür Şah",
        "Ahmet Yesevi",
        "Ebulgazi Bahadır Han",
        "Ali Şir Nevâî",
        "Yusuf Has Hacib"
    ], dogruCevap: "Ali Şir Nevâî" }
];

// 5 - Türkçenin Tarihi Dönemleri (30) – kaynağı: 5- Türkçenin Tarihi Dönemleri.md
const questionsDonemler = [
    { soru: "\"Ön Türkçe\" dönemiyle ilgili aşağıdakilerden hangisi doğrudur?", siklar: [
        "Bu döneme ait ilk yazılı metinler Altay dağlarında bulunmuştur.",
        "Dönemin en önemli eseri olarak Kodeks Kumanikus kabul edilir.",
        "Bu döneme ait bilgiler dil karşılaştırmalarına dayanan teorik çıkarımlardır.",
        "Türkçe bu dönemde Moğolca ve Farsçanın etkisi altına girmiştir.",
        "Bu dönemin sonunda Türkçe, Uygurca ve Karahanlıca olarak ikiye ayrılmıştır."
    ], dogruCevap: "Bu döneme ait bilgiler dil karşılaştırmalarına dayanan teorik çıkarımlardır." },
    { soru: "Altay Dil Birliği teorisine göre hangisi Türkçe ile aynı aileden kabul edilmez?", siklar: [
        "Moğolca", "Mançuca", "Korece", "Farsça", "Tunguzca"
    ], dogruCevap: "Farsça" },
    { soru: "Türk dilinin ilk yazılı belgelerinin ortaya çıktığı İslamiyet öncesi devir hangisidir?", siklar: [
        "Ön Türkçe Dönemi", "Orta Türkçe Dönemi", "Eski Türkçe Dönemi", "Yeni Türkçe Dönemi", "Karahanlıca Dönemi"
    ], dogruCevap: "Eski Türkçe Dönemi" },
    { soru: "Köktürk alfabesi için kullanılan ve 'esrarlı' anlamına gelen ad hangisidir?", siklar: [
        "Soğd Alfabesi", "İdeografik Alfabe", "Runik Alfabe", "Mani Alfabesi", "Brahmi Alfabesi"
    ], dogruCevap: "Runik Alfabe" },
    { soru: "Köktürklerin Orhun Abideleri için kullandığı 'sonsuz/ebedî taş' ifadesi hangisidir?", siklar: [
        "Yarlıg Taş", "Bengü Taş", "Bitig Taş", "Kutlu Taş", "Orhun Taşı"
    ], dogruCevap: "Bengü Taş" },
    { soru: "Aşağıdakilerden hangisi Köktürkçe döneminin dili için değildir?", siklar: [
        "Cümle yapısı basit ve yeknesaktır.", "Söz varlığı ağırlıkla somuttur.", "Alıntı kelimeler azdır.", "Tercümelerle soyut kelimeler artmıştır.", "Türk kültürü ve devlet anlayışını yansıtır."
    ], dogruCevap: "Tercümelerle soyut kelimeler artmıştır." },
    { soru: "Eski Türkçe dönemi hangi alt dönemlerden oluşur?", siklar: [
        "Ön Türkçe - Karahanlıca", "Karahanlıca - Harezmce", "Çağatayca - Osmanlıca", "Köktürkçe - Uygurca", "Kıpçakça - Eski Anadolu Türkçesi"
    ], dogruCevap: "Köktürkçe - Uygurca" },
    { soru: "Uygurca döneminde söz varlığının zenginleşmesinin temel nedeni?", siklar: [
        "Yeni kabilelerle tanışılması", "Ticaret ve İpek Yolu", "Maniheizm ve Budizm metinlerinin tercümesi", "Yerleşik hayata geçiş", "Alfabe değişimi"
    ], dogruCevap: "Maniheizm ve Budizm metinlerinin tercümesi" },
    { soru: "Aşağıdaki eserlerden hangisi Uygurca döneme ait değildir?", siklar: [
        "Altın Yaruk", "Sekiz Yükmek", "Tonyukuk Yazıtı", "Irk Bitig", "Kalyanamkara Papamkara"
    ], dogruCevap: "Tonyukuk Yazıtı" },
    { soru: "Köktürk ve Uygur edebiyatları karşılaştırmasında hangisi söylenemez?", siklar: [
        "Köktürk: taş, Uygur: kâğıt", "Köktürk: somut, Uygur: soyut", "Köktürk: millî, Uygur: çeviri ağırlıklı", "Köktürk: Budizm, Uygur: Gök Tanrı", "Köktürk: sade; Uygur: zengin"
    ], dogruCevap: "Köktürk: Budizm, Uygur: Gök Tanrı" },
    { soru: "Yeni Türkçe döneminde iki ana kol?", siklar: [
        "Doğu - Batı", "Kuzey - Güney", "Oğuz - Kıpçak", "Hakaniye - Çağatay", "Anadolu - Rumeli"
    ], dogruCevap: "Doğu - Batı" },
    { soru: "Batı Türkçesi kendi içinde hangi iki kola ayrılır?", siklar: [
        "Çağatay - Oğuz", "Karahanlı - Harezm", "Kıpçak - Azerbaycan", "Osmanlı - Türkiye Türkçesi", "Kuzeybatı - Güneybatı"
    ], dogruCevap: "Kuzeybatı - Güneybatı" },
    { soru: "Günümüz Türkiye Türkçesi hangi ana kol ve alt grubun devamıdır?", siklar: [
        "Doğu Türkçesi", "Batı - Kuzeybatı", "Batı - Güneybatı (Oğuz)", "Doğu - Çağatay", "Kuzey - Kıpçak"
    ], dogruCevap: "Batı - Güneybatı (Oğuz)" },
    { soru: "Ali Şir Nevayi'nin temsil ettiği Doğu Türkçesi kolunun edebî dili?", siklar: [
        "Harezmce", "Kıpçakça", "Hakaniye", "Çağatayca", "Eski Anadolu Türkçesi"
    ], dogruCevap: "Çağatayca" },
    { soru: "Dönem-eser eşleştirmesi hangisi yanlıştır?", siklar: [
        "Karahanlıca - Kutadgu Bilig", "Kıpçakça - Kodeks Kumanikus", "Uygurca - Divan-ı Hikmet", "Harezmce - Nehcü'l-Feradis", "Köktürkçe - Bilge Kağan Yazıtı"
    ], dogruCevap: "Uygurca - Divan-ı Hikmet" },
    { soru: "Köktürk alfabesinin 'ideografik' sayılmasının sebebi?", siklar: [
        "Harflerin çok sesli olması", "Sadece ünlülerin yazılması", "Bazı işaretlerin fikri/nesneyi simgelemesi", "Sağdan sola yazılması", "Yalnızca Türklerce kullanılması"
    ], dogruCevap: "Bazı işaretlerin fikri/nesneyi simgelemesi" },
    { soru: "Orhun Abideleri ile ilgili hangisi yanlıştır?", siklar: [
        "Türk adının geçtiği ilk metinlerdir.", "Hitabet türünün ilk örnekleridir.", "Tonyukuk, Köl Tigin, Bilge Kağan adına dikilidir.", "Bilge Kağan hepsini kendi eliyle yazmıştır.", "Siyasi beyanname ve hesap verme niteliği taşırlar."
    ], dogruCevap: "Bilge Kağan hepsini kendi eliyle yazmıştır." },
    { soru: "Eski Anadolu Türkçesi hangi yüzyılları kapsar; önemli isimleri?", siklar: [
        "13-15 / Yunus Emre, Dede Korkut", "10-13 / Yusuf Has Hacip, Kaşgarlı", "14 / Ali Şir Nevayi", "6-8 / Bilge Kağan, Yollug Tigin", "16-19 / Fuzûlî, Bâkî"
    ], dogruCevap: "13-15 / Yunus Emre, Dede Korkut" },
    { soru: "Eski Türkçe dönemi başlangıç-bitiş yüzyılları?", siklar: [
        "M.Ö. yüzyıllar", "10-13", "6-10", "13-15", "8-12"
    ], dogruCevap: "6-10" },
    { soru: "Uygur döneminde giren yabancı kelimeler ağırlıkla hangi dillerden?", siklar: [
        "Arapça, Farsça, Latince", "Çince, Sanskritçe, Soğdca", "Moğolca, Tunguzca, Japonca", "Grekçe, Ermenice, Süryanice", "Farsça, Moğolca, Tibetçe"
    ], dogruCevap: "Çince, Sanskritçe, Soğdca" },
    { soru: "'Şehzade ile Aç Pars' hikâyesi hangi eserde yer alır?", siklar: [
        "Irk Bitig", "Sekiz Yükmek", "Altın Yaruk", "Divanü Lügati't-Türk", "Kutadgu Bilig"
    ], dogruCevap: "Altın Yaruk" },
    { soru: "Aşağıdakilerden hangisi Orta Türkçe'nin kolu değildir?", siklar: [
        "Karahanlıca", "Harezmce", "Kıpçakça", "Eski Anadolu Türkçesi", "Uygurca"
    ], dogruCevap: "Uygurca" },
    { soru: "Köktürk-Uygur farkının temel nedeni?", siklar: [
        "Coğrafya değişimi", "Dini inançtaki köklü değişim", "Alfabe değişimi", "Çin ile ilişkiler", "Ekonomi"
    ], dogruCevap: "Dini inançtaki köklü değişim" },
    { soru: "Kodeks Kumanikus hangi lehçe dönemine aittir; içeriği nedir?", siklar: [
        "Harezmce / Dini hikâyeler", "Karahanlıca / Siyasetname", "Çağatayca / Şiir divanı", "Kıpçakça / Hristiyanlık metinleri ve sözlük", "Eski Anadolu / Tasavvufi ilahiler"
    ], dogruCevap: "Kıpçakça / Hristiyanlık metinleri ve sözlük" },
    { soru: "Orhun Abidelerini Batı'ya ilk tanıtan ve ilk çözen bilim insanları (sırasıyla)?", siklar: [
        "Radloff - Thomsen", "Kaşgarlı - Yusuf Has Hacip", "Strahlenberg - Thomsen", "Ergin - Radloff", "N. Poppe - Ramstedt"
    ], dogruCevap: "Strahlenberg - Thomsen" },
    { soru: "Yalnızca Uygur dönemine özgü olup Köktürkçede görülmeyen özellik?", siklar: [
        "Millî alfabe", "Türk adının geçmesi", "Farklı din kavramlarının yoğunluğu", "Yalın ve sade anlatım", "Taşa işleme"
    ], dogruCevap: "Farklı din kavramlarının yoğunluğu" },
    { soru: "'Hakaniye Lehçesi' olarak da adlandırılan dönem hangisidir?", siklar: [
        "Köktürkçe", "Uygurca", "Karahanlıca", "Harezmce", "Çağatayca"
    ], dogruCevap: "Karahanlıca" },
    { soru: "Türkçenin tarihi dönemleri kronolojik doğru sıra?", siklar: [
        "Eski > Ön > Orta > Yeni", "Ön > Orta > Eski > Yeni", "Eski > Karahanlıca > Çağatayca > Yeni", "Ön > Eski > Orta > Yeni", "Altay Birliği > Orta > Eski > Yeni"
    ], dogruCevap: "Ön > Eski > Orta > Yeni" },
    { soru: "'Bengü Taş Edebiyatı' için kabul edilemez özellik?", siklar: [
        "Millete hesap verme", "Süssüz üslup", "Tarih/hatırat örnekleri", "Didaktik amaç", "Çeviri ağırlığı"
    ], dogruCevap: "Çeviri ağırlığı" },
    { soru: "Çağataycadan sonra bölgede yerini alan güncel Türk dili?", siklar: [
        "Kırgızca", "Özbekçe", "Kazakça", "Türkmence", "Tatarca"
    ], dogruCevap: "Özbekçe" }
];

// 6 - Orta Türkçe Dönemi Sınavı (40) – kaynağı: 6. hafta.md
const questionsOrta = [
    {
        soru: "Türklerin İslamiyet'i kabul ettikten sonra 11. yüzyıldan 20. yüzyıla kadar en uzun süre kullandıkları alfabe aşağıdakilerden hangisidir?",
        siklar: [
            "Uygur Alfabesi",
            "Köktürk Alfabesi",
            "Latin Alfabesi",
            "Arap Alfabesi",
            "Soğd Alfabesi"
        ],
        dogruCevap: "Arap Alfabesi"
    },
    {
        soru: "Yusuf Has Hacib tarafından kaleme alınan ve Türk edebiyatının ilk siyasetnamesi olarak kabul edilen eser aşağıdakilerden hangisidir?",
        siklar: [
            "Divan-ı Hikmet",
            "Divanü Lügati't-Türk",
            "Kutadgu Bilig",
            "Atabetü'l-Hakâyık",
            "Dede Korkut Kitabı"
        ],
        dogruCevap: "Kutadgu Bilig"
    },
    {
        soru: "Kutadgu Bilig adlı eserde \"akıl\" ve \"anlayış\" kavramlarını temsil eden alegorik karakter aşağıdakilerden hangisidir?",
        siklar: [
            "Kün Togdı",
            "Ay Toldı",
            "Odgurmuş",
            "Ögdülmüş",
            "Dede Korkut"
        ],
        dogruCevap: "Ögdülmüş"
    },
    {
        soru: "Kutadgu Bilig'in günümüze ulaşan üç nüshasından hangisi diğerlerinden farklı olarak Uygur harfleriyle yazılmıştır?",
        siklar: [
            "Kahire Nüshası",
            "Viyana Nüshası",
            "Fergana Nüshası",
            "İstanbul Nüshası",
            "Taşkent Nüshası"
        ],
        dogruCevap: "Viyana Nüshası"
    },
    {
        soru: "Kaşgarlı Mahmut'un, Araplara Türkçe öğretmek ve Türkçenin zenginliğini göstermek amacıyla yazdığı ilk Türkçe sözlük aşağıdakilerden hangisidir?",
        siklar: [
            "Muhakemetü'l-Lügateyn",
            "Mecalisü'n-Nefais",
            "Atabetü'l-Hakâyık",
            "Mukaddimetü'l-Edeb",
            "Divanü Lügati't-Türk"
        ],
        dogruCevap: "Divanü Lügati't-Türk"
    },
    {
        soru: "Aşağıdakilerden hangisi Kaşgarlı Mahmut'a verilen unvanlardan veya onunla ilişkilendirilen \"ilk\"lerden biri değildir?",
        siklar: [
            "İlk Türk gramercisi",
            "İlk Türk ağız ve lehçe uzmanı",
            "Modern Türkolojinin kurucusu",
            "İlk Türk mutasavvıfı",
            "Bir Türk tarafından çizilen ilk dünya haritasının sahibi"
        ],
        dogruCevap: "İlk Türk mutasavvıfı"
    },
    {
        soru: "Tarihte bilinen ilk Türk mutasavvıfı ve Yesevilik tarikatının kurucusu olan, şiirlerine \"hikmet\" adı verilen şahsiyet kimdir?",
        siklar: [
            "Edip Ahmet Yükneki",
            "Kaşgarlı Mahmut",
            "Yunus Emre",
            "Ali Şir Nevâî",
            "Ahmet Yesevi"
        ],
        dogruCevap: "Ahmet Yesevi"
    },
    {
        soru: "Destandan halk hikayeciliğine geçişin en önemli ürünü olan, yazarı belli olmayıp (anonim) Türk milletinin ortak dehasının bir ürünü sayılan eser aşağıdakilerden hangisidir?",
        siklar: [
            "Garibnâme",
            "Dede Korkut Kitabı",
            "Babürnâme",
            "Divan-ı Hikmet",
            "Kutadgu Bilig"
        ],
        dogruCevap: "Dede Korkut Kitabı"
    },
    {
        soru: "Eski Anadolu Türkçesi döneminin en önemli şairlerinden olan ve sade diliyle yazdığı ilahilerle tanınan mutasavvıf kimdir?",
        siklar: [
            "Yunus Emre",
            "Sultan Veled",
            "Nesimî",
            "Kadı Burhaneddin",
            "Hoca Dehhanî"
        ],
        dogruCevap: "Yunus Emre"
    },
    {
        soru: "Ali Şir Nevâî'nin, Türkçenin Farsçadan daha üstün bir dil olduğunu kanıtlamak amacıyla yazdığı eserin adı nedir?",
        siklar: [
            "Mecalisü'n-Nefais",
            "Divan",
            "Hamse",
            "Muhakemetü'l-Lügateyn",
            "Vekayi"
        ],
        dogruCevap: "Muhakemetü'l-Lügateyn"
    },
    {
        soru: "Kutadgu Bilig'de hükümdar karakteri olan Kün Togdı'nın temsil ettiği temel kavram aşağıdakilerden hangisidir?",
        siklar: [
            "Adalet ve kanun",
            "Mutluluk ve saadet",
            "Akıl ve anlayış",
            "Akıbet ve kanaat",
            "Cesaret ve kahramanlık"
        ],
        dogruCevap: "Adalet ve kanun"
    },
    {
        soru: "Aşağıdaki eserlerden hangisi biçim olarak diğerlerinden farklıdır?",
        siklar: [
            "Kutadgu Bilig (Mesnevi-Beyit)",
            "Harname (Mesnevi-Beyit)",
            "Hüsrev u Şirin (Mesnevi-Beyit)",
            "Atabetü'l-Hakâyık (Dörtlük)",
            "Garibnâme (Mesnevi-Beyit)"
        ],
        dogruCevap: "Atabetü'l-Hakâyık (Dörtlük)"
    },
    {
        soru: "Dede Korkut Kitabı ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        siklar: [
            "Eser, Dede Korkut adlı bilge bir ozan tarafından 15. yüzyılda kaleme alınmıştır.",
            "Eser anonimdir ve Türk milletinin ortak malı kabul edilir.",
            "Destan geleneğinden halk hikayeciliğine geçiş döneminin özelliklerini taşır.",
            "Günümüze ulaşan en bilinen nüshaları Dresden ve Vatikan'dadır.",
            "İçerisinde bir mukaddime ve on iki adet boy (hikâye) bulunur."
        ],
        dogruCevap: "Eser, Dede Korkut adlı bilge bir ozan tarafından 15. yüzyılda kaleme alınmıştır."
    },
    {
        soru: "Babür Şah tarafından kaleme alınan ve Türk edebiyatının ilk hatırat (anı) örneği olarak kabul edilen eser hangisidir?",
        siklar: [
            "Şecere-i Türkî",
            "Mecalisü'n-Nefais",
            "Vekayi (Babürnâme)",
            "Divan",
            "Tevarih-i Al-i Osman"
        ],
        dogruCevap: "Vekayi (Babürnâme)"
    },
    {
        soru: "Fatih Sultan Mehmet'in şiirlerini yazarken kullandığı mahlas (takma ad) aşağıdakilerden hangisidir?",
        siklar: [
            "Hüseynî",
            "Muhibbî",
            "Avnî",
            "Fatihî",
            "Adlî"
        ],
        dogruCevap: "Avnî"
    },
    {
        soru: "Karadeniz'in kuzeyindeki Kıpçak bozkırlarında, Hristiyan misyonerlerin Kıpçaklara dinlerini öğretmek amacıyla hazırladığı Latince-Farsça-Kıpçakça sözlük ve derlemenin adı nedir?",
        siklar: [
            "Kitabü'l-İdrak",
            "Gülistan Tercümesi",
            "Nehcü'l-Feradis",
            "Codex Cumanicus",
            "Müyessiretü'l-Ulûm"
        ],
        dogruCevap: "Codex Cumanicus"
    },
    {
        soru: "Hakikatlerin eşiği anlamına gelen, dinî ve ahlaki öğütler içeren didaktik eser Atabetü'l-Hakâyık'ın yazarı kimdir?",
        siklar: [
            "Ahmet Yesevi",
            "Yusuf Has Hacib",
            "Edip Ahmet Yükneki",
            "Kaşgarlı Mahmut",
            "Ali Şir Nevâî"
        ],
        dogruCevap: "Edip Ahmet Yükneki"
    },
    {
        soru: "Türkiye Türkçesinin tarihi gelişim süreci hangi üç ana döneme ayrılarak incelenir?",
        siklar: [
            "Eski Anadolu Türkçesi - Osmanlı Türkçesi - Bugünkü Türkiye Türkçesi",
            "Karahanlı Türkçesi - Çağatay Türkçesi - Kıpçak Türkçesi",
            "Köktürkçe - Uygurca - Hakaniye Türkçesi",
            "Harezm Türkçesi - Osmanlı Türkçesi - Azeri Türkçesi",
            "Selçuklu Türkçesi - Beylikler Türkçesi - Osmanlı Türkçesi"
        ],
        dogruCevap: "Eski Anadolu Türkçesi - Osmanlı Türkçesi - Bugünkü Türkiye Türkçesi"
    },
    {
        soru: "Türk edebiyatının ilk şairler tezkiresi (biyografik eser) olan Mecalisü'n-Nefais'i kim yazmıştır?",
        siklar: [
            "Hüseyin Baykara",
            "Babür Şah",
            "Kaşgarlı Mahmut",
            "Ali Şir Nevâî",
            "Ebulgazi Bahadır Han"
        ],
        dogruCevap: "Ali Şir Nevâî"
    },
    {
        soru: "Karahanlı Dönemi'nde yazılan eserlerden hangisi, İslamiyet'in esaslarını, tasavvuf adabını ve dervişlik gibi konuları sade bir dille ve genellikle hece vezniyle anlatan şiirlerden oluşur?",
        siklar: [
            "Divan-ı Hikmet",
            "Kutadgu Bilig",
            "Divanü Lügati't-Türk",
            "Atabetü'l-Hakâyık",
            "Satır Altı Kur'an Tercümeleri"
        ],
        dogruCevap: "Divan-ı Hikmet"
    },
    {
        soru: "Harezm Türkçesi, hangi coğrafyada gelişmiş bir yazı dilidir?",
        siklar: [
            "Karadeniz'in Kuzeyi (Deşt-i Kıpçak)",
            "Anadolu ve Rumeli",
            "Doğu Türkistan (Timur Devleti)",
            "Batı Türkistan (Hazar ve Aral Gölü arası)",
            "Mısır ve Suriye (Memlükler)"
        ],
        dogruCevap: "Batı Türkistan (Hazar ve Aral Gölü arası)"
    },
    {
        soru: "Eski Anadolu Türkçesi dönemi hangi yüzyılları ve siyasi yapıları kapsar?",
        siklar: [
            "10-12. yüzyıllar, Karahanlı Devleti",
            "16-20. yüzyıllar, Osmanlı İmparatorluğu",
            "8-10. yüzyıllar, Uygur Kağanlığı",
            "13-15. yüzyıllar, Anadolu Selçuklu Devleti ve Beylikler",
            "15-20. yüzyıllar, Timur Devleti"
        ],
        dogruCevap: "13-15. yüzyıllar, Anadolu Selçuklu Devleti ve Beylikler"
    },
    {
        soru: "Kutadgu Bilig'de \"saadet, baht, kut\" gibi kavramları temsil eden vezir karakteri kimdir?",
        siklar: [
            "Kün Togdı",
            "Ögdülmüş",
            "Ay Toldı",
            "Odgurmuş",
            "Bilge Kağan"
        ],
        dogruCevap: "Ay Toldı"
    },
    {
        soru: "Çağatay Türkçesi, o kadar gelişmiş ve edebi bir seviyeye ulaşmıştır ki bu dile, en büyük temsilcisinden dolayı ne ad verilmiştir?",
        siklar: [
            "Babür Dili",
            "Timurlu Türkçesi",
            "Nevâî Dili",
            "Harezm Dili",
            "Yükneki Dili"
        ],
        dogruCevap: "Nevâî Dili"
    },
    {
        soru: "Ebulgazi Bahadır Han'ın, Türklerin ve Türkmenlerin soy kütüğünü anlattığı eserleri aşağıdakilerden hangileridir?",
        siklar: [
            "Vekayi ve Divan",
            "Şecere-i Türkî ve Şecere-i Terakime",
            "Mecalisü'n-Nefais ve Muhakemetü'l-Lügateyn",
            "Kısasü'l-Enbiya ve Hüsrev u Şirin",
            "Garibnâme ve Mevlid"
        ],
        dogruCevap: "Şecere-i Türkî ve Şecere-i Terakime"
    },
    {
        soru: "Eski Anadolu Türkçesi'nin dil özellikleri için aşağıdakilerden hangisi söylenebilir?",
        siklar: [
            "Arapça ve Farsça kelimeler ile tamlamaların en yoğun kullanıldığı dönemdir.",
            "Sadece hece vezniyle eserler verilmiştir, aruz vezni hiç kullanılmamıştır.",
            "Osmanlı Türkçesine göre daha sade, arı ve halkın anlayabileceği bir yapıdadır.",
            "Sadece nesir (düz yazı) eserler öne çıkmış, şiir geri planda kalmıştır.",
            "Uygur alfabesi bu dönemde de yaygın olarak kullanılmıştır."
        ],
        dogruCevap: "Osmanlı Türkçesine göre daha sade, arı ve halkın anlayabileceği bir yapıdadır."
    },
    {
        soru: "Aşağıdaki yazarlardan hangisi Çağatay Türkçesi dönemine ait değildir?",
        siklar: [
            "Ali Şir Nevâî",
            "Hüseyin Baykara",
            "Babür Şah",
            "Seyf-i Sarayî",
            "Ebulgazi Bahadır Han"
        ],
        dogruCevap: "Seyf-i Sarayî"
    },
    {
        soru: "Satır Altı Kur'an Tercümeleri'nin en eski nüshası günümüzde nerede bulunmaktadır?",
        siklar: [
            "İngiltere, Manchester'da",
            "Özbekistan, Taşkent'te",
            "Mısır, Kahire'de",
            "Almanya, Dresden'de",
            "Türkiye, İstanbul'da"
        ],
        dogruCevap: "Türkiye, İstanbul'da"
    },
    {
        soru: "Divanü Lügati't-Türk'te yer alan haritanın en dikkat çekici özelliklerinden biri, o döneme kadar hiçbir haritada gösterilmeyen hangi coğrafyayı \"Cabarka\" adıyla göstermesidir?",
        siklar: [
            "Amerika",
            "Avustralya",
            "Japonya",
            "Madagaskar",
            "Grönland"
        ],
        dogruCevap: "Japonya"
    },
    {
        soru: "Aşağıdaki eser-yazar eşleştirmelerinden hangisi yanlıştır?",
        siklar: [
            "Kutadgu Bilig - Yusuf Has Hacib",
            "Divanü Lügati't-Türk - Kaşgarlı Mahmut",
            "Divan-ı Hikmet - Ahmet Yesevi",
            "Babürnâme - Babür Şah",
            "Dede Korkut Kitabı - Yunus Emre"
        ],
        dogruCevap: "Dede Korkut Kitabı - Yunus Emre"
    },
    {
        soru: "Karahanlı hükümdarı Satuk Buğra Han'ın İslamiyet'i kabul ettikten sonra aldığı isim aşağıdakilerden hangisidir?",
        siklar: [
            "Tavgaç Buğra Han",
            "Muktedi Billah",
            "Ebulgazi Bahadır Han",
            "Abdülkerim",
            "Ali Şir Nevâî"
        ],
        dogruCevap: "Abdülkerim"
    },
    {
        soru: "Harezm Türkçesi döneminde yazılan ve peygamberlerin hayatlarını konu edinen Kısasü'l-Enbiya adlı eserin yazarı kimdir?",
        siklar: [
            "Zemahşerî",
            "Kutb",
            "Mahmud bin Ali",
            "İslam",
            "Rabguzî"
        ],
        dogruCevap: "Rabguzî"
    },
    {
        soru: "Kutadgu Bilig'de \"akıbet, sonuç, kanaat\" gibi kavramları temsil eden ve vezirin kardeşi olan karakter kimdir?",
        siklar: [
            "Kün Togdı",
            "Ay Toldı",
            "Ögdülmüş",
            "Odgurmuş",
            "Alp Er Tunga"
        ],
        dogruCevap: "Odgurmuş"
    },
    {
        soru: "Harezm Türkçesi döneminde, Zemahşerî tarafından Arapça öğrenmek isteyen Harezmşah hükümdarı için kaleme alınan Arapça kelime ve cümlelerden oluşan sözlük hangisidir?",
        siklar: [
            "Kısasü'l-Enbiya",
            "Mukaddimetü'l-Edeb",
            "Nehcü'l-Feradis",
            "Hüsrev u Şirin",
            "Codex Cumanicus"
        ],
        dogruCevap: "Mukaddimetü'l-Edeb"
    },
    {
        soru: "Aşağıdakilerden hangisi Eski Anadolu Türkçesi döneminde (13-15. yüzyıl) eser vermiş şahsiyetlerden biri değildir?",
        siklar: [
            "Yunus Emre",
            "Aşık Paşa",
            "Süleyman Çelebi",
            "Ali Şir Nevâî",
            "Kadı Burhaneddin"
        ],
        dogruCevap: "Ali Şir Nevâî"
    },
    {
        soru: "Kaşgarlı Mahmut'un Divanü Lügati't-Türk dışında yazdığı bilinen ancak günümüze ulaşamamış (kayıp) olan gramer kitabının adı nedir?",
        siklar: [
            "Muhakemetü'l-Lügateyn",
            "Şecere-i Türkî",
            "Cevahirü'n-Nahv fi Lugati't-Türk",
            "Mecalisü'n-Nefais",
            "Risaletü'n-Nushiyye"
        ],
        dogruCevap: "Cevahirü'n-Nahv fi Lugati't-Türk"
    },
    {
        soru: "Ahmet Yesevi'nin şiirlerinin (hikmetlerinin) en belirgin biçimsel özelliği aşağıdakilerden hangisidir?",
        siklar: [
            "Genellikle aruz vezni ve beyitlerle yazılması",
            "Sanatlı, ağır ve ağdalı bir dil kullanılması",
            "Çoğunlukla hece vezni, dörtlükler ve sade bir dille yazılması",
            "Sadece nesir (düz yazı) şeklinde kaleme alınması",
            "Alegorik (sembolik) karakterler üzerine kurulması"
        ],
        dogruCevap: "Çoğunlukla hece vezni, dörtlükler ve sade bir dille yazılması"
    },
    {
        soru: "Fatih Sultan Mehmet'in (Avnî) \"Bizümle saltanat lafın idermiş ol Karamânî\" beytiyle başlayan şiirinde hedef aldığı ve Anadolu beylikleri mücadelesinde rakibi olan beylik aşağıdakilerden hangisidir?",
        siklar: [
            "Germiyanoğulları",
            "Candaroğulları",
            "Dulkadiroğulları",
            "Aydınoğulları",
            "Karamanoğulları"
        ],
        dogruCevap: "Karamanoğulları"
    },
    {
        soru: "Divanü Lügati't-Türk'te, Türklerin kullandığı \"On İki Hayvanlı Türk Takvimi\" ve kutladıkları \"Nevruz Bayramı\" gibi kültürel unsurlara yer verilmesi, eserin hangi yönünü ön plana çıkarır?",
        siklar: [
            "Sadece bir dil bilgisi kitabı olduğunu",
            "Tamamen askeri bir strateji kılavuzu olduğunu",
            "Dilin yanı sıra zengin bir kültür ve folklor kaynağı olduğunu",
            "Sadece Arapça'nın üstünlüğünü kanıtlamayı amaçladığını",
            "Yalnızca İslami döneme ait bilgileri içerdiğini"
        ],
        dogruCevap: "Dilin yanı sıra zengin bir kültür ve folklor kaynağı olduğunu"
    },
    {
        soru: "Hüseyin Baykara ile yakın dost olan ve Çağatay edebiyatında \"Nevâî-Baykara Devri\" olarak anılan bir dönemin başlamasına öncülük eden büyük şair kimdir?",
        siklar: [
            "Babür Şah",
            "Ahmet Yesevi",
            "Ebulgazi Bahadır Han",
            "Ali Şir Nevâî",
            "Yusuf Has Hacib"
        ],
        dogruCevap: "Ali Şir Nevâî"
    }
];

const module1ConsolidatedQuestions = [
    {
        soru: "Muharrem Ergin'in dil tanımında aşağıdakilerden hangisi vurgulanır?",
        siklar: [
            "Dil, yalnızca yazılı kodlardan ibarettir.",
            "Dil, bireysel sezgilerin ürünüdür.",
            "Dil, milleti birleştiren ve koruyan sosyal bir müessesedir.",
            "Dil, bir akademi tarafından icat edilir.",
            "Dil, sabit ve değişmez bir kurallar bütünüdür."
        ],
        dogruCevap: "Dil, milleti birleştiren ve koruyan sosyal bir müessesedir."
    },
    {
        soru: "Muharrem Ergin'in dil tanımında 'gizli antlaşmalar ve sözleşmeler sistemi' ifadesi neyi vurgular?",
        siklar: [
            "Dillerin yazılı sözleşmelerle yönetilmesi",
            "Aynı dil topluluğunun varlıklara aynı kelimelerle seslenmesi",
            "Fethedilen toplumun dilinin egemen toplumun dilini bütünüyle değiştirmesi",
            "Sadece teknik terimlerin bilim yoluyla aktarılması",
            "Tek taraflı kültürel asimilasyon politikalarının uygulanması"
        ],
        dogruCevap: "Dillerin yazılı sözleşmelerle yönetilmesi"
    },
    {
        soru: "Muharrem Ergin'in benzetmesine göre dilin vasıtalığı hangi araca benzetilir?",
        siklar: [
            "Otomobil",
            "At",
            "Gemi",
            "Uçak",
            "Bisiklet"
        ],
        dogruCevap: "At"
    },
    {
        soru: "Dilin temel vasfı (niteliği) aşağıdakilerden hangisidir?",
        siklar: [
            "Yazılı olması",
            "Sadece seslerden oluşması",
            "Anlaşma aracı olması",
            "Sabit kalması",
            "Tek kişi tarafından icat edilmesi"
        ],
        dogruCevap: "Anlaşma aracı olması"
    },
    {
        soru: "Dilin canlı bir varlık olduğunu gösteren en iyi örnek aşağıdakilerden hangisidir?",
        siklar: [
            "TDK sözlüklerinin çevrimiçi sunulması",
            "Okuryazarlık oranlarının artması",
            "Eski Türkçedeki 'edgü' kelimesinin zamanla 'iyi'ye dönüşmesi",
            "Alfabenin sabit 29 harfli oluşu",
            "Latin alfabesine geçiş"
        ],
        dogruCevap: "Eski Türkçedeki 'edgü' kelimesinin zamanla 'iyi'ye dönüşmesi"
    },
    {
        soru: "Dillerin neden çeşitlenip farklı topluluklara ayrıldığını açıklayan Tevrat kökenli anlatı aşağıdakilerden hangisidir?",
        siklar: [
            "Babil Kulesi Efsanesi",
            "Yansıma Kuramı",
            "İş (Labor) Kuramı",
            "Nuh Tufanı",
            "Platon'un Kratylos Diyaloğu"
        ],
        dogruCevap: "Babil Kulesi Efsanesi"
    },
    {
        soru: "Platon'un Kratylos diyalogunda 'ad koyucu' hakkında hangi sonuca varılır?",
        siklar: [
            "Adlar tamamen rastgele verilmiştir",
            "Adlar yazı icat edilince ortaya çıkmıştır",
            "Adların doğruluğu ölçülemez",
            "Adları koyan kişi bu işin ustasıdır",
            "Ad koyucu toplum değil, devlettir"
        ],
        dogruCevap: "Adları koyan kişi bu işin ustasıdır"
    },
    {
        soru: "Doğuştancılar arasında aşağıdakilerden hangisi yer almaz?",
        siklar: [
            "J.G. Hamann",
            "J.G. Herder",
            "Platon",
            "Wundt",
            "Herakleitos'a 'dilin kelimeleri doğuştandır' atfı"
        ],
        dogruCevap: "Wundt" // Wundt is an experimentalist
    },
    {
        soru: "Wundt'un dilin doğuşu hakkındaki görüşü aşağıdakilerden hangisidir?",
        siklar: [
            "Dil, sadece yazı icat edilince ortaya çıkmıştır.",
            "Dil, tek bir kişinin icadıdır.",
            "Dil seslerinin ilk aşaması fizikî veya ruhî anlam taşıyan hayvanî ses belirtilerinden oluşur.",
            "Dil, sadece duygusal tepkilerden oluşur.",
            "Dil, sadece doğadaki seslerin taklididir."
        ],
        dogruCevap: "Dil seslerinin ilk aşaması fizikî veya ruhî anlam taşıyan hayvanî ses belirtilerinden oluşur."
    },
    {
        soru: "Dilin milleti birleştirip korumasının önemi aşağıdakilerden hangisiyle açıklanır?",
        siklar: [
            "Dil, millî kimlikle ilişkili değildir",
            "Millî kimlik sadece ekonomik göstergelerle korunur",
            "Dilin muhafazası millî kimliğin muhafazasıdır",
            "Dil değiştikçe kimlik güçlenir",
            "Dil, siyasetten tamamen bağımsızdır"
        ],
        dogruCevap: "Dilin muhafazası millî kimliğin muhafazasıdır"
    },
    {
        soru: "Atatürk'e göre dil ve millî his arasındaki ilişki için doğru ifade hangisidir?",
        siklar: [
            "Dil, millî his üzerinde etkisizdir",
            "Millî his, dilden bağımsız biçimde gelişir",
            "Dilin millî ve zengin olması, millî hissin gelişmesinde başlıca etkendir",
            "Dil, yalnızca bilimsel terimleri etkiler",
            "Dil, sadece yazı dili olursa millî his gelişir"
        ],
        dogruCevap: "Dilin millî ve zengin olması, millî hissin gelişmesinde başlıca etkendir"
    },
    {
        soru: "Söz ve yazı ilişkisi bakımından doğru olan hangisidir?",
        siklar: [
            "Yazı, sözden eskidir; söz yazıdan türemiştir",
            "Söz ve yazı aynı anda ortaya çıkmıştır",
            "Söz, yazıdan eskidir; yazı sözün kayıt altına alınması için keşfedilmiştir",
            "Söz, yazının bir alt sistemidir",
            "Yazı, sözün yerini bütünüyle almıştır"
        ],
        dogruCevap: "Söz, yazıdan eskidir; yazı sözün kayıt altına alınması için keşfedilmiştir"
    },
    {
        soru: "Aşağıdakilerden hangisi dilin kendisine ait kanunları (kuralları) olduğuna bir örnektir?",
        siklar: [
            "Dilin zamanla değişmesi",
            "Yapay dillerin başarısızlığı",
            "Büyük Ünlü Uyumu gibi kuralların varlığı",
            "Dilin anlaşma aracı olması",
            "Dilin sadece sözlü olması"        ],
        dogruCevap: "Büyük Ünlü Uyumu gibi kuralların varlığı"
    },
    {
        soru: "Dillerin kökeni hakkında 'deneyimle öğrenilir' görüşünü savunanlar kimlerdir?",
        siklar: [
            "J.G. Hamann",
            "J.G. Herder",
            "Platon",
            "Horatius",
            "Wundt"
        ],
        dogruCevap: "Horatius"
    },
    {
        soru: "Aşağıdakilerden hangisi dilin 'tabii (doğal) bir araç' olduğu niteliğini destekler?",
        siklar: [
            "Dilin sadece yazılı iletişime hizmet etmesi",
            "Dilin bir âlim tarafından icat edilmesi",
            "Her toplumun kendi dil mantığı ve kültürüyle dilini kendiliğinden oluşturması",
            "Dilin sabit ve değişmez bir yapıya sahip olması",
            "Yapılan tüm yapay dillerin geniş kabul görmesi"
        ],
        dogruCevap: "Her toplumun kendi dil mantığı ve kültürüyle dilini kendiliğinden oluşturması"
    }
];


// Ortak fonksiyonlar
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// module2 için soru setleri
const module2QuestionSets = {
    DIL_TANIMI: module1ConsolidatedQuestions, // Yeni eklenen konsolide Konu 1 soruları
    SOSYAL: questionsSosyal,
    TURLERI: questionsTurleri,
    SINIF: questionsSinif,
    DONEMLER: questionsDonemler,
    ORTA: questionsOrta,
    YENI: questionsYeni
};

function module2CloneQuestion(q) {
    return { soru: q.soru, siklar: q.siklar.slice(), dogruCevap: q.dogruCevap };
}

function module2PrepareQuestions(source, shouldShuffle = true) {
    return source.map(q => {
        const clone = module2CloneQuestion(q);
        if (shouldShuffle) shuffleArray(clone.siklar);
        return clone;
    });
}

let module2ActiveTest = 'DIL_TANIMI'; // Default olarak yeni Konu 1 testini başlat
let module2LastBaseTest = 'DIL_TANIMI';
let module2Questions = module2PrepareQuestions(module2QuestionSets[module2ActiveTest]);
let module2CurrentIndex = 0;
let module2UserAnswers = new Array(module2Questions.length).fill(null);
let module2WrongQuestions = [];

function module2HighlightNav() {
    document.querySelectorAll('.module2-test-link').forEach(link => {
        const code = link.dataset.module2Test;
        const shouldHighlight = code === module2ActiveTest && module2Questions.length > 0;
        link.classList.toggle('active', shouldHighlight);
    });
}

function module2SelectTest(which) {
    if (which === 'WRONG') {
        if (!module2WrongQuestions.length) {
            alert('Yanlış kaydınız yok. Önce bir testi çözüp yanlışlarınızı oluşturun.');
            return;
        }
        module2ActiveTest = 'WRONG';
        module2Questions = module2PrepareQuestions(module2WrongQuestions);
    } else if (module2QuestionSets[which]) {
        module2ActiveTest = which;
        module2LastBaseTest = which;
        module2Questions = module2PrepareQuestions(module2QuestionSets[which]);
    } else {
        return;
    }

    module2CurrentIndex = 0;
    module2UserAnswers = new Array(module2Questions.length).fill(null);

    const resultsBox = document.getElementById('module2-resultsBox');
    if (resultsBox) {
        resultsBox.style.display = 'none';
        resultsBox.innerHTML = '';
    }
    const retryBtn = document.getElementById('module2-retryBtn');
    if (retryBtn) retryBtn.style.display = 'none';
    const submitBtn = document.getElementById('module2-submitBtn');
    if (submitBtn) submitBtn.style.display = module2Questions.length ? 'inline-block' : 'none';

    module2HighlightNav();
    module2RenderQuestion();
}

function module2RenderQuestion() {
    const counter = document.getElementById('module2-questionCounter');
    const qText = document.getElementById('module2-questionText');
    const options = document.getElementById('module2-optionsContainer');
    const feedback = document.getElementById('module2-questionFeedback');

    if (!module2Questions || module2Questions.length === 0) {
        if (counter) counter.textContent = 'Çözülecek soru bulunmuyor';
        if (qText) qText.textContent = 'Yanlış yaptığınız soru kalmadı.';
        if (options) options.innerHTML = '';
        if (feedback) {
            feedback.className = 'feedback';
            feedback.textContent = '';
        }
        module2SetOptionsDisabled(true);
        module2UpdateNavButtons();
        return;
    }

    const q = module2Questions[module2CurrentIndex];
    counter.textContent = 'Soru ' + (module2CurrentIndex + 1) + ' / ' + module2Questions.length;
    qText.textContent = q.soru;
    options.innerHTML = '';
    feedback.className = 'feedback';
    feedback.textContent = '';

    q.siklar.forEach((opt) => {
        const id = 'module2_opt_' + module2CurrentIndex + '_' + Math.random().toString(36).slice(2, 8);
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'module2Option';
        input.value = opt;
        input.id = id;
        label.htmlFor = id;
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + opt));
        options.appendChild(label);
    });

    const answered = module2UserAnswers[module2CurrentIndex];
    if (answered) {
        module2ApplyAnswerState(answered.selected, answered.correct);
    } else {
        module2SetOptionsDisabled(false);
    }

    module2UpdateNavButtons();
}

function module2SetOptionsDisabled(disabled) {
    document.querySelectorAll('#module2-optionsContainer input[name="module2Option"]').forEach(r => {
        r.disabled = disabled;
        r.parentElement.style.cursor = disabled ? 'default' : 'pointer';
    });
}

const module2OptionsContainer = document.getElementById('module2-optionsContainer');
if (module2OptionsContainer) {
    module2OptionsContainer.addEventListener('change', function(e) {
        if (e.target && e.target.name === 'module2Option') {
            module2HandleAnswer(e.target.value);
        }
    });
}

function module2HandleAnswer(selectedValue) {
    if (!module2Questions.length) return;
    const q = module2Questions[module2CurrentIndex];
    const isCorrect = selectedValue === q.dogruCevap;
    module2UserAnswers[module2CurrentIndex] = { selected: selectedValue, correct: isCorrect };
    module2ApplyAnswerState(selectedValue, isCorrect);
}

function module2ApplyAnswerState(selectedValue, isCorrect) {
    const q = module2Questions[module2CurrentIndex];
    const feedback = document.getElementById('module2-questionFeedback');
    document.querySelectorAll('#module2-optionsContainer label').forEach(label => {
        label.classList.remove('correct-choice', 'incorrect-choice');
        const input = label.querySelector('input');
        if (input.value === q.dogruCevap) label.classList.add('correct-choice');
        if (!isCorrect && input.value === selectedValue && selectedValue !== q.dogruCevap) label.classList.add('incorrect-choice');
        if (input.value === selectedValue) input.checked = true;
    });
    module2SetOptionsDisabled(true);
    feedback.textContent = isCorrect ? 'Doğru! 🎉' : ('Yanlış. Doğru cevap: ' + q.dogruCevap);
    feedback.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');
}

function module2UpdateNavButtons() {
    const prevBtn = document.getElementById('module2-prevBtn');
    const nextBtn = document.getElementById('module2-nextBtn');
    const hasQuestions = module2Questions.length > 0;
    if (prevBtn) prevBtn.disabled = !hasQuestions || module2CurrentIndex === 0;
    if (nextBtn) nextBtn.disabled = !hasQuestions || module2CurrentIndex === module2Questions.length - 1;
}

function module2NextQuestion() {
    if (module2CurrentIndex < module2Questions.length - 1) {
        module2CurrentIndex++;
        module2RenderQuestion();
    }
}
function module2PrevQuestion() {
    if (module2CurrentIndex > 0) {
        module2CurrentIndex--;
        module2RenderQuestion();
    }
}

function module2SubmitQuiz() {
    const total = module2Questions.length;
    if (!total) return;
    const correct = module2UserAnswers.filter(a => a && a.correct).length;
    const answeredCount = module2UserAnswers.filter(a => a !== null).length;
    const wrongQuestions = [];
    module2Questions.forEach((q, idx) => {
        const answer = module2UserAnswers[idx];
        if (!answer || !answer.correct) {
            wrongQuestions.push(module2CloneQuestion(q));
        }
    });
    module2WrongQuestions = wrongQuestions;

    const wrongCount = wrongQuestions.length;
    const resultsBox = document.getElementById('module2-resultsBox');
    const wrongMessage = wrongCount > 0
        ? '<p>' + wrongCount + ' soruyu yanlış yaptınız. Üst menüdeki "Yanlış Yapılanlar" sekmesiyle bu soruları yeniden çözebilirsiniz.</p>'
        : '<p>Tebrikler! Tüm soruları doğru cevapladınız. 👏</p>';

    resultsBox.style.display = 'block';
    resultsBox.innerHTML = '<h3>Test Sonucunuz</h3>' +
        '<p>' + total + ' sorudan ' + correct + ' doğru cevap verdiniz.</p>' +
        '<p>Cevaplanan soru sayısı: ' + answeredCount + ' / ' + total + '</p>' +
        wrongMessage;
    const retryBtn = document.getElementById('module2-retryBtn');
    if (retryBtn) retryBtn.style.display = 'inline-block';
    module2HighlightNav();
}

function module2RetryQuiz() {
    const hasWrong = module2WrongQuestions.length > 0;
    if (module2ActiveTest === 'WRONG' && !hasWrong) {
        module2SelectTest(module2LastBaseTest);
    } else {
        module2SelectTest(module2ActiveTest);
    }
}

module2HighlightNav();

window.module2SelectTest = module2SelectTest;
window.module2NextQuestion = module2NextQuestion;
window.module2PrevQuestion = module2PrevQuestion;
window.module2SubmitQuiz = module2SubmitQuiz;
window.module2RetryQuiz = module2RetryQuiz;

function initializeTopNav() {
    document.querySelectorAll('.top-nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const section = this.dataset.section;
            const module2Test = this.dataset.module2Test;
            if (module2Test || section) {
                e.preventDefault();
            }

            if (module2Test) {
                module2SelectTest(module2Test);
                document.getElementById('module2').scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (section === 'module1-home') { // Keep this for now, if the home page is still a section
                // You might want to handle a default display for the empty home page here
                document.getElementById('module1-home').classList.add('active');
                document.getElementById('module1-home').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

window.addEventListener('load', function() {
    module2SelectTest('DIL_TANIMI'); // Start with the consolidated Konu 1 test
    initializeTopNav();
});


