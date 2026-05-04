---
title: Veri Madenciliği - 11
created: 2026-04-28
draft: true
tags:
  - akademi/dersler/veri-madenciligi
slug: veri-madenciligi-11
konu: Zaman Serileri ve LSTM Algoritması
---

## Dersin Bürokrasisi
- Sınava yönelik **"ezber değil, kodun mantığı"** kuralı bu hafta da geçerli. Jupyter Notebook üzerinden gösterilen `Epoch`, `Batch Size`, `Dense`, `Sequential` gibi Keras/TensorFlow fonksiyonlarının ne işe yaradığını ezberlemekten ziyade, "Veri madenciliği sürecinde hangi aşamaya denk geliyor?" ekseninde bilmeniz bekleniyor.
- Zaman serilerinde klasik `train_test_split` fonksiyonu ile rastgele (random) veri bölme işlemi **yapılmaz**. Bu, derste en çok vurgulanan ve muhtemel bir sınav tuzağı olan konudur.
- Veri seti olarak derste *Airline Passenger* (Uçak Yolcu Sayıları) ve *IBM Hisse Senedi* veri setleri incelenmiştir.

---

## Derse Değgin

### 1. Zaman Serisi (Time Series) Nedir?

Zaman serisi verileri kısaca eşit zaman aralıklarında (saatlik, günlük, aylık vb.) elde edilen ve **kronolojik bir zaman sırasında tutulan** sayısal verilerdir. Bu verilerin en büyük özelliği bir sıraya bağlı olmaları ve zaman bağımlılığı içermeleridir.

Zaman serilerinde temel felsefe şudur: **"Bugün, dünden etkilenmiştir."** Bir gözlemin bugünkü ve geçmiş değerlerine bakarak, gelecekte alacağı değerlerin tespit edilmeye çalışılması (geleceği tahminleme) işidir.

**Matematiksel Gösterimi:**
$$X_t = f(X_{t-1}, X_{t-2}, \dots, \epsilon_t)$$
> [!warning] Hoca Özellikle Burayı Vurguluyor: Geleneksel Modellerden Farkı
> Önceki haftalarda işlediğimiz Karar Ağaçları, Random Forest veya [[veri-madenciligi-5#B. K-Nearest Neighbors (KNN - K-En Yakın Komşu)|KNN]] gibi makine öğrenmesi algoritmalarında veriyi eğitirken **rastgele seçim (random split)** kriteri uyguluyorduk. 
> Ancak zaman serilerinde veriler **RASTGELE SEÇİLEMEZ!** Verinin kronolojik/sıralı olarak eğitilmesi mecburidir. Çünkü verilerin sırasını bozarsanız, geçmişin geleceği etkileme örüntüsünü (pattern) yok etmiş olursunuz.

### 2. Zaman Serisi Bileşenleri

Bir zaman serisi grafiğine baktığımızda onu oluşturan dört temel bileşen (davranış) görürüz:

1. **Trend (Eğilim):** Verilerin uzun vadede yukarı ya da aşağı yönlü olarak sergiledikleri harekettir. (Yükselen trend / Düşen trend). Borsa, yatırım ve ekonomide yönü belirleyen ana unsurdur.
2. **Mevsimsellik (Seasonality):** Bir dönem boyunca periyodik olarak tekrar eden belirli bir kalıbı (örüntüyü) tanımlar. 
	- *Örnek:* Elektrik faturasının kış aylarında veya yazın klima kullanımından dolayı daha yüksek gelmesi. Otellerdeki müşteri sayısının yazın pik yapıp kışın düşmesi.
3. **Döngüsellik (Cyclicality):** Mevsimselliğe benzer ancak daha uzun vadeli, belirsiz yapılarda ve konjonktürel değişimlerle şekillenen dalgalanmalardır. **Konjonktürel Dalgalanmalar (Business Cycles)** genellikle 4 aşamadan oluşur:
	- Genişleme (Expansion)
	- Zirve (Peak)
	- Daralma (Contraction / Recession)
	- Dip (Trough)
4. **Gürültü (Noise):** Trend ve mevsimsellik etkisi ortadan kaldırıldıktan sonra geriye kalan, öngörülemeyen kısa vadeli kalıntılar ve düzensizliklerdir. 

> [!danger] Kavram Yanılgısı: Gürültü vs. Outlier (Aykırı Değer)
> Sınıftaki tartışmadan çıkan önemli bir ayrım: Gerçek değerler, çok anormal sıçramalar yapsalar bile **gürültü değildir**, onlar [[veri-madenciligi-3#B. Gürültülü Veri (Noisy Data / Outliers)|aykırı değerdir (outlier)]]. 
> - Örneğin siyasi bir kriz sonrası benzinin aniden fırlaması bir *outlier* (gerçek değerdir). 
> - Maaşın yanlışlıkla eksi (-) girilmesi veya sistemsel okuma hataları ise *gürültüdür*. 

*(Ek Kavram)* **Durağanlık (Stationarity):** Bir serinin istatistiksel özelliklerinin (ortalaması, varyansı ve kovaryansı) zaman içerisinde sabit kalması, değişime uğramaması durumudur.

---

### 3. Zaman Serilerinde Tahmin ve Pencereleme (Sliding Window) Yöntemi

Zaman serisi tahmininde en büyük problem **bağımsız değişkenlerin ($X$ sütunlarının) olmamasıdır**. Geleneksel makine öğrenmesinde hastanın yaşı, kilosu, şekeri ($X$'ler) verilip hasta olup olmadığı ($Y$) tahmin edilir. Ancak zaman serisinde elimizde sadece kronolojik olarak dizilmiş tek bir veri sütunu (örneğin elektrik tüketimi) vardır.

Peki makineye neyi vereceğiz de neyi tahmin edecek? Cevap: **Pencereleme (Sliding Window Transformation)**.

Geçmiş verileri bağımsız değişkenlere ($X$), gelecekteki veriyi ise hedef değişkene ($Y$) dönüştürürüz.

```mermaid
graph LR
    A[Ham Zaman Serisi <br> 10, 20, 30, 40, 50, 60] --> B(Pencere Uzunluğu = 3)
    
    B --> C["X (Girdiler) = [10, 20, 30]"]
    C --> D["Y (Çıktı) = 40"]
    
    B --> E["X (Girdiler) = [20, 30, 40]"]
    E --> F["Y (Çıktı) = 50"]
    
    B --> G["X (Girdiler) = [30, 40, 50]"]
    G --> H["Y (Çıktı) = 60"]
    
    style B fill:#f9f,stroke:#333,stroke-width:2px
```

| Pencere Boyutu (Window Length) | Özellikleri                                                                                       |
| :----------------------------- | :------------------------------------------------------------------------------------------------ |
| **Küçük Window (Örn: 2-3)**    | Hızlı öğrenir, az bilgi toplar, basit örüntüleri tanır. Kısa veri setleri için uygundur.          |
| **Büyük Window (Örn: 10-15)**  | Daha fazla bağlam (context) içerir, daha fazla bilgi toplar, çok karmaşık örüntüleri tanıyabilir. |

*Hocanın Notu:* Doğru pencere boyutu baştan bilinmez; **deneyerek (trial and error)** en iyi sonucu veren boyut bulunur.

---

### 4. Derin Öğrenme Tabanlı Modeller (RNN ve LSTM)

Zaman serisi tahminlerinde AR, MA, ARIMA gibi eski istatistiksel modellerin yerini günümüzde yapay zekâ/derin öğrenme modelleri almıştır.

#### Neden Klasik Makine Öğrenmesi Değil?
KNN veya Karar Ağaçları gibi modellerin **hafızası yoktur**. Yeni bir veri geldiğinde geçmişteki sıralamayı hatırlamazlar. 

#### RNN (Recurrent Neural Network - Tekrarlayan Sinir Ağları)
Normal sinir ağlarından farklı olarak geçmiş bilgileri işleme ve hafızada tutma yeteneğine sahiptir. Bir çıktının ne olduğunu hafızasında saklayabilen temel bir modeldir.

#### LSTM (Long Short-Term Memory - Uzun Kısa Vadeli Hafıza)
RNN'in özel ve çok daha gelişmiş bir türüdür. Sadece bir önceki adımı değil, **uzun vadeli bağımlılıkları** da öğrenebilir ve modelleyebilir. NLP'de (Doğal Dil İşleme) cümleler arası bağlamı kurmak için kullanıldığı gibi, zaman serilerinde de geçmiş günlerin hareketini akılda tutmak için kullanılır.

LSTM hücreleri 3 özel kapıdan (Gate) oluşur:
1. **Unutma Kapısı (Forget Gate):** Geçmiş bilginin ne kadarının silineceğini/unutulacağını kontrol eder.
2. **Giriş Kapısı (Input Gate):** Yeni bilginin hücreye ne kadar ekleneceğini belirler.
3. **Çıkış Kapısı (Output Gate):** Hücrenin dışarıya hangi bilgiyi çıktı olarak vereceğini kontrol eder.

---

### 5. Bürokrasiye Değmeyen Ama Derste Geçen Uygulama Notları (Notebook Çıkarımları)

Derste Python/Keras üzerinden bir LSTM modelinin adım adım nasıl kurgulandığı gösterildi. Kodun işleyiş akışı şu şekildedir:

1. **Verinin Okunması ve Ayrılması:** 
   Önce veriler `MinMaxScaler` ile 0-1 arasına çekilir (Normalize edilir). Ardından veri körü körüne bölünmez. Veri setinin örneğin `0'dan 110'a kadar` olan kısmı Train (Eğitim), `110'dan sonrası` Test olarak **kronolojik sırayla** ikiye ayrılır.
2. **Modelin Kurulması (Sequential & Layers):**
   - `Sequential()`: Modelin baştan sona sıralı ve akışkan bir yapıda olacağını belirtir.
   - `LSTM Katmanı`: Hafıza modelinin kurulduğu yerdir (Örn: `input_shape` ile boyut verilir).
   - `Dense Katmanı (Fully Connected Layer)`: Modelin tahmin üreten, her şeyin bağlandığı son çıktı katmanıdır. Araya birden fazla `Dense` eklenerek model derinleştirilebilir (Hidden Layers).
3. **Modelin Derlenmesi (Loss ve Optimizer):**
   - `Loss (Kayıp Fonksiyonu)`: Modelin hatasını neyle ölçeceğimizdir. Genelde MSE (Mean Squared Error - Karesel Hata) kullanılır.
   - `Optimizer (Optimizasyon)`: En iyi (optimum) ağırlıkları bulmak için kullanılan yöntemdir. Derste `Adam` optimizasyonu kullanıldı.
4. **Modelin Eğitilmesi (Fit):**
   - `Epoch`: Tüm verisetinin ağdan (modelden) baştan sona bir kez geçirilmesi işlemidir. 15 veya 25 gibi sayılar denenerek başarının arttığı yer bulunur.
   - `Batch Size`: Verilerin kaçarlı gruplar halinde işleneceğini söyler (Örn: 144 veriyi 32'şer 32'şer alıp güncellemek).

**Başarı Değerlendirmesi ($R^2$ Skoru):**
Derste başarı metriği olarak $R^2$ (Determination/Varyans Oranı) kullanıldı. Modelin tahmin ettiği verinin varyansı 1.00'e (yani %100'e) ne kadar yakınsa, model orijinal verinin örüntüsünü o kadar iyi yakalamış (öğrenmiş) demektir. (Örn: %90 başarı). Bkz: [[PCA#PCA'in Kırmızı Çizgisi Varyans|Varyansın Korunması]]

---

## Derse Aşkın

### Ne Çıkabilir / Çalışma Güzergâhı
- **Train-Test Split Tuzağı:** Sınavda geleneksel makine öğrenmesi ile zaman serileri arasındaki en büyük fark sorulursa cevap **veri bölme yöntemidir**. Zaman serilerinde random (rastgele) seçim yapılamaz; kronoloji korunmalıdır.
- **Kavram Eşleştirmesi:** Sınavda bir yapay zekâ modelinin adının zaman serisiyle eşleştirilmesi istenebilir. KNN veya K-Means'in hafızası yoktur. Hafıza ve zaman serisi denilince akla **RNN ve özellikle LSTM** gelmelidir.
- **Pencereleme (Sliding Window):** Kodu sorulmasa da mantığı sorulabilir. "Zaman serilerinde bağımsız değişken (X) nasıl elde edilir?" sorusunun cevabı, verinin belirli bir pencere boyutuyla kaydırılarak bir önceki verilerin X, bir sonraki verinin Y yapılmasıdır.
- **Epoch ve Batch Size Ayrımı:** Derste üzerine duruldu. `Epoch` tüm verinin bir tur atmasıdır, `Batch Size` ise o tur atılırken verinin kaçarlı dilimler halinde işleneceğidir.

> [!example] Hocanın Karbon Ayak İzi Analojisi
> Hoca dersin başında uzun uzun bir konudan bahsetti: Borsa grafikleri, elektrik faturaları ve uçak biletleri... 
> **Ne anlatıyor?** Zaman serisi analizi salt "yarın hava kaç derece olacak" işi değildir. Bankalar ve devletler, kredi kartı harcamalarınızın zaman serisi analizini yaparak sizin "Karbon Ayak İzinizi" tahmin etmekte ve gelecekte size "Çok uçak bileti aldın, kotan doldu" diyerek bilet satmama ihtimalini bu algoritmalar (LSTM vb.) üzerine kurmaktadır. Yani zaman serisi, doğrudan insan davranışının profillenmesi ve karar mekanizmalarının algoritmik botlara devredilmesidir. Sınavda çıkmaz ama vizyon açısından kıymetlidir.