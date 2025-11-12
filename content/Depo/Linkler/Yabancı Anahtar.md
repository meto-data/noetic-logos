- Bir tablodaki sütunun **başka bir tablonun primary key**'ine referans vermesidir. 
#### Amaç
- Tablolar arasında **ilişki kurmak** (relationship).
- Referans bütünlüğünü sağlamak.
	- Bu sayede örneğin `Müşteriler` tablosunda olmayan bir müşteriye sipariş oluşturulmasını engellenir.
#### Özellikleri
- Başka bir tablodaki primary key'i gösterir.
- Veri bütünlüğünü sağlar. (misal "Sipariş" tablosundaki `customer_id`, "Müşteri" tablosundaki `id`'ye referans olur.)
- Foreign key sayesinde veri **ilişkisel** hâle gelir; kopuk değil, bağlamlı olur.
- Bir yabancı anahtar sütunu `NULL` değerler ieçrebilir. Bir çalışanın henüz atanmış bir departmanı yoksa `departman_id`'si boş olabilir mesela.
- Bir tabloda birden fazla yabancı anahtar olabilir. `Siparişler` tablosunda hem `customer_id`hem de `product_id` yabancı anahtarları bulunabilir.