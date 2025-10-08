## 1. Sınıf (Class) Nedir ve Neden Kullanılır
- OOP'de bir nesne (`object`) oluşturabilmek için öncelikle o nesnenin bir **modelinin** veya **şablonunun** tasarlanması gerekir. İşte bu modeli tanımladığımız yapıysa **sınıf (*class*)** denir.
- Bir binayı inşa etmeden önce projesini çizeriz. O proje binanın temelidir (`class`). O projeye bakılarak inşa edilen somut bina ise nesnenin (`object`) kendisidir.
- Sınıflar bir referans türüdür.
- Sınıf yapısı, programlamada modelleyeceğimiz nesnelerin
	1. Hangi **özelliklere (*properties, fields*)** sahip olacağını,
	2. Hangi **davranışları veya eylemleri (*metods*)** sergileyeceğini
	   tanımlamamızı sağlar.
## 2. Sınıf ve Nesne İlişkisi
- Sınıf **soyut** bir tamımdır (model), nesne ise o tanımdan üretilmiş **somut** bir örnektir (instance).
- Aralarındaki ilişki **bire-çok (one-to-many)** olarak tanımlanabilir.
	- **Tekil Olan (Bir)**: Sınıf tanımı bir kez yapılır.
	- **Çoğul Olan (Çok)**: Bu tek tanımdan istenildiği kadar (bellek yettiği sürece) nesne örneği üretilebilir.
- **Özelliklerin ve Değerlerin Ayrımı**
	- Bir sınıfta tanımlanan özellikler (`ad`, `soyad` gibi) o sınıftan türetilen **tüm nesneler için ortaktır**.
	- Ancak her nesne, bu ortak özelliklere  **kendine özgü değerler** atayarak birbirinden farklılaşır.
## 3. Bir Sınıf Nasıl ve Nerede Oluşturulur
#### Nasıl Oluşturulur (*Sözdizimi - Syntax*)
- `class` anahtar kelimesi kullanılır.
- Ardından programlama dili kurallarına uygun bir isim verilir.
- Süslü parantezler `{ }` arasında sınıfın üyeleri (fields, metods vb.) yazılır.

> [!warning] Uyarı
>  Bir sınıf tanımlamasında tanımlanan yerde (namespace, namespace dışı, class) aynı isimde birden fazla class tanımlanamaz!

### Nerede Oluşturulur
#### 1. **Namespace İçerisinde**:
- En yaygın ve standart kullanım budur. Sınıfların mantıksal olarak gruplandırılmasını ve kodun organize edilmesini sağlar.

```csharp
namespace ArabaGalerisi
{
	public class Araba
	{
		// Fields / Properties
		public string Marka;
		public string Model;
		public int Yil;
		public string Renk;
		
		// Methods
		public void BilgileriGoster()
		{
		Console.WriteLine($"Marka: {Marka}, Model: {Model}, Yıl: {Yil}, Renk: {Renk}");
		}
	}
	
	// Aynı namespace içinde başka bir da olabilir.
	
	public class Musteri
	
	{
	public string Ad;
	public string Soyad;
	public string Telefon;
	}
}
```
#### 2. **Namespace Dışında**:
- Teknik olarak mümkündür ancak organize bir yapı sunmadığı için **kesinlikle tavsiye edilmez**. Bu durumda sınıf "Global Namespace" içinde yer alır ve her yerden doğrudan erişilebilir hâle gelir.

```csharp
// Herhangi bir namespace yoktur.

public class Kinizm
{
	public string FilozofAdi;
	public string EserSayisi;
	public string Etkilendikleri;
	public string Etkiledikleri;
}

// Namespace'li kodlar bunun altında devam edebilir.

namespace AntikYunanFelsefesi
{
	public class Platonculuk
	{
	// ...
	}
}

```

#### 3. **Sınıf İçerisinde (*Nested Types*)**
- Bir sınıfın içine başka bir sınıf tanımlanabilri. Bu genellikle bir sınıfın sadece başka bir sınıf tarafından kullanılacağı özel durumlarda tercih edilir ve *ileri düzey* bir konudur.

```csharp
namespace AntikYunanFelsefesi
{
    // "Platonculuk" ana felsefi okuldur (Dış Class).
    public class Platonculuk
    {
        public string Kurucusu = "Platon";
        public string TemelIlkesi = "Gerçeklik, idealar dünyasındadır.";

        // "Idea" kavramı, Platonculuk'un içsel ve temel bir parçasıdır.
        // Bu yüzden "Nested Type" olarak onun içine yazılır (İç Class).
        public class Idea
        {
            public string Ad; // Örneğin: "İyilik İdeası", "Güzellik İdeası"
            public string Tanim;
        }
    }
}
```

### 4. Sınıf Modeli Üzerinden Referans Noktası Oluşturma
- **Referans Noktası Nedir?**: Bir sınıftan nesne oluşturmak iki adımlı bir süreçtir. İlk adım, o nesneyi bellekte (`Heap`) tutacak olan referans değişkenini (`pointer` benzeri) oluşturmaktır. Bu değişkene "referans noktası" denir.
##### Oluşturma Süreci
1. **Tür Belirtilir**: Değişkenin türü, oluşturduğumuz sınıfın adıdır (`ÖrnekModel`).
	- Bir class tanımlladığımızda o class adı bir türdür. Haliyle o türü kullanabilmek için direkt olarak class adını kullanmamız yeterlidir.
2. **İsim Verilir**: Değişkene bir isim verilir (`w`) (**Referans noktası alınır/ayarlanır.**)
	- Referans türlü değişkenler özünde `nullable` olabilen değişkenlerdir.
	- `ÖrnekModel w;`
	- `Form2 form2 = new Form2();` gibi.
##### Bellekteki Karşılığı
- Bu komut çalıştığında belleğin `STACK` bölgesinde `w` adında bir değişken için yer ayrılır.
- Bu `w` değişkeni, henüz `Heap`'te herhangi bir nesneyi işaret etmediği için varsayılan olarak **`null`** değerini tutar.
	- **`null`**: Hiçlik, boşluk. Referansın bellekte herhangi bir adresi göstermediğini belirtir.
- Velhasılkelam, `new` anahtar kelimesini kullanmadan sadece  `SınıfAdı değişkenAdı;` şeklinde yapılan tanım, nesnenin kendisini değil, o nesneye ileride bağlanacak olan **referansı** oluşturur. Nesnenin kendisi bir sonraki adımda (`new`) ile oluşturulacaktır.