const moduleQuestions = [
  {
    number: 1,
    text: "\"Muhasebenin bittiği yerde finans başlar\" ifadesi, bu iki disiplin arasındaki ilişkiyi nasıl tanımlar?",
    options: [
      { label: 'A', text: "Finans departmanı, muhasebe kayıtlarının doğruluğunu denetler." },
      { label: 'B', text: "Muhasebe, geleceğe yönelik tahminler yaparken finans geçmiş verileri kaydeder." },
      { label: 'C', text: "Finans, muhasebenin ürettiği geçmişe dönük finansal tabloları analiz ederek geleceğe yönelik kararlar alır." },
      { label: 'D', text: "Muhasebe ve finans departmanları tamamen bağımsız çalışır ve birbirlerinin verilerini kullanmaz." },
      { label: 'E', text: "Finans, sadece nakit akışını yönetirken muhasebe tüm varlıkları yönetir." }
    ],
    correctLabel: 'C'
  },
  {
    number: 2,
    text: "Bir finans yöneticisinin, firmanın hangi tür varlıklara ne miktarda yatırım yapacağına karar vermesi, aşağıdaki temel sorunlardan hangisine çözüm aradığını gösterir?",
    options: [
      { label: 'A', text: "Finanslama Kararı" },
      { label: 'B', text: "Kâr Dağıtım Kararı" },
      { label: 'C', text: "Yatırım Kararı (Sermaye Bütçelemesi)" },
      { label: 'D', text: "Likidite Yönetimi Kararı" },
      { label: 'E', text: "Risk Yönetimi Kararı" }
    ],
    correctLabel: 'C'
  },
  {
    number: 3,
    text: "Bir işletmenin yatırım projelerini hayata geçirebilmek için gerekli fonları öz kaynaklardan mı yoksa yabancı kaynaklardan mı sağlayacağına karar vermesi, finans yöneticisinin hangi temel görevini oluşturur?",
    options: [
      { label: 'A', text: "Finanslama Kararı" },
      { label: 'B', text: "Yatırım Kararı" },
      { label: 'C', text: "Varlık Yönetimi" },
      { label: 'D', text: "Stok Yönetimi" },
      { label: 'E', text: "Büyüme Stratejisi" }
    ],
    correctLabel: 'A'
  },
  {
    number: 4,
    text: "İşletmelerin en geleneksel amacı olarak kabul edilen, ancak modern finansta risk ve paranın zaman değeri gibi unsurları göz ardı ettiği için tek başına yeterli görülmeyen amaç hangisidir?",
    options: [
      { label: 'A', text: "İşletme Değerini Maksimize Etmek" },
      { label: 'B', text: "Piyasa Payını Artırmak" },
      { label: 'C', text: "Toplum Refahını Artırmak" },
      { label: 'D', text: "Kâr Maksimizasyonu" },
      { label: 'E', text: "İstihdam Yaratmak" }
    ],
    correctLabel: 'D'
  },
  {
    number: 5,
    text: "Modern finans anlayışına göre, bir işletmenin kâr, itibar, risk ve sürdürülebilirlik gibi tüm maddi ve manevi unsurlarını kapsayan nihai ve en kapsamlı amacı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Satış Hacmini Büyütmek" },
      { label: 'B', text: "İşletmenin Değerini Maksimize Etmek" },
      { label: 'C', text: "Pay Başına Kazancı Maksimize Etmek" },
      { label: 'D', text: "Üretim Maliyetlerini Minimize Etmek" },
      { label: 'E', text: "İşletmenin Sürekliliğini Sağlamak" }
    ],
    correctLabel: 'B'
  },
  {
    number: 6,
    text: "Bir işletmenin üretim ve satış hacmini artırması, genellikle aşağıdaki hedeflerden hangisine ulaşmak için bir ön koşul olarak kabul edilir?",
    options: [
      { label: 'A', text: "İşletmenin huzurunu artırmak" },
      { label: 'B', text: "İstihdam yaratmak" },
      { label: 'C', text: "İşletmenin piyasa payını artırmak" },
      { label: 'D', text: "Mal ve hizmet üretmek" },
      { label: 'E', text: "Toplumsal refahı artırmak" }
    ],
    correctLabel: 'C'
  },
  {
    number: 7,
    text: "Aşağıdakilerden hangisi, yüksek enflasyonun işletme finansmanı üzerindeki olumsuz etkilerinden biri değildir?",
    options: [
      { label: 'A', text: "Faiz oranlarının yükselmesi" },
      { label: 'B', text: "Yatırım planlamasında ihtiyatlı davranılması" },
      { label: 'C', text: "Geleceğe yönelik finansal planlama yapmanın zorlaşması" },
      { label: 'D', text: "Paranın satın alma gücünün artması" },
      { label: 'E', text: "Sermaye piyasası araçlarının reel değerinin düşmesi" }
    ],
    correctLabel: 'D'
  },
  {
    number: 8,
    text: "Paranın \"kira bedeli\" veya \"kullanımı erteleme bedeli\" olarak tanımlanan ve fon arzı ile fon talebini eşitleyen fiyata ne ad verilir?",
    options: [
      { label: 'A', text: "Faiz" },
      { label: 'B', text: "Enflasyon" },
      { label: 'C', text: "Kâr" },
      { label: 'D', text: "Anüite" },
      { label: 'E', text: "Vade" }
    ],
    correctLabel: 'A'
  },
  {
    number: 9,
    text: "Basit faiz ile bileşik faiz arasındaki en temel fark aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Basit faiz sadece bankalar tarafından, bileşik faiz ise işletmeler tarafından kullanılır." },
      { label: 'B', text: "Basit faiz yıllık, bileşik faiz ise aylık olarak hesaplanır." },
      { label: 'C', text: "Bileşik faizde kazanılan faiz de anaparaya eklenerek faiz kazanırken, basit faizde faiz sadece başlangıç anaparası üzerinden hesaplanır." },
      { label: 'D', text: "Basit faiz sadece kısa vadeli, bileşik faiz ise sadece uzun vadeli borçlanmalarda kullanılır." },
      { label: 'E', text: "Bileşik faiz her zaman basit faizden daha düşük bir getiri sağlar." }
    ],
    correctLabel: 'C'
  },
  {
    number: 10,
    text: "Genellikle organize olmayan, tarafların doğrudan anlaştığı tezgah üstü piyasalarda kullanılan ve faize faiz yürütülmeyen faiz türü hangisidir?",
    options: [
      { label: 'A', text: "Bileşik Faiz" },
      { label: 'B', text: "Nominal Faiz" },
      { label: 'C', text: "Reel Faiz" },
      { label: 'D', text: "Basit Faiz" },
      { label: 'E', text: "Efektif Faiz" }
    ],
    correctLabel: 'D'
  },
  {
    number: 11,
    text: "Belirli bir süre boyunca, eşit zaman aralıklarında ve eşit miktarlarda gerçekleşen ödeme veya tahsilat serilerine ne ad verilir?",
    options: [
      { label: 'A', text: "Faiz" },
      { label: 'B', text: "Anüite" },
      { label: 'C', text: "Vade" },
      { label: 'D', text: "Bilanço" },
      { label: 'E', text: "Amortisman" }
    ],
    correctLabel: 'B'
  },
  {
    number: 12,
    text: "Ev kirası veya sigorta primleri gibi, ödemelerin her dönemin başında yapıldığı anüite türü aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Normal (Sıradan) Anüite" },
      { label: 'B', text: "Gecikmeli Anüite" },
      { label: 'C', text: "Peşin Anüite (Annuity Due)" },
      { label: 'D', text: "Sonsuz Anüite (Perpetuity)" },
      { label: 'E', text: "Basit Anüite" }
    ],
    correctLabel: 'C'
  },
  {
    number: 13,
    text: "Banka kredisi taksitleri gibi, ödemelerin her dönemin sonunda yapıldığı anüite türüne ne ad verilir?",
    options: [
      { label: 'A', text: "Normal (Sıradan) Anüite" },
      { label: 'B', text: "Peşin Anüite" },
      { label: 'C', text: "Vadeli Anüite" },
      { label: 'D', text: "Artan Anüite" },
      { label: 'E', text: "Azalan Anüite" }
    ],
    correctLabel: 'A'
  },
  {
    number: 14,
    text: "Bileşik faiz formülünde GD = BD x (1 + i)^n ifadesinde yer alan (1 + i)^n terimi neyi temsil eder?",
    options: [
      { label: 'A', text: "Dönemlik faiz tutarını" },
      { label: 'B', text: "Gelecek Değer Faktörünü (GDF)" },
      { label: 'C', text: "Anüite Değer Faktörünü" },
      { label: 'D', text: "Bugünkü Değer Faktörünü" },
      { label: 'E', text: "Toplam faiz oranını" }
    ],
    correctLabel: 'B'
  },
  {
    number: 15,
    text: "Bileşik faiz hesaplamasında, bir yıldaki faiz ödeme sıklığını ifade eden değişken hangisidir?",
    options: [
      { label: 'A', text: "n" },
      { label: 'B', text: "i" },
      { label: 'C', text: "BD" },
      { label: 'D', text: "GD" },
      { label: 'E', text: "m" }
    ],
    correctLabel: 'E'
  },
  {
    number: 16,
    text: "Yıllık %20 basit faiz oranıyla bankaya yatırılan 5.000 TL'nin 1 yıl sonunda getireceği faiz tutarı ne kadardır?",
    options: [
      { label: 'A', text: "500 TL" },
      { label: 'B', text: "750 TL" },
      { label: 'C', text: "1.000 TL" },
      { label: 'D', text: "1.200 TL" },
      { label: 'E', text: "1.500 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 17,
    text: "Yıllık %30 basit faiz oranı üzerinden 2.000 TL, 4 aylığına ödünç verilirse bu sürenin sonunda elde edilecek faiz tutarı ne kadardır?",
    options: [
      { label: 'A', text: "600 TL" },
      { label: 'B', text: "300 TL" },
      { label: 'C', text: "250 TL" },
      { label: 'D', text: "200 TL" },
      { label: 'E', text: "150 TL" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 18,
    text: "Yıllık %25 basit faizle bankaya yatırılan 10.000 TL'nin 72 gün sonraki gelecek değeri (anapara + faiz) ne kadar olur? (1 ay = 30 gün, 1 yıl = 360 gün)",
    options: [
      { label: 'A', text: "10.250 TL" },
      { label: 'B', text: "10.400 TL" },
      { label: 'C', text: "10.500 TL" },
      { label: 'D', text: "10.600 TL" },
      { label: 'E', text: "10.720 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 19,
    text: "Bankaya %10 yıllık bileşik faiz oranıyla yatırılan 5.000 TL, 3 yıl sonra hangi değere ulaşır?",
    options: [
      { label: 'A', text: "6.000 TL" },
      { label: 'B', text: "6.500 TL" },
      { label: 'C', text: "6.605 TL" },
      { label: 'D', text: "6.655 TL" },
      { label: 'E', text: "6.750 TL" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 20,
    text: "Bir yatırımcı 10.000 TL'sini yıllık %20 faiz oranıyla bir banka hesabına yatırmıştır. Faiz ödemeleri 6 ayda bir anaparaya eklendiğine göre, 1 yılın sonunda hesapta biriken toplam para ne kadar olur?",
    options: [
      { label: 'A', text: "12.000 TL" },
      { label: 'B', text: "12.100 TL" },
      { label: 'C', text: "12.200 TL" },
      { label: 'D', text: "12.400 TL" },
      { label: 'E', text: "14.000 TL" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 21,
    text: "4.000 TL anapara, yıllık %12 bileşik faiz oranı ve 3 ayda bir faizlendirme ile bir hesaba yatırılırsa, 2 yılın sonundaki gelecek değeri ne kadar olur?",
    options: [
      { label: 'A', text: "4.800,00 TL" },
      { label: 'B', text: "5.040,25 TL" },
      { label: 'C', text: "5.070,50 TL" },
      { label: 'D', text: "5.067,08 TL" },
      { label: 'E', text: "5.120,00 TL" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 22,
    text: "3 yıl boyunca her yılın sonunda bir hesaba 1.000 TL yatırılmaktadır. Hesaba uygulanan yıllık faiz oranı %10 ise, 3. yılın sonunda hesapta birikecek toplam tutar ne kadardır?",
    options: [
      { label: 'A', text: "3.000 TL" },
      { label: 'B', text: "3.100 TL" },
      { label: 'C', text: "3.210 TL" },
      { label: 'D', text: "3.310 TL" },
      { label: 'E', text: "3.641 TL" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 23,
    text: "Bir kişi, 5 yıl boyunca her yılın sonunda Bireysel Emeklilik Sistemi'ne 2.000 TL yatıracaktır. Sistemin yıllık getiri oranı %8 ise, 5. yılın sonunda sistemde biriken para ne kadar olur? ((1.08)^5 ~= 1.469)",
    options: [
      { label: 'A', text: "10.000 TL" },
      { label: 'B', text: "11.250 TL" },
      { label: 'C', text: "11.590 TL" },
      { label: 'D', text: "11.730 TL" },
      { label: 'E', text: "12.000 TL" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 24,
    text: "Bir banka hesabına 4 yıl boyunca her yılın sonunda 5.000 TL yatırılmaktadır. Hesabın yıllık faiz oranı %12 ise 4. yılın sonunda hesapta biriken toplam miktar ne kadardır? ((1.12)^4 ~= 1.5735)",
    options: [
      { label: 'A', text: "23.220 TL" },
      { label: 'B', text: "23.550 TL" },
      { label: 'C', text: "23.895 TL" },
      { label: 'D', text: "24.120 TL" },
      { label: 'E', text: "24.500 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 25,
    text: "Bir bankaya yıllık %40 basit faiz oranıyla yatırılan anapara, 90 günün sonunda 800 TL faiz geliri getirdiğine göre, yatırılan anapara ne kadardır? (1 yıl = 360 gün)",
    options: [
      { label: 'A', text: "6.000 TL" },
      { label: 'B', text: "7.500 TL" },
      { label: 'C', text: "8.000 TL" },
      { label: 'D', text: "9.000 TL" },
      { label: 'E', text: "10.000 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 26,
    text: "Yıllık %15 bileşik faiz ile bankaya yatırılan 20.000 TL, 2 yılın sonunda toplam ne kadar faiz geliri getirir?",
    options: [
      { label: 'A', text: "3.000 TL" },
      { label: 'B', text: "6.000 TL" },
      { label: 'C', text: "6.450 TL" },
      { label: 'D', text: "6.750 TL" },
      { label: 'E', text: "7.000 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 27,
    text: "Bir yatırımcı, 10 yıl sonra 100.000 TL'ye sahip olmak için bugünden tek seferde bir para yatırmak istiyor. Yıllık bileşik faiz oranı %10 ise, yatırımcının bugün yatırması gereken anapara yaklaşık ne kadardır? ((1.10)^10 ~= 2.594)",
    options: [
      { label: 'A', text: "25.940 TL" },
      { label: 'B', text: "35.000 TL" },
      { label: 'C', text: "38.550 TL" },
      { label: 'D', text: "40.000 TL" },
      { label: 'E', text: "50.000 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 28,
    text: "Emekliliği için para biriktiren bir kişi, 2 yıl boyunca her yılın sonunda hesabına 10.000 TL yatırmıştır. Yıllık faiz oranı %20 olduğuna göre, 2. yılın sonunda bu kişinin hesabında biriken toplam para ne kadardır?",
    options: [
      { label: 'A', text: "20.000 TL" },
      { label: 'B', text: "21.000 TL" },
      { label: 'C', text: "22.000 TL" },
      { label: 'D', text: "24.000 TL" },
      { label: 'E', text: "24.200 TL" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 29,
    text: "8.000 TL anapara, yıllık %18 basit faiz oranıyla 5 aylığına bankaya yatırılırsa, 5 ayın sonunda elde edilecek toplam tutar (gelecek değer) ne kadardır?",
    options: [
      { label: 'A', text: "8.500 TL" },
      { label: 'B', text: "8.600 TL" },
      { label: 'C', text: "8.720 TL" },
      { label: 'D', text: "8.800 TL" },
      { label: 'E', text: "9.000 TL" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 30,
    text: "Bileşik faizin basit faizden daha yüksek getiri sağlamasının temel nedeni, zamanla yarattığı \"kartopu etkisi\"dir. Bu etki, paranın hangi şekilde büyümesiyle açıklanır?",
    options: [
      { label: 'A', text: "Doğrusal (Lineer)" },
      { label: 'B', text: "Azalarak" },
      { label: 'C', text: "Sabit kalarak" },
      { label: 'D', text: "Üslü (Eksponansiyel)" },
      { label: 'E', text: "Periyodik" }
    ],
    correctLabel: 'D'
  },
  {
    number: 31,
    text: "Basit faiz formülünde GD = BD × (1 + i × t) ifadesinde parantezlerin doğru kullanılmasının temel nedeni aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Yıllık faiz oranının otomatik olarak bileşik faize dönüşmesini sağlamak" },
      { label: 'B', text: "Faiz oranı ile sürenin çarpımını anaparaya eklemeden önce birlikte hesaplamak" },
      { label: 'C', text: "Anaparayı faiz oranıyla toplamak yerine çıkarmak" },
      { label: 'D', text: "Faiz tutarını döneme bölmek" },
      { label: 'E', text: "Faiz oranını yüzde yerine ondalık forma çevirmek" }
    ],
    correctLabel: 'B'
  },
  {
    number: 32,
    text: "Aşağıdakilerden hangisi basit faizin temel varsayımını doğru açıklar?",
    options: [
      { label: 'A', text: "Faiz sadece anapara üzerinden ve doğrusal şekilde hesaplanır." },
      { label: 'B', text: "Faiz her dönemde anaparaya eklenerek yeniden faiz kazandırır." },
      { label: 'C', text: "Faiz oranı dönem sayısıyla üssel olarak artar." },
      { label: 'D', text: "Anapara her dönemde değişen oranlarla güncellenir." },
      { label: 'E', text: "Faiz hesaplamasında süre faktörü dikkate alınmaz." }
    ],
    correctLabel: 'A'
  },
  {
    number: 33,
    text: "Bileşik faiz formülünde (1 + i/m)^(m × t) ifadesi aşağıdakilerin hangisini temsil eder?",
    options: [
      { label: 'A', text: "Faiz oranının her dönem düşmesini" },
      { label: 'B', text: "Faiz oranı ile sürenin sadece çarpılmasını" },
      { label: 'C', text: "Faizin her dönem anaparaya eklenerek yeniden faiz kazandırmasını" },
      { label: 'D', text: "Anaparanın her dönem sabit kalmasını" },
      { label: 'E', text: "Faiz oranının dönem sayısına bölünmeden kullanılmasını" }
    ],
    correctLabel: 'C'
  },
  {
    number: 34,
    text: "Bileşik faiz hesaplamasında dönemsel bileşikleşme sıklığının (örneğin üç ayda bir yerine ayda bir) artırılmasının temel etkisi nedir?",
    options: [
      { label: 'A', text: "Faiz oranını azaltır ve toplam getiriyi düşürür." },
      { label: 'B', text: "Faiz oranını değiştirmeden, daha sık faize faiz işleyerek toplam getiriyi artırır." },
      { label: 'C', text: "Anaparayı sabit tutar ve getiriyi değiştirmez." },
      { label: 'D', text: "Faiz hesaplamasını basit faize dönüştürür." },
      { label: 'E', text: "Faiz oranını nominalden reale çevirir." }
    ],
    correctLabel: 'B'
  },
  {
    number: 35,
    text: "Gelecek değer kavramı hangi sorunun yanıtını verir?",
    options: [
      { label: 'A', text: "Belirli bir gelecekteki tutarın bugün kaç para ettiğini" },
      { label: 'B', text: "Bugün elde edilen bir tutarın gelecekte faizle ne kadar büyüyeceğini" },
      { label: 'C', text: "Faiz oranının enflasyondan arındırılmış değerini" },
      { label: 'D', text: "Bir yatırımın geçmişteki getirisini" },
      { label: 'E', text: "Faiz oranının nominal değerini" }
    ],
    correctLabel: 'B'
  },
  {
    number: 36,
    text: "Gelecek değer hesabında (1 + i/m)^(m × t) ifadesindeki parantez ve üs kullanımına dikkat edilmemesi hangi hataya yol açabilir?",
    options: [
      { label: 'A', text: "Faiz oranının negatif çıkmasına" },
      { label: 'B', text: "Faiz kazancının zamanla doğrusal artmasına" },
      { label: 'C', text: "Faize faiz etkisinin göz ardı edilmesine ve yanlış sonuca ulaşılmasına" },
      { label: 'D', text: "Anaparanın sıfıra düşmesine" },
      { label: 'E', text: "İskonto oranının yükselmesine" }
    ],
    correctLabel: 'C'
  },
  {
    number: 37,
    text: "Bir işletmenin bilançosunun Aktif tarafı onun ekonomik yapısını gösterirken, Pasif tarafı neyi ifade eder?",
    options: [
      { label: 'A', text: "İşletmenin kârlılığını" },
      { label: 'B', text: "İşletmenin finansal yapısını (gücünü)" },
      { label: 'C', text: "İşletmenin satış hacmini" },
      { label: 'D', text: "İşletmenin pazar payını" },
      { label: 'E', text: "İşletmenin üretim kapasitesini" }
    ],
    correctLabel: 'B'
  }
];

const moduleMeta = {
  id: 'paranin-zaman-degeri',
  title: 'Paranın Zaman Değeri',
  description: 'Basit ve bileşik faiz, bugünkü değer, gelecek değer ve anüite kavramlarını bütüncül olarak ele alan modül.',
  focusAreas: [
    'Basit ve bileşik faiz arasındaki farklar',
    'Bugünkü değer ve gelecek değer hesaplamaları',
    'Anüite türleri ve nakit akışı serileri'
  ],
  learningObjectives: [
    'Basit ve bileşik faiz kavramlarını açıklamak',
    'Bugünkü ve gelecek değer hesaplamalarını uygulamak',
    'Anüite türlerini ayırt etmek ve değerlerini hesaplamak',
    'Faiz oranı, dönem sayısı ve bileşikleşme sıklığı arasındaki ilişkiyi analiz etmek',
    'Paranın zaman değeri kavramını finansal karar verme süreçlerine uyarlamak'
  ],
  additionalNotes: 'Modül hem sözel hem de sayısal sorular içerir; sayısal sorular analiz listesine dahil edilmez.',
  testDetails: {
    questionCount: moduleQuestions.length,
    format: 'Sözel ve sayısal çoktan seçmeli sorular',
    storageHint: 'Cevaplarınız tarayıcıda saklanır ve istediğiniz zaman devam edebilirsiniz.',
    extra: [
      'Sayısal sorular için süre analizleri listelenmez.'
    ]
  }
};

const STORAGE_KEY = 'paraninZamanDegeriModuleState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};

