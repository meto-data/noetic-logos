---
title: Veri Tabanı Yönetim Sistemleri - 2. Ders
date: 2025-11-11
created: 2025-11-11
tags:
  - akademi/dersler/veri-tabani
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

#### **[[Anahtar]]**
- Her varlık kümesinde, o kümedeki varlık örneğini tekil olarak tanımlamaya yarayan asgari bir nitelik seti. Eğer tek bir nitelik bu işi göremiyorsa birden fazla niteliğin birleşimi de anahtar oluşturabilir.
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
1. **Gereksiz Veri Tekrarını Önlemek *(Avoid Unnecessary Duplication)***: Veri depolamak maliyetlidir. Ne kadar az veri tutarsak o kadar kârlı oluruz.
2. **İyi Yapılandırılmış İlişkiler Kurmak *(Well-Structured Relations)***: Veriye verimli erişebilmek ve ekleme, silme, güncelleme gibi işlemleri verimli yapabilmek için tabloları mantıksal olarak doğru yapılandırmak.


> [!important] Kısaca
>  - Veri tekrarını azaltmak.
>  - Veri tutarlılığını sağlamak.
>  - Depolamayı verimli kullanmak.
>  - Veri anomalilerini (Ekleme, Güncelleme, Silme) önlemek.

##### Veri Anomalileri	
- **[[Ekleme Anomalisi]] (*Insertion Anomaly*)**: Birbiriyle ilişkili olmayan verileri aynı anda girmeden yeni bir kayıt ekleyememe durumu.
	- Bir çalışan sisteme kaydedilecek ama henüz bir kurs almamış. Eğer Çalışan ve Kurs bilgileri aynı tabloda ise, kurs bilgisi boş kalacağı için yeni çalışan eklenemeyebilir. *Bu bir ekleme anomalisidir*.
- **[[Güncelleme Anomalisi]] (*Update Anomaly*)**: Tek bir veriyi değiştirmek için birden fazla kaydı güncellemek zorunda kalma ve bu sırada tutarsızlık yaratma riski.
	- Bir çalışanın maaşı değiştiğinde, o çalışanın aldığı her kurs için tutulan kayıtlarda maaşını tek tek güncellemek gerekir. Birini atlarsak veri tutarsız olur.
- **[[Silme Anomalisi]] (*Deletion Anomaly*)**: Bir veriyi silerken onunla birlikte silinmemesi gereken başka bir veriyi de kaybetme riski.
	- Bir çalışan sistemden ayrıldığında kaydını silersek ve o çalışan bir dersi alan tek kişiyse, o dersin varlığına dair bilgiyi de kaybedebiliriz. "Böyle bir dersimiz var mıydı?" sorusunun cevabı kaybolur.
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

### **Fonksiyonel Bağımlılık** (Functional Dependency)
- Bir kolonun (veya kolon grubunun) değerinin, başka bir kolonun değerini benzersiz olarak belirleyebilmesi durumudur.
	- Daha anlaşılır ifadeyle, bir kolonun (satır) diğer kolonları tanımlayabiliyor olması. O kolonun bilgisine bakarak diğer kolonlara erişebilmek.
		- Daha da anlaşılır ifadeyle "bir niteliğin (sütunun) değerini bilirsem, başka bir niteliğin değerini de kesin olarak bilebilirim" diyebilme durumu.
		- Örneğin `TcNo` $\to$ `Ad`, `Soyad`. `TcNo` değerini bildiğimizde, `Ad` ve `Soyad`'ı da kesin olarak bilebiliriz. Ancak tersi doğru değildir. 
	- Fonksiyonel bağımlılık kompozit de olabilir: (OrderID, ProductID) -> OrderQuantity. Yani bir siparişteki bir ürünün miktarını bilmek için hem sipariş ID'sine hem de ürün ID'sine ihtiyaç duyarız.c

### [[candidate key|Candidate Key]] (Aday Anahtar)
- Bir tablodaki bir satırı (kaydı) benzersiz olarak tanımlayabilen kolon veya kolon gruplarıdır.
- Bir tabloda birden fazla aday anahtar olabilir. Örneğin `TcNo` ve `KrediKartiNo` sütunları aynı tabloda ise, ikisi de tek başına bir kişiyi tanımlayabildiği için **aday anahtardır**. Bu aday anahtarlardan **biri** Birincil Anahtar (Primary Key) olarak seçilir.
- **Tablo bazındadır.**
### 1NF (Birinci Normal Form)
- **NO MULTIVALUED ATTRIBUTES!**
	- **Temel ve en önemli kural: ÇOK DEĞERLİ ALANLAR OLMAMALIDIR (NO MULTIVALUED ATTRIBUTES)!!!**
- Her sütun (alan) **yalnızca tek bir,bölünemez değer** (*[[atomik değer]]*) içermelidir.
	-  Bir diğer deyişle, *tüm alanlar atomik (bölünemez) olmalıdır*. Çok değerli veya birleşik sütunlar bulunmamalıdır.
	- Bir hücrede virgülle ayrılmış birden fazla değer olamaz. Örneğin bir kişinin "Hobileri" sütununa "Müzik, Spor, Kitap" yazmak 1NF'yi ihlal eder.
	- **Çözüm**: Bu tür çok değerli verileri, her değer için ayrı bir satır oluşturarak çözebiliriz. Yani aynı kişi için üç ayrı satır oluşturulur: biri Müzik, biri Spor, biri Kitap için.
- **Her kayıt** kendine özgü bir **birincil anahtarla (*[[primary key]]*)** tanımlanmalıdır.
- **Tekrarlayan veya boş veri** olmamalıdır.



> [!warning] Not
> Bir tablonun 1NF'de olması iyi tasarlandığı anlamına gelmez. Sadece normalizasyonun ilk ve zorunlu adımının atıldığını gösterir. 1NF'deki bir tabloda hâlâ ekleme, silme ve güncelleme anomalileri bulunabilir.


### 2NF
- Tablo 1NF olmak zorundadır.
- **Kısmî Fonksiyonel Bağımlılık Olmamalıdır (No Partial Functional Dependencies).**
- Birincil anahtar olmayan bir alan, bileşik anahtarın tamamına değil de sadece bir parçasına bağlıysa bu bir **[[kısmî bağımlılık|kısmî bağımlılıktır]]**.
	- **Örnek**: Primary key'i (`OrderID`, `ProductID`) olan bir tabloda `OrderDate` alanı sadece `OrderID`'ye bağlıdır, `ProductID` ile bir ilgisi yoktur. Bu bir kısmî bağımlılıktır.
	- **Çözüm**: Kısmî bağımlılıklar tespit edildiğinde tablo bölünür. Anahtarın farklı parçalarına bağımlı olan alanlar ayrı tablolara taşınır.
- Birincil anahtar olmayan sütunların tamamı birincil anahtarın tamamına tam olarak bağımlı olmalıdır. Bu kural özellikle birden çok sütundan oluşan bileşik birincil anahtarlar ([[composite primary keys]]) için geçerlidir.
- Eğer bir sütun birleşik anahtarın sadece bir kısmına bağlıysa, bu [[kısmî bağımlılık|kısmî bağımlılıktır]] ve 2NF'ye aykırıdır. Bu durumda tablo bölünmelidir (anahtar alanlara ya da konulara göre).
	- Kavramsal olarak birbirine yakın alanlar ayrı tablolara bölünür.
- Veri tekrarı olmamalıdır.
- Ana tablo ile ilişkili tablolar arasında anahtar kullanılarak ilişkiler tanımlanmalıdır *(PK, KF).*

### 3NF
- Tablo 2NF olmak zorundadır.
- **Geçişli Fonksiyonel Bağımlılık Olmamalıdır (No Transitive Functional Dependencies)**.
- Birincil anahtar olmayan hiçbir sütun yine birincil anahtar olmayan başka bir sütuna bağlı olmamalıdır. Yani A $\to$ B ve B $\to$ C ise, A'dan C'ye dolaylı (geçişli) bir bağımlılık vardır. Bu durum 3NF'ye aykırıdır.
	- **Örnek**: Siparişler tablosunda `OrderID` $\to$ `CustomerID` ve `CustomerID` $\to$ `CustomerName` bağımlılıkları varsa, `OrderID` dolaylı olarak `CustomerName`'i belirler. Burada `CustomerName` anahtar olmayan `CustomerID`'ye bağlıdır.
	- **Çözüm**: Geçişli bağımlılık içeren alanlar (`CustomerID`, `CustomerName`, `CustomerAddress` gibi) ayrı bir `Müşteriler` tablosuna taşınır. Ana tabloda ise sadece `CustomerID` (foreign key olarak) kalır.
- Anahtar olmayan hiçbir kolon, anahtar olmayan başka bir kolona bağlı olmamalıdır.
- Her kolon eşsiz (primary) anahtara tam bağlı olmalıdır.


- Genellikle buraya kadar olan normalizasyon aşaması yeterlidir.

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

