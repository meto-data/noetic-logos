---
title: Bilişim Matematiği - 5. Hafta
type: learning
ders: "[[Bilişim Matematiği]]"
created: "[[2025-10-18]]"
tags:
  - ders/bilişim_matematiği
  - ders/bilişim_matematiği/a
date: 2025-10-17
cssclasses:
  - ders-notu
---

<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 4: Lineer Cebir (Matrisler ve Determinantlar)</span> | <span style="color:#bf3f36">24.10.2025</span></h2>

- **Matris**: $i, j \in \mathbb{S}$ (i ve j sayma sayısı) olmak üzere ve $1 \le i \le m$, $1 \le j \le m$ olsun.

### $$A = \begin{bmatrix} a_{11} & a_{12} & a_{13}  & \dots &  a_{1n} \\ a_{21} & a_{22} & a_{23} & \dots &  a_{2n} \\ \dots & \dots & \dots & \dots & \dots \\ a_{m1} & a_{m2} & a_{m3} & \dots & a_{mn} \end{bmatrix}_{m \times n}$$

- $m$: Satır sayısı
- $n$: Sütun sayısı

---

## Örnek: $K= \begin{bmatrix} -2 & 0 & 3 \\ 5 & 12 & -8 \\ \frac{1}{3} & \frac{5}{4} & \sqrt{2}\end{bmatrix}$

### A) Matrisin boyutu (türü) nedir?
##### $3 \times 3$
#### B) <br>$K_{23} = -8$<br>$K_{31} = \frac{1}{3}$

### C) K matrisinden satır ve sütun matrisleri oluşturun.

#### Satır:

##### $K_1 = \begin{bmatrix} -2 & 0 & 3\end{bmatrix}$<br>$K_2 = \begin{bmatrix}5 & 12 & -8\end{bmatrix}$<br>$K_3 = \begin{bmatrix} \frac{1}{3} & \frac{5}{4} & \sqrt{2} \end{bmatrix}$

#### Sütun: 

##### $A= \begin{bmatrix} -2 \\ 5 \\ \frac{1}{3} \end{bmatrix} \space \space \space B= \begin{bmatrix} 0 \\ 12 \\ \frac{5}{4} \end{bmatrix} \space \space \space C = \begin{bmatrix} 3 \\ -8 \\ \sqrt{2} \end{bmatrix}$


---

## İki Matrisin Eşitliği
- İki matrisin eşit olabilmesi için karşılıklı elemanlarının bire-bir eşit olması gerekmektedir.

### Örnek: <br>$A= \begin{bmatrix} 1  & -5 \\ 2x-3y & 4 \end{bmatrix} \space \space \space B= \begin{bmatrix} 1 & -x+2y \\ 8 & 4 \end{bmatrix}$<br><br>$A=B \implies x.y =?$

#### $\begin{matrix} 2y-x &=& -5 \\ 2x-3y &=& 8  \end{matrix} \implies \begin{bmatrix} 4y-2x &=& -10 \\ 2x-3y &=& 8\end{bmatrix} \implies y= -2$
#### $\boxed{y=-2} \implies \boxed{x = 1}$
#### $\space \to x.y = -2$

---




