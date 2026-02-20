---
tags:
  - akademi/dersler/veri-tabani
---
- Bazen bir tablodaki tek bir sütun o satırı benzersiz yapmaya yetmez. Benzersizliği sağlamak için **birden fazla sütunu bir araya getirip** birincil anahtar ilan ederiz. Buna composite key denir.

<br>
- **Örnek Senaryo:** Bir okulda hangi öğrencinin hangi dersi aldığını tutan bir not tablosu düşünelim:

**`Öğrenci_Ders_Notları:`**

| Öğrenci_No | Ders_Kodu | Notu |
| ---------- | --------- | ---- |
| 101        | MAT101    | 85   |
| 101        | FİZ101    | 70   |
| 102        | MAT101    | 90   |

- Şimdi bu tabloya Primary Key seçeceğiz:
	- Sadece `Öğrenci_No`'yu PK yapabilir miyiz? **Hayır.** Çünkü 101 numaralı öğrenci birden fazla ders alabilir, 101 tekrar eder.
	- Sadece `Ders_Kodu`'nu PK yapabilir miyiz? **Hayır.**  MAT101 dersini yüzlerce öğrenci alabilir, MAT101 tekrar eder.
	    

**Çözüm (Composite Key):**  <br>
- Öğrenci_No + Ders_Kodu ikilisini **beraber** Primary Key yaparız.
	- (101, MAT101) -> Bu ikili veritabanında sadece bir kere olabilir. (Ali'nin Matematik notu tektir).
	- (101, FİZ101) -> Eklenebilir (Farklı ders).
	- (102, MAT101) -> Eklenebilir (Farklı öğrenci).
	- Tekrar (101, MAT101) eklemeye çalışırsan -> **Hata!** (Zaten var).
- İşte bu (`Öğrenci_No` + `Ders_Kodu`) ikilisi bir **Composite Primary Key**'dir.