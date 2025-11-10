"**Veri nedir? Tanımlayınız.**" :: Genel tanım olarak "ham enformasyon parçacığı" adı verilir. Başka bir şekilde insan dünyasında algılanan semboller veya simgelerdir. Veri, bir sembolizmadır: Gerçek dünyada yahut idea olarak bizde var olan bir şeyin somut bir temsilidir. 

"**Enformasyon nedir? Tanımlayınız.**" :: Verinin/verilerin sınıflandırılması, özetlenmesi, kategorize edilmesi vb. işlemlerle veriye bir bağlam (context) eklenmesi işlemidir. Veri bu aşamada çıkarım yapmaya elverişli bir forma bürünür.

"**Bilgi nedir? Tanımlayınız.**" :: Enformasyonun bir amaca/eyleme dönük olarak yorumlandığı ve uygulandığı aşamadır. 

"**Bilgelik nedir? Tanımlayınız.**" :: Bilginin felsefî, etik, ileriye dönük boyutudur denilebilir. Felsefîdir, zira bir çözümleme aktivitesi içerir; etiktir, zira normatiflik içerir (neyin doğru-yanlış, iyi-kötü olduğuna yönelik kural koyma); ileriye dönüktür, zira potansiyel sonuçları ön görmeyi içerir.

"**Veri Tabanı nedir?**" :: Mantıksal ve fiziksel olarak tanımlanmış yapısal veriyi düzenli, erişilebilir ve yönetilebilir şekilde saklayan sistem.

"**İlişkisel Veri Tabanı nedir?**" :: 1970'lerde IBM'de araştırmacı olan Edgar F. Codd tarafından geliştirilmiş, tabloların aralarında anahtar alanlarla tanımlanmış ilişkiler kurularak organize edildiği veri tabanı modelidir. Dönemin hiyerarşik ve ağ tabanlı sistemlerinin aksine 1971-72 yıllarında üçüncü normal forma kadar olan normalizasyon aşamalarını da ortaya atmış, veri tekrarını en aza indirgemiş, veri bütünlüğünü güçlendirmiş ve anomalileri de minimize etmiştir.<br><br>Mesela bir okulda "`Öğretmen`" tablosu ile "`Ders`" tablosu, her ikisinde de bulunan "`OgretmenID`" alanı üzerinden birbirine bağlanır. Bu sayede hangi dersi hangi öğretmen(ler)in verdiği bilgisi tutulur.

"**Yapısal ve yapısal olmayan verileri tanımlayınız.**" :: Yapısal (structured) veri, verinin belirli bir biçimde organize edilmiş; okunulabilen, sorgulanabilen ve sıralanabilen hâlidir (örn: veri tabanı tabloları). Yapısal olmayan (unstructured) veri ise organizasyona ve özel işleme ihtiyaç duyan, belirli bir yapısı olmayan verilerdir. Word dosyaları, ses kayıtları, PDF'ler, resimler vb. örnek olarak sarfedilebilir.

**Veri Tabanı Yönetim Sistemi (VTYS) nedir**? :: Bir veri tabanı oluşturmak, saklamak, çoğaltmak, eklemeler/silmeler yapmak ve daha genik kapsamıyla veriyi manipüle etmek için kullanılan programlardır. 

**VTYS'nin sağladığı faydaları yazınız ve popüler VTYS araçlarından birkaçını örnek olarak veriniz**. :: Veri tutarlılığı, veri bütünlüğü, veri paylaşımı, veri güvenliği başlıca faydalarındandır. Microsoft SQL Server, MySQL, PostgreSQL, MariaDB; Cassandra, Redis, MongoDB gibi VTYS araçlarını örnek olarak sarfedebiliriz.

**Veri Tabanı yaklaşımının avantajları nelerdir**? :: Veri bütünlüğü, güvenlik, gizlilik, veri tutarlılığı, veriye erişimi kolaylaştırma, gereksiz veri tekrarını önleme, yedekleme ve geri yükleme gibi işlemleri kolaylaştırma, veriye kimin erişip kimin erişemeyeceğini belirleme, veriler üzerine merkezî denetim sağlama.

**Veri Tabanı temel kavramlarından "tablo" nedir**? :: Tablo (table), veri tabanı içerisinde birbirleriyle ilişkili verilerin saklandığı, satır ve sütunlardan oluşan temel yapıdır. İlişkisel veri tabanının babası kabul edilen Edgar F. Codd (Codd), "tablo"ya "ilişki" adını verir.

**Veri Tabanı temel kavramlarından "satır" nedir**? :: Codd, buna demet (tuple) adını verir. Kayıt (record) olarak da bilinmektedir. Tablodaki her bir kaydı ifade etmektedir satır.

**Veri Tabanı temel kavramlarından "sütun" nedir**? :: Codd, buna öznitelik (attribute) derdi. Tüm kayıtlarda ortak olan belirli bir niteliği ifade etmektedir. "Alan" olarak da bilinmektedir.

**Birincil Anahtar nedir? Tanımlayınız**. :: Tablodaki her satırı (kaydı) *benzersiz* olarak tanımlayan alandır.

**Yabancı Anahtar (İkincil Anahtar) nedir? Tanımlayınız**. :: Bir tablodaki birincil anahtarın başka bir tabloda eklenerek ilişki kurulmasını sağlayan alandır. Referans bütünlüğünü sağlaması bakımından önemlidir.


"**Normalizasyon nedir?**" :: Veri tabanındaki gereksiz veri tekrarını azaltmak, veri bütünlüğünü sağlamak ve veri anomalilerini (ekleme, güncelleme, silme) minimal düzeye indirgemek için yapılan mantıksal düzenleme işlemi.

"**Normalizasyonun avantajları nelerdir?**" ::  Tutarlılık, verimlilik, veri bütünlüğü ve kolay bakım.

"**1NF aşaması ne yapar?**" :: Her sütün (alan), yalnızca tek bir bölünemez değer (atomik değer) içermelidir. Çok değerli hiçbir alan olmamalıdır. Tekrarlayan veya boş veri olmamalıdır.

"**2NF aşaması ne yapar?**" :: Kısmî fonksiyonel bağımlılıklar kaldırılmalıdır. Tam fonksiyonel bağımlılık olmalıdır. Eğer tablo bileşik birincil anahtara sahip İSE, anahtar olmayan ger sütun bu bileşik anahtarın **tamamına** bağlı olmalıdır, sadece bir parçasına değil.

"**3NF aşaması ne yapar?**" :: Geçişli fonksiyonel bağımlılık olmamalıdır. Birincil anahtar olmayan hiçbir sütun, yine birincil anahtar olmayan başka bir sütuna bağlı olmamalıdır, dolayısıyla burada farklı tablolar oluşturacak ve orada yeni primary keyler tanımlayacağız...


"**Varlık nedir? Veri tabanında gösterimi nedir?**" :: Gerçek dünyada var olan ve diğer nesnelerden ayırt edilebilen her türlü nesne, kavram veya olgu. Fizikî bir nesne olabielceği gibi (somut) mantıksal veya soyut bir kavram da olabilir. Önemli olan, varlığın kendi başına tanımlanabilir bir kimliğe sahip olması ve diğer varlıklardan ayırt edilebilmesidir. Dikdörtgen ile gösterilir.

"**Nitelik nedir? Veri tabanında gösterimi nedir?**" :: Bir varlığı tanımlayan ve niteleyen özelliklerdir. Elips ile gösterilir, ait olduğu varlığa bir *çizgi* ile bağlanır.

"**İlişki nedir? Veri tabanında gösterimi nedir?**" :: İki veya daha fazla varlık kümesi arasındaki bağlantı veya etkileşime denir. İş kurallarına göre değişkenlik gösterir. Baklava dilimi ile gösterilir.

"**İş kuralları nedir?**" :: Bir işi tanımlayan, sınırını belirleyen ifadelerdir. Atomik, anlaşılır, tutarlı, kısa ve öz, son kullanıcının anlayacağı biçimde olmalıdır. Politikalardan, prosedürlerden, olaylardan ve fonksiyonlardan çıkar.

"**Bire-Bir ilişki nedir? Örnek vererek açıklayınız.**" :: Bir varlık kümesindeki bir eleman, diğer varlık kümesinden en fazla bir eleman ile ilişki kurabilir. <br><br>Bir *kişi*, en fazla bir *TC Kimlik numarasına* sahip olabillir.

"**Bire-Çok ilişki nedir? Örnek vererek açıklayınız.**" :: Bir varlık kümesindeki bir eleman, diğer varlık kümesindeki birden fazla varlıkla ilişkili olabilir. <br><br>Bir danışmanın birden fazla öğrencisi olabilir, ancak her öğrencinin bir danışmanı vardır.

"**Çoka-çok ilişki nedir? Örnek vererek açıklayınız**" :: Bir varlık kümesindeki birden çok varlık, diğer varlık kümesindeki birden çok varlık ile ilişki kurabilir ve tersi de geçerlidir. <br><br>Öğrenci ile Ders arasındak ilişki.