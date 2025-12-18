---
title: Bilişim Matematiği - 11. Ders
type: learning
ders: "[[Bilişim Matematiği]]"
created: "[[2025-12-12]]"
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


## Aritmetik Dizi

