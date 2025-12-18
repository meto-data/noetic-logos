# Veri Tabanı Yönetim Sistemleri: Komutların Mantığı ve Teknik İşleyişi

İşbu doküman; birkaç materyalin süzülmüş, gereksiz teferruattan arındırılmış ve teknik derinliği artırılmış bir derlemesidir. Maksat sadece söz dizimini (syntax) ezberlemek değil, komutun art alanında veriyi nasıl manipüle ettiğini, yani *execution plan* dâhilinde neler döndüğünü kavramaktır.

> [!NOTE] Etimolojik Dipnot: "Data"
> Mevzubahis "Data" kelimesi, Latince *dare* (vermek) fiilinden türeyen *datum* (verilen) kelimesinin çoğuludur. Hint-Avrupa anadilinde *do- köküne kadar uzanır. Yani veri; bize "verilmiş" olandır, ham maddedir. Bizim işimiz, bu ham yığını SQL (Structured Query Language) vasıtasıyla işleyip *enformasyon* denen o işlenmiş cevhere dönüştürmektir.

---

## 1. DML (Data Manipulation Language) - Veri İşleme Dili

DML komutları, veri tabanının şemasına (metadata) dokunmaz; tablonun ihtiva ettiği verinin kendisine, yani satırlara (rows/tuples) müdahale eder.

### INSERT (Kayıt Ekleme)
Tablo yapısı içerisinde yeni bir satır (row) oluşturur. Bu işlem, diske fiziksel bir yazma (write) operasyonudur.
* **Teknik İşleyiş:** Tanımlanan tablo şemasındaki *constraint* (kısıtlama) ve veri tiplerine (int, varchar, date) uygun olmak kaydıyla, bellekteki veriyi tabloya zerk eder.
* **Kritik Nokta:** Kolon isimlerini açıkça belirtmek elzemdir. Aksi takdirde değerleri, tablonun yaratılış sırasına göre körlemesine girmek zorunda kalırsın ki bu, hataya açık bir *acemilik*tir.

```sql
-- Doğru Kullanım (Best Practice): Kolonları spesifik olarak belirt.
INSERT INTO tbl_musteriler (isim, soyisim, email, telefon)
VALUES ('Ahmet', 'Yılmaz', 'ahmet@mail.com', '05551234567');

```

### UPDATE (Veri Güncelleme)Mevcut bir kaydın, belirli niteliklerini (attribute) değiştirir.

* **Teknik Uyarı:** Bu komut tehlikelidir. Zira `WHERE` koşulu belirtilmezse, veritabanı motoru (engine) bu emri "tablodaki tüm satırları al ve hepsinin ilgili kolonunu bu yeni değerle değiştir" şeklinde yorumlar. Bu da verinin bütünlüğünü (integrity) yerle bir etmek demektir.

```sql
-- DİKKAT: Where kullanılmazsa tüm tabloyu tek bir değere eşitlersin.
UPDATE tbl_personeller
SET maas = 25000, unvan = 'Uzman'
WHERE personel_id = 42; -- Sadece ID'si 42 olan satırı hedefler.

```

### DELETE (Veri Silme)
- Satırı tablodan fiziksel olarak kaldırır.

* **Fark:** `TRUNCATE` tablonun içini tamamen boşaltıp *auto-increment* değerlerini sıfırlarken (DDL operasyonudur); `DELETE` satır bazlı işlem yapar ve *transaction log* tutar. Yani `DELETE` daha maliyetlidir ama seçicidir.

```sql
-- Sadece belirli kriteri sağlayan veriyi uçurur.
DELETE FROM tbl_urunler
WHERE stok_adedi = 0;

```

---

## 2. DQL (Data Query Language) - Veri Sorgulama Dili
- DQL, veritabanının durumunu (state) değiştirmez; sadece okur (read-only). Temel yapı taşı `SELECT` ifadesidir.

### SELECT ve İzdüşüm (Projection)
- Veritabanından veri kümesi çekme işlemidir. Matematiksel olarak, bir tablonun (ilişkinin) belirli niteliklerini seçip diğerlerini maskelemek, yani *izdüşüm* almaktır.

* `SELECT *`: Tüm kolonları getirir. Performans düşmanıdır (IO cost yüksektir).
* `SELECT kolon1, kolon2`: Sadece istenen veriyi getirir. Makul olan budur.

### ALIAS (Takma Ad - AS)
- Sorgu sonucunda dönen kolon başlıklarını (header) yeniden adlandırır.

* **Kullanım Amacı:** Veritabanındaki fiziksel kolon ismi (örn: `prs_maas_brut`) ile sunum katmanındaki isim (örn: `Maaş`) arasındaki bağı koparmak ve okunabilirliği artırmaktır.

```sql
SELECT ad AS Personel_Adi, soyad AS Soyad, maas*12 AS Yillik_Gelir 
FROM tbl_personeller;
```

### DISTINCT (Tekilleştirme)
- Sonuç kümesindeki (result set) mükerrer (duplicate) kayıtları elimine eder.

* **Mantık:** Arka planda bir *sort* (sıralama) veya *hash* işlemi yaparak birbirinin aynısı olan satırları teke indirir ve sadece benzersiz (unique) değerleri döndürür.

```sql
-- Kaç farklı şehirde müşterimiz var? (Tekrar edenleri atar)
SELECT DISTINCT sehir FROM tbl_musteriler;

```

---

## 3. FİLTRELEME MEKANİZMALARI (WHERE Clause)
- Veri setini, belirli bir mantıksal önermeye (predicate) göre daraltma işlemidir. `WHERE` bloğu, her bir satır için `TRUE`, `FALSE` veya `UNKNOWN` döndüren bir mantıksal test uygular. Sadece `TRUE` dönen satırlar sonuç kümesine dahil edilir.

### Temel ve Mantıksal Operatörler
* **Mantıksal Bağlaçlar:**
* `AND`: Kesişim kümesidir. Şartların hepsi sağlanmalıdır.
* `OR`: Birleşim kümesidir. Şartlardan biri yeterlidir.
* **( ) Parantez:** İşlem önceliğini (precedence) belirler. Karmaşık mantıksal ifadelerde parantez kullanmamak, sorgunun yanlış çalışmasına sebebiyet verir ki bu tam bir amatörlüktür.



```sql
-- "Muhasebe" departmanında olup, (Soyadı 'Kara' olan VEYA Maaşı 15000 altı olanlar)
SELECT * FROM tbl_personeller
WHERE departman='Muhasebe' AND (soyad='Kara' OR maas < 15000);

```

### LIKE (Desen Eşleştirme) 
- Metin tabanlı verilerde, tam eşitlik yerine belirli bir desene (pattern) uygunluk arar.

* `%` (Wildcard): Sıfır veya daha fazla karakteri temsil eder.
* `_` (Underscore): Tek bir karakteri temsil eder.

```sql
-- 'A' ile başlayıp, dördüncü harfi 'e' olan kayıtlar
SELECT * FROM tbl_urunler WHERE urun_adi LIKE 'A__e%';

```

### IN (Liste Operatörü)
- Bir değerin, statik bir liste veya bir alt sorgu (subquery) sonucu dönen küme içinde olup olmadığını kontrol eder. Çoklu `OR` kullanımının daha optimize ve temiz halidir.

```sql
SELECT * FROM tbl_musteriler
WHERE sehir IN ('İstanbul', 'Ankara', 'İzmir');

```

---

## 4. İLERİ SEVİYE SORGULAMA VE İLİŞKİSEL YAPI

### Subquery (Alt Sorgular)
- Bir sorgunun çıktısının, dıştaki ana sorguya girdi (input) olarak verilmesidir.

```sql
-- Senaryo: 'İnsan Kaynakları'nın ID'sini bilmiyorum, dinamik olarak bulup personeli getir.
SELECT * FROM tbl_personeller
WHERE departman_id = (
    SELECT departman_id FROM tbl_departman
    WHERE departman_adi = 'İnsan Kaynakları'
);

```

### JOIN (Tablo Birleştirme)
- Normalizasyon ile parçalanmış veriyi, sorgu anında sanal olarak tekrar birleştirme işlemidir.

* **INNER JOIN:** İki tabloda da eşleşen (kesişen) kayıtları getirir. Eşleşmeyenler sonuç kümesinden atılır.

```sql
-- Personelin adı ile Departman adını aynı satırda göstermek
SELECT P.ad, P.soyad, D.departman_adi
FROM tbl_personeller AS P
INNER JOIN tbl_departman AS D ON P.departman_id = D.departman_id;

```

### AGGREGATE FUNCTIONS & GROUP BY
- Veriyi satır bazında değil, kümeler bazında analiz eder.

* **Fonksiyonlar:** `COUNT` (Say), `SUM` (Topla), `AVG` (Ortalama), `MAX/MIN` (Uç değerler).
* **GROUP BY:** Veriyi belirli bir kolona göre paketler (gruplar). Aggregate fonksiyonları bu gruplar üzerinde çalışır.
* **HAVING:** Gruplanmış veri üzerinde filtreleme yapar. `WHERE`, gruplamadan *önce* çalışır; `HAVING` ise gruplama ve aggregate işleminden *sonra* çalışır.

```sql
-- Hangi kategoride toplam stok 100'den fazlaysa onu getir.
SELECT kategori, SUM(stok_miktari) as ToplamStok
FROM tbl_urunler
GROUP BY kategori
HAVING SUM(stok_miktari) > 100;

```
