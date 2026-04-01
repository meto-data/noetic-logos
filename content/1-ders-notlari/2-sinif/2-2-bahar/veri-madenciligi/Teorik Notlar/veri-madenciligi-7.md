---
title: Veri Madenciliği - 7
created: 2026-03-31
draft: false
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-7
konu: Birliktelik KUralları ve Apriori Algoritması
---
## Bilgilendirme falan
- Sınavda en az 30-35, muhtemelen 40-45 arası soru olacak. Süre **60 dakika**.
- Apriori algoritması dönem sonu projesi kapsamında **kullanılamayacak** algoritmalardan biridir. Zira proje kapsamında öğrencilerinden bir tahminde bulunmaları ve `Accuracy` artırmaları beklenmektedir; oysa **Apriori** bir tahmin algoritması değil, **kural çıkarım algoritmasıdır**.

---

# Ders Notları

### 1. Birliktelik Kuralları ve Apriori Felsefesi

Birliktelik Kuralları, etiket bulunmayan veriler üzerinden örüntü yakalamaya çalışan bir [[veri-madenciligi-4#B. Denetimsiz Öğrenme (Unsupervised Learning)|Denetimsiz/Gözetimsiz Öğrenme (Unsupervised Learning)]] tekniğidir. 

Bu algoritmada amaç bir çıktıyı ($Y$ - Bağımlı Değişken) tahmin etmek değildir. Amaç, eldeki devasa veri tabanlarında (örneğin alışveriş fişleri) öğe gruplarının kendi aralarındaki **bağlanma frekanslarını** ve **koşullu olasılıklarını** tespit etmektir.

>[!example] A Priori Bilgi
>Apriori ismi felsefeden, bilhassa Kant'ın epistemolojisinden gelmektedir. *A priori* bilgi; deneyimden ve tecrübeden bağımsız, önsel, salt akıl ve mantık ile ulaşılan bilgidir. Veri madenciliğindeki Apriori algoritması da geçmiş tecrübelere bakıp geleceği tahmin etmez (**model eğitmez**); verinin o anki mevcut yapısındaki salt matematiksel ilişkileri ve kuralları ortaya çıkarır. Algoritmanın isimlendirmesi bu felsefî kavrama dayanır.


Algoritmanın kalbinde şu sarsılmaz kural yatar (Apriori Prensibi):
"**Eğer bir alt küme sık geçmiyorsa, onu barındıran hiçbir üst küme de sık geçemez**."

- Diyelim ki market verisinde sadece **{Süt}** alma oranı, belirlediğimiz eşik değerinin (%25) altında kaldı.
- Algoritma bir sonraki aşamada **{Süt, Ekmek}** veya **{Süt, Yumurta}** kombinasyonlarının ne kadar sattığını görmek için veri tabanını baştan sona tekrar tarayıp sayma zahmetine (deneyime/tecrübeye) girmez.
- Çünkü **{Süt}**'ün zaten tek başına yeterince satmadığını **önsel (a priori) olarak** bilmektedir. Mantıken, sütün tek başına satmadığı bir senaryoda, sütün yanında başka bir şey eklenerek satılma ihtimali matematiksel olarak daha yüksek olamaz.

Apriori algoritması büyük ve karmaşık ürün gruplarını hesaplamak için veri tabanını körü körüne taramak (deneyimlemek) yerine, **bir önceki adımdan elde ettiği a priori (önsel) bilgiyi kullanarak mantıksal bir çıkarım yapar** ve gereksiz ihtimalleri doğmadan budar kısaca.

### Gerçek Hayat Uygulamaları, Pazar Sepeti Analizi (Market Basket Analysis)

Bilgisayar bilimi, temelde insan davranışlarını anlama ve modelleme çabasıdır. Alışveriş alışkanlıklarımız rastgele görünse de aslında altlarında güçlü kurallar barındırır.

- **Fiziksel Mağazacılık (Reyon Dizilimi)**: Yurt dışındaki marketlerde bebek bezi ve içki reyonlarının yan yana dizilmesinin sebebi, yapılan sepet analizlerinde bu iki ürünün birlikte alınma oranının çok yüksek çıkmasıdır.
- **Gezdirme vs. Hedefe Yönelme Politikaları**: Marketlerin sebze-meyveyi girişe koyup ekmek ve kasayı en arkaya koyması tüm marketi gezdirmek içindir. Ancak Apriori'nin mantığı doğrudan nokta atışı hedeflere yöneliktir. Bir müşteri acelesi olup sadece ekmek almaya girdiğinde, ekmeğin yanına koyacağınız süt (ekmek-süt birlikteliği yüksek olduğu için), müşteriye unuttuğu ihtiyacını anında hatırlatıp satışı artıracaktır.
- **E-Ticaret ve Öneri Sistemleri (Recommendation Systems)**: Amazon veya Hepsiburada gibi sitelerde sepetinize bir ürün attığınızda karşınıza çıkan "*Bunu alanlar bunu da aldı*" önerilerinin arkasında bu kural seti yatar.

### Apriori'nin Çalışma Mekanizması ve Eşik Değeri (Threshold)
Apriori algoritması, kural çıkartırken **Aşağıdan-Yukarıya (Bottom-Up)** ve **İteratif (Tekrarlayıcı)** bir yaklaşım sergiler.

Körü körüne tüm ürün kombinasyonlarını hesaplamak devasa veri setlerinde sistemi kilitleyeceği için algoritma bir budama işlemi yapar. Budama işlemini sağlayan şey **eşik değeridir (Threshold - Support Değeri)**.

- Diyelim ki threshold (support eşiği) %25 belirlendi.
- Birinci iterasyonda tüm tekli ürünlerin satış oranına bakılır. %25'in altında kalan ürünler elenir.
- İkinci iterasyonda sadece kalan ürünlerin ikili kombinasyonlarına bakılır. %25'in altında kalan ikililer elenir.
- Üçüncü iterasyonda üçlü kombinasyonlara bakılır.
- Başka anlamlı uzantı bulunamayana kadar süreç devam eder ve final kuralları yazılır.

### Birliktelik Kurallarının 3 Temel Metriği

1. **Support (Destek)**: Bir ürünün veya ürün kombinasyonunun tüm alışveriş fişleri içerisinde görülme sıklığıdır. Bir olasılık belirtir.
2. **Confidence (Güven/Yatkınlık)**: $X$ ürününü alan bir müşterinin $Y$ ürününü de alma olasılığıdır. Koşullu olasılık barındırır.
3. **Lift (Kaldıraç / Değer)**: $X$ ürünü satın alındığında, $Y$ ürününün tek başına satın alınma olasılığına kıyasla satın alınma ihtimalinin kaç kat arttığını gösterir.


>[!tip] Lift Değerinin Yorumlanması
> - **Lift $= 1$**: İki ürün arasında hiçbir ilişki yoktur. Birbirinden bağımsızdırlar.
> - **Lift $> 1$**: Pozitif ilişki vardır. $X$ satışı $Y$ satışını tetikler (Borsada gıda hisselerinin yükselişinin diğer gıda hisselerini de peşinden sürüklemesi gibi).
> - **Lift $< 1$**: Negatif ilişki vardır. $X$ satışı $Y$ satışını baltalar.



---


## Derse Aşkın

Sınavda Python programlama dilinin sentaks detaylarından yahut kütüphane nasıl kullanılır gibi sorular değil, **kodların veri madenciliği bağlamındaki mantığından** soru gelecektir.


- `fit()`, `predict()`, `train_test_split()` gibi temel fonksiyonların ne iş yaptığı ve nerede kullanıldığı sorulacaktır.
- Sınavda bir kod bloğu verilip, "Bu kod satırının amacı nedir?" (Eksik veriyi mi dolduruyor? Test-train ayrımı mı yapıyor? Threshold'u mu kontrol ediyor?) şeklinde soruların gelme ihtimali yüksektir.
- **Kavram - Algoritma Eşleştirmesi**: Algoritmaların kendine has metrikleri üzerinden sorular gelebilir.
	- Örneğin Support, Confidence ve Lift metriklerinin hangi algoritmaya ait olduğu (Apriori), Minkowski veya Euclidean ölçümünün KNN ve K-Means’e ait olduğu bilinmelidir.
