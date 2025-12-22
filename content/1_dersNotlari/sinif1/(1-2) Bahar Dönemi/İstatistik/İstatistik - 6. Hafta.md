# *Momentler | 20.03.2025*

## Momentler

#### $$m_{r} = \frac{(x_{1} -\bar{x})^r.f_{1} + (x_{2}-\bar{x})^r.f_{2} + \dots + (x_{n} - \bar{x})^r.f_{n}}{n}$$
````col
```col-md
flexGrow=1
===
##### $M_1 = 0$
##### $M_2 = \sigma^2 = V$
```
```col-md
flexGrow=1
===
##### $M_3 = \sigma^3$
##### $M_4 = \sigma^4 = V^2$
```
````


***

### Örnek 1: Sınıflandırılmış Serilerde Moment (Benzeri sorulacak)   <br>



````col
```col-md
flexGrow=1
===
###### Yanda verilen sınıflandırılmış seri için $M_2, M_3$  ve  $M_4$ değerlerini bulunuz. <br><br><br><br>

---


- $\bar{x} = \frac{6+12+50}{10} = 6,8$
#### a) $M_2$
###### $\sigma^2 = V = M_2 = \frac{(2-6,8)^2.3 + (6-6,8)^2.2 + (10-6,8)^2.5}{10}$ <br>
###### $M_2 = \frac{(-4,8)^2.3 + (-0.8)^2.2 + (3,2)^2.5}{10}$ <br>
###### $M_2 = \frac{121,6}{10} = 12,16$
#### b) $M_3$
###### $\sigma^3 = \frac{(-4,8)^3.3 + (-0,8)^3.2 + (3,2)^3.5}{10}$ <br>
###### $\sigma^3 = -16,896$

```
```col-md
flexGrow=1
===

| Sınıflar | Frekanslar |
| -------- | ---------- |
| 0-4      | 3          |
| 4-8      | 2          |
| 8-12     | 5          |


---



| Sınıflar | Frekanslar | $x_{i}$ |
| -------- | ---------- | ------- |
| 0-4      | 3          | 2       |
| 4-8      | 2          | 6       |
| 8-12     | 5          | 10      |


#### c) $M_4$
###### $\sigma^4 = \frac{(4,8)^4.3 + (0,8)^4.2 + (3,2)^4.5}{10}$
###### $\sigma^4 = \frac{2117.632}{10} = 211,763$

```
````

<br>

````col
```col-md
flexGrow=1
===

###### Yanda verilen sınıflandırılmış seri için $M_2, M_3$ ve $M_4$ değerlerini bulunuz. 

<br><br>


---

$\bar{x} = \frac{5 + 6 + 15}{10} = 2,6$ <br><br>

#### a) $M_2$
$M_2 = \frac{(1-2,6)^2.5 + (3-2,6)^2.2 + (5-2,6)^2.3}{10}$ <br>
$M_2 = \frac{30,4}{10} = 3,04$

#### b) $M_3$
$M_3 = \frac{(-1,6)^3.5 + (0,4)^3.2 + (2,4)^3.3)}{10}$ <br>
$M_3 = \frac{21,12}{10} = 2,112$

```
```col-md
flexGrow=1
===

| Sınıflar | Frekanslar |
| -------- | ---------- |
| 0-2      | 5          |
| 2-4      | 2          |
| 4-6      | 3          |

---

| Sınıflar | Frekanslar | $x_i$ |
| -------- | ---------- | ----- |
| 0-2      | 5          | 1     |
| 2-4      | 2          | 3     |
| 4-6      | 3          | 5     |

<br>

#### d) $M_4$
$M_4 = \frac{(-1,6)^4.5 + (0.4)^4.2 + (2.4)^4.3}{10}$ <br>
$M_4 = \frac{132,353}{10} = 13,235$
```
````


---


### Çarpıklık
#### $$\text{Çarpıklık (Ç) = } \frac{{\bar{x}-Mod}}{\sigma}$$
````col
```col-md
flexGrow=1
===

#### $Ç>0 \to \text{ Sağa Çarpık}$

```
```col-md
flexGrow=1
===

#### $Ç<0 \to \text{ Sola Çarpık}$
#### $Ç= 0 \to \text{ Normal Dağılım}$
```
````




### Basıklık
- Normal dağılım sergileyen bir serinin basıklığı 3 birimdir.
	- $B=3 \to \text{ Normal Dağılım}$


### $$\text{Basıklık }(B) = \frac{M_4}{(\sigma^2)^2} = \frac{M_4}{V^2}$$


````col
```col-md
flexGrow=1
===
#### $B<3 \to Basık$
```

```col-md
flexGrow=1
===
#### $B>3 \to Sivri$
```
````

<br>

````col
```col-md
flexGrow=1
===
###### Yanda verilen sınıflandırılmış seri için çarpıklık nedir?
<br><br><br><br>

---

$\bar{x} = \frac{4+18+10+56}{10} = 8,8$ <br><br>
$\text{Mod } = 12 + \frac{3}{7}.4 = 12+ \frac{12}{7}$ <br>
$\text{Mod } = \frac{96}{7} = 13,714$<br><br>

$\sigma = \sqrt{\frac{(6,8)^2.2 + (2,8)^2.3 + (1,2)^2 + (5,2)^2.4}{10}}$ <br>
$\sigma = \sqrt{\frac{225,6}{10}}= 4,749$ <br>

$\text{Çarpıklık }= \frac{8,8 - 13,714}{4,749} = -1,034 \space \space \to -1,034 <0, \text{ Sola çarpık}$

```
```col-md
flexGrow=1
===

| Sınıflar | Frekans |
| -------- | ------- |
| 0-4      | 2       |
| 4-8      | 3       |
| 8-12     | 1       |
| 12-16    | 4       |


---

| Sınıflar | Frekans | *$x_i$* | |
| -------- | ------- | ------- | ------- |
| 0-4      | 2       |     2    | |
| 4-8      | 3       |     6    | |
| 8-12     | 1       |      10   | | 
| 12-16    | 4       |    14     | **(Mod)** |

```
````


---

````col
```col-md
flexGrow=2
===
###### Yanda verilen sınıflandırılmış seri için basıklık nedir? <br><br><br><br><br>

---

$\bar{x} = \frac{3+36+75}{10} = 11,4$ <br> <br>

##### $\sigma^2 \space \space (V) = \frac{(8,4)^2 + (2,4)^2.4 + (3,6)^2.5}{10} = \frac{158.4}{10} = 15,84$<br>
##### $V^2 = 250,905$ <br>
##### $M_4 = \frac{(8,4)^4 + (2,4)^4.4 + (3,6)^4.5}{10} = \frac{5951,232}{10} = 595,123$ <br>
#### $B = \frac{595,123}{250,905} = 2,371 \to  2,371<3 \to \text{ Basık}$   <br>


```
```col-md
flexGrow=1
===

| Sınıflar | Frekans |
| -------- | ------- |
| 0-6      | 1       |
| 6-12     | 4       |
| 12-18    | 5       |

---

| Sınıflar | Frekans | *$x_{i}$* |
| -------- | ------- | --------- |
| 0-6      | 1       | 3         |
| 6-12     | 4       | 9         |
| 12-18    | 5       | 15        |

```
````



<br><br>
````col
```col-md
flexGrow=1
===
###### Yan tarafta verilen sınıflandırılmış seri için çarpıklık ve basıklık değerlerini bulunuz. <br><br><br>


---
### a) Çarpıklık
##### $\bar{x} = \frac{10+24+10}{10} = 4,4$
##### $\text{Mod } = 0 + \frac{5}{5+1}.4 = \frac{10}{3} = 3,333$
##### $\sigma = \sqrt{\frac{(2,4)^2.5 + (1,6)^2.4 + (5,6)^2}{10}} = \sqrt{\frac{70,4}{10}} = \sqrt{7,04} = 2,653$
##### $\text{Ç= } \frac{4,4 - 3,333}{2,653} = 0,402$ 
##### $0,402 >0, \text{ Sağa Çarpık}$

<br>

### b) Basıklık
##### $V = 7,04 \space \to \space V^2 = 49,561$
##### $M_4 = \frac{(2,4)^4.5 + (1,6)^4.4 + (5,6)^4}{10} = \frac{1175,552}{10} = 117,552$
#### $B = \frac{117,552}{49,561} = 2,371$
#### $B<3 \space \to \space \text{ Basık}$
```
```col-md
flexGrow=1
===

| Sınıflar | Frekans |
| -------- | ------- |
| 0-4      | 5       |
| 4-8      | 4       |
| 8-12     | 1       |

---

| Sınıflar | Frekans | $x_{i}$ |           |
| -------- | ------- | ------- | --------- |
| 0-4      | 5       | 2       | **(Mod)** |
| 4-8      | 4       | 6       |           |
| 8-12     | 1       | 10      |           |

```
````





