"use strict";

const moduleQuestions = [
  {
    number: 1,
    text: "Bir işletmenin sahip olduğu varlıkları (dönen, duran) bilançonun hangi tarafında yer alır ve bu taraf neyi ifade eder?",
    options: [
      { label: 'A', text: "Aktif tarafında yer alır ve fonların nerelere yatırıldığını gösterir." },
      { label: 'B', text: "Pasif tarafında yer alır ve fonların nereden bulunduğunu gösterir." },
      { label: 'C', text: "Aktif tarafında yer alır ve işletmenin borçlarını gösterir." },
      { label: 'D', text: "Pasif tarafında yer alır ve işletmenin sahip olduğu değerleri gösterir." },
      { label: 'E', text: "Öz kaynaklar bölümünde yer alır ve ortakların payını gösterir." },
    ],
    correctLabel: 'A'
  },
  {
    number: 2,
    text: "Sermaye şirketlerinde, şirketin borçlarına karşı alacaklılar için temel güvence aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Ortakların kişisel mal varlıkları ve itibarları" },
      { label: 'B', text: "Şirket yöneticilerinin şahsi kefaletleri" },
      { label: 'C', text: "Şirketin kendi sermayesi ve mal varlığı" },
      { label: 'D', text: "Devletin sağladığı kredi garanti fonları" },
      { label: 'E', text: "Şirketin en büyük ortağının kişisel serveti" },
    ],
    correctLabel: 'C'
  },
  {
    number: 3,
    text: "Geri ödenme zorunluluğu olmayan, işletme sahiplerinin firmaya koyduğu ve karşılığında söz hakkı ile kârdan pay alma hakkı elde ettiği fon kaynağı hangisidir?",
    options: [
      { label: 'A', text: "Uzun Vadeli Yabancı Kaynaklar" },
      { label: 'B', text: "Öz Kaynaklar (Öz Sermaye)" },
      { label: 'C', text: "Kısa Vadeli Yabancı Kaynaklar" },
      { label: 'D', text: "Çıkarılmış Tahviller" },
      { label: 'E', text: "Banka Kredileri" },
    ],
    correctLabel: 'B'
  },
  {
    number: 4,
    text: "Şahıs şirketlerini sermaye şirketlerinden ayıran en temel özellik aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Ortak sayısının 50 ile sınırlı olması" },
      { label: 'B', text: "Kâr amacı gütmeleri ve süreklilik arz etmeleri" },
      { label: 'C', text: "Kuruluş belgelerinin esas sözleşme olması" },
      { label: 'D', text: "Ortakların şirket borçlarından tüm mal varlıklarıyla sorumlu olması" },
      { label: 'E', text: "Hisse senedi ihraç edebilme yetkisine sahip olmaları" },
    ],
    correctLabel: 'D'
  },
  {
    number: 5,
    text: "Finansal yönetimin nihai ve en temel amacı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "İşletmenin kârlılığını en üst düzeye çıkarmak" },
      { label: 'B', text: "İşletmenin günlük nakit akışını sorunsuz yönetmek" },
      { label: 'C', text: "Firma değerini, yani ortakların servetini maksimize etmek" },
      { label: 'D', text: "Kısa vadeli borçların zamanında ödenmesini sağlamak" },
      { label: 'E', text: "İşletmenin pazar payını ve satışlarını artırmak" },
    ],
    correctLabel: 'C'
  },
  {
    number: 6,
    text: "Firmanın nihai amacına ulaşabilmesi için finans departmanının öncelikli operasyonel hedefi nedir?",
    options: [
      { label: 'A', text: "Yeterli nakit akışı sağlayarak işletmenin ödeme gücünü korumak" },
      { label: 'B', text: "Mümkün olan en yüksek kârı elde etmek için maliyetleri kısmak" },
      { label: 'C', text: "Rakiplerin pazar payını analiz ederek strateji geliştirmek" },
      { label: 'D', text: "Firmanın marka değerini ve imajını güçlendirmek" },
      { label: 'E', text: "Uzun vadeli yatırımlar için en ucuz krediyi bulmak" },
    ],
    correctLabel: 'A'
  },
  {
    number: 7,
    text: "Türkiye'deki KOBİ'ler tarafından en yaygın olarak tercih edilen, ortak sayısı 50 ile sınırlı olan ve tahvil ihraç edemeyen şirket türü hangisidir?",
    options: [
      { label: 'A', text: "Anonim Şirket" },
      { label: 'B', text: "Komandit Şirket" },
      { label: 'C', text: "Limited Şirket" },
      { label: 'D', text: "Kollektif Şirket" },
      { label: 'E', text: "Halka Açık Anonim Şirket" },
    ],
    correctLabel: 'C'
  },
  {
    number: 8,
    text: "Anonim şirketlerin, limited şirketlere göre en belirgin finansman avantajı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Kamu borçlarından ortakların sorumlu olmaması" },
      { label: 'B', text: "Kuruluş işlemlerinin daha basit ve hızlı olması" },
      { label: 'C', text: "En fazla 50 ortak ile sınırlı olması" },
      { label: 'D', text: "Ortakların sorumluluğunun sermaye payıyla sınırlı olması" },
      { label: 'E', text: "Hisse senedi ve tahvil gibi menkul kıymetleri ihraç edebilmesi" },
    ],
    correctLabel: 'E'
  },
  {
    number: 9,
    text: "Anonim şirketlerde şirketin kuruluş belgesi olarak kabul edilen ve noter huzurunda imzalanarak ticaret siciline tescil ettirilen belge hangisidir?",
    options: [
      { label: 'A', text: "Ortaklar Kurulu Kararı" },
      { label: 'B', text: "Ticaret Odası Kayıt Belgesi" },
      { label: 'C', text: "Esas Sözleşme" },
      { label: 'D', text: "İmza Sirküleri" },
      { label: 'E', text: "Faaliyet Belgesi" },
    ],
    correctLabel: 'C'
  },
  {
    number: 10,
    text: "Bir ürünün satışından elde edilen toplam hâsılattan, o ürünü üretmek için katlanılan tüm maliyetlerin çıkarılmasıyla bulunan pozitif farka ne ad verilir?",
    options: [
      { label: 'A', text: "Gelir" },
      { label: 'B', text: "Ciro" },
      { label: 'C', text: "Maliyet" },
      { label: 'D', text: "Yatırım" },
      { label: 'E', text: "Kâr" },
    ],
    correctLabel: 'E'
  },
  {
    number: 11,
    text: "Finansal yönetimin üç temel fonksiyonundan biri olan \"Fonların Sağlanması\" (Finansman Kararları), bilançonun hangi yapısıyla ilgilidir?",
    options: [
      { label: 'A', text: "Dönen varlıkların yapısıyla" },
      { label: 'B', text: "Duran varlıkların yapısıyla" },
      { label: 'C', text: "Pasif yapısıyla (Kaynaklar)" },
      { label: 'D', text: "Aktif yapısıyla (Varlıklar)" },
      { label: 'E', text: "Gelir tablosu kalemleriyle" },
    ],
    correctLabel: 'C'
  },
  {
    number: 12,
    text: "İşletmenin gelecekte ihtiyaç duyacağı fonları belirlemek ve bunların etkin kullanımını sağlamak amacıyla yapılan faaliyetler, finansal yönetimin hangi fonksiyonu kapsamındadır?",
    options: [
      { label: 'A', text: "Finansal Analiz" },
      { label: 'B', text: "Finansal Planlama ve Denetim" },
      { label: 'C', text: "Fonların Sağlanması" },
      { label: 'D', text: "Yatırım Kararları" },
      { label: 'E', text: "Özel Finansal Sorunların Çözümü" },
    ],
    correctLabel: 'B'
  },
  {
    number: 13,
    text: "Firmanın dağıtılmamış kârlar gibi kendi iç kaynaklarını kullanarak, dışarıdan nakit girişi olmadan ortaklarına yeni hisse vermesi işlemine ne ad verilir?",
    options: [
      { label: 'A', text: "Bedelli Sermaye Artırımı" },
      { label: 'B', text: "Temettü Dağıtımı" },
      { label: 'C', text: "Oto-finansman" },
      { label: 'D', text: "Bedelsiz Sermaye Artırımı" },
      { label: 'E', text: "Yedek Akçe Ayrımı" },
    ],
    correctLabel: 'D'
  },
  {
    number: 14,
    text: "Firmanın yeni hisse senedi çıkarıp bunları bir bedel karşılığında satarak kasasına \"sıcak para\" (nakit) girişi sağladığı sermaye artırım türü hangisidir?",
    options: [
      { label: 'A', text: "Bedelsiz Sermaye Artırımı" },
      { label: 'B', text: "Bedelli Sermaye Artırımı" },
      { label: 'C', text: "Hisse Senedi Geri Alımı" },
      { label: 'D', text: "Statü Akçesi Ayrımı" },
      { label: 'E', text: "Kârın Sermayeye Eklenmesi" },
    ],
    correctLabel: 'B'
  },
  {
    number: 15,
    text: "Türk Ticaret Kanunu gereğince ayrılması zorunlu olan ve şirketin mali yapısını güçlendirmeyi amaçlayan yedek akçe türü hangisidir?",
    options: [
      { label: 'A', text: "Statü Akçesi" },
      { label: 'B', text: "Olağanüstü Yedekler" },
      { label: 'C', text: "Yasal Akçe (Kanuni Akçe)" },
      { label: 'D', text: "Özel Fonlar" },
      { label: 'E', text: "Ana Sözleşme Akçesi" },
    ],
    correctLabel: 'C'
  },
  {
    number: 16,
    text: "Bir yıldan kısa vadeli fonların alınıp satıldığı ve işletmelerin genellikle günlük nakit ihtiyaçlarını (işletme sermayesi) karşılamak için başvurduğu piyasa hangisidir?",
    options: [
      { label: 'A', text: "Para Piyasası" },
      { label: 'B', text: "Sermaye Piyasası" },
      { label: 'C', text: "Tahvil Piyasası" },
      { label: 'D', text: "Döviz Piyasası" },
      { label: 'E', text: "Türev Piyasalar" },
    ],
    correctLabel: 'A'
  },
  {
    number: 17,
    text: "Anonim şirketlerin fabrika kurmak gibi büyük ve uzun süreli yatırımlarını finanse etmek için bir yıldan uzun vadeli fon buldukları piyasa aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Para Piyasası" },
      { label: 'B', text: "Bankalararası Piyasa" },
      { label: 'C', text: "Sermaye Piyasası" },
      { label: 'D', text: "Açık Piyasa" },
      { label: 'E', text: "Repo Piyasası" },
    ],
    correctLabel: 'C'
  },
  {
    number: 18,
    text: "Devletin veya anonim şirketlerin bir yıldan uzun vadeli fon sağlamak amacıyla çıkardıkları borçlanma senetlerine ne ad verilir?",
    options: [
      { label: 'A', text: "Hazine Bonosu" },
      { label: 'B', text: "Finansman Bonosu" },
      { label: 'C', text: "Hisse Senedi" },
      { label: 'D', text: "Tahvil" },
      { label: 'E', text: "Çek" },
    ],
    correctLabel: 'D'
  },
  {
    number: 19,
    text: "Bir tahvil üzerinde bulunan ve yatırımcıya belirli dönemlerde yapılacak olan faiz taksiti ödemesini gösteren belge veya kavrama ne denir?",
    options: [
      { label: 'A', text: "Anapara" },
      { label: 'B', text: "İskonto" },
      { label: 'C', text: "Vade" },
      { label: 'D', text: "Nominal Değer" },
      { label: 'E', text: "Kupon" },
    ],
    correctLabel: 'E'
  },
  {
    number: 20,
    text: "Bir firmanın, başka bir firmanın yönetimine katılmak veya temettü geliri elde etmek amacıyla edindiği hisse senetleri, bilançonun hangi kaleminde izlenir?",
    options: [
      { label: 'A', text: "Dönen Varlıklar" },
      { label: 'B', text: "Hazır Değerler" },
      { label: 'C', text: "Stoklar" },
      { label: 'D', text: "Mali Duran Varlıklar" },
      { label: 'E', text: "Maddi Duran Varlıklar" },
    ],
    correctLabel: 'D'
  },
  {
    number: 21,
    text: "Bir şirketin başka bir şirketteki pay oranının %10 ile %50 arasında olması durumunda, bu yatırım aşağıdaki kavramlardan hangisiyle ifade edilir?",
    options: [
      { label: 'A', text: "Bağlı Menkul Kıymet" },
      { label: 'B', text: "Bağlı Ortaklık" },
      { label: 'C', text: "İştirak" },
      { label: 'D', text: "Portföy Yatırımı" },
      { label: 'E', text: "Kontrol Gücü" },
    ],
    correctLabel: 'C'
  },
  {
    number: 22,
    text: "Bir ana şirketin, başka bir şirketin yönetiminde kontrol ve karar yetkisine sahip olmasını sağlayan minimum pay oranı kaçtır?",
    options: [
      { label: 'A', text: "%10" },
      { label: 'B', text: "%25" },
      { label: 'C', text: "%50" },
      { label: 'D', text: "%51" },
      { label: 'E', text: "%75" },
    ],
    correctLabel: 'D'
  },
  {
    number: 23,
    text: "Bir firmanın kısa vadeli borçlarını ödeme gücünü gösteren en temel finansal gösterge olan \"Net İşletme Sermayesi\" nasıl hesaplanır?",
    options: [
      { label: 'A', text: "Toplam Varlıklar - Toplam Borçlar" },
      { label: 'B', text: "Dönen Varlıklar - Duran Varlıklar" },
      { label: 'C', text: "Dönen Varlıklar - Kısa Vadeli Yabancı Kaynaklar" },
      { label: 'D', text: "Kasa + Bankalar - Ticari Borçlar" },
      { label: 'E', text: "Öz Kaynaklar - Uzun Vadeli Yabancı Kaynaklar" },
    ],
    correctLabel: 'C'
  },
  {
    number: 24,
    text: "Bir firmanın Net İşletme Sermayesi'nin pozitif olması (NİS > 0) ne anlama gelir?",
    options: [
      { label: 'A', text: "Firmanın kısa vadeli borçlarını ödedikten sonra bile elinde fon fazlası kaldığını ve likiditesinin güçlü olduğunu gösterir." },
      { label: 'B', text: "Firmanın tüm borçlarını ödeyecek kadar varlığı olduğunu gösterir." },
      { label: 'C', text: "Firmanın dönen varlıklarının kısa vadeli borçlarını karşılamaya yetmediğini gösterir." },
      { label: 'D', text: "Firmanın yüksek kârlılıkla çalıştığını ve yatırım yapması gerektiğini gösterir." },
      { label: 'E', text: "Firmanın öz kaynaklarının yabancı kaynaklarından fazla olduğunu gösterir." },
    ],
    correctLabel: 'A'
  },
  {
    number: 25,
    text: "Vadesi gelmemiş bir çek veya senedin bir banka veya faktoring şirketine götürülerek, belirli bir faiz (iskonto) kesintisi karşılığında anında nakde çevrilmesi işlemine ne ad verilir?",
    options: [
      { label: 'A', text: "Ciro etme" },
      { label: 'B', text: "Alacak senetleri iskontosu (Kırdırma)" },
      { label: 'C', text: "Virman yapma" },
      { label: 'D', text: "Teminat gösterme" },
      { label: 'E', text: "Tahsile verme" },
    ],
    correctLabel: 'B'
  },
  {
    number: 26,
    text: "Borçlunun, alacaklıya belirli bir tarihte belirli bir meblağı kayıtsız şartsız ödeyeceğini taahhüt ettiği ve iki taraf arasında düzenlenen kıymetli evrak hangisidir?",
    options: [
      { label: 'A', text: "Çek" },
      { label: 'B', text: "Poliçe" },
      { label: 'C', text: "Senet (Bono)" },
      { label: 'D', text: "Tahvil" },
      { label: 'E', text: "Konşimento" },
    ],
    correctLabel: 'C'
  },
  {
    number: 27,
    text: "Bir kredi aracı değil, bir \"ödeme aracı\" olarak kabul edilen ve muhatabının her zaman bir banka olduğu kıymetli evrak aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Çek" },
      { label: 'B', text: "Senet" },
      { label: 'C', text: "Poliçe" },
      { label: 'D', text: "Menkul Kıymet" },
      { label: 'E', text: "Varant" },
    ],
    correctLabel: 'A'
  },
  {
    number: 28,
    text: "Kıymetli evrakların mülkiyetinin, arka yüzünün imzalanarak başka bir kişiye devredilmesi işlemine ne ad verilir?",
    options: [
      { label: 'A', text: "Keşide" },
      { label: 'B', text: "İbraz" },
      { label: 'C', text: "Ciro" },
      { label: 'D', text: "Lehtar" },
      { label: 'E', text: "Tahsil" },
    ],
    correctLabel: 'C'
  },
  {
    number: 29,
    text: "Çeki düzenleyen, imzalayan ve bankadaki hesabından ödeme yapılması talimatını veren tarafa ne ad verilir?",
    options: [
      { label: 'A', text: "Lehtar" },
      { label: 'B', text: "Hamil" },
      { label: 'C', text: "Muhatap" },
      { label: 'D', text: "Keşideci" },
      { label: 'E', text: "Ciranta" },
    ],
    correctLabel: 'D'
  },
  {
    number: 30,
    text: "Bir çekte, ödeme yapması için kendisine emir verilen ve bu tarafın her zaman bir banka olan taraf aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Keşideci" },
      { label: 'B', text: "Lehtar" },
      { label: 'C', text: "Muhatap" },
      { label: 'D', text: "Hamil" },
      { label: 'E', text: "Avalist" },
    ],
    correctLabel: 'C'
  },
  {
    number: 31,
    text: "Çek, senet veya poliçe bedelini tahsil etme hakkına sahip olan alacaklı kişi veya kuruma ne ad verilir?",
    options: [
      { label: 'A', text: "Muhatap" },
      { label: 'B', text: "Keşideci" },
      { label: 'C', text: "Hamil" },
      { label: 'D', text: "Lehtar" },
      { label: 'E', text: "Borçlu" },
    ],
    correctLabel: 'D'
  },
  {
    number: 32,
    text: "Üç taraflı bir ilişki içeren, düzenleyenin (keşideci) borçlusuna (muhatap), alacaklısına (lehtar) ödeme yapması için emir verdiği kıymetli evrak hangisidir?",
    options: [
      { label: 'A', text: "Çek" },
      { label: 'B', text: "Senet" },
      { label: 'C', text: "Poliçe" },
      { label: 'D', text: "Varant" },
      { label: 'E', text: "Bono" },
    ],
    correctLabel: 'C'
  },
  {
    number: 33,
    text: "Gelir veya kurumlar vergisi mükelleflerinin, yıl içinde elde ettikleri kazançlar üzerinden üçer aylık dönemler halinde ödedikleri peşin vergiye ne ad verilir?",
    options: [
      { label: 'A', text: "Katma Değer Vergisi" },
      { label: 'B', text: "Damga Vergisi" },
      { label: 'C', text: "Geçici Vergi" },
      { label: 'D', text: "Kurumlar Vergisi Stopajı" },
      { label: 'E', text: "Muhtasar Beyanname" },
    ],
    correctLabel: 'C'
  },
  {
    number: 34,
    text: "Ocak-Şubat-Mart aylarını kapsayan birinci geçici vergi döneminin beyanı ve ödemesi hangi ay içinde yapılır?",
    options: [
      { label: 'A', text: "Nisan" },
      { label: 'B', text: "Mayıs" },
      { label: 'C', text: "Haziran" },
      { label: 'D', text: "Temmuz" },
      { label: 'E', text: "Ağustos" },
    ],
    correctLabel: 'B'
  },
  {
    number: 35,
    text: "Satıcının alıcıya sadece fatura düzenleyerek, aralarındaki güvene dayalı olarak mal sattığı ve borcun ileri bir tarihte ödendiği alacak türü hangisidir?",
    options: [
      { label: 'A', text: "Senetli Alacak" },
      { label: 'B', text: "Çekli Alacak" },
      { label: 'C', text: "Rehinli Alacak" },
      { label: 'D', text: "Senetsiz Alacak (Açık Hesap)" },
      { label: 'E', text: "İpotekli Alacak" },
    ],
    correctLabel: 'D'
  },
  {
    number: 36,
    text: "Bir firmanın yaşam döngüsü boyunca sık karşılaşmadığı; şirket birleşmesi, halka açılma veya tasfiye gibi konular, finansal yönetimin hangi fonksiyonu altında incelenir?",
    options: [
      { label: 'A', text: "Finansal Planlama ve Denetim" },
      { label: 'B', text: "Yatırım Kararları" },
      { label: 'C', text: "Finansman Kararları" },
      { label: 'D', text: "Özel Finansal Sorunların Çözümü" },
      { label: 'E', text: "Dönen Varlıkların Yönetimi" },
    ],
    correctLabel: 'D'
  },
  {
    number: 37,
    text: "Yabancı para birimi cinsinden (genellikle Dolar veya Euro) ihraç edilen uzun vadeli tahvillere ne ad verilir?",
    options: [
      { label: 'A', text: "Devlet Tahvili" },
      { label: 'B', text: "Özel Kesim Tahvili" },
      { label: 'C', text: "Hazine Bonosu" },
      { label: 'D', text: "Eurobond" },
      { label: 'E', text: "Finansman Bonosu" },
    ],
    correctLabel: 'D'
  },
  {
    number: 38,
    text: "Büyük anonim şirketlerin kısa vadeli nakit ihtiyaçlarını karşılamak için para piyasalarında çıkardıkları teminatsız borçlanma senetleri hangisidir?",
    options: [
      { label: 'A', text: "Hazine Bonosu" },
      { label: 'B', text: "Devlet Tahvili" },
      { label: 'C', text: "Finansman Bonosu" },
      { label: 'D', text: "Varlığa Dayalı Menkul Kıymet" },
      { label: 'E', text: "Hisse Senedi" },
    ],
    correctLabel: 'C'
  },
  {
    number: 39,
    text: "Bir işletmenin bilançosunun pasif (kaynaklar) tarafı temelde hangi iki ana gruptan oluşur?",
    options: [
      { label: 'A', text: "Dönen Varlıklar ve Duran Varlıklar" },
      { label: 'B', text: "Kasa ve Bankalar" },
      { label: 'C', text: "Alacaklar ve Borçlar" },
      { label: 'D', text: "Sermaye ve Kârlar" },
      { label: 'E', text: "Yabancı Kaynaklar ve Öz Kaynaklar" },
    ],
    correctLabel: 'E'
  },
  {
    number: 40,
    text: "Kişinin veya kurumun aynı bankadaki kendi hesapları arasında yaptığı para aktarma işlemine ne denir?",
    options: [
      { label: 'A', text: "Havale" },
      { label: 'B', text: "EFT" },
      { label: 'C', text: "Virman" },
      { label: 'D', text: "Swift" },
      { label: 'E', text: "Ciro" },
    ],
    correctLabel: 'C'
  },
  {
    number: 41,
    text: "Modern finans anlayışına göre, firma değerini oluşturan unsurlar arasında aşağıdakilerden hangisi yer almaz?",
    options: [
      { label: 'A', text: "Risk" },
      { label: 'B', text: "Zaman" },
      { label: 'C', text: "İtibar" },
      { label: 'D', text: "Kâr" },
      { label: 'E', text: "Sadece üretim maliyeti" },
    ],
    correctLabel: 'E'
  },
  {
    number: 42,
    text: "Finansal yönetimin \"Yatırım Kararları\" fonksiyonu, firmanın hangi temel sorusuna cevap arar?",
    options: [
      { label: 'A', text: "Gerekli fonlar en uygun maliyetle nasıl sağlanmalıdır?" },
      { label: 'B', text: "Sağlanan fonlar çeşitli varlıklar arasında en verimli şekilde nasıl dağıtılmalıdır?" },
      { label: 'C', text: "Firmanın kâr dağıtım politikası ne olmalıdır?" },
      { label: 'D', text: "Firmanın büyüme hızı rakiplere göre ne olmalıdır?" },
      { label: 'E', text: "Kamu borçları zamanında nasıl ödenecektir?" },
    ],
    correctLabel: 'B'
  },
  {
    number: 43,
    text: "Bir şirketin bilançosunda yer alan \"Satıcılar\" hesabı hangi kaynak grubuna aittir ve neyi ifade eder?",
    options: [
      { label: 'A', text: "Öz Kaynaklar / Ortaklardan alınan borçları" },
      { label: 'B', text: "Uzun Vadeli Yabancı Kaynaklar / Banka kredilerini" },
      { label: 'C', text: "Kısa Vadeli Yabancı Kaynaklar / Kredili mal alımlarını" },
      { label: 'D', text: "Dönen Varlıklar / Müşterilerden olan alacakları" },
      { label: 'E', text: "Öz Kaynaklar / Ödenmiş sermayeyi" },
    ],
    correctLabel: 'C'
  },
  {
    number: 44,
    text: "Limited şirket ortaklarının, anonim şirket ortaklarından farklı olarak taşıdığı önemli bir sorumluluk nedir?",
    options: [
      { label: 'A', text: "Şirketten tahsil edilemeyen kamu borçlarından sermaye payları oranında şahsen sorumlu olmaları" },
      { label: 'B', text: "Şirket borçlarından dolayı tüm mal varlıklarıyla sınırsız sorumlu olmaları" },
      { label: 'C', text: "Şirket yönetimine katılma zorunluluklarının olması" },
      { label: 'D', text: "Kâr payı dağıtımında yasal kısıtlamalara tabi olmaları" },
      { label: 'E', text: "Hisse senetlerini halka arz edememeleri" },
    ],
    correctLabel: 'A'
  },
  {
    number: 45,
    text: "Bir firmanın başka bir şirketin hisselerine yatırım yapması sonucu elde ettiği temettü geliri, Gelir Tablosu'nun hangi bölümünde raporlanır?",
    options: [
      { label: 'A', text: "Satışların Maliyeti" },
      { label: 'B', text: "Faaliyet Giderleri" },
      { label: 'C', text: "Diğer Faaliyetlerden Olağan Gelir ve Kârlar" },
      { label: 'D', text: "Brüt Satış Kârı" },
      { label: 'E', text: "Finansman Giderleri" },
    ],
    correctLabel: 'C'
  },
  {
    number: 46,
    text: "Bir çekin, düzenlendiği şehirden farklı bir şehirdeki bankaya sunulması için yasal ibraz süresi ne kadardır?",
    options: [
      { label: 'A', text: "10 gün" },
      { label: 'B', text: "1 ay" },
      { label: 'C', text: "3 ay" },
      { label: 'D', text: "6 ay" },
      { label: 'E', text: "1 yıl" },
    ],
    correctLabel: 'B'
  },
  {
    number: 47,
    text: "Bir işletme kâr elde ettiğinde, bu kâr üzerinde ilk hak sahibi olan ve bilançoda \"Yabancı Kaynak\" olarak yer alan taraf hangisidir?",
    options: [
      { label: 'A', text: "Bankalar" },
      { label: 'B', text: "Ortaklar" },
      { label: 'C', text: "Devlet (Vergiler)" },
      { label: 'D', text: "Tedarikçiler" },
      { label: 'E', text: "Tahvil sahipleri" },
    ],
    correctLabel: 'C'
  },
  {
    number: 48,
    text: "Aşağıdakilerden hangisi bir işletmenin \"dönen varlık\" kalemi değildir?",
    options: [
      { label: 'A', text: "Kasa" },
      { label: 'B', text: "Bankalar" },
      { label: 'C', text: "Stoklar" },
      { label: 'D', text: "Binalar" },
      { label: 'E', text: "Alacak Senetleri" },
    ],
    correctLabel: 'D'
  },
  {
    number: 49,
    text: "Bir yatırımın, gelecekte getiri sağlama beklentisi taşıması onu hangi kavramdan ayırır?",
    options: [
      { label: 'A', text: "Borç" },
      { label: 'B', text: "Sermaye" },
      { label: 'C', text: "Maliyet" },
      { label: 'D', text: "Gelir" },
      { label: 'E', text: "Finansman" },
    ],
    correctLabel: 'C'
  },
  {
    number: 50,
    text: "Bir işletmenin kurucularından, yöneticilerinden ve çalışanlarından bağımsız bir kişiliği olduğunu ifade eden hukuki kavrama ne denir?",
    options: [
      { label: 'A', text: "Tacir Sıfatı" },
      { label: 'B', text: "Ticaret Unvanı" },
      { label: 'C', text: "Tüzel Kişilik" },
      { label: 'D', text: "Esas Sözleşme" },
      { label: 'E', text: "Bağımsız Denetim" },
    ],
    correctLabel: 'C'
  },
  {
    number: 51,
    text: "İhracattan doğan orta ve uzun vadeli, kıymetli evraka bağlanmış alacakların finansmanında kullanılan ve borçlunun ödememe riskini (hem ticari hem de politik riski) tamamen finansman kuruluşunun üstlendiği yöntem aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Faktoring" },
      { label: 'B', text: "Forfaiting" },
      { label: 'C', text: "Leasing (Finansal Kiralama)" },
      { label: 'D', text: "Banka Kredisi" },
      { label: 'E', text: "Alacak Senedi İskontosu" },
    ],
    correctLabel: 'B'
  },
  {
    number: 52,
    text: "Forfaiting işlemini, faktoring işleminden ayıran en temel ve *değişmez* özellik aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Sadece kısa vadeli alacakları finanse etmesi" },
      { label: 'B', text: "Genellikle faturaya dayalı alacaklar için kullanılması" },
      { label: 'C', text: "Her zaman rücusuz (without recourse) olması, yani tüm riskin devralınması" },
      { label: 'D', text: "Yalnızca yurt içi ticarette kullanılması" },
      { label: 'E', text: "İşlem maliyetlerinin daha düşük olması" },
    ],
    correctLabel: 'C'
  },
  {
    number: 53,
    text: "İşletmelerin kısa vadeli, genellikle faturaya dayalı (senetsiz) alacaklarını bir finans kuruluşuna devrederek nakit akışını hızlandırdığı finansman tekniği hangisidir?",
    options: [
      { label: 'A', text: "Faktoring" },
      { label: 'B', text: "Forfaiting" },
      { label: 'C', text: "Tahvil İhracı" },
      { label: 'D', text: "Bedelli Sermaye Artırımı" },
      { label: 'E', text: "Devlet Teşviği" },
    ],
    correctLabel: 'A'
  },
  {
    number: 54,
    text: "Geçici vergi sistemine göre, bir şirketin Temmuz-Ağustos-Eylül aylarını kapsayan üçüncü çeyrek kazancına ilişkin vergi beyanı ve ödemesi için son tarih aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Ekim ayının 17. günü" },
      { label: 'B', text: "Kasım ayının 17. günü" },
      { label: 'C', text: "Aralık ayının 17. günü" },
      { label: 'D', text: "Bir sonraki yılın Şubat ayının 17. günü" },
      { label: 'E', text: "Ağustos ayının 17. günü" },
    ],
    correctLabel: 'B'
  },
  {
    number: 55,
    text: "Yıl içinde ödenen geçici vergilerin, yıl sonunda hesaplanan nihai kurumlar vergisi ile ilişkisi nedir?",
    options: [
      { label: 'A', text: "Geçici vergiler, nihai vergiye ek olarak ödenir." },
      { label: 'B', text: "Nihai vergi, ödenen geçici vergilerin ortalaması alınarak hesaplanır." },
      { label: 'C', text: "Ödenen geçici vergiler, yıl sonunda hesaplanan nihai vergiden mahsup edilir (düşülür)." },
      { label: 'D', text: "Geçici vergi ödenmişse, yıl sonunda ayrıca bir vergi hesaplanmaz." },
      { label: 'E', text: "Geçici vergiler, sadece kâr eden firmalar için bir sonraki yıla devredilir." },
    ],
    correctLabel: 'C'
  },
  {
    number: 56,
    text: "Bankaların bir işletmeye kredi verirken kullandığı kredi notu ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      { label: 'A', text: "Kredi notu, işletmeye verilecek kredi miktarını birebir belirler." },
      { label: 'B', text: "Düşük kredi notu, işletmenin kesinlikle kredi alamayacağı anlamına gelir." },
      { label: 'C', text: "Kredi notu, sadece işletmenin geçmiş borç ödemelerini gösterir." },
      { label: 'D', text: "Kredi notu, borçlanma faiz oranını ve limitini belirleyen önemli bir kıstastır." },
      { label: 'E', text: "Kredi notu, banka dışı finansal kuruluşlar için bir anlam ifade etmez." },
    ],
    correctLabel: 'D'
  },
  {
    number: 57,
    text: "Bir çekin, senede (bono) göre daha güvenli bir ödeme aracı olarak kabul edilmesinin temel nedeni nedir?",
    options: [
      { label: 'A', text: "Çekin vadesinin daha kısa olması" },
      { label: 'B', text: "Çekin ciro edilmesinin daha kolay olması" },
      { label: 'C', text: "Muhatabın her zaman bir banka olması ve ödeme güvencesi sunması" },
      { label: 'D', text: "Karşılıksız çek düzenlemenin yasal bir yaptırımının olmaması" },
      { label: 'E', text: "Çekin düzenleyen (keşideci) tarafından iptal edilememesi" },
    ],
    correctLabel: 'C'
  },
  {
    number: 58,
    text: "Yerel para birimi Türk Lirası olan bir yatırımcının, ABD Doları cinsinden ihraç edilmiş bir Eurobond'a yatırım yapması durumunda karşı karşıya kalacağı iki temel risk aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Enflasyon riski ve likidite riski" },
      { label: 'B', text: "Siyasi risk ve operasyonel risk" },
      { label: 'C', text: "Piyasa (fiyat) riski ve döviz kuru riski" },
      { label: 'D', text: "Kredi riski ve vergi riski" },
      { label: 'E', text: "Temettü riski ve faiz oranı riski" },
    ],
    correctLabel: 'C'
  },
  {
    number: 59,
    text: "Sermaye piyasalarının temel işlevi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "İşletmelere kısa vadeli nakit ihtiyaçları için fon sağlamak" },
      { label: 'B', text: "Bankalar arası para transferlerini düzenlemek" },
      { label: 'C', text: "Fon arz edenler (tasarruf sahipleri) ile fon talep edenleri (şirketler) menkul kıymetler aracılığıyla buluşturmak" },
      { label: 'D', text: "Şirketlerin vergi borçlarını yapılandırmak" },
      { label: 'E', text: "Devletin para politikasını uygulamak" },
    ],
    correctLabel: 'C'
  },
  {
    number: 60,
    text: "Aşağıdakilerden hangisi para piyasasında işlem gören, vadesi bir yıldan kısa olan bir borçlanma aracıdır?",
    options: [
      { label: 'A', text: "Devlet Tahvili" },
      { label: 'B', text: "Hisse Senedi" },
      { label: 'C', text: "Eurobond" },
      { label: 'D', text: "Hazine Bonosu" },
      { label: 'E', text: "İştirak Belgesi" },
    ],
    correctLabel: 'D'
  },
  {
    number: 61,
    text: "Aşağıdaki finansman araçlarından hangisi, bir şirketin *borçlanarak* değil, *ortaklık hakkı* satarak uzun vadeli fon sağlamasına olanak tanır?",
    options: [
      { label: 'A', text: "Tahvil" },
      { label: 'B', text: "Finansman Bonosu" },
      { label: 'C', text: "Banka Kredisi" },
      { label: 'D', text: "Hisse Senedi" },
      { label: 'E', text: "Eurobond" },
    ],
    correctLabel: 'D'
  },
  {
    number: 62,
    text: "Finansal yapıda, işletme kendi tüzel kişiliği ile \"birinci şahıs\" olarak kabul edilir. Bu bağlamda, işletmeye sermaye koyan ve kâr üzerinde en son hak sahibi olan ortaklar/sahipler ile işletmeye borç vererek varlıklar üzerinde öncelikli hak sahibi olan bankalar, satıcılar ve devlet gibi alacaklılar, sırasıyla hangi kavramlarla ifade edilir?",
    options: [
      { label: 'A', text: "Ana Paydaşlar - Tali Paydaşlar" },
      { label: 'B', text: "İç Kaynaklar - Dış Kaynaklar" },
      { label: 'C', text: "İkinci Şahıslar - Üçüncü Şahıslar" },
      { label: 'D', text: "Risk Alanlar - Garantörler" },
      { label: 'E', text: "Aktif Sahipleri - Pasif Sahipleri" },
    ],
    correctLabel: 'C'
  },
  {
    number: 63,
    text: "Bir yatırımcının hisse senedi satın alması, ona temelde aşağıdaki haklardan hangisini sağlar?",
    options: [
      { label: 'A', text: "Belirli bir vade sonunda anapara iadesi alma hakkı" },
      { label: 'B', text: "Sabit bir faiz geliri elde etme hakkı" },
      { label: 'C', text: "Şirket üzerinde ortaklık ve kârından pay (temettü) alma hakkı" },
      { label: 'D', text: "Şirketin borçlarına karşı alacaklı olma hakkı" },
      { label: 'E', text: "Yatırımını istediği zaman devlete satma hakkı" },
    ],
    correctLabel: 'C'
  },
  {
    number: 64,
    text: "Değeri başka bir finansal varlığa bağlı olan opsiyon, vadeli işlem (futures) gibi türev menkul kıymetlerin piyasalardaki temel kullanım amacı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Şirketler için uzun vadeli sermaye sağlamak" },
      { label: 'B', text: "Yatırımcıya sabit ve garantili bir getiri sunmak" },
      { label: 'C', text: "Gelecekteki fiyat dalgalanmalarına karşı riskten korunma (hedging)" },
      { label: 'D', text: "İşletmelerin kısa vadeli nakit ihtiyaçlarını karşılamak" },
      { label: 'E', text: "Bir şirkette oy hakkı elde etmek" },
    ],
    correctLabel: 'C'
  },
  {
    number: 65,
    text: "Bir Eurobond'u, yurt içinde ihraç edilen bir Devlet Tahvili'nden ayıran en temel ve belirleyici fark nedir?",
    options: [
      { label: 'A', text: "Vade sürelerinin her zaman 10 yıldan uzun olması" },
      { label: 'B', text: "Sadece özel şirketler tarafından ihraç edilebilmesi" },
      { label: 'C', text: "Faiz (kupon) ödemesi yapılmaması" },
      { label: 'D', text: "İhraç edildiği ülkenin para biriminden farklı bir yabancı para birimi (Dolar, Euro vb.) cinsinden olması" },
      { label: 'E', text: "Risk seviyesinin her zaman sıfır olması" },
    ],
    correctLabel: 'D'
  },
  {
    number: 66,
    text: "Borçlanma aracı olan bono ve tahvili birbirinden ayıran temel kriter aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "İhraç eden kurumun özel sektör ya da devlet olması" },
      { label: 'B', text: "Vade süresinin bir yıldan kısa veya uzun olması" },
      { label: 'C', text: "Sadece iskontolu olarak satılabilmeleri" },
      { label: 'D', text: "Hisse senedine dönüştürülebilme özellikleri" },
      { label: 'E', text: "Sermaye Piyasası Kurulu iznine tabi olmamaları" },
    ],
    correctLabel: 'B'
  },
  {
    number: 67,
    text: "Sahiplerine temettü (kâr payı) ödemelerinde öncelik hakkı tanıyan, ancak oy hakkını genellikle sınırlayan hisse senedi türü hangisidir?",
    options: [
      { label: 'A', text: "Adi Hisse Senetleri" },
      { label: 'B', text: "İmtiyazlı Hisse Senetleri" },
      { label: 'C', text: "Kurucu Hisse Senetleri" },
      { label: 'D', text: "Bedelsiz Hisse Senetleri" },
      { label: 'E', text: "Nama Yazılı Hisse Senetleri" },
    ],
    correctLabel: 'B'
  },
  {
    number: 68,
    text: "Hisse senedi, sahibine sağladığı haklar ve temsil ettiği değer bakımından aşağıdakilerden hangisini ifade eder?",
    options: [
      { label: 'A', text: "Bir şirketten belirli bir faiz karşılığında alacaklı olma hakkını" },
      { label: 'B', text: "Devletin kısa vadeli borçlanma ihtiyacını karşılayan bir finansal aracı" },
      { label: 'C', text: "Bir şirketin sermayesinin bir parçasını temsil eden ve sahibine ortaklık hakkı veren bir menkul kıymeti" },
      { label: 'D', text: "Belirli bir vade sonunda anapara iadesi garantisi sunan bir borçlanma senedini" },
      { label: 'E', text: "Değeri başka bir varlığa bağlı olan ve riskten korunma amacı taşıyan bir sözleşmeyi" },
    ],
    correctLabel: 'C'
  },
  {
    number: 69,
    text: "Tahvil veya bono gibi borç temelli menkul kıymetlere yatırım yapan bir kişi, ihraç eden kuruma karşı hukuken hangi konumdadır?",
    options: [
      { label: 'A', text: "Ortak" },
      { label: 'B', text: "Yönetici" },
      { label: 'C', text: "İmtiyazlı Pay Sahibi" },
      { label: 'D', text: "Alacaklı" },
      { label: 'E', text: "Hissedar" },
    ],
    correctLabel: 'D'
  },
  {
    number: 70,
    text: "Hazine Bonoları'nın, genellikle kupon ödemesi olan tahvillerden ayrılan en belirgin satış özelliği nedir?",
    options: [
      { label: 'A', text: "Vade sonundaki nominal değerinden iskontolu (indirimli) bir fiyattan satılması" },
      { label: 'B', text: "Sadece yabancı para birimi cinsinden ihraç edilmesi" },
      { label: 'C', text: "Vade sürelerinin her zaman 5 yıldan uzun olması" },
      { label: 'D', text: "Yatırımcısına oy hakkı tanıması" },
      { label: 'E', text: "Şirket kârından pay alma hakkı vermesi" },
    ],
    correctLabel: 'A'
  },
  {
    number: 71,
    text: "Bir menkul kıymetin \"türev\" olarak sınıflandırılmasının temel nedeni aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Sermaye Piyasası Kurulu izni olmadan ihraç edilmesi" },
      { label: 'B', text: "Vadesinin bir yıldan kısa olması" },
      { label: 'C', text: "Değerinin, dayanak olarak aldığı başka bir varlığın (hisse senedi, döviz vb.) değerine bağlı olması" },
      { label: 'D', text: "Sadece devlet tarafından ihraç edilebilmesi" },
      { label: 'E', text: "Yatırımcısına sabit ve garantili bir getiri sunması" },
    ],
    correctLabel: 'C'
  },
  {
    number: 72,
    text: "Kısa vadeli nakit ihtiyaçlarını karşılamak amacıyla \"Finansman Bonosu\" ihraç etme yetkisine sahip olan kurumlar hangileridir?",
    options: [
      { label: 'A', text: "Sadece Türkiye Cumhuriyeti Hazinesi" },
      { label: 'B', text: "Büyük anonim şirketler (özel sektör)" },
      { label: 'C', text: "Belediyeler ve yerel yönetimler" },
      { label: 'D', text: "Banka dışı finansal kuruluşlar" },
      { label: 'E', text: "Yabancı devletlerin hazineleri" },
    ],
    correctLabel: 'B'
  },
  {
    number: 73,
    text: "Türkiye Cumhuriyeti Hazinesi'nin, uluslararası piyasalardan Dolar veya Euro cinsinden borçlanmak için ihraç ettiği menkul kıymet aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Devlet Tahvili" },
      { label: 'B', text: "Hazine Bonosu" },
      { label: 'C', text: "Eurobond" },
      { label: 'D', text: "Finansman Bonosu" },
      { label: 'E', text: "Varlığa Dayalı Menkul Kıymet" },
    ],
    correctLabel: 'C'
  },
  {
    number: 74,
    text: "Sahibine şirketin yönetimine katılma ve kâr payı alma gibi temel ortaklık haklarını sunan hisse senedi türü hangisidir?",
    options: [
      { label: 'A', text: "Adi Hisse Senetleri" },
      { label: 'B', text: "İmtiyazlı Hisse Senetleri" },
      { label: 'C', text: "Tahvile Dönüştürülebilir Hisse Senetleri" },
      { label: 'D', text: "Kurucu Hisse Senetleri" },
      { label: 'E', text: "Nama Yazılı Borç Senetleri" },
    ],
    correctLabel: 'A'
  },
  {
    number: 75,
    text: "Aşağıdakilerden hangisi finansal yönetimin temel fonksiyonlarından biri değildir?",
    options: [
      { label: 'A', text: "Fonların sağlanması (Finansman kararları)" },
      { label: 'B', text: "Finansal analiz yapmak" },
      { label: 'C', text: "Üretim sürecinin verimliliğini denetlemek" },
      { label: 'D', text: "Fonların yatırılması (Yatırım kararları)" },
      { label: 'E', text: "Finansal planlama ve denetim" },
    ],
    correctLabel: 'C'
  },
  {
    number: 76,
    text: "Bir işletmenin yabancı kaynaklar (dış finansman) yoluyla fon sağlaması ile ilgili olarak aşağıdakilerden hangisi bu kategoriye girmez?",
    options: [
      { label: 'A', text: "Ticari bankalardan kredi kullanmak" },
      { label: 'B', text: "Tahvil ihraç ederek borçlanmak" },
      { label: 'C', text: "Satıcılardan kredili mal almak" },
      { label: 'D', text: "Dağıtılmamış kârları (yedek akçeleri) işletme bünyesinde tutmak" },
      { label: 'E', text: "Vadesi gelmemiş vergi borçlarını kasada tutmak" },
    ],
    correctLabel: 'D'
  },
  {
    number: 77,
    text: "Bir işletmenin banka hesapları üzerinden gerçekleştirdiği para aktarım işlemlerinden biri değildir?",
    options: [
      { label: 'A', text: "Aynı bankadaki farklı hesaplar arası para transferi (Havale)" },
      { label: 'B', text: "Farklı bankalar arası para transferi (EFT)" },
      { label: 'C', text: "Kişinin aynı bankadaki kendi hesapları arası para aktarımı (Virman)" },
      { label: 'D', text: "Vadesi gelmemiş bir çeki nakde çevirme (İskonto)" },
      { label: 'E', text: "Elektronik Fon Transferi (EFT)" },
    ],
    correctLabel: 'D'
  },
  {
    number: 78,
    text: "Aşağıdakilerden hangisi, alacağı hukuki güvencesi yüksek ve devredilebilir bir belgeye bağlayan senetli alacak (kıymetli evrak) türlerinden biri değildir?",
    options: [
      { label: 'A', text: "Çek" },
      { label: 'B', text: "Bono (Senet)" },
      { label: 'C', text: "Fatura" },
      { label: 'D', text: "Poliçe" },
      { label: 'E', text: "Emre Yazılı Senet" },
    ],
    correctLabel: 'C'
  },
  {
    number: 79,
    text: "Bir imalat şirketinin, başka bir tedarikçi şirketin yönetimine katılmak ve stratejik ortaklık kurmak amacıyla o şirketin hisselerinin %30'unu satın alması, hangi yatırım kararı kapsamındadır ve bilançonun hangi grubunda izlenir?",
    options: [
      { label: 'A', text: "Dönen varlık yatırımı / Hazır Değerler" },
      { label: 'B', text: "Maddi duran varlık yatırımı / Binalar" },
      { label: 'C', text: "Mali duran varlık yatırımı / İştirakler" },
      { label: 'D', text: "Kısa vadeli yatırım / Menkul Kıymetler" },
      { label: 'E', text: "Maddi olmayan duran varlık yatırımı / Haklar" },
    ],
    correctLabel: 'C'
  },
  {
    number: 80,
    text: "Bir harcamanın \"maliyet\" yerine \"yatırım\" olarak sınıflandırılmasını sağlayan temel ayırt edici özellik nedir?",
    options: [
      { label: 'A', text: "Harcamanın tutarının çok yüksek olması" },
      { label: 'B', text: "Harcamanın vergi matrahından düşülebilmesi" },
      { label: 'C', text: "Harcamanın gelecekte gelir veya kâr yaratma beklentisiyle yapılması" },
      { label: 'D', text: "Harcamanın bir yıldan uzun bir süreyi kapsaması" },
      { label: 'E', text: "Harcamanın banka kredisi ile finanse edilmesi" },
    ],
    correctLabel: 'C'
  },
  {
    number: 81,
    text: "Çek veya senet gibi kıymetli evrakların mülkiyetinin, arka yüzünün imzalanarak başka bir şahsa devredilmesi işlemine ne ad verilir?",
    options: [
      { label: 'A', text: "Ciro" },
      { label: 'B', text: "Keşide" },
      { label: 'C', text: "İbraz" },
      { label: 'D', text: "Aval" },
      { label: 'E', text: "Protesto" },
    ],
    correctLabel: 'A'
  },
  {
    number: 82,
    text: "Bir çekte, ödeme yapması için kendisine emir verilen ve bu tarafın her zaman bir banka olduğu kurum, hangi sıfatla anılır?",
    options: [
      { label: 'A', text: "Keşideci" },
      { label: 'B', text: "Lehtar" },
      { label: 'C', text: "Hamil" },
      { label: 'D', text: "Muhatap" },
      { label: 'E', text: "Ciranta" },
    ],
    correctLabel: 'D'
  },
  {
    number: 83,
    text: "Bir firmanın Net İşletme Sermayesi'nin negatif çıkması (NİS < 0), finansal açıdan öncelikli olarak neyin göstergesidir?",
    options: [
      { label: 'A', text: "Firmanın çok yüksek kârlılıkla çalıştığının" },
      { label: 'B', text: "Firmanın duran varlıklara aşırı yatırım yaptığının" },
      { label: 'C', text: "Kısa vadeli borçlarını ödeyememe riski taşıdığının (likidite sıkıntısı)" },
      { label: 'D', text: "Firmanın öz kaynaklarının yetersiz olduğunun" },
      { label: 'E', text: "Firmanın borçlanma maliyetlerinin çok düşük olduğunun" },
    ],
    correctLabel: 'C'
  },
  {
    number: 84,
    text: "Dönen varlıkların yönetiminde (çalışma sermayesi yönetimi) finans yöneticisinin ulaşmaya çalıştığı temel denge aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Vergi yükünü en aza indirmek ile kârı maksimize etmek" },
      { label: 'B', text: "Likiditeyi korumak (ödeme gücü) ile kârlılığı artırmak" },
      { label: 'C', text: "Riskten kaçınmak ile yüksek getiri sağlamak" },
      { label: 'D', text: "Borçlanmayı azaltmak ile öz sermayeyi güçlendirmek" },
      { label: 'E', text: "Stok maliyetlerini düşürmek ile satışları artırmak" },
    ],
    correctLabel: 'B'
  },
  {
    number: 85,
    text: "Aşağıdakilerden hangisi bir şirketin mali duran varlık yatırımlarından biri olarak kabul edilemez?",
    options: [
      { label: 'A', text: "Başka bir şirketin yönetiminde söz sahibi olmak için alınan %15'lik hisse senedi (İştirak)" },
      { label: 'B', text: "Başka bir şirketi kontrol etmek amacıyla alınan %55'lik hisse senedi (Bağlı Ortaklık)" },
      { label: 'C', text: "Üretim kapasitesini artırmak için satın alınan yeni bir makine" },
      { label: 'D', text: "Sadece temettü geliri elde etmek amacıyla uzun vadeli tutulan %5'lik hisse senedi (Bağlı Menkul Kıymet)" },
      { label: 'E', text: "Bir projenin finansmanı için kurulan ortak girişime yapılan sermaye katkısı" },
    ],
    correctLabel: 'C'
  },
  {
    number: 86,
    text: "Bir işletmenin bilançosunun Aktif tarafı onun ekonomik yapısını gösterirken, Pasif tarafı neyi ifade eder?",
    options: [
      { label: 'A', text: "İşletmenin kârlılığını" },
      { label: 'B', text: "İşletmenin finansal yapısını (gücünü)" },
      { label: 'C', text: "İşletmenin satış hacmini" },
      { label: 'D', text: "İşletmenin pazar payını" },
      { label: 'E', text: "İşletmenin üretim kapasitesini" },
    ],
    correctLabel: 'B'
  },
];

const moduleMeta = {
  id: 'finansal-giris',
  title: 'Finansal Yönetime Giriş ve Temel Kavramlar',
  description: `Finansal yönetim disiplininin temel kavramlarını, kurumların finansal yapı taşlarını ve karar süreçlerini ele alır. Modül; bilanço mantığı, finansman ve yatırım kararları, finansal piyasalar, kıymetli evrak ve vergilendirme gibi geniş bir kapsamı içerir.`,
  focusAreas: [
    'Finansal yönetimin amaçları ve fonksiyonları',
    'Fonların sağlanması ve yatırımların planlanması',
    'Finansal piyasalar, kıymetli evrak ve vergi süreçleri'
  ],
  learningObjectives: [
    'Finansal yönetimin amaç ve fonksiyonlarını kavramak',
    'Bilanço ve temel finansal tablo öğelerini yorumlamak',
    'Finansman kaynakları ve sermaye piyasası araçlarını tanımak',
    'Kıymetli evrak türlerini ve kullanım alanlarını ayırt etmek',
    'Vergi süreçleri ve işletmeler için kritik finansal göstergeleri pekiştirmek'
  ],
  additionalNotes: 'Modüldeki sorular sözel ağırlıklıdır ve kavramsal pekiştirme sağlar.',
  testDetails: {
    questionCount: moduleQuestions.length,
    format: 'Sözel ağırlıklı çoktan seçmeli sorular',
    storageHint: 'Cevaplarınız tarayıcıda saklanır ve istediğiniz zaman devam edebilirsiniz.',
    extra: [
      'Yanlış veya uzun çözülen sorular ilerleme sekmesinde takip edilebilir.'
    ]
  }
};

const STORAGE_KEY = 'finansalYonetimModuleState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};

function shuffleArray(source) {
  const array = source.slice();
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createInitialQuestionOrder() {
  return shuffleArray(Array.from({ length: moduleQuestions.length }, (_, index) => index));
}

function createInitialOptionOrder() {
  return moduleQuestions.map(question => shuffleArray(question.options.map(option => option.label)));
}

const defaultQuizState = () => {
  const length = moduleQuestions.length;
  return {
    currentQuestionIndex: 0,
    answers: Array(length).fill(null),
    completed: false,
    order: createInitialQuestionOrder(),
    optionOrder: createInitialOptionOrder(),
    questionTimes: Array(length).fill(0),
    longQuestionIndices: [],
    incorrectQuestionIndices: [],
    activeQuestionGlobalIndex: null,
    activeOrderIndex: null,
    activeQuestionStart: null
  };
};

let appState = {
  quiz: defaultQuizState()
};

function isQuantitativeQuestion(question) {
  return Boolean(question && question.isQuantitative);
}

function isValidOrder(order, length) {
  if (!Array.isArray(order) || order.length !== length) {
    return false;
  }
  const seen = new Set();
  for (const value of order) {
    if (!Number.isInteger(value) || value < 0 || value >= length || seen.has(value)) {
      return false;
    }
    seen.add(value);
  }
  return true;
}

function normalizeOptionOrder(order, questionIndex) {
  const question = moduleQuestions[questionIndex];
  if (!question) {
    return [];
  }
  const labels = question.options.map(option => option.label);
  if (!Array.isArray(order) || order.length !== labels.length) {
    return shuffleArray(labels);
  }
  const set = new Set(order);
  if (set.size !== labels.length || !labels.every(label => set.has(label))) {
    return shuffleArray(labels);
  }
  return order.slice();
}

function normalizeIndexList(list, length) {
  if (!Array.isArray(list)) {
    return [];
  }
  return Array.from(new Set(list.filter(index => Number.isInteger(index) && index >= 0 && index < length))).sort((a, b) => a - b);
}

function normalizeStateArrays() {
  const length = moduleQuestions.length;
  const quiz = appState.quiz;

  if (!Array.isArray(quiz.answers)) {
    quiz.answers = [];
  }
  while (quiz.answers.length < length) {
    quiz.answers.push(null);
  }
  if (quiz.answers.length > length) {
    quiz.answers.length = length;
  }

  if (!Array.isArray(quiz.questionTimes)) {
    quiz.questionTimes = [];
  }
  while (quiz.questionTimes.length < length) {
    quiz.questionTimes.push(0);
  }
  if (quiz.questionTimes.length > length) {
    quiz.questionTimes.length = length;
  }

  if (!isValidOrder(quiz.order, length)) {
    quiz.order = createInitialQuestionOrder();
  }

  if (!Array.isArray(quiz.optionOrder)) {
    quiz.optionOrder = [];
  }
  while (quiz.optionOrder.length < length) {
    const idx = quiz.optionOrder.length;
    const labels = moduleQuestions[idx].options.map(option => option.label);
    quiz.optionOrder.push(shuffleArray(labels));
  }
  quiz.optionOrder = quiz.optionOrder.map((order, idx) => normalizeOptionOrder(order, idx));
  if (quiz.optionOrder.length > length) {
    quiz.optionOrder.length = length;
  }

  quiz.longQuestionIndices = normalizeIndexList(quiz.longQuestionIndices, length);
  quiz.incorrectQuestionIndices = normalizeIndexList(quiz.incorrectQuestionIndices, length);

  if (!Number.isInteger(quiz.currentQuestionIndex) || quiz.currentQuestionIndex < 0 || quiz.currentQuestionIndex >= length) {
    quiz.currentQuestionIndex = 0;
  }

  if (!Number.isInteger(quiz.activeQuestionGlobalIndex) || quiz.activeQuestionGlobalIndex < 0 || quiz.activeQuestionGlobalIndex >= length) {
    quiz.activeQuestionGlobalIndex = null;
  }
  if (!Number.isInteger(quiz.activeOrderIndex) || quiz.activeOrderIndex < 0 || quiz.activeOrderIndex >= length) {
    quiz.activeOrderIndex = null;
  }
  if (typeof quiz.activeQuestionStart !== 'number') {
    quiz.activeQuestionStart = null;
  }
}

function ensureOrderIntegrity() {
  normalizeStateArrays();
}

function recalculateLongQuestions(suppressUpdate = false) {
  normalizeStateArrays();
  const quiz = appState.quiz;
  const nonQuantTimes = quiz.questionTimes
    .map((time, index) => ({ time, index }))
    .filter(item => item.time > 0 && !isQuantitativeQuestion(moduleQuestions[item.index]));

  if (!nonQuantTimes.length) {
    quiz.longQuestionIndices = [];
    if (!suppressUpdate) {
      updateChallenges();
    }
    return;
  }

  const total = nonQuantTimes.reduce((sum, item) => sum + item.time, 0);
  const average = total / nonQuantTimes.length;
  const threshold = average * 2;
  const longSet = new Set();

  if (threshold > 0) {
    nonQuantTimes.forEach(item => {
      if (item.time > threshold) {
        longSet.add(item.index);
      }
    });
  }

  quiz.longQuestionIndices = Array.from(longSet).sort((a, b) => a - b);
  if (!suppressUpdate) {
    updateChallenges();
  }
}

function finalizeActiveQuestionTime() {
  normalizeStateArrays();
  const quiz = appState.quiz;
  if (!Number.isInteger(quiz.activeQuestionGlobalIndex) || quiz.activeQuestionStart === null) {
    return;
  }
  const elapsed = Date.now() - quiz.activeQuestionStart;
  if (elapsed > 0) {
    quiz.questionTimes[quiz.activeQuestionGlobalIndex] += elapsed;
  }
  quiz.activeQuestionGlobalIndex = null;
  quiz.activeOrderIndex = null;
  quiz.activeQuestionStart = null;
  recalculateLongQuestions(true);
  saveState();
  updateChallenges();
}

function startActiveQuestionTimer(force = false, questionIndexOverride = null, orderIndexOverride = null) {
  const quizSection = document.getElementById('module-quiz');
  const isVisible = quizSection && quizSection.classList.contains('active');
  if (!isVisible) {
    return;
  }

  normalizeStateArrays();
  const quiz = appState.quiz;
  const orderIndex = Number.isInteger(orderIndexOverride) ? orderIndexOverride : quiz.currentQuestionIndex;
  const questionIndex = Number.isInteger(questionIndexOverride) ? questionIndexOverride : quiz.order[orderIndex];
  if (!Number.isInteger(questionIndex)) {
    return;
  }

  quiz.activeOrderIndex = orderIndex;
  quiz.activeQuestionGlobalIndex = questionIndex;
  if (force || quiz.activeQuestionStart === null) {
    quiz.activeQuestionStart = Date.now();
    saveState();
  }
}

function updateIncorrectQuestion(questionIndex, shouldMark) {
  if (!moduleQuestions[questionIndex] || isQuantitativeQuestion(moduleQuestions[questionIndex])) {
    shouldMark = false;
  }
  const set = new Set(appState.quiz.incorrectQuestionIndices || []);
  if (shouldMark) {
    set.add(questionIndex);
  } else {
    set.delete(questionIndex);
  }
  appState.quiz.incorrectQuestionIndices = Array.from(set).sort((a, b) => a - b);
}

function formatDuration(milliseconds) {
  const seconds = Math.round(milliseconds / 1000);
  if (seconds < 60) {
    return `${seconds} sn`;
  }
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return remaining ? `${minutes} dk ${remaining} sn` : `${minutes} dk`;
}

function updateChallenges() {
  const listEl = document.getElementById('challengeList');
  if (!listEl) {
    return;
  }

  normalizeStateArrays();
  const quiz = appState.quiz;
  const longSet = new Set(quiz.longQuestionIndices || []);
  const wrongSet = new Set(quiz.incorrectQuestionIndices || []);
  const combined = Array.from(new Set([...longSet, ...wrongSet]))
    .filter(index => !isQuantitativeQuestion(moduleQuestions[index]))
    .sort((a, b) => a - b);

  if (!combined.length) {
    listEl.innerHTML = '<li>Şu anda listelenecek soru yok.</li>';
    return;
  }

  const items = combined.map(index => {
    const question = moduleQuestions[index];
    if (!question) {
      return null;
    }
    const reasons = [];
    if (wrongSet.has(index)) {
      reasons.push('Yanlış cevap');
    }
    if (longSet.has(index)) {
      reasons.push('Uzun süre');
    }
    const time = quiz.questionTimes[index] || 0;
    const timeText = time > 0 ? ` - Süre: ${formatDuration(time)}` : '';
    return `<li><strong>Soru ${index + 1}</strong> (${reasons.join(', ')})${timeText}</li>`;
  }).filter(Boolean);

  listEl.innerHTML = items.length ? items.join('') : '<li>Şu anda listelenecek soru yok.</li>';
}

function retryChallenges() {
  finalizeActiveQuestionTime();
  ensureOrderIntegrity();
  const quiz = appState.quiz;
  const challengeIndices = Array.from(new Set([...(quiz.longQuestionIndices || []), ...(quiz.incorrectQuestionIndices || [])]))
    .filter(index => !isQuantitativeQuestion(moduleQuestions[index]))
    .sort((a, b) => a - b);

  if (!challengeIndices.length) {
    alert('Şu anda yeniden çözülecek soru bulunmuyor.');
    return;
  }

  quiz.answers = quiz.answers.map((answer, idx) => (challengeIndices.includes(idx) ? null : answer));
  quiz.questionTimes = quiz.questionTimes.map((time, idx) => (challengeIndices.includes(idx) ? 0 : time));
  quiz.longQuestionIndices = quiz.longQuestionIndices.filter(index => !challengeIndices.includes(index));
  quiz.incorrectQuestionIndices = quiz.incorrectQuestionIndices.filter(index => !challengeIndices.includes(index));

  const remaining = quiz.order.filter(index => !challengeIndices.includes(index));
  const newOrder = challengeIndices.concat(remaining);
  const newOptionOrder = quiz.optionOrder.slice();
  challengeIndices.forEach(idx => {
    newOptionOrder[idx] = shuffleArray(moduleQuestions[idx].options.map(option => option.label));
  });

  quiz.order = newOrder;
  quiz.optionOrder = newOptionOrder;
  quiz.currentQuestionIndex = 0;
  quiz.activeQuestionGlobalIndex = null;
  quiz.activeOrderIndex = null;
  quiz.activeQuestionStart = null;
  saveState();

  showSection('module-quiz');
  const quizLink = document.querySelector('.nav-link[data-target="module-quiz"]');
  if (quizLink) {
    setActiveLink(quizLink);
  }
  renderQuestion(0);
  updateQuizNavigation();
  scrollToTop('module-quiz');
  updateChallenges();
}

function scrollToTop(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function loadState() {
  appState = { quiz: defaultQuizState() };
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    normalizeStateArrays();
    return;
  }
  try {
    const parsed = JSON.parse(saved);
    if (parsed && typeof parsed === 'object' && parsed.quiz) {
      const savedQuiz = parsed.quiz;
      if (Array.isArray(savedQuiz.answers)) {
        appState.quiz.answers = savedQuiz.answers.slice();
      }
      if (Array.isArray(savedQuiz.questionTimes)) {
        appState.quiz.questionTimes = savedQuiz.questionTimes.slice();
      }
      if (Array.isArray(savedQuiz.longQuestionIndices)) {
        appState.quiz.longQuestionIndices = savedQuiz.longQuestionIndices.slice();
      }
      if (Array.isArray(savedQuiz.incorrectQuestionIndices)) {
        appState.quiz.incorrectQuestionIndices = savedQuiz.incorrectQuestionIndices.slice();
      }
      appState.quiz.completed = Boolean(savedQuiz.completed);
    }
  } catch (error) {
    console.warn('Kaydedilen durum okunamadı, varsayılan değerlere dönülüyor.', error);
    appState = { quiz: defaultQuizState() };
  }
  normalizeStateArrays();
  recalculateLongQuestions(true);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function setupNavigation() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = link.dataset.target;
      if (!target) {
        return;
      }

      const activeSection = document.querySelector('.section.active');
      const quizWasActive = activeSection && activeSection.id === 'module-quiz';
      if (quizWasActive) {
        finalizeActiveQuestionTime();
      }

      showSection(target);
      setActiveLink(link);

      if (target === 'module-quiz') {
        ensureOrderIntegrity();
        renderQuestion(appState.quiz.currentQuestionIndex);
        updateQuizNavigation();
        startActiveQuestionTimer(true);
      } else if (link.dataset.scroll === 'challenges') {
        scrollToChallenges();
      }
    });
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.toggle('active', section.id === sectionId);
  });
}

function setActiveLink(activeLink) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link === activeLink);
  });
}

function scrollToChallenges() {
  setTimeout(() => {
    const list = document.getElementById('challengeList');
    if (list) {
      list.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 150);
}

function renderModuleOverview() {
  const container = document.getElementById('moduleOverviewContent');
  if (!container) {
    return;
  }
  const overviewHtml = `
      <div class="module-highlight">
          <p><strong>${moduleMeta.title}</strong> modülü, işletmelerde finansal yönetimin temel ilkelerini ve karar mekanizmalarını açıklamayı amaçlar. Sorular; finansman kaynakları, bilanço dengesi, kıymetli evrak uygulamaları ve vergi süreçleri gibi temel konuları kapsar.</p>
      </div>
      <div class="overview-grid">
          <div class="overview-card">
              <h3>Modül İçeriği</h3>
              <ul>
                  <li>Finansal yönetimin amacı ve fonksiyonları</li>
                  <li>Bilanço yapısı ve temel finansal göstergeler</li>
                  <li>Finansal piyasalar ve araçlar</li>
                  <li>Kıymetli evrak türleri ve kullanım alanları</li>
                  <li>Vergi süreçleri ve yasal yükümlülükler</li>
              </ul>
          </div>
          <div class="overview-card">
              <h3>Öğrenme Kazanımları</h3>
              <ul>
                  ${moduleMeta.learningObjectives.map(item => `<li>${item}</li>`).join('')}
              </ul>
          </div>
          <div class="overview-card">
              <h3>Modül Testi</h3>
              <p>Toplam Soru: <strong>${moduleQuestions.length}</strong></p>
              <p>Test formatı: Çoktan seçmeli, tek doğru seçenek</p>
              <p>Hemen geri bildirim ve ilerleme takibi</p>
              <p>Cevaplarınız tarayıcıda saklanır ve istediğiniz zaman devam edebilirsiniz.</p>
          </div>
      </div>
      <p style="margin-top: 18px;">Modülü çalıştıktan sonra testi çözerek bilginizi ölçebilir, doğru sayınızı ve ilerlemenizi <strong>İlerleme</strong> sekmesinden takip edebilirsiniz.</p>
  `;
  container.innerHTML = overviewHtml;
}

function initQuizControls() {
  const prevBtn = document.getElementById('prevQuestionBtn');
  const nextBtn = document.getElementById('nextQuestionBtn');
  const submitBtn = document.getElementById('submitQuizBtn');
  const resetBtn = document.getElementById('resetQuizBtn');
  const resetProgressBtn = document.getElementById('resetProgressBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateQuestion(appState.quiz.currentQuestionIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateQuestion(appState.quiz.currentQuestionIndex + 1));
  }
  if (submitBtn) {
    submitBtn.addEventListener('click', submitQuiz);
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', resetQuiz);
  }
  if (resetProgressBtn) {
    resetProgressBtn.addEventListener('click', resetProgress);
  }
}

function navigateQuestion(newIndex) {
  finalizeActiveQuestionTime();
  ensureOrderIntegrity();
  const total = appState.quiz.order.length;
  if (newIndex < 0 || newIndex >= total) {
    startActiveQuestionTimer();
    return;
  }
  appState.quiz.currentQuestionIndex = newIndex;
  saveState();
  renderQuestion(newIndex);
  updateQuizNavigation();
}

function renderQuestion(index) {
  ensureOrderIntegrity();
  const questionOrder = appState.quiz.order;
  const questionIndex = questionOrder[index];
  if (typeof questionIndex !== 'number') {
    return;
  }
  const questionData = moduleQuestions[questionIndex];
  const container = document.getElementById('quizQuestionContainer');
  const feedbackBox = document.getElementById('quizFeedback');
  if (!questionData || !container || !feedbackBox) {
    return;
  }

  const optionOrder = appState.quiz.optionOrder[questionIndex] || questionData.options.map(option => option.label);
  const answeredLabel = appState.quiz.answers[questionIndex];
  const optionsHtml = optionOrder.map(label => {
    const option = questionData.options.find(opt => opt.label === label);
    if (!option) {
      return '';
    }
    const optionId = `q${questionData.number}_${option.label}`;
    const isChecked = answeredLabel === option.label;
    return `
        <label for="${optionId}" data-label="${option.label}">
            <input type="radio" id="${optionId}" name="question_${questionData.number}" value="${option.label}" ${isChecked ? 'checked' : ''}>
            <span><strong>${option.label})</strong> ${option.text}</span>
        </label>
    `;
  }).join('');

  container.innerHTML = `
      <div class="quiz-question">
          <p><strong>Soru ${index + 1} / ${moduleQuestions.length}:</strong> ${questionData.text}</p>
          <div class="quiz-options">
              ${optionsHtml}
          </div>
      </div>
  `;

  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', event => {
      const selectedLabel = event.target.value;
      handleAnswerSelection(questionIndex, index, selectedLabel);
    });
  });

  // Update feedback visibility based on stored answer
  if (answeredLabel) {
    showAnswerFeedback(questionIndex, answeredLabel);
  } else {
    updateQuizFeedback(null);
  }

  applyOptionStyling(index, questionIndex);
  appState.quiz.activeQuestionGlobalIndex = questionIndex;
  appState.quiz.activeOrderIndex = index;
  appState.quiz.activeQuestionStart = null;
  startActiveQuestionTimer(true, questionIndex, index);
}

function handleAnswerSelection(questionIndex, orderIndex, selectedLabel) {
  appState.quiz.answers[questionIndex] = selectedLabel;
  const questionData = moduleQuestions[questionIndex];
  const isCorrect = questionData && selectedLabel === questionData.correctLabel;
  updateIncorrectQuestion(questionIndex, !isCorrect);
  saveState();
  showAnswerFeedback(questionIndex, selectedLabel);
  applyOptionStyling(orderIndex, questionIndex);
  updateScoreBoard();
  updateChallenges();
}

function showAnswerFeedback(questionIndex, selectedLabel) {
  const questionData = moduleQuestions[questionIndex];
  const feedbackBox = document.getElementById('quizFeedback');
  if (!feedbackBox || !questionData) {
    return;
  }
  const correct = questionData.correctLabel;
  if (selectedLabel === correct) {
    updateQuizFeedback({
      type: 'correct',
      message: 'Doğru! 🎉'
    });
  } else {
    const correctOption = questionData.options.find(opt => opt.label === correct);
    updateQuizFeedback({
      type: 'incorrect',
      message: `Yanlış. Doğru cevap: ${correct}) ${correctOption ? correctOption.text : ''}`
    });
  }
}

function updateQuizFeedback(status) {
  const feedbackBox = document.getElementById('quizFeedback');
  if (!feedbackBox) {
    return;
  }
  feedbackBox.classList.remove('visible', 'correct', 'incorrect');
  if (!status) {
    feedbackBox.textContent = '';
    return;
  }
  feedbackBox.textContent = status.message;
  feedbackBox.classList.add('visible');
  if (status.type === 'correct') {
    feedbackBox.classList.add('correct');
  } else if (status.type === 'incorrect') {
    feedbackBox.classList.add('incorrect');
  }
}

function applyOptionStyling(orderIndex, questionIndexOverride) {
  ensureOrderIntegrity();
  const container = document.getElementById('quizQuestionContainer');
  if (!container) {
    return;
  }
  const questionOrder = appState.quiz.order;
  const questionIndex = typeof questionIndexOverride === 'number' ? questionIndexOverride : questionOrder[orderIndex];
  if (typeof questionIndex !== 'number') {
    return;
  }
  const questionData = moduleQuestions[questionIndex];
  const answeredLabel = appState.quiz.answers[questionIndex];
  const labels = container.querySelectorAll('.quiz-options label');
  labels.forEach(label => {
    label.classList.remove('option-correct', 'option-incorrect');
    const optionLabel = label.dataset.label;
    if (!optionLabel) {
      return;
    }
    if (answeredLabel) {
      if (optionLabel === questionData.correctLabel) {
        label.classList.add('option-correct');
      } else if (optionLabel === answeredLabel) {
        label.classList.add('option-incorrect');
      }
    }
  });
}

function updateQuizNavigation() {
  ensureOrderIntegrity();
  const prevBtn = document.getElementById('prevQuestionBtn');
  const nextBtn = document.getElementById('nextQuestionBtn');
  if (prevBtn) {
    prevBtn.disabled = appState.quiz.currentQuestionIndex === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = appState.quiz.currentQuestionIndex >= appState.quiz.order.length - 1;
  }
}

function submitQuiz() {
  finalizeActiveQuestionTime();
  ensureOrderIntegrity();
  const answeredCount = appState.quiz.answers.filter(answer => answer !== null).length;
  const correctCount = moduleQuestions.reduce((total, question, index) => {
    return total + (appState.quiz.answers[index] === question.correctLabel ? 1 : 0);
  }, 0);
  const totalQuestions = moduleQuestions.length;

  const summaryBox = document.getElementById('quizSummary');
  if (!summaryBox) {
    return;
  }

  summaryBox.innerHTML = `
      <h3>Test Sonucu</h3>
      <p>Doğru yanıt: <strong>${correctCount}</strong> / ${totalQuestions}</p>
      <p>Cevaplanan soru: <strong>${answeredCount}</strong></p>
      <p>Başarı oranı: <strong>${totalQuestions ? ((correctCount / totalQuestions) * 100).toFixed(0) : 0}%</strong></p>
  `;

  if (answeredCount < totalQuestions) {
    updateQuizFeedback({
      type: 'incorrect',
      message: 'Test tamamlandı ancak cevaplanmamış sorular var. Sonucu ilerleme ekranında görebilirsiniz.'
    });
  } else if (correctCount === totalQuestions) {
    updateQuizFeedback({
      type: 'correct',
      message: 'Mükemmel! Tüm soruları doğru cevapladınız.'
    });
  } else {
    updateQuizFeedback({
      type: 'correct',
      message: 'Test tamamlandı. Skorunuz ilerleme ekranına yansıtıldı.'
    });
  }

  appState.quiz.completed = true;
  saveState();
  updateScoreBoard();
  updateChallenges();
}

function resetQuiz() {
  if (!confirm('Modül testini sıfırlamak istediğinizden emin misiniz?')) {
    return;
  }
  finalizeActiveQuestionTime();
  appState.quiz = defaultQuizState();
  saveState();
  renderQuestion(appState.quiz.currentQuestionIndex);
  updateQuizNavigation();
  updateQuizFeedback(null);
  const summaryBox = document.getElementById('quizSummary');
  if (summaryBox) {
    summaryBox.innerHTML = '';
  }
  updateScoreBoard();
  updateChallenges();
}

function resetProgress() {
  if (!confirm('Tüm ilerlemenizi ve kayıtlı cevapları silmek istiyor musunuz?')) {
    return;
  }
  finalizeActiveQuestionTime();
  localStorage.removeItem(STORAGE_KEY);
  appState.quiz = defaultQuizState();
  saveState();
  renderQuestion(0);
  updateQuizNavigation();
  updateQuizFeedback(null);
  const summaryBox = document.getElementById('quizSummary');
  if (summaryBox) {
    summaryBox.innerHTML = '';
  }
  updateScoreBoard();
  updateChallenges();
}

function updateScoreBoard() {
  const totalQuestions = moduleQuestions.length;
  const answeredCount = appState.quiz.answers.filter(answer => answer !== null).length;
  const correctCount = moduleQuestions.reduce((total, question, index) => {
    return total + (appState.quiz.answers[index] === question.correctLabel ? 1 : 0);
  }, 0);

  const accuracy = totalQuestions ? ((correctCount / totalQuestions) * 100).toFixed(0) : 0;

  const moduleCorrectEl = document.getElementById('moduleCorrect');
  const moduleTotalEl = document.getElementById('moduleTotal');
  const moduleAnsweredEl = document.getElementById('moduleAnswered');
  const moduleAccuracyEl = document.getElementById('moduleAccuracy');
  const overallCorrectEl = document.getElementById('overallCorrect');
  const overallTotalEl = document.getElementById('overallTotal');
  const overallAccuracyEl = document.getElementById('overallAccuracy');

  if (moduleCorrectEl) moduleCorrectEl.textContent = correctCount;
  if (moduleTotalEl) moduleTotalEl.textContent = totalQuestions;
  if (moduleAnsweredEl) moduleAnsweredEl.textContent = answeredCount;
  if (moduleAccuracyEl) moduleAccuracyEl.textContent = accuracy;
  if (overallCorrectEl) overallCorrectEl.textContent = correctCount;
  if (overallTotalEl) overallTotalEl.textContent = totalQuestions;
  if (overallAccuracyEl) overallAccuracyEl.textContent = accuracy;
}

function initApp() {
  loadState();
  setupNavigation();
  renderModuleOverview();
  initQuizControls();
  window.addEventListener('beforeunload', finalizeActiveQuestionTime);
  renderQuestion(appState.quiz.currentQuestionIndex);
  updateQuizNavigation();
  updateScoreBoard();
  updateChallenges();
  // Ensure home section is visible on first load
  showSection('home');
}

document.addEventListener('DOMContentLoaded', initApp);

