---
title: Veri Tabanı Yönetim Sistemleri - 5. Ders
---
# DQL (Data Query Language) Veri Sorgu Dili

Görüntü verilebilir ve komut yaz denilebilir sınavda.

SELECT AD AS A falan filan, AS Kısımlarında işte tablo adını sorgudan gelen tabloda değiştirme falan gelecek.  

---

### Distinct Komutu
- İlgili sütuna ait verileri tekrarsız olarak listeleyen bir komuttur.
```SQL
select distinct
```



### Having Komutu

...


```sql
SELECT *FROM Tbl_Musteriler
WHERE Sehir In('Adana', 'Bursa', 'Ankara')
```




/* Kaç adet stok var bul. */

/* Silgi, makas ve dosya ürünlerinden kaç adet var bul.

/* Toplamda kaç adet defter var? Kategori kolonu.

/* Finalde sorular Sum komutu gibi olacak.


```sql
SELECT *FROM TBL_PERSONELLER
WHERE DEPARTMAN_ID = (SELECT DEPARTMAN_ID FROM TBL_DEPARTMAN
WHERE DEPARTMAN_ADI = 'İnsan Kaynakları')
```