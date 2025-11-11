---
created: '2025-10-05'
---
- Tabloların aralarında önceden tanımlanmış mantıksal ilişkiler (bağlantılar) kurularak organize edildiği veri tabanı modelidir.
	- Tablolar arası bağlantılar **ortak alanlar (anahtar alanlar)** üzerinden kurulur.
	- Veri tekrarını en aza indirir ve [[Veri bütünlüğü|veri bütünlüğünü]] güçlendirir.
	- Günümüzdeki modern veri tabanı sistemlerinin (Oracle, MySQL, SQL Server vb.) neredeyse tamamı bu yapıdadır.
- **Örnek**: Bir kütüphane sisteminde "Kitaplar" tablosu ile "Yazarlar" tablosu, her ikisinde de bulunan "yazar_id" alanı üzerinden birbirine bağlanır. Bu sayede hangi kitabın hangi yazara ait olduğu bilgisi tutulur.
