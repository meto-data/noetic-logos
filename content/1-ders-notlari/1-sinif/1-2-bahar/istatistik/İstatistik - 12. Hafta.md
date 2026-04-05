---
draft: true
---

<br>

<h1><span>Ünite 7: Dağılımlar</span> | <span>03.05.2025 (Telafi)</span></h1>
<h6><span>Konu Başlıkları</span> <br> <span>7.1- Olasılık Dağılımı <br> 7.2- Binom Dağılımı <br> 7.3- Poisson Dağılımı <br> 7.4- Normal Dağılım</span></h1> <br>

## 7.1- Olasılık Dağılımı
- **Dağılım**: Bir sosyal bilimler deneyinde elde edilen <u>sıralı verilerin tümüne</u> "**dağılım**" denir.
- **Olasılık Dağılımı**: *$X$*  kesikli rastgele değişkenin aldığı değerler ile onlara karşılık gelen *$P(X)$*  değerlerinin birlikte ifade edilmesine ***olasılık dağılımı***  denir ve aşağıdaki şartları sağlaması gerekir;
##### **1-**  $0\leq P(X) \leq {1}$
##### **2-** $\sum{} P(X) = 1$

<h4>Matematiksel Beklenti</h3>


#### $$E(X) = \mu = X_{1} .P_{1} + X_{2} . P_{2} + \dots + X_{n} . P_{n}$$
<br>



<h3> X Rastgele Kesikli Değişkenin Standart Sapması</h3>

![[rastgelekesikli.svg#center|500]]
<br>


###  **Soru 1**:  Bir çift zar atıldığında üst yüzeye gelen sayıların toplamı X olsun. Buna göre; 

##### *a)* Olasılık değeri tablosunu oluşturun.
- $6^2 = 36$ olduğundan, <span>36</span> olasılık vardır. 
- Zarların toplamı en az **2**, en çok **12** olduğundan, **11** farklı sayı gelme ihtimali vardır.   


![[olasılıkdeğeritablosu.svg#center|600]]


##### *b)*  Grafiği çizin.
![[deneme.svg#center |450]]

<br>


##### *c)* Matematiksel beklentiyi hesaplayın.
##### $\frac{2}{36}+\frac{6}{36}+\frac{12}{36}+\frac{20}{36}+\frac{30}{36}+\frac{42}{36}+\frac{40}{36}+\frac{36}{36}+\frac{30}{36}+\frac{22}{36}+\frac{12}{36} =\frac{262}{36} =$ 7

##### *d)* Standart sapmayı bulun.

##### $\text{K} = \frac{4}{36}+\frac{18}{36}+\frac{48}{36}+\frac{100}{36}+\frac{180}{36}+\frac{294}{36}+\frac{320}{36}+\frac{324}{36}+\frac{300}{36}+\frac{242}{36}+\frac{144}{36}$
#### $\text{K} = \frac{1974}{36} = 54,833$
#### $\sigma = \sqrt{ 54,833 - 7^2 } =  \sqrt{ 5,833} =2,415$

---


###  **Soru 2**: "X", üç çocuklu bir ailedeki erkek çocuk sayısıdır. Buna göre;

##### *a)* Olasılık değerleri tablosu oluşturun.

````col
```col-md
flexGrow=1
===
$2^3 = 8$ ihtimal.   

**1.** EEE $\to$ 3E, 0K  $\space \space$||$\space \space$  **2.** EEK $\to$ 2E, 1K  <br>
**3.** EKE $\to$ 2E, 1K  $\space \space$||$\space \space$  **4.** EKK $\to$ 1E, 2K   <br>

**5.** KKK $\to$ 0E, 3K  $\space \space$||$\space \space$  **6.** KKE $\to$ 1E, 2K  <br>
**7.** KEK $\to$ 1E, 2K  $\space \space$||$\space \space$  **8.** KEE $\to$ 2E, 1K   

```
```col-md
flexGrow=1
===

![[erkekkadin.svg]]

```
````

<br>

````col
```col-md
flexGrow=1
===

##### *b)* Olasılık değerlerine ait grafiği çizin.

![[sonfinal.svg|250]]

```
```col-md
flexGrow=1
===
##### *c)* Matematiksel beklentiyi hesaplayın.

#### $0+ \frac{3}{8}+ \frac{6}{8} + \frac{3}{8} = \frac{12}{8} = 1,5$

##### *d)* Standart sapmayı hesaplayın.

#### $\text{K} = 0+ \frac{3}{8}+ \frac{12}{8} + \frac{9}{8} = \frac{24}{8} = 3$
#### $\sigma = \sqrt{3 - (1,5)^2} = \sqrt{0,75} = 0,866$

```
````



<br>

### **Soru 3**:  "X", bir zar atıldığında üst yüze gelen sayıdır. Buna göre;


##### *a)* Olasılık değerleri tablosu oluşturun.

````col
```col-md
flexGrow=1
===

<br>



$6^1 = 6$ olasılık.

```
```col-md
flexGrow=2
===

![[sonundasonsoru.svg]]

```
````
##### *b)* Grafiği çiziniz.

![[songrafik.svg#center]]

````col
```col-md
flexGrow=1
===
##### *c)* Matematiksel beklentiyi hesaplayınız.

$\frac{1}{6} + \frac{2}{6} + \frac{3}{6} + \frac{4}{6} + \frac{5}{6} + \frac{6}{6} = \frac{21}{6} = 3,5$


```
```col-md
flexGrow=1
===
##### *d)* Standart sapmayı bulunuz.


$\text{K} = \frac{1}{6}+\frac{4}{6}+\frac{9}{6}+\frac{16}{6}+\frac{25}{6}+\frac{36}{6}$
$\text{K} = \frac{91}{6} = 15,166$
#### $\sigma = \sqrt{ 15,166 - 12,25 } = \sqrt{ 2,916 }= 1,707$

```
````



