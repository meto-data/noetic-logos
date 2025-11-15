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

$$ 
\large
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



