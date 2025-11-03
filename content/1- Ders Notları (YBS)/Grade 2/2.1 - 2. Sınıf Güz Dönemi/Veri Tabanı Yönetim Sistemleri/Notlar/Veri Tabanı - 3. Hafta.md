---
title: Veri Tabanı Yönetim Sistemleri - 3. Ders
---



 - Sınavda soru gelecek kesinlikle, diyagramların çizimine önem göstermek gerekiyor. [Draw](https://draw.io)

---

# Varlık-İlişki Modeli (Entity-Relationship Model)

- Fiziksel dünyayı kavramsallaştırma, modelleme.

## ERD'nin Temel Kavramları ve Bileşenleri
### [[Varlık]] (Entity)
- **Gerçek dünyada var olan ve diğer nesnelerden ayırt edilebilen her türlü nesne, kavram veya olgu.**
	- Fizikî bir nesne (ör. *Araba, Ürün* gibi **somut** varlıklar) olabileceği gibi mantıksal veya somut bir kavram da olabilir (ör. *Sipariş, Rezervasyon, Müşteri İşlemi* gibi).
	- Önemli olan, *varlığın* **kendi başına tanımlanabilir bir kimliğe sahip olması** ve **diğer varlıklardan ayırt edilebilmesidir**.
- Veri tabanında hakkında bilgi tutulmak istenen her şey bir varlıktır.
	- `Öğrenci`, `Ders`, `Öğretmen`, `Müşteri` vb.
- **Gösterim**: Dikdörtgen (Rectangle).
### Varlık Kümesi (Entity Set)
- Aynı türdeki ve aynı özelliklere sahip varlıkların oluşturduğu kümedir.
- **Örnek**: Okuldaki tüm öğrencilerin oluşturduğu `Öğrenci` varlık kümesi.
### Nitelik-Özellik (Attribute)
- Bir varlığı tanımlayan ve niteleyen özelliklerdir.
- **Örnek**: `Öğrenci` varlığının `OgrenciNo`, `Ad`, `Soyad`, `DogumTarihi` gibi nitelikleri vardır.
- **Gösterim**: Elips (Oval) ile gösterilir ve ait olduğu varlığa bir *çizgi* ile bağlanır.
- **Karar vericinin** ve **son kullanıcının** isteklerine göre özellikler belirlenir.
### İlişki (Relationship)
- İki veya daha fazla varlık kümesi arasındaki bağlantı veya etkileşim.
- **[[iş kuralları|İş kurallarına]]** göre değişkenlik gösterir.
- Verinin nasıl kullanıldığını, hangi verinin kullanıldığını ve nasıl yönetilip saklanması gerektiğini belirler.
- **Örnek**: `Öğrenci` ve `Ders` varlıkları arasında "*ders alır*" ilişkisi vardır.
- **Gösterim**: Baklava dilimi (Diamond).

## Nitelik Türleri (Attribute Types)
###### **Basit Nitelikler (*Simple Attributes*)** 
- Daha küçük parçalara bölünemeyen niteliklerdir (örn: `Maaş`).
###### **Bileşik Nitelikler (*Composite Attributes*)**
- Kendi içinde alt parçalara ayrılabilen niteliklerdir.
	- **Örnek**: `İsim` niteliği, `Ad`,  `Orta_Ad`, `Soyad` gibi niteliklere ayrılabilir. `Adres` niteliği `Sokak`, `Şehir`, `PostaKodu` gibi parçalara ayrılabilir.
###### **Çok Değerli Nitelikler (*Multivalued Attributes*)**
- Bir varlık için birden fazla değer alabilen niteliklerdir.
	- **Örnek**: Bir kişinin birden fazla `telefon_numarasi` olabilir.
	- **Gösterim**: Çift elips ile gösterilir.
###### **Türetilmiş Nitelikler (*Derived Attributes*)**
- Değeri veri tabanındaki başka bir nitelikten hesaplanabilen özelliklerdir. Bu tür veriler genellikle veri tabanında saklanmaz, ihtiyaç duyulduğunda hesaplanır.
	- **Örnek**: `Yas` niteliği `Dogum_Tarihi` niteliğinden hesaplanabilir.
		- **Gösterim**: Kesikli çizgili elips ile gösterilir.

## İlişki Kardinalitesi (Sayısal İlişkiler - Cardinality)
- İlişkiye katılan varlık kümelerindeki varlıkların sayısal oranını belirtir.
- Başka bir ifadeyle, bir ilişkideki varlık örneklerinin birbirleriyle en az veya en çok kaç defa ilişki kurabileceğini sayısal olarak ifade eder. İlişkinin "kaçarlı" olduğu belirtir.

- **Dış Kısım (Kardinalite - Maksimum):**
    - **| (Çizgi):** Bir (One)
    - **< (Karga Ayağı):** Çok (Many)
        
- **İç Kısım (Katılım - Minimum):**
    - **| (Çizgi):** Bir (Zorunlu / Mandatory)
    - **O (Yuvarlak):** Sıfır (İsteğe Bağlı / Optional)

![[xtoy.jpg]]

#### Bire-Bir (One-to-One / 1:1)
- Bir varlık kümesindeki bir varlık, diğer varlık kümesinden en fazla bir varlık ile ilişki kurar ve tersi de geçerlidir. Örneğin, bir *kişi* varlığının en fazla bir *TC kimlik numarası* vardır ve her TC kimlik numarası da en fazla bir kişiye aittir.

#### Bire-Çok (One-to-Many / 1:M)
- Bir varlık kümesindeki **bir** varlık, diğer kümedeki **birden fazla** varlıkla ilişkili olabilir (*Örn: Bir danışman hoca birden çok öğrenciye danışmanlık yapabilir, ama bir öğrencinin sadece bir danışmanı vardır.*).
#### Çoka-Bir (Many-to-One / M:1)
- Bire-çok ilişkinin tersidir (*Örn: Birden çok öğrenci aynı bölümde okuyabilir*).
#### Çoka-çok (Many-to-Many / M:N)
- Bir varlık kümesindeki varlık, diğer kümeden birden çok varlık ile ilişki kurabilir **ve tersi de geçerlidir**. *Öğrenci* ile *Ders* arasındaki ilişki *çoka-çok* olabilir: Bir öğrenci birden fazla ders alabilir ve her ders çok sayıda öğrenci tarafından alınabilir.


## Katılım Kısıtları (Participation Constraints)
- Bir varlığın bir ilişkiye katılmasının zorunlu olup olmadığını belirtir.

###### **Tam Katılım** (Total Participation)
- Bir varlık kümesindeki **her** varlık ilişkiye katılmak **zorundadır**.
	- **Örnek**: Her `borç` kaydı mutlaka bir `müşteri`'ye bağlı olmalıdır.
	- **Gösterim**: Varlık ile ilişki arasına çift çizgi (double line) çekilerek gösterilir.
###### **Kısmî Katılım** (Partial Participation)
- Bir varlık kümesindeki varlıkların ilişkiye katılması **zorunlu değildir**.
	- **Örnek**: Her `müşteri`'nin bir `borç` alması zorunlu değildir.
	- **Gösterim**: Varlık ile ilişki arasına tek çizgi (single line) çekilir.

## Zayıf Varlık Kümeleri (Weak Entity Sets)
- Kendisine ait birincil anahtarı ([[primary key]]) olmayan ve var olabilmek için başka bir varlık (güçlü) kümesine bağımlı olan varlıklardır.
- **Örnek**: Bir bankadaki `borç` kaydı olmadan o borca ait bir `ödeme` kaydının anlamı yoktur. `Ödeme` varlığı `borç` varlığına bağımlıdır.

- **Ayırt Edici (Discriminator / Partial Key)**: Zayıf varlık kümesini, bağlı olduğu güçlü varlık içinde ayırt etmeye yarayan nitelikler kümesidir. Tek başına benzersiz değildir (*Örneğin: `odeme_numarasi`*). ?
- Zayıf varlık kümesinin birincil anahtarı, bağlı olduğu güçlü varlığın birincil anahtarı ile kendi ayırt edicisinin birleşiminden oluşur. (*Örn*: `{borc_numarasi, odeme_numarasi}`)
- **Gösterim**:
	- **Zayıf Varlık**: Çift çerçeveli dikdörtgen.
	- **Tanımlayıcı İlişki**: Çift çerçeveli baklava dilimi.
	- **Ayırt Edici Nitelik**: Kesikli alt çizgi.
