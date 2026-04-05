---
draft: true
---

# *13.03.2025*

## Çeyreklikler <br>
![[ceyreklik.png]]<BR> $$Q_{1}  \space (\text{Birinci Çeyreklik}) = L_{1} + \left( \frac{\frac{n}{4}-\sum F_{1}}{F_{Q_{1}}} \right) \times c$$
````col
```col-md
flexGrow=1
===
# 
###### $L_{1} =$ 1. Çeyreklik sınıfının alt sınırı <br> 
###### $\sum F_{1} =$ 1. Çeyreklik sınıfından önceki frekanslar toplamı 
###### $c$ = Çeyreklik sınıfının uzunluğu
```
```col-md
flexGrow=1
===
# 
###### $\frac{n}{4} =$ Frekanslar toplamının 4'e bölümü
###### $F_{Q_{1}} =$ 1. Çeyreklik sınıfının frekansı
```
````


---
<br> <br>
<br><br>
$$Q_{3} \space (\text{3. Çeyreklik}) = L_{1} + \left( \frac{\frac{3n}{4}-\sum F_{3}}{F_{Q_{3}}} \right) \times c$$
````col
```col-md
flexGrow=1
===
# 
###### $L_{1} =$ 3. Çeyreklik sınıfının alt sınırı

###### $\sum F_{3} =$ 3. Çeyreklik sınıfından önceki frekanslar toplamı 

###### $c$ = Çeyreklik sınıfının uzunluğu
```
```col-md
flexGrow=1
===
# 
###### $\frac{3n}{4} =$ Frekanslar toplamının üç ile çarpımının 4'e bölümü <br> <br>
###### $F_{Q_{3}} =$ 3. Çeyreklik sınıfının frekansı
```
````

---
## Açıklık
$$\text{Açıklık = }\space \frac{Q_{3}-Q_{1}}{2}$$


***
<br>


````col
```col-md
flexGrow=1
===
##  Örnek
| Sınıflar | Frekanslar |
| -------- | ---------- |
| 0-6      | 4          |
| 6-12     | 2          |
| 12-18    | 1          |
| 18-24    | 5          |
```
```col-md
flexGrow=1
===
#    <br> <br>
Yanda verilen sınıflandırılmış seri için mod, medyan, $Q_1$, $Q_3$ ve açıklık değerlerini bulunuz.
```
````
<br> <br><br>
````col
```col-md
flexGrow=1
===
### a) Mod

$L_{1} = 18$ <br>
$\Delta_{1} = 5-1 = 4\space \space$ <br>
$\Delta_{2} = 5-0 = 0$,  $c = 6$ 
##### $\text{Mod = } 18 +(\frac{4}{5+4})\times {6} = \frac{62}{3} = 20,6667$

```



```col-md
flexGrow=1
===
# 

|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|           | 0-6      | 4          |
|           | 6-12     | 2          |
|           | 12-18    | 1          |
| **(Mod)** | 18-24    | 5          |
```
````

<br>

````col
```col-md
flexGrow=1
===
### b) Medyan
$\frac{n}{2} = \frac{12}{2} = 6$ <br>
$c = 6$
$L_1 = 6$ <br>
$\sum{F_1 = 4}$ <br>
$F_{\text{medyan}} = 2$
##### $\text{Medyan = } 6 + (\frac{6-4}{2}) \times 6 = \space 12$
```
```col-md
flexGrow=1
===
# 

|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|           | 0-6      | 4          |
| **(Medyan)** | 6-12     | 2          |
|           | 12-18    | 1          |
| **(Mod)** | 18-24    | 5          |

```
````
<br>

````col
```col-md
flexGrow=1
===
### c) $Q_1$
$\frac{n}{4} = \frac{12}{4} = 3$ <br>
$L_{1} = 0$ <br> $\sum{F_{{1}}} = 0$ <br>
$F_{Q_{1}} = 4$,   $c=6$ 
##### $Q_{1} = 0 + (\frac{3-0}{4}) \times 6 =  \frac{9}{2} = 4,5$

```
```col-md
flexGrow=1
===
# 
|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|   ($Q_1$)        | 0-6      | 4          |
| **(Medyan)** | 6-12     | 2          |
|           | 12-18    | 1          |
| **(Mod)** | 18-24    | 5          |
```
````



<br> <br><br>
###  

````col
```col-md
flexGrow=1
===
### d) $Q_{3}$
$\frac{3n}{4} = \frac{36}{4} = 9$ <br>
$L_1 = 18$ <br>
$c = 6$ <br>
$\sum{F_3} =  7$ <br>
$F_{Q_3} = 5$ <br>

```
```col-md
flexGrow=1
===
# 
|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|   ($Q_1$)        | 0-6      | 4          |
| **(Medyan)** | 6-12     | 2          |
|           | 12-18    | 1          |
| **(Mod) ($Q_3$)** | 18-24    | 5          |
```
````
$$Q_{3} = 18 + (\frac{9-7}{5}) \times 6 = 18 + \frac{12}{5} = \frac{102}{5} = 20,4 $$
<br> <br>
### e) Açıklık
$$\frac{Q_{3} - Q_{1}}{2} =  \frac{20,4-4,5}{2} = 7,95$$


---

<br>

````col
```col-md
flexGrow=1
===
##  <br>
| Sınıflar | Frekanslar |
| -------- | ---------- |
| 0-4     | 2          |
| 4-8     | 8          |
| 8-12    | 4          |
| 12-16    | 6          |
```
```col-md
flexGrow=1
===
#    <br> <br>
Yanda verilen sınıflandırılmış seri için mod, medyan, $Q_1$, $Q_3$ ve açıklık değerlerini bulunuz.
```
````

<br>


````col
```col-md
flexGrow=1
===
### a) Mod

$L_{1} = 4$ <br> 
$c = 4$ <br>
$\Delta_{1} = 6$, $\Delta_{2} = 4$ <br>
$\text{Mod = }\space 4 + (\frac{6}{10})\times 4 \to  \space 4 + \frac{12}{5} = \frac{32}{5} = 6,4$
```
```col-md
flexGrow=1
===
# 

|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|           | 0-4      | 2          |
| **(Mod)** | 4-8      | 8          |
|           | 8-12     | 4          |
|           | 12-16    | 6          |

```
````

<br>

 ````col
```col-md
flexGrow=1
===
### b) Medyan
$\frac{n}{2} = \frac{20}{2} = 10$ <br>
$L_1 = 4$ <br>
$c = 4$ <br>
$\sum{F_1} = 2$ <br>
$F_{medyan} = 8$ <br>
$\text{Medyan = }\space 4 + (\frac{10-2}{8}) \times 4 = 8$
```
```col-md
flexGrow=1
===
# 
|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|           | 0-4      | 2          |
| **(Mod)**<br>**(Medyan)** | 4-8      | 8          |
|           | 8-12     | 4          |
|           | 12-16    | 6          |
```
````

<br>

````col
```col-md
flexGrow=1
===
### c) $Q_{1}$

$\frac{n}{4} = 5$ <br>
$L_1 = 4$ <br>
$\sum{F_1} = 2$ <br>
$F_{Q_3} = 8$, $c = 4$ <br>
$Q_{1} =  \space 4 + (\frac{5-2}{8})\times 4 = 4+ \frac{3}{2} = \frac{11}{2} = 5,5$

```
```col-md
flexGrow=1
===
# 

|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|           | 0-4      | 2          |
| **(Mod)**<br>**(Medyan) <br> ($Q_1$)** | 4-8      | 8          |
|           | 8-12     | 4          |
|           | 12-16    | 6          |

```
````


<br><br><br>


 ````col
```col-md
flexGrow=1
===
### d)  $Q_{3}$
$\frac{3n}{4} = \frac{60}{4} = 15$ <br>
$L_1 = 12$ <br>
$\sum{F_1} = 14$ <br>
$F_{Q_3} = 6$ <br>
$c = 4$
```
```col-md
flexGrow=1
===
# 
|           | Sınıflar | Frekanslar |
| --------- | -------- | ---------- |
|           | 0-4      | 2          |
| **(Mod)**<br>**(Medyan) <br> ($Q_1$)** | 4-8      | 8          |
|           | 8-12     | 4          |
|     **($Q_3$)**      | 12-16    | 6          |
```
````
$$Q_{3} = \space 12 + (\frac{15-14}{6})\times 4 = 12 + \frac{4}{6} = \frac{38}{3} = 12,666$$
<br>
### e) Açıklık
$$\text{Açıklık = }\space \frac{Q_{3} - Q_{1}}{2} = \frac{12,666 - 5,5}{2} = 3,583$$
<br><br><br>
---
<br> <br><br><br><br> 
## Ortalama Sapma
- Sıralı bir serinin elemanları arasında aritmetik ortalamadan ne kadar sapıldığının göstergesidir.
$$\text{O.S = }\space \frac{\sum[f_{i} \times |x_{i} - \bar{x}|]}{\sum{f_{i}}}$$ 
## Düzeltilmiş Varyans
$$\sigma^2 - \frac{c^2}{12}$$
## Değişim Katsayısı
- Bir seride değişkenler arasındaki değişimin ölçüsüdür.
$$\text{D.K = }\space \frac{\sigma}{\bar{x}} \times 100$$
---
<br><br><br><br><br><br><br>

## Soru (Sınavda benzerinin çıkma ihtimali yüksek) 

````col
```col-md
flexGrow=1
===
##  <br>
| Sınıflar | Frekanslar |
| -------- | ---------- |
| 0-2     | 1          |
| 2-4     | 4          |
| 4-6    | 2         |
| 6-8    | 3          |
```
```col-md
flexGrow=1
===
#    <br> <br>
Yanda verilen sınıflandırılmış seri için standart sapma ($\sigma$) ortalama sapma, düzeltilmiş varyans ve değişim katsayısı değerlerini bulunuz.
```
```` 
<br> 

````col
```col-md
flexGrow=1
===
######

### a) Standart Sapma
$\sigma = \sqrt{ \frac{(3,4)^2\times 1 + (1,4)^2 \times 4 + (0,6)^2 \times 2 + (2,6)^2 \times 3}{10} }$ <br>

$\sigma = \sqrt{\frac{40,4}{10} } = \sqrt{4,04}$ <br> 
$\sigma = 2,0099$ <br>

### b) Ortalama Sapma

$\text{O.S} = \frac{\space (3,4. \times 1) + (1,4 \times 4) + (0,6 \times 2) + (2,6) \times 3}{10}$ <br>
$\text{O.S} = \frac{3,4 +5,6 +1.2 + 7.8}{10} = 1,8$ <br>

### C) Düzeltilmiş Varyans
$\text{D.V} = \space 4,04 - \frac{2^2}{12} = 4,04 - \frac{1}{3} = 3,7066$ <br>

### d) Değişim Katsayısı
$\text{D.K} = \space \frac{\sqrt{ 4,04 }}{4,4} \times 100 = 45,679$

```
```col-md
flexGrow=1
===
#

| Sınıflar | Frekanslar | **$x_{i}$** | $\left\| \bar{x} - x_{i} \right\|$ |
| -------- | ---------- | ----------- | ---------------------------------- |
| 0-2      | 1          | 1           | 3,4                                |
| 2-4      | 4          | 3           | 1,4                                |
| 4-6      | 2          | 5           | 0,6                                |
| 6-8      | 3          | 7           | 2,6                                |

$\bar{x}\space = \frac{1 + 3 \times 4 + 5 \times 2 + 7 \times 3}{10} =4,4$

```
````

<br><br>


---
<br><br><br><br><br><br><br><br>
````col
```col-md
flexGrow=1
===
| Sınıflar | Frekanslar |
| -------- | ---------- |
| 0-6     | 4          |
| 6-12     | 2          |
| 12-18    | 1          |
| 18-24    | 5          |
```
```col-md
flexGrow=1
===
#   Soru
Yanda verilen sınıflandırılmış seri için standart sapma ($\sigma$) ortalama sapma, düzeltilmiş varyans ve değişim katsayısı değerlerini bulunuz.
```
````

<br><br>

````col
```col-md
flexGrow=1.2
===

### a) Standart Sapma
$\sigma = \sqrt{ \frac{(9,5)^2\times4+ (3,5)^2\times2 + (2,5)^2\times1 + (8,5)^2\times5}{12} }$ <br>

$\sigma = \sqrt{ \frac{2596,75}{12}} = \sqrt{ 62,75 }$ <br> 
$\sigma = 7,921$ 
### b) Ortalama Sapma
$\text{O.S} = \frac{9,5 \times 4 + 3,5 \times 2 + 2,5 \times 1 + 8,5 \times 5}{12} = \frac{90}{12} = 7,5$ 
### c) Düzeltilmiş Varyans
$\text{D.V} = \space 62,75 - \frac{6^2}{12} = 62,75 - 3 = 59,75$
### d) Değişim Katsayısı 
$\frac{\sqrt{ 62,75 }}{12,5} \times 100 = 63,371$ 

```
```col-md
flexGrow=1
===

| Sınıflar | Frekanslar | $x_{i}$ | $\left\| \bar{x} - x_{i} \right\|$ |
| -------- | ---------- | ------- | ---------------------------------- |
| 0-6      | 4          | 3       | 9,5                                |
| 6-12     | 2          | 9       | 3,5                                |
| 12-18    | 1          | 15      | 2,5                                |
| 18-24    | 5          | 21      | 8,5                                |

$\bar{x} = \frac{3\times 4 + 9 \times 2 + 15 + 21 \times 5}{12} =  12,5$

```
````


