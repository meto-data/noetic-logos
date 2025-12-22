<h1 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 6: Temel Olasılık Teorisi</span> | <span style="color:#bf3f36">24.04.2025</span></h1>

<h2 style="text-align:center"><span style="color:2a475e; text-align:center">Kombinasyon (Gruplama)</span></h1>

**Tanım**: "n" elemanlı bir kümenin içinden "r" elemanlı alt kümelerin seçilip gruplanmasına <span style="color:2a475e; font-weight:bolder">kombinasyon (gruplama)</span> denir.

## $$\text{C(n,r)} =\binom{n}{r} = \frac{n!}{(n-r).r!}$$ 
### Kombinasyonun Özellikleri 
#### $\binom{5}{3} = \binom{5}{2} \space \space \space \space | \space \space \space \space\binom{5}{0} = \binom{5}{5} = 1 \space \space \space \space |\space \space \space \space \binom{5}{1} = 5$

<h3 style="text-align:left"><span style="color:2a475e; text-align:center">a) Genel Kombinasyon</span></h3>

<h4 style="text-align:center"><span style="color:darkred">Örnek 1</span>: 10 cisim arasından;</h4>

````col
```col-md
flexGrow=2
===
##### **a)** 4 tanesi kaç farklı şekilde seçilebilir?

#### $\binom{10}{4} = \frac{10.9.8.7}{4!} = \frac{10.9.8.7}{4.3.2.1}$ 
#### $\frac{10. \cancel{9}^3 .\cancel{8}^1 .7}{\cancel{4}.\cancel{3}.\cancel{2}.1} = 210$

##### **c)** Seçilecek cisimlerden **biri** belliyken, 4 cisim kaç farklı şekilde seçilebilir?
- Seçilecek cisimlerden birisi belliyse, 10 cisimden bir tane çıkartmalıyız mantıken. O yüzden "9" tanesi içerisinden seçeriz.
- Birisi hâlihazırda seçildiği için, 4 cisimden biri seçilmiş oluyor, o yüzden 3 tane seçmemiz gerekir.
#### $\binom{9}{3} = \frac{9.8.7}{3.2.1} = 3.4.7 = 84$


```
```col-md
flexGrow=1
===
##### **b)** Önce 4, sonra kalanlar arasından 3 cisim kaç farklı şekilde seçilebilir?

#### $\binom{10}{4} . \binom{6}{3} = 210 . \frac{6.5.4}{3.2.1} =$ <br><br> $210.20 = 4200$
```
````


<br>


<h4 style="text-align:center"><span style="color:darkred">Örnek 2</span>: 8 kişi arasından;</h4>

````col
```col-md
flexGrow=1
===
##### **a)** 5 kişilik kaç farklı ekip seçilebilir?

###### $\binom{8}{5} = \binom{8}{3}$ 
###### $\binom{8}{3} = \frac{8.7.6}{3.2.1} = 56$


```
```col-md
flexGrow=1
===
##### **b)** Önce 3, sonra kalanlar arasından 2 kişilik kaç farklı ekip seçilebilir?

###### $\binom{8}{3}.\binom{5}{2} = 56.10 = 560$


##### **c)** Seçilecek iki kişi belli ise, beş kişilik kaç farklı ekip seçilebilir??
###### $\binom{6}{3} = 20$


```
````


<br>

<h3 style="text-align:center"><span style="color:2a475e; text-align:center"> Ekip Oluşturma Soruları </span><span style="color:#bf3f36">(Finalde Gelebilir)</span></h3>

<h4 style="text-align:justify"><span style="color:darkred">Örnek 1</span>: 6 doktor, 7 hemşire arasından <span style="font-weight=bolder">4</span> kişilik bir sağlık ekibi oluşturulacaktır.</h4>

````col
```col-md
flexGrow=2
===
##### **a)** Kaç farklı şekilde oluşturulabilir?

###### $\binom{13}{4} = 715$


##### **c)** Doktor Mehmet ve Ayşe Hemşire aynı ekipte bulunmayacak şekilde kaç farklı ekip oluşturulabilir? 
Mehmet ve Ayşe'nin aynı ekipte olduğu durumlar: $\binom{11}{2} = 55$ <br>
Tüm Durumlar - Mehmet ve Ayşe'nin Olduğu Durumlar'ı bulmamız gerekir. 
$\space \space \boxed{715 - 55 = 660}$

```
```col-md
flexGrow=1
===
##### **b)** En az 3 doktor bulunma şartıyla kaç farklı ekip oluşturulabilir?

###### $\binom{6}{3}.\binom{7}{1} + \binom{6}{4}.{7}{0} = 140 + 15 = 155$

```
````
	
<h4 style="text-align:left"><span style="color:darkred">Örnek 2</span>: 5 Profesör ve 6 Doçent arasından  <span style="font-weight=bolder">3</span> kişilik bir bilim kurulu oluşturulacaktır.</h4>

````col
```col-md
flexGrow=1
===
##### **a)**  Kaç farklı şekilde oluşturulabilir?
###### $\binom{11}{3} = 165$

##### **c)** Profesör Ali ile Doçent Semra aynı kurulda *bulunmamak* şartıyla kaç farklı şekilde oluşturulabilir?

- Profesör Ali ve Doçent Semra'nın aynı kuruldu olduğu durumlar: $\binom{9}{1} = 9$
- Tüm Durumlar - Prof. Ali & Doç Semra'nın olduğu durumlar: $165-9 = 156$


```
```col-md
flexGrow=1
===
##### **b)** Kurulda en az 1 Doçent olmak şartıyla kaç farklı şekilde oluşturulabilir?

- Hiç Doçent olmadığı durumlar: $\binom{5}{3} = 10$
- Tüm Durumlar - Doçent Olmayan Durumlar = $165-10 = 155$

```
````

<h2 style="text-align:center"><span style="color:2a475e; text-align:center">Olasılık</span></h1>

**Tanım**: Bir olayı eşit olabilirliğe sahip sonuçları var olsun ve bu olasılıklı sonuçlar istenen ve istenmeyen şekilde 2 gruba ayrılsın. Buna göre; <br> <br>

### $p: \text{İstenen Durumun Olasılığı}$<br>$q: \text{İstenmeyen Durumun Olasılığı}$<br> $p+q = 1$


<br>


### $$ \boxed{P= \frac{s(i)}{s(T)} \to \text{İstenen Durumun Olasılığı = } \frac{\text{İstenen Durum}}{\text{Tüm Durumlar}}}$$

<br><br>

<h4 style="text-align:left"><span style="color:darkred">Örnek 1</span>: Aşağıdaki olayların her biri için olasılıkları hesaplayınız.</h4>

````col
```col-md
flexGrow=1
===
##### *a)*  Bir zar atıldığında sonucun üçten küçük olması ihtimali 

###### $\frac{2}{6} = \frac{1}{3}$


##### *b)*  Bir madeni para iki kez atıldığında en çok bir kere tura gelme ihtimali.

###### **TT <br> TY <br> YT <br>  YY** = $\frac{3}{4}$


```
```col-md
flexGrow=1
===
##### *c)*  Üç madeni para aynı anda atıldığında en az iki yazı gelmesi ihtimali

TTT, TTY, TYT, T**YY** <BR>
YTT, **Y**T**Y**, **YY**T, **YY**Y <br>

$\frac{4}{8} = \frac{1}{2}$




###### *d)*  Bir çift zar atıldığında toplamın 8 olması ihtimali

$3 \space\space\space 5 \space \space \space \space \space  \space \space \space \space \space  \space \space \space \space \space 5 \space \space \space 3$ <br>
$2 \space\space\space 6 \space \space   \space \space \space \space \space  \space \space \space \space \space \space \space \space 6 \space \space \space 2$ <br>
$4 \space\space\space  4$ 


####  = $\frac{5}{36}$
```
````


<br>
<br>
<br>

<h4 style="text-align:left"><span style="color:darkred">Örnek 2</span>: İçinde aynı büyüklükte 4 kırmızı, 6 mavi ve 8 yeşil bilye bulunan bir kutudan geriye koymadan ardarda 3 bilye çekiliyor.</h4> 

<br>


````col
```col-md
flexGrow=1
===
##### a) P(K,M,Y)

#### $\frac{4}{18}.\frac{6}{17}.\frac{8}{16}$ <br>
#### $= \frac{2}{9}.\frac{6}{17}.\frac{1}{2} = \frac{12}{306} = \frac{2}{51}$


##### *c)* Üçünün de aynı renk olma ihtimali nedir?


$\text{Tüm olasılıklar: }\binom{18}{3} = \frac{18.17.16}{3.2.1} = 816$
$\text{Üç kırmızı gelme olasılığı: } \binom{4}{3} = 4$

#### $= \frac{80}{816} = \frac{5}{51}$


```
```col-md
flexGrow=1
===
##### *b)* P(K,K,K)

#### $\frac{4}{18}.\frac{3}{17}.\frac{2}{16} =$ <br>
#### $\frac{2}{3}.\frac{1}{17}.\frac{1}{8} = \frac{1}{204}$


<br> <br><br>

$\text{Üç mavi gelme olasılığı: } \binom{6}{3} = 20$
$\text{Üç yeşil gelme olasılığı: }\binom{8}{3} = 56$
$\text{Üçünün de aynı renk gelme olasığı: } \frac{{56+20+4}}{816}$
```
````


<h4 style="text-align:left"><span style="color:darkred">Örnek 3</span>: İçinde aynı büyüklükte 7 kırmızı, 5 mavi bilye bulunan kutudan aynı anda 5 bilye çekiliyor. Buna göre;</h4>

````col
```col-md
flexGrow=1
===
##### *a)* 2K, 3M gelme ihtimali?

#### $\frac{\binom{7}{2}.\binom{5}{3}}{\binom{12}{5}} = \frac{21.10}{792}$
#### $= \frac{210}{792} = \boxed{\frac{35}{132}}$

```
```col-md
flexGrow=1
===
##### *b)* P(5M)?

#### $\frac{\binom{5}{5}}{\binom{12}{5}} = \boxed{\frac{1}{792}}$


##### *c)* P(5K)

#### $\frac{\binom{7}{5}}{\binom{12}{5}} = \frac{21}{792} = \frac{7}{264}$
#### $= 0,026 = \boxed{\%2,6}$

```
````


<h4 style="text-align:left"><span style="color:darkred">Örnek 4</span>: Bir madeni para ile bir çift zar birlikte atılıyor; paranın tura veya zarların üst yüzüne aynı sayı gelme ihtimali nedir?</h4>

$$P(T \lor Zar) = P(T) + P(Zar) - P(T \land Zar)$$

$P(T) = \frac{1}{2} \space\space\space\space\space\space\space\space\space\space\space\space\space P(Zar) = \frac{6}{36}=\frac{1}{6} \space\space\space\space\space\space\space\space\space\space\space\space\space\space\space\space\space\space\space P(T \land Zar) =\left( \frac{1}{2}. \frac{1}{6} \right) = \frac{1}{12}$

$$\frac{1}{2}+ \frac{1}{6} - \frac{1}{12} = \frac{6}{12} + \frac{2}{12} - \frac{1}{12} = \boxed{\frac{7}{12}}$$