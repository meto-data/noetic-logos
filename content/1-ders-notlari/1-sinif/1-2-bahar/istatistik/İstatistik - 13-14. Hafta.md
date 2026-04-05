

<h1><span>Binom Dağılımı</span> | <span>08.05.2025 - 15.05.2025</span></h1>

#### **Tanım:** Eğer bir sosyal olay aşağıdaki şartları sağlıyorsa, binom dağılımına uygundur:

#### 1- Denemeler özdeştir
#### 2- Her denemenin sadece 2 sonucu vardır ($\frac{\text{p: İstenen durum olasılığı}}{\text{q: İstenmeyen durum olasılığı}}$)
#### 3- $p+q = 1$
#### 4- Denemeler birbirinden bağımsızdır.

<br>


## $$\boxed{P(X) = \binom{n}{x}.p^x.q^{n-x}}$$

<br><br>


<h4><span>Soru 1</span> Bir madeni para 6 kez atıldığında;</h4>

`
##### *a)* İki kez tura gelme olasılığı
- $p= \frac{1}{2}, \space \space q=\frac{1}{2}$

##### $P(X=2) = \binom{6}{2}.(\frac{1}{2})^2.\frac{1}{2}^4$
##### $P(X=2) = 15.\frac{1}{4}.\frac{1}{16} = \boxed{\frac{15}{64}}$


##### *b)* En fazla 5 kez tura gelme olasılığı

##### $1 - [\binom{6}{6}.(\frac{1}{2})^6.(\frac{1}{2})^0]$
##### $1 - [1.\frac{1}{64}.1] = 1- \frac{1}{64} = \boxed{\frac{63}{64}}$


##### *c)* En az 5 kez tura gelme olasılığı 

$P(X=5) = \binom{6}{5}.(\frac{1}{2})^5.\frac{1}{2} = \frac{6}{64}$

$P(X=6) = \frac{1}{64}$ <br>
 $\boxed{\frac{7}{64}}$


<br>
<br>




<h4><span>Soru 2: </span>Bir zar 4 kez atıldığında;</h4>

<br>



##### *a)* İki kez üç gelme ihtimali
- $p= \frac{1}{6}, \space \space q= \frac{5}{6}$

$P(X=2) = \binom{4}{2}.(\frac{1}{6})^2 .(\frac{5}{6})^2$
$P(X=2) =  6.\frac{1}{36}.\frac{25}{36} = \boxed{\frac{25}{216}}$


##### *c)* En fazla bir kez üç gelme ihtimali

$P(X=0) = \binom{4}{0}.(\frac{1}{6})^0.(\frac{5}{6})^4 = \frac{625}{6^4}$
$P(X=1) = \binom{4}{1}.\frac{1}{6}.(\frac{5}{6})^3 = \frac{500}{6^4}$
$= \boxed{\frac{1125}{6^4}}$


##### *b)* En az üç kez 3 gelme ihtimali

$P(X=3) = \binom{4}{3}.(\frac{1}{6})^3.(\frac{5}{6}) = \frac{20}{6^4}$
$P(X=4) = \binom{4}{4}.(\frac{1}{6})^4.(\frac{5}{6})^0 = \frac{1}{6^4}$
$= \boxed{\frac{21}{6^4}}$





<br>
<br>



<h4><span>Soru 3: </span>Bir kargo şirketi teslim aldığı paketlerin %2'sini belirlenen sürede yerine <u>ulaştıramamaktadır</u>. Bir müşteri 10 paketini bu kargoya verdiğinde;</h4> 

<br>



##### *a)* İki tanesini zamanında ulaştıramama ihtimali nedir?
- $p= 0,02 \space \space q= 0,98 \space \space n=10$

##### $P(X=2) = \binom{10}{2}.(0,02)^2.(0,98)^8$
##### $P(X=2) = 45 \times 0,0004 \times 0,850$
##### $P(X=2) = \boxed{0,153}$


##### *b)* En fazla bir tanesini zamanında yerine ulaştıramama ihtimali nedir? Binom dağılımı kullanarak bulun.

##### $P(X=0) = \binom{10}{0}.(0,02)^0.(0,98)^{10}$
##### $P(X=0) =  1\times 1\times 0,817 = 0,817$
##### $P(X=1) = \binom{10}{1}.(0,02)^1.(0,98)^9$
##### $p(X=1) = 10 \times 0,02 \times 0,833 = 0,166$

### $\boxed{0,817 + 0,166 = 0,983}$




<br>

<br>
<br>
<br>
<br>
<br>






<h4><span>Soru 4: </span> Bir kargo şirketi teslim aldığı paketlerden yüzde üçünü belirlenen sürede yerine <u>ulaştıramamaktadır</u>. Bir müşteri 8 paketini kargo şirketine verdiğinde;</h4>

<br>


### *a)* 2 tanesinin zamanında yerine ulaşma ihtimali
- $p= 0,97 \space \space q=0,03 \space \space n=8$

#### $P(X=2) = \binom{8}{2} \times (0,97)^2 \times (0,03)^6 \space = \space 28 \times 0,940 \times 7,29\times10^{-10}$
##### $\space\space\space\space\space = 26,32 \times 7,29\times10^{-10} \space = \space P(X=2) = 191,872 \times 10^{-10}$
##### $\space\space\space\space\space\space\space\space\space\space\boxed{P(X=2) = 1,91 \times 10^{-8}}$

<br>



### *b)* En fazla 1 tanesinin zamanında yerine ulaşma ihtimalini binom dağılımıyla bulunuz.

#### $P(X=0,1)$
#### $P(X=0) = \binom{8}{0}\times (0,97)^0 \times (0,03)^8 \to \space  6,561\times10^{-13} = 0,0656 \times 10^{-11}$
#### $P(X=1) = \binom{8}{1} \times (0,97)^1 \times (0,03)^7 = \space  8 \times 0,97 \times 2,187 \times 10^{-11}$
##### $\space\space\space\space\space = 7,76 \times 2,187\times10^{-11} =16,971 \times 10^{-11}$

#### $(16,971 + 0,0656) \times 10^{-11} = \boxed{17,0366 \times 10^{-11}} \to \boxed{0,0000000001703}$


<br>
<br>

<br>

<h1><span>Poisson Dağılımı</span> | <span>08.05.2025 - 14.05.2025</span></h1>
##### **Tanım:** X kesikli rastgele değişken ve belirli bir aralıkta bir olayın kaç defa gerçekleştiği ($\lambda$) olmak üzere; 

##### $e=2,71$
### $$\text{X'in gerçekleşme ihtimali} = P(X) = \frac{e^{-\lambda}.\lambda^x}{x!}$$

<br>

<br>



<h4><span>Soru 1: </span> Bir araştırmaya göre belli bir yaş grubundaki tüketicilerin ayda ortalama 6,9 kez alışverişe çıktığı bilinmekte. Poisson dağılımına uyduğu düşünülen X rastgele değişkeni için bu yaş grubu aralığının;</h4>

##### *a)* Ayda tam 4 kez alışverişe çıkma ihtimalini bulun
- $\lambda = 6,9 \space \space \space x=4$
- $2,71^{-1} = 0,369$

#### $P(X=4) = \frac{0,369^{6,9} \times 6,9^4}{4.3.2.1}$
#### $\space \space\space \space \space \space = \frac{1,029\times 10^{-3} \times 2266,712}{24}$
#### $\space\space \space\space \space \space \space \space \space \space = \frac{2,332}{24} = 0,097$


##### *b)* Ayda en çok 1 kez alışverişe çıkma ihtimalini bulun.

#### P(X=0,1)
#### $\space\space\space\space\space\space P(X=0) = \frac{0,369^{6,9} \times 6,9^0}{0!} = 1,029\times10^{-3}$
#### $\space\space\space\space\space\space P(X=1) = \frac{1,029 \times 10^{-3} \times 6,9}{1!}$
#### $\space \space\space\space\space\space\space\space\space\space = 1,029\times10^{-3} + 1,029\times 10^{-3}\times 6,9$
#### $= 0,001029 + 0,001029\times6,9$
#### $\space\space\space \boxed{8,129 \times 10^{-3}} = \boxed{0,0081}$




### Eğer poisson dağılımı içeren bir soruda lambda ($\lambda$) değeri (yani ortalama) verilmediyse şu formül ile bulunur:

## $$\boxed{\lambda = n.p}$$


<h4><span>Soru 2: </span> Bir fabrikada üretilen cihazların %5'i kusurludur. Buna göre rastgele seçilen 8 cihazdan tam 2 tanesinin kusurlu olma ihtimalini binom dağılımı ve poisson dağılımı ile bulunuz.</h4>

#### Binom Dağılımına Göre

- $n=8, \space \space \space p=0,05 \space \space \space q=0,95$

#### $P(X=2) = \binom{8}{2}.(0,05)^2.(0,95)^6$
#### $\space \space \space = 28 \times (0,0025) \times 0,735$
#### $\space \space \space \space \space = \boxed{0,0514}$


#### Poisson Dağılımına Göre

- $\lambda = 8 \times 0,05 = 0,4$

#### $P(X=2) = \frac{(0,369)^{0,4} \times (0,4)^2}{2!} = \frac{0,1073}{2}$ 
#### $\boxed{0,0536}$ 



<br>

<br><br>



<h5><span>Soru 3 (<span>Sınavda benzeri kesinlikle çıkacak</span>): </span> Bir atölyede üretilen cihazların %6'sı hatalı üretilmektedir. Rastgele seçilen 10 cihazdan 3'ünün kusurlu olma ihtimalini binom dağılımı ve poisson dağılımına göre bulunuz.</h4>


#### Binom Dağılımına Göre

- $n=10, \space \space \space p=0,06 \space \space \space q = 0,94$

###### $P(X=3) = \binom{10}{3}\times(0,06)^3 \times (0,94)^7$
###### $\space \space \space \to 120 \times (0,000216) \times (0,648)$
###### $\space \space \space \space \space = \boxed{0,0167}$


#### Poisson Dağılımına Göre

- $\lambda = 10 \times 0,06 = 0,6$

###### $P(X=3) = \frac{(0,369)^{0,6} \times (0,6)^3}{3!}$
###### $\space \space \space = \boxed{0,0197}$


---



###  **12. Hafta - Soru 2 (<span>Sınavda benzeri çıkacağı için tekrar işlendi</span>)**: X, 3 çocuklu bir ailedeki erkek çocuk sayısıdır. Buna göre;

##### *a)* Olasılık değerleri tablosu oluşturun.


$2^3 = 8$ ihtimal.   

**1.** EEE $\to$ 3E, 0K  $\space \space$||$\space \space$  **2.** EEK $\to$ 2E, 1K  <br>
**3.** EKE $\to$ 2E, 1K  $\space \space$||$\space \space$  **4.** EKK $\to$ 1E, 2K   <br>

**5.** KKK $\to$ 0E, 3K  $\space \space$||$\space \space$  **6.** KKE $\to$ 1E, 2K  <br>
**7.** KEK $\to$ 1E, 2K  $\space \space$||$\space \space$  **8.** KEE $\to$ 2E, 1K   


![[erkekkadin.svg]]



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


