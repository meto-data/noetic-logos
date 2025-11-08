---
title: Bilişim Matematiği - 7. Hafta
type: learning
ders: "[[Bilişim Matematiği]]"
created: "[[2025-11-7]]"
date: 2024-11-07
cssclasses:
  - ders-notu
---

<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 4: Lineer Cebir (Matrisler ve Determinantlar)</span> | <span style="color:#bf3f36">07.11.2025</span></h2>

## Bir Kare Matrisin Tersi

### $$\boxed{A\times A^{-1} = I}$$


---

### Örnek: $A = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix} \implies A^{-1} = ?$ <br>
####  $\begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix} \times \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ <br>
#### $\to 2a + 3c = 1 \qquad 2b + 3d = 0$
#### $\to a \space \space + 2c = 0 \qquad b \space \space + 2d = 1$
$\begin{array} & &&&&&&&&&&&&&&&&& \\ \hline \end{array}$

#### $\to 2a +3c -(2a + 4c) = 1 \implies -c = 1 \to$
##### $\quad c = -1$
#### $\to 2b +3d -(2b + 4d) = -2 \implies -d = -2$
##### $\quad d = 2$
#### $\to a-2 = 0 \implies a = 2 \quad \land  \quad b +4 = 1 \implies b = -3$

#### $\to \quad A^{-1} = \begin{bmatrix} \space \space 2 & -3 \space \\ -1 & \space \space 2 \space \end{bmatrix}$


---
### Örnek: $\begin{bmatrix} -1 & 3 \\ 2 & -4 \end{bmatrix} \implies A^{-1} = ?$

<br>

#### $\begin{bmatrix} -1 & 3 \\ 2 & -4 \end{bmatrix} \times \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$

#### $\to -a + 3c = 1 \quad \quad -b + 3d = 0$
#### $\to 2a -4c = 0 \quad \quad \quad 2b -4d = 1$
$\begin{array} & &&&&&&&&&&&&&&&&& \\ \hline \end{array}$
#### $c = 1, \quad a =2$
#### $2d = 1 \implies d = \frac{1}{2}$
#### $b-2d = 1 \implies b = \frac{3}{2}$

#### $\quad A^{-1} = \begin{bmatrix} 2 & \frac{3}{2} \\  1 & \frac{1}{2} \end{bmatrix}$

# Determinantlar
- $n \in \mathbb{N^+}$ için, $n$. mertebeden bütün kare matrislerden reel sayılara tanımlı $|A|$ ise, bu tür ifade edilen fonksiyonlara determinant fonksiyonu denir.

## Bir Kare Matrisin Determinantının Alınması (**Saruss Kuralı**)


![[2-Det3x3Sarrus.mp4]]


---



### Örnek: $A = \begin{bmatrix} 11 & -1 & 1 \\ 5 & 2 & -1 \\ 3 & 1 & -2 \end{bmatrix} \implies |A| =?$

<br>
#### $\qquad \begin{bmatrix} 11 & -1 & 1 \\ 5 & 2 & -1 \\ 3 & 1 & -2 \\ 11 & -1 & 1 \\ 5 & 2 & -1 \end{bmatrix} \implies$
#### $\to \qquad \space |A| = (-44 + 5 + 3) - (6 -11 +10)$
#### $\to \space \qquad |A|=-36 -5 = -41$


---

### Örnek: $A = \begin{bmatrix} 4 & 0 & 5 \\ 3 & 6 & -1 \\ 2 & 0 & -3 \end{bmatrix} \implies |A| =?$

<br>
#### $\begin{bmatrix} 4 & 0 & 5 \\ 3 & 6 & -1 \\ 2 & 0 & -3 \\ 4 & 0 & 5 \\ 3 & 6 & -1 \end{bmatrix} \implies |A| = (-72 +0+0)-(60+0+0) = -132$

---

## Doğrusal Denklem Sistemlerinin Determinantlar Yardımıyla Çözümü (**Cramer Yöntemi**)



### **Örnek**: Aşağıdaki denklemin çözüm kümesini Cramer yöntemiyle bulunuz.



$$
\Large  
\begin{array}{} 
\textbf{3x + y = 11} \\  \textbf{x} \space \space \textbf{+y  = 5}  
\end{array} 
$$



#### $\Delta = \left| \begin{matrix} 3 & 1 \\ 1 & 1 \end{matrix} \right| = 3-1 = 2$ <br>
#### $\Delta_x = \left| \begin{matrix} 11 & 1 \\ 5 & 1 \end{matrix} \right| = 6 \space \to x= \frac{\Delta_x}{\Delta} = \frac{6}{2} = 3$

#### $\Delta_y = \left | \begin{matrix} 3 & 1 \\ 11 & 5 \end{matrix} \right | = 4 \space \to y = \frac{\Delta_y}{\Delta} = 2$

#### $Ç.K = \{(3,2)\}$

---

#### **Örnek**: aşağıdaki denklem sisteminin çözüm kümesini Cramer yönetmiyle bulunuz.