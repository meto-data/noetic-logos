---
domain: 5A-5B
title: "Domain 5A & 5B: Bilgi Varlıklarının Korunması ve Güvenlik Olay Yönetimi"
created: 2026-08-14
---
# Domain 5: Bilgi Varlıklarının Korunması ve Güvenlik Olay Yönetimi

İşbu domain, CISA sınavının **%26'lık en büyük ve en kritik bölümünü** oluşturuyor. Kurumların en değerli varlığı olan **enformasyonun** mantıksal, fiziksel, kriptografik ve operasyonel boyutlarda nasıl korunacağını kapsıyor.

Güvenlik; tıpkı araba veya uçak kullanmak gibi kâğıt üzerinde kuralları, standartları ve çerçeveleri (frameworks) uluslararası düzeyde yazılmış bir disiplindir. Bir BT denetçisinin temel görevi; **Gizlilik (Confidentiality), Bütünlük (Integrity) ve Erişilebilirlik (AVailability) - CIA Triad** doğrultusunda kurulan kontrollerin yeterliliğini, etkinliğini ve yasal regülasyonlarla (KVKK, GDPR, HIPAA) uyumunu değerlendirmektir.

---

## 1. Enformason Varlıklarının Güvenliği, Rolleri ve Yönetişimi

Bir sunucunun kendisi sadece bir donanım maliyetidir. O sunucuyu milyonlarca dolar değerinde kılan şey, **içinde barındırdığı veri/enformasyon varlığıdır** (kredi kartı verileri, hasta sağlık kayıtları, sigorta bilgileri, ticarî sırlar vb.). Güvenlik sistemleri donanımı değil, doğrudan o enformasyon varlığını korumak için tasarlanır.

### Sorumluluk Matrisi ve Rol Ayrıım
- **Veri Sahibi (Data Owner)**: Genelde iş birimi yöneticisidir (örn: Pazarlama Direktörü). Verinin gizlilik ve kritiklik derecesini belirler, kimlerin erişeceğine karar verir.
- **Veri Emanetçisi (Data Custodian)**: Veri sahibinin belirlediği kuralları BT altyapısında uygulayan teknik ekiptir (örn: Sistem Yöneticisi / DBA). Sunucuları ayakta tutar, yedekleri alır, teknik erişim listelerini işletir.
- **Veri Kullanıcısı (Data User)**: Operasyonel işlerini yürütmek için veriyi okuyan ve işleyen çalışanlardır.
- **Bilgi Güvenliği Yöneticisi (CISO / ISO)**: Güvenlik politikalarını hazırlar, riskleri değerlendirir ve bağımsız güvenlik kontrollerini denetler.

>[!important] CISA İpucu: Conflict of Interest (Çıkar Çatışması)
>CISO / ISO kesinlikle CIO'ya (BT Müdürüne) veya operasyonel sistem yöneticilerine raporlamamalıdır. Doğrudan CEO'ya veya Yönetim Kuruluna raporlamalıdır. Ayrıca CISO, günlük değişiklik taleplerini (change requests) tek tek onaylayan bir icra makamı değil, politikaları belirleyen yönetsel bir roldür.



### Varlık Sınıflandırması (Asset Classification)

Güvenlik bütçesini ve kontrollerini doğru yönetmenin **EN İYİ temeli Varlık Sınıflandırması**dır. Veriler kritiklik ve hassasiyet derecelerine göre kategorize edilir (Kamuya Açık, Hizmete Özel, Gizli, Çok Gizli). 

Sınıflandırma sonucunda **Temel Güvenlik Kontrolleri (Baseline Controls)** belirlenir. Örneğin, kamuya açık bir veri şifresiz saklanabilirken, "Gizli" veri sınıfındaki kayıtların yedekleme teyplerinde şifrelenmesi zorunlu kılınır.

>[!info] Denetçi Bakış Açısı
>**Değerlendir:** "Kurumda bilgi varlıklarına etiketleme (labeling) yapılmış mı?" <br>
>Etiketleme, çalışana verinin hassasiyetini gösterir. Veri etiketi olan bir doküman yetkisiz sızdırıldığında, çalışanın "*bilmiyordum*" deme şansı ortadan kalkar ve uygulanacak ceza yaptırımlarının yasal dayanağını oluşturur.


---

## 2. Yasal Düzenlemeler, Mahremiyet (Privacy) ve Veri Egemenliği

Dünyanın her yerinde veri koruma kanunları (Türkiye'de KVKK, AB'de GDPR, ABD'de sağlık verileri için HIPAA) temel olarak aynı ilkeleri amaçlar: Verinin gizli saklanması, izinsiz paylaşılmaması ve yurt dışına çıkarılmaması.

Mahremiyet incelemesinde denetçi şu 6 alana odaklanır:
1. Kişinin eylemlerinin (hareketlerinin ve davranışlarının) mahremiyeti.
2. İletişiminin mahremiyeti.
3. Görsellerinin ve verilerinin mahremiyeti.
4. Düşünce ve hislerinin mahremiyeti.
5. Mekânının (Konum ve coğrafî yerinin) mahremiyeti.
6. Şahsiyetinin \[biyolojik, genetik ve beden bütünlüğünün\] mahremiyeti (biyometrik gibi, parmak izi gibi).

### Sınır Ötesi Veri Aktarımı (Data Sovereignty)

Bir kurum, İK veya finans sistemini başka bir ülkedeki üçüncü taraf bulut sağlayıcıda (third-party cloud) barındırmayı seçtiğinde, veri ilgili ülkenin veri egemenliği (data sovereignty) yasalarına tabi olur. BT Denetçisi böyle bir durumda **İLK olarak Gizlilik Etki Analizi (Privacy Impact Assessment - PIA)** yapılmasını önermelidir.

---

## 3. Fiziksel ve Çevresel Güvenlik Kontrolleri

Fiziksel güvenlik kontrolleri üç ana seviyede ele alınır:

- **Yönetsel Kontroller**: Ziyaretçi kayıt prosedürleri (user registration), güvenlik politikaları.
- **Teknik Kontroller**: Giriş ekranları, biyometrik okuyucular, kartlı geçiş sistemleri.
- **Fiziksel Kontroller**: Çitler, kilitli kapılar, hareket sensörleri, fizikî güvenlik görevlileri, CCTV kameraları.
()