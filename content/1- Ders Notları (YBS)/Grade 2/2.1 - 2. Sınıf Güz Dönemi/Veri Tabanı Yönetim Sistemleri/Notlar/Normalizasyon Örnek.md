## 0NF (un-normalized - flat table) -  `Ogrenci_Ders`


| `Ogrenci_No` | `Ogrenci`    | `Aldigi_Ders_ve_Egitmenler`                                  |
| ------------ | ------------ | ------------------------------------------------------------ |
| 101          | Salih Girgin | VIBECODE101 (Wojak Developer), MOBDEV101 (Fatih Kadir Akın ) |
| 102          | Arif Çıkkın  | TWITTER101 (Prompt Mühendisi)                                |
| 103          | Onur Özcan   | CHATGPT101 (Sam Altman), VIBECODE101 (Wojak Developer)       |


### Tablodaki Sorunlar
1. **Atomik Değil**: `Aldigi_Ders_ve_Egitmenler` sütunu birden fazla değer içermekte.
2. **Veri Tekrarı (Redundancy)**: `VIBECODE101 (Wojak Developer)` verisi hem `Salih Girgin` için hem de `Onur Özcan` için tekrar ediyor.
3. **Anomaliler**
	- **[[Güncelleme Anomalisi]]**: `VIBECODE101` dersinin eğitmeni "`onandagpt babandapt`" olursa Salih'in ve Onur'un satırları ayrı ayrı bulunup düzeltilmesi gerekir. Sadece birisi düzeltilirse sistemde aynı dersin iki farklı hocası varmış gibi gözükür ki, bu veri tutarsızlığıdır.
	- **[[Silme Anomalisi]]**: `Arif Çıkkın` okulu bırakırsa ve bu satırı silersek `TWITTER101` diye bir dersin var olduğu ve eğitmenin `Prompt Mühendisi` olduğu bilgisi de sistemden tamamen silinir ki, bu istenmeyen bir *veri kaybıdır*.
	- **[[Ekleme Anomalisi]]**: Yeni bir ders açıldı diyelim, adı '`AIETHICS202`'. Ancak bu dersi alan hiçbir öğrenci yok henüz. Bu tabloya bu durumda bu dersi ekleyemeyiz, çünkü `Ogrenci_No` kısmı boş kalamaz (*boş kalamayacağını varsayıyoruz*). Yani bir dersi sisteme eklemek için illa bir öğrencinin o dersi almasını beklemek zorundayız.

---

## 1NF 
- Birleşik verileri ayıracağız ve atomikliği sağlayacağız.
- **Teknik Nüans**: Esasında `Ogrenci` sütununu "`Salih Girgin`" olarak birleşik bırakmak 1NF'yi ihlal etmeyebilir. *Atomiklik* verinin kullanım amacına bağlıdır. Biz burada **sorgulama esnekliği sağlamak** ve genel kabul görmüş **en iyi tasarım pratiğini** uygulamak amacıyla ad ve soyadı ayrı sütunlara bölmeyi tercih ediyoruz.

| `Ogrenci_No` | `Ad`  | `Soyad` | `Ders_Kod`  | `Egt_Ad`    | `Egt_Soyad` |
| ------------ | ----- | ------- | ----------- | ----------- | ----------- |
| 101          | Salih | Girgin  | VIBECODE101 | Wojak       | Developer   |
| 101          | Salih | Girgin  | MOBDEV101   | Fatih Kadir | Akın        |
| 102          | Arif  | Çıkkın  | TWITTER101  | Prompt      | Mühendisi   |
| 103          | Onur  | Özcan   | CHATGPT101  | Sam         | Altman      |
| 103          | Onur  | Özcan   | VIBECODE101 | Wojak       | Developer   |

### Tablodaki Sorunlar
- **[[composite primary keys|Bileşik Birincil Anahtar (Composite PK)]]**: Bu tabloda bir satırı benzersiz yapan tek bir sütun yoktur. Bir kaydı benzersiz yapan şey (`Ogrenci_No`, `Ders_Kod`) ikilisidir. Buna **[[composite key|bileşik anahtar]] (*composite key*)** denir.
1. **Veri Tekrarı Sorunu**: En büyük sorun budur. `Salih Girgin` bilgisi `Salih`'in aldığı her ders için tekrar tekrar yazılmaktadır. Bu durum aşağıdaki güncelleme anomalisine yol açar.
2. **Anomaliler**
	- **[[Güncelleme Anomalisi]]**: `Girgin`'i `Girişken` ile değiştirmek istersem, 101 numaralı öğrencinin geçtiği **tüm satırları** bulup tek tek güncellemem gerekir. Birini atlarsam aynı öğrencinin iki farklı soyadı olur ve veri tutarsızlaşır.
	- **[[Ekleme Anomalisi]]**: Hiç ders almayan yeni bir öğrenciyi bu tabloya ekleyemeyiz.
	- **[[Silme Anomalisi]]** Arif Çıkkın'ın kaydını silersek, TWITTER101 dersi de sistemden silinir.


---

## 2NF
- **Amaç**: 1NF tablosundaki **veri tekrarını** ve buna bağlı **anomalileri** çözmek.
- **Kural**: Eğer bir tablo **bileşik birincil anahtar**a sahipse, anahtar olmayan her sütun bu bileşik anahtarın **tamamına** bağlı olmalıdır. Sadece bir parçasına bağlıysa (kısmî bağımlılık) bu durum *veri tekrarına* yol açar ve 2NF ihlalidir.

- Bizim 1NF tablomuzda `Ad` ve `Soyad` sütunları bileşik anahtarın (`Ogrenci_No`,`Ders_Kod`) **tamamına bağlı değildir.** Bir öğrencinin adı, hangi dersi aldığına bağlı olarak değişmez. `Ad `ve `Soyad` anahtarın sadece `Ogrenci_No` kısmına bağlıdır.** İşte bu duruma **[[kısmî bağımlılık]]** denir.
- Kısmî olarak bağımlı olan sütunları (`Ad`, `Soyad`), tamamen bağlı oldukları anahtar parçası (`Ogrenci_No`) ile birlikte alıp kendi mantıksal tablolarına, yani `Ogrenciler` tablosuna taşıyacağız. Bu sayede `Salih Girgin` bilgisi sadece bir kez yazılacak.


#### `Ogrenciler` Tablosu

| `🔑 Ogrenci_No` (*PK*) | `Ad`  | `Soyad` |
| ---------------------- | ----- | ------- |
| 101                    | Salih | Girgin  |
| 102                    | Arif  | Çıkkın  |
| 103                    | Onur  | Özcan   |

#### `Ders_Kayitlari` Tablosu


| `🔑 Ogrenci_No` (PK, FK) | `🔑 Ders_Kod` (PK) | `Egt_Ad`    | `Egt_Soyad` |
| :----------------------- | :----------------- | :---------- | :---------- |
| 101                      | VIBECODE101        | Wojak       | Developer   |
| 101                      | MOBDEV101          | Fatih Kadir | Akın        |
| 102                      | TWITTER101         | Prompt      | Mühendisi   |
| 103                      | CHATGPT101         | Sam         | Altman      |
| 103                      | VIBECODE101        | Wojak       | Developer   |


### 2NF Sonrası Durum ve Kalan Sorunlar
- **Çözülen Sorun:** Öğrenci bilgilerinin tekrar etmesi sorunu (kısmî bağımlılık) çözüldü.
- **Kalan Sorun (Geçişli Bağımlılık)**: `Ders_Kayitlari` tablosunda hâlâ bir veri tekrarı var: `Wojak Developer` bilgisi iki kez yazıyor. Bunun sebebi `Egt_Ad` ve `Egt_Soyad`'ın anahtar olmayan bir sütun olan `Ders_Kod`'a bağlı olmasıdır. Zincirleme bir ilişki vardır:  
	- PK (`Ogrenci_No`,` Ders_Kod`) → `Ders_Kod` → (`Egt_Ad`, `Egt_Soyad`)
	- İşte bu "yanlış yerde duran bilgi" ve buna bağlı veri tekrarı sorununa teknik olarak **[[geçişli fonksiyonel bağımlılık (transitive functional dependency)|geçişli fonksiyonel bağımlılık]]** denir.
1. **Anomaliler**
	- [[Güncelleme Anomalisi]]: `Wojak Developer`'ın soyadı değişirse, bu bilginin tekrar ettiği tüm satırları ($101$ ve $103$ nolu öğrencilerin kayıtları) tek tek bulup güncellemek gerekir.
	- **[[Silme Anomalisi]]**: Eğer `Arif Çıkkın` `TWITTER101` dersini alan tek öğrenciyse ve bu kaydı silersek, `TWITTER101` dersinin varlığına ve eğitmenine dair tüm bilgileri de sistemden kaybederiz.
	- **[[Ekleme Anomalisi]]**: Henüz hiçbir öğrencinin almadığı yeni bir dersi (ve eğitmenini) sisteme eklemek istesek, `Ogrenci_No` alanı boş kalacağı için bu tabloya ekleyemeyiz.

---

## 3NF
- **Amaç:** 2NF'de kalan **geçişli bağımlılığı** ve buna bağlı veri tekrarı ile anomalileri ortadan kaldırmak.
- **Çözüm:** Her tablonun tek bir işi olması ilkesini uygulayacağız. "Dersi kim veriyor?" bilgisini, ait olduğu yere, yani Dersler adında yeni bir tabloya taşıyacağız. Ders_Kayitlari tablosu ise sadece asıl işi olan öğrenci-ders eşleşmesini yapan bir **ilişki tablosuna** dönüşecek.


#### `Ogrenciler` Tablosu

| `🔑 Ogrenci_No` (*PK*) | `Ad`  | `Soyad` |
| ---------------------- | ----- | ------- |
| 101                    | Salih | Girgin  |
| 102                    | Arif  | Çıkkın  |
| 103                    | Onur  | Özcan   |

#### `Dersler` Tablosu
| `🔑 Ders_Kod `(*PK *) | `Egt_Ad`    | `Egt_Soyad` |
| --------------------- | ----------- | ----------- |
| VIBECODE101           | Wojak       | Developer   |
| MOBDEV101             | Fatih Kadir | Akın        |
| TWITTER101            | Prompt      | Mühendisi   |
| CHATGPT101            | Sam         | Altman      |


####  `Kayıtlar` Tablosu

| `🔑 Kayit_ID` (*PK*) | `Ogrenci_No` (*FK*) | `Ders_Kod` (*FK*) |
| -------------------- | ------------------- | ----------------- |
| 1                    | 101                 | VIBECODE101       |
| 2                    | 101                 | MOBDEV101         |
| 3                    | 102                 | TWITTER101        |
| 4                    | 103                 | CHATGPT101        |
| 5                    | 103                 | VIBECODE101       |

### Sonuç
- Pratikte karşılaşılan en yaygın anomaliler ve veri tekrarı sorunları çözülmüştür.
-  Bu yapı çoğu uygulama için yeterince sağlam ve tutarlıdır. 
- Ancak BCNF, 4NF gibi daha ileri normalizasyon seviyeleri hâlâ vardır. Bu yüzden tüm anomalilerin çözüldüğünü söylemek teknik olarak yanlış olur.
