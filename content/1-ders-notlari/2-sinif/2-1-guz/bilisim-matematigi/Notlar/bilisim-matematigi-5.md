---
title: Bilişim Mat. - 5. Ders
type: ogrenis
ders: "[[Bilişim Matematiği]]"
created: 2025-10-24
date: 2025-10-24
cssclasses:
  - ders-notu
---
<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 4: Lineer Cebir (Matrisler ve Determinantlar)</span> | <span style="color:#bf3f36">24.10.2025</span></h2>

## Matris Tanımı
- $m, n \in \mathbb{S^+}$ (pozitif sayma sayıları) olmak üzere, $a_{ij}$ elemanlarından oluşan $m \times n$ boyutundaki dikdörtgen tabloya **matris** denir.


$$\Large
\textbf{A}=
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & \dots & a_{1n} \\
a_{21} & a_{22} & a_{23} & \dots & a_{2n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & a_{m3} & \dots & a_{mn}
\end{bmatrix}
_{m\times n}
\\[8pt]
\hspace{-3cm}

\begin{aligned}
\textbf{m} &= \text{Satır sayısı} \\
\textbf{n} &= \text{Sütun sayısı}
\end{aligned}
$$



---

### **Örnek 1**: Aşağıdaki K matrisi için istenenleri bulunuz.

$$
\Large
\textbf{A}=
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & \dots & a_{1n} \\
a_{21} & a_{22} & a_{23} & \dots & a_{2n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & a_{m3} & \dots & a_{mn}
\end{bmatrix}
_{m\times n}
\\[10pt]
\begin{aligned}[t]
&\textbf{\large m} = \text{Satır sayısı} \\
&\textbf{\large n}\space = \text{Sütun sayısı}
\end{aligned}
$$



#### **a)** Matrisin boyutu (türü) nedir?

$$
\large
3 \times 3
$$
#### `K₂₃`  ve  `K₃₁` elemanları nelerdir?

$$
\large
K_{23} = -8, \quad K_{31} = \frac{1}{3}
$$

#### **c)** `K` matrisinden satır ve sütun matrisleri oluşturun.
##### Satır Matrisleri:

$$\large  K_1 = \begin{bmatrix} -2 & 0 & 3\end{bmatrix}$$

$$\large  K_2 = \begin{bmatrix}5 & 12 & -8\end{bmatrix}$$

$$\large  K_3 = \begin{bmatrix} \frac{1}{3} & \frac{5}{4} & \sqrt{2} \end{bmatrix}$$


##### Sütun Matrisleri:
$$ 
\large 
A= \begin{bmatrix} -2 \\ 5 \\ \frac{1}{3} \end{bmatrix} \quad B= \begin{bmatrix} 0 \\ 12 \\ \frac{5}{4} \end{bmatrix} \quad C = \begin{bmatrix} 3 \\ -8 \\ \sqrt{2} 
\end{bmatrix} 
$$
---

## İki Matrisin Eşitliği
- İki matrisin eşit olabilmesi için aynı boyutta olmaları ve karşılıklı elemanlarının birebir eşit olması gerekmektedir.

### **Örnek 2**: Verilen matrisler eşit olduğuna göre `x.y` çarpımını bulunuz.


$$
\Large
A= \begin{bmatrix} 1  & -5 \\ 2x-3y & 4 \end{bmatrix}, \quad B= \begin{bmatrix} 1 & -x+2y \\ 8 & 4 \end{bmatrix} \quad
$$

#### Çözüm Adımları:



$$
\large
\begin{aligned}{}
-x + 2y &= -5 \\
2x - 3y &=  \space \space \space8 \\
\end{aligned}{}
$$



$$
\large{
\begin{matrix}

\space \space-2x + 4y & \space \space= -10 \\
+\quad 2x - 3y &= \space \space8 \\
\hline
\qquad \qquad y&= -2 \\

\\

\to \boxed{y=-2} \implies \boxed{x = 1} \\ \\
\bf{x.y = -2}
\end{matrix}} 
$$

