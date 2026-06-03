---
title: Veri Madenciliği - 13
created: 2026-05-12
draft: false
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-13
konu: (CNN) Evrişimli Sinir Ağları ile Görsel Veri Madenciliği
---
# 1. Görüntü Verilerinde Madenciliğe Giriş
Bugüne kadar veri madenciliği derslerinde genellikle yapısal verilerle (Excel tabloları, CSV dosyaları) uğraştık. Bir kişinin yaşı, maaşı, eğitim durumu gibi [[veri-madenciligi-2#1.1. Verinin Anatomisi Boyutlar ve Kavramlar|Tek boyutlu diziler (1D)]] üzerinden bağımlı değişkeni ($Y$) tahmin etmeye çalıştık. Ancak yapay zekâ dendiğinde akla gelen otonom araçlar, yüz tanıma sistemleri veya robotların temelinde **görüntü (image)** yatar.

Görüntüler, yapısal olmayan verilerdir. Bir resim, satır ve sütunlardan oluşan tek bir diziden ibaret değildir. Piksellerden ve o piksellerin renk katmanlarından (RGB - Red, Green Blue) oluşan karmaşık matrislerdir (3D Tensörler).

>[!example] Bilgisayar Bir Resmi Nasıl Görür?
>- $1000 \times 1000$ piksel boyutunda renkli bir resim düşünün.
>- Bilgisayar için bu, $1000 \times 1000 \times 3 \text{(RGB katmanı)} = 3.000.000$ adet sayılar değer demektir.
>- Bilgisayarın işlemcisi (CPU) ekrana bu resmi çizerken saniyede 3 milyon işlem yapar.
>- Eğer biz 20 milyon resimden oluşan bir veri setini yapay zekâya eğitmeye kalkarsak, bu durum muazzam bir [[veri-madenciligi-12#2. Bilgisayar Bilimlerinin İki Temel Kısıtı Hafıza ve Zaman|Hafıza ve Zaman (Space/Time Complexity)]] problemi yaratır. İşte CNN, bu devasa matrisleri küçülterek eğitilebilir hâle getiren mimarinin adıdır.


## Gerçek Hayattaki Uygulamalar

Görsel veri madenciliğinin ticarî ve hayatî karşılıkları şunlardır:

1. **Tıp (Onkoloji)**: 60 yaşına gelmiş tecrübeli bir doktor, hayatı boyunca belki 50.000 MR görüntüsü görmüştür. Ancak bir yapay zekâ modeli 1 milyon MR görüntüsü ile eğitilebilir. Yapay zekâ, insan gözünün kaçırabileceği tümörlü pikselleri işaretleyerek doktora karar destek sistemi sunar.
2. **Akıllı Tarım**: Ziraat mühendislerinin dönümlerce tarlayı gezmesi yerine, bir drone arazinin 3 boyutlu haritasını çıkarır. YZ, solmuş veya hastalıklı yaprakları tespit eder. Traktör tüm tarlayı ilaçlamak yerine sadece o bölgeye ilaç sıkarak hem zaman hem de gübre/ilaç maliyetinden tasarruf sağlar.
3. **Sanayi ve Üretim Bandı**: Üretim bandından saniyede onlarca ürün geçer. İnsan gücüyle (6-7 kişi) hatalı ürünleri ayıklamak yerine, bandın başına konan bir kamera ve CNN modeli, ürünün 3D görüntüsünü alır. Çatlak veya defolu olan ürünler, servo motorlar vasıtasıyla banttan dışarı atılır. 10 kişinin yaptığı işi daha az hata payıyla tek bir sistem yapar.
4. **Otonom Araçlar ve Güvenlik**: Bilgisayarlı görü (Computer Vision) sayesinde nesne tanıma (YOLO), güvenlik kameralarında yüz tanıma ve olağandışı hareket tespiti yapılır.


# 2.Görüntüden Öznitelik Çıkarma (Feature Extraction)
Makine, görüntüyü doğrudan anlayamaz. Önce görüntünün ayırt edici özelliklerinin (özniteliklerinin) çıkarılması gerekir. Derin öğrenme öncesi bu işlemler manuel yapılıyordu.

## A. Manuel (Elle) Öznitelik Çıkarma Yöntemleri
- **Renk Histogramı**: Resimdeki RGB dağılımına bakılır. "Bu görselin %80'i mavi, demek ki deniz veya gökyüzü olabilir."
- **Kenar Bilgisi (Edge Detection)**: Sobel ve Canny gibi algoritmalarla pikseller arasındaki keskin renk geçişleri bulunarak nesnenin dış hatları (silüeti) çiziliyor. 
- **Yapısal Özellikler**: Gabor filtresi gibi yöntemlerle doku ve yönelim bilgisi çıkarılır. <br>

![[oznitelik.png]]


## B. Otomatik Öznitelik Çıkarma (CNN - Evrişimli Sinir Ağları)
Günümüzde manuel işlemlere gerek kalmamıştır. **CNN (Convolutional Neural Network)**, görüntü üzerindeki kenar, köşe, doku ve renk gibi özellikleri kendisi otomatik olarak öğrenen ve filtreleyen derin öğrenme mimarisidir. Elle özellik çıkarmaya gerek kalmaz; ağ derinleştikçe özellikleri kendi kendine hiyerarşik olarak öğrenir (kenar $\to$ şekil $\to$ nesne $\to$ anlam).


## C. Çıkarılan Bu Özniteliklerle Neler Yapabiliriz? (Veri Madenciliği Entegrasyonu)
CNN ağının resimlerden otomatik çıkardığı bu matematiksel öznitelikler, klasik veri madenciliği algoritmalarına beslenerek devasa analizler yapılabilir:
- **K-Means:** Elde edilen özelliklerle benzer görselleri birbirine kümeleme.
- **Random Forest / XGBoost:** Görsel özelliklere bakarak sınıflandırma yapma.
- **t-SNE:** Yüksek boyutlu bu görsel özellikleri 2D/3D uzayda görselleştirme.
- **Apriori:** Görseller veya nesneler arası birliktelik kuralları çıkarma.
- **LOF (Local Outlier Factor):** Görseller içindeki anomalilerin belirlenmesi.
# 3. CNN Mimarisi
CNN ağı temelde görüntüden özellikler çıkaran (Feature Extraction) ve bu özelliklere bakarak sınıflandırma yapan (classification) iki büyük bölümden oluşur. Geleneksel yapay sinir ağları (ANN) pikselleri doğrudan ve düz bir şekilde işlerken, CNN görsel verilerdeki mekânsal (spatial) ilişkileri koruyarak öğrenir.


![[ozellik-cikar.png]] <br>

![[cnn-islem-sonucu.png]]
### Adım  1: Convolution (Evrişim) Katmanı
- Görüntünün üzerinden gezinen **filtreler (kernels)** bulunur. Bu filtreler genellikle $3 \times 3$ veya $5 \times 5$ boyutlarında matrislerdir.
- Filtre, resmin sol üst köşesinden başlar ve belirlenen adım sayısına (**stride**) göre kayarak tüm resmi tarar. Her filtre, görüntü üzerinde kayan bir pencere gibi hareket eder.
- Her taramada, filtrenin matrisi ile resmin o anki pikselleri matematiksel olarak çarpılır ve tek bir piksele dönüştürülür, **Feature Map (Özellik Haritası)** ÜRETİLİR.
- **Amacı**: Resimden kenar, doku ve renk gibi özellikleri cımbızlamak ve boyutunu bir miktar küçültmek.
- *Not*: Filtrelerin oluşturduğu sonuçlarda bazen eksi (-) değerler, yani piksellerde siyah karşılığı olan anlamsız veriler çıkabilir. Bunları sıfıra eşitlemek (absorbe etmek) için araya **ReLu (Rectified Linear Unit)** aktivasyon fonksiyonu konur. ReLu, negatif değerleri sıfır yapar.

### Adım 2: Pooling (Havuzlama) Katmanı
- Filtrelenmiş özellik haritalarının boyutunu ve makinenin işlem yükünü drastik bir şekilde azaltmak için kullanılır. Böylece ağın çalışma hızı artar
- En yaygın kullanılanı **Max Pooling**'dir. Resmin üzerinde $2 \times 2$'lik kareler açılır ve o 4 piksel içindeki en yüksek değere sahip olan piksel (en yoğun özellik) alınır, diğer 3'ü çöpe atılır.
 - **Ne işe yarar?**: Konumsal değişikliklere karşı dayanıklılık (Spatial Invariance) kazandırır. Örneğin, aradığımız nesne resimde biraz sağa veya sola kaymış olsa bile, havuzlama sayesinde model o nesneyi yine tanır.

>[!example] Kayıplı Sıkıştırma (Lossy Compression)
>Bir ağaç resmini (TIFF  formatında 50MB) Paint'e açıp JPEG olarak (5 MB) kaydettiğimizi düşünelim. Pikseller kaybolmuştur, kalite düşmüştür, ama o resme baktığımızda onun bir ağaç olduğun hâlâ anlarız. İşte, **Max Pooling** işlemi de budur. Önemsiz detayları atarak veriyi sıkıştırır ama nesnenin ayırt edici *özünü* korur.  Böylece işlemci (CPU/GPU) yorulmaz.

### Adım 3: Flatten (Düzleştirme) Katmanı
- Evrişim ve havuzlama katmanlarından defalarca geçip iyice küçülen ama özellikleri belirginleşen matris, artık yapay sinir ağına girmeye hazırdır.
- Ancak yapay sinir ağları matris kabul etmez, **tek boyutlu dizi (1D array)** kabul eder.
- Flatten, bu kare matrisi alır ve düz bir ipe dizer gibi tek bir satır/sütun hâline getirir ($1 \times 1600$ gibi). Artık bunlar bizim eğitimde kullanacağımız $X$ (bağımsız değişken) sütunlarımızdır.
### Adım 4: Dense (Fully Connected) ve Softmax Çıktısı
- Düzleştirien veriler, bizim klasik [[veri-madenciligi-4#A. Denetimli Öğrenme (Supervised Learning)|Denetimli Öğrenme]] modellerimizden (Random Forest, SVM veya Klasik Sinir Ağları) girer. Klasik bir yapay sinir ağı gibi çalışır ve tüm çıkarılmış özellikleri birleştirir.
- Son katmanda kaç sınıfımız varsa (Örn: 0'dan 9'a rakamları tanıyorsak 10 sınıf) o kadar çıktı hücresi (nöron) olur.
- **Softmax** fonksiyonu, resmin hangi sınıfa ait olduğuna dair bir olasılık dağılımı üretir (Örn: %89 ihtimalle 3 rakamı, %5 ihtimalle 8 rakamı). En yüksek olasılık, modelin nihai tatmini olur. 

## 4. Yapay Zekâ Neden %100 Başarı Vermez? (Genelleme vs. Ezber)

>[!danger] Güvenlik Sistemleri vs. Yapay Zekâ
>- **Güvenlik Sistemleri (FaceId, Parmak İzi)**: Telefonumuzu yüzümüzle açarken sistem "Bu kişi %85 Ahmet, hadi kilidi açalım" demez. Güvenlik sistemleri **tahmin yapmaz, genelleme yapmaz, if-else mantığıyla çalışır.** İlk kurulumda bizden aldığı 5 yüz resminin parametrelerini hashleyerek kaydeder. Kameraya baktığımızda anlık parametrelerle hafızadaki parametreleri birebir karşılaştırır. Eşleşme **%100** ise açar. Bu bir yapay zekâ genellemesi değil, parametre doğrulamasıdır. Modellerde %100 başarı [[veri-madenciligi-5#Overfitting|Overfitting]] demektir. <br>
>- **Yapay Zekâ (Örüntü Tanıma)**: Yapay zekânın amacı ezberlemek değildir. Yeni ve hiç görmediği durumlara karşı **genelleme (tümevarım)** yapabilmektir. Bu yüzden YZ sistemlerinden her zaman bir miktar hata yapmaları beklenir. İnsan nasıl hata yapa yapa tecrübe kazanıyorsa, yapay zekânın da hata payı (loss) onun genelleme yeteneğinin bir göstergesidir. %99 veya %95 başarı oranı çok güçlü ve idealdir.

## 5. Transfer Learning (Öğrenme Transferi)
Peki, biz kameradan bir mouse veya bardak tanımak istediğimizde CNN ağını sıfırdan mı eğitiyoruz? Hayır.

Yapay zekânın formülü: $f(x) = X_1W_1 + X_2W_2 = Y$ <br>
Makinenin bütün eğitim süreci, o denklemdeki en iyi $W$ (**Ağırlık/Weight**) değerlerini bulmak üzerine kuruludur. Eğer bir CNN ağını sıfırdan eğitmeye kalkarsak haftalar, aylar sürer ve devasa ekran kartlarına ihtiyaç duyarız.

Bunun yerine Google, Facebook, gibi devlerin devasa veri setleriyle (20-30 milyon resim) önceden eğittiği hazır modellerin $W$ (**Ağırlık**) **matrislerini** alıp kendi projemize katarız. Bu modellere **YOLO, ResNet, VGG, EfficientNet** adı verilir. Bunlar dünyadaki neredeyse tüm temel nesnelerin (kedi, köpek, masa vb.) kenar ve doku özelliklerini çoktan öğrenmiştir. Biz sadece son katmanı değiştirip kendi 500 resmimizi ekleyerek (fine-tuning) modeli özelleştiriyoruz. Buna **Transfer Learning** denir.

## 6. Çoklu Modlu Yaklaşım (Multimodal/Hibrit Modeller)

Bir ürün yorumu = Ürün Fotoğrafı + Müşteri Metni'dir.

Bu noktada iki farklı veri madenciliği disiplini birleşir:

1. Görselden öznitelik çıkarmak için **CNN** kullanılır.
2. Metinden (bağlamdan) öznitelik çıkarmak için [[veri-madenciligi-11#LSTM (Long Short-Term Memory - Uzun Kısa Vadeli Hafıza)|LSTM]] veya **BERT** kullanılır.
3. Bu iki ağın çıktısı birleştirilir (concatenate) ve karar/sınıflandırma katmanına öyle sokulur. Böylece sahte ürün tespiti veya sosyal medya anomali tespiti gibi çok boyutlu analizler çok güçlü şekilde yapılabilir.

| Bileşen                | Görev                                                             | Örnek Araç        |
| :--------------------- | :---------------------------------------------------------------- | :---------------- |
| **CNN (Image)**        | Görselden özellik (kenar/doku) çıkarır.                           | ResNet, VGG       |
| **LSTM / BERT (Text)** | Metinden anlam ve bağlam çıkarır.                                 | BERT, LSTM        |
| **Fusion Katmanı**     | Metin ve görselden gelen öznitelikleri birleştirir (Concatenate). | Concat, Attention |
| **Karar Katmanı**      | Birleşen veriye göre nihai tahmini (sınıflandırmayı) yapar.       | Dense Layer       |

**Uygulama Alanı:** E-ticaret sitelerinde (ürün resmi + müşteri yorumu) analiz edilerek sahte ürün tespiti veya sosyal medyada duygu/anomali analizi yapılması.

## 7. Veri Madenciliği ve CNN Entegrasyonu (Gelişmiş Yaklaşımlar)
CNN ile elde edilen verilerin veri madenciliğiyle harmanlandığı ileri seviye kullanım alanları şunlardır:

### 7.1. Veri Madenciliği Destekli CNN Eğitimi (Yarı Danışmanlı Öğrenme)
- Etiketlenmesi çok pahalı olan (Örn: Tıbbî MR görüntüleri, uydu görüntüleri) veri setlerinde, veri madenciliği ile etiketlenmemiş veriler üzerinde **kümeleme (Clustering)** yapılır.
- Bu kümeleme sonucunda sahte etiketler (**Pseudo-label**) üretilir.
- Üretilen bu sahte etiketler kullanılarak CNN modeline gözetimli (supervised) eğitim yaptırılır (Semi-supervised learning).

### 7.2. Anomali Tespiti
- CNN, güvenlik kamerasındaki bir videodan veya üretim bandındaki görselden şekil/hareket özelliklerini çıkarır.
- Çıkarılan bu özellikler **Isolation Forest** veya **LOF (Local Outlier Factor)** gibi veri madenciliği algoritmalarına sokularak olağandışı durumlar (bozuk ürün, hırsızlık hareketi vb.) tespit edilir.

### 7.3. Öznitelik Seçimi ve Boyut Azaltımı
- CNN'in ara katmanlarından çıkan özellik haritaları çok yüksek boyutludur.
- Veri madenciliğindeki **PCA (Temel Bileşenler Analizi)** gibi yöntemler kullanılarak bu boyutlar indirgenir (gereksiz veriler atılır). Kalan saf vektörler SVM veya Karar Ağaçları ile sınıflandırılır.

### 7.4. CNN + Karar Ağaçları (Hybrid Model ve Açıklanabilirlik)
- CNN görüntüden özellikleri çıkarır, ancak son kararı **Random Forest** veya **XGBoost** gibi algoritmalar verir.
- **Avantajı:** Derin öğrenme modelleri genellikle "Kapalı Kutu (Black Box)" olarak çalışır, neden o kararı verdiğini bilemeyiz. Ancak Karar Ağaçları kullanıldığında **Açıklanabilirlik (Explainability)** artar; modelin kararı hangi kurallara göre verdiği yorumlanabilir hâle gelir.
---

## Notebook

`CNN_FashionMNIST_Notebook.ipynb` dosyasının arka planında dönen mantık şöyledir:

- **Veri Seti (Fashion-MNIST)**: $28\times28$ piksel boyutunda, gri tonlamalı (tek kanallı) 70.000 adet kıyafet, ayakkabı, çanta resmi.
- **Veri Ön İşleme (Normalizasyon)**: Piksellerin RGB değerleri 0 ile 255 arasındadır. Görüntüyü modele vermeden önce tüm pikseller `255.0`'a bölünür. Tıpkı KNN'de yaptığımız`StandardScaler` gibi, bu işlem verileri **0 ile 1 aralığına** sıkıştırır (normalize eder). Makine küçük sayılarla daha hızlı ve kararlı öğreniyor.
- **One-Hot Encoding (`to_categorical`)**: Makine "Çanta" veya "Ayakkabı" gibi kelimeleri veya doğrudan sınıfları temsil eden rakamları (Örn: 3. Sınıf) anlamaz. Bu yüzden 3 rakamı `[0,0,0,1,0,0,0,0,0,0]` şeklinde (3. indeksin 1, diğerlerinin 0 olduğu) matris dizisine çevrilir.
- **`batch_size=64`**: 60.000 resmi modele tek seferde vermek RAM'i patlatır. Resimlerin 64'er gruplar hâlinde alınarak eğitilmesini sağlar.
- **Harici Görsel (Real Test)**: İnternetten indirdiğimiz renkli ve karmaşık arka planlı bir çanta resmini modele verdiğimizde kafası karışabilir. Çünkü model $28\times28$ siyah-beyaz ve temiz arka planlı verilerle eğitilmiştir. Harici resmi test edebilmek için önce OpenCV/PIL ile siyah-beyaza çevirmeli, $28\times28$'e küçültmeli ve boyutunu modele uygun (`1, 28, 28, 1`) şekline getirmeliyiz (Reshape işlemi).

---

## Sınavda Çıkabilecekler

- **Kavramsal Ayrım (Güvenlik vs. YZ)**: "Yapay zekâ neden %100 bilmez?" minvalinde bir soru gelebilir. FaceID'nin bir if-else eşleşmesi olduğu, CNN'in ise bir genelleme (tümevarım) algoritması olduğunu bilmek lazım.
- **CNN Katmanlarının Görevleri**:
	- *Convolution (Evrişim) e yapar?* $\to$ Filtre gezdirerek resmin kenar/doku özelliğini çıkarır.
	- *Pooling (Havuzlama) ne yapar?* $\to$ Resmi (kayıplı olarak) sıkıştırıp boyutu ve işlem yükünü azaltır, en belirgin özelliği tutar.
	- *Flatten ne yapar?* $\to$ Kare matrisi alıp tek bir düz çizgi (array) yapar ki yapay sinir ağına girebilsin.