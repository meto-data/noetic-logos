### **Örnek 8**: `A`, 2. mertebeden bir kare matris olmak üzere, aşağıdaki eşitlik veriliyor. Buna göre `A` matrisinin tüm elemanlarının toplamını bulunuz.

<br>

$$
\Large
A + A^T = \begin{bmatrix} 4 & 5 \\ 5 & -6 \end{bmatrix}
$$

#### Çözüm Adımları:

$$
\large
\begin{aligned}
A &= \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies A^T = \begin{bmatrix} a & c \\ b & d \end{bmatrix} \\ \\
A + A^T &= \begin{bmatrix} a+a & b+c \\ c+b & d+d \end{bmatrix} = \begin{bmatrix} 2a & b+c \\ b+c & 2d \end{bmatrix} = \begin{bmatrix} 4 & 5 \\ 5 & -6 \end{bmatrix} \\ \\
 &2a = 4 \implies a=2 \\
 &b+c =  5 \\
&2d = -6 \implies d = -3 \\
\end{aligned}
$$

$$
\large \sum{A} = 2 + 5 -3 = 4
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



