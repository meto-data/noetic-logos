---
title: Veri Madenciliği - 9
created: 2026-04-14
draft: false
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-9
konu: Makine Öğrenmesinde Regresyon
---
# Regresyonun Temel Mantığı ve Makine Öğrenmesindeki Yeri

Regresyon analizi, iki ya da daha çok değişken arasındaki ilişkinin varlığını, yönünü ve gücünü ölçmek için kullanılan analitik bir istatistik metodudur ve **asıl amacı tahmin yapmaktır**. Bu sistemin çalışabilmesi için iki temel yapı taşına ihtiyaç duyulur:

1. **Bağımsız Değişken ($X$)**: Sonucu etkileyen, elimizde var olan girdi parametreleridir. Hatasız ölçüldüğü varsayılır.
2. **Bağımlı Değişken ($Y$)**: Bağımsız değişkenlerin durumuna göre şekillenen, sonucunu merak ettiğimiz ve **tahmin etmek istediğimiz** hedef değişkenidir.



>[!info] Yapay Zekânın Temel Formülü
>Makine öğrenmesi ve yapay zekâ temelde bir matematiksel modelleme, bir fonksiyon ($\mathbf{f(x)}$) oluşturma işidir. En kaba tabirle formül şudur: <br>
>$Y = (X \cdot w) + b$ <br>
>Burada amaç; elimizdeki binlerce $X$ ve $Y$ verisini makineye verip, aradaki ilişkiyi en iyi açıklayan $w$ (**ağırlık/weight**) ve $b$ (**başlangıç değeri/bias**) parametrelerinin **optimum** değerlerini öğrenmektir.

Makine bu ağırlıkları öğrendikten sonra artık elimizde $Y$'si (sonucu) olmayan yeni bir $X$ verisi geldiğinde, öğrenilen $w$ ve $b$ kullanılarak gelecekteki $Y$ tahmin edilir.

## Regresyon Türleri
Parametre sayısına ve verinin dağılım (ilişki) şekline göre regresyon dörde ayrılır.

### A. Basit Doğrusal (Linear) Regresyon

**Tek bir bağımsız değişken ($X$) ile tek bir bağımlı değişken ($Y$) arasındaki doğrusal ilişkiyi inceler**. Değişkenlerden biri artarken diğeri de belirli bir oranda doğrusal olarak artıyor (veya azalıyorsa) burada basit regresyon ilişkisinden söz edilir.


**Formül:** $\hat{Y} = bx + \alpha$  *(Buradaki $b$ eğim, $\alpha$ ise sabit/başlangıç değeridir)*

> [!example] Elma ve Oran Analojisi
> 1 kilo elma 2₺, 2 kilo elma 4₺, 3 kilo elma 6₺ ise, 4 kilo elmanın 8₺ olacağını tahmin etmek basit doğrusal regresyonun en saf halidir. Doğru orantı mantığına dayanır.


### B. Çoklu Doğrusal (Multiple Linear) Regresyon
Gerçek hayatta sonuçlar tek bir parametreye bağlı değildir. Çoklu regresyon, **birden fazla bağımsız değişkenin ($X_1, X_2, X_3, \cdots$)** tek bir bağımlı değişkeni ($Y$) nasıl etkilediğini bulur. Her bir $X$'in kendine ait bir katsayısı/ağırlığı ($b_n$) olur.

**Formül:** $\hat{Y} = \alpha + b_1x_1 + b_2x_2 + \dots + b_nx_n$

> [!example] Ev Fiyatı Tahmini ve Bias / Intercept Kavramı
> Bir evin fiyatını ($Y$) tahmin etmek için modele şu parametreleri ($X$) verdiğimizi düşünelim:
> - $X_1$: Merkeze uzaklık
> - $X_2$: Oda sayısı
> - $X_3$: Bina yaşı
> 
> **Soru:** Peki formüldeki $\alpha$ (Bias / Intercept / Sabit Değer) ne işe yarar? <br>
> **Cevap:** Diyelim ki modelde tüm parametreler sıfır girildi. Yani evin metrekaresi yok (0), odası yok (0), yaşı sıfır (0). Bu durumda evin fiyatı sıfır mı olur? Hayır. Ortada üzerine ev yapılabilecek bir **arsa** vardır ve bunun bir başlangıç taban fiyatı vardır. İşte formüldeki sabit değer, girdiler sıfır olsa bile sonucun mutlak sıfıra düşmesini engelleyen başlangıç ağırlığıdır.


### C. Polinomal Regresyon
Doğadaki veriler her zaman düz bir çizgi (linear doğru) şeklinde ilerlemez. Bazen bağımsız değişkendeki çok küçük artışlar, bağımlı değişkende çok büyük (üssel) sıçramalara sebep olabilir. Veri noktaları grafikte bir doğru değil de **dalgalı bir eğri** oluşturuyorsa, ilişkiyi modellemek için üssel ifadeler barındıran **Polinomal Regresyon** kullanılır.

**Formül:** $\hat{Y} = \alpha + b_1x_1^1 + b_2x_2^2 + b_3x_3^3 + \dots + b_nx_n^n$


> [!example] Sınıf Atlamak ve Maaş
> Bir iş yerinde deneyim yılı 1. yıldan 2. yıla geçerken maaş 10.000₺'den 15.000₺'ye çıkabilir. Ancak 10. yıla gelindiğinde maaş birden 100.000₺ olabilir. Yıllar linear (doğrusal) artarken, maaş doğrusal artmaz. Keza 1. sınıftan 2. sınıfa geçerken alınan ders sayısı veya başarı oranı da doğrusal bir oranla ölçülemez. Bu tür "doğrusal olmayan (non-linear)" verileri uydurmak (fit etmek) için polinomal eğriler kullanılır.


### D. Lojistik Regresyon
Adında regresyon geçmesine rağmen aslında bir **sınıflandırma (classification)** algoritmasıdır. Sayısal bir değer tahmin etmek (örn: ev fiyatı) yerine sonucun iki farklı değerden hangisine ait olduğunu bulur.
- Matematiksel olarak Sigmoid Fonksiyonu kullanır. Bu fonksiyon grafikte S şeklinde bir eğridir.
- Üretilen değeri her zaman 0 ile 1 arasında sıkıştırır (örn: Doğru/Yanlış, Evet/Hayır, 1/0).
- **Örnek**: Gelen bir e-postanın **spam (1)** mı yoksa **spam değil (0)** mi olduğunu tahmin etmek. Yahut web sitesindeki bir müşterinin "Sepeti Onayla" butonuna tıklayıp tıklamayacağını öngörmek.
- İşlevi gereği [[veri-madenciligi-5#B. K-Nearest Neighbors (KNN - K-En Yakın Komşu)|KNN (K-Nearest Neighbors)]] algoritması ile benzer problemlerde kullanılır ve kıyaslanır.