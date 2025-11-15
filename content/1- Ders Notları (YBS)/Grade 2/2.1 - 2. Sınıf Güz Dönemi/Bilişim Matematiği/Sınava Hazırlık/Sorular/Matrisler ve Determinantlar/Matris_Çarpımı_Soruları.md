### **Örnek 7**: 
<br>

$$
\Large
A= \begin{bmatrix}  \space 2 & \space 3 \\ -4 & -2 \end{bmatrix} \implies A^{17} = ?
$$
#### Çözüm Adımları:
$$
\large
\begin{aligned}
A^2 &= A \times A = \begin{bmatrix}  \space 2 & \space 3 \\ -4 & -2 \end{bmatrix} \times\begin{bmatrix}  \space 2 & \space 3 \\ -4 & -2 \end{bmatrix} = \begin{bmatrix} -8 & 0 \\ 0 & -8 \end{bmatrix} = -8I \\ \\
A^{17} &= A^{16} \times A = (A^2)^8 \times A = (-8I)^8 \times A \\ \\
&= \left[(-8)^8 \times I^8 \times A\right] = \left[ 8^8 \times I \times A \right] = 8^8 A = (2^3)^8A \\ \\
&= (2^3)^8 A = 2^{24} A = 2^{24} \begin{bmatrix} 2 & 3 \\ -4 & -2 \end{bmatrix} = \begin{bmatrix} 2^{25} & 3 \cdot 2^{24} \\ -2^{26} & -2^{25} \end{bmatrix}
\end{aligned}
$$



