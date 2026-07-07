---
title: "Domain 2A: BT Yönetişimi, Organizasyonel Yapı ve Veri Mimarisi"
created: 2026-07-06
---
# Domain 2A: BT Yönetişimi, Organizasyonel Yapı ve Veri Mimarisi
## BT Yönetişimi ve BT Yönetimi (Governance vs. Management)

Yönetişim (governance) ile yönetim (management) aynı şey değildir.

- **BT Yönetişimi (IT Governance)**: Şirketin organizasyon yapısını, stratejisini ve hedeflerini belirleme disiplinidir. Hangi fonksiyonların nerede duracağını, kimin kime raporlayacağını ve kuralları koyar. Yönetişimden, şirketin paydaşlarını temsil eden **Yönetim Kurulu (Board of Directors)** sorumludur.
- **BT Yönetimi (IT Management)**: Yönetişimin belirlediği stratejiyi alıp icra etme, legoları birleştirip sistemi günlük olarak çalıştırma işidir. Yönetimden, maaşlı ve primli çalışan icrai bir fonksiyon olan **Genel Müdür (CEO)** ve üst yönetim (Senior Management) sorumludur.


>[!tip] Denetçi Bakış Açısı
>*BT Stratejisi, kurumun genel iş hedefleriyle (business objectives) uyumlu mu?* <br>
>Bir denetçi olarak her zaman en tepeya bakarız. Yönetim Kurulu, BT'nin ne yaptığından haberdar mı? BT'ye harcanan bütçe, işin büyümesine, yani business objectives'e hizmet ediyor mu?


### Kurumsal Bilgi ve Teknoloji Yönetişimi (EGIT)

BT, işin kendisini bilmez. BT'nin varoluş amacı iş birimlerinin para kazanmasını, hizmet üretmesini (kredi vermek, ürün satmak vb.) sağlamaktır. İş birimlerinden gelen ihtiyaçların, yönetim kurulu beklentilerinin ve BT'nin teknolojik kapasitesinin birleştiği, herkesin birbiriyle konuştuğu bu çatı sisteme **EGIT (Enterprise Governance of Information and Technology)** diyoruz.

İş analistleri tam da burada devreye girerek işin ihtiyacını BT diline çevirir.

### BT Yönetişim Çerçeveleri (Frameworks)

Biz denetçiler standartları sıfırdan icat etmeyiz. Bir kurumun yönetişimini kurarken veya denetlerken rehber aldığımız uluslararası çerçeveler vardır:

- **COBIT**: ISACA'nın kendi yarattığı çerçevedir. BT'nin iş birimleriyle senkronize çalışmasını ve kaynakların verimli kullanılmasını sağlar (EGIT'i destekler).
- **ISO 27000 Serisi**: Bilgi Güvenliği Yönetişimi (Information Security Governance) için temel çerçevedir. 
- **ITIL**: BT altyapı ve servis yönetimi (yardım masası, olay yönetimi vb.) için kullanılır.

---

## Bilgi Güvenliği Yönetişimi (Information Security Governance)

Bilgi güvenliği de yönetişimin ayrılmaz bir parçasıdır. **İş hedeflerine ulaşmak için gereken minimum ve optimal güvenlik seviyesinin tasarlanmasıdır.** Güvenlik, gerektiği kadar olmalıdır; gereğinden fazla güvenlik sadece fazla maliyettir.

>[!example] **Senaryo: KOBİ ve Gereksiz Güvenlik Yatırımı**
>Bir KOBİ düşünelim; fabrikasında harika üretim yapıyoruz ama BT ortamı fabrikanın dışındaki 5 laptoptan ibaret. Dışarıdan bir satıcı geliğ "*Bunu almazsanız batarsınız*" diyerek 300 bin liralık bir güvenlik cihazı satıyor. Oysa evimizdeki modeme de 5 cihaz bağlı ve eve böyle bir cühaz kurmuyoruz. **Doğru bir Bilgi Güvenliği Yönetişimi, riski analiz edip yatırımın gerçekten işe yarayıp yaramadığını (ROI - Return on Investment) hesaplar ve kurumu bu tarz gereksiz maliyetlerden korur.**

### Olgunluk Modelleri (Maturity Models)

**Kâğıt üzerinde harika süreçler tasarlanmış olabilir ama şirket bunları ne kadar uyguluyor**? Bunu **ölçmek için** **CMMI (Capability Maturity Model Integration)** **gibi olgunluk modelleri kullanırız.**

CMMI, bir kurumun süreçlerinin "kaostan" "mükemmelliğe" giden yolculuğunu 0'dan 5'e kadar seviyelendirir.

- **Seviye 0 - Incomplete (Eksik/Yok):** Süreç hiç yoktur veya süreç o kadar kötüdür ki amacına ulaşmıyordur. Tam bir kaos hâlidir.
- **Seviye 1 - Initial / Ad Hoc (Başlangıç):** Süreçler vardır ama standart değildir; duruma göre anlık çözülür ("Kervan yolda dizilir" mantığı). Başarı, kurumun sistemine değil, **kahraman çalışanlara** (örneğin BT'deki Ahmet Bey'in üstün çabalarına) bağlıdır. Ahmet Bey işten ayrılırsa o süreç çöker.
- **Seviye 2 - Managed / Repeatable (Yönetilen / Tekrarlanabilir):** Süreçler sadece proje veya ekip bazında planlanıp yönetilir. Benzer işler yapıldığında başarılı adımlar tekrarlanabilir ama kurumun geneline yayılmış bir standart henüz yoktur.
- **Seviye 3 - Defined (Tanımlı):** Kurumsallaşmanın başladığı yerdir. Süreçler sadece bir ekibe ait olmaktan çıkmış; standartlaşmış, dokümante edilmiş (politika ve prosedürlere dökülmüş) ve kurumun bütününe yayılmıştır. Ahmet de gelse Ayşe de gelse iş aynı şekilde yapılır. (Kurumların birbirlerinden minimum beklediği seviye genelde budur).
- **Seviye 4 - Quantitatively Managed (Nicel Olarak Yönetilen):** Süreçler sadece tanımlı olmakla kalmaz, aynı zamanda **sayılarla (metriklerle, KPI'larla)** ölçülür. Performans öngörülebilir hâle gelmiştir (Örn: "Sistem kesinti süremiz bu ay %0.01 olarak ölçüldü").
- **Seviye 5 - Optimizing (Optimize Edilen):** Zirve noktasıdır. Süreçler zaten tıkır tıkır ve ölçülerek çalışmaktadır; kurum tamamen **sürekli iyileştirmeye (continuous improvement)** ve yenilikçi teknolojilerle (otomasyon, yapay zeka) kendini daha da mükemmelleştirmeye odaklanır.

> [!tip] CISA İpucu
> Soruda "kahramanlık, kişiye bağlılık, plansızlık (ad hoc)" vurgusu varsa cevap **Seviye 1**'dir. <br>
> Soruda "dokümante edilmiş, standartlaşmış (documented, standard)" diyorsa cevap **Seviye 3**'tür. <br>
> Soruda "metrikler, istatistiksel ölçüm (metrics, quantitative)" diyorsa cevap **Seviye 4**'tür. <br>
> Soruda "sürekli iyileştirme (continuous improvement)" diyorsa cevap **Seviye 5**'tir.


---

## BT Dokümantasyon Hiyerarşisi

Yönetişimin kuralları şirkette üç ana katmanda dokümante edilir:

1. **Standartlar**: Şirketin asla değişmeyen, zorunlu ve minimum kabul edilebilir kurallarıdır. Paydaşlar tarafından onaylanır ve istisnası yoktur. (Örn: "*Her parola en az 14 karakter olmalıdır. Nokta.*")
2. **Politikalar (Policies)**: Yüksek seviye yönetimin vizyonunu ve beklentilerini yansıtır. Daha çok "*yapmalıyız*", "*uyumlu olmalıdır (shall)*" ifadeleri içerir.
3. **Prosedürler (Procedures)**: Politika ve standartların nasıl uygulanacağını adım adım anlatan rehberlerdir. (Örn: "*14 karakterli parolayı aktif etmek için Active Directory'ye gir, X sekmesine tıkla...*")

>[!info] Denetçi Bakış Açısı
>**Doğrula:** Şirketin yazılı bir Bilgi Güvenliği Politikası (Inf. Sec. Policy) var mı ve sistem loglarındaki teknik konfigürasyonlar bu politikayı destekliyor mu?


---

## Organizasyonel Yapı ve BT Komiteleri

Yönetişimi sahada uygulayacak komiteler vardır:
- **BT Strateji Komitesi (IT Strategic Committee):** İş hedeflerine doğru gidilip gidilmediğini ölçer. Doğrudan Yönetim Kurulu'na bağlıdır.
- **BT Yönlendirme Komitesi (IT Steering Committee):** Sahadan veri toplayıp projeleri izler, metriklerle yönetime tavsiyelerde bulunur (Yönetim seviyesindedir).

### Kritik BT Rolleri ve Sorumlulukları

CISA, BT içerisindeki aktörlerin kim olduğunu net olarak bilmemizi ister:

- **CISO (Chief Information Security Officer)**: Bilgi güvenliğinden bağımsız sorumlu fonksiyondur. Kesinlikle CIO'ya değil, doğrudan CEO'ya (veya Yönetim Kurulu'na) raporlamalıdır. IT operasyona odaklanırken, güvenlik onu yavaşlatabilir; çıkar çatışması olmamalıdır.
- **Son Kullanıcı (End User)**: Uygulamayı kullanan kişidir (işin sahibidir). Ayar değiştiremez, yetki veremez. Admin hesabından tamamen farklıdır.
- **Son Kullanıcı Destek Yöneticisi (End-User Support)**: IT ile kullanıcılar arasında köprüdür. Sorunu doğrudan çözmekten ziyade koordinasyonu sağlar.
- **Sistem Yöneticisi (Systems Administrator):** Sunucu ve ağların teknik yöneticisidir. Çok geniş yetkisi olduğu için aktivitelerinin sıkı bir şekilde loglanması (monitoring) şarttır.
- **Veri Tabanı Yöneticisi (DBA - Database Administrator):** Veri tabanının mutlak hakimidir. Üretim (prod) ortamına erişimini tamamen engellemek teknik olarak imkânsızdır. Bu yüzden kesinlikle izleyici kontrollere (detective controls - günlük/log incelemeleri) tâbi tutulmalıdır.
- **Uygulama Geliştirme (App Dev):** Uygulama kodlayan ekiptir. Canlı (prod) ortama doğrudan erişimleri **asla** olmamalıdır.
- **Ağ Yönetimi (Network Management):** Router, switch, firewall'ları yönetir. Ağ yöneticisi aynı zamanda uygulama geliştirici olmamalıdır.
- **Veri Yönetimi (Data Management):** Veriyi kurumsal bir varlık olarak yönetir.
- **Kalite Güvence (QA Manager):** Yapılan işlerin kalite standartlarına uygunluğunu (test süreçlerini) sağlar. Güvenlikten (Security) farklı bir kavramdır.
- **Medya Yönetimi (Media Management):** Yedek kasetleri (backup tapes) ve taşınabilir medyaları yönetir. Bir kasetin kaybolması doğrudan bir veri sızıntısı (audit alarmı) kabul edilir.
- **SCADA / Veri Edinimi:** Elektrik santrali gibi endüstriyel sistemlerden otomatik veri toplar. Bu sistemler internete açılırsa çok yüksek siber risk taşır.
- **Sistem Analisti (Systems Analyst):** İş ihtiyacını teknik dile (sistem gereksinimlerine) çevirir. SDLC (Yazılım Geliştirme Yaşam Döngüsü) içindeki tasarım fazında kritik rol oynar.
- **Güvenlik Mimarı (Security Architect) ve Güvenlik Mühendisi (Security Engineer):** Mimar ağ segmentasyonu veya kimlik yönetimi (IAM) tasarımlarını yaparken, mühendis bunu hayata geçirir.

---

## Görevler Ayrılığı İlkesi (Segregation of Duties - SoD)

Bir kurumdaki en kritik denetim kuralıdır. **Bir çalışan, kuruma zarar verebilecek, hile yapabilecek (single point of failure yaratacak) bir süreci tek başına uçtan uca tamamlayamamalıdır.** İşi yapan (doer) ile onaylayan/doğrulayan (verifier) birbirinden ayrılmalıdır.

### Klasik SoD Çatışmaları
1. **Yazılımcı (App Dev) vs. Canlı Ortam (Prod)**: Yazılımcı kodu yazar, ancak onu canlı sisteme taşıyamaz (push edemez). Taşıma işini ayrı bir operasyon ekibi yapmalıdır ki, yazılımcı koda arka kapı (backdoor) koyamasın.
2. **Güvenlik Yöneticisi (Sec Admin) vs. Sistem Yöneticisi (Sys Admin)**: Güvenlik kurallarını yazan kişi ile o sistemleri işleten kişi aynı olmamalıdır.

Eğer KOBİ gibi küçük bir organizasyonda yeterli personel olmadığı için SoD tam uygulanamıyorsa, şirket mutlaka **telafi edici kontroller (compensating controls)** devreye almalıdır (örneğin tüm logların periyodik olarak bağımsız bir yönetici tarafından incelenmesi). Tüm organizasyonun çatışma riskleri ile devasa bir **SoD Matrisi** üzerinde takip edilir.

> [!question]- Kendini Sına
> Küçük bir kurumda bilgi işlem personeli çok azdır ve bir kişi birden fazla rol üstlenmektedir. Bu durumda riski azaltmak için "en iyi" kontrol hangisidir?
> **Cevap:** Sistem değişikliklerinin ve logların bağımsız bir şekilde gözden geçirilmesi (Independent review). Telafi edici bir kontroldür.


---

## Kurumsal Mimari, Risk Yönetimi ve Uyum (GRC)

BT Yönetişimi, politikalar ve roller bir araya geldiğinde kurumun **Kurumsal Mimarisi (Enterprise Architecture)** oluşur. Bu yapıyı tasarlamak için kullanılan ünlü modellerden biri **Zachman Çerçevesi**'dir.

### Risk Yönetimi
Risk yönetimi de bir programdır. Riski hesaplarken iki yöntem kullanılır:

- **Kalitatif (Qualitative)**: İtibat kaybı gibi sayısal olarak tam hesaplanamayan değerler (Düşük, Orta, Yüksek).
- **Kantitatif (Quantitative)**: Sayısal veriler. (Örn: Çalınan 100.000 kimlik bilgisinin Dark Web'deki piyasa değerinin dolar cinsinden hesaplanması).

Bir risk bulunduğunda 4 olası cevap vardır:

1. **Azaltmak (Mitigate)**: Kontrol kurmak (örn. şifreleme).
2. **Kabul Etmek (Accept)**: Zarar, önlem maliyetinden düşükse riski bilerek kabullenmek.
3. **Kaçınmak (Avoid)**: Riski doğuran projeden tamamen vazgeçmek.
4. **Transfer Etmek (Transfer/Share)**: Siber sigorta taptırmak.


### Kanunlar, Regülasyonlar (Compliance)
CISA düşünce yapısında bir numaralı kural şudur: **KANUN HER ŞEYİN ÜSTÜNDEDİR**. Kendi kurum standartlarınızı yasalarla çelişecek şekilde yazamazsınız. Dünyadaki meşhur yasalardan bazıları:
- **GLBA (Financel Services Modernization Act)**: Finansal kurumların çağdaşlaştırılması.
- **FERPA**: Öğrenci eğitim hakları ve gizliliği.
- **COPPA**: Çocukların çevrim içi gizliliğinin korunması.
- **GDPR / KVKK**: Kişisel verilerin korunması.


---

## İş Zekâsı (Business Intelligence) ve Veri Mimarisi

Büyüyen ve karmaşıklaşan şirketler, karar süreçlerini otomatize etmek ve rekabet avantajını (competitive advantage) kazanmak için Excel yerine İş Zekâsı (BI) kullanılır. BI süreçleri belirli katmanlardan (layet) oluşur. Aşağıdan (ham veriden) yukarıya (yönetici ekranına) doğru veri mimarisi şöyledir:


1. **Data Source Layer (Veri Kaynakları):** Ham verinin geldiği yerdir (Core Banking, CRM, Dış kaynaklar). Veriler dağınık, kirli ve farklı formatlardadır.
2. **Data Access Layer:** Kaynak sistemlere nasıl bağlanıldığını soyutlar (Uygulamanın verinin SAP'den mi Oracle'dan mı geldiğini bilmesine gerek kalmaz).
3. **Data Staging & Quality Layer:** BI'ın **EN KRİTİK** katmanıdır. Veriyi alır, temizler ve dönüştürür. Hatalı veri ayıklanır. Unutulmamalıdır ki: *Çöp girerse, çöp çıkar (Garbage in – Garbage out).*
4. **Core Data Warehouse - DW (Veri Ambarı):** Şirketin **tek doğru veri kaynağıdır (single source of truth)**. Normalize edilmiş, büyük ilişkisel bir veritabanıdır (Tüm müşteriler, tüm işlemler burada tutulur).
5. **Data Mart Layer:** DW'den alınan verilerin, *belirli bir iş birimi için* (Finans, Risk, Pazarlama vb.) sadeleştirilmiş halidir. Raporlamayı hızlandırır (OLAP küpleri).
6. **Data Preparation Layer:** Veriyi analiz (fraud skorlama, veri madenciliği vb.) için hazırlar.
7. **Metadata Repository (Meta Veri Deposu):** Verinin kimliğidir. "Bu alan neyi temsil ediyor?", "Hangi kural ile hesaplandı?" bilgisini tutar. Bir denetçi için **altın değerindedir**.
8. **Warehouse Management Layer:** ETL (Extract, Transform, Load) işlerini çalıştırır, zamanlama yapar ve yetkilendirmeyi yönetir.
9. **Application Messaging Layer:** Katmanlar arası "load başarısız" gibi veri ve hata mesajlarını taşır.
10. **Internet / Intranet Layer:** Sistemin network ve tarayıcı (browser) altyapısıdır.
11. **Presentation / Desktop Access Layer:** Kullanıcının/Yöneticinin gördüğü nihai yerdir (Power BI, Tableau, Dashboard). Yönetici buraya bakar, alttaki karmaşayı görmez.

> [!tip] Sınav İpucu
> Üst yönetim (Senior Management) BT risklerini ve iş zekâsı verilerini anlık (real-time) takip etmek isterse en etkili araç **Executive Dashboard (Yönetici Paneli)**'dir. Risk sicili (Risk Register) statik bir dokümandır, dashboard ise anlık durumu gösterir.

### Veri Yönetişimi (Data Governance)
Veri mimarisinin tepesinde duran kurallar setidir. Amacı, BI sistemlerinin kontrolsüz büyümesini engellemek ve verinin doğru karar üretmesini sağlamaktır.
- İşletme içinde "Müşteri" tanımının standartlaşması.
- KPI hesaplama kurallarının netleşmesi.
- Mülkiyetin (Business ve IT) birlikte sahiplenilmesi.