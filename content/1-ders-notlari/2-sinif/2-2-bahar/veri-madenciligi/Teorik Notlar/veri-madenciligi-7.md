---
title: Veri Madenciliği - 7
created: 2026-03-31
draft: false
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-7
konu: Birliktelik Kuralları ve Apriori Algoritması
---
## Bilgilendirme falan
- Sınavda en az 30-35, muhtemelen 40-45 arası soru olacak. Süre **60 dakika**.
- Apriori algoritması dönem sonu projesi kapsamında **kullanılamayacak** algoritmalardan biridir. Zira proje kapsamında bizden bir tahminde bulunmamız ve `Accuracy` artırmamız beklenmektedir; oysa **Apriori** bir tahmin algoritması değil, **kural çıkarım algoritmasıdır**.

---

# Ders Notları

### 1. Birliktelik Kuralları ve Apriori Felsefesi

Birliktelik Kuralları, etiket bulunmayan veriler üzerinden örüntü yakalamaya çalışan bir **[[veri-madenciligi-4#B. Denetimsiz Öğrenme (Unsupervised Learning)|Denetimsiz/Gözetimsiz Öğrenme (Unsupervised Learning)]]** tekniğidir. 

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

#### Birliktelik Kurallarının 3 Temel Metriği

1. **Support (Destek)**: Bir ürünün veya ürün kombinasyonunun tüm alışveriş fişleri içerisinde görülme sıklığıdır. Bir olasılık belirtir.
2. **Confidence (Güven/Yatkınlık)**: $X$ ürününü alan bir müşterinin $Y$ ürününü de alma olasılığıdır. Koşullu olasılık barındırır.
3. **Lift (Kaldıraç / Değer)**: $X$ ürünü satın alındığında, $Y$ ürününün tek başına satın alınma olasılığına kıyasla satın alınma ihtimalinin kaç kat arttığını gösterir.


>[!tip] Lift Değerinin Yorumlanması
> - **Lift $= 1$**: İki ürün arasında hiçbir ilişki yoktur. Birbirinden bağımsızdırlar.
> - **Lift $> 1$**: Pozitif ilişki vardır. $X$ satışı $Y$ satışını tetikler (Borsada gıda hisselerinin yükselişinin diğer gıda hisselerini de peşinden sürüklemesi gibi).
> - **Lift $< 1$**: Negatif ilişki vardır. $X$ satışı $Y$ satışını baltalar.



| Metrik                 | Temel Tanımı ve Anlamı                                                                                                                    | Modeldeki İşlevi ve Rolü                                                                                                                                                |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Support (Destek)**   | Bir ürünün veya kuralın tüm alışveriş fişleri içindeki **görülme sıklığı** ve mağazadaki genel satış hacmidir.                            | Algoritmanın devasa verilerde kilitlenmemesi ve çok nadir satılan ürünleri analizden dışlaması için bir **eşik değeri (threshold)** ve budama aracı olarak görev yapar. |
| **Confidence (Güven)** | X ürününü satın alan bir müşterinin Y ürününü de sepete atma ihtimalini gösteren **koşullu olasılıktır**.                                 | Üretilen "Eğer X alınırsa Y de alınır" kuralının **gerçekleşme güvenilirliğini** ifade eder.                                                                            |
| **Lift (Kaldıraç)**    | İki ürün arasındaki **ilişkinin gücünü** ve birbirlerinin satılma ihtimalini tesadüfün ötesinde kaç kat artırdığını (katsayıyı) gösterir. | Kuralın sadece ürünlerin popülerliğinden kaynaklı bir **tesadüf mü yoksa birbirini gerçekten tetikleyen (Lift > 1)** mantıklı bir ilişki mi olduğunu kanıtlar.          |



<br>

Apriori algoritması, kural çıkartırken **Aşağıdan-Yukarıya (Bottom-Up)** ve **[[iterasyon|İteratif]] (Tekrarlayıcı)** bir yaklaşım sergiler. Bu süreci anlamak için bir kırtasiye veritabanı düşünelim.

- **Toplam İşlem (N):** 8 adet alışveriş fişi var.
- **Eşik Değeri (Threshold/Support):** %25 (Yani 8 fişin en az 2'sinde geçmeyen ürünler elenecektir).

| İşlem (Fiş) | Alınan Ürünler |
| :--- | :--- |
| **Fiş 1** | Defter, kalem, silgi, ataç |
| **Fiş 2** | Defter, kalem, silgi |
| **Fiş 3** | Defter, kalem |
| **Fiş 4** | Defter, kağıt |
| **Fiş 5** | Açacak, kalem, silgi, ataç |
| **Fiş 6** | Açacak, kalem, silgi, defter |
| **Fiş 7** | Açacak, kalem |
| **Fiş 8** | Açacak, kağıt |


| Adım        | Yapılan İşlem                   | Açıklama                                                                                                                           |
| :---------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| **1. Adım** | Tekli Frekansların Hesaplanması | Defter (5/8 = 0.62) <br>Kalem (6/8 = 0.75)<br>Silgi (4/8 = 0.50)<br>Ataç (2/8 = 0.25)<br>Kağıt (2/8 = 0.25)<br>Açacak (4/8 = 0.50) |
| **2. Adım** | Eşik Değeri Altındakileri Eleme | Ataç ve Kağıt, %25 eşik sınırında kaldığı/altında olduğu için (ya da zayıf görüldüğü için) elenir.                                 |
| **3. Adım** | İkili Kombinasyonları Oluşturma | Kalan ürünler ikili eşleştirilir: <br>(**Defter-Kalem**), (**Defter-Silgi**), (**Kalem-Açacak**) vb.                               |
| **4. Adım** | İkili Elemeleri Yapma           | (**Defter-Açacak**) ve (**Silgi-Açacak**) ikilileri %25 eşiğinin altında kaldığı için tablodan silinir.                            |
| **5. Adım** | Üçlü Kombinasyonları Oluşturma  | Sağ kalan ikililer birleştirilerek üçlü kombinasyonlar (**Defter-Kalem-Silgi** vb.) oluşturulur.                                   |
| **6. Adım** | Üçlü Elemeleri Yapma            | (**Defter-Kalem-Açacak**) gibi eşiği geçemeyenler elenir. Sadece **(Defter-Kalem-Silgi)** üçlüsü hayatta kalır.                    |
| **7. Adım** | Final Tablosu ve Metrikler      | Kalan ürünlerin **Support**, **Confidence** ve **Lift** değerleri hesaplanarak nihai kurallar yazılır.                             |

> [!example] Final Tablosunun Yorumlanması
> Algoritma çalıştıktan sonra elde edilen metrikler bize şu kesin kararları aldırır:
> - **Kalem ve Silgi** tüm alışverişlerin **%50'sinde** birlikte gözlemlenmiştir. (**Support**)
> - **Kalem** alanların **%66'sı** silgi de almaktadır. (**Confidence**)
> - Kalem alanların alışverişlerinde silgi satışı **1.33 kat** artmaktadır. (**Lift**)
> 
> **Sonuç:** Kırtasiyede kalem reyonunun hemen yanına silgi reyonunu koymak yahut e-ticaret sitesinde kalem alan müşteriye silgi önermek satışı doğrudan artıracaktır.





---


## Derse Aşkın

Sınavda Python programlama dilinin sentaks detaylarından yahut kütüphane nasıl kullanılır gibi sorular değil, **kodların veri madenciliği bağlamındaki mantığından** soru gelecek.


- `fit()`, `predict()`, `train_test_split()` gibi temel fonksiyonların ne iş yaptığı ve nerede kullanıldığı sorulacak. 
- **Kod Bloğu Okuma:** Sınavda bir kod bloğu verilip, *“Bu kod satırının amacı nedir?”* (Eksik veriyi mi dolduruyor? Test-train ayrımı mı yapıyor? Threshold/Eşik değerini mi kontrol ediyor?) şeklinde soruların gelme ihtimali yüksektir.
- **Kavram - Algoritma Eşleştirmesi**: Algoritmaların kendine has metrikleri üzerinden sorular gelebilir.
	- Örneğin **Support**, **Confidence** ve **Lift** metriklerinin hangi algoritmaya ait olduğu (**Apriori**), Minkowski veya Euclidean ölçümünün **KNN** ve **K-Means**’e ait olduğu bilinmelidir.


---

## Tablo
| Kilit Kavram                                  | İlgili Algoritma veya Süreç   | Kod Bloğu İşlevi                                          | Detaylı Açıklama                                                                                                                               |
| --------------------------------------------- | ----------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **KDD (Veritabanlarında Bilgi Keşfi) Süreci** | Veri Madenciliği Metodolojisi | `read_csv()`, `drop()`, `fillna()`                        | Ham veriden anlamlı ve gizli bilgilerin çıkarılması için çok aşamalı süreçtir: *Seçim, Ön İşleme, Dönüştürme, Veri Madenciliği, Değerlendirme* |
| **Veri Ön İşleme (Preprocessing)**            | KDD Süreci / *GIGO*           | `dropna()`, `fillna()`, `get_dummies()`, `LabelEncoder()` | Eksik, gürültülü ve tutarsız verilerin temizlenmesi ve analize hazır hale getirilmesi                                                          |
| **Apriori Algoritması**                       | Association Rule Mining       | `apriori()`, `association_rules()`                        | Sık öğe kümelerini bularak *"bunu alan bunu da alır"* ilişkisini çıkarır                                                                       |
| **Support (Destek)**                          | Apriori                       | `apriori(min_support=0.5)`                                | Bir öğe kümesinin veri setinde görülme oranı                                                                                                   |
| **Confidence (Güven)**                        | Apriori                       | `association_rules(metric="confidence")`                  | X alındığında Y alma olasılığı                                                                                                                 |
| **Lift (Kaldıraç)**                           | Apriori                       | `rules[rules["lift"] > 1]`                                | İki ürün arasındaki ilişkinin gücünü ölçer                                                                                                     |
| **K-Means Kümeleme**                          | Unsupervised Learning         | `KMeans().fit()`, `predict()`                             | Veriyi benzerliklerine göre *k* kümeye ayırır                                                                                                  |
| **Elbow (Dirsek) Metodu**                     | K-Means                       | `for k in range(): inertia.append(...)`                   | Optimum küme sayısını belirlemek için hata değişimini inceler                                                                                  |
| **Random Forest**                             | Ensemble Learning             | `fit()`, `predict()`, `feature_importances_`              | Birden fazla karar ağacının birleşimiyle güçlü model oluşturur                                                                                 |
| **Overfitting (Aşırı Öğrenme)**               | Model Eğitimi                 | `max_depth=None`                                          | Modelin veriyi ezberlemesi sonucu genelleme yapamaması                                                                                         |
| **Veri Dönüştürme ve Ölçeklendirme**          | Preprocessing                 | `StandardScaler()`, `MinMaxScaler()`, `OneHotEncoder()`   | Özellikleri aynı ölçeğe getirir ve kategorik veriyi sayısallaştırır                                                                            |
| **fit() vs predict() vs transform()**         | ML Süreci                     | `fit()`, `predict()`, `transform()`                       | *fit*: öğrenme, *predict*: tahmin, *transform*: veri dönüşümü                                                                                  |
| **PCA (Principal Component Analysis)**        | Dimension Reduction           | `PCA().fit_transform()`                                   | Boyut indirgeme ve veri sıkıştırma                                                                                                             |
| **Mesafe Ölçümleri**                          | KNN / K-Means                 | `metric="minkowski"`                                      | Veri noktaları arası uzaklığı hesaplar                                                                                                         |
| **Tahminleme**                                | Classification / Regression   | `model.predict()`                                         | Yeni veriler için çıktı üretme                                                                                                                 |