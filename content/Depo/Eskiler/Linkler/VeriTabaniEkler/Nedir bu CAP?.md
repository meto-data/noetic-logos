---
tags:
  - bilgi/bilisim
---
- Captain America'dan söz etmiyoruz tabii, bahsettiğimiz CAP Teoremi ve bu teorem diyor ki, "[[Consistency]] (Tutarlılık), **[[availability|Availability]]** (Erişilebilirlik) ve [[Partition Tolerance]] (Bölünme Toleransı) aynı anda sağlanamaz, bunlardan **yalnızca ikisi** aynı anda garanti edilebilir."


#### **Ön Bilgiler** 
#### Nedir bu Dağıtık Sistem?
- Birden fazla düğümün (node) bir ağ üzerinden birbirleriyle haberleşerek ortak bir görevi yerine getirdiği sistemlerdir. 
- Mesela Instagram'daki milyarlarca kullanıcının verilerini tek bir bilgisayarda saklayamazsınız. Bunun yerine dünya çapında yüzlerce veri merkezinde binlerce sunucu (node) kullanılır. 
- Yine WhatsApp için mesajların bir kopyası farklı sunuculurda tutulmalı ki bir sunucu çökse bile mesajlar kaybolmasın.

##### Nedir bu Düğüm (Node)?
- Dağıtık sistemdeki her bir bağımsız bilgisayar, sunucu yahut cihaza verilen addır. Her düğüm için şu özellikler sayılabilir:
	- Kendi hafızası ve işlemcisi vardır.
	- Veri saklayabilir.
	- Diğer düğümlerle ağ üzerinden mesajlaşır.
	- Bağımsız olarak kararlar alabilir.
- Mesela Netflix'in veri merkezinde 100 sunucu varsa bu 100 düğümdür. Her biri filmlerin bir kısmını saklar vesaire.

##### Nedir bu Replikasyon (Kopyalama)?
- Dağıtık sistemlerde aynı verinin birden fazla düğümde kopyası tutulmasına **replikasyon** denir.
- Mesela diyelim ki `Kullanıcı1`'in bakiyesi 1000₺ bilgisini saklayacağız. Bu veriyi **yalnızca bir sunucuda** saklarsak, o sunucu çöktüğü gibi veri de kaybolur. O yüzden aynı veriyi birkaç sunucuda saklarız;
	- **Düğüm A ($n_A$)**: Bakiye 1000₺
	- **Düğüm B ($n_B$)**: Bakiye 1000₺
	- **Düğüm C ($n_C$)**: Bakiye 1000₺ 
- Her düğüm farklı ildeymiş gibi düşünelim.

##### Nedir bu Notasyon?
- $n_A$, $n_B$: Matematik/bilgisayar biliminde düğümleri isimlendirme yöntemidir bu notasyon. $n$ harfi 'düğüm''den (node) gelir. Alt indisler (A, B, C) ise hangi düğüm olduğunu gösterir. İstersek $n_1, \space n_2$ falan da yazabiliriz, aynı anlama gelir zaten.

##

- Ön tanımlar bittiğine göre kaldığımız yerden devam edebiliriz. dağıtık sistemlerin doğasında var olan **ontolojik bir kısıt** vardır. Sistemler, fiziksel ağ bölünmeleri karşısında ya verilerinin tutarlılığından ya da erişilebilirliğinden vazgeçmek zorundadır. İkisini birden korumaları mümkün değildir. Detaylı olarak açacağım buraya az sonra. İlkin kavramlara değinelim.





### [[Tutarlılık]] (Consistency - C)
- **Atomik tutarlılık** ya da **doğrusallaştırılabilirlik** (linearizability) mânâsına gelir. En güçlü tutarlılık modelidir, garanti ettiği ise tam olarak şudur: 
	1. Tüm işlemler tek bir kopya üzerinde **[[Atomicity|atomik]]** olarak gerçekleşiyormuş gibi davranır.
	2. Bir girdi/yazma işlemi tamamlandıktan sonra, bunu takip eden bütün okuma işlemleri **yeni değeri <u>döndürmelidir</u>**.
	3. İşlemler arasında **kesin ve toplam** bir sıralama vardır (Yani hangi işlemin önce, hangisinin sonra olduğu kesindir, belirsizlik yoktur).
	4. Sonuçlar **tüm süreçlere <u>anında</u> yayılır**. Başka bir ifadeyle, 2. ve 3. maddedeki kurallar, **işlemlerin (okuma/yazma) gerçek zaman sırasına göre uygulanmasını garanti eder.**
- Formel olarak şöyle yorumlayabiliriz: Bir okuma işlemi `read()` (yani "oku" komutu), en son tamamlanmış `write(p,v)` (yani "git şu v değerini yaz" komutu) işleminin değerini `v`'ye döndürmelidir. Eğer bir yazma işlemi gerçek zaman sırasında bir okuma işleminden önce tamamlanmışsa, okuma işlemi bu yazmanın sonucunu yansıtmalıdır.

### [[Erişilebilirlik]] (Availability - A)
- **Eğer** başarısız olmayan her **[[düğüm]]**, aldığı her isteğe sonunda (sınırlı ama sonlu bir sürede) yanıt veriyorsa, **bir sistem <u>erişilebilirdir</u>**.
	- Kritik nokta şudur ki, bu tanımda **maksimum gecikme sınırı <u>yoktur</u>**. İstek bir hafta sonra bile yanıtlansa, sistem hâlâ *erişilebilir* sayılır. 
	- Gilbert ve Lynch'in formel tanımıdır bu tanım.
- Pratikte erişilebilirlik bir servisin başarılı yanıt verme oranıdır (%99.9 uptime gibi). Ancak CAP'in formel ifadesinde *erişilebilirlik* bir **canlılık özelliğidir ([[liveness property]])**: Sistem belirli bir süre yanıt vermese bile, gelecekte yanıt verme umudu vardır. Bu tanımın uygulayıcıların sezgileriyle uyuşmadığı da aşikârdır pekâlâ.
	- Sistem şu an yanıt vermiyorsa "erişilemez" diyemeyiz, bu yüzden sezgilerimizle uyuşmaz. Ancak pratikte kullanışsızdır, çünkü 1 dakika bekleyen kullanıcı zaten gider.


> [!info] **Düğüm (Node)**
> Ağa bağlı tek bir sunucu/bilgisayar demektir. İspattaki $n_A$ ve $n_B$ birer düğümdür. "A Sunucusu" ve "B Sunucusu" gibi.


> [!info] Liveness Property (Canlılık Özelliği) ve Safety Property (Güvenlik Özelliği)
> "Önünde sonunda iyi bir şey olacak" diyebilmenin garantisidir. "Sistem şu an cevap vermese bile, sonsuza kadar donup kalmayacak, bir noktada mutlaka cevap verecek" diyebilmektir.  <br>
> Zıttı Safety Property'dir (Güvenlik Özelliği), o da "asla kötü bir şey olmayacak" (örn: "sistem asla eski veriyi döndürmeyecek, veri asla kaybolmaz, sistem asla çökmez") garantisidir.  <br>
> Tutarlılık (**C**) bir *safety* özelliğidir, Erişilebilirlik (**A**) ise *liveness* özelliğidir.

### [[Bölünme Toleransı ]] ([[Partition Tolerance]] - P)
- Dağıtık bir sistemdeki düğümler arasındaki iletişimin kesilmesi durumuna **[[ağ bölünmesi]]** denir. Birbirleriyle iletişim kuramayan alt kümelere ayrılır ağ; bölünme toleransı da **sistemin bu tür arızalar karşısında çalışmaya devam edebilme yetisidir**.
-  $P(t, n_A, n_B)$ fonksiyonunu düşleyelim (*Buradaki $n_A$ (Node A) ve $n_B$ (Node B) ispatta kullanacağımız iki düğümün sembolik adlarıdır.)*. Eğer `t` zamanında düğüm $n_A$, düğüm $n_B$ ile iletişim kurabiliyorsa, $P(t, n_A, n_B) = 1$, aksi hâlde $0$'dır. **Herhangi bir düğümün başka bir düğümle iletişim <u>kuramadığı</u> maksimum süreye** `TP (Partition Time)` denir.
	- TP, "Ağ kesintisi ne kadar sürdü?" sorusunun cevabıdır. TP = 30 saniye veya TP = 2 saat gibi.
- Kritik nokta şudur ki, **bölünme toleransı**, <u>tutarlılık</u> ve <u>erişilebilirlik</u> gibi bir *algoritma özelliği* değil, **sistem modelinin bir varsayımıdır.**
	- "Bir algoritma bölünme toleransı sağlar" demek yanıltıcıdır; doğrusu "algoritma, bölünmelerin olabileceğini varsayar" olmalıdır.
	- **Algoritma Özelliği**: Yazılan kodun (algoritmanın) ne yaptığıdır. "Benim algoritmam veriyi tutarlı kılar (**C**)" veya "Benim algoritmam hep cevap verir (**A**)" diyebiiriz. Bunlar kodumuzun kontrolündedir.
	- **Sistem Modeli Varsayımı**: Kodun dışında kalan, ağın nasıl çalıştığıyla ilgili kuraldır. "Ağlar bazen kesilir (**P**)" demek bizim kontrolümüzde olmayan *fiziksel bir gerçektir*.  Bu yüzden "Bir algoritma bölünme toleransı sağlar" demek yanıltıcıdır, *benim algoritmam yer çekimini sağlar* demek ile aynı saçmalıktır bu :D 
		- Yer çekimini (P) sağlayamayız, yer çekimine rağmen ayakta duran bir bina tasarlarız. Bu yüzden böyle bir ek bilgi verelim dedik.

> [!info] Ağ Bölünmesi (Partition)
>  İspatta $\text{veri v1 } \not \leftrightarrow \text{ veri v1}$ dediğim şeyin teknik adı. İki düğüm (sunucu) arasındaki internet kablosunun çekilmesi veya router'ın bozulması, fiber optik kablonun kesilmesi gibi bir ağ arızası. Sunucular 'ayaktadır' ama birbirleriyle konuşamazlar.

## Teoremin İspatı
- Hatırlarsak, teoremde üç kural vardı:
	1. **C** (Tutarlılık): Herkes *en son* yazılan veriyi okur.
	2. **A** (Erişilebilirlik): Sistem *her zaman* cevap verir. "Meşgulüm" demez.
	3. **P** (Bölünme Toleransı): İki sunucunun ($n_A$, $n_B$) bağlantısı kopabilir.
- Şimdi, üçünün de aynı anda çalıştığını varsayalım. *Çelişki yöntemi (Reductio ad Absurdum)* ile ispat yapacağımız için bu varsayımı yapmamız gerekli:
	1. **Bölünme olur (P)**: Bağlantı kopar, $n_A$ ve $n_B$ birbirini görmez. $[n_A: \text{ veri v1}] \not \leftrightarrow [n_B: \text{ veri v1}]$
		- Anlamı: A sunucusu ve B sunucusu arasındaki iletişim $(\leftrightarrow)$ kesilmiştir ($\not \leftrightarrow$).
	2. **Yazma İşlemi**: `Müşteri 1` $n_A$'ya "Veriyi `v2` yap" der.
	3. $n_A$ Karar Verir:
		- $n_A$, $n_B$'ye haber veremez, çünkü **P** ($\not \leftrightarrow$) var.
		- `Müşteri 1`'e "Bekle" veya "Hata" diyemez (çünkü **A - Erişilebirlik**) var.
		- **Mecburen** veriyi `v2` yapar ve "Tamamdır" der.
		- **Durum**: $[n_A: \text{ veri v2}] \not \leftrightarrow [n_B: \text{ veri v1}]$
	4. **Okuma İşlemi**: `Müşteri 2`, $n_B$'ye "Veri ne?" diye sorar.
	5. **Çelişki**: $n_B$'nin vermesi gereken cevap nedir burada?
		- **A** kuralı der ki, "*Mutlaka cevap ver.*" $n_A$'ya ulaşamıyor (**P** var). Elindeki tek şey `v1`, e dolayısıyla cevap da `v1` olmalı.
		- **C** kuralı der ki, "*En son yazılanı (`v2`) söyle."* Cevap `v2` olmalı.
	-  $n_B$ aynı anda hem `v1` hem de `v2` diyemez; sonuç olarak **P (Bölünme Toleransı)** olduğu anda, sistem ya **A**'dan (cevap vermekten -erişilebilirlik-) ya da **C**'den (doğruyu söylemekten -tutarlılık-) birini seçmek yahut birinden feragat etmek **zorundadır**. Üçü aynı anda <u>olamaz</u>.
	- Bir diğer ifadeyle, $n_B$​ düğümü, aynı anda hem `v1` (A'yı sağlamak için) hem de `v2` (C'yi sağlamak için) diyemez. $C \land A \land P$ varsayımımızın mantıksal bir çelişkiye ($\perp$) yol açtığı anlamına gelir bu.


## CAP Teoreminin Gerçek Dünyadaki Karşılığı
- Sistem tasarımcıları üç seçenekten birini yaparlar:
### 1- [[CP Sistemleri]] (Consistency + Partition Tolerance)
- Bölünme olursa, **erişilebilirlikten vazgeçer, tutarlılığı korur**.
- Bölünme sırasında azı düğümler "Hata, şu an yanıt veremiyorum." der yani.
- **HBase, Paxos/Raft, MongoDB (Bazı ayarlarda)**.
- <u>Banka sistemleri ve finansal işlemlerde kullanılır</u>.

### 2- [[AP Sistemleri]] (Availability + Partition Tolerance)
- Bölünme olursa **tutarlılıktan vazgeçer, erişilebilirliği korur**.
- Her düğüm kendi bildiği veriyi döndürür (eski olabilir).
- **Nihai tutarlılık** (eventual consistency) sağlar, bölünme düzelince veriler senkronize edilir.
- **Örnekler**:  Cassandra, DynamoDB, CouchDB
- <u>Sosyal medya, e-ticaret ürün kataloğu</u>
	- Instagram Cassandra kullanır mesela. 

### 3- [[CA Sistemleri]] (Consistency + Availability)
- Bölünmelerin **olmadığını varsayar**.
- Modern internet ağlarında **pratikte gerçekçi değildir.**
- **Örnekler**: Tek sunuculu veri tabanları, yerel ağlardaki küçük sistemler.


---


- Yani özetle şunu söylemek gerekiyor: Mükemmel çözüm diye bir şey söz konusu değil dağıtık sistemlerde. Fiziksel gerçeklik üç özelliği de aynı anda garanti etmeyi imkânsız kılmakta. 
- Bu nedense ola ki para transferi gibi bir durum varsa **[[CP Sistemleri]]** seçilir zira *tutarlılık* kritiktir; Instagram gibi bir sosyal medyada ise **[[AP Sistemleri]]** seçilir zira *erişilebilirlik* kritiktir. Küçük şirket içi sistemde ise belki **[[CA Sistemleri]]** yeterlidir ola ki ağ bölünmesi nadir yahut hiç yoksa. 
- İyi belirlemek gerekir, zira sistemin temel mimarisini bu tercih belirleyecektir. İnşa edilen binanın temelini değiştirmenin zor olacağı bellidir herhâlde?