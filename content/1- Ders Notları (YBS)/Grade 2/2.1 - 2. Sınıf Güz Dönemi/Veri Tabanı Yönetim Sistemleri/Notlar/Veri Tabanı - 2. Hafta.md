---
title: Veri Tabanı Yönetim Sistemleri - 2. Hafta
---

#### [[Tablo]]
- Verilerin *satır* ve *sütun* hâlinde saklandığı yapılar. 
- Her tablo belli bir konuyu (örn: `Filozoflar`) ifade eder.
#### [[Kayıt]] (Record)
- Tablodaki her satır bir kayıttır. 
- Her bir satır, bir kişiye ya da nesneye ait tüm bilgileri içerir.
#### [[Alan]]
- Tablodaki sütunlara verilen isimdir.
- Her alan bir özelliği temsil eder (örn: `Ad`, `Soyad`, `Ekol`)
### [[Birincil Anahtar]] (Primary Key)
- Tablodaki her satırı (kaydı) **benzersiz** olarak tanımlayan alandır. 
- Aynı tablodaki iki satırda aynı *primary key* değeri olamaz.
#### Özellikleri
- **Tekildir (unique)**: Aynı değerden sadece bir tane olabilir.
- **Boş olamaz (NOT NULL)**: Her kaydın bir kimliği olmalı.
- **Değişmez (immutable)**: Genelde sabit kalır, çünkü kaydı tanımlayan özdür.
- **Bir tabloya sadece bir tane primary key tanımlanabilir. (Ama birden fazla kolondan oluşabilir $\to$ [[composite key]])**
- Sorgu performansını artırır, çünkü birincil anahtarlar otomatik olarak indekslenir. Bu sayede verilere erişim çok hızlı olur.

### [[Yabancı Anahtar]] / *İkincil Anahtar* (Foreign Key)
- Bir tablodaki birincil anahtarın başka bir tabloda eklenerek ilişki kurulmasını sağlayan alandır.
#### Amaç
- Tablolar arasında **ilişki kurmak** (relationship).
- Referans bütünlüğünü sağlamak.
	- Bu sayede örneğin `Müşteriler` tablosunda olmayan bir müşteriye sipariş oluşturulmasını engellenir.
#### Özellikleri
- Başka bir tablodaki primary key'i gösterir.
- Veri bütünlüğünü sağlar. (misal "Sipariş" tablosundaki `customer_id`, "Müşteri" tablosundaki `id`'ye referans olur.)
- Foreign key sayesinde veri **ilişkisel** hâle gelir; kopuk değil, bağlamlı olur.
- Bir yabancı anahtar sütunu `NULL` değerler içerebilir. Bir çalışanın henüz atanmış bir departmanı yoksa `departman_id`'si boş olabilir mesela.
- Bir tabloda birden fazla yabancı anahtar olabilir. `Siparişler` tablosunda hem `customer_id`hem de `product_id` yabancı anahtarları bulunabilir.

# Normalizasyon
- Veri tabanındaki **gereksiz veri tekrarını (redundancy)** azaltmak ve **veri bütünlüğünü ([[integrity]])** sağlamak için yapılan mantıksal düzenleme işlemidir.
- Veriyi "en sade ve anlamlı forma" getirmeyi amaçlarız. 

## Normalizasyonun Amaçları
- Bkz. [[Normalizasyon Örnek]]

- Veri tekrarını azaltmak.
- Veri tutarlılığını sağlamak.
- Depolamayı verimli kullanmak.
- Veri anomalilerini (Ekleme, Güncelleme, Silme) önlemek.
	- **[[Ekleme Anomalisi]] (*Insertion Anomaly*)**: Birbiriyle ilişkili olmayan verileri aynı anda girmeden yeni bir kayıt ekleyememe durumu.
	- **[[Güncelleme Anomalisi]] (*Update Anomaly*)**: Tek bir veriyi değiştirmek için birden fazla kaydı güncellemek zorunda kalma ve bu sırada tutarsızlık yaratma riski.
	- **[[Silme Anomalisi]] (*Deletion Anomaly*)**: Bir veriyi silerken onunla birlikte silinmemesi gereken başka bir veriyi de kaybetme riski.
### Avantajları
- **[[Consistency|Tutarlılık]] (Consistency)**: Aynı veri bir yerde tutulur.
- **[[verimlilik|Verimlilik]] (Effiency)**: Daha az depolama.
- **Kolay Bakım**: Bir değişiklik tek noktada yapılır.
- **[[Veri bütünlüğü|Veri Bütünlüğü]]**: İlişkiler bozulmaz.
### Dezavantajları
- Çok fazla parçalama (`join`) gerektirdiği için **sorgular yavaşlayabilir.**
- Veri tabanı tasarımını daha karmaşık hâle getirebilir.
## Normalizasyon Aşamaları
- Normalizasyon seviyeleri arttıkça kurallar daha da katılaşır. Genellikle pratikte 3NF veya BCNF yeterli görülür.

### 1NF (Birinci Normal Form)
- Her sütun (alan) **yalnızca tek bir,bölünemez değer** (*[[atomik değer]]*) içermelidir.
	- Bir diğer deyişle, *tüm alanlar atomik (bölünemez) olmalıdır*. Çok değerli veya birleşik sütunlar bulunmamalıdır.
	- Örneğin "`Adres`" alanı hem  `Sokak` hem `Şehir` içeriyorsa **atomik değildir** ve ayrı sütunlara ayrılmalıdır..
- **Her kayıt** kendine özgü bir **birincil anahtarla (*[[primary key]]*)** tanımlanmalıdır.
- **Tekrarlayan veya boş veri** olmamalıdır.

### 2NF
- Tablo 1NF olmak zorundadır.
- Birincil anahtar olmayan sütunların tamamı birincil anahtarın tamamına tam olarak bağımlı olmalıdır. Bu kural özellikle birden çok sütundan oluşan bileşik birincil anahtarlar ([[composite primary keys]]) için geçerlidir.
- Eğer bir sütun birleşik anahtarın sadece bir kısmına bağlıysa, bu [[kısmî bağımlılık|kısmî bağımlılıktır]] ve 2NF'ye aykırıdır. Bu durumda tablo bölünmelidir (anahtar alanlara ya da konulara göre).
	- Kavramsal olarak birbirine yakın alanlar ayrı tablolara bölünür.
- Veri tekrarı olmamalıdır.
- Ana tablo ile ilişkili tablolar arasında anahtar kullanılarak ilişkiler tanımlanmalıdır *(PK, KF).*

### 3NF
- Tablo 2NF olmak zorundadır.
- Birincil anahtar olmayan hiçbir sütun yine birincil anahtar olmayan başka bir sütuna bağlı olmamalıdır (**[[geçişli fonksiyonel bağımlılık (transitive functional dependency)]]** olmamalıdır).
	- Örneğin `Siparişler` tablosunda `MüşteriID`, `MüşteriAdı` ve `SiparişTarihi` varsa `MüşteriAdı`, `MüşteriID`'ye bağlıdır. `MüşteriID` ise birincil anahtara bağlıdır. Bu bir geçişli bağımlılıktır ve `MüşteriAdı` ayrı bir `Müşteriler` tablosuna taşınmalıdır.
- Anahtar olmayan hiçbir kolon, anahtar olmayan başka bir kolona bağlı olmamalıdır.
- Her kolon eşsiz (primary) anahtara tam bağlı olmalıdır.
#### BCNF (Boyce-Codd Normal Formu)
- 3NF'nin daha katı bir versiyonudur.
- Tablodaki her bir belirleyicinin (determinant) bir aday anahtar ([[candidate key]]) olması gerekir. Basitçe, bir sütunun değerini belirleyen her sütun grubu, o tablonun birincil anahtarı olabilecek nitelikte olmalıdır.
- Pratikte çoğu 3NF tasarımı aynı zamanca BCNF'dir.

### 4NF
- Tablo 3NF olmak zorundadır.
- Bir tabloda **çok değerli bağımlılıklar (çoktan-çokta / multivalued dependencies)** **olmamalıdır**.
- Bir kaydın birincil anahtarı ile ilişkili, ancak birbirinden bağımsız olan birden fazla "çoktan-çoka" bilgi içeren listeler aynı tabloda bulunmamalıdır. Örneğin bir `Öğrenci` tablosunda hem  `Aldığı_Dersler` hem de  `İlgilendiği_Sporlar` gibi iki bağımsız çoklu değer listesi olmamalıdır. Bunlar ayrı tablolara bölünmelidir.
### 5NF
- Tablo 4NF olmak zorundadır.
- `Join` bağımlılıklarını (join dependency) ele alır ve veri kaybı olmadan tablonun daha küçük parçalara ayrılabileceği durumları inceler. Eğer bir tablo, mantıksal olarak ilişkili birden çok temayı barındırıyorsa ve bu temalar kayıpsız bir şekilde ayrı tablolara bölünebiliyorsa 5NF ihlal ediliyor olabilir.
- Pratikte uygulanması çok nadirdir ve oldukça karmaşık senaryolar  için geçerlidir.
- Bir tabloda anahtar olmayan sütunda a niteliği n kere, onunla ilişkili olarak b niteliği de m kere geçiyorsa, 5NF ihlal edilmiş olunur.
### 6NF
- Pratikte çok kullanılmaz.
- Bu form bir tablonun bir birincil anahtar ve en fazla bir tane anahtar olmadan sütundan oluşacak şekilde parçalanmasını önerir. Amaç, zamansal veri tabanlarında (temporal databases) verinin zaman içindeki değişimini daha etkili yönetmektir.


## Veri Fazlalılığı ve Veri Artıkları
- **[[Veri Fazlalığı (Data Redundancy)]]**: Aynı bilginin gereksiz yere birden fazla tabloda veya aynı tablonun birden fazla satırında tekrarlanması durumu. Örneğin her sipariş kaydında müşterinin adını ve adresini saklamak yerine sadece müşteri ID'sini saklamak ve müşteri bilgilerini ayrı bir `Müşteriler` tablosunda tutmak veri fazlalığını önler. Normalizasyonun temel hedeflerinden biri bunu azaltmaktır.
- **[[Veri Artıkları (Data Residue)]]**: Genellike fiziksel veri depolama katmanında silinmiş veya taşınmış verilerden geriye kalan izleri ifade eder. Veri tabanı yönetim sistemleri bu tür artıkları temizlemek için mekanizmalara sahiptir. Mantıksal tasarım aşamasındaki normalizasyon ile doğrudan ilgili değildir.

