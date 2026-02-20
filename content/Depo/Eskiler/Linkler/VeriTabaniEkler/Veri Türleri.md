---
tags:
  - akademi/dersler/veri-tabani
---
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
