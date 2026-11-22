---
title: "Domain 3A: Bilgi Sistemleri Edinimi, Geliştirilmesi ve Uygulanması (Proje Yönetimi ve SDLC)"
created: " 2026-07-14"
---
# Proje Yönetişimi ve Yönetimi (Project Governance & Management)
Bilgi sistemleri dünyasında hiçbir hizmet kendi kendine ortaya çıkmaz. Kurumun bir ihtiyacını karşılamak, yeni bir yazılım geliştirmek veya dışarıdan bir sistem satın almak için mutlaka bir proje başlatılması gerekir. Ancak evinize televizyon alır gibi kuruma yazılım alamazsınız. **Bu süreçlerin çok ciddi bir yönetişim şemsiyesi altında, stratejik hedeflerle uyumlu bir şekilde yürütülmesi şarttır.**

Her şey **Proje Yönetişimi (Project Governance)** ile başlar. 

Yönetim Kurulu, projelerin organizasyonun stratejik hedefleriyle uyumlu yürütülmesini sağlamak için karar alma ve gözetim mekanizmaları kurar. **Hangi projelerin Agile (Çevik), hangilerinin geleneksek yöntemlerle yapılacağı veya hangi bütçe aşımlarında kimden onay alınacağı yönetişim seviyesinde belirlenir.**

Kurulsam genellikle tek bir proje yürütmezler. Ortak bir amaca hizmet eden (örneğin tüm veri merkezinin başka bir ülkeye taşınması) devasa dönüşümlere **Program Yönetimi (Program Management)** denir. Programın altında ise veri tabanlarının taşınması ayrı bir proje, ağ altyapısının kurulması ayrı bir proje olarak yer alır. *Şirketteki tüm projelerin risk-getiri dengesine göre birlikte değerlendirilip önceliklendirildiği çatı*ya ise **Proje [[cisa-portfoy|Portföy]] Yönetimi (Project Portfolio Management)** adı verilir. *Tüm bu yapıların merkezî olarak izlendiği ve yönetildiği departman* **PMO (Project Management Office - Proje Yönetim Ofisi)** olarak adlandırılır.

>[!example] **Örnek CISA Senaryoları:**
> - **Proje Yönetişimi:** Bir bankada çekirdek sistem dönüşüm projesinin IT Steering Committee tarafından düzenli izlenmesi.
> - **Proje Portföy Yönetimi:** Aynı anda yürüyen ERP, CRM ve Cybersecurity projelerinin risk–getiri dengesine göre sıralanması.
> - **Program Yönetimi:** ERP geçişi kapsamında altyapı, uygulama ve eğitim projelerinin tek bir program altında yönetilmesi.

## Proje Organizasyon Yapıları
Projeleri sahada yürütürken kurumun kültürüne göre üç farklı organizasyon yapısı karşımıza çıkar:

1. **Proje Bazlı Organizasyon (Project-Structured Organization)**: Proje yöneticisinin tam yetkiye (bütçe, personel, planlama) sahip olduğu, sırf o proje için kurulmuş özel ekiplerin yer aldığı yapıdır. *(Örnek CISA Senaryosu: Sadece proje için kurulmuş özel bir ekip ve bütçe.)*
2. **[[cisa-fonksiyonel|Fonksiyonel]] Organizasyon (Functional Organization)**: Proje yöneticisinin aslında resmî bir yetkisinin olmadığı, daha çok danışman (advisory) gibi çalıştığı yapıdır. Çalışanlar projeye katkı sağlasa da günün sonunda kendi departman yöneticilerine (örn: Finans Müdürü, IT Müdürü) raporlarlar. *(Örnek CISA Senaryosu: IT, Finans ve Operasyon ekiplerinin kendi yöneticilerine raporladığı yapı.)*
3. **Matris Organizasyon (Matrix Organization)**: İkisinin karmasıdır. Çalışanlar hem proje yöneticisine hem de kendi departman yöneticisine raporlar. Yetkiler paylaşılmıştır. *(Örnek CISA Senaryosu: Bir yazılımcının hem IT Manager’a hem Project Manager’a raporlaması.)*


## Kritik Proje Rolleri ve Sorumluluklar

**Bir denetçi olarak projeyi incelerken kimin neyden sorumlu olduğunu çok iyi bilmeliyiz!** [[3_cisa-domain-2a#Görevler Ayrılığı İlkesi (Segregation of Duties - SoD)|Görevler ayrılığı (SoD)]] burada da geçerlidir.

#### Proje Yürütme Komitesi (Project Steering Committee)
Projenin yönünü belirleyen, bütçe aşımlarında projeyi durdurma veya devam ettirme gibi kritik kararları alan ve üst düzey paydaşlardan oluşan kuruldur. Yönetim Kurulu adına hareket eder.

> **Örnek CISA Senaryosu:** Bütçe aşımı olduğunda projenin devamı veya durdurulması kararının bu komite tarafından verilmesi.

#### Proje Sponsoru (Project Sponsor)
Projeye para veren, finansal kaynağı sağlayan ve iş tarafında (business) nihai sorumluluğu taşıyan üst düzey yöneticidir. Projenin organizasyona katacağı değerin asıl sahibidir.

> **Örnek CISA Senaryosu:** Kredi sistemini yenileyen bir projede Retail Banking Director’ın sponsor olması.

#### Kullanıcı Yönetimi (User Management)
Projenin asıl sahibidir (Assumes ownership). Sistemin gereksinimlerini belirleri, testleri yapar ve günün sonunda "Evet, bu ürün bizim işimizi çözüyor" diyerek Kullanıcı Kabul Testini (UAT - User Acceptance Testing) onaylayan ekiptir.

#### Proje Yöneticisi (Project Manager)
Projenin günlük yönetiminden, zaman-bütçe-kapsam üçgeninin dengede tutulmasından sorumlu liderdir.

> **Örnek CISA Senaryosu:** Gantt chart’ları takip ederek gecikmeleri raporlayan kişi.


#### Sistem Geliştirme Yönetimi (Systems Development Management)
Donanım ve yazılım ortamlarının kurumun BT stratejisiyle uyumlu bir şekilde geliştirilmesinden, kurulmasından ve post-production (canlıya alındıktan sonra) bakımından sorumludur. (Örn: Yeni kredi yazılımı, mevcut Core Banking sistemine uyumlu mu?)

> **Örnek CISA Senaryosu:** Yeni kredi sistemi bankanın mevcut altyapısıyla uyumlu mu? denetimi.

#### Sistem Geliştirme Proje Ekibi (Systems Development Project Team)
Kendisine atanan geliştirme görevlerini yerine getirir, kullanıcılarla aktif iletişim kurar ve proje planındaki sapmaları proje yöneticisine bildirir.

> **Örnek CISA Senaryosu:** UAT sırasında hata fark edip Project Manager'a bildirmek.

#### Bilgi Güvenliği Sorumlusu (Security Officer / Team)
Projenin tüm yaşam döngüsü boyunca danışmanlık yapar. Güvenlik test planlarını inceler ve veri sınıflandırmasına uygun kontrollerin tasarlandığını garanti eder.

> **Örnek CISA Senaryosu:** Müşteri verisi içeren bir sistemde şifreleme (encryption) ve erişim kontrolü (access control) denetimi.

#### Bilgi Sistemleri Güvenlik Mühendisi (IS Security Engineer)
Güvenlik açıklarını belirleyerek mimarî tasarımlar yapar. Bu tasarımları yaparken iki temel kavramı kullanır:
- *Derinlemesine Savunma (Defense in Depth)*: Aynı hedefe yönelik üst üste bindirilmiş kontroller (Örn: Hem güvenlik duvarı \[firewall\], hem IPS, hem sunucu antivirüsü).
- *Genişlemesine Savunma (Defense in Breadth)*: Ağ, uygulama ve veri tabanı gibi farklı katmanların (seviyelerin) tamamında çok katmanlı güvenlik tasarlamak.

> **Örnek CISA Senaryosu:** Network + Application + Database seviyesinde çok katmanlı güvenlik tasarlamak.


>[!info] Denetçi Bakış Açısı
>**Değerlendir:** "*Projede bilgi güvenliği ekibi en başından (tasarım aşamasından) itibaren sürece dâhil edilmiş mi, yoksa ürün canlıya çıkmadan bir gün önce mi akıllarına gelmiş?*" Denetçinin en çok aradığı güvenlik kontrolü, güvenliğin projenin genlerince ([[cisa-sdlc|SDLC]]'nin en başına) işlenmiş olmasıdır.


---

# Proje Planlama, Maliyet ve Zaman Yönetimi

Bir projeye "*Hadi kod yazalım*" diyerek başlanmaz. Öncelikle ortada çözülmesi gereken bir iş problemi, yani bir **Business Case (İş Vakası)** olmalıdır. (Örn: Çalışanlar evden bağlanırken güvenlik riski oluşuyor). Business case onaylandıktan sonra, bu işin teknik ve finansal olarak yapılabilir olup olmadığını anlamak için **[[cisa-fizibilite-analizi|Fizibilite Analizi]] (Feasibility Study)** yapılır. "*VPN altyapısı kurabilir miyiz? Kurarsak faydası maliyetini geçer mi?*" soruları burada yanıtlanır.

Her şey uygunsa, projenin amaç, kapsam, sponsor ve yetkilerini resmî olarak tanımlayan **Proje Tüzüğü (Project Charter)** yayımlanarak proje resmî olarak başlatılır (Project Inıtation). Bu aşamada belirlenen hedefler mutlaka **SMART (Spesifik, Ölçülebilir, Erişilebilir, Gerçekçi ve Zaman Sınırları Olan)** olmalıdır.


## Maliyet ve Zaman Tahmin Yöntemleri

Projelerin maliyetini ve zamanını öngörmek için çeşitli yöntemler kullanılır:

- **Bottom-up (Aşağıdan Yukarıya)**: En küçük görevlerin (örn. bir yazılımcının aylık maliyeti) hesaplanıp yukarı doğru toplanmasıyla elde edilen en sağlıklı yöntemdir.
- **Function Point Analysis - FPA (Fonksiyon Noktası Analizi)**: Proje aşırı kompleksse, içinde yazılımcı sayısı, kod satırı, ekran sayısı gibi birden fazla parametre varsa yazılımın büyüklüğünü ve maliyetini ölçmek için bu istatistiksel yöntem kullanılır.
- **Software Size Estimation (Yazılım Boyut Tahmini)**: Daha çok tek bi paramtetre üzerinden yazılım büyüklüğünü ölçmeye yarar.

Zamanı ve işi yönetmek içinse projenin yönetilebilir küçük parçalara bölünmesi gerekir. Buna **WBS (Work Breakdown Structure - İş Kırılım Yapısı)** denir. (Örn: Tezt Fazı $\to$ Birim Testi $\to$ UAT -User Acceptance Testing-). Bu parçalar bir zaman çizelgesine döküldüğünde **Gantt Chart (Gantt Diyagramı)** ortaya çıkar.

Gantt diyagramı üzerindeki görevler birbirine bağlıdır. Proje süresini doğrudan belirleyen, üzerinde hiçbir esneme payı (float/slack) olmayan ve gecikmesi hâlinde tüm projeyi geciktirecek olan görevler zincirine **Kritik Yol (Critical Path)** denir.


> [!tip] CISA İpucu
> Proje devam ederken bütçenin %50'sini harcamış olabiliriz. Ancak bu %50'lik harcama ile işin gerçekten %50'sini mi bitirdik, yoksa sadece %30'u mu bitti? Planlanan ilerleme ile gerçek ilerlemeyi ve maliyeti kıyaslayan, projenin sağlığını en iyi ölçen tekniğe **Kazanılmış Değer Analizi (Earned Value Analysis - EVA)** denir.


---

# Sistem Geliştirme Yaşam Döngüsü (SDLC) ve Metodolojiler

Bir sistemin fikir aşamasından başlayıp kodlanması, test edilmesi, canlıya alınması ve sonrasındaki bakımına kadar geçen tüm aşamaların bütününe **[[cisa-sdlc|SDLC]] (System Development Life Cycle)** denir. Sistemler geliştirilirken ya organizasyonun bütünsel ihtiyaçlarına odaklanılır (Organization-centric) ya da doğrudan uç kullanıcının anketlerle belirlenen günlük ihtiyaçlarına odaklanılır (End-user centric).

> **Örnek CISA Senaryosu (SDLC):** Feasibility $\to$ Requirements $\to$ Design $\to$ Development $\to$ Testing $\to$ Implementation

## Geliştirme Metodolojileri

### Waterfall (Şelale) 
- Geleneksel yöntemdir. 
- Fizibilite $\to$ Test $\to$ Canlıya Alma şeklinde katı fazlarla ilerler.
- Bir faz bitmeden diğerine geçilmez. 
- Günümüzün dinamik dünyasında ihtiyaçlar yolda değiştiği için giderek terk edilmektedir.

### Iterative (Yinelemeli) & Agile (Çevik)
- Projeyi küçük, çalışılabilir parçalara (Sprint) böler.
- Her iki haftada bir kullanıcının önüne çalışan bir prototip konur ve geri bildirimlerle yola devam edilir.

### Object-Oriented (Nesne Yönelimli)
- Java veya Python gibi dillerde kullanılır. 
- Sistemdeki her varlık bir nesne (object) olarak tanımlanır. (Örn: Bir kargo uygulamasında "Müşteri", "Kamyon" ve "Paket" birer nesnedir ve kendi özellikleri vardır).

### Reverse Engineering (Tersine Mühendislik)
- Var olan, çalışan bir yazılımı veya sistemi alıp, kodlarını ve mimarisini en küçük parçasına kadar söküp inceleyerek nasıl çalıştığını anlama ve baştan inşa etme sürecidir.

### Software Re-engineering
- Mevcut, hantal bir yazılımı alıp, iş mantığını koruyarak daha modern bir altyapıda yeniden tasarlamaktır.

### Prototyping (Prototipleme)
- Özellikle Karar Destek Sistemleri (Decision Support Systems - DSS) geliştirilirken kullanıcıya hızlı geri bildirim vermek ve sistemi yaşayarak öğrenmesini sağlamak için hızlıca bir taslak ürün çıkarma yöntemidir.

Bir proje canlıya alındıktan sonra (Go-Live), işin gerçekten bitip bitmediğini anlamak için **Post-Implementation Review (Canlı Sonrası İnceleme)** yapılır. Hedeflenen ROI (Yatırım Getirisi) tuttu mu? **Fayda Gerçekleştirme (Benefits Realization)** sağlandı mı? Bu soruların cevapları, gelecekteki projelerde aynı hataları yapmamak için PMO (Project Management Office - Proje Yönetim Ofisi) veri tabanına "öğrenilmiş dersler (lessons learned)" olarak kaydedilir.

> **Örnek CISA Senaryosu (Canlı Sonrası İnceleme / Post-Implementation Review):** ROI tutmadıysa nedenlerinin analiz edilmesi.


> **Örnek CISA Senaryosu (Fayda Gerçekleştirme / Benefits Realization):** Yeni sistem sonrası işlem süresinin %30 azalması.

### Değişiklik Yönetimi (Change Management)
Proje kapsamındaki değişikliklerin kontrollü ve onaylı şekilde yönetilmesi sürecidir.

> **Örnek CISA Senaryosu:** Yeni bir gereksinimin Change Request (Değişiklik Talebi) ile Steering Committee’ye sunulması.

### IS Denetçisinin Projedeki Rolü
Projede kontrollerin tasarlandığını, risklerin ele alındığını ve süreçlerin izlendiğini doğrulamaktır.
> **Örnek CISA Senaryosu:** SoD ihlali var mı, UAT yapılmış mı, yetkilendirmeler doğru mu kontrolünün yapılması.


> [!question]- Kendini Sına: Waterfall Metodolojisinde Kök Neden Analizi
> Waterfall metodolojisiyle geliştirilen bir projede, sistem canlıya alındıktan sonra kullanıcı beklentilerinin karşılanmadığı ve fonksiyonların yanlış anlaşıldığı ortaya çıkmıştır. IS denetçisinin kök sebep (root cause) için **İLK** bakması gereken alan hangisidir?
> A) Requirements definition (Gereksinim tanımlama)
> B) System testing (Sistem testi)
> C) User training (Kullanıcı eğitimi)
> D) Post-implementation review
> 
> **Cevap: A.** Waterfall metodolojisinde her şeyin temeli en baştaki "Gereksinimlerin (Requirements)" doğru toplanmasına dayanır. Eğer gereksinimler yanlış anlaşıldıysa, sonrasındaki tasarım, kodlama ve test fazlarının tamamı yanlış bir ürün üzerine inşa edilmiş demektir.


---

# Yazılım Geliştirme Araçları (CASE ve 4GL)

## CASE (Computer-Aided Software Engineering) Araçları
Yazılım geliştirme sürecini otomatik araçlarla destekleyen sistemlerdir. Tasarımı hızlandırır ve dokümantasyonu standartlaştırır. Üç seviyede incelenir:

1. **Upper CASE:** İş ve uygulama gereksinimlerini tanımlamak için kullanılır. Veri akış diyagramları (DFD) veya Varlık-İlişki diyagramları (ERD) burada çizilir. **Business tarafına odaklanır.**
2. **Middle CASE:** Detaylı tasarım içindir. Ekran tasarımları, iş kuralları ve süreç akışları burada belirlenir. Bir değişiklik yapıldığında tüm ilişkiler otomatik güncellenir. **Sistem tasarıma odaklanır.**
3. **Lower CASE:** Kod ve veri tabanı üretimi içindir. Otomatik SQL tablo üretimi veya kod iskeleti oluşturur. Bunun en önemli parçası **Code Generators (Kod Üreticiler)**'dir. **Implementation.**


>[!info] Denetçi Bakış Açısı
>Bir sistemin kodu otomatik araçlar (Code Generators)t arafından üretilmişse, denetçinin ilk sorusu şu olmalıdır: "*Bu otomatik üretilen kodların içinee güvenlik kontrolleri ve görevler ayrılığı (SoD) kuralları doğru bir şekilde gömülmüş mü?*"


## 4GL (Dördüncü Nesil Diller)
COBOL, C++ gibi diller adım adım mantık gerektiren (procedural) dillerdir. 4GL (Fourth-Generation Languages) ise yazılım geliştirme maliyetini ve süresini azaltan, **Nonprocedural (İşlemsel Olmayan)** dillerdir. Sistemi "nasıl yapılacağı" değil, "ne yapılacağını" söyleriz. (Örneğin: "*Bana şu alanlara göre bir rapor üret*").

Farklı işletim sistemlerinde çalışabilirler (Portability), GUI ve grafik üretimi destekleri vardır. Ancak en büyük **riski**, yüksek hacimli ve çok kritik/kompleks sistemler için performans açısından yetersiz kalabilmeleridir.


---

# Sistem Edinimi (Acquisition) ve Dışarıdan Satın Alma

Bazen yazılımı içeride geliştirmek yerine *paket yazılım* olarak dışarıdan satın almak daha mantıklıdır. Bu süreç **Teklif Talebi (Request for Proposal - RFP)** dokümanının yayımlanmasıyla başlar.

Tedarikçi (Vendor) değerlendirilirken sadece fiyata (competitive bidding) bakılmaz. Tedarikçinin referansları, finansal durumu (şirket yarın batar mı?), destek sözleşmeleri (maintenance), yazılımı güncelleme yeteneği (upgrade) ve yasal olmayan yollardan lisans satışı riskleri (Gray market riski) titizlikle incelenir.

En önemlisi, vendor ile yapılacak olan sözleşmenin içine mutlaka **Right-to-Audit (Denetim Hakkı)** maddesi eklenmelidir. Böylece tedarikçinin güvenlik kontrolleri kurum tarafından denetlenebilir.


> [!question]- Kendini Sına: Paket Yazılım Seçimi ve SDLC
> Bir kuruluş sıfırdan yazılım geliştirmek yerine *paket yazılım" almayı seçmiştir. Bu durumda klasik SDLC'de yer alan "Tasarım ve Geliştirme (Design & Development)" fazlarının yerine en uygun olarak hangi fazlar gelir?
> A) Selection & configuration (Seçim ve konfigürasyon)
> B) Feasibility & requirements
> C) Implementation & post-implementation
> 
> **Cevap: A.** Hazır bir paket yazılım aldığınızda oturup sıfırdan kodlama ve mimari tasarım yapmazsınız. Pazardaki ürünleri "seçer (selection)" ve kendi kurumunuzun iş akışlarına göre "ayarlamalarını (configuration)" yaparsınız.


---

# Uygulama Kontrolleri, Veri İşleme ve Hata Yönetimi

Bir sistemin içine giren verinin işlenmesinin ve çıkan sonucun doğru, tam ve güvenilir olmasını sağlayan kontrollere **Uygulama Kontrolleri (Application Controls)** denir. Üç aşamadan oluşur: Input, Processing ve Output.

## Input Kontrolleri ve Hata Yakalama
Sisteme giren verinin mantıklı ve geçerli olduğundan emin olmak için çeşitli doğrulama (validation) yöntemleri kullanılır:
- **Limit Checks:** Girilen değerin belli bir sınırı aşıp aşmadığını kontrol eder. (Örn: Bir personelin yaşı 150 girilemez).
- **Reasonableness Checks (Makullük)**: Girilen değerin mantıksal olarak diğer verilerle uyumlu olup olmadığını kontrol eder.
- **Check Digit (Kontrol Hanesi)**: Veri girilirken yapılan *Transposition* (örn: 64 yerine 45 yazılması) veya *Transcription* (fazla/eksik karakter yazılması) hatalarını matematiksel bir algoritmayla tespit etmede en etkili yöntemdir. (Örn: TC Kimlik numarasının son hanesi).

Hatalı bir veri sisteme girdiğinde üç şey yapılabilir: Sadece o hatalı işlem reddedilir,$_1$ o an işlenen tüm dosya (batch) reddedilir$_2$ veya hatalı işlem sistemin bir köşesine, daha sonra incelenmek üzere **Suspense File (Askıya Alınanlar Dosyası)** içine atılır.$_3$

## Batch (Toplu İşlem) Kontrolleri ve Balancing
Büyük veriler anlık olarak değil, toplu (batch) olarak işlenir -genellikle gece saatlerinde-. Bu dosyaların tam ve eksiksiz işlendiğinden emin olmak için dosya başına ve sonuna bazı toplam değerler konur:
- **Total Monetary Amount:** Dosyadaki tüm işlemlerin parasal tutarının doğruluğunu ölçer.
- **Total Items / Documents**: İşlenen kayıt veya belge adetlerinin tamlığını kontrol eder.
- **Hash Totals**: Finansal bir anlamı olmayan sayısal alanların (örn: müşteri numaralarının) toplanmasıdır. Dosyanın yolda değişip değişmediğini doğrular.


### EDI (Electronic Data Interchange - Elektronik Veri Değişimi) Kontrolleri
EDI, kurumlar arası fatura, sipariş gibi ticarî belgelerin insan müdahalesi olmadan, standart bir formatta elektronik olarak karşılıklı aktarılmasıdır. Dışarıdan gelen (inbound) EDI mesajlarının yolda eksilmediğinden, yani **tamlığından (completeness)** emin olmak en kritik adımdır.

> [!tip] CISA Sınav İpucu
> **Soru Tipi:** EDI ile gelen (inbound) işlemlerin tamlığını (completeness) sağlamak için en etkili kontrol nedir? <br>
> **Cevap:** Her işlemin sonuna (transaction set trailer) bir **segment sayısı kontrol toplamı (segment count control total)** eklenmesidir. <br>
> **Neden?** Gelen mesaj paketinin sonunda "*Bu pakette 150 parça (segment) olmalıdır*" yazarsa, sistem gelen parçaları anında sayar. Eğer 150 parça varsa mesajın eksiksiz (tam) geldiği doğrulanmış olur. 



---

# Karar Destek Sistemleri ve Değişim Yönetimi

**DSS (Decision Support Systems)**: Yöneticilerin yarı yapılandırılmış, karmaşık kararlar almasına (Örn: *Faizleri %1 artırırsak kredi talebi nasıl etkilenir?*) destek veren esnek, analitik ve grafik ağırlıklı bilgi sistemleridir. Genellikle "What-if" (Ne olursa ne olur) analizleri için kullanılırlar.

DSS'ler katı Waterfall yöntemleriyle değil, kullanıcıya hızlı geri bildirim sağlayan ve düşük maliyetli olan **Prototyping (Prototipleme)** yöntemiyle geliştirilir.

Ancak DSS'lerin en büyük riski **kullanıcının sistemi sahiplenmemesi, amacın belirsiz olması, deneyimsizlik veya sisteme çok fazla kullanıcının dahil olarak sistemi karmaşıklaştırmasıdır.**


## Değişim Yöntemi Felsefesi (Lewin Modeli)

*Bkz. [[13- Örgütsel Değişim#Kurt Lewin (Erime, Değişim, Donma)|Kurt Lewin]]*

Yeni bir yazılımı veya süreci organizasyona entegre etmek, örgütsel değişim kapsamında kültürel bir değişimdir. Bu değişimi yönetmek için üç aşamalı bir model uygulanır:

1. **Unfreezing (Buzları Çözme)**: Organizasyonu değişime hazırlama, eski alışkanların artık işe yaramadığını kabullendirme aşamasıdır.
2. **Moving (Hareket/Geçiş)**: Yeni sistemin kurulduğu, eğitimlerin verildiği ve insanların yeni sürece geçiş yaptığı aşamadır.
3. **Refreezing (Yeniden Dondurma)**: Yeni sistemin kurumun yeni normali hâline gelmesi ve kalıcı olarak oturması aşamasıdır.

> [!question]- Kendini Sına: Değişim ve Kontrol Riski
> Business Process Reengineering (BPR - İş Süreçlerinin Yeniden Tasarımı) sırasında eski bir otomatik kontrol tamamen kaldırılmış ve yerine yalnızca manuel bir kontrol önerilmiştir. IS denetçisinin bu durumdaki **EN İYİ** aksiyonu ne olmalıdır?
> A) Kaldırılan kontrolün aynen geri konmasını önermek
> B) Yeni sürecin risksiz olduğunu varsayarak gözlem yapmak
> C) Riskin artıp artmadığını değerlendirip, yönetimin risk iştahına göre kabul veya hafifletme (mitigation) kararını tetiklemek
> 
> **Cevap: C.** Bir denetçi iş süreçlerinin nasıl tasarlanacağına doğrudan müdahale edip "bunu geri koyun" diye dikte etmez. Denetçinin görevi, manuel kontrole geçişin yarattığı artık riski (residual risk) hesaplamak ve bunu üst yönetime sunarak, yönetimin kendi risk iştahına göre karar vermesini sağlamaktır.
