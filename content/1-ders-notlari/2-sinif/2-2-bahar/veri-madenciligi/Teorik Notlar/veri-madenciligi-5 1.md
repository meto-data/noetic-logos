---
title: Veri Madenciliği - 5
created: 2026-03-17
draft: true
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-5
konu: Random Forest?
---
# Random Forests

Altını çiz ilk sayfadaki tanımın. 


### Decision Tree ve Random Forest

Overfitting için bir grafik de lazım, kartezyen grafik. 
	Best weight kısmını aşmasını istemiyoruz.
	Bazen eğitim (test) verilerin sonuçlarında 1.00, 0.99 gibi sonuçlar çıkıyorsa, EZBERLEMİŞTİR anlamına geliyor. Test accuracy ise 0.70 ve 0.65 ise, **genelleyemez özelliktedir**.


| Train Accuracy | Test Accuracy |
| -------------- | ------------- |
| 1.00           | 0.70          |
| 0.99           | 0.65          |
| **1.00**           | **0.80**          |
| **0.94**           | **0.92**          |
| **0.95**           | **0.94**          |

Overfitting var mı yok mu tekrardan teyit et ilgili tablodaki bold ve bold olmayanlar bağlamıda.

Son 3 satır random forest'de gözükür genellikle. Eğer aşırı iyi bir veri varsa decision tree'de de gözükebilir nitekim.

Son 3 satır güvenilir bir sonuç iken ilk 2 sonuç güvenilir değildir. Nİtekim ilki ezberlediği hâlde genelleyemez, nitekim ikincisi ise ezberlediği hâlde genelleyebilir. 0.95 0.94 mükemmel bir çıktı, hocanın deyişine göre.



Öğrenmek = genelleme yapabilir özelliği olması, **tümevarım yapabiliyor olması** demektir.


PDF'de random forest ağacı kurma bağlamında 1'den 14'e kadar bir checklist durumu var. Ona bak. PDF ile notebook arasında bağdaşım var.


Karar ağacındaki en önemli parametre: **`max_depth`**, **Kök tarama parametrisi (bkz. [[veri-madenciligi-4#Kök Hücre (Root) Neye Göre Seçilir|Kök neye göre seçilir?]].**

Kök tanıma parametresi.

---

## K-Nearest Neighbors
(KNN) K-en yakın komşu algoritması

Etiketlemeksizin sınıflandırma yapan bir algoritmadır.

Etiketleme nedir tekrar bak.

K-en'de böyle bir etiketleme neden söz konusu değil ve nasıl öğrenmeyi gerçekleştiriyorü bunları da söyle. Uzaklık ölçüsü misal, neymiş o? 

K-en ve K-en'in backgroundunda olanlarda denetimli/denetimsiz nasıl oluyor ona da bak. 

Tek sayı ve çift sayı arasındaki farka bakmak lazım, eşitlikteki potansiyel sorunlara vs.


KNN before-after grafiği de gerekiyor, obsidian uyumlu bir grafik aracı yahut mermaid ile falan.

KNN için lazy learned de denilir. Milyonluk veriler için kullanmak gereksizdir misal, az verilerde olması gerekiyor bu sebepten ötürü.

Scikit-learn kütüphanesinde KNN varsayılan olarak Minkowski kullanır. Daha birçok formül var, ancak bu 3 tanesini yüzeysel olarak, ismen bilmek yeterli gibi.

Google'ın hamming bird algoritması? a harfi var diyelim, gerçi buna sonra baksak iyi olur... a ve e harfi için bak bakalım buna. "Bunu mu demek istediniz..." algoritması, distance algorithm olarak geçiyor: adult distance?

TEST ACCURACY NEDİR ÖNEMLİ!!! DİĞER ACCURACY DE!! TRAIN YANİ!!

Accuracy'yi artırmanın yöntemleri var knn bağlamında, skaler dönüşüm??

**matematiksel hesaplama varsa ölçekleme önemlidir!**

## Decision tree ile KNN farkları (tablo ekle buraya)


---



Bir veriyi görünce, hangi algoritmanın kullancılacağının daha iyi olacağına yöneliks oru kesinlikle gelecek. Hangi algoritma kullanılacağını nasıl bulacağız? Nasıl sezeceğiz gibi sorulara yanıt bulmak lazım...

