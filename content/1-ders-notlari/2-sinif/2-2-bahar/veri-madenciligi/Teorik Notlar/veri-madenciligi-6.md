---
title: Veri Madenciliği - 5
created: 2026-03-24
draft: true
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-6
konu: Kümeleme (Clustering)
---
## A. Kümeleme
- **Gözetimsiz öğrenme tekniğidir**. 
	- Etiketleme yoktur.
- Unsupervised ML mermaid'i oluşturmak lazım bu noktada «».

### K-Means
- Denetimsizdir, etiketsizdir ve özellik olarak yaptığı işlem: benzer veri gruplarını aynı gruba toplamak.
- Bizim için sağladığı tek durum (kişisel?) **yorumlama özelliği kazanmamızdır.** Tahmin edebilir sonuç <u>üretmez</u>.
- Neden tahmin üretmiyor bakmak lazım...
- Var-olan elemanlar üzerinde kümeleme işlemi gerçekleştiriyoruz. Sonraki işlemde tahmin etme özelliği kazandırmış olabiliriz; bu bağlamda K-Means bana bir şey kazandırıyor: **etiketleme**. Günümüzdeki otomatik etiketleme sistemlerini ? K-Means ile gerçekleştiriyoruz.
- **ETİKETLENMEMİŞ VERİLERDE KULLANILIR**.
- **GİRDİSİ VE ÇIKTISI OLAN BİR VERİ GRUBUNA İHTİYACIMIZ YOKTUR K-MEANS İÇİN; BELİRLİ HASTALIK GRUBUNDA SAĞLIKLI MI DEĞİL Mİ GİBİ KARAR EREN BİR SÜTUYA AİT VERİYE İHTİYACIMIZ YOKTUR YANİ.***
	- x bağımlı y bağımsız?
- Kümelemenin, k-means'in çalışmasında, **y sütunu yoktur, hep x'ler vardır**.
	- Söz gelimi, marketteki fişler bizim zengin mi fakir mi diye bir yorum yapmaz; aldığım bilgilerden oluşan bir veri grubunu imler. 1-2-100-1000 gibi kişi alışveriş yapmıştır ve onlar için ilgili bir nitelik değerlendirmesi yoktur; sadece alışverişlerini yapmıştır. 
		- Bunlar arasında kümeleme yapabiliriz; ekmek alanlar, sadece ekmek sadece peynir gibi gibi.  
			- Onları sınıflandırma yolunda etiketlemiş oluruz bu bağlamda.

- Sadece matematiksel modellerden yararlanarak yapar.
- Sınıflandırdığı şeyin ne olduğunu bilmez.
- Netflix algoritması gibi herhal?
- Lossless kayıpsız ve kayıplı sıkıştırma var.

## Kümeleme Algoritmaları
## A. K-Means
- Kaç tane K (küme) merkezi oluşacağı problemi, en önemli problemdir bu algoritma için.
- Mesafe tabanlı (öklid).
- Çok büyük verileri kümeleme için uygun, ancak outlier (aykırı) veri olduğunda pek uygun değil. Nitekim bu tarz yapılarda bir etiketlemesi olmadığı için etkilenecektir bundan. Ancak bir film izleme yapısı gibi, alışkanlık gibi tahmin gerektirmeyen *X* verileri için, çok büyük veriler için kolaylıkla kümeleme yapabilir; hızlıdır, basittir ve yoruma açıktır.

**Dezavantajları**: 
- **K** değeri bilinmelidir -en çok yorulduğumuz taraf da budur-.
- Başlangıç merkezine duyarlıdır.
- Outlierlardan etkilenir.

### K Problemi
### Elbow Metodu
 Küme sayısının belirlenmesi için
 Kaç tane küme olmalı?
 Temel amaç küme sayısının bilinmediği veya tahmin edilemediği durumunda 1'den itibaren for döngüsü gibi bir şey...
### PCA
Principal Component Analysis
- En önemli bilgiyi korur, gereksiz varyansı atar, boyutu düşürür.
- Veride boyut = sütun demek, hatırla.
- Boyutu azaltmak ve boyutlarla ilgili yorumlar yapmak gerekirse ne söyleyebiliriz?
	- Zamandan tasarruf için yapabiliriz.
	- Verilerde aykırılık varsa, uyumsuzluk varsa, ilgili uyumsuzluğun olduğu boyutu kaldırabiliriz. Nitekim bunlar önemsizdir, gereksiz varyans varsa onları atarız.
	- 20 sütunlu bir verinin tüm sütunları özelse, sayısal olarak değerliyse ve bunu görsele çevirmek istiyorsak, <u>görüntüleyemeyi</u> 3 boyutlu dışında görüntü göremiyoruz.

Büyük boyutlu veri setlerindeki boyutu azaltır.
2D'yi 1D'ye çevirir, 3 boyutu 2D'ye çevirir gibi gibi...
3 boyutluda 1000 position varken 2 boyutta 100 pointle, 1 boyutta 10 ile temsil etmek gibi gibi.
1 boyutlu, 3 boyutlunun bilgisini taşıyabilir varyans bozulmadıysa.

> K-Means ile kullanılan yöntemlerin ilişkisine bak, o yöntemleri de incele: hamming vs. minkowski vs...

