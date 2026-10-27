---
ders: Bilişimde Teknolojik Araştırma Yöntemleri
hafta: 6
tarih: 2026-10-20
bolum: Yönetim Bilişim Sistemleri (YBS)
konu: "Bilişimde Araştırma Yöntemleri: Araştırma Deseni Mimarisi, Olasılık Dağılımları, Örnekleme Kuramı ve Matematiksel Boyutlandırma"
created: 2026-10-20
draft: false
---
# Kavramsal Çerçeve ve Açıklamalar

## Evren ve Çalışma Evreni (Accessible Population)
Evren (popülasyon), bir araştırmanın sonuçlarının genellenmek istendiği, tanımlanmış ortak özelliklere sahip birimlerin bütünüdür. Bkz. [[Evren|evren]].

**Çalışma evreni** ise **kuramsal olarak hedeflenen evrenin; coğrafî, zamansal, ekonomik veya bürokratik engeller dolayısıyla fiilen ulaşılabilen alt kümesi**ni ihtiva eder. Araştırmacının hedefi Türkiye'deki tüm üniversite öğrencileri olduğunda kuramsal evren milyonlarca bireyi kapsar; fakat araştırmacının erişim izni alabildiği ve sahaya inebildiği üniversiteler çalışma evrenini meydana getirir.

## Örneklem ve Örnekleme Birimi (Sampling Unit)
Örneklem, çalışma evreni içerisinden belirli kurallar dâhilinde seçilen ve üzerinde fiilen veri toplama işlemi yürütülen temsil yeteneğine sahip sınırlı gruptur. 

Örnekleme birimi ise, örnekleme sürecinde tekil olarak seçilen ve veri kaynağını oluşturan ögedir (birey, hanehalkı, işletme, yazılım deposu veya bir organizasyonel departman).

## Örneklem Hatası ve Temsil Yeteneği
Örneklem hatası, örneklem üzerinden hesaplanan istatistiksek değerler ile ana kütlenin gerçek parametreleri arasında kaçınılmaz olarak meydana gelen sapma payıdır. 

Temsil yeteneği, seçilen grubun ana kütlenin demografik, davranışsal ve yapısal niteliklerini yansıtma gücüdür. Bir seçim araştırmasında ana kitlede oy oranı binde beş olan küçük bir siyasi hareketin, hacmi dar bir örneklemde tamamen kaybolması "özelliklerin kaybolması" biçimindeki örnekleme hatasına somut bir örnek oluşturur. Hata payı, örneklem hacmi büyüdükçe küçülme eğilimi gösterir.

## Örneklem Yanlılığı ve Yan Tutma (Sampling Bias)
Örneklem anlılığı, araştırmacının tasarım hataları ya da kasıtlı müdahaleleri sonucunda evrendeki belirli birimlerin örnekleme girme şansının sistematik olarak bozulması durumudur. Örneklem hacmini büyütmek bu hatayı ortadan kaldırmaz. Yan tutma iki temel kanaldan yürür:

1. **Sonuç Manipülasyonu**: Elde edilen verilerin bilerek tahrif edilmesi.
2. **Örneklem Manipülasyonu**: İstenen sonucun elde edilmesini garanti altınca alacak yanlı bir örneklem grubunun sahaya sürülmesi.

Diyabet araştırmalarında şekerli ve gazlı içecek üreticileriyle finansal bağları bulunan araştırmacıların tüketim ile hastalık arasındaki bağı raporlamaktan kaçınması veya bir siyasi partiden kaynak sağlayan anket şirketlerinin örneklemi yalnızca o partinin güçlü olduğu bölgelerden derlemesi kurumsal örneklem yanlılığı yaratır.

## Normal Dağılım ve Merkezî Limit Dinamiği
Normal dağılım, evrendeki gözlemlerin aritmetik ortalama etrafında kümelendiği, ortalamadan uzaklaştıkça gözlem sıklığının simetrik olarak azaldığı çan eğrisi biçimindeki olasılık dağılımıdır. Boy uzunlukları, sınav başarı puanları ve zekâ düzeyleri gibi beşerî değişkenler doğası gereği normal dağılım sergiler. Merkezî Limit Teoremi uyarınca, başlangıçta tekil zar atışı gibi her sonucun eşit şansa sahip olduğu tekdüze (uniform) dağılımlar dahi, yinelenen örnekleme denemeleri ve hacim artışı sayesinde normal dağılıma yakınsar.

## Olasılıklı Örnekleme Yöntemleri
Evrendeki her birimin örnekleme seçilme olasılığının bilindiği, sıfırdan büyük olduğu ve seçimin araştırmacının inisiyatifinden bağımsız, tamamen rassal mekanizmalarla gerçekleştirildiği yöntemler bütünüdür

- **Basit Rassal Örnekleme**: Tüm evren birimlerinin eksiksiz bir listesini (örnekleme çerçevesi) gerektirir. Her birim eşit seçilme şansına sahiptir. Kura çekimi veya rastgele sayılar tablosuyla yürütülür.
- **Sistematik Örnekleme**: Birimlerin listelendiği durumlarda, toplam birim sayısının ($N$) hedeflenen örneklem büyüklüğüne ($n$) bölünmesiyle bulunan $k= \frac{N}{n}$ atlama aralığına göre seçim yapılır. İlk birim $1$ ile $k$ arasından rastgele çekilir, ardından her $k$'inci birim listeye eklenir. Numaralandırılmış hasta kayıtları, vergi mükellef listeleri veya üretim hattından çıkan nesnelerin incelenmesinde mükerrer seçimi engelleyen bir yapı kurar.
- **[[Tabakalı Örnekleme]]**: Evren; yaş, cinsiyet, gelir veya eğitim düzeyi gibi araştırma çıktısını doğrudan etkileyen kritik değişkenler temelinde alt tabakalara ayrılır. Her tabakadan, o tabakanın evren içindeki ağırlığıyla doğru orantılı olacak biçimde rassal seçim yapılır. YBS bölümündeki 2.000 öğrencinin %35'i birinci sınıf, yüzde 15'i dördüncü sınıf ise; seçilecek 385 kişilik örneklemin de tam yüzde 35'i birinci sınıflardan, yüzde 15'i dördüncü sınıflardan basit rassal yolla belirlenir. Bu model literatürde "*alanlara göre örnekleme*" adıyla da anılır.
- **Küme Örnekleme**: Evren birimlerinin tekil listesine ulaşılamadığı, ancak birimlerin doğal gruplar (mahalleler, okullar, sınıflar, şubeler) hâlinde toplandığı geniş coğrafî alanlarda uygulanır. Birimler tek tek seçilmez. Önce doğal kümeler rassal olarak seçilir, ardından seçilen kümelerin içindeki tüm birimler araştırmaya dâhil edilir. Türkiye genelindeki üniversite öğrencilerini incelerken 200 üniversite arasından rassal olarak belirlenen 30 üniversitenin seçilmesi küme örnekleme mantığıyla yürür.
- **İkili ve Çok Aşamalı Örnekleme**: Geniş evrenlerde örnekleme sürecinin kademeli olarak yürütülmesidir. İlk aşamada geniş bir örneklem çekilir, ikinci aşamada bu örneklem içerisinden belirli tabakalara veya rassal yöntemlere göre daha rafine ikinci bir alt örneklem türetilir. Otuz milyonluk seçmen kitlesinden önce coğrafî kümelere göre birincil örneklem oluşturulması, ardından bu kümenin içerisinden meslekî veya demografik niteliklere göre ikincil tabakalı seçim yapılması süreci buna örnek teşkil eder.


## Olasılıksız Örnekleme Yöntemleri
Örnekleme dâhil edilecek birimlerin olasılık ve şans kurallarına göre <u>değil</u> de, araştırmacının erişim olanaklarına, öznel değerlendirmelerine, bütçe kısıtları ve araştırma amacı doğrultusunda seçildiği yöntemlerdir. İstatistiksel genelleme kabiliyeti taşımaz.

- **Monografik Örnekleme**: Çok küçük bir birimler topluluğunun veya tekil bir birimin derinlemesine incelenerek tüm evren hakkında çıkarım yapılmasıdır. Geçmiş otuz yıllık seçim verilerinde oy dağılımı Türkiye genel seçim sonuçlarıyla birebir örtüşen tek bir ilçenin tüm ülkeyi tahmin etmek üzere incelenmesi veya soyu tükenmekte olan dağ keçileri üzerine çalışan bir biyoloğun ulaştığı tek bir hayvandan aldığı doku örneğiyle türün genelini tanımlaması monografik örnekleme modelidir.
- **Kolayda ve Hazırda Örnekleme**: Araştırmacının en az maliyetle, en hızlı ve zahmetsizce erişebildiği birimlerden veri toplamasıdır. Bir öğretim üyesinin bilimsel araştırmasını amfide ders verdiği kendi öğrencilerine anket uygulayarak yürütmesi veya bir işletmenin kasasına "*Bizi Değerlendirin*" formu bırakarak gelen müşterilerin doldurmasını beklemesi bu sınıftadır.
- **Yargısal ve Kastî Örnekleme**: Araştırmacının mesleki deneyimi, uzmanlığı ve kanaati doğrultusunda, araştırma sorusuna en yetkin cevabı vereceğine inandığı belirli kişi ya da birimleri doğrudan seçmesidir. Bir klinik ğsikoloğun veya hekimin, belirli semptomları gösteren spesifik hastaları bilinçli tercihle araştırma kapsamına alması bu yöntemin tipik yansımasıdır.
- **Kota Örnekleme**: [[Tabakalı Örnekleme|Tabakalı örneklemenin]] rassal olmayan ikizidir. Evrendeki alt grupların (cinsiyet, eğitim, yaş) oranları önceden tespit edilir. Örneklem havuzunda bu oranlar (örneğin %50 lise, %10 üniversite mezunu) aynen muhafaza edilir; **ancak bu kotaları dolduracak kişilerin kim olacağına araştırmacı doğrudan kendi öznel tercihiyle karar verir.**
- **Kartopu Örnekleme**: Evren sınırlarının bilinemediği, kayıtlı bir çerçevenin bulunmadığı ve birimlere erişimin son derece güçlü olduğu durumlarda kullanılır. Araştırmacı ilk ulaştığı tekil kaynaktan veri toplar ve o kaynağın referansıyla aynı niteliğe sahip ikinci kaynağa erişir; örneklem bir kartopu gibi yuvarlandıkça genişler. Siber güvenlik alanında çalışan uzmanların veya yer altı yazılım geliştiricilerinin araştırılmasında referans zinciri kurularak ilerlenir.