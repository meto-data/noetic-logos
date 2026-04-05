---
draft: true
---

# *Ünite 6: Temel Olasılık Teorisi | 17.04.2025*
## <h2>Faktöriyel Kavramı</p>
##### $$n! = n \times (n-1) \times (n-2) \times \dots \times 2 \times 1$$
## <h2>Saymanın Temel Prensibi</p>
#### a) Toplama
### <h3>b) Çarpma</p>


````col
```col-md
flexGrow=1
===

<h5>Örnek 1:</h5> 

40 kişilik bir sınıftan bir başkan yardımcısı, ardından 1 onun kadar da başkan seçilecektir. Kaç farklı şekilde seçim yapılır?

 $40.39.38 = 59280$

```
```col-md
flexGrow=1
===
<h5>Örnek 1:</h5> 

6 gömleği ve 4 pantolonu bulunan biri, bir gömlek ve bir pantolon seçerek kaç farklı şekilde giyinebilir? 

$6.4 = 24$



```
````

<br><br><br>


````col
```col-md
flexGrow=1
===
##### Örnek 3:

4 mektup, 6 posta kutusuna atılacaktır.

###### a) Kaç farklı şekilde atılabilir?

$6.6.6.6 = 6^{4}$

###### b) Bir posta kutusuna en fazla bir mektup atılacaksa kaç farklı şekilde atılabilir?

$6.5.4.3 = 360$

```
```col-md
flexGrow=1
===
##### **Örnek 4 (Finalde Çıkabilir)**: 

 ###### $A = {0,1,2,3,4,5,6,7,8,9}$'nin elemanları kullanılarak;

###### a) 4 basamaklı, tekrarlı veya tekrarsız kaç sayı oluşturulabilir?

$9.10.10.10 = 9000$

###### b) 4 basamaklı, tekrarsız kaç sayı oluşturulabilir?
$9.9.8.7 = 4536$

###### c) 4 basamamaklı, son basamağı 0 olan kaç tekrarsız sayı oluşturulabilir?
$9.8.7.1 = 504$



```
````


<br>

<h2> Permütasyon (Sıralama/Dizileme)</h2>

#### $$P(n,r) = \frac{n!}{(n-r)!}$$ <br><br>

<h3> Genel Permütasyon </h3>

````col
```col-md
flexGrow=1
===
###### Örnek 1:

- 4 kişi yan yana kaç farklı şekilde poz verebilir? 
  
  $\underline{4} \times  \space \underline{3} \times \space \underline{2} \times \space  \underline{1} = 24$

```
```col-md
flexGrow=1
===
###### Örnek 2:
- 10 kişi 4 kişilik bir oturağa kaç farklı şekilde oturabilir?

$P(4,4) = \frac{10!}{6!} = 10.9.8.7 = 5040$  

```
```col-md
flexGrow=1
===
###### Örnek 3:
- "12345" sayısının rakamları kullanılarak 3 basamaklı kaç sayı yazılabilir??

$P(5,3) = \frac{5!}{2!} = 5.4.3 = 60$

$P(4,4) = \frac{10!}{6!} = 10.9.8.7 = 5040$  

```
````


<br><br><br><br>

<h3>Dairesel Permütasyon (<span>Çıkabilir</span>)</h3>

#### $$\text{Formül: } (n-1)!$$

<h4>Örnek 1 <span>(Finalde Çıkabilir)</span></h4>

````col
```col-md
flexGrow=2
===
###### 7 kişi yuvarlak bir masa etrafında;
  *a)* Kaç farklı şekilde oturabilir?  
  *b)* Herhangi üç kişi yan yana olmak şartıyla kaç kişi oturabilir?   
  *c)* Herhangi üç kişi yan yana olmamak şartıyla kaç kişi oturabilir? 


```
```col-md
flexGrow=1
===


![[daireselpermustasyon1.svg|200]]

```
````


````col
```col-md
flexGrow=2
===
###### *a)* Kaç farklı şekilde oturabilir? 

$(7-1)! = 6! = 720$


###### *b)*  Herhangi **üç** kişi yan yana olmak şartıyla kaç kişi oturabilir?

###### $$(7-3)! \space \times \space 3! \space = \space  4! \space \times \space 3! = 144$$


###### *c)* Herhangi üç kişi yan yana **olmamak** şartıyla kaç kişi oturabilir?

###### $$720 - 144 = 576$$
```
```col-md
flexGrow=1
===

![[daireselperm2.svg|200]]


```
````

<h4> Örnek 2 <span>(Finalde Çıkabilir):</span> <br> <br>8 kişi yuvarlak masa etrafında; </h4> <br>


````col
```col-md
flexGrow=1
===



###### *a)* Kaç farklı şekilde oturabilir?

$$(8-1)! = 7! = 5040$$

###### *c)* Herhangi 4 kişi yan yana **olmamak** şartıyla kaç farklı şekilde oturabilir?
$$5040-576 = 4464$$

```
```col-md
flexGrow=1
===

###### *b)* Herhangi 4 kişi yan yana olmak şartıyla kaç farklı şekilde oturabilir?

###### $$(8-4)! \space \times \space 4! = 4! \times 4! = 576$$

```
````
 <br><br><br><br><br><br><br><br><br><br>
 
<h3>Tekrarlı Permütasyon  <span>(Çıkabilir)</span></h3> <br>

#### **Örnek 1:** "$223331$" sayısının rakamları kullanılarak;

````col
```col-md
flexGrow=1
===
###### *a)* Kaç **farklı** sayı yazılabilir? 

###### $\frac{6!}{2!.3!.1!} = \frac{6.5.4}{2!} = 60$

###### *c)* <span>1</span> ile başlayan <span>3</span> ile biten kaç **farklı** sayı yazılabilir?

![[tekrarlip2.svg|250]]

##### $\frac{4!}{2!.2!} = 6$

```
```col-md
flexGrow=1
===
###### *b)* **<span>1</span>** ile başlayan kaç **farklı** sayı yazılabilir?

![[tekrarlip.svg|400]]

##### $\frac{5!}{2!.3!} = 10$

```
````

<br><br>

#### **Örnek 2**: "KARAKAYA" kelimesinin harfleri kullanılarak anlamlı/anlamsız;

````col
```col-md
flexGrow=1
===
##### *a)* Kaç kelime yazılabilir?

**Harf Frekansları:** <br>
	**A**: 4  
	**K**: 2  
	**R**: 1  
	**Y**: 1  

##### $\frac{8!}{4!.2!.1!.1!} = \frac{8.7.6.5}{2!} = 840$


```
```col-md
flexGrow=2
===
#### *b)* **R** ile başlayan **Y** ile biten kaç kelime yazılabilir?

|Pozisyon|1|2|3|4|5|6|7|8|
|---|---|---|---|---|---|---|---|---|
|Harf|<span>R</span>|_|_|_|_|_|_|<span>Y</span>|

**Kalan Harf Frekansları:** <br>
	**A**: 4  
	**K**: 2  

##### $\frac{6!}{4!.2!} = \frac{6.5}{2!} = 15$

```
````
