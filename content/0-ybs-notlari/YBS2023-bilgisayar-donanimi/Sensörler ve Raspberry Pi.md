# Sensörler ve Raspberry Pi — Akıllı Ayna Çalışma Notu

Bu not; paylaşılan ders notları, proje örnekleri ve akıllı ayna parça listesi temel alınarak hazırlanmıştır. Temel amaç, her parçanın **neyi algıladığını, nasıl veri ürettiğini, neden seçildiğini ve Raspberry Pi ile nasıl ilişkilendiğini** ayırt etmektir. Son bölümdeki pin planı öneridir; kurulmuş devrenin veya mevcut kodun tespiti değildir.

## 1. Sensör, giriş, çıkış ve internet verisi

**Sensör**, ışık, sıcaklık veya ses gibi fiziksel bir büyüklüğü algılayıp işlenebilir sinyale dönüştürür. Kamera görsel veri, mikrofon ses verisi sağlar. RFID okuyucu karttan veri alan bir giriş birimidir; sıcaklık sensörü gibi bir çevresel büyüklüğü ölçmez.

**Aktüatör**, verilen komutu fiziksel etkiye dönüştüren çıkış elemanıdır. Motor hareket, hoparlör ses üretir. Röle elektrik devresini anahtarlar. Ekran görsel çıktı sağlar. Bu nedenle projedeki bütün elektronik parçalar sensör olarak adlandırılmaz.

Sensör kullanmak, akıllı ayna yapmak için zorunlu değildir. Saat, haberler ve hava durumu internet servislerinden alınarak gösterilebilir. **API**, yazılımların veri veya işlev alışverişi yaptığı arayüzdür. Hava durumu API verisi, aynanın odadaki sıcaklığı ölçtüğünü göstermez.

Genel akış: fiziksel olay → sensör verisi → Raspberry Pi üzerindeki uygulama → karar → arayüz veya fiziksel çıktı.

## 2. Akıllı aynanın dört ana sensörü

| Parça | Algıladığı bilgi | Projedeki görev | Temel sınır |
|---|---|---|---|
| APDS-9960 | Yönlü optik veriler, yakınlık, renk ve ortam ışığı | El hareketini sayfa değiştirme komutuna dönüştürmek | Genel oda doluluğu veya kullanıcı kimliği vermez |
| HC-SR501 PIR | Görüş alanındaki kızılötesi değişimlerle ilişkili hareket | Ekranı hareketle uyandırmak | Hareketsiz kişiyi güvenilir biçimde doğrulamaz |
| DHT22 | Sıcaklık ve bağıl nem | Odanın koşullarını göstermek | Dış hava tahmini veya gaz ölçümü yapmaz |
| LDR modülü | Işığa bağlı direnç değişiminden üretilen sinyal | Aydınlık ve karanlık durumlarına göre gece modu | Çıkış türü ve polaritesi karta göre doğrulanır |

### APDS-9960: El hareketiyle kontrol

APDS-9960, birden fazla optik algılama işlevini birleştirir. Jest algılamada kızılötesi LED ve farklı yönlere duyarlı fotodiyotlar kullanılır. Fotodiyot ışığa elektriksel tepki veren yarı iletken elemandır. El hareketinin zaman içinde oluşturduğu yönlü veriler, sürücü tarafından sağ, sol, yukarı veya aşağı gibi jestlere dönüştürülebilir.

Raspberry Pi ile **I2C** üzerinden haberleşir. SDA veri, SCL saat hattıdır. INT, olay bildirimi için kullanılabilen ayrı kesme çıkışıdır; düzenli sorgulama kullanan her uygulamada zorunlu değildir. Sensör verisi gelmesi ile arayüzün sayfa değiştirmesi farklı aşamalardır: komut eşlemesini program yapar.

GY-9960-3.3 kartı, başka markanın regülatörlü kartıyla aynı sayılmaz. Yongaya ait besleme aralığı 2,4–3,6 V'tur; gerçek taşıyıcı kartın etiket ve devre bilgisi esas alınır. Kartın 5 V desteği belgelenmeden 5 V uygulanmaz. Sensörün önü ve ayna kaplamasının kızılötesi geçirgenliği gerçek montajda test edilir. Yönler tersse montaj yönü ve yazılımdaki eşleme kontrol edilir.

**Seçim gerekçesi:** Aynaya dokunmadan yönlü komut almak gerekir; genel hareket sensörü yönlü jestin yerini tutmaz.

Kaynaklar: [Broadcom APDS-9960](https://www.broadcom.com/products/optical-sensors/integrated-ambient-light-and-proximity-sensors/apds-9960), [SparkFun kart bağlantıları](https://learn.sparkfun.com/tutorials/apds-9960-rgb-and-gesture-sensor-hookup-guide/board-overview), [Adafruit sürücü belgesi](https://docs.circuitpython.org/projects/apds9960/en/latest/).

### HC-SR501 PIR: Hareketle uyandırma

PIR, pasif kızılötesi algılamadır. Algılamak için kızılötesi ışık yaymak yerine gelen ışınımdaki değişimleri izler. İnsan görüş alanında hareket ettiğinde modül tetiklenebilir. Çıkışı tipik olarak iki durumlu sayısal sinyaldir.

HC-SR501 türü kartlarda duyarlılık, çıkışı bekletme süresi ve yeniden tetikleme ayarları bulunabilir. Açılışta kararlı hâle gelmesi için bekleme gerekir. Birçok modül 5 V ile beslenirken yaklaşık 3,3 V çıkış üretir; **besleme gerilimi ile çıkış sinyali aynı özellik değildir**. Pin sırası ve değerler gerçek kartta kontrol edilir.

“Odaya girince aç, çıkınca kapat” ifadesinin uygulanabilir karşılığı genellikle “hareket varsa uyandır, son hareketten sonra belirli süre geçerse uyut” olur. Hareket görülmemesi kişinin ayrıldığını kanıtlamaz. Aynanın önünde hareketsiz kalan kullanıcı için kapanma gecikmesi gerekir; kesin varlık takibi istenirse PIR tek başına yeterli değildir.

**Seçim gerekçesi:** Düşük maliyetle hareket tetiklemesi sağlamak ve ekranın gereksiz açık kalmasını azaltmak.

Kaynaklar: [Adafruit PIR çalışma mantığı](https://learn.adafruit.com/pir-passive-infrared-proximity-motion-sensor?view=all), [Pi ile PIR bağlantısı](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-12-sensing-movement/hardware).

### DHT22: Odanın sıcaklığı ve nemi

DHT22 iki çevresel büyüklüğü sayısal olarak iletir. Sıcaklık dereceyle, **bağıl nem** ise havadaki su buharının o sıcaklıktaki doygunluk düzeyine oranı olarak yüzdeyle ifade edilir.

Tek DATA hattı kullanır; standart I2C veya Dallas 1-Wire sensörü değildir. Uygun sürücü, sensörün özel zamanlamasını işler. Ölçümler arasında en az yaklaşık iki saniye bırakılır; örneğin üç saniyelik okuma aralığı kullanılabilir. Çok sık okumak ölçüm hızını artırmaz.

Çıplak sensör ile modülün bağlantıları farklı olabilir. DATA hattında pull-up direnci gerekebilir; modülde zaten bulunup bulunmadığı kontrol edilir. Pi tarafındaki veri hattı 3,3 V mantığına uygun olmalıdır. Sensör işlemci ve ekranın ısısından uzakta, oda havasını temsil eden yere yerleştirilir. Okuma hatası 0 °C gibi gerçek ölçüm olabilecek bir değerle gizlenmez.

DHT11 de aynı genel amaçla kullanılan bir sensördür; DHT22 ile ölçüm aralığı, doğruluk ve okuma sıklığı aynı kabul edilmez.

**Seçim gerekçesi:** İnternetten tahmin almak yerine aynanın bulunduğu ortamı doğrudan ölçmek.

Kaynaklar: [Adafruit DHT sensör özellikleri](https://learn.adafruit.com/dht), [DHT bağlantısı ve pull-up](https://learn.adafruit.com/dht/connecting-to-a-dhtxx-sensor).

### LDR modülü: Gece moduna geçiş

LDR, ışığa duyarlı dirençtir. Üzerine düşen ışık arttığında direnci genel olarak azalır. Ham eleman analog davranır; fakat modülün dışarı verdiği sinyal analog veya eşikle karşılaştırılmış sayısal çıkış olabilir.

| Etiket | Tipik anlamı | Pi ile değerlendirme |
|---|---|---|
| AO | Analog gerilim çıkışı | Sürekli değer ölçümü için uygun ADC gerekir |
| DO | Sayısal karşılaştırma çıkışı | Gerilim uygunsa GPIO'dan iki durum okunabilir |
| VCC | Pozitif besleme | Kartın çalışma aralığına göre seçilir |
| GND | Ortak elektriksel referans | Pi ile ortak referans kurulur |

Üç pinli, mavi kart olması çıkış türünü kesinleştirmez. Pin etiketi, şema ve gerçek kart kontrol edilir. Potansiyometre çoğunlukla karşılaştırma eşiğini ayarlar. DO ile kesin lux değeri alınmaz; HIGH durumunun aydınlığı mı karanlığı mı temsil ettiği test edilir.

Çıkış 5 V ise Pi girişine doğrudan bağlanmaz. Uygun seviye dönüştürme gerekir; tek 330 Ω seri direnç bu işi garanti etmez. Eşik yakınında titreyen gece modu için süre filtresi kullanılabilir. Analog veya sayısal aydınlık verisiyle farklı geçiş eşikleri uygulanabiliyorsa histerezis de kullanılabilir. Sensör aynanın kendi ekran ışığıyla yanlış tetiklenmeyecek yere konur.

**Seçim gerekçesi:** Aydınlık-karanlık ayrımıyla ekran görünümünü ortam koşullarına uyarlamak. Ancak APDS-9960 da ortam ışığı algılayabilir. Aynı projede ayrıca LDR kullanmak zorunlu değildir; ayrı eşik çıkışı istemek gibi somut gerekçe sunulmalı, gereksiz işlev tekrarı da değerlendirilmelidir.

Kaynaklar: [LDR çalışma mantığı](https://learn.adafruit.com/photocells/overview), [Dirençten analog ölçüm](https://learn.adafruit.com/photocells?view=all), [Pi için harici ADC](https://learn.adafruit.com/reading-a-analog-in-and-controlling-audio-volume-with-the-raspberry-pi).

## 3. Diğer projelerdeki girişler ve sensörler

| Bileşen | Görevi | Karıştırılmaması gereken nokta |
|---|---|---|
| Kamera | Görüntü toplamak | Yüz algılama ve kişiyi tanıma uygun yazılım gerektirir |
| IR dokunmatik çerçeve | Kesilen kızılötesi ışınlardan konum bulmak | Jest sensörü veya kapasitif ekranla aynı düzenek değildir |
| Mikrofon | Ses girdisi toplamak | STT yazılımı kaydı metne dönüştürür; mikrofon tek başına konuşmayı anlamaz |
| USB RFID okuyucu | Kart bilgisini USB üzerinden almak | Bağlantı şekli RC522 başlığıyla aynı değildir |
| RC522 modülü | Uyumlu RFID kartlarla veri alışverişi yapmak | Yaygın kartlar SPI kullanır; SDA etiketi kart seçimini belirtebilir |
| AirGradient gibi hava kalitesi aygıtı | İçindeki farklı sensörlerle çevre verisi toplamak | Marka veya cihaz adı tek bir sensör ilkesini ifade etmez |
| MQ-135 | Çeşitli gaz ve dumanlara duyarlı sinyal üretmek | Kendiliğinden seçici ve kesin bir CO₂ ölçer değildir |

RFID kartın UID değeri bir tanımlayıcıdır; tek başına gizli parola veya kriptografik doğrulama değildir. Kart, PIN ve SMS kodunun peş peşe kullanılması sistemin otomatik olarak “en üst güvenlikte” olduğunu kanıtlamaz.

AirGradient örneğinde ekran paneli sensörleri GPIO'dan okumak zorunda değildir; Home Assistant üzerinden ağ verisi alabilir. MQ-135 için ısıtma, kalibrasyon ve farklı gazlara çapraz duyarlılık önemlidir. DHT22 sıcaklık-nem sensörü, MQ-135 gaz algılayıcısı, LDR ise ışık elemanıdır.

Kaynaklar: [NXP MFRC522](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf), [NXP kimlik ve doğrulama ayrımı](https://community.nxp.com/t5/NXP-Designs-Knowledge-Base/NFC-for-consumables-and-accessories/ta-p/1109230), [Sharp IR dokunmatik ilkesi](https://medical.sharpdisplays.eu/p/pl/pl/launch/rp/touch-technologies.xhtml), [Winsen MQ-135](https://www.winsen-sensor.com/manual/mq135.html), [AirGradient sensörleri](https://www.airgradient.com/indoor/).

## 4. Raspberry Pi, pinler ve önerilen bağlantı planı

Raspberry Pi 4 bir tek kart bilgisayardır; işletim sistemi, arayüz, ağ servisleri ve sensör uygulamaları çalıştırabilir. RAM geçici çalışma belleğidir. microSD işletim sistemi ve dosyalar için kalıcı depolama sağlar; uygun başka depolama seçenekleri de kullanılabilir. Pi 4 monitöre micro-HDMI üzerinden görüntü verir. Kamera için CSI, uyumlu ekran için DSI bağlantısı bulunur; bunlar aynı işlevde değildir.

**Fiziksel pin**, başlıktaki sıra konumudur. **BCM GPIO numarası**, sinyal hattının adıdır. Örneğin GPIO17 fiziksel pin 11'dir; fiziksel pin 17 ise 3,3 V beslemedir. Kodda hangi numaralandırmanın kullanıldığı bilinmeden bağlantı yapılmaz. Farklı kütüphanelerin pin belirtme biçimi ayrıca kontrol edilir.

40 pinin tamamı genel amaçlı veri pini değildir. Besleme ve toprak pinleri de vardır. GPIO mantığı 3,3 V'tur; Pi başlığında 5 V besleme bulunması sinyal girişlerini 5 V toleranslı yapmaz. Pi 4 genel amaçlı analog ölçüm için dahili ADC sunmaz.

Aşağıdaki plan **çalışma örneğidir**. Gerçek kod, boş pinler, modül etiketleri ve elektriksel uyumluluk doğrulanarak uygulanır. Fiziksel olarak yanyana görünen uçlara göre rastgele kablo sırası çıkarılmaz.

| Bağlantı | Örnek BCM hattı | Fiziksel pin | Açıklama |
|---|---|---|---|
| APDS SDA | GPIO2 | 3 | Standart I2C1 veri hattı |
| APDS SCL | GPIO3 | 5 | Standart I2C1 saat hattı |
| DHT22 DATA | GPIO4 | 7 | Önerilen seçim; zamanlama ve sürücü desteği doğrulanır |
| PIR OUT | GPIO17 | 11 | Önerilen sayısal giriş |
| LDR DO | GPIO27 | 13 | Yalnız DO ve çıkış gerilimi doğrulanırsa |
| 3,3 V besleme | GPIO değildir | 1 veya 17 | Uyumlu modüllerin beslemesi için |
| 5 V besleme | GPIO değildir | 2 veya 4 | Gereksinimi doğrulanan modüller için |
| Ortak GND | GPIO değildir | Örneğin 6 | Ortak elektriksel referans |

APDS-9960'ın INT ucu kullanılırsa ayrıca uygun boş bir GPIO seçilir. DHT22 modülü uygun 3,3 V besleme ve veri düzeyiyle çalıştırılacak şekilde doğrulanır. HC-SR501 için tipik 5 V besleme ve yaklaşık 3,3 V çıkış gerçek kartta kontrol edilir. LDR kartının belgesi bilinmeden besleme ve çıkış bağlantısı kesinleştirilmez.

I2C, adresleri uygun birden fazla aygıtın SDA/SCL hatlarını paylaşmasını sağlar. SPI, saat ve veri hatlarına ek olarak aygıt seçimi kullanır. UART'ta göndericinin TX hattı karşı tarafın RX hattına gider; mantık düzeyleri ve ortak referans uygundur. USB RFID okuyucu veya USB mikrofon, aynı görevin GPIO üzerinden bağlanmasıyla eş tutulmaz.

Kaynaklar: [Resmî Pi donanım ve pin tablosu](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html), [Pi 4 bağlantı özellikleri](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/specifications/), [Haberleşme ayarları](https://www.raspberrypi.com/documentation/computers/configuration.html), [Kamera bağlantısı](https://www.raspberrypi.com/documentation/accessories/camera.html).

## 5. Devre malzemeleri ve sınavda açıklama

**Breadboard**, lehimsiz deneme içindir. Bağlantı grupları vardır; güç rayları bazı modellerde ortadan bölünür. **Delikli bakır pertinaks**, kalıcı lehimli kurulum için kullanılabilir; her delik otomatik olarak bütün diğer deliklerle bağlı değildir. Pad veya bakır şerit düzeni kontrol edilir.

**Erkek pin header** karta bacak ekler. **Dişi-dişi jumper** iki erkek pin grubunu, **dişi-erkek jumper** bir pin başlığı ile breadboard gibi bir yuvayı, **erkek-erkek jumper** uygun dişi yuvaları birbirine bağlayabilir. Kablo tipinin uygun olması pin eşlemesinin doğru olduğu anlamına gelmez.

**10 kΩ ve 330 Ω aynı amaçla kullanılan genel güvenlik dirençleri değildir.** Pull-up, hattı boşta tanımlı seviyede tutar. LED'e seri direnç akımı sınırlar; uygun değer besleme ve LED özelliklerine göre seçilir. Gerilim bölme ise uygun oranlı en az iki dirençli bir düzen gerektirir; tek seri direnç genel bir 5 V → 3,3 V dönüştürücü değildir.

**Röle**, ayrı güç devresini anahtarlar; 5 V'u 12 V'a yükseltmez. Kilidin enerjisi uygun kaynaktan gelir. GPIO bobin veya yüksek akımlı yükü doğrudan beslemez; uygun sürücü/modül gerekir. Röle bulunması bütün kartın otomatik olarak tam galvanik izolasyonlu olduğu anlamına gelmez; ortak bağlantılar ve kart tasarımı belirleyicidir.

Bir sensörü açıklarken şu sırayı kullan: **ölçülen olay → üretilen veri → bağlantı/protokol → uygulamanın kararı → seçim gerekçesi → sınırlılık**.

Örnek cevap: “HC-SR501'i hareket oluştuğunda ekranı uyandırmak için seçtim. Modülün sayısal çıkışını uygun GPIO girişinden okuyorum. Son hareketten sonra zaman aşımı dolarsa uygulama ekranı uyutuyor. PIR hareketsiz kişiyi kesin olarak algılamadığından kapanma süresini buna göre belirliyorum.”

## Soru bankasının kullanımı

Eşlik eden JSON dosyası **40 sensör/girdi/kurulum sorusu ve 15 Raspberry Pi sorusu** içerir. Toplam 55 soru ve 130 tooltip tanımı vardır. Her soruda beş seçenek, tek doğru cevap, beş ayrı seçenek açıklaması ve genel açıklama bulunur. Doğru cevaplar A–E arasında eşit dağılır; her harf 11 kez kullanılır. Tooltip'ler yalnızca soru veya seçeneklerde birebir geçen ifadeler için eklenmiştir; doğrudan sorulan bilgiyi tanımlayarak cevabı verecek tooltip'ler dışarıda bırakılmıştır.
