---
title: Veri Madenciliği - 11
created: 2026-04-28
draft: true
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-11
konu: Zaman Serileri
---
## Zaman Serileri

- Verileri kısaca eşit zaman aralıklarında elde edilen ve kronolojik bir zaman sırasında tutan verilerdir.
- Verinin bir sıraya bağlı olması gerekir.
	- Önceki verinin, bugünü etkilemiş olması yahut daha önceden etkielnmiş olması gerekiyor. Bu gibi yapılara zaman serisi adını veriyoruz. Genellikle sayısal verilerden elde ediyoruz; eşit zaman aralıklarında elde edilen verilerdir kısaca.
- **Kritik bir noktası vardır**: Bir kriter var, 80-20 ayrımı yaparken de uyguladığımız bir kriter. O kriter, zaman serilerinde geçerli değildir. Random seçim kriterini uygulardır, veriler rastgele seçilirlerdi. Gelgelelim zaman serilerinde rastgele seçemeyiz, çünkü bunlar kronolojik bir zaman serisinde tutulduklarından dolayı, **sıralı olarak eğitilmek zorundadır veri.** 
- Zaman serisi, belirli zaman aralıklarında ölçülen ve zaman bağımlılığı içeren gözlemler dizisidir.


- Günlük tutmak da bir zaman seridir. Aylık da. Elektrik ve doğal gaz da aynı cümleden.


$$X_t = f(X_{t-1}, X_{t-2}, ., \cdots)$$



- Neden yapıyoruz bunu? Merak ediyoruz abi işte. Gözlemin bugünkü ve geçmiş değerlerine bakarak, gelecekte alacağı değerlerin tespit edilmeye çalışması isteğimiz vardır. Geleceği tahmin etme isteğimiz var, bundan dolayı geçmiş değerlere bakmamız gerekiyor. Bunu yapabilmenin en iyi yollarından birisi de **zaman serisi analizidir**.


### Zaman serileri dört bileşene ayrılabilir:

#### Trend
- Verilerin yukarı yahut aşağı yönlü olarak uzun vadede sergiledikleri hareketler. Yatırım, ekonomi, iktisat ve birçok alanda önemli çıktılar elde edilebilmesini sağlayan trend kavramı, zaman serileri başlığı altında bilgi sahibi olunması gereken en önemli konulardan biridir.
- (Buraya düşen ve yükselen trend grafiği gerekiyor)

#### Mevsimsellik/Dönemsellik (Seasonality)
- Bir dönem boyunca tekrar eden belirli bir kalıbı tanımlar. Periyodik olarak tekrar eden bir örüntü sergiler.
#### Döngüsellik
- Daha uzun vadeli ve belirsiz yapılarda, gün/hafta/yıl gibi zaman aralıklarıyla örtüşmeyecek şekilde, daha çok yapısal nedenler ve konjonktürel değişimlerle şekillenerek gerçekleşir.

#### Gürültü
- Kalıntılar veya düzensizlikler olarak da bilinir. Trend ve mevsimsellik etkisi ortadan kaldırıldıktan sonra geriye kalanlar kalıntılardır. **Öngörülemeyen kısa vadeli dalgalanma** şeklinde de özetlenebilir. 
- *Gerçek değerler gürültü değildir, "sıradışı" yahut "aykırı (outlier)" değerdir. Değerler gerçekse gürültü değildir, outlierdır.*

#### Durağanlık
Bir serinin istatistiksel özelliklerinin zaman içerisinde değişime uğramamasıdır.

### Konjonktürel Dalgalanmalar
- Bir yıldan fazla süren, uzunluğu sabit kalmayan ve genellikle ekonomik koşulların etkisinden dolayı birçok değişkende görülen dalgalanmalardır.

- Genellikle dört aşamayı içerir:
	- Genişleme, zirve, daralma ve dip


- Zaman serisi tahmininde AR, MA, ARIMA, SARIMA, SARIMAX, Cointegration, XGBoost ve **LSTM** gibi birçok farklı yaklaşım vardır. Zaman serisi tahmininde kullanılan çeşitli istatistiksel, matematiksel, makine öğrenmesi ve derin öğrenme tabanlı yöntemlerdir.
- Pencereleme yöntemi kullanacağız. LSTM kullanarak.
- Zaman serisinde, **bağımsız değişkenler yoktur**. Makine öğrenmesi modelleri özellikle zaman serisi verileri için üretilmemiştir dolayısıyla. Ancak zaman serimize ilişkin özellikleri (ay, yıl, gün, mevsimsellik vs.) bağımsız değişkenlere dönüştürerek bunları zaman serilerine uyarlamak oldukça kolaydır.

### Derin Öğrenme Tabanlı Modeller (LSTM)
- RNN (Recurrent Neural Network), derin öğrenme alanında kullanılan bir yaapy zekâ mimarisidir. Normal sinir ağlarından farklı olarak RNN'ler geçmiş bilgileri işleme yeteneğine sahiptir. Bu sayede özellikle zaman serileri gibi sıralı verilerden anlam çıkarmak için idealdir.
- Cümleler arasındaki bağı hatırladığı için metin madenciliğinde de kullanılıyor galiba, dil modellerinde de?
- Hücre durumu, geçmiş ve güncel bilgilerin bir kombinasyonunu saklar. Bu sayede LSTM'ler, veri setindeki uzun vadeli bağımlılıkları da öğrenebilir ve modelleyebilir.
- Train ve steps kavramı önemli notebookta. Hatırlayalım bunu. Ne deniliyor train ve **stepse (özellike steps)** bakacağız notebook bağlamında.