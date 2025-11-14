---
title: Bilişim Matematiği - 7. Hafta
type: learning
ders: "[[Bilişim Matematiği]]"
created: "[[2025-11-7]]"
date: 2024-11-07
cssclasses:
  - ders-notu
---
<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 4: Lineer Cebir (Matrisler ve Determinantlar)</span> | <span style="color:lightorange">07.11.2025</span></h2>

## Bir Kare Matrisin Tersi

### Temel Formül

$$
\LARGE 
\displaystyle 
\begin{array}{c} 
\boxed{A \times A^{-1} = I} 
\end{array}
$$

---

### Örnek 1:
$$\Large A = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix} \implies A^{-1} = ?$$
#### Çözüm Adımları:

$$
\large
\begin{array}{l}
\begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix} \times \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \\
\\
\to 2a + 3c = 1 \qquad 2b + 3d = 0 \\
\to a \space \space + 2c = 0 \qquad b \space \space + 2d = 1 \\
\\
\quad \to (2a +3c) - (2a + 4c) = 1 \implies -c = 1 \to c = -1 \\
\quad \to (2b +3d) - (2b + 4d) = -2 \implies -d = -2 \to d = 2 \\
\\
\quad \to a + 2(-1) = 0 \implies a = 2 \\
\quad \to b + 2(2) = 1 \implies b = -3 \\
\\
\to \quad A^{-1} = \begin{bmatrix} \space \space 2 & -3 \space \\ -1 & \space \space 2 \space \end{bmatrix}
\end{array}
$$






---

### Örnek 2:
$$\Large \begin{bmatrix} -1 & 3 \\ 2 & -4 \end{bmatrix} \implies A^{-1} = ?$$
#### Çözüm Adımları:

$$
\large
\begin{array}{l}
\begin{bmatrix} -1 & 3 \\ 2 & -4 \end{bmatrix} \times \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \\
\\
\to -a + 3c = 1 \qquad -b + 3d = 0 \\
\to 2a - 4c = 0 \qquad \enspace 2b - 4d = 1 \\
\\
\quad \to c = 1, \quad a = 2 \\
\quad \to 2d = 1 \implies d = \frac{1}{2} \\
\quad \to -b + 3(\frac{1}{2}) = 0 \implies b = \frac{3}{2}
\end{array}
$$




$$
\Large 
A^{-1} = 
\begin{bmatrix} 
2 & \frac{3}{2} 
\\  1 & \frac{1}{2} 
\end{bmatrix}
$$



---

# Determinantlar
- $n \in \mathbb{N^+}$ için, $n$. mertebeden bütün kare matrislerden reel sayılara tanımlı $|A|$ ise, bu tür ifade edilen fonksiyonlara determinant fonksiyonu denir.

## Bir Kare Matrisin Determinantının Alınması (**Saruss Kuralı**)
![[2-Det3x3Sarrus.mp4]]

---

### Örnek 3:

$$
\Large
A = \begin{bmatrix} 11 & -1 & 1 \\ 5 & 2 & -1 \\ 3 & 1 & -2 \end{bmatrix} \implies |A| = ?
$$
#### Çözüm Adımları:


$$
\large \begin{aligned}
& \begin{bmatrix} 11 & -1 & 1 \\ 5 & 2 & -1 \\ 3 & 1 & -2 \\ 11 & -1 & 1 \\ 5 & 2 & -1 \end{bmatrix} \implies \begin{aligned} 
 \space |A| = (-44 + 5 + 3) - (6 -11 +10)  \\ |A| = -36 -5 = -41 \qquad \qquad \quad\end{aligned}
\end{aligned}
$$


---


### Örnek 4:

$$
\Large
A = \begin{bmatrix} 4 & 0 & 5 \\ 3 & 6 & -1 \\ 2 & 0 & -3 \end{bmatrix} \implies |A| = ?
$$


#### Çözüm Adımları:

$$
\large
\begin{aligned}
& \begin{bmatrix} 4 & 0 & 5 \\ 3 & 6 & -1 \\ 2 & 0 & -3 \\ 4 & 0 & 5 \\ 3 & 6 & -1 \end{bmatrix} \implies |A| = (-72 +0+0)-(60+0+0) = -132
\end{aligned}
$$


---

## Doğrusal Denklem Sistemlerinin Determinantlar Yardımıyla Çözümü (**Cramer Yöntemi**)

### **Örnek 5**: Aşağıdaki denklemin çözüm kümesini Cramer yöntemiyle bulunuz. 

<br>


$$
\Large
\begin{array}{c}
\textbf{3x + y = 11} \\
\textbf{x + y = 5}
\end{array}
$$

#### Çözüm Adımları:

<br>

$$ \large
\begin{aligned}
& \Delta = \left| \begin{matrix} 3 & 1 \\ 1 & 1 \end{matrix} \right| = 3-1 = 2 \\
& \\
& \Delta_x = \left| \begin{matrix} 11 & 1 \\ 5 & 1 \end{matrix} \right| = 6 \space \to x= \frac{\Delta_x}{\Delta} = \frac{6}{2} = 3 \\
& \\
& \Delta_y = \left | \begin{matrix} 3 & 1 \\ 11 & 5 \end{matrix} \right | = 4 \space \to y = \frac{\Delta_y}{\Delta} = 2 \\
& \\
\end{aligned}
$$

$$
\large
\text{Ç.K} = \{(3,\,2)\}
$$


---


### **Örnek 6**: Aşağıdaki denklem sisteminin çözüm kümesini Cramer yöntemiyle bulunuz.

<br>

$$
\LARGE
\begin{aligned}
2x-y+z = 11 \\
x  + 2y -z  =   5 \space\space \\
-x +y -2z = 3 \space\space
\end{aligned}
$$


#### Çözüm Adımları:

<br>



$$
\large
\begin{array}{rl}
\Large{\Delta} =&
\left|
\begin{array}{r r r}
2 & -1 & 1\\
1 & 2 & -1\\
-1 & 1 & -2
\end{array}
\right| \\[1pt]
&
\begin{array}{r r r}
\space \space \space \space
2 & -1 & 1\\
1 & 2 & -1 \\
\end{array} 
\end{array}  
\begin{array}{l}
\space \to \space 
(-8 +1 -1) -(-2 -2  +2) \\  
\space \space = -8 +2 = 6
\end{array}
$$



$$
\large
\begin{array}{rl}
\Large{\Delta_x} =&
\left|
\begin{array}{r r r}
11 & -1 & 1\\
5 \space  & 2\space  & -1\\
3 \space  &   1 \space & -2
\end{array}
\right| \\[1pt]
&
\begin{array}{r r r}
\space11 & -1 & 1\\
5 \space  &   2 \space & -1
\end{array}
\end{array}
\begin{array}{l}
\space \to \space (-44 + 5 + 3) - (6 - 11 + 10) \\[10pt]
\quad= -36 - 5 = -41 \\[3pt]
 \quad x = \dfrac{\Delta_x}{\Delta} = \dfrac{-41}{6}
\end{array}
$$

$$
\large
\begin{array}{rl}
\Large{\Delta_y} =&
\left|
\begin{array}{r r r}
2 & 11 & 1\\
1 & 5 & -1\\
-1 & 3 & -2
\end{array}
\right| \\[1pt]
&
\begin{array}{r r r} \space \space \space \space
2 & 11 & 1\\
1 & 5 & -1
\end{array}
\end{array}
\begin{array}{l}
\space \to \space (-20 + 11 + 3) - (-5 - 6 - 22) \\[10pt]
\quad = (-6) - (-33) = 27 \\[3pt]
\quad y = \dfrac{\Delta_y}{\Delta} = \dfrac{27}{-6} = -\dfrac{9}{2}
\end{array}
$$

$$
\large
\begin{array}{rl}
\Large{\Delta_z} =&
\left|
\begin{array}{r r r}
2 & -1 & 11\\
1 & 2 & 5\\
-1 & 1 & 3
\end{array}
\right| \\[1pt]
&
\begin{array}{r r r} \space \space \space \space
2 & -1 & 11\\
1 & 2 & 5
\end{array}
\end{array}
\begin{array}{l}
\space \to \space (12 + 5 + 11) - (-22 + 10 - 3) \\[10pt]
\quad = 28 - (-15) = 43 \\[3pt]
\quad z = \dfrac{\Delta_z}{\Delta} = \dfrac{43}{-6} = -\dfrac{43}{6}
\end{array}
$$


<br>

$$
\large
\text{Ç.K} = 
\left\{ 
\left( 
\dfrac{41}{6},\;
-\dfrac{9}{2},\;
-\dfrac{43}{6} 
\right) 
\right\}
$$



