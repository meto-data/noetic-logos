---
title: Taslak-1
type: ogrenis
ders: "[[veri-madenciligi]]"
created: 2026-02-17
durum: taslak
draft: true
tags:
HUB:
cssclasses:
  - ders-notu
slug: veri-madenciligi-1
---
### Dersin Bürokrasisi
- Sınıf mevcudu epey fazla olduğu için bireysel projeler sınav gibi değerlendirilmeyecek (?). 
- Vize ve final test olmanın yanı sıra, vize %40 ağırlık iken final %60 ağırlığa sahip olacak muhtemelen. Testlerin en az 40-50 sorudan oluşacağı söylendi.
- Her hafta ödevler de verilecek; kod ne yapıyor değil de, satırın ne yaptığını, nasıl çalıştığını ve sonucunu tahmin etmeye yönelik ödevlerden bahsedildi daha ziyade.
- Kendimizin veri işleyeceği bir projeyi sınıf içerisinde göstermemizi bekliyor.
- Python dili kullanılacak. Anaconda, Jupyter Notebook veya VS Code kurulumları istenecek.
- Derse %70 katılım şartı var.


---

## 1. Veri Madenciliği Nedir?
- Hoca *veri madenciliğini* doğadaki ham altın analojisi ile açıklıyor. Topraktan çıkan altın nasıl hemen bilezik olmuyor da işlenmesi ve saflaştırılması gerekiyorsa, **[[veri madenciliği]]** de **[[2- Zekâ, DIKW#1. ** Veri (Data) ** İşaret/Sembol|ham veriyi]]** alıp işler, temizler ve değeri **[[2- Zekâ, DIKW#3. ** Bilgi (Knowledge)**|bilgiye]]** dönüştürür. 
- **[[LLM'lerde Halüsinasyonların Anatomisi#GIGO (Garbage In, Garbage Out)|GIGO (Garbage-In, Garbage-Out)]]**: Çöp giren çöp çıkar anlamındadır. Eğer kazıdığımız veri kalitesizse onun çıktısı da kalitesiz olacaktır ezcümle.

## 2. Büyük Veri (Big Data) ve Donanım Kısıtları
- **Küçük Veri**: Bilgisayarın RAM'inde (örn. 32GB) işlenebilen, geçmişe dönük veriler (Market alışveriş fişleri gibi).
- **Büyük Veri**: Anlık akan, sosyal medyadan gelen (Twitter, Instagram), tek bir bilgisayarın RAM'ine sığmayan devasa yığınlar.


### Verinin İşlenme Adımları
1. **Seçme (Selection)**: İlgili veriyi yığından ayırma.
2. **Ön İşleme (Preprocessing)**: Gürültüden arındırma, temizleme.
3. **Dönüştürme (Transformation)**: Bilgisayar sadece sayılarla (0-1) çalışır. Metin verisi bilgisayar için "anlamsızdır", sayısal vektörlere dönüştürülmelidir.
4. **Veri Madenciliği (Data Mining)**: Algoritmaların uygulanması.
5. **Değerlendirme (Evaluation)**: Sonucun yorumlanması.
6. 