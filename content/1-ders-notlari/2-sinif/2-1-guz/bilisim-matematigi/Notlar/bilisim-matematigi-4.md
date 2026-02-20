---
title: Bilişim Mat. - 4. Ders
type: ogrenis
ders: "[[Bilişim Matematiği]]"
created: 2025-10-17
date: 2025-10-17
cssclasses:
  - ders-notu
draft: true
tags:
  - akademi/dersler/bilisim-matematigi
---

<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 3: Taban Aritmetiği</span> | <span style="color:#bf3f36">17.10.2025</span></h2>

## Sayıların Çözümlenmesi

### Onluk Sistemde Çözümleme
#### Onluk tabandaki üç basamaklı bir sayının (`abc`) çözümlenmesi:
<br>
$$\Large
\begin{array}{}
(\LARGE a \quad b \quad c)_{\large 10} \\[4pt]
\downarrow \quad \downarrow \quad \downarrow \\[4pt]
a\cdot10^2  + \space  b\cdot10^1 + \space c\cdot10^0
\end{array}$$

<br>

### **Diğer Sistemlerde Çözümleme**
#### Herhangi bir tabandaki dört basamaklı bir sayının (`abcd`) çözümlenmesi:

<br>

$$
\Large
\begin{array}{c}
(\LARGE a \quad b \quad c \quad d)_{\large n} \\[4pt]
\downarrow \quad \downarrow \quad \downarrow \quad \downarrow \\[4pt]
a\cdot 2^3  + \space  b\cdot 2^2 + \space c\cdot 2^1 + \space d\cdot 2^0
\end{array}
$$


<br>

---

### **Örnek 1**:  İki basamaklı `ab` sayısı, rakamları toplamının `7` katından `9` fazladır. Bu koşulu sağlayan iki basamaklı `ab` sayılarının toplamı kaçtır?

#### Çözüm Adımları:

$$
\Large
\begin{aligned}{}
ab &= 7(a+b) +9 \\
10a+b &= 7a+7b + 9 \\
3a &= 6b+9 \quad \text{\normalsize (3'e bölelim)} \\
\underbrace{a}_{\substack{3 \\ 5 \\ 7 \\ 9}} &= (\underbrace{b}_{\substack{0 \\ 1 \\2 \\ 3}} \times 2 ) +3 \\  
\end{aligned}{}
$$

$$
\large \mathbf{
\text{\Large Toplam} = 30+51+72+93 = \boxed{246}}
$$

---

### **Örnek 2**: `AB5` ve `C38` üç basamaklı, `AB` iki basamaklı doğal sayılardır. Aşağıda verilen eşitliğe göre `A x B x C` kaçtır?



$$
\LARGE \mathbf{
AB5 - AB = C38}
$$

#### Çözüm Adımları:

$$
\large
\begin{aligned}{}
& (100A + 10B + 5) - (10A +B) = 100C + 38 \\
& 90A +9B = 100C  +33 \\ 
& 9(10A + B) = 100(C)+33 \\ \\
&C=3 \implies 10A+B =  37, \quad A=3, B=7  \\
&\mathbf{\implies 3 \times 7 \times 3 = 63 = A \times B \times C} 
\end{aligned}{}
$$


---

## Değişik Tabandan Onluk Tabana Geçiş

$$
\LARGE
\boxed{(abc)_d =  a \cdot d^2 + + b \cdot d^1+ c \cdot d^0 }
$$
---

### **Örnek 3**: Verilen eşitliği sağlayan a değeri kaçtır?
$$
\Large
(2006)_a = 692
$$
#### Çözüm Adımları:
$$
\large
\begin{aligned}{}
&6 \cdot a^0 + 0 \cdot a^1 + 0 \cdot a^2 + 2 \cdot a^3 = 692 \\
&6 + 2a^3 = 692 \\
&2a^3 = 686 \\
&a^3 = 343 \implies a=7
\end{aligned}{}
$$

---

## Ondalıklı Sayıların 10'luk Tabana Çevrilmesi
$$
\LARGE
\boxed{(ab,cd)_n = a \cdot n^1 + b \cdot n^0 + c \cdot n^{-1} + d \cdot n^{-2}}
$$
---

### **Örnek 4**: Aşağıdaki sayının onluk tabandaki karşılığını bulunuz.
$$
\Large
(12,34)_5
$$
#### Çözüm Adımları:
$$
\large
\begin{aligned}{}
(12,34)_5 &= 1 \cdot 5^1 + 2 \cdot 5^0 + 3 \cdot 5^{-1} + 4 \cdot 5^{-2} \\
&= 5 + 2 + \frac{3}{5} + \frac{4}{25} \\
&= 7 + \frac{15}{25} + \frac{4}{25} \\
&= 7 + \frac{19}{25} = 7 + \frac{76}{100} = (7,76)_{10}
\end{aligned}{}
$$


---

## 10'luk Tabandan Değişik Tabana Geçiş
### **Örnek 5**: Aşağıdaki sayının 5'lik tabandaki karşılığını bulunuz.

$$
\LARGE
\mathbf{(156)_{10}}
$$

#### Çözüm Adımları:
![[taban1.svg]]
> [!important] **Not**
> Bölme işlemi bittiğinde, **en son bölümden** başlayarak kalanlar sırasıyla yazılır.

<br>


$$
\Large \mathbf{
(156)_{10} = (1111)_5}
$$

---

### **Örnek 6**: Aşağıdaki sayının 4'lük tabandaki karşılığını bulunuz.
$$
\Large
(155)_6
$$
#### Çözüm Adımları:
Önce $(155)_6$ sayısını 10'luk tabana çevirelim:
$$
\large
(155)_6 = 1 \cdot 6^2 + 5 \cdot 6^1 + 5 \cdot 6^0 = 36 + 30 + 5 = (71)_{10}
$$
Şimdi de $(71)_{10}$ sayısını 4'lük tabana çevirelim:
![[taban2.svg|550]]
<br>

$$
\Large \mathbf{
(155)_6 = (71)_{10} = (1013)_4}
$$

---

## Değişik Tabanlarda Dört İşlem

### a) Toplama

> [!milestone] Bilgi
> Toplama işlemi onluk sistemdekiyle aynı mantıkta yapılır. Tek fark, toplam taban sayısına ulaştığında veya geçtiğinde "elde" alınmasıdır. Örneğin 6'lık tabanda $4+5=9$ eder. $9 = 1 \cdot 6 + 3$ olduğu için `3` yazılır, `1` elde olarak yan basamağa geçer.

#### **Örnek 7**: Aşağıdaki toplama işleminin sonucunu bulunuz.

$$
\Large \mathbf{
(5241)_6 + (3452)_6}
$$

$$
\large
\begin{array}{} 
& & (\overset{1}{{5}} & \overset{1}{{2}} & \overset{1}{{4}} & 1)_{6} \\ + & & (3 & 4 & 5 & 2)_{6} \\ \hline & (1 & 3 & 1 & 3 & 3)_{6}
\end{array}
$$


---


#### **Örnek 8**: Aşağıdaki toplama işleminin sonucunu bulunuz.

$$
\Large \mathbf{
(6351)_7 + (4635)_7}
$$

$$
\large
\begin{array}{} 
& {} & (\overset{1}{6} & \overset{1}{{3}} & \overset{1}{{5}}  & 1)_{7} \\ + & & (4 & 6 & 3 & 5)_{7} \\ \hline & (1 & 4 & 3 & 1 & 6)_{7} 
\end{array}
$$


---


### b) Çıkarma
#### **Örnek 9**: Aşağıdaki çıkarma işleminin sonucunu bulunuz.

$$
\Large \mathbf{
(5423)_6 - (1235)_6}
$$

$$
\large
\begin{array}{} 
& & (5 & \overset{3}{{\cancel4}} & \overset{8}{{\cancel2}} & \overset{9}{\cancel{3}})_6 \\ - & & (1 & 2 & 3 & 5)_6 \\ \hline & & (4 & 1 & 4 & 4)_6 \end{array}
$$

#### **Örnek 10**: Aşağıdaki çıkarma işleminin sonucunu bulunuz.

$$
\Large \mathbf{
(6524)_7 - (3654)_7}
$$

$$
\large
\begin{array}{} 
&& \overset{5}{\cancel{6}} & \overset{11}{\cancel{5}} & \overset{9}{\cancel{2}} & 4 \\ - & & 3 & 6 & 5 & 4 \\ \hline & & 2 & 5 & 4 & 0 
\end{array}
$$


---

### c) Çarpma
#### **Örnek 11**: Aşağıdaki çarpma işleminin sonucunu bulunuz.

$$
\Large \mathbf{
(543)_6 \times (52)_6}
$$
<br>


$$
\large
\begin{array}{r}
   &   & 5 & 4 & 3 \\ 
\times &   & & 5 & 2 \\ 
\hline
   & 1 & 5 & 3 & 0 \\  
+  & 4 & 4 & 4 & 3 & \\ 
\hline
   & 5 & 0 & 4 & 0 & 0
\end{array}
$$


---

#### **Örnek 12**: Aşağıdaki çarpma işleminin sonucunu bulunuz.
$$
\Large \mathbf{
(434)_5 \times (24)_5}
$$
<br>

$$
\large
\begin{array}{r}
   &   & 4 & 3 & 4 \\ 
\times &   & & 2 & 4 \\ 
\hline
   & 3 & 4 & 0 & 1 \\  
+  & 1 & 4 & 2 & 3 & \\ 
\hline
   & 2 & 3 & 1 & 3 & 1
\end{array}_5
$$
---

### **Örnek 13**: $m$ ve $n$ sayı tabanları olmak üzere, verilen eşitliğe göre $m+n$ toplamının minimum değeri kaçtır?
$$
\Large
(43)_m = (34)_n
$$
#### Çözüm Adımları:
- Şunu hatırlamalıyız: "**Bir sayı tabanındaki rakamlar, tabanın kendisinden küçük olmalıdır.**"
	- $(43)_m \implies m > 4$
	- $(34)_n \implies n > 4$
- Bu durumda $m, n \ge 5$ olmalıdır.
$$
\large
\begin{aligned}{}
&4 \cdot m^1 + 3 \cdot m^0 = 3 \cdot n^1 + 4 \cdot n^0 \\
&4m + 3 = 3n + 4 \\
&4m - 3n = 1 \\  \\

&(4 \times \underbrace{m)}_{\substack{7}} - (3 \times \underbrace{n)}_{9} = 1
\end{aligned}{}
$$

$$
\large \mathbf{
m_\text{{min}} = 7 \space \space \land \space \space  n_\text{{min}} = 9 \implies m+n =\boxed{16}}
$$


