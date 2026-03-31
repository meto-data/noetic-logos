---
title: Veri Madenciliği - 7
created: 2026-03-31
draft: true
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-7
konu: Apriori Algoritması - Birliktelik Kuralları
---
## Apriori Algoritması

- Apriori, veriyi test etmediği için kullanılmıyor.
- Adı üstünde a priori, tecrübe öncesi. Tecrübeye gerek yok.
- A priori zaten felsefede tecrübe-öncesi anlamında. Yahut deneyim-öncesi. Gözetimli değildir dolayısıyla.
- Apriori, etiketsiz, gözetimsiz bir algoritmadır.
- İlişki kuralı öğrenimi için kullanılıyor.
- Verilerdeki öğe kümeleri adı verilen farklı öğe grupları arasındaki sık görülen kalıpları, bağlantıları ve bağımlılıkları tanımlayan bir veri madenciiği tepkileri.
- E-Ticaret platformları için pazar sepeti analizi gibi öneri sistemlerinde kullanılıyor.
	- **Birliktelik kuralları**
- Aşağıdan-yukarıya bir yaklaşım kullanıyor. Alt kümelerin her seferinde bir öğe genişletildiği ve öğe gruplarının verilere karşı test edildiği yaklaşım. Başka başarılı uzantı bulunamadığında ise algoritma sona eriyor.


3 Temel metrik vardır veri seti içindeki örüntüleri incelememize yardım eden:
- Support: Ürün kombinasyonunun meydana geldiği işlem sayısı. X ve Y'nin birlikte görülme olasılığı.
- Confidence: Ürün çiftlerinni oluşma olasılıüı, x satın alındığında y'nin satılması olasılığı.
- Lift: bir ürün alındığında diğer ürünün alınma olasılığının kaç kat artacağını gösteren metrik. X satın alındığında Y'nin satın alınma olasılığı lift kadar artmasıdır.


- İterasyon

 Apriori, belirlemiş olduğumuz support eşit değerine göre olası ürün çiftlerini hesaplar, her iterasyonda eşik değerin altında kalan ürünleri eleyerek final tablosunu oluşturmamızı sağlar.

---

