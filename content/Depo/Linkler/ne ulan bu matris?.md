---
created: '2025-11-03'
---
3### Etimoloji, Kısa Tarihçe Falan

#### Matris (*Matrix*) 
- Latince "matrix" kelimesinden gelmektedir matris. Bunu genellikle **satır ve sütunlar hâlinde düzenlenmiş sayı veya sembollerden oluşan dikdörtgen tabloya verilen isim** minvalinde tanımlarlar. Matrix rahim (döl yatağı) anlamına gelir. Alakasız gözüküyor değil mi? "Matrix ile rahim ne alaka yaw?" diye düşünüyoruz. En iyisi biraz özüne inelim ve ne'liğini anlayalım bu durumun. 
- 1850'de James Joseph Slyvester türetiyor bu kelimeyi. "Birçok determinantı (minör) 'doğuran' oblong dizilim." anlamında kullanıyor *matrix* kelimesini.
- Matris, bir sistemi *doğuran*, bir dönüşümü *doğuran* yapıdır. Bu yapıya bu sebeple *matrix* denilmiştir ve bir lineer dönüşümün ta kendisinin temsilidir.
#### **Lineer (Doğrusal / Linear)**
- Latince *linea* (ip, çizgi) kökünden geliyor. İlk çıkış noktası iki değişkenli bir *lineer denklemin* çözüm kümesinin **bir doğru** olmasıdır. Zamanla "doğrusal birleşim/toplamsallık `+` homojenlik anlamına genelleşmiştir."
#### **Skaler (Scaler)**
- Latince *scalaris* sözcüğünden türemiştir. "Merdivenle ilgili", "basamaklı" demektir. Temel kökü *scala* ise "merdiven, basamak, ölçek" anlamındadır.
- Kelimenin kökünde "bir basamakta bulunma, tek bir seviye olma" fikri vardır. Bu yüzden "ölçek" sözcüğüyle de aynı köktendir.
- Skaler yalnızca bir **büyüklüğü** ("basamak değeri") ifade eder, herhangi bir yönü yoktur.
- $a$ ile gösterilir. 

#### **Vektör (Vector)** ($\mathbf{\vec v}$)
- Latince *vector* "taşıyan, götüren" (*< vehere*, taşımak/sürüklemek/iletmek) kökünden gelmektedir. 
- Kelimenin kökünde “bir şeyi bir yerden bir yere taşıma, yön verme” fikri vardır.
- Vektör bir niceliğin **taşıdığı yön ve büyüklüğü** birlikte gösterir.
- $\vec v$  ile gösterilir.

---

### Nesne ve Oyun Alanı (Vektör ve Vektör Uzayı)
- Bir sistem kurmak için ilkin nesne'ye (object) ihtiyacımız vardır. Ama bir nesne tek başına bir hiçtir. $5$ sayısı tek başına mânâsızdır. Onu `+` veya `-` gibi eylemlere tâbi tutana kadar bir hiçtir. Nesnenin bir vektör uzayına (space) ve kurallara ihtiyacı vardır.
- En ilkel, en temel oyun kuralları nelerdir? Bir marangozhanedesiniz diyelim, elinizde de tahta parçaları var. Bu parçalarla ne yapabilirsiniz? İki temel eylem var:
	1. İki tahta parçasını *birleştirebiliriz* (uç uca ekleriz, *toplarız).
	2. Bir tahta parçasının *boyutunu değiştirebiliriz* (keseriz veya aynısından bir tane daha yapıp ekleriz, yani *ölçeklendiririz.*)
- İşte, bir küme düşünelim ki, içindeki nesneler bu iki temel kurala uysun:
	1. O nesnelerden ikisini alıp toplayabilsin (<u>ancak sonuç yine o <b>alanda</b> kalmalı</u>).
	2. O nesnelerden birini alıp bir *sayıyla* (*skaler*) çarpabilsin, yani *ölçekleyebilsin* (<u>ancak sonuç yine o <b>alanda</b> kalmalı</u>).
- Bu iki kurala uyan *oyun alanına* **vektör uzayı** denir. Bu *oyun alanı* içerisindeki *her şeye* de **vektör** denir. "Yönü ve büyüklüğü olan şey" tanımına da uymaktadır bu. Şöyle uymaktadır:
- **Kural 1 (Toplama):** İki tane ok (*vektör*) alalım. `v` okunın 3 birim sağa, 2 birim yukarıya giden bir yönü olsun (`[3, 2]`).  `w` okunun ise 1 birim sağa 4 birim aşağa giden bir yönü olsun (`[1, -4]`)
	- Şimdi bu ikisini toplayalım. `v+w = [3+1, 2-4] = [4, -2]` yani 4 birim sağa, 2 birim aşağı giden yeni bir ok. Bu sonuç nedir? **yönü ve büyüklüğü olan** başka bir şey.
- **Kural 2 (Ölçekleme)**: `v` oku 3 birim sağa, 2 birim yukarı gitsin (`[3, 2])`. Şimdi bunu bir *sayıyla (skaler)* çarpalım. `c=3` olsun bu sayı.
	- Sonuç ne olur? `c*v = [9, 6]`, yani 9 birim sağa, 6 birim yukarı giden yeni bir *ok*. Yönü değişmedi ancak büyüklüğü değişti (3 katına çıktı).

### Eylem ve Kuralı: Lineer Dönüşüm
- Lineer dönüşümü bir makine gibi düşünmek lazım. Peki bu makineyi "lineer" yapan kurallar nelerdir?
	1. **Kural 1 (Toplama/Toplamsallık)**: $f(v+w) = f(v) + f(w)$
		- Makinenin dışındaki iki vektörü toplamak (yani `v+w` girdisini hazırlamak) ve sonucu tek seferde makineye atmak ile o iki vektörü *ayrı ayrı* makineye atıp (`f(v)` ve `f(w)` çıktılarını) çıkan sonuçları makinenin *çıktı uzayında* toplamak aynı sonucu vermelidir.
	2. **Kural 2 (Ölçekleme/Homojenlik)**: $f(c*v) = c* f(v)$
		- Makinenin dışında bir vektörün boyunu 3 katına çıkarmak (`c*v` girdisini hazırlamak) ve sonucu makineye atmak ile o vektörü önce makineye atıp (`f(v)` çıktısını almak) çıkan sonucun boyunu 3 katına çıkarmak aynı sonucu vermelidir.
		- Yani ha girdiyi 3 ile çarpmışız ha çıktıyı 3 ile çarpmışız, fark etmemeli bu, onun da yapısı korunur.
- **Lineerlik** = yapının korunmasıdır bu bağlamda. Bir dönüşümün lineer olması, o dönüşümün, *vektör uzayının* iki temel kuralına (toplama ve ölçekleme) tâbi olması demektir.

### Eylemin Kaydı (Matris)
- Şimdi elimde böyle bir makine (dönüşüm) var ve bu 2 boyutlu bir vektörü (bir `[x, y]` noktasını) alıp başka bir 2 boyutlu vektöre dönüştürüyoruz. Ben bu makinenin *tamamını*, her olası `[x, y]` girdisi için ne yapacağını *sonsuz* tane örnek vermeden nasıl özetlerim? 
- Bir vektör uzayındaki *herhangi* bir vektör, o uzayın 'temel direkleri' olan *baz vektörlerin* (basis vectors) bir toplamı (lineer kombinasyonu) olarak yazılabilir.
- En basit 2 boyutlu uzayı (kartezyen düzlem) düşleyelim.  Bu uzayın standart baz vektörleri nelerdir? `i = [1, 0]` (x ekseni üzerindeki baz vektör), `j= [0, 1]` (y ekseni üzerindeki baz vektör) 
	- *Herhangi* bir vektör söyleyelim, diyelim ki,  `v= [3, -5]`. Ben bu `v` vektörünü o iki baz vektörü cinsinden yazabilir miyim? Yazarım: `v= [3, -5] = 3* [1, 0] + (-5) * [0, 1] = 3i - 5j`.
	- Şimdi, lineer makineye dönelim, dönüşümümüze `f` diyelim. Ben bu `v = [3, -5]` vektörünü makineye atarsam ne olur? `f(v) = f([3, -5]) = f(3i -5j)`
		- Makinemiz *lineer* olduğu için, o iki kuralı kullanabilirim:q
			1. **Toplamsallık kuralı** gereği `f(3i -5j) = f(3i) + f(-5j)`
			2. **Ölçekleme kuralı** gereği `f(3i) + f(-5j) = 3* f(i) + (-5) * f(j)`
		- Görüldüğü üzere, `f(v)`'nin ne olduğunu bulmak için, yani makinenin *herhangi* bir `v` vektörüne ne yaptığını bilmek için, benim *tek bilmem gereken şey*, makinenin o *baz vektörlerine* (`f(i)` ve `f(j)`) ne yaptığıdır.
		- Sonsuz tane girdiyi bilmeme gerek yok, sadece *iki şeyi* bilmem yeterli:
			1. Makine `i = [1, 0]` baz vektörünü neye dönüştürüyor?
			2. Makine `j = [0, 1]` baz vektörünü neye dönüştürüyor?

- İşte matris budur. Lineer bir dönüşümün baz vektörlerine ne yaptığının kaydıdır. O 'rahim' (matrix) odur, çünkü o baz vektörlerinin çıktılarından tüm dönüşümü 'doğurur'.


---

Yukarıdaki koşullar, vektör uzayının aksiyomlarıdır ve kısaca şunu güvence altına alır: Vektörler alışıldık cebirsel kurallara uygun şekilde toplanıp, sayılarla çarpılabilir ve tüm bu lineer (doğrusal) birleşimler yine vektör uzayının içinde kalır
en.wikipedia.org
en.wikipedia.org
. Bu soyut tanım ilk bakışta karmaşık görünse de, aslında günlük geometrik uzayı genelleştirir. Örneğin, klasik 2 boyutlu koordinat düzlemi $\mathbb{R}^2$ bir vektör uzayıdır; çünkü herhangi iki düzlem vektörü toplayınca yine düzlemde bir vektör elde ederiz, ya da bir düzlem vektörünü bir sayı ile ölçekleyince (uzatıp kısaltınca) yine düzlemde bir vektör elde ederiz. Benzer şekilde, 3 boyutlu uzay $\mathbb{R}^3$ de bir vektör uzayıdır. Hatta bunların ötesinde, matrisler, polinomlar veya fonksiyonlar gibi matematiksel nesnelerin oluşturduğu daha soyut vektör uzayları da vardır – yeter ki benzer toplama ve çarpma kurallarını karşılasınlar. Bu genellik sayesinde lineer cebir, sadece fiziksel uzaydaki oklarla sınırlı kalmaz; pek çok farklı matematiksel nesneye uygulanabilir.

Vektör uzayı kavramının tarihsel gelişimi, 19. yüzyılda gerçekleşmiştir. Hermann Grassmann, 1844 yılında yayımladığı Die Ausdehnungslehre (Türkçesi: "Yayılım Kuramı" veya "Genel Çizgisel Uzantılar Teorisi") adlı çalışmasında, bugünün lineer cebirinin temellerini oluşturan pek çok fikri ortaya attı
en.wikipedia.org
. Grassmann’ın çalışması oldukça soyut ve zamanının ilerisinde olduğundan başlangıçta pek ilgi görmemiş olsa da, içerdiği kavramlar daha sonra vektör uzayı ve lineer bağımlılık gibi temel tanımlara dönüştü. 19. yüzyılın sonuna gelindiğinde, İtalyan matematikçi Giuseppe Peano 1888 yılında modern anlamda vektör uzayı tanımını ilk kez açık ve eksiksiz şekilde yaptı
en.wikipedia.org
. Böylece, vektör kavramı fiziksel geometrik bağlamın ötesine geçip soyut bir cebirsel yapı haline geldi. "Vektör uzayı" teriminin kendisi, vektör (yönlü büyüklük) ve uzay (matematiksel anlamda küme/ortam) kelimelerinin birleşimidir. Vektör kelimesinin etimolojisini yukarıda ele aldık; uzay ise Türkçede mekan veya boşluk anlamlarında kullanılsa da matematiksel olarak bir nesneler kümesini ifade eder. Bu bağlamda vektör uzayı, "vektörlerin mekanı" demektir.
