---
title: Veri Madenciliği - 4
created: 2026-03-10
draft: true
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-4
konu: Veri Madenciliği Algoritmaları
---
# Veri Madenciliği Algoritmaları

## 1. Sınıflandırma Algoritması

### A) Karar Ağaçları

### B) KNN (En Yakın Komşu)

### C) Naive Bayes

### D) Destek Vektör Makineleri

### E) Lojistik Regesyon

## 2. Kümele Algoritması

### A) K-Means

### B) Hiyerarşik Kümeleme

### C) DBSCAN

## 3. Birliktelik Analizi
### A) Apriori Algoritması

### B) Edat Algoritması



## Veri Analizi & Bilgi Keşfi
### Tahmin
- Gelir Tahmini
- Müşteri Riski

### Desen Keşfi
- Segmentler
- Kurallar
### Kural Nadenciliği
- Sepet Analizi
- Tavsiye Sistemleri
## Makine Öğrenmesi: Problem Türleri & Algoritmalar


Belirli öğrenme algoritmalarının alt safhaları vardır: Denetimli ve Denetimsiz Öğrenme olmak üzere ikiye ayrılır; Supervised ve Unsupervised

Denetimli olanlar yönlendirme içerirken denetimsiz olanlarda yönlendirme söz konusu değildir. Denetimli olanlar, bulunan verilerle yapılırken denetimsiz olanlar bulunmayan verilerle yapılan öğrenme çeşididir.

- Çocuk-Anne Örneği: Yapma uglum, acır uglum, elini acıtırsın uglum vs. minvalinde bir denetim ve etiketleme süreci vardır, işte denetimli olan öğrenme algoritması da tam olarak böyledir. Yavaş yavaş bu etiketlemelerle beraber YZ kendi kendine de öğrenmeye başlıyor, farkında olmaya başlıyor, yaşı büyüdükçe «ben artık özgürüm, kendi kararlarımı alırım ulen!» minvalinde takılıyor... Ancak öncesinde sürekli denetime «etiketli» ihtiyacı vardı. 
	- Sonucunda, mutlak olarak bir şeyleri tahmin etmeye çalışacak.


- Denetimsizde, **kümeleme** esnasında özne bir tahminde bulunmuyor.
	- Ortada tahmin yoksa denetim de yoktur.
- Ekmek alan kişiler çoğunlukla margarin alıyorsa, ekmek ile margarini birlikte koyarız; reyon açmak gibi.


### Denetimli Öğrenme
Yaş, iş, maaş vs. -> bağımsız (X)

Y ise bağımlıydı, referans ver.


---

### Karar Ağaçları
- Genelde ikilii dallandırma gerçekleştirilir.
	- Binary-Tree


Ne zaman ezberletme ne zaman öğretme olduğu ayrımını bil. 


--


SÜTUN AYISI = DERİNLİK SAYISI = KÖK (ROOT)

2 komut önemli. **Fit** (bir model eğitiliyor demektir fit varsa) ve **Predict**

Soru: Neye göre tree'nin rootu belirleniyor? Notebookta vurgu yapılan yer neresi?


---
Dönem Sonuna Kadar Çalışma

En az 50.000 gözlem içeren veri seti bul.
Ders içinde verilen uygulama kodları kullanılarak model çalıştırılacak.
İlk aşamada kodlarda hiçbir değişiklik yapılmadan model eğitilecek.
İkinci aşamada model üzerinde değişiklikler yapılarak model performansı artırılmaya çalışılacaktır.
Veri setini biz bulacağız.

Algoritmalar 10. hafta sonunda rastgele dağıtılacak. Teslim 14. haftada gerçekleşecek.

Üç aşama olacak. Şunları uyguladım şu sonuç çıktı, şunları uyguladım, şunları uyguladım şu... 3 adet değişiklik isteniyor. En az 2 tanesi mutlaka iyiye gitmiş olmalı.  EN AZ 3 değerlendirme sonucu.

Vize %35, Çalışma %15.

Veri setine hâkimiyet : 20
Veri analizi : 10
Modele hâkimiyet : 30
Model iyileştirme : 30
Başarılı sonuç : 10


İlk Model > Geliştirilmiş Model > Başarılı Model (3 adet sonuç)

