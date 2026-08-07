---
domain: 4B
title: "Domain 4B: İş Sürekliliği, Afet Kurtarma ve İş Dayanıklılığı (Business Resilience)"
created: 2026-08-01
---
# Domain 4B: İş Sürekliliği (Business Continuity) ve Afet Kurtarma (Disaster Recovery)

Domain 4A'da sistemlerin günlük rutin operasyonlarını, altyapı bileşenlerini ve varlık yönetimini inceledik. Domain 4B'de ise işlerin ters gittiği kriz anlarına odaklanıyoruz: **Deprem, sel, yangın, siber saldırı veya ana veri merkezinin tamamen çökmesi durumunda kurum hayatına nasıl devam eder?**

Burada anlamamız gereken en kritik iki kavramsal ayrım şudur:

- **İş Sürekliliği Planı (BCP - Business Continuity Plan)**: İş odaklıdır (Business-driven). Bir kriz anında, teknolojiden bağımsız olarak **şirketin kritik iş süreçlerinin ve operasyonunun** nasıl devam ettirileceğini tanımlar.
- **Afet Kurtarma Planı (DRP - Disaster Recovery Plan)**: Teknoloji odaklıdır (IT-driven). Kesintiye uğrayan **BT altyapısının, sunucuların, veri tabanlarının ve ağların** teknik olarak nasıl tekrar ayağa kaldırılacağını belirler.

Teknoloji ne kadar hızlı ayağa kaldırılırsa kaldırılsın, iş süreçleri organizez edilemediyse iş sürekliliği sağlanamaz. DRP, BCP'nin teknik bir alt bileşenidir.

---

## 1. Temel Yapıtaşı: İş Etki Analizi (BIA) ve Kurtarma Parametreleri

Afet planlamasında her şeyi aynı anda ve anında kurtarmak imkânsızdır, nitekim anlık kurtarma muazzam bir maliyet gerektirir. Hangi sistemlerin öncelikli kurtarılacağını belirlemek için ilk atılması gereken adım **İş Etki Analizi (BIA - Business Impact Analysis)** yapmaktır.

### BIA Süreci ve Mantığı

BIA, kesintilerin organizasyon üzerindeki finansal, operasyonel ve itibar etkilerini analiz eder. Süreçleri kritiklik derecelerine göre sınıflandırır:
1. **Kritik (Critical)**: Kesintisi kuruma anında devasa zarar veren, telafisi olmayan süreçler (*Örn: Bankacılıkta para transferi*).
2. **Hayati (Vital)**: Gün içinde ayağa kaldırılması gereken süreçler.
3. **Hassas (Sensitive)**: Manuel yöntemlerle bir süre idare edilebilen süreçler.
4. **Hassas Olmayan (Non-sensitive)**: Haftalarca kapalı kalsa dahi zararı az olan süreçler.

> [!important] CISA Vurgusu: BT Varlıklarını Kurtarma Önceliklendirmesi (BIA)
> Bir felaket planlaması yapılırken BT varlıklarının kurtarılmasını **önceliklendirmeye (prioritize recovery) EN İYİ yardımcı olan çalışma: İş Etki Analizidir (BIA)**.
> - *Nedeni:* BIA iş süreçlerinin kritiklik derecesini değerlendirerek destekleyici BT varlıklarının hangi sırayla ayağa kaldırılacağını (RTO/RPO) belirler. Olay Müdahale Planı (Incident Response) ilk müdahaleyi yönetir, BIA ise stratejik kurtarma sırasını verir.

### En Kritik CISA Parametreleri: RPO ve RTO

BIA çalışmasının sonucunda her sistem için iki ana kurtarma hedefi belirlenir:

```mermaid
graph LR
    A[Geçmiş Veri Kaybı] <-- RPO --> B(AFET ANI / KESİNTİ) <-- RTO --> C[Sistemin Ayağa Kalkması]
```

#### RPO (Recovery Point Objective - Kurtarma Noktası Hedefi)
- Kabul edilebilir **veri kaybı miktarı/süresidir (Extent of data loss that is acceptable)**. Kesinti anından geriye doğru ölçülür.
	- *Örnek*: RPO = 4 saat ise, en fazla son 4 saatin veri kaybı tolere edilebilir. Afet sonrası kalan veriler alternatif kaynaklardan tamamlanır.
	- *Orphan Data*: Afet anı ile son alınan yedek arasında kaybolan ve geri getirilemeyen veridir.

#### RTO (Recovery Time Objective - Kurtarma Zamanı Hedefi)
- Kabul edilebilir **maksimum kesinti/duruş süresidir (number of hours of acceptable downtime)**. Kesinti anından ileriye doğru ölçülür.
	- *Örnek*: RTO = 2 saat ise, sistem afette n en geç 2 saat sonra çalışır hâle gelmelidir.

> [!tip] CISA İpucu: RTO vs. RPO Mantığı
> - **RTO:** Kabul edilebilir duruş süresidir $\rightarrow$ Donanım ve Saha stratejisini belirler.
> - **RPO:** Kabul edilebilir veri kaybıdır $\rightarrow$ Yedekleme sıklığını ve Replikasyon teknolojisini belirler.
> - **SDO (Service Delivery Objective):** Afet anında kabul edilebilir düşürülmüş hizmet seviyesidir.

---

## 2. Alternatif Kurtarma Saha Türleri (Recovery Sites)

