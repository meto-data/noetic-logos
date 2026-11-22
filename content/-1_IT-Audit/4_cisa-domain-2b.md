---
title: "Domain 2B: BT Yönetişimi, Organizasyonel Yapı ve Veri Mimarisi"
created: 2026-07-08
---
# Domain 2B: BT Yönetişimi, Organizasyonel Yapı ve Veri Mimarisi

Önceki notta incelenen Yönetişim kavramı, şirketin anayasasını yazmak ve legoların nerede duracağını belirlemekti. Şimdi işin mutfağına, yani **Yönetim** tarafına geçiyoruz. Yönetim; işbu anayasayı alıp sahada icra etme, legoları birleştirme ve sistemi günlük olarak ayakta tutmaktır.

**BT, kendi başına bir amaç değildir**. Restoranda asıl parayı kazandıran, müşteri dokunan ana iş şefin yemeğidir. BT ise o yemeğin müşteriye en iyi şekilde ulaşmasını sağlayan, arka plandaki garsonlar veya sistemin ta kendisidir. Günün sonunda patron (yönetim kurulu), "*Sistemlerimiz ne kadar teknolojik?*" diye sormaz; "*Bu ay hedeflediğimiz 100 bin doları kazandık mı? BT bu kârlılığa nasıl destek oldu?*" diye sorar. İşte **BT Yönetimi, kaynakları bu hedefe göre orkestre etme işidir**.


---

## BT Kaynak Yönetimi ve Portföy

Kurumların bütçeleri ve zamanları sınırlıdır. Her havalı yazılımı satın alamaz, her projeyi hayata geçiremeyiz. Bu nedenle genel müdür veya CIO, bir **BT Portföy Yönetimi (IT Portfolio Management)** yürütmek zorundadır. Portföy yönetimi, eldeki kısıtlı kaynakların (para, insan, teknoloji), iş birimlerinin hedeflerine en çok katkı sağlayacak projelere yatırılmasıdır.

Geleneksel yöneticiler bir yatırımın başarısını sadece finansal tablolara (kârlılık) bakarak ölçme eğilimdedir. Ancak modern BT yönetiminde ve CISA sınavında bizim aradığımız asıl araç **Balanced Scorecard (Kurumsal Karne)**'dır.

Balanced Scorecard (BSC), kuruma sadece kârlılık açısından bakmak yerine birçok farklı pencereden bakabilmemizi sağlar. Bir projenin veya BT departmanın başarılı sayılabilmesi için şu dört sorunun dengeli bir şekilde cevaplanması gerekir:

1. **Finansal Boyut**: Hissedarlara nasıl görünüyoruz? (Maliyetleri düşürdük mü? Yatırım getirisi sağladık mı?)
2. **Müşteri Boyutu**: İş birimleri ve son kullanıcılar bizi nasıl görüyor? (Çağrı merkezini aradıklarında sorunları hızlı çözülüyor mu?)
3. **İç Süreçler Boyutu**: Operasyonel olarak mükemmel miyiz? (Sistemlerimiz kesintisiz çalışıyor mu? Hataları azalttık mı?)
4. **Öğrenme ve Büyüme Boyutu**: Geleceğe hazır mıyız? (Personelimiz yeni teknolojilerde eğitiliyor mu? Yenilikçi miyiz?)

>[!important] CISA Sınav İpucu
>Eğer sınavda "*BT stratejisinin kurumun genel iş stratejisiyle uyumlu (aligned) olduğunu garanti altına almak ve performansını bütüncül ölçmek için en iyi araç hangisidir?*" diye soruluyorsa, cevap daima **Balanced Scorecard**'dır.


---

## İnsan Kaynakları (HR) Yaşam Döngüsü ve Güvenlik


- **Geçmiş Taraması (Background Check):** Finansal veya kritik yetkilere sahip olacak kişilerin adli sicil ve kredi skorları kontrol edilmelidir.
- **Referanslar:** Adayın yetkinliğini doğrulamak için önemlidir ancak kayırmacılık (nepotizm) riskine karşı dikkatli olunmalıdır.
- **Gizlilik Anlaşmaları (NDA) ve Çıkar Çatışması (Conflict of Interest):** İşe girişte mutlaka imzalatılmalıdır.
- **Çalışan El Kitabı (Employee Handbook):** Şirketin kabul edilebilir kullanım politikaları (Acceptable Use Policy) ve güvenlik kuralları çalışana tebliğ edilmeli ve eğitim verilmelidir. (İleride bir olay olduğunda çalışanın "haberim yoktu" demesini hukuken engeller).


Bilgi sistemleri dünyasında istediğiniz kadar pahalı güvenlik duvarları alın, günün sonunda o sistemi yönetecek olan insandır. Ve insan, güvenliğin her zaman en zayıf halkasıdır. Bu yüzden İnsan Kaynakları süreçleri, bir BT denetçisinin en çok eşelediği yerlerden biridir. Bu süreci bir çalışanın yaşam döngüsü olarak üç aşamada ele alırız:

### 1. Kapıdan İçeri Girerken (İşe Alım)

Kritik bir finansal pozisyona veya veri tabanı yöneticiliğine birini alıyorsanız, o kişinin geçmişini (background check) mutlaka taramalısınız. Gırtlağına kadar borca batmış, kredi skoru yerle bir olmuş birisini bankanın para transfer sistemlerinin başına oturtursanız, o kişiyi suça teşvik etmiş olursunuz. Referanslar elbette önemlidir, adayın işi yapabildiğini doğrular ancak bunun bir akraba kayırmacılığına dönüşmemesi gerekir. 

Aday kapıdan girerken gizlilik antlaşmaları (NDA) imzalatılır ve kendisine bir **Çalışan El Kitabı (Employee Handbook)** verilir. Bu kitapçıkta kurumun etik değerleri, sistemlerin kabul edilebilir kullanım politikaları yazar. Çalışan bunu okuyup imzaladığında, ileride bir veri sızıntısı yaptığında "*Benim kurallardan haberim yoktu*" diyerek hukukî sorumluluktan kaçamaz.

### 2. İçeride Çalışırken (Zorunlu İzin Psikoloji)

Dolandırıcılığı önlemede en etkili yöntemlerden biri **Zorunlu İzin (Mandatory/Required Vacation)** politikasıdır. 

Şöyle düşünelim: Şirket içinde usulsüzlük (fraud) yapan, zimmetine para geçiren veya verileri manipüle eden bir çalışan, bu sistemin açığa çıkmaması için sürekli o çarkı çevirmek zorundadır. Tıpkı havada on tane tabak çeviren bir jonglör gibi, bir an bile duramaz. Eğer biz bu çalışanı yıla ardışık iki hafta zorunlu izne çıkarır ve **sistemlere uzaktan erişimini tamamen kesersek**, o tabaklar yere düşer. 

Çalışanın yerine bakan kişi, sistemdeki o anormalliği, usulsüzlüğü mutlaka fark eder.

>[!info] Denetçi Bakış Açısı
>**Tespit Et:** "*Şirketteki kritik rollerde çalışan personel, yılda en az iki hafta kesintisiz izne çıkarılıyor mu ve bu sürede mantıksal erişimleri (VPN, e-posta) kapatılıyor mu?*" İçeriden gelen dolandırıcılıkları (insider threat) bulmanın en iyi yolu budur. <br>
>
>**Değerlendir:** "*İçeriden kaynaklı dolandırıcılığı (insider fraud) tespit etmek için en iyi yöntem nedir?"* sorusunun denetimdeki karşılığı her zaman **Zorunlu İzin** veya **Görev Rotasyonu (Job Rotation)**'dur.

### 3. Kapıdan Çıkarken (İşten Çıkarma - Termination)

Bir çalışan işten ayrıldığında veya çıkarıldığında ilk yapılması gereken şey, sistem erişimlerinin (mantıksal yetkiler) ve fiziksel giriş kartlarının **derhal** iptal edilmesidir. Cihazlar teslim alınmalı ve İK tarafından bir çıkış mülakatı (exit interview) yapılmalıdır.


---

## Değişim Yönetimi (Change Management)

Kurumlar yaşayan organizmalardır. Sistemler alınır, eskiyenler atılır, yazılımlar güncellenir. Bu değişiklikler rastgele yapılamaz. Değişim yönetimi, en temelinde **dokümantasyon** ve **yönetim onayı (top-down approach)** ile ilerler. Ne değişecek, riskleri neler, geri dönüş planı (rollback) var mı soruları cevaplanmadan canlı sistemde değişiklik yapılamaz.

---

## Dış Kaynak Kullanımı (Outsourcing) ve Üçüncü Taraf Yönetimi

Kurumlar her işi kendileri yapamazlar, bazı hizmetleri dışarıdan alırlar (outsourcing). Bu karar yönetim kurulunun da onayını gerektiren stratejik bir karardır.

- **Insource**: İşin tamamen şirket içi personelle yapılmasıdır.
- **Outsource**: İşin üçüncü bir partiye (taşerone) verilmesidir.
- **Onsite / Offsite**: Taşeronun kurum içinde (onsite) veya kurum dışında (offsite) çalışmasıdır.
- **Offshore**: Hizmetin bambaşka bir coğrafyadan (örn: Hindistan'dan) alınmasıdır. Bulut bilişmi de doğası gereği bir üçüncü taraf hizmetidir.

### Üçüncü Taraf (Third-Party) Riskleri

Hizmeti dışarıya vermek riski dışarıya vermek anlamına gelmez Bir bulut sağlayıcısı hacklendiğinde ve müşteri verilerimiz çalındığında, gazetelerde bulut firmasının değil, **şirketimizin adı** yazar. İtibar riski (reputational risk) devredilemez.

1. **SLA (Service Level Agreement - Hizmet Seviyesi Sözleşmesi)**: Hizmetin ne kadar sürede verileceği (örn: "Telefon 5 dakikada açılacak"), kesinti durumunda ne kadar ceza/tazminat kesileceği SLA ile belirlenir. SLA maddeleri içeride **KPI** olarak ölçülmelidir. Taşeronla aramızdaki hukukî kalkandır. Ancak SLA bizi finansal olarak korusa da itibarımızı kurtarmaz.
2. **Denetim Raporları**: Verilerimizi emanet ettiğimiz o taşeron şirket gerçekten güvenli mi? Gidip Hindistan'daki ofisi kendi gözlerimizle denetleyemeyeceğimize göre, onlardan uluslararası bağımsız denetim raporları isteriz. Amerikan standartlarında **SOC 1, SOC 2, SOC 3** raporları veya globalde **ISO 27001** sertifikaları, karşı tarafın kurumsal olgunluğunu kanıtlayan pasaportlardır.

---

## BT Performans İzleme ve Raporlama

*Ölçemediğin hiçbir şeyi yönetemezsin.* Yönetişim kuralları koyar, yönetim ise bu kuralların işleyip işlemediğini Metrikler ve KPI'lar (Temel Performans Göstergeleri) ile ölçer. Performansı optimize ederken **CSF (Critical Success Factors - Kritik Başarı Faktörleri)** belirlenir. (Örn: "*Başarılı sayılmamız için SLA uyumunun* en az %99 olması şarttır.")

### Performans ve Kalite Metodolojileri

- **PDCA (Plan-Do-Check-Act)**: Deming döngüsü olarak bilinen sürekli iyileştirme felsefesidir. Önce planla, sonra uygula, sonuçları kontrol et, eğer sapma varsa düzeltici aksiyon al.
- **Agile Metodoloji**: Eski usul "Şelale (Waterfall)" projelerinde 3 yıllık devasa ve katı planlar yapılırdı. Agile ise projeyi 2-4 haftalık kısa döngülere (Sprint) böler. Amaç, yolda değişen müşteri ihtiyaçlarına ve pazar koşullarına hızla uyum sağlamaktır.
- **[[6 Sigma|Six Sigma]] (Altı Sigma)**: Hataları milyonda 3.4 seviyesine indirmeyi hedefleyen istatistiksel bir ölçüm felsefesidir. Kusurları ortadan kaldırmaya ve süreçteki sapmaları sıfırlamaya odaklanır.
- **Benchmarking (Kıyaslama)**: Kendi içimizde iyi olduğumuzu düşünebiliriz ama dünyada durum ne? Benchmarking, kurumun kendi metriklerini sektördeki rakiplerle veya en iyi uygulamalarla kıyaslayarak nerede durduğumuzu gösterir.

### Kalite Güvencesi (QA) vs Kalite Kontrol (QC)

- **Kalite Güvencesi (QA)**: Sürece bakar. "*İşi doğru yöntemlerle, standartlara uyarak mı yapıyoruz?*" sorusunun cevabıdır. Proaktiftir, hata oluşmadan engellemeye çalışır.
- **Kalite Kontrol (QC)**: Çıkan nihai ürüne bakar. "*Yazdığımız kodda veya ürettiğimiz domateste bir hata var mı?*" sorusunun cevabıdır. Reaktiftir, ürünü test eder.

Günümüzde devasa veri setleriyle eğitilmiş büyük dil modelleri ve görüntü işleme teknolojileri, kodlardaki güvenlik açıklarını veya üretim bandındaki hataları insandan çok daha kusursuz bulabildiği için, geleneksek Kalite Kontrol (QC) rolleri hızla yapay zekâya devredilmektedir.


