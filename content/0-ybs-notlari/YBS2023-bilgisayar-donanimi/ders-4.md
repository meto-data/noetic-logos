---
title: Bilgisayar Donanımı - 4. Ders
ders: YBS2023
konu: Gömülü Sistemler, IoT ve Donanım Mimarisi
created: 2026-10-07
draft: false
tags:
  - akademi/dersler/ybs2023
---
*"Herkes hazır veriyi işler ama IoT bilen bir YBS'ci sahada olmayan veriyi sıfırdan üretir..."*

## Arduino vs. Raspberry Pi: Farklar
| Özellik               | Arduino (Uno / Nano)                                                                                                                                               | Raspberry Pi                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Nedir?**            | Basit bir **[[geliştirme kartı\|geliştirme kartı]]dır.** (Beyaz eşyaların, çamaşır/bulaşık makinelerinin içindeki belirli komutları yapan küçük beyinler gibidir). | Tek kartlık **tam donanımlı bir bilgisayardır.**                                                                                   |
| **Kapasite ve Sınır** | Sınırlıdır. Sadece içine yüklenen tek bir programı çalıştırır, sensörden veriyi alır ve anlık tepki verir. Veriyi kendi içinde depolayamaz.                        | Sınırı hayal gücümüzdür. İşletim sistemi vardır; internete bağlanır, veri tabanı tutar, yapay zekâ çalıştırır, e-posta/SMS atar... |
| **Programlama Dili**  | **C / C++** (`.ino` uzantılı dosyalarla).                                                                                                                          | **Python** (İçinde hazır gelir).                                                                                                   |
| **Sensör Girişleri**  | Analog (**A0–A5** arası 6 pin) ve Dijital (**12–13 pin**) girişleri ayrıdır.                                                                                       | Hem analog hem dijital tüm sensörler uygun şekilde bağlanabilir (Tüm sensörler iki kartta da ortak kullanılabilir).                |


> **Dünyadaki Çip Gerçeği:** Dünyada üretilen çiplerin sadece **%2'si** normal bilgisayarlarda kullanılır. Kalan **%98'i** çamaşır makinesi (suyu 60 dereceye ısıt, 800 devirde sık), buzdolabı ve otomobil gibi cihazların içindeki geliştirme kartlarında (gömülü sistemlerde) yer alır.


## Arduino IDE ve Kodlama Mantığı

* **Arduino IDE Nedir?** Bilgisayarımıza indirdiğimiz, kod yazıp kartın içine yüklememizi sağlayan ücretsiz ara yazılımdır.
* **Kütüphane (Library) Kavramı:** Anakartın içi boştur. Ona taktığımız kablonun ucunda ısı sensörü mü yoksa gaz sensörü mü olduğunu kendi başına bilemez.
	* Öğrenci numaramız üniversite sistemine tanımlamazsa, kapıda kartımızı okuttuğumuzda sistem bizi tanımaz. İşte sensörleri de programa tanıtmak için IDE'nin sol menüsündeki **Library (Kütüphane)** kısmından o sensörün paketini (Örn: `DHT11`, `MQ-135`) bir kez **Install** etmemiz gerekir.
* Kodun en başına yazdığımız `#include` komutu, bilgisayara *"Hafızana yüklediğim bu sensör kütüphanesini şimdi bu projeye getir ve kullan"* demektir.
* **Tek Taraflı Yükleme (Çok Önemli!):** Bilgisayarda yazdımınız `.ino` uzantılı kodu USB kablosuyla Arduino'ya yüklediğimizde bu **tek yönlü** bir işlemdir. Kod kartın içine gömülür. Daha sonra Arduino'yu bilgisayara takıp *"İçindeki kodu geri çekeyim de düzelteyim"* diyemeyiz.
* **Serial Monitor:** Kartı ekrana bağlamadan önce, sensörlerden gelen anlık değerleri (ısı, ışık, gaz vb.) bilgisayar ekranında test edip görmemizi sağlayan alt penceredir.