---
tags:
  - akademi/dersler/veri-tabani
---
- Bir tablodaki bir satırı **benzersiz (unique)** olarak tanımlayabilecek **her sütun veya sütun grubuna** aday anahtar denir. Yani [[primary key]] olmaya aday olan her şeydir.

- **Örnek: Öğrenciler Tablosu**  

| Öğrenci_No | TC_Kimlik_No | Eposta                                                                      | Adı  |
| :--------- | :----------- | :-------------------------------------------------------------------------- | :--- |
| 101        | 11111111111  | [ali@okul.edu](https://www.google.com/url?sa=E&q=mailto%3Aali%40okul.edu)   | Ali  |
| 102        | 22222222222  | [veli@okul.edu](https://www.google.com/url?sa=E&q=mailto%3Aveli%40okul.edu) | Veli |

- Bu tabloda bir satırı tek başına kimler tanımlayabilir?
	1. **Öğrenci_No:** Her öğrencinin numarası farklıdır. Evet, bu bir aday.
	2. **TC_Kimlik_No:** Her öğrencinin T.C.'si farklıdır. Evet, bu da bir aday.
	3. **Eposta:** Her öğrencinin e-postası farklıdır. Evet, bu da bir aday.
	    

- İşte bu tablodaki **Aday Anahtarlar (Candidate Keys)** şunlardır: {Öğrenci_No}, {TC_Kimlik_No}, {Eposta}.
- Biz bu adaylardan **sadece bir tanesini** seçip "Bu tablonun **Birincil Anahtarı (Primary Key)** budur" deriz. Genelde Öğrenci_No'yu seçeriz. Diğer adaylar (TC_Kimlik_No, Eposta) ise "[[unique key]]" olarak kalır.