2## Mantık ve Matematiksel İspat

### Temel Kavramlar ve Önemi

- Bir matematiksel ifadenin doğruluğunu ispatladığımız anda buna **teorem** deriz.
- Mantık kuralları, matematiksel ifadelere kesin bir anlam verir. Bu kurallar, *geçerli* ve *geçersiz* matematiksel önermeleri ayırt edebilmek için kullanılır.
- Herhangi bir konu hakkında oluşturulan teoremler, o konu hakkında bildiklerimizi belirler.
- Mantık, matematiksel muhakemenin yapılması ve bilgisayarın muhakeme yapabilmesinin temelidir. Birçok alanda kullanılmaktadır (bilgisayarların tasarımı, yapay zekâ, sistem tanımlanması, bilgisayar programlama, programlama dilleri).
- Bir **önermenin** matematiksel ispatı, bir **aksiyomlar** kümesinden önermeye ulaşılan bir **mantıksal çıkarımlar** zinciridir.
- **[[Algoritma]]**: Bir problemi çözmek için sonlu sayıda, birbirini tekrar eden, iyi tanımlı adımlar kümesidir.

### [[Önerme|Önermeler]]

**Önerme**, doğru ya da yanlış olarak nitelendirilebilen bir ifade/yargıdır. Önermenin doğru ya da yanlış olmasına ilişkin bir sınırlama yoktur. Yargı belirtmeyen veya sonucu zamanla değişen ifadeler önerme değildir.

> - Türkiye'nin başkenti İstanbul'dur. $\to$ Önerme (Yanlış önerme)
> - İstanbul, Türkiye'nin bir parçasıdır. $\to$ Önerme (Doğru önerme)
> - Yaşın kaç la? $\to$ Önerme değil.

- Önermeler $p, q, r, s, \dots$ gibi küçük harflerle gösterilir.
- Bir önermenin olumsuzu (değili) $\neg p, \overline p, p', ~p$ gibi sembollerle gösterilir.

#### Önermelerin Denkliği

- **[[Totoloji]] (Tautology)**: Daima doğru olan bileşik önermelerdir.
- **[[Çelişki]] (Contradiction)**: Daima yanlış olan bileşik önermelerdir.

> Totoloji ve çelişki ifadelerine hâkim olmak, bilgisayar kodlarındaki mantıksal zayıflıkları engellemektedir.

### Mantıksal Denklik Yasaları

#### De Morgan Yasaları
$\neg (p \land q) \equiv \neg p \lor \neg q \space\space\ \space \space\space\space\space | \space\space\space\space\space\space \neg (p \lor q) \equiv \neg p \land \neg q$

| $p$ | $q$ | $p \lor q$ | $\neg (p \lor q)$ | $\neg p$ | $\neg q$ | $\neg p \land \neg q$ |
| :-: | :-: | :--------: | :---------------: | :------: | :------: | :-------------------: |
|  T  |  T  |     T      |         F         |    F     |    F     |           F           |
|  T  |  F  |     T      |         F         |    F     |    T     |           F           |
|  F  |  T  |     T      |         F         |    T     |    F     |           F           |
|  F  |  F  |     F      |         T         |    T     |    T     |           T           |


#### Temel Özdeşlikler

> **Identity Laws (Etkisiz Eleman / Özdeşlik Kuralları)**
> Bir ifadenin yanına eklenince sonucu değiştirmeyen elemanlardır. Toplamadaki '0', çarpmadaki '1' gibidir.
- $p \lor F \equiv p$  (Yanlış ile VEYA'lamak sonucu değiştirmez)
- $p \land T \equiv p$  (Doğru ile VE'lemek sonucu değiştirmez)

> **Domination Laws (Baskınlık / Yutan Eleman Kuralları)**
> Sonucu ne olursa olsun tek başına belirleyen elemanlardır. Çarpmadaki '0' gibi.
- $p \lor T \equiv T$  (Bir ifadenin içinde DOĞRU varsa, VEYA işlemi her zaman DOĞRU'dur)
- $p \land F \equiv F$ (Bir ifadenin içinde YANLIŞ varsa, VE işlemi her zaman YANLIŞ'tır)

> **Idempotent Laws (Tek Kuvvet Kuralları)**
> Bir şeyi kendisiyle tekrarlamanın anlamsızlığını ifade eder.
- $p \lor p \equiv p$             
- $p \land p \equiv p$

> **Negation Laws (Değilleme / Tamamlama Kuralları)**
> Bir önerme ile değilinin ilişkisini tanımlar. Biri ne ise, diğeri onun tam zıttıdır.
- $p \lor \neg p \equiv T$ (Bir şey ya doğrudur ya da yanlıştır. İkisinden biri olmak zorundadır.)
- $p \land \neg p \equiv F$ (Bir şey aynı anda hem doğru hem de yanlış olamaz.)

> **Double Negation Law (Çift Değilleme Kuralı)**
> Yanlışın yanlışı doğrudur.
- $\neg (\neg p) \equiv p$

> **Commutative Laws (Değişme Kuralları)**
> Sıranın önemi yoktur.
- $p \lor q \equiv q \lor p$      
- $p \land q \equiv q \land p$

> **Associative Laws (Birleşme Kuralları)**
> Aynı operatörler arasında gruplamanın önemi yoktur.
- $(p \lor q) \lor r \equiv p \lor (q \lor r)$  
- $(p \land q) \land r \equiv p \land (q \land r)$

> **Distributive Laws (Dağılma Kuralları)**
> Farklı operatörler arasında parantez açma/kapama kuralıdır.
- $p \lor (q \land r) \equiv (p \lor q)\land(p \lor r)$  
- $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$

> **Absorption Laws (Yutma Kuralları)**
> Daha basit bir ifadenin, kendisini içeren daha karmaşık bir ifadeyi yutmasıdır.
- $p \lor (p \land q) \equiv p$
- $p \land (p \lor q) \equiv p$

### Koşullu İfadeler ($\rightarrow$)

> **Implication Definition (İSE Tanımı)**
> Bir vaadi temsil eder. $p$ olursa $q$ olur vaadi, "ya $p$ hiç olmaz ya da $q$ olur" ile aynı mânâya gelir.
$$p \rightarrow q \equiv \neg p \lor q$$
> **Contrapositive Law (Kontrapozitif Kuralı)**
> Bir İSE'nin yönünü ve değerini değiştirerek aynı anlamı korumaktır. "*Yağmur yağarsa yerler ıslanır*" demek, "*Yerler ıslak değilse yağmur yağmamıştır*" demekle aynıdır.
 $$\boxed{p \rightarrow q \equiv \neg q \rightarrow \neg p}$$
> **Negation of a Conditional (Koşulun Değili - Anlaşmanın İhlali)**
> Bir vaadin nasıl bozulacağını tanımlar. Vaat, sadece koşul $(p)$ gerçekleştiğinde sonucun $(\neg q)$ gerçekleşmemesiyle bozulur.
$$\boxed{\neg (p \rightarrow q) \equiv p \land \neg q}$$
#### Diğer Koşul Denklikleri
- $(p \rightarrow q) \land (p \rightarrow r) \equiv p \rightarrow (q \land r)$
- $(p \rightarrow q) \lor (p \rightarrow r) \equiv p \rightarrow (q \lor r)$
- $(p \rightarrow r) \land (q \rightarrow r) \equiv (p \lor q ) \rightarrow r$
- $(p \rightarrow r) \lor (q \rightarrow r) \equiv (p \land q) \rightarrow r$

### Çift Yönlü Koşullu İfadeler ($\leftrightarrow$)
- $\boxed{p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p)}$
- $\boxed{p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q)}$
- $\boxed{p \leftrightarrow q \equiv \neg p \leftrightarrow \neg q}$
- $\boxed{\neg (p \leftrightarrow q) \equiv p \leftrightarrow \neg q}$

### Yüklemler ve Yüklem Mantığı

**Yüklem**: Bir önermenin doğru veya yanlışlığını, önerme içerisindeki bir veya daha fazla değişkenin değerine bağımlı olarak belirleyen ifadelerdir.

>$P(n):$ "n bir tam karedir", *ifadesi bir yüklemdir ve tek başına doğru veya yanlış değildir.*
>- *Ancak n değişkeninin aldığı değere göre ifadenin doğru veya yanlışlığından söz edilebilir. n=4 için ifade doğru iken n=5 için ifade yanlış olacaktır.*

- Fonksiyon benzeri bir gösterime sahip olan yüklemler, özel bir değişken değeri ile ifade edilmektedir. Yüklemler için bu notasyon, sıradan fonksiyonları göstermek için kullanılan notasyon ile karıştırılmamalıdır.
- **Tek Öğeli Yüklem:** $P(X): x>3$
- **2 Öğeli Yüklem:** $Q(x,y): x= y+3$
- **3 Öğeli Yüklem:** $R(x,y,z): x+y=z$
- **N Öğeli Yüklem:** $P(x_1, x_2, \dots , x_n)$