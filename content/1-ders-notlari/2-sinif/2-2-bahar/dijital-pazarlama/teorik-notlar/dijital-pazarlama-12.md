---
title: Dijital Pazarlama - 12
tags:
  - akademi/dersler/dijital-pazarlama
created: 2026-05-14
draft: false
---
## 1. Bütüncül Kanal Yaklaşımı (Omni-Channel)
**[[perakendecilik|Perakendeciliğin]]** evrimi, işletmelerin kâr maksimizasyonu ve sürdürülebilirlik arayışının bir sonucudur. En kısa zamanda, en doğru biçimde, en az maliyetle müşteri sadakati oluşturmak amaçtır.

- **Fijital Kavramı (Phygital)**: Fiziksel ve sanal ortamın birleştirilmesidir. Sözgelimi, fiziksel mağazadaki otomatik ödeme kioskları.
- **Omni-channel**: Tüm müşteri temas noktalarını birleştiren, kesintisiz (senkronize) deneyim sunan modeldir. Bilgisayarda sepete attığımız ürünü telefonda görebilmemiz ve fiziksel mağazada teslim alabilmemizdir. **Farklı lokasyonlardaki satıcıları tek platformda tüketiciyle buluşturmaktır**.

### Kanal Geçişlerindeki İşlevler (Entegrasyon Noktaları)

- **Ürün Bilgisi ve Seçimi**: Mağazada yüz yüze, çevrim içi ortamda dijital sepet ile. Veriler senkronize olmalı (Stokta yoksa 'web'de var diyebilmek).
- **Ödeme ve Tanıtım**: Nakit/Kredi kartı entegrasyonu. Basılı materyallere ek dijital afişler.
- **Veri Güvenliği**: Mağazaya girer girmez telefon numaramızın istenmesi (Kişisel veri tabanı yönetimi).
- **Müşteri İlişkileri**: Fizikselde doğrudan temas (direct touch), dijitalde dijital iletişim.

>[!NOTE] Stratejik Temeller
>Bu sistemin ayakta kalması **Müşteri Güveni** ve **Harmonizasyon**'a (İç içe çalışan uyum) bağlıdır. Lojistik ve stok yönetimi (ERP programları) çökerse sistem de çöker.


---

### Kanal Gezinme Pratikleri
Tüketici davranışlarını iki zıp kutupta inceliyoruz. İkisi de tüketici özgüveni ve kişisel özellikleriyle bağlantılıdır.

1. **Showrooming (Mağazada İncele, İnternetten Al)**: Dokunma ve deneyimleme ihtiyacını fizikselde giderip, fiyatt avantajını dijitalde yakalamak (Dışa dönük, özgüvenli tüketiciler yapar. Aceleciler ise FOMO yüzünden anında alırlar).
2. **Webrooming (İnternetten İncele, Mağazadan Al)**: Özellikle teknolojik, pahalı ve riskli ürünlerde (örn: ikinci el araba). Bilgi toplama dijitalde, güven ihtiyacı ve satın alma fizikselde gerçekleşir.
3. **In-Store Marketing (Mağaza İçi Pazarlama)**: Mağazada ürünü incelerken, kiosk/tablet üzerinden dijital sipariş vermek. Mağazaya depolama alanından tasarruf sağlar.
4. **Click and Collect (Tıkla ve Topla)**: İnternetten sipariş et, fiziksel mağazadan teslim al. Teslimat maliyetini düşürür ve hızı artırır.


---

### Kanal Evrimi

```mermaid
graph LR
    A[Tek Kanallı] -->|Sınırlı Erişim| B[Çoklu Kanallı]
    B -->|Uyumsuzluk Riski| C[Çapraz Kanallı]
    C -->|Kısmi Entegrasyon| D[Bütüncül / Omni-channel]
    D -->|Kusursuz Senkronizasyon| E(Tüketici Sadakati)
    
    style D fill:#f9f,stroke:#333,stroke-width:4px
```

- **Tek Kanallı**: Bakkallar, küçük marketler. İletişim çağında yetersiz.
- **Çok Kanallı**: Web sitesi + fiziksel mağaza + sosyal medya.
- **Çapraz Kanallı**: İki kanalın kısmen entegre olması.
- **Bütüncül (Omni)**: Hepsinin tek bir veri havuzunda senkronize olması.


---

## 2. Yaygın Pazarlama (Ubiquitous Marketing)
Zaman ve mekân engelinin tamamen aşıldığı evredir. Mark Weiser'in "*bilgisayarların görünmez bir şekilde günlük yaşama entegre edilmesi*" tanımına dayanır.

- **İki Temel Özelliği**:
	1. **Gömülü Olma (Embeddedness)**: Nesnelerin sensör ve RFID ile akıllanması (IoT).
	2. **Taşınabilirlik (Mobility)**: Nesnelerin kullanıcıyla hareket etmesi.
- **Kişiselleştirme (Customization)** ön plandadır. 
- **İlişki Dönüşümü**: Dikey (ast-üst, formal) ilişkiler yerini **Yatay (Dijital, informal, serbest)** ilişkilere bırakmıştır. Satın alma müdürüyle değil, algoritmayla muhatap oluyoruz burada. Pijamayla evden alışveriş yapabilme özgürlüğü sağlar.

### Ubiquitous Uygulamaları 
- **Geo-fencing**: Sanal sınırlar çizer (örn: AVM'ye girdiğimiz an telefonumuza o AVM'deki mağazadan indirim kodu gelmesi).
- **Geo-conquesting (Rakibi Hedefleme)**: Sanal çiti *rakibin* mağazasına kurmaktır. Burger King'e girmek üzereyken McDonald's'tan "bizde bedava patates var" mesajı gelmesi gibi.
- **Beacon (Proximity Marketing)**: Geo-fencing'in mikro versiyonudur. BLuetooth kullanır. Kapalı alanlarda santimetre düzeyinde konum belirler (örn: reyonda ceketlere bakarken sadece ceket indirimi gelmesi).
- **Artırılmış Gerçeklik (AR)**: Satın almadan önce dene (try-before-you-buy). IKEA Place ve Sephora makyaj malzemeleri gibi.
- **Çoklu Cihaz Pazarlaması (Cross-Device)**: Kullanıcıyı cihazdan cihaza takip etmek. İki yolu vardır:
	1. **Deterministik**: Kesin eşleştirme (Google/Facebook girişi ile).
	2. **Probabilistik**: Olasılıksal eşleştirme (IP adresi, tarayıcı türü ile algoritmanın tahmin etmesi).

---

## 3. Philip Kotler ve Pazarlamanın Evrimi
- **Pazarlama 1.0 (Fordizm)**: Ürün odaklı, kitlesel üretim. "Alırsın Ford, olursun Lord". 
- **Pazarlama 2.0**: Müşteri tercihleri ve memnuniyet devreye girer.
- **Pazarlama 3.0**: İnsan odaklı, etik ve çevreci yaklaşım ([[Yeşil Pazarlama]]).
- **Pazarlama 4.0 (Endüstri 4.0 ile)**: Çevrim içi ve çevrim dışının bütünleşmesi.
- **[[Netizen]]**: İnternet vatandaşı (citizen > netizen). Şikayetvar.com'da, Twitter'da markayı linç eden ve klavye delikanlılığı yapan dijital tüketici gibi.

---

## Tahtadaki Kavramlar (Münazarada Konuşulanların Kavram Hâli):


| **Tahtadaki Terim / İngilizce**                 | **Hangi Taraf?** | **Türkçe Karşılığı ve Açıklaması**                                                                                                                                                                                                                                               |
| :---------------------------------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Evaluation 5-stars**                          | Dijital          | **5 Yıldızlı Değerlendirme:** Dijitaldeki güvenin sosyal kanıtıdır. Arkadaş tavsiyesi yerine binlerce kişinin verisine güvenmeyi temsil eder.                                                                                                                                    |
| **E-Loyalty (E-Sadakat)**                       | Dijital          | **Elektronik Sadakat:** Dijital platformlarda algoritmalarla yaratılan marka sadakati.                                                                                                                                                                                           |
| **Seller pressure on direct purchase**          | Dijital          | **Doğrudan satın almada satıcı baskısı:** Fiziksel mağazadaki tezgahtarın "yardımcı olayım mı?" diyerek yarattığı psikolojik yük.                                                                                                                                                |
| **E-Security ↑**                                | Dijital          | **E-Güvenlik (Artışı):** Dijital platformların tüketici hakları, KVKK ve yasalarla eskisinden daha güvenli hale gelmesi.                                                                                                                                                         |
| **E-distribution / Fast distribution**          | Dijital          | **E-dağıtım / Hızlı Dağıtım:** Lojistik ağların gelişmesi, e-ticaretin mekânsal sınırları aşarak hızlı teslimat yapması.                                                                                                                                                         |
| **AR - AI Support**                             | Dijital          | **Artırılmış Gerçeklik ve Yapay Zekâ Desteği:** Fiziksel dokunma eksikliğini dijital simülasyonla giderme çabası.                                                                                                                                                                |
| **Discounts**                                   | Dijital          | **İndirimler:** Tüketiciyi hızlı karar vermeye iten kuponlar ve flash indirimler.                                                                                                                                                                                                |
| **Influencers**                                 | Dijital          | **Etkileyiciler:** Karar verme sürecini yönlendiren dijital kanaat önderleri.                                                                                                                                                                                                    |
| **e-WOM**                                       | Dijital          | **Elektronik Ağızdan Ağza Pazarlama:** Müşteri yorumlarının dijitaldeki gücü.                                                                                                                                                                                                    |
| **UTAUT2**                                      | Dijital          | Teknoloji Kabul Modeli'nin gelişmiş hâlidir. Dijital kanalların neden benimsendiğini (fiyat değeri, hedonik motivasyon vs.) açıklar.                                                                                                                                             |
| **AI assistants**                               | Dijital          | **Yapay Zeka Asistanları:** Chatbot'lar ve algoritmik destek sistemleri.                                                                                                                                                                                                         |
| **Maceraya dayalı alışveriş**                   | Geleneksel       | Alışverişin salt bir satın alma süreci değil de aynı zamanda keşfetme ve sosyalleşme eylemi olması.                                                                                                                                                                              |
| **Role (Birey) dayalı alışveriş**               | Geleneksel       | Bireylerin alışverişte üstlendikleri sosyal roller ve aidiyet duygusu.                                                                                                                                                                                                           |
| **Security issues**                             | Geleneksel       | **Güvenlik Sorunları:** Kredi kartı hırsızlığı, dolandırıcı siteler ve KVKK ihlali korkuları.                                                                                                                                                                                    |
| **Direct touch**                                | Geleneksel       | **Doğrudan temas:** Ürünün kumaşına, dokusuna dokunma zorunluluğu. Fiziksel risk algısı.                                                                                                                                                                                         |
| **Disgusting advertisement or digital service** | Geleneksel       | **İğrenç/Rahatsız edici reklamlar:** Literatürdeki asıl adı *Ad Fatigue*.                                                                                                                                                                                                        |
| **Real trust**                                  | Geleneksel       | **Gerçek Güven:** Fiziksel esnafa, göz temasına dayalı kurulan geleneksel, insani güven bağı.                                                                                                                                                                                    |
| **Advice of friends**                           | Geleneksel       | **Arkadaş tavsiyesi:** Para almış bir Influencer yerine, yakın çevrenin organik ve samimi önerisine güvenmek.                                                                                                                                                                    |
| **Researchs**                                   | Geleneksel       | **Araştırmalar:** Dijitale duyulan güvensizliği kanıtlamak için sunulan akademik tezler/veriler. *Researchs değil, **studies** olmalıydı.* "Research", sayılabilir olmadığı için 's' alamaz.                                                                                     |
| **Difficulty of differentiation**               | Geleneksel       | **Ayırt etme zorluğu:** Dijitalde gerçek ile sahteyi, YZ üretimi ile orijinali ayırt edememe sorunu.                                                                                                                                                                             |
| **Face to face marketing**                      | Geleneksel       | **Yüz yüze pazarlama:** İnsan insana kurulan, dijitalin mekanikliğinden uzak iletişim.                                                                                                                                                                                           |
| **Cheating of AI**                              | Geleneksel       | **Yapay zeka hilesi:** Deepfake, sahte görseller ve var olmayan ürünlerle yapılan dijital dolandırıcılıklar.                                                                                                                                                                     |
| **Consuming bombarding**                        | Geleneksel       | **Tüketim bombardımanı:** İndirim illüzyonuyla gereksiz ürünleri sepete yığma çılgınlığı. *"**Consumer bombardment**" yahut "**bombardment of consumption**" olarak çevirmek daha makul. Nitekim Baudrillard'in "Tüketim Toplumu" da "The Consumer Society"'dir İngilizcesiyle.* |
| **Individual experience**                       | Geleneksel       | **Bireysel deneyim:** Herkesin ürünü kendi duyularıyla bizzat yaşama ve tecrübe etme isteği.                                                                                                                                                                                     |
| **Favorite seller**                             | Geleneksel       | **Favori satıcı:** Sadık müşteri olunan, bilindik esnaf/kurum.                                                                                                                                                                                                                   |


## Münazara Kritiği

>*Bu kısım münazaraya yönelik benim her iki gruba yönelik kritiğimden oluşmakta. Okumak zorunlu değil elbet ancak yukarıdaki kavramlara hoca epey önem verdi. Bu kavramlar da münazaradan çıkmış olan kavramlar olduğundan, münazaranın nasıl ilerlediğini görmek ve kavramları da münazaradaki çeşitli alanlarla -yakalayabildiğim kadarıyla- eşleştirmek daha iyi bir çerçeve sunabilir sizlere.*

### Geleneksel Alışverişin Kritiği

Geleneksel pazarlamayı savunan grup, işe **fiziksel deneyim ve kalite kontrolü eksikliği**nden girdi. Ürüne dokunamamayı, defolü ürün gelme kaygısını araştırmalarla (*research*) desteklediler. Gelgelelim bu araştırma verilerinin çoğunun zırva olduğunu söylemek gerekiyor. 300 kişilik dar bir öğrenci grubunun verisiyle tüm insanlığın alışveriş alışkanlıklarını açıklamak geçerli bir yöntem değil. Bu tür anketler araştırmanın hangi örneklemde yapıldığıyla sabit kalır ve gerçeğin ne olduğunu veremezler. Kaldı ki, fiziksel olarak deneyip yine sanal alışveriş ile satın alma (*showrooming*) gerçekleştirilebilir. İstediğimiz ürün bulunduğumuz şehirde veya ülkede yoksa, o ürünü elde etmenin birincil yolu da sanal alışveriştir hâliyle.

İkinci argümanları **güvenlik, dolandırıcılık ve finansal riskler**di (*security issues*). Dijitali savunanlar bunu uygun yerden savuşturdular. Ancak ilave olarak, e-ticaret platformlarında müşterinin zaten yasalarla korunduğu söylenilebilir. KVKK ihlali gereği dava açmak yahut dolandırıcı sitelerle yasal yollardan mücadele etmek zor değil. Kaldı ki bilinçli bir tüketici zaten hangi internet sitesinden alışveriş yapması gerektiğini de bilir, dijitali savunan grubun dile getirdiği gibi. İşbu riskler sistemi reddetmek için ağır basan riskler değildir.

**Operasyonel ve lojistik yükleri** de dile getirdiler. Kargo beklemek, evde bulunamama stresi, yanlış ürün gelmesi ve iade süreçlerinin zahmeti gibi. Eh, kargoların evde olmama durumuna karşın belirli teslimat noktalarına bırakılması seçeneği var. Dijitali savunan tarafın dediği gibi, komşudan yahut arkadaştan rica etme seçeneği de var, 1 günde anında kargoya verilir gibi seçenekli e-ticaret siteleri de var. Yanlış ürün gelirse iade süreciyle uğraşmak dışında bir handikap yok burada. 

**Sosyal denetim ve aidiyet** üzerinden de konu ele alındı (*role dayalı alışveriş, maceraya dayalı alışveriş*). Alışverişi bir sosyalleşme aracı olarak pazarladılar. Açıkçası, alışveriş benim için bir sosyalleşme aracı değildir mesela. İhtiyacım olanı ihtiyaç duyduğum zaman almak için kullandığım bir araçtır. İhtiyacım olduğu vakit alacağım zaman da önümdeki seçenekleri değerlendirir ve buna binaen dijital mi yoksa fiziksel olarak mı alacağımı değerlendiririm. Aile fertleriyle yahut arkadaşlarımla vakit geçirmek, ilişkiler kurabilmek için bir araç konumunda değil benim için alışveriş. Bir kesimin kendi yaşam pratiğini tümevarım yoluyla herkese hatalı bir biçimde uyarlamasını içeriyor bu. Beni geç, çoğu erkek de zaten bu şekilde bir ilişki kurmuyor, bağları güçlendirmiyor. Cinsiyetçi damgası yemek istemem ama, daha ziyade kadınlara özgü bir sosyalleşme ihtiyacı gibi alışveriş. 

İnsani ilişkiler e-ticaretle sekteye uğrar mı? Uğrar elbet. Ancak bu ilişkileri zaten önemsemeyen kişiler de vardır. Esnaf-müşteri bağında (*real-trust*) karşıda bir *öteki*, bir *özne* olduğunun bilincindedir insan. Yine de herkese uyaranabilecek bir şey değil bu. Kaldı ki, bağları güçlendirmek isteyen için alışveriş yapmak gerek-sebep de değildir. İlişki kurmak ve sosyalleşmek için mekâna gerek dahi yoktur kimisi için. Bunlar bir yana, bu argüman sanki sürekli internetten alışveriş yapılacakmış ve hiç arkadaşlarla dışarıya çıkılmayacakmış gibi absürt bir varsayımı da içerisinde barındırıyor.

Son olarak, **reklamlar ve yorumlar** meselesi var. Reklam körlüğüne (*disgusting advertisement*) ve YZ güvensizliğine (*cheating of AI*) değinip, arkadaş/aile tavsiyesine (*advice of friends*) daha çok güvendiklerini söylediler. İtiraz edilmesi zor bir şey olmasa gerek bu. İlgili üründe zaten tonlarca yorum var (*evaluation 5-stars*). Bu yorumlara bakınca, ürüne gerçekten para vermiş ve tecrübe etmiş kişilerin değerlendirmelerinden bir çerçeve elde ediliyor. Bu çerçeveye göre hareket etmek çoğu zaman mantıklı ve elle tutulur sonuçlar verir. Aile üyesine gelince; tek bir kişinin vereceği yanıt ile binlerce kişinin verdiği ortak yanıt arasında farklar vardır. Burada duygusal tercih meselesi de devreye girecektir tabii ancak konuyu uzatmak istemiyorum, duygular söz konusu olduğunda sağlam bir varış noktası bulmak zor. Gelgelelim eğer mantıksal bir karar vermeyi önceleyeceksek, alışveriş yorumlarını seçmek -yeteri kadar yorum varsa- daha rasyoneldir, tek bir kişiye güvenmeye kıyasen. Aile üyemiz, ürünün iyi geldiği nadir kişilerden olabilir, oysa belki ürünü 100 kişi aldıysa 90'ı üründen memnun değildir gibi. 

### Dijital Alışverişin Kritiği
Gelelim çevrim içi alışverişi savunan tarafa. Büyüme hacmine ve veri odaklılığına yönelik argümanları vardı genel olarak. Verilere girmeyeceğim çünkü hatırlamıyorum. Mantıklı düşünerek elde edilebilecek sonuçlar da var elbet. Muhtemelen iki grup da yapay zekâ kullandı bu arada; "regresyon analizi" diye bir kavram kullanıp ne olduğunu açıklayamamak bunun kanıtı olsa gerek. YZ kullanmakta bir sorun yok elbet, gelgelelim bilgiyi ve münazarayı yalnızca tüket-geç formatında bir gösteriye indirgiyor YZ kullanımı. Oysa bence, bilginin sindirilmesi, diğer muhtelif bilgilerle birleştirilmesi ve daha büyük bir çıktı ortaya atması gerekir zamanla. İnsanı performans göstermesi gereken bir makineye indirgeyen sistemin sonuçları... Yadırgamıyorum dediğim gibi.

Argümanlarına dönersek; kullanıcının verileriyle kişiselleştirilmiş reklamların sunulduğu ve bunun satın almayı doğrudan etkilediği belirtildi. Eh, nasıl ki Tanrı insana şah damarından daha yakınsa, dijital dünyada da artık her aktivitemiz kayıt altına alındığından algoritmalar da bu mertebeye ulaşmaya çalışıyor (bkz. **gözetim kapitalizmi**). Bu üretici için faydalıdır, peki ya tüketici için? Gelenekselciler bunu "tüketim çılgınlığı" (*consumer bombardment*) diyerek itiraz etti. Gelgelelim kaçırdıkları nokta şurasıydı: Tüketim çılgınlığı e-ticaretin icadı değildir. Kapitalizmden beri süregeliyor zaten bu çılgınlık. İnternet yalnızca bunu daha da ivmelendirdi. Mağazalardaki gereğinden fazla tüketim, sürekli yeni bir ürün alma gibi işlemler normalleştirildiği için, e-ticaretteki tüketim "çılgınlık" sayılıyor. Hâlbuki ikisi de normal değil. Münazarada tüketim çılgınlığı iyidir/kötüdür diye bir norm koymak için de burada değiliz.

Fiziksel mağazanın dezavantajlarına değindi bu grup. Müşteri başında bekleyip baskı kuran görevliler (*seller pressure on direct purchase*) ve yol masrafı argümanları kesinlikle haklıydı. 

Ancak **psikolojik tetikleyiciler** kısmında hatalılar. "15 dakika içinde flash indirim bitecek" uyarısı gerçek bir uyarı değil. 15 dakika sonra uygulamaya tekrar girdiğinizde, o 15 dakikalık uyarı baştan başlıyor. Yemeksepeti yahut trendyol go'da isterseniz deneyin bunu. Ürün almadığınız takdirde ortadan kalkmıyor. 

Buna "ama çoğu kişi bilmiyor" diyerek itiraz da edemezler, zira bu iddiadan önce **bilinçli tüketici** kavramına değinmişlerdi, bilinçli bir tüketici güvenlik, dolandırıcılık ve finansal risklerden çok az etkilenir diyerek. Bilinçli bir tüketici *FOMO*'ya kolay kolay kapılır mı? Kapılmaz. Aksini iddia etmek kendileriyle çelişmesine de sebebiyet verecektir ve geleneksek pazarlamayı savunan grubun argümanlarını savuşturmak için yalnızca yasalara sığınmaları gerekecek. Ancak kendileri yasalara değinmemişlerdi, bu sebeple savuşturamayacaklardı o iddiayı. 

Bilinçli bir tüketici *influencer* yönlendirmelerine, indirim kuponlarına (*discounts)* kanan birisi değildir. Bu gibi sebeplerden dolayı ya tutarsız diyeceğiz bu gruba, ya da psikolojik tetikleyiciler kısmını tutarlılık adına yok sayacağız. 

Son olarak, ürüne fiziksel olarak dokunamama ve görememe argümanına karşı sundukları **Artırılmış Gerçeklik (AR - AI Support)**. AR orada, ilgili kıyafetin yahut ürünün *olması gereken* görünüşünü simüle ediyor, fiziksel mağazada olan görünüşünü değil. Sadece ürünün nasıl gözüktüğünü görebiliyor kişi; o kumaşa dokunamıyor, o ürünün gerçekten o şekilde görüneceği anlamına gelmiyor bu. Dolayısıyla geleneksel ticaretin savunucularına tam olarak cevap veremiyor bu. Ne olursa ürünün AR'da göründüğü şekilde geleceğinin garantisi yok zira, AR sadece ürünün bir kişinin üzerine nasıl gözüktüğüne yönelik çerçeve verir o kadar.

---

Eh, tüm bunlara rağmen çevrim içi alışverişi savunanlardan tarafım ben. Kıyas yaptığımızda daha ağır basıyor zira bu münazara bağlamında. Geleneksel pazarlamanın argümanlarını çürütmek zor değil. 

Tüm bunlar bir yana, fiziksel dünyada karşılığı olmayan birçok şey yalnızca dijital dünyada ticarete açık. NFT gibi, metaverse gibi. Böyle bir iddia ile ortaya çıksalardı, geleneksel pazarlama buna kolay kolay yanıt veremezdi mesela, zira bunlar fiziksel bir görünüme sahip değil. Soyut bunlar. Bunlar bir yana, yardım aldıkları yapay zekânın üyeliği soyut, yazılımların üyeliği soyut, oyun içi dijital eşyaların üyeliği soyut... Uzar gider liste. Dijitali savunanlar her nedense en güçlü oldukları bu noktayı kullanmadılar bile. Bu noktaların reddi, dijital ekonominin büyük bir kısmının reddini de beraberinde getirecektir oysa, o yüzden itiraz etmesi zor. En iyi ihtimalle "Somut bir varlığı olan ürünler" çerçevesinde tartışmayı sürdürmeyi isteyebilirlerdi, ancak öyle bir kısıt yoktu münazarada. 

Neyse, kritik bu kadar.