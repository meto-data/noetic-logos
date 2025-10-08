- **[[Yaklaşım]]**: İşi yapma/düzenleme/formalize etme ahlâkı. Bir olguya, yapıya, inşâ'ya yaklaşma biçimidir. 

### OOP nedir?
- Bir programlama dili veya teknolojisi değil, bir **yazılım geliştirme yaklaşımıdır.**
- Gerçek hayatı programlama için simüle eden nesneleri baz alan bir programlama tekniğidir.
- Nesne Tabanlı Programlama bir yaklaşımdır.
### Nesne (Object)
- OOP'de en küçük esasa parça **nesne/obje/object**'tir.
 - Gerçek bir sistem nesnel parçalara ayrılır ve bu parçalar (nesneler) arasında ilişkiler kurulur.
 - Nesneler kendi aralarında haberleşebilirler
 - Gerçek hayattaki elle tutulur, gözle görülür her olgu (sen, ben, personel, ürün, araba, satış vb.) bir nesnedir.
 - Gerçek hayattaki herhangi bir olguyu, programlama dünyasında (yazılım simülasyonunda) onu tarif eden bir nesne olarak modellemek esastır. Yani gerçek dünyadaki nesnelerin programdaki karşılıkları (muadilleri) oluşturulur.
### Nesne Yaratma Yöntemi: Nesne Modellemesi ve Sınıf (Class)
- **Gereklilik:** Nesnelerin oluşturulabilmesi için önce **modellenmesi** gerekir.
- **Araç:** Nesne modeli, programlama dillerinde **Sınıf (Class)** yapısı ile gerçekleştirilir.
    - **Sınıf (Class):** Nesnenin soyut bir tanımı, planı veya **modelidir**.
    - **Nesne (Object):** O modelden (sınıftan) üretilmiş somut bir **örnektir**.
        
- **Kural:** Bir nesne üretebilmek için **mutlaka** bir class'a ihtiyaç vardır. (interface gibi başka yapılar nesne üretemez.)



### Nesnenin Anatomisi: İç Yapısı

Bir nesne iki ana bileşenden oluşur:
- **1. Alanlar (Fields):**
    - Nesnenin durumunu (state) belirleyen verileri tutan alanlardır.
    - Bir nesnenin özelliklerini (attributes) temsil ederler. Örneğin, bir "Araba" nesnesi düşünün. Bu arabanın `Renk`, `ModelYılı`, `Hız`, `Marka` gibi özellikleri olur. İşte bu özelliklerin her biri birer **field**'dır ve nesnenin o anki durumunu belirleyen verileri tutarlar.
- **2. Fonksiyonlar (Davranışlar):**
    - Nesnenin field'larındaki değerleri işleyebilmesi ve eylemde bulunabilmesi için gereken fonksiyonlardır.

### Stack ve Heap

| Kriter                    | Stack (Yığın)                                                                                                                                                                                                                          | Heap (Öbek)                                                                                                                                                                                                                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Temel Tanım**           | Üst üste konulmuş tabaklar gibidir.<br>**LIFO (*Last-In, First-Out*)** prensibiyle çalışır, en son eklenen ilk çıkar.                                                                                                                  | Büyük bir depo veya ambar gibidir.<br>Veriler organize bir sırada değil, uygun bulunan herhangi bir boş alana  yerleştirilir.                                                                                                                                                                 |
| **Veri Yapısı**           | Doğrusal, yüksek düzeyde organize ve sıralı bir veri yapısıdır.                                                                                                                                                                        | Gayri-hiyerarşik, ağaç benzeri bir veri yapısıdır. Veriler arasında doğrudan bir sıra yoktur.                                                                                                                                                                                                 |
| **Bellek Yönetimi**       | **Otomatiktir**. Derleyici (compile time) ve CPU (runtime) tarafından yönetilir. Bir `stack pointer` adresi tutulur.                                                                                                                   | **Dinamiktir**. Yönetilen dillerde (*C#, Java*) **Garbage Collector (GC)**, yönetilmeyen dillerde (*C, C++*) programcı ($\text{malloc / free}$) tarafından yönetilir.                                                                                                                         |
| **Erişim Hızı**           | **Çok hızlı**. Bellek blokları bitişiktir ve erişim sadece bir [[pointer]]'ı kaydırma işlemidir. Donanım seviyesinde desteklenir.                                                                                                      | **Daha yavaş**. Yeni bir nesne için uygun boyutta boş bir bellek bloğu bulunmalı, bu da arama ve yönetim maliyeti getirir.                                                                                                                                                                    |
| **Boyut ve Sınırlar**     | Genellikle **küçük ve sabit**. Boyutu program çalışmaya başlamadan önce belirlenir.                                                                                                                                                    | Genellikle **büyük ve dinamik**. Programın çalışma anında ihtiyaca göre büyüyebilir veya küçülebilir.                                                                                                                                                                                         |
| **Saklanan Veri Türleri** | **1. Değer Türleri (Value Types)**: `int`, `bool`, `char`, `double`, `struct` vb. değerlerin kendisi burada saklanır. <br>**2. Referanslar (Pointers)**: Heap'te bulunan nesnelerin **adreslerini** tutan işaretçiler burada saklanır. | **1. Referans Türleri (Reference Types)**: `class` ile oluşturulan *nesnelerin kendileri* burada saklanır.  <br> **2. Dinamik olarak oluşturulan veriler.** <br>                                                                                                                              |
| **Ömür**                  | **Kısa ve öngörülebilir**. Verinin ömrü, tanımlandığı metodun veya `scope`'un çalışma süresiyle sınırlıdır. Metot bitince Stack'ten otomatik olarak silinir.                                                                           | **Uzun ve değişkendir.** Nesnenin ömrü, ona işaret eden bir referans olduğu sürece devam eder. Referans kalmadığında GC tarafından temizlenmek üzere işaretlenir.                                                                                                                             |
| **Kullanım Alanı**        | <ul><li>Metot çağrıları (parametreler, yerel değişkenler)</li><li>Değer türlü değişkenlerin saklanması</li></ul>                                                                                                                       | <ul><li>`new` anahtar kelimesi ile oluşturulan tüm nesneler</li><li>Diziler, string'ler (genellikle) ve diğer karmaşık veri yapıları</li></ul>                                                                                                                                                |
| **Potansiyel Sorunlar**   | **Stack Overflow (Yığın Taşması)**: Ayrılan stack alanı dolduğunda (örneğin sonsuz bir recursive metod çağrısında) program çöker.                                                                                                      | **1. Memory Leak (Bellek Sızıntısı)**: Yönetilmeyen dillerde kulalnılmayan nesneler serbest bırakılmazsa bellekte yer işgal etmeye devam eder. <br> **2. Fragmentation (Parçalanma)**: Bellekteki sürekli silme ve ekleme işlemleri nedeniyle küçük, kullanılamayan bellek boşlukları oluşur. |
| **Temel Avantaj**         | Hız ve verimlilik. Otomatik bellek yönetimi sayesinde programcı için daha basittir.                                                                                                                                                    | Esneklik. Programın çalışma anında ne kadar belleğe ihtiyaç duyulacağı bilinmediğinde büyük verileri ve nesneleri saklamak için idealdir.                                                                                                                                                     |

   