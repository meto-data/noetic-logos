---
title: 'Domain 3B: Bilgi Sistemleri Uygulaması (System Implementation), Test Metodolojileri ve Geçiş Stratejileri"'
created: " 2026-07-17"
---
# Domain 3B: Bilgi Sistemleri Uygulaması (System Implemantation)

Önceki aşaamlarda bir iş problemine (Business Case) dayanarak projemizi tasarladık, [[cisa-sdlc|SDLC]] metodolojilerinden birini seçtik ve sistemimizi geliştirdik. Şimdi, işin en kritik ve gerçek dünyayla yüzleştiği aşamaya, yani **Uygulama (Implementation)** fazına geçiyoruz. 

## Testing Sorusu: "Doğru Ürünümü mü İnşa Etti?"

Yazılım testlerinde "sistemde bug var mı?" soruları önemli bir yer tutsa da, *testin asıl amacı sistemin en baştaki* **iş gereksinimleriyle** *eşleştiğini ve hedeflenen değeri ürettiğini kanıtlamaktır.* Testleri, kodun en derinliklerinden başlayıp son kullanıcının ekranına kadar uzanan bir yolculuk olarak düşünebiliriz. 

Bu yolculukta kodun nasıl yazıldığına ve test edildiğine bağlı olarak iki temel test yaklaşımı vardır:

- **Aşağıdan Yukarıya (Bottom-Up)**: Geliştirilen kodun en küçük yapıtaşından (modüllerinden) başlanarak, parçaların birleştirilip en tepedeki bütüne (sisteme) doğru test edilmesidir. Test sonuçları adım adım gözden geçirilerek hata raporları temizlenir.
- **Yukarıdan Aşağıya (Top-Down)**: Sistemin en üst seviyesindeki genel mimarisinden başlanarak alt detaylara ve spesifik modüllere doğru inilen test yaklaşımıdır.


---

## Detaylı CISA Test Metodolojileri Rehberi

### 1. Alpha & Beta Testing ([[cisa-uat|UAT]] / Pre-release Testing)
Yazılımın canlıya alınmadan önceki son kabul aşamalarındandır.

#### Alpha Testing (İç Test)
- Yazılım, **kurum içindeki kullanıcılar (BT ekipleri, iç test personeli vb.)** tarafından test edilir. Sistem testi seviyesindedir.
- Büyük hataları (showstopper) erken aşamada yakalamak **amaçlanır**.

#### Beta Testing (Dış Test / UAT)
- Kurum dışındaki **sınırlı sayıda gerçek kullanıcı** ile gerçek hayat koşullarında yapılır Kullanıcı Kabul Testi'nin ([[cisa-uat|UAT]]) bir türüdür.
- Gerçek dünya senaryolarında sistemin nasıl tepki verdiğini görmek **amaçlanır**.

### 2. Pilot Testing
- *Pilot test, Limited scope testing, Proof of Concept (PoC)*
- Sistemin **belirli bir bölümünü** (örn: sadece bir departmanı veya bir şubeyi) hedef alan, kısıtlı kapsamda yapılan erken aşama testidir. Diğer sistem testlerinin yerine geçmez.
- **Amaç**; sistemi tüm organizasyona yaygınlaştırmadan önce gerçek çalışma ortamında olası hataları, performans sorunlarını ve kullanıcı geri bildirimlerini tespit etmektir.
- Pilot test, diğer sistem testlerinin (unit, integration, system, UAT vb.) yerine geçmez; bunların tamamlanmasının ardından yapılan ek bir doğrulama aşamasıdır.
- **Önemli Not: Proof of Concept (PoC)**, pilot testten **daha erken** gerçekleştirilen bir çalışmadır. Amacı, ürünün veya çözümün temel fikrinin ve teknik uygulanabilirliğinin kanıtlanmasıdır. Genellikle **çok sınırlı özelliklerle** yürütülür ve başarılı olması durumunda pilot teste geçilir.

>[!info] **Örnek CISA Senaryosu**
>Yeni bir ERP sistemi, tüm kuruma yaygınlaştırılmadan önce yalnızca finans departmanında pilot olarak devreye alınır. Pilot süreç başarıyla tamamlandıktan sonra sistem organizasyon genelinde kullanıma açılır.


### 3. White Box Testing (Açık/Beyaz Kutu Testi)
* *White box, Logic paths, Unit testing, Integration testing*
* **Kod ve program mantığı** doğrudan test edilir. Kodun iç yapısı tamamen şeffaftır. Kodun içindeki `If-Else` blokları, döngüler (`loops`) ve mantıksal yollar kontrol edilir. Tüm yolları test etmek pratik olarak imkânsız olduğundan oldukça pahalı bir testtir.

> [!tip] CISA Sınav İpucu
> Soruda **"Kod, mantık (logic), iç yapı (internal structure)"** vurgulanıyorsa doğrudan **White Box** seçeneğine yönelin.


### 4. Black Box Testing (Kapalı/Kara Kutu Testi)
- *Black box, Functional testing, No code knowledge*
- **Kod bilinmeden** yapılan testtir. Sistem dışarıdan kapalı bir kutu gibidir. Testi yapan kişi sadece sisteme bir girdi verir ve beklenen **[[cisa-fonksiyonel|fonksiyonel çıktıyı]]** kontrol eder. Entegrasyon ve [[cisa-uat|UAT]] çok yaygın kullanılır.

>[!info] Örnek CISA Senaryosu 
>Kullanıcı giriş ekranına doğru şifre girildiğinde sistemin ana sayfayı açıp açmadığının test edilmesi (kodun arkada ne yaptığıyla ilgilenilmez).


> [!tip] CISA İpucu
> Soruda **"Koddan bağımsız (independent of code), fonksiyonel çıktı"** ifadeleri geçiyorsa cevap **Black Box** testidir.



### 5. Function / Validation Testing
- *Validation testing, Requirements traceability*
- Sistem tasarımının ve nihai ürünün **en baştaki gereksinimlere (requirements) uygunn olup olmadığını** test eder. Temel sorusu şudur: *Doğru ürünü mü yapıyoruz?*
- *Örnek CISA Senaryosu:* Müşteri gereksinim dokümanında yer alan "PDF rapor çıktısı alma" özelliğinin sistemde gerçekten var ve çalışır durumda olduğunun doğrulanması.


### 6. Regression Testing (Regresyon/Gerileme Testi)
- *Regression testing, Re-test, Same test data*
- Sistemde yapılan bir değişiklikten sonra, **önceden doğru çalışan işlevlerin hâlâ doğru çalışıp çalışmadığını** doğrulamak için yapılan testtir. Aynı test senaryoları ve aynı test verileri (same test data) tekrar koşulur.
- **Amaç**, yeni değişikliğin mevcut sistemi bozmadığını doğrulamaktır.

>[!info] Örnek CISA Senaryosu
>İnsan kaynakları sisteminde yalnızca **şifre sıfırlama** modülü güncellenmiştir. Denetçi, değişikliğin beklenmeyen yan etkiler oluşturmadığından emin olmak için **kullanıcı girişi, maaş bordrosu oluşturma ve izin yönetimi** gibi daha önce sorunsuz çalışan kritik işlevler için regresyon testi yapıldığına dair kanıt talep eder.

> [!tip] CISA İpucu
> Soruda **"Değişiklik/yama sonrası (after change/patch) yapılan tekrar test"** vurgusu varsa cevap daima **Regression** testidir.


### 7. Parallel Testing (Paralel Test)
- *Parallel testing, Old vs New system*
- **Eski sistem ile yeni sistem aynı anda** çalıştırılır ve aynı veriyi işler. İki sistemin ürettiği **çıktılar karşılaştırılır** ve tutarlılığı doğrulanır.

>[!info] Örnek CISA Senaryosu
>Eski muhasebe yazılımı ile kurulan yeni muhasebe yazılımına aynı ayın yevmiye kayıtları girilir. İki sistemin de kuruşu kuruşuna aynı mizan raporunu üretip üretmediği karşılaştırılarak test edilir.

> [!tip] CISA İpucu
> Soruda **"Eski ve yeni çıktılarının karşılaştırılması (comparison)"** geçiyorsa cevap **Parallel** testtir.


### 8. Sociability Testing (Sosyallik/Ortam Uyumu Testi)
- *Compatibility testing, Environment testing*
- Yeni sistemin, aynı ortamı paylaşan diğer sistemlerle **uyumlu ve sorunsuz şekilde birlikte çalışıp çalışmadığını** doğrular. Amaç, yeni sistemin mevcut sistemlerde çakışma, performans düşüşü veya beklenmeyen sorunlara neden olmadığını göstermektir.

>[!info] Örnek CISA Senaryosu
>Şirketin yeni kurduğu web tabanlı müşteri portalının, aynı uygulama sunucusu ve veri tabanını kullanan mevcut CRM sistemiyle birlikte sorunsuz çalıştığı; her iki sistemin de birbirinin performansını veya işleyişini olumsuz etkilemediği test edilir.

> [!tip] CISA İpucu
> Soruda **"shared environment"**, **"coexist with other systems"**, **"environment impact"**, **"other applications"**, **"compatibility with existing systems"** gibi ifadeler geçiyorsa akla **Sociability Testing** gelmelidir.


---

## CISA Mini Özet Tablosu

| Karşılaşılan Anahtar Kelime                       | En Doğru Test Türü            |
| :------------------------------------------------ | :---------------------------- |
| **Kod / Mantık / Internal Structure**             | White Box Testing             |
| **Koddan Bağımsız / Fonksiyonel Çıktı**           | Black Box Testing             |
| **Gereksinimlere Uygunluk / "Doğru Ürün"**        | Function / Validation Testing |
| **Değişiklik/Yama Sonrası Tekrar Test (Re-test)** | Regression Testing            |
| **Eski–Yeni Çıktı Karşılaştırma**                 | Parallel Testing              |
| **Ortam Uyumu / Diğer Sistemleri Bozma Riski**    | Sociability Testing           |
| **Gerçek Kullanıcı / Gerçek Hayat Koşulları**     | Beta / UAT Testing            |

---

## Diğer Teknik Test Yöntemleri

- **Arayüz / Entegrasyon Testi (Interface / Integration Testing):** İki veya daha fazla bileşenin/modülün birbiriyle olan iletişimini test eder. (Örn: İK sisteminde personelin izin günü güncellendiğinde, bu bilginin Maaş/Payroll sistemine hatasız akıp akmadığının kontrolü).
- **Yük/Hacim Testi (Load / Volume Testing):** Sistem sınırlarının test edilmesidir. Örneğin, 100 eşzamanlı kullanıcıyı kaldıran bir sisteme anlık 500 istek göndererek nerede tıkanacağını (bottleneck) görmek.
- **Veri Bütünlüğü Testi (Relational & Referential Integrity):** Veri tabanındaki tablolar arasındaki ilişkilerin doğru korunduğunu doğrular. Amaç, geçersiz referansların (orphan records) ve veri tutarsızlıklarının oluşmasını önlemektir.

---
## Veri Bütünlüğü ve ACID Prensipleri

Bir sistemin arayüzü ne kadar mükemmel tasarlanırsa tasarlansın, arkasındaki veri tabanı tutarsızsa o sistem güvensizdir. Veri tabanlarında her bir işlemin (transaction) güvenle tamamlanması için uyması gereken 4 evrensel kural vardır (**ACID Prensipleri**):

1. **Atomicity (Atomiklik / Ya Hep Ya Hiç):** Bir işlem ya uçtan uca tamamen gerçekleşmeli ya da hiç gerçekleşmemelidir, yarıda kesilemez. 
	- *Örnek:* Hesabımızdan para çıktı ama elektrik kesildiği için alıcının hesabına geçmedi. Sistem bu işlemi anında iptal eder (rollback) ve parayı hesabımıza geri koyar.
2. **Consistency (Tutarlılık):** Veri tabanı, bir işlemden önce hangi tutarlı durumdaysa, işlem başarıyla tamamlandıktan sonra da kurallara uygun, geçerli ve tutarlı bir diğer duruma geçmelidir.
3. **Isolation (İzolasyon / Yalıtım):** Aynı anda gerçekleşen birden fazla işlem (transaction) birbirinden tamamen ayrıştırılmalıdır. Bizim para transferimiz, yanımızdaki kişinin yaptığı transferle arkada birbirine karışmamalı.
4. **Durability (Dayanıklılık):** Bir işlem tamamlanıp kullanıcıya "İşlem Başarılı" dendiği andan itibaren, sistem çökse veya elektrikler gitse bile o veri kalıcı olarak veri tabanına mühürlenir, geri alınamaz.


---

## Sistem Göçü (Migration) ve Geçiş Stratejileri

Yeni bir bilgi sistemine geçişte en kritik süreç, mevcut verilerin **eksiksiz, doğru ve güvenli** şekilde yeni ortama aktarılmasıdır (**Data Migration**). Göç sürecinde oluşabilecek hatalar iş kesintisine veya veri kaybına neden olabileceğinden, önceden test edilmiş bir **Rollback (Geri Dönüş) Planı** bulunmalıdır.

Sistemin canlı ortama alınmasında üç temel **Changeover** stratejisi kullanılır:

1. **Paralel Geçiş (Parallel Changeover)**: Eski sistem ile yeni sistem aynı anda, yan yana çalıştırılır. Veriler her iki sisteme de girilir ve çıktılar karşılaştırılır (Parallel Testing). Yeni sistemin kusursuz çalıştığından emin olunduğunda eski sistem kapatılır. **En güvenli ama maliyeti en yüksek (iki sistemi aynı anda yaşatma) yöntemdir**.
2. **Fazlı Geçiş (Phased Changeover)**: Geçiş, modül modül veya departman departman yapılır. Önce İK modülü geçer, o oturunca maaş modülü geçer. Riski zamana yayar.
3. **Anlık/Doğrudan Geçiş (Abrupt / Direct Cutover)**: Cuma akşamı eski sistemin fişi tamamen çekilir, Pazartesi sabahı herkes doğrudan yeni sistemi kullanmaya başlar. **En ucuz yöntemdir ancak geri dönüşü çok zor olduğu için riski en yüksek (en tehlikeli) yöntemdir.**

> [!info] Denetçi Bakış Açısı
> **Değerlendir:** "Sistem göç planının (Migration Plan) içerisinde detaylı bir Rollback (Geri Dönüş) prosedürü tanımlanmış mı? Sistem geçişi sırasında oluşabilecek veri kayıplarını tespit etmek için eski ve yeni sistem arasında veri mutabakatı (Data Reconciliation) yapılıyor mu?"


***

## Eğitim, Sertifikasyon ve Akreditasyon

Sistemi yeni ortama taşıdıktan sonra, eski sistemi yönetenlerin zihnindeki o değerli tecrübenin (know-how) yeni sistemi yönetecek ekiplere aktarılması şarttır. **Bilgi Transferi** ve uç kullanıcı eğitimleri yapılmadan sistem tam anlamıyla göç etmiş sayılmaz.

Sistem canlıya alındıktan sonra, belirlenen güvenlik ve kalite standartlarına uygun olduğunun bağımsız bir otorite veya süreç tarafından onaylanmasına **Sertifikasyon (Certification)** denir. Bu sertifikasyon raporlarına bakarak, üst yönetimin "*Evet, ben bu sistemin taşıdığı riskleri kabul ediyorum ve kurumsal olarak kullanılmasına resmen onay (yetki) veriyorum*" ise **Akreditasyon (Accreditation)** adı verilir.


***

## Canlı Sonrası İnceleme (Post-Implementation Review - PIR)

Uygulama canlıya alındı, kullanıcılar sistemi kullanıyor. Peki her şey sahiden yolunda mı? Sistem vadettiği değeri sağladı mı? Bu soruların cevabını vermek için sistem canlıya alındıktan belirli bir süre sonra -genellikle 3-6 ay arası- **Post-Implementation Review (PIR)** yapılır.

PIR aşamasında sistemin baştaki **Kritik Başarı Faktörlerini (CSF)** karşılayıp karşılamadığı ölçülür. (Örn: Yeni sistem sonrası işlem süresi gerçekten %30 azaldı mı? ROI tutturuldu mu? Kullanıcılar memnun mu?). Eğer ROI tutmadıysa, bunun kök nedenleri analiz edilir ve bir sonraki projelerde aynı hataları yapmamak için öğrenilmiş dersler (lessons learned) olarak proje ofisine (PMO) raporlanır.


> [!question]- Kendini Sına 1: Post-Implementation Review (PIR)
> Bir organizasyon, yeni devreye aldığı ERP sisteminin canlı sonrası incelemesini (PIR) yapmaktadır. Bu aşamada bilgi sistemleri denetçisinin (IS Auditor) en çok ilgileneceği konu aşağıdakilerden hangisidir?
> A) Sistem testlerinin (Unit ve Integration) kim tarafından yapıldığı
> B) Sistemin başlangıçtaki iş vakasında (Business Case) belirtilen hedeflere ulaşıp ulaşmadığı
> C) Geçiş (Migration) sırasında eski sistemin ne zaman kapatıldığı
> D) Geliştirici ekibe verilen eğitimlerin süresi
> 
> **Cevap: B.** PIR'ın varoluş amacı, projenin en başındaki vaatlerin (Business Case ve ROI) gerçekleşip gerçekleşmediğini ölçmektir. Diğer şıklar projenin daha önceki operasyonel fazlarında incelenmesi gereken konulardır.

<br>

> [!question]- Kendini Sına 2: Üretim Verisiyle UAT Testi Riskleri
> Bir kuruluş, satın alacağı yeni İK sistemini test etmek amacıyla tedarikçiye (vendor) üretim ortamından (production) alınmış gerçek çalışan veri setini vermiştir. IS denetçisinin **ÖNCELİKLİ (PRIMARY)** endişesi aşağıdakilerden hangisi olmalıdır?
> A) Veri setinin güncel olmaması
> B) Veri setinin temsil edici olmaması
> C) Veri setinin maskeleme/sanitization (arındırma) yapılmadan paylaşılmış olması
> D) Veri setinin tam (complete) olmaması
> 
> **Cevap: C.** Gerçek çalışan verilerinin (maaşlar, kişisel bilgiler, TC Kimlikler) maskeleme veya temizleme yapılmadan üçüncü taraf tedarikçilerle paylaşılması, KVKK ve GDPR açısından en kritik gizlilik (confidentiality) ihlalidir. Bu veriler verilmeden önce kesinlikle maskelenmeli (sanitized) veya yapay olarak üretilmiş temsili veriler kullanılmalıdır.