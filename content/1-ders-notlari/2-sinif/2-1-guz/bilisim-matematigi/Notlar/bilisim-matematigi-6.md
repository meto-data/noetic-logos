---
title: Bilişim Matematiği - 6. Ders
type: learning
ders: "[[Bilişim Matematiği]]"
created: "[[2025-10-31]]"
date: 2025-10-31
cssclasses:
  - ders-notu
---
<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 4: Lineer Cebir (Matrisler ve Determinantlar)</span> | <span style="color:#bf3f36">31.10.2025</span></h2>

## Matris Çeşitleri

### a) **Kare Matris**
- Satır ve sütun sayısı birbirine eşit olan matrislerdir.

$$
\Large
A= \begin{bmatrix} \boxed{-1} & 4 & 2 \\ \frac{1}{5} & \boxed{5} & -3 \\ -2 & -5 & \boxed{4} \end{bmatrix}_{3 \times 3}
$$
- Kutu içerisine alınanlar **asal köşegen**'dir.

---

### b) **Sıfır Matrisi**
- Tüm elemanları 0 olan matrislere denir.
$$
\Large
B= \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}
$$
---

### c) **Birim Matris** (`I`) - (Önemli)
- Bir <u>kare matris</u> üzerinde *asal köşegen üzerindeki* elemanların hepsi **1** ve diğer elemanlar **0**'sa, bu matrise **birim matris** denir.
$$
\Large
C = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \space \space \space \space \space I= \begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1  \end{bmatrix}
$$
---

### d) **Simetrik Matris**
- Bir <u>kare matriste</u> tüm elemanlar **asal köşegene göre simetrik** ise, bu matrise *simetrik matris* denir.

$$
\Large
\begin{bmatrix} 
1 & \boxed{-5} & \boxed{3} \\ \boxed{-5} & 4  & \boxed{2} \\
\boxed{3} & \boxed{2} & 7 
\end{bmatrix}
$$


---

### e) **Ters Simetrik Matris**
- Bir <u>kare matrisin</u> **asal köşegeni üzerindeki** elemanları **0** VE asal köşegene göre *simetrik* olan elemanlarının toplamı **0** İSE, bu matris **ters simetrik** matristir.

$$
\Large
E = 
\begin{bmatrix} 
\space \space 0  & 5 \\ -5 & 0 
\end{bmatrix} 
\space \space \space \space 
T= 
\begin{bmatrix} 
\space \space 0 & \space \space 5 & 4 \space \\ 
-5 & \space \space 0 & 3 \space \\ 
-4 & -3 & 0 \space 
\end{bmatrix}
$$
---

### f) **Köşegen Matris**

- Bir <u>kare matriste</u> *asal köşegen dışında kalan tüm elemanlar* **0** İSE, bu matrise köşegen matris denir.
$$
\Large
F = \begin{bmatrix} 3 & 0 \\ 0 & 4 \end{bmatrix} \space\space\space\space K= \begin{bmatrix} -5 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 3\end{bmatrix}
$$

> [!important] Not
> Sınavda $4 \times 4$  bir köşegen matris oluşturun, $3 \times 3$ ters simetrik matris oluşturun $\dots$ gibi sorular gelebilir.

---

### g) **Skaler Matris** (Önemli)
- Bir <u>köşegen matriste </u> **asal köşegen üzerindeki tüm elemanlar aynı** *İSE*, bu matris skaler matristir.

$$
\Large
3I = \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{bmatrix}
$$
---

## Bir Matrisin Skalerle Çarpımı

### **Örnek 1**:
$$
\Large
A= \begin{bmatrix} 1 & 2 & -2 \\ 6 & -1 & 3 \end{bmatrix}
$$
#### a) $3A$ matrisini oluşturun.

##### $$3A = \begin{bmatrix} 3 & 6 & -6 \\ 18 & -3 & 9 \end{bmatrix}$$

#### b) $-2A$ matrisini oluşturun.

##### $$-2A = \begin{bmatrix} -2 & -4 & 4 \\ -12 & 2 & -6 \end{bmatrix}$$

#### c) $\frac{A}{2}$ matrisini oluşturun.

##### $$\frac{A}{2}= \begin{bmatrix} \frac{1}{2} & 1 & -1 \\ 3 & \frac{-1}{2} & \frac{3}{2} \end{bmatrix}$$
---

## Matrislerin Toplanması ve Çıkarılması
- Aynı türden 2 matris, karşılıklı elemanların toplanması veya çıkartılması şeklinde, toplama ve çıkarma işlemine tâbi tutulabilir.

### **Örnek 2**:
$$
\Large
A= \begin{bmatrix} -2 & 5 \\ 4 & -3 \\ 7 & \frac{5}{2}\end{bmatrix} \space\space\space\space B= \begin{bmatrix} -3 & -6 \\ -5 & 4 \\ -8 & \frac{7}{2} \end{bmatrix}
$$
#### a) `2A+3B` matrisini bulunuz.
##### $$ = \begin{bmatrix} -4 & 10 \\ 8 & -6 \\ 14 & 5 \end{bmatrix} + \begin{bmatrix} -9 & -18 \\ -15 & 12 \\ -24 & \frac{21}{2} \end{bmatrix} = \begin{bmatrix} -13 & -8 \\ -7 & 6 \\ -10 & \frac{31}{2} \end{bmatrix}$$
#### b) `3B-A` matrisini bulunuz.
##### $$= \begin{bmatrix} -9 & -18 \\ -15 & 12 \\ -24 & \frac{21} {2} \end{bmatrix} - \begin{bmatrix} -2 & 5 \\ 4 & -3 \\ 7 & \frac{5}{2} \end{bmatrix} = \begin{bmatrix} -7 & -23 \\ -19 & 15 \\ -31 & 8 \end{bmatrix}$$
---

### **Örnek 3:**

$$
\Large
A=\begin{bmatrix} 1 & -4 \\ 2 &  \space3 \end{bmatrix} \space \land  \space f(x) = 3x-2 \implies f(A) = ?
$$

#### Çözüm Adımları:

$\large f(A) = 3A -2I$ 

<br>

 $\large \space = 3\begin{bmatrix} 1 & -4 \\ 2 &  \space3 \end{bmatrix} - 2\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 3 & -12 \\ 6 & \space \space 9 \end{bmatrix} - \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 1 & -12 \\ 6 & \space \space 7 \end{bmatrix}$

---

### **Örnek 4**:
$$
\Large
a \cdot \begin{bmatrix} 3 \\ 4  \end{bmatrix} + 2 \cdot \begin{bmatrix} 1 \\ b \end{bmatrix} = \begin{bmatrix} 8 \\ 0\end{bmatrix} \implies a \times b =?
$$
#### Çözüm Adımları:

<br>

$\large \begin{bmatrix} 3a \\ 4a \end{bmatrix} + \begin{bmatrix} 2 \\ 2b \end{bmatrix} = \begin{bmatrix} 8 \\ 0 \end{bmatrix}$

$\large \to \space \space  3a+2=8 \land 4a+2b = 0$ <br>

$\large \to \space \space \space  3a=6 \implies a=2$<br>
$\large \to \space \space \space \space 4(2)+2b = 0 \implies 8+2b = 0 \implies b=-4 \space$ <br>

$$
\Large\to \space \space \space \space  \boxed{a \cdot b = -8}
$$
---

## Matrislerin Çarpımı
- İki matrisin çarpılabilmesi için;
	1. Boyutları <u>uygun</u> olmalı $(m \times \underline{n}) \cdot (\underline{n} \times k) = (m \times k)$
	2. Matrisler çarpılırken **"satır $\times$ sütun, yaz satıra"** mantığı kullanılmalı.

### **Örnek 5**:

$$
\Large
A= \begin{bmatrix} -2 & 4 \\ \space 3 & 5 \end{bmatrix}_{2 \times 2} \space \space \space \space B= \begin{bmatrix} -2 & 4 & \space 3 \\ \space 1 & 5 & -1 \end{bmatrix}_{2\times 3} \implies A \times B=?
$$
#### Çözüm Adımları:
<br>

$\large A \times B = \begin{bmatrix} -2 & 4 \\ 3 & 5 \end{bmatrix} \times \begin{bmatrix} -2 & 4 & 3 \\ 1 & 5 & -1 \end{bmatrix}$


<br>
<br>


$\large \to \begin{bmatrix} [(-2 \cdot -2) + (4 \cdot 1)] & [(-2 \cdot 4)+(4 \cdot 5)] & [(-2 \cdot 3)+(4 \cdot -1)] \\ [(3 \cdot -2)+(5 \cdot 1)] & [(3 \cdot 4)+(5 \cdot 5)] & [(3 \cdot 3)+(5 \cdot -1)] \end{bmatrix}$

$$
\to \Large \begin{bmatrix} \space\space8 &  12 & -10 \\ -1 & 37 & \space 4  \end{bmatrix}
$$

![[1-MatrixMultiplicationStepByStep.mp4]]

---

### Örnek 6:
$$
\Large
A = \begin{bmatrix} -2 & -4 & 1 \\ 3 & 2 & -1 \end{bmatrix} \space \space \space B= \begin{bmatrix} 3 & -8 \\ 4 & 1 \\ -1 & 2 \end{bmatrix} \implies A \times B = ?
$$

#### Çözüm Adımları:
$$
\large
A \times B = \begin{bmatrix} -23 & 14 \\ 18 & -24  \end{bmatrix}
$$
---

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



---

## Bir Matrisin Transpozu (Devriği)
- A matrisi $(m \times n)$ boyutunda ise, A'nın transpozu $(A^T)$,  $(n \times m)$ boyutundadır.
$$
\Large
A = \begin{bmatrix} -2 & 5 & 3 \\ 4 & 7 & -1 \end{bmatrix}_{2 \times 3} \implies A^T = \begin{bmatrix} -2 & 4 \\ 5 & 7 \\ 3  & -1 \end{bmatrix}_{3 \times 2}
$$
---


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
