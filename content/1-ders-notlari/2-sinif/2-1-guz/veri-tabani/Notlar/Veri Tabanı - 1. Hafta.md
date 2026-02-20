---
title: Veri Tabanı Yönetim Sistemleri - 1. Ders
date:
tags:
  - akademi/dersler/veri-tabani
---
## DIKW Pyramid (Data - Information - Knowledge - Wisdom)

- Daha ayrıntılı bilgi için bkz. [[2- Zekâ, DIKW]]

![[dikw1.png|500]]

##### **[[Veri]]** (Data)
- İnsan dünyasında algılanan sembollerin, simgelerin -daha geniş kapsamıyla temsillerin- anlamdan ayrık hâli. Bilgi Kuramı açısından **semboller dizisi**dir (örn: bitler).
	- Bir başka tanımla "**insan dünyasında algılanan semboller veya simgeler.**"
	- Veriler tek başlarına anlamdan ayrıktır. Bir anlama kavuşmaları için  işlenmeleri (enforme edilmeleri) gerekmektedir. İşlenmedikleri sürece sadece **işaretler kümesi** olarak kalırlar. 
##### **[[Enformasyon]]** (Information)
- Verilerin sınıflanması, özetlenmesi, kategorize edilmesi vb. işlemlerle veriye bir bağlam (context) eklenmesi işlemidir. 
	- Henüz yorumlanmamış ama anlam çıkarılmaya müsait hâle gelmiş veri.
##### **[[Bilgi]]** (Knowledge) 
- Enformasyonun bir amaca yönelik olarak yorumlanarak anlam kazandığı ve uygulamaya dönüştüğü hâlidir.
##### [[Bilgelik]] (Wisdom)
- Bilginin **felsefî ve etik** boyutudur. Bir eylemin doğruluğunu, iyiliğini, gelecekteki sonuçlarını ve daha geniş bir bağlamdaki yerini sorgulamaktadır.
	- **Bilgiyi ve deneyimi** doğru yargılarda ve kararlarda uygulama yeteneği de denilebilir.
	- Sadece problemi çözmekle değil, çözümün getireceği sonuçları öngörmekle de ilgilidir.

### [[Veri Tabanı]] (Database)
-  Mantıksal ve fiziksel olarak tanımlanmış yapısal veriyi ve bilgiyi  düzenli, erişilebilir ve yönetilebilir şekilde saklayan sistemdir.
#### **[[Yapısal Veri]]** (Structured Data)
- Belirli biçimlerde organize edilmiş dağınık olmayan veriler.
	- Tablolara dökülebilir ve sorgulanabilir.
- **Örneğin**:

| Ürün No | Ürün Adı   | Fiyat | Stok | Satış Miktarı |
| ------- | ---------- | ----- | ---- | ------------- |
| 1       | Diş Macunu | 1000  | 40   | 20            |

#### [[Yapısal Olmayan Veri]] (Unstructured Data)
- Belirli bir yapıya sahip olmayan veriler.
	- Düzensiz, özel işleme ihtiyaç duyan veriler.
- **Örneğin**: Video ve ses kayıtları, PDF'ler, Word dosyaları, resimler vb.

## [[VTYS|Veri Tabanı Yönetim Sistemi]] 
- Bir veri tabanını oluşturmak, saklamak, çoğaltmak, güncellemek ve yönetmek için kullanılan programlar.
### VTYS'nin Sağladığı Yararlar
#### Veri Tutarlılığı (Data Consistency)
- Aynı verinin birden fazla yerde farklı kopyalarının bulunması durumunda bir yerde yapılan değişikliğin diğer kopyalara da yansıtılması durumu.  [[Consistency]]
#### Veri Bütünlüğü]] (Data Integrity)
- Bir verinin sistem genelinde tutarlılığının ve doğruluğunun korunması. (bkz. [[integrity]])
	- Bir tablodan silinen kayıt diğer ilgili tablolardan da silinmelidir.
#### Veri Paylaşımı (Data Sharing)
- Birden fazla kullanıcının aynı veriye eşzamanlı erişebilmesi. (bkz. [[availability]])
	- Aynı anda birçok kullanıcının banka müşteri verilerine erişebilmesi.
#### Veri Güvenliği (Data Security)
- Verilere erişim yetkilerinin kullanıcı bazında kontrol edilmesi.
	- Bazı kullanıcılar sadece veriyi okuyabilir bazılarıysa ekleme/silme yetkisine sahiptir.  [[Confidentiality]]
### Veri Tabanı Yöneticisi (DBA - Database Administrator)
- Veri tabanının tasarımı, oluşturulması ve işletiminden sorumlu kişi.
- **Görevleri**:
	1. Veri tabanı tasarımı
	2. Performans analizi
	3. Erişim yetkilerini düzenleme
	4. Yedekleme ve geri yükleme
	5. Veri bütünlüğünü sağlama
	6. Sistem sürekliliğini sağlama
### Veri Tabanı Kullanıcıları
1. **[[Uygulama Programcısı]]**: Son kullanıcıya yönelik yazılım geliştirir.
2. **[[Sorgu Dili Kullanıcıları]]**: Veri ekleme, silme ve özel sorgular yapar.
3. **[[Son Kullanıcılar]]**: Yazılımı doğrudan kullanır.

### Neden Veri Tabanı Kullanıyoruz?
- Geleneksel yöntem (ayrı dosyalarla veriyi saklama) yetersiz kalmaktadır. Veri miktarı arttığından kategorize edilmesi, eşzamanlı erişilmesi ve eşzamanlı düzenlenmesi gerekmektedir.
### Veri Tabanı Yaklaşımının Avantajları
1. Gereksiz veri tekrarını önler.
2. Veriler üzerinde merkezî denetim sağlar.
3. **[[Veri bütünlüğü]]** sağlar. 
4. **[[Veri Tutarlılığı|Veri tutarlılığı]]** sağlar.
5. Güvenlilik ve gizlilik sağlar.
6. Veriye erişimi kolaylaştırır, kullanıcıya sadece istediği verileri sunar.
7. Yedekleme, geri yükleme gibi işlemleri kolaylaştırır.
8. Veriye kimin erişip kimin erişemeyeceğini belirler.
9. Fiziksel yapı ve erişim karmaşıklığını kullanıcıdan gizler.
#### VTYS Dezavantajları
1. Maliyet
2. Performans iyileştirme
3. Verilerin silinme ihtimali (siber saldırı)
4. Veri tabanı yedekleme
5. Organizasyonel direnç (bkz. [[]])
### Yaygın VTYS Programları
- Oracle, MySQL, Microsot SQL Server, PostgreSQL, MongoDB, IBM DB2... 

## Veri Tabanı Temel Kavramlar
#### Tablo (Table)
- **Tanım**: Veri tabanı içerisinde birbirleriyle ilişkili verilerin saklandığı temel yapıdır. Satır ve sütunlardan oluşur.
- **Özellik**: Her tablo belirli bir konuya ait verileri tutar. Bir veri tabanı birden çok tablodan oluşabilir.
#### Kayıt (Record / Satır - Row)
- **Tanım**: Tablodaki her bir satırdır ve tek bir varlığa ait tüm bilgileri temsil eder.
- **Örnek**: "Öğrenciler" tablosundaki bir satır Metin'e ait öğrenci numarası, ad, soyad, doğum tarihi gibi tüm bilgileri içerir.
#### Alan (Field / Sütun - Column)
- **Tanım**: Tablodaki her bir sütundur ve kayıtlara ait belirli bir tekil özelliği (nitelik) ifade eder.
- **Örnek**: "Öğrenciler" tablosundaki "ad" sütunu tüm sadece ad bilgisini içerir.

## İlişkisel Veri Tabanları (Relational Databases)
- Tabloların aralarında önceden tanımlanmış mantıksal ilişkiler (bağlantılar) kurularak organize edildiği veri tabanı modelidir.
	- Tablolar arası bağlantılar **ortak alanlar (anahtar alanlar)** üzerinden kurulur.
	- Veri tekrarını en aza indirir ve [[Veri bütünlüğü|veri bütünlüğünü]] güçlendirir.
	- Günümüzdeki modern veri tabanı sistemlerinin (Oracle, MySQL, SQL Server vb.) neredeyse tamamı bu yapıdadır.
- **Örnek**: Bir kütüphane sisteminde "Kitaplar" tablosu ile "Yazarlar" tablosu, her ikisinde de bulunan "yazar_id" alanı üzerinden birbirine bağlanır. Bu sayede hangi kitabın hangi yazara ait olduğu bilgisi tutulur.

## Veri Türleri (Data Types)
- Bir alanda (sütunda) ne türde veri saklanacağını önceden tanımlamak için kullanılır. Bu sayede;
	1. [[Veri bütünlüğü]] sağlanır.
	2.  Bellek kullanımı optimize edilir.
- **Temel Kategoriler**:
1. [[Sayısal (Numeric)]]: Tam sayılar, ondalıklı sayılar, parasal değerler.
2. [[Tarih ve Saat (Date and Time)]]: Tarih, saat veya her ikisini de içeren veriler.
3. [[Metinsel (String)]]: Harf, rakam ve sembollerden oluşan karakter dizileri.
 



| Veri Türü        | Açıklama                                                                               | Kullanım Örneği                                                     | Aralık                                               |
| ---------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| **INT**          | Normal büyüklükteki tam sayılar için standart veri türü.                               | Öğrenci Numarası, Stok Miktarı, Kullanıcı ID                        | $(-2^{31})$ - $(2^{31}-1)$                           |
| **BIGINT**       | Çok büyük tam sayılar (INT'in yetersiz kaldığı durumlar için).                         | Dünya nüfusu, büyük şirketlerin işlem ID'leri                       | $(-2^{63})$ - $2^{63}-1$                             |
| **SMALLINT**     | Küçük tam sayılar (INT'ten daha az yer kaplar).                                        | Bir binadaki kat sayısı, yaş                                        | $-32,768$ - $32,7674$                                |
| **TINYINT**      | Çok küçük tam sayı değerleri için en verimli tür.                                      | Yaş, aktif/pasif durumu (1/0), ay (1-12)                            | $0-255$                                              |
| **DECIMAL(p,s)** | Matematiksel olarak **kesin** ondalıklı sayılar. Yuvarlama hatası yapmaz.              | **PARA**, Fiyat, Maaş, Bakiye, hassas ölçümler                      | Tanımlanan hassasiyete bağlı                         |
| **FLOAT**        | **Yaklaşık** değerli ondalıklı sayılar. Hızlıdır ama yuvarlama hatası yapabilir.       | Bilimsel hesaplamalar, istatistik (**Asla para için kullanılmaz!**) | Hassasiyete bağlı olarak çok geniş bir aralığa sahip |
| **MONEY**        | Parasal değerleri saklamak için optimize edilmiş, yüksek hassasiyetli veri türü.       | Ürün Fiyatı, Fatura Tutarı, Bakiye                                  | Yaklaşık -922 trilyon ile +922 trilyon arası         |
| **DATE**         | Sadece tarih bilgisini (Yıl, Ay, Gün) saklar.                                          | Doğum Tarihi, İşe Başlama Tarihi                                    | 0001-01-01 ile 9999-12-31 arası                      |
| **TIME**         | Sadece saat bilgisini (Saat, Dakika, Saniye) saklar.                                   | Ders Başlama Saati, Randevu Saati                                   | 00:00:00 ile 23:59:59.999... arası                   |
| **DATETIME**     | Tarih ve saat bilgisini birlikte saklar.                                               | Sipariş Verilme Zamanı, Son Giriş Zamanı                            | Genellikle 1753-01-01 ile 9999-12-31 arası           |
| **CHAR(n)**      | **Sabit** uzunluktaki sembol, sayı ve metinler. Veri kısaysa sonu boşlukla doldurulur. | TC Kimlik No, Plaka Kodu, Ülke Kodu ('TR')                          | $1$ ile $8000$ karakter arası olabilir               |
| **VARCHAR(n)**   | **Değişken** uzunluktaki metinler. Sadece girilen karakter kadar yer kaplar.           | Ad Soyad, Adres, E-posta, Şehir                                     | $1$ ile $8000$ karakter arası olabilir (veya MAX)    |
| **TEXT**         | Çok uzun metin verilerini saklamak için kullanılır.                                    | Blog Yazısı, Ürün Açıklaması, Makale İçeriği                        | Genellikle 2 GB'a kadar çok büyük kapasite           |

- Float ve decimal farkını anlamak için [[LLM'ler Neden Aynı Prompta Farklı Cevaplar Verir]] adlı yazıyı okumanız tavsiye edilir.
#### CHAR(n) ve VARCHAR(n) Farkı
- $\text{CHAR}(10)$ her zaman **10 karakterlik** yer ayırır. 10 karakter doldurulmasa bile boşlukla doldurur.
- $\text{VARCHAR}(10)$ en fazla **10 karakterlik** yer ayırır. Doldurulmayan kısımları karakterden düşer, sadece girilen karakter kadar yer kaplar.
#### $N$ Eki Ne Anlama Geliyor?
- **National** kelimesinden gelir ve **UNICODE** desteği anlamına gelir.
	- Latin alfabesi dışındaki karakterleri saklayacaksak $\text{NCHAR}$ veya $\text{NVARCHAR}$ kullanırız.
- **Dezavantajı**: $N$ ekli türler normal türlere göre karakter başına **iki katı** yer kaplar. Eğer sadece Türkçe ve İngilizce kullanılacaksa $N$ kullanmak gereksiz bellek israfıdır.


---


- $VAR$, **"Variable"** (Değişken) kelimesinin kısaltmasıdır ve bir alanın **değişken boyutlu** olacağını belirtir. $CHAR$'ın başına $VARCHAR$ getirildiğinde asıl karakter kadar yer kaplaması gibi.
