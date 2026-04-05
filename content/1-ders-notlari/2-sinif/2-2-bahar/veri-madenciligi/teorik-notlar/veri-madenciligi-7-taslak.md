---
tags:
  - ders
  - veri-madenciligi
  - birliktelik-kurallari
  - apriori
aliases:
  - Birliktelik Kuralları ve Apriori Algoritması
draft: true
---

# Birliktelik Kuralları ve Apriori Algoritması

Bu haftaki dersimizde, veriler arasındaki gizli kalıpları ve bağlantıları keşfetmemizi sağlayan **Birliktelik Kuralları (Association Rules)** ve bu kuralların en temel taşı olan **Apriori Algoritması** işlenmiştir. Konu; e-ticaret sitelerindeki öneri sistemlerinin, market reyon dizilimlerinin ve insan davranış analitiğinin arkasındaki temel itici gücü oluşturmaktadır.

---

## 1. Dersin Bürokrasisi

- **Sınav Formatı ve Süresi:** Vize ve Final sınavları test usulü olacaktır. Sınavda en az 30-35, muhtemelen 40-45 arası soru olacaktır. Sınav süresi 60 dakika olarak belirlenmiştir.
- **Dönem Sonu Projesi Muafiyeti:** Apriori Algoritması dönem sonu projesi kapsamında **kullanılamayacak** algoritmalardan biridir. Zira proje kapsamında öğrencilerden bir tahminde bulunmaları ve model başarısını (`Accuracy`) artırmaları beklenmektedir; oysa Apriori bir tahmin algoritması değil, kural çıkarım algoritmasıdır.

---

## 2. Derse Değgin

### 2.1. Birliktelik Kuralları ve Apriori Felsefesi
Birliktelik Kuralları, etiket bulunmayan veriler üzerinden örüntü yakalamaya çalışan bir **[[veri-madenciligi-4#B. Denetimsiz Öğrenme (Unsupervised Learning)|Gözetimsiz Öğrenme (Unsupervised Learning)]]** tekniğidir. Agrawal ve Srikant tarafından 1994 yılında (IBM bünyesinde) geliştirilmiş olup, bu alanda en fazla bilinen ve kullanılan algoritmadır.

Bu algoritmada amaç bir çıktıyı ($Y$ - Bağımlı Değişken) tahmin etmek değildir. Amaç, eldeki devasa veri tabanlarında (örneğin alışveriş fişleri) öğe gruplarının kendi aralarındaki bağlanma frekanslarını ve koşullu olasılıklarını tespit etmektir.

> [!quote] Kantiyen Bir Bakış: Algoritmaya Neden "Apriori" Denmiş?
> Felsefede, özellikle Immanuel Kant'ın bilgi kuramında **"A priori"**, kelime anlamı olarak **"önsel / deneyimden bağımsız"** demektir. Yani bir bilginin doğru olduğunu kanıtlamak için dış dünyaya bakmaya, tecrübe etmeye veya deneye (veriye) ihtiyaç duymadan, salt akıl ve mantık yürütmeyle ulaşılan kesin bilgidir.
> 
> Algoritmanın kalbinde şu sarsılmaz kural yatar (Apriori Prensibi): **"Eğer bir alt küme sık geçmiyorsa, onu barındıran hiçbir üst küme de sık geçemez."**
> - Diyelim ki market verisinde sadece `{Süt}` alma oranı, belirlediğimiz eşik değerinin (%25) altında kaldı.
> - Algoritma bir sonraki aşamada `{Süt, Ekmek}` veya `{Süt, Yumurta}` kombinasyonlarının ne kadar sattığını görmek için veri tabanını baştan sona tekrar tarayıp sayma zahmetine (deneyime/tecrübeye) girmez.
> - Çünkü `{Süt}`'ün zaten tek başına yeterince satmadığını önsel (a priori) olarak bilmektedir. 

Kısacası Apriori algoritması; büyük ve karmaşık ürün gruplarını hesaplamak için veri tabanını körü körüne taramak yerine, bir önceki adımdan elde ettiği a priori bilgiyi kullanarak mantıksal bir çıkarım yapar ve gereksiz ihtimalleri doğmadan budar.

### 2.2. Gerçek Hayat Uygulamaları (Market Basket Analysis)
Bilgisayar bilimi, temelde insan davranışlarını anlama ve modelleme çabasıdır. Alışveriş alışkanlıklarımız rastgele görünse de aslında altlarında güçlü kurallar barındırır.

- **Fiziksel Mağazacılık (Reyon Dizilimi):** Yurt dışındaki marketlerde bebek bezi ve içki reyonlarının yan yana dizilmesinin sebebi, yapılan sepet analizlerinde bu iki ürünün birlikte alınma oranının çok yüksek çıkmasıdır.
- **Gezdirme vs. Hedefe Yönelme Politikaları:** Marketlerin sebze-meyveyi girişe koyup ekmek ve kasayı en arkaya koyması tüm marketi gezdirmek içindir. Ancak Apriori’nin mantığı doğrudan nokta atışı hedeflere yöneliktir. Bir müşteri acelesi olup sadece ekmek almaya girdiğinde, ekmeğin yanına koyacağınız süt (ekmek-süt birlikteliği yüksek olduğu için), müşteriye unuttuğu ihtiyacını anında hatırlatıp satışı artıracaktır.
- **E-Ticaret ve Öneri Sistemleri:** Amazon veya Hepsiburada gibi sitelerde sepetinize bir ürün attığınızda karşınıza çıkan “Bunu alanlar bunu da aldı” önerilerinin arkasında bu kural seti yatar.

### 2.3. Birliktelik Kurallarının 3 Temel Metriği
Veri seti içindeki örüntüleri matematiksel olarak kanıtlamak için 3 temel formül kullanılır:

#### 1. Support (Destek)
Bir ürünün (veya ürün kombinasyonunun) tüm alışveriş fişleri içerisinde görülme sıklığıdır.
$$
\text{Support} = \frac{\text{frq}(X,Y)}{N}
$$
*(Burada $N$, toplam işlem/fiş sayısıdır. $X$ ve $Y$'nin birlikte görülme olasılığını verir.)*

#### 2. Confidence (Güven/Yatkınlık)
$X$ ürününü alan bir müşterinin $Y$ ürününü de alma olasılığıdır. Ürün çiftlerinin koşullu oluşma ihtimalidir.
$$
\text{Confidence (Rule: } X \Rightarrow Y) = \frac{\text{frq}(X,Y)}{\text{frq}(X)}
$$
#### 3. Lift (Kaldıraç / Değer)
$X$ ürünü satın alındığında, $Y$ ürününün satın alınma olasılığının kaç kat arttığını gösteren metriktir.
$$
\text{Lift} = \frac{\text{Support}}{\text{Supp}(X) \times \text{Supp}(Y)}
$$
> [!info] Lift Değerinin Yorumlanması
> - **Lift = 1**: İki ürün arasında hiçbir ilişki yoktur. Birbirinden bağımsızdırlar.
> - **Lift > 1**: Pozitif ilişki vardır. X satışı Y satışını tetikler.
> - **Lift < 1**: Negatif ilişki vardır. X satışı Y satışını baltalar.

---

### 2.4. Çalışma Mekanizması: Adım Adım İterasyon (Kırtasiye Örneği)
Apriori algoritması, kural çıkartırken **Aşağıdan-Yukarıya (Bottom-Up)** ve **İteratif (Tekrarlayıcı)** bir yaklaşım sergiler. Bu süreci anlamak için bir kırtasiye veritabanı düşünelim.

- **Toplam İşlem (N):** 8 adet alışveriş fişi var.
- **Eşik Değeri (Threshold/Support):** %25 (Yani 8 fişin en az 2'sinde geçmeyen ürünler elenecektir).

| Adım        | Yapılan İşlem                   | Açıklama                                                                                                                 |
| :---------- | :------------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| **1. Adım** | Tekli Frekansların Hesaplanması | Defter (5/8 = 0.62), Kalem (6/8 = 0.75), Silgi (4/8 = 0.50), Ataç (2/8 = 0.25), Kağıt (2/8 = 0.25), Açacak (4/8 = 0.50). |
| **2. Adım** | Eşik Değeri Altındakileri Eleme | Ataç ve Kağıt, %25 eşik sınırında kaldığı/altında olduğu için (ya da zayıf görüldüğü için) elenir.                       |
| **3. Adım** | İkili Kombinasyonları Oluşturma | Kalan ürünler ikili eşleştirilir: (Defter-Kalem), (Defter-Silgi), (Kalem-Açacak) vb.                                     |
| **4. Adım** | İkili Elemeleri Yapma           | (Defter-Açacak) ve (Silgi-Açacak) ikilileri %25 eşiğinin altında kaldığı için tablodan silinir.                          |
| **5. Adım** | Üçlü Kombinasyonları Oluşturma  | Sağ kalan ikililer birleştirilerek üçlü kombinasyonlar (Defter-Kalem-Silgi vb.) oluşturulur.                             |
| **6. Adım** | Üçlü Elemeleri Yapma            | (Defter-Kalem-Açacak) gibi eşiği geçemeyenler elenir. Sadece **(Defter-Kalem-Silgi)** üçlüsü hayatta kalır.              |
| **7. Adım** | Final Tablosu ve Metrikler      | Kalan ürünlerin Support, Confidence ve Lift değerleri hesaplanarak nihai kurallar yazılır.                               |

> [!example] Final Tablosunun Yorumlanması
> Algoritma çalıştıktan sonra elde edilen metrikler bize şu kesin ticari kararları aldırır:
> - **Kalem ve Silgi** tüm alışverişlerin **%50'sinde** birlikte gözlemlenmiştir. (Support)
> - **Kalem** alanların **%66'sı** silgi de almaktadır. (Confidence)
> - Kalem alanların alışverişlerinde silgi satışı **1.33 kat** artmaktadır. (Lift)
> 
> **Sonuç:** Kırtasiyede kalem reyonunun hemen yanına silgi reyonunu koymak yahut e-ticaret sitesinde kalem alan müşteriye silgi önermek satışı doğrudan artıracaktır.

---

## 3. Derse Aşkın

Sınav hazırlığı ve hocanın soru tarzına dair çıkarımlar:

- **Sözdizimi Değil, Mantık:** Sınavda Python programlama dilinin sentaks detaylarından yahut "hangi kütüphane nasıl `import` edilir" gibi sorular değil, yazılan kodların **veri madenciliği bağlamındaki mantığından** soru gelecektir.
- **Fonksiyonların Amacı:** `fit()`, `predict()`, `train_test_split()` gibi temel makine öğrenmesi fonksiyonlarının ne iş yaptığı ve veri ön işleme/eğitim sürecinin neresinde kullanıldığı kesinlikle bilinmelidir.
- **Kod Bloğu Okuma:** Sınavda bir kod bloğu verilip, *“Bu kod satırının amacı nedir?”* (Eksik veriyi mi dolduruyor? Test-train ayrımı mı yapıyor? Threshold/Eşik değerini mi kontrol ediyor?) şeklinde soruların gelme ihtimali yüksektir.
- **Kavram - Algoritma Eşleştirmesi:** Sınavda algoritmaların kendine has metrikleri üzerinden çapraz eşleştirme soruları gelebilir.
	- Örneğin; **Support, Confidence ve Lift** metriklerinin **Apriori** algoritmasına ait olduğu; **Minkowski veya Euclidean** mesafe ölçümlerinin ise **KNN ve K-Means** algoritmalarına ait olduğu ayrımı net bir şekilde oturtulmalıdır.