---
title: Bilişim Matematiği - 11. Ders
type: learning
ders: "[[Bilişim Matematiği]]"
created: 2025-12-18
date: 2024-12-12
cssclasses:
  - ders-notu
draft: false
---
<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 6: Diziler ve Seriler</span> <span>| 12.12.2025</span></h1>

## Sabit Diziler

$\large a_n =k, \space k \in \mathbf{R}$ şeklinde ifade edilen dizilere denir.


---

### Örnek 7:

$$
\Large
\begin{aligned}{}
&a_n = (x-3).n^2 + (x-y+2).n + x + y\text{ \large sabit dizi ise},
\\ &a_n, \space x, \space y = \space ?
\end{aligned}
$$

#### Çözüm:

$$
\large
\begin{array}{l}
x=3 \space (\text{Zira } n^2 \text{ ifadesini 0 yapan 3'den başkası değildir.}) \\ 
y = 5 \\
a_n = x+y \implies a_n = 8
\end{array}
$$

---

### Dizilerin Eşitliği

$\large \forall n \in \mathbf{N}^+$ için,  $\large \quad (a_n) = (b_n) \implies (a_n) \quad$ dizisi ile $\large b_n$ dizilerinin karşılıklı elemanları birbirine eşittir.


***

### Örnek 8 (*Önemli*):

$$
\Large
\begin{aligned}{}
&(a_n) =  \sum^{n}_{ k=1} (10k-4) \\ 
&(b_n) = cn^2 + dn +e \\
\\
& a_n = b_n \implies c-d+e = \space?
\end{aligned}
$$


#### Çözüm:

$$
\large
\begin{aligned}{}
&\mathbf{a_1 = b_1} =    6 \to c + d + e  \\
&\mathbf{a_2 = b_2} = 22  \to  4c + 2d + e\\
&\mathbf{a_3 = b_3} = 48  \to 9c + 3d + e \\ \\
&\mathbf{a_2 - a_1 = b_2 -b_1} = 16 \to 3c  +d  \\
&\mathbf{a_3 -a_2 = b_3- b_2} = 26 \to 5c +d   \\
\hline
& \mathbf{2c} = 10 \to \mathbf{c}=5 \implies \mathbf{d}=1 \implies \mathbf{e}=0 \\
\\ &c- d+e = 4
\end{aligned}
$$

---

## Alt Dizi
- Genel terimi verilmiş olan bir diziden yeni diziler oluşturmaya alt dizi üretme denir.

---

### Örnek 9:

$$
\Large
(a_n) = \frac{3^{n+1}}{2n-3} \implies (a_{2n}), (a_{n-1}) =\space?
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&\mathbf{\Large (a_{2n})} = \frac{3^{2n+1}}{4n-3} \\ \\
&\mathbf{\Large (a_{n-1})} = \frac{3^n}{2n-5}
\end{aligned}
$$

---


## Dizilerde Dört İşlem


$$
\Large
\boxed{
\begin{aligned}{}
&\mathbf(a_n\mathbf) \pm \mathbf(b_n\mathbf) = \mathbf(a_n \pm b_n\mathbf) \\ \\
&\mathbf(a_n\mathbf) \cdot \mathbf(b_n \mathbf) = \mathbf(a_n \cdot b_n \mathbf) \\ \\
&\frac{\mathbf( a_n\mathbf)\\}{\mathbf(b_n\mathbf)} =  \left(  \frac{a_n}{b_n}\right)
\end{aligned}}
$$

---




### Örnek 10:

$$
\Large
\begin{aligned}{}
&(a_n) = 5n-3, \\
& (b_n) = \frac{2n+1}{3} \text \quad \text{ise}  \\ \\
&A) \quad (a_n) + (b_n) = \space ? \\
&B) \quad (a_n) - 2 (b_n) = \space ? \\
&C) \quad 2(a_n) \cdot (b_n) = \space ?
\end{aligned}
$$


#### Çözüm:

$$
\large
\begin{aligned}{}
&(a_n) + (b_n) = \frac{15n-9}{3} + \frac{2n+1}{3} = \frac{17n-8}{3} \\ \\
&(a_n) - 2(b_n) = \frac{15n-9}{3} - \left( \frac{4n+2}{3} \right) = \frac{11n-11}{3} \\ \
&2(a_n) \cdot (b_n) = 10n-6 \cdot \left(\frac{2n+1}{3}\right) = \frac{20n^2 -2n -6}{3} 
\end{aligned}
$$

---


## **Aritmetik Dizi**

- Bir  dizide ardışık terimler arasındaki fark eşit ve sabit ise, böyle dizilere **aritmetik dizi** denir.

$$
\large
\begin{aligned}{}
&(a_n) = (a_1, a_2, a_3, \dots, a_n, \dots)  \\ \\
&(a_2 - a_1) = (a_3-a_2) = \dots = (a_{n+1} - a_n) = \dots = \underbrace{r}_{\text{Ortak fark}}
\end{aligned}
$$


$$\LARGE \boxed{a_n = a_1 + (n-1).r}$$

---

### Özellik 1:
- Bir aritmetik dizide, baştan ve sondan eşit uzaklıktaki terimlerin toplamı eşittir.

$$
\large
\begin{array}{}
\Large (a_n) = a_1 + a_2 + a_3 + a_4 + a_5 \\ \\
a_1 + a_5 = a_2+ a_4
\end{array}
$$

### Özellik 2:
- Bir aritmetik dizide, herhangi bir terim, kendinden eşit uzaklıktaki terimlerin aritmetik ortalamasıdır.

$$
\Large
a_3 = \frac{a_2+a_4}{2} = \frac{a_1+a_5}{2} =\frac{a_3 + a_3}{2}
$$

### Özellik 3:
- Bir aritmetik dizide ilk n terim toplamı

$$
\Large
\begin{aligned}{}
&S_n =  \frac{n}{2}\left[a_1+a_n\right]\\
&S_n= \frac{n}{2}\left[2a_1+(n-1)\cdot r\right]
\end{aligned}
$$


### Özellik 4:

$$
\Large
\begin{aligned}{}
&n>p \large\text{ olmak üzere,} \\  \\
&a_n  = a_p + (n-p)\cdot r
\end{aligned}
$$

### Özellik 5:

$$
\Large
\begin{aligned}{}
&\text{Terim Sayısı (TS) }= \frac{\text{Son Terim}- \text{İlk Terim}}{\text{Artış Miktarı}}+1 \\ \\
&\text{Terimler Toplamı }= \frac{\text{(Son Terim + İlk Terim)} \cdot \text{TS}}{2}
\end{aligned}
$$

---

### **Örnek 11**:

$$
\Large
\begin{aligned}{}
\boxed{(8, 11, 14, 17, 20, \dots)} \large \text{ aritmetik dizidir.} \\
a_n, S_8 \large{\text{ ve }} \Large a_{20} \large \text{ değerlerini bulunuz.}
\end{aligned}
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&a_n = a_1 + (n-1) \cdot 3 = 8 + (n-1) \cdot 3 = 5 + 3n \\
&S_8 = 4 \cdot [16 + (8-1) \cdot 3] = 148 \\ 
&a_{20} = a_1 + 19\cdot 3 = 65
\end{aligned}
$$

---

### **Örnek 12**: Bir aritmetik dizide;

$$
\Large
\begin{aligned}{}
a_9 = 52, \quad a_{16} = 87 \implies r,\quad S_{20} = \space ?
\end{aligned}
$$


#### Çözüm:

$$
\large
\begin{aligned}
&a_1 + 8r = 52 \\
&a_1 + 15r = 87 \\
&7r = 35 \implies \boxed{r = 5}, \space a_1 = 12 \\ \\

&S_{20} = 10 \cdot [24 + (20-1)\cdot5] = 10.119 = \boxed{1190}
\end{aligned}
$$


---


### **Örnek 13**: Bir aritmetik dizide;

$$
\Large a_{10} = 26, \quad a_{15} = 41 \implies  a_{24}, \quad S_{40} = \space ?
$$


#### Çözüm:

$$
\large
\begin{aligned}{}
&a_1 + 9r = 26 \\
&a_1 + 14r = 41 \\
& 5r = 15 \implies \boxed{r=3} \space , a_1=-1 \\ \\
&a_{24} = a_1 + 23r = -1 + 69 \implies \boxed{a_{24} = 68} \\ \\
&S_{40} = 20 \cdot [-2 + (39)\cdot 3] = 2300

\end{aligned}
$$


---

### **Örnek 14**: Bir aritmetik dizide;

$$
\Large
a_9 = 11, \quad a_6-a_{12} = 10 \implies a_6 = ?
$$

#### Çözüm:


$$
\large
\begin{aligned}{}
&\text{I. Yol (Amele Yolu)} \\ \\
&a_1 + 8r = 11 \\
&(a_1+5r) - (a_1 + 11r) = 10 \to -6r = 10 \implies r= -\frac{5}{3} \\
&a_1 = 11-8r = \frac{33}{3}+\frac{40}{3} = \frac{73}{3}  \\
&a_6 = a_1 + 5r \implies \frac{73-25}{3} = \frac{48}{3} =16 \\ \\
&\text{II. Yol (Özellik 2) } \\ \\
&a_9 = \frac{a_6+a_{12}}{2}  \implies 2a_9 = a_6 + a_{12}  \\
&22 = a_6 + a_{12} \\
&10 = a_6 - a_{12} \\ + \\
\hline
&32 = 2a_6 \implies a_6 = 16,\quad a_{12} = 6 \\
\end{aligned}
$$


---

### **Örnek 15**: Bir aritmetik dizide; 

$$
\Large S_8 = 120, \space S_{12} =420 \implies S_{20} = \space ?
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&120 = 4 \cdot [2a_1 + 7r]  \implies 30 = 2a_1 + 7r \\
&420 = 6 \cdot [2a_1 + 11r] \implies 70 = 2a_1 + 11r \\ \hline \\
&40 = 4r \implies \boxed{r = 10}  , \quad 2a_1 = -40 \implies \boxed{a_1 = -20} \\ \\
&S_{20} = 10 \cdot [2a_1 + 19r] = -400 + 1900 = \mathbb{1500}

\end{aligned}
$$


