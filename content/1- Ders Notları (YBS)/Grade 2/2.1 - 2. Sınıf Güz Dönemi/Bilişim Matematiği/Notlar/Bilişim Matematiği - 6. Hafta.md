---
title: Bilişim Matematiği - 6. Hafta
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

#### $A= \begin{bmatrix} \boxed{-1} & 4 & 2 \\ \frac{1}{5} & \boxed{5} & -3 \\ -2 & -5 & \boxed{4} \end{bmatrix}_{3 \times 3}$


- Kutu içerisine alınanlar **asal köşegen**'dir.

---

### b) **Sıfır Matrisi**
- Tüm elemanları 0 olan matrislere denir.

#### $B= \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$

---

### c) **Birim Matris** ($I$) - (Önemli)
- Bir <u>kare matris</u> üzerinde *asal köşegen üzerindeki* elemanların hepsi **1** ve diğer elemanlar **0**'sa, bu matrise **birim matris** denir.

#### $$C = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \space \space \space \space \space I= \begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1  \end{bmatrix}$$

---

### d) **Simetrik Matris**
- Bir <u>kare matriste</u> tüm elemanlar **asal köşegene göre simetrik** ise, bu matrise *simetrik matris* denir.

#### $\begin{bmatrix} 1 & \boxed{-5} & \boxed{3} \\ \boxed{-5} & 4  & \boxed{2} \\ \boxed{3} & \boxed{2} & 7 \end{bmatrix}$


---

### e) **Ters Simetrik Matris**
- Bir <u>kare matrisin</u> **asal köşegeni üzerindeki** elemanları **0** VE asal köşegene göre *simetrik* olan elemanlarının toplamı **0** İSE, bu matris **ters simetrik** matristir.


#### $E = \begin{bmatrix} \space \space 0  & 5 \\ -5 & 0 \end{bmatrix} \space \space \space \space T= \begin{bmatrix} \space \space 0 & \space \space 5 & 4 \space \\ -5 & \space \space 0 & 3 \space \\ -4 & -3 & 0 \space \end{bmatrix}$

---

### f) **Köşegen Matris**

- Bir <u>kare matriste</u> *asal köşegen dışında kalan tüm elemanlar* **0** İSE, bu matise köşegen matris denir.

#### $F = \begin{bmatrix} 3 & 0 \\ 0 & 4 \end{bmatrix} \space\space\space\space K= \begin{bmatrix} -5 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 3\end{bmatrix}$




> [!important] Not
> Sınavda $4 \times 4$  bir köşegen matris oluşturun, $3 \times 3$ ters simetrik matris oluşturun $\dots$ gibi sorular gelebilir.


---

### g) **Skaler Matris** (Önemli)
- Bir <u>köşegen matriste </u> **asal köşegen üzerindeki tüm elemanlar aynı** *İSE*, bu matris skaler matristir.

#### $3I = \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{bmatrix}$


---

## Bir Matrisin Skalerle Çarpımı

### $A= \begin{bmatrix} 1 & 2 & -2 \\ 6 & -1 & 3 \end{bmatrix} \implies$
#### a) $3A$ matrisini oluşturun.

##### $3A = \begin{bmatrix} 3 & 6 & -6 \\ 18 & -3 & 9 \end{bmatrix}$


#### b) $-2A$ matrisini oluşturun.

##### $-2A = \begin{bmatrix} -2 & -4 & 4 \\ -12 & 2 & -6 \end{bmatrix}$


#### c) $\frac{A}{2}$ matrisini oluşturun.

##### $\frac{A}{2}= \begin{bmatrix} \frac{1}{2} & 1 & -1 \\ 3 & \frac{-1}{2} & \frac{3}{2} \end{bmatrix}$


---


## Matrislerin Toplanması ve Çıkarılması
- Aynı türden 2 matris, karşılıklı elemanların toplanması veya çıkartılması şeklinde, toplama ve çıkarma işlemine tâbi tutulabilir.

### $A= \begin{bmatrix} -2 & 5 \\ 4 & -3 \\ 7 & \frac{5}{2}\end{bmatrix} \space\space\space\space B= \begin{bmatrix} -3 & -6 \\ -5 & 4 \\ -8 & \frac{7}{2} \end{bmatrix} \implies$

#### a) $2A+3B$ 
##### $= \begin{bmatrix} -4 & 10 \\ 8 & -6 \\ 14 & 5 \end{bmatrix} + \begin{bmatrix} -9 & -18 \\ -15 & 12 \\ -24 & \frac{21}{2} \end{bmatrix} = \begin{bmatrix} -13 & -8 \\ -7 & 6 \\ -10 & \frac{31}{4} \end{bmatrix}$


#### b) $3B-A$
##### $= \begin{bmatrix} -9 & -18 \\ -15 & 12 \\ -24 & \frac{21} {2} \end{bmatrix} + \begin{bmatrix} 2 & -5 \\ -4 & 3 \\ -7 & \frac{-5}{2} \end{bmatrix} = \begin{bmatrix} -7 & -23 \\ -19 & 15 \\ -31 & 8 \end{bmatrix}$

---




### Örnek (<span style="color:darkred">Sınavda çıkabilir</span>): <br>$A=\begin{bmatrix} 1 & -4 \\ 2 &  \space3 \end{bmatrix} \space \land  \space f(x) = 3x-2 \implies f(A) = ?$
#### $f(A) = 3A -2I$
#### $\space = \begin{bmatrix} 3 & -12 \\ 6 & \space \space 9 \end{bmatrix} - \begin{bmatrix} 2 & 0 \\ 6 & 2 \end{bmatrix} = \begin{bmatrix} 1 & -12 \\ 6 & \space \space 7 \end{bmatrix}$


---

### **Örnek**:<br> $a.\begin{bmatrix} 3 \\ 4  \end{bmatrix} + 2. \begin{bmatrix} 1 \\ b \end{bmatrix} = \begin{bmatrix} 8 \\ 0\end{bmatrix} \implies a \times b =?$

#### $\begin{bmatrix} 3a \\ 4a \end{bmatrix} + \begin{bmatrix} 2 \\ 2b \end{bmatrix} = \begin{bmatrix} 8 \\ 0 \end{bmatrix}$
#### $\to \space \space  3a+2=8 \land 4a+2b = 0$<br>$\space \to \space \space \space  3a=6 \implies a=2$<br>$\space \space \to \space \space \space \space 8+2b = 0 \implies b=-4 \space$<br>$\space \space \space \to \space \space \space \space  \boxed{a.b = -8}$



---

## Matrislerin Çarpımı
- İki matrisin çarpılabilmesi için;
	1. Boyutları <u>uygun</u> olmalı $(m \times \underline{n}).(\underline{n} \times k) = (m \times k)$
	2. Matrisler çarpılırken **"satır $\times$ sütun, yaz satıra"** mantığı kullanılmalı.

### **Örnek**:<br>$A= \begin{bmatrix} -2 & 4 \\ \space 3 & 5 \end{bmatrix}_{2 \times 2} \space \space \space \space B= \begin{bmatrix} -2 & 4 & \space 3 \\ \space 1 & 5 & -1 \end{bmatrix}_{2\times 3}$



 
#### 
$$ A= 
\begin{bmatrix}
\colorbox{blue}{$-2 \quad 4$} \\
\colorbox{purple}{$ \space 3 \quad 5 \space \space$}
\end{bmatrix} \times 
\begin{bmatrix}
\colorbox{green}{$-2$} & \colorbox{gray}{$\space \space 4 \space \space$} & \colorbox{green}{$\space \space 3 \space \space$} \\
\colorbox{green}{$\space \space 1 \space$} & \colorbox{gray}{$\space \space 5 \space \space$} & \colorbox{green}{$-1 \space$}
\end{bmatrix}
$$


###### $A \times B = \begin{bmatrix} [(-2 \times -2) + (4 \times 1)] & [(-2 \times 4)+(4 \times 5)] & [(-2 \times 3)+(4 \times 3)] \\ [(3 \times -2)+(5 \times 1)] & [(3 \times 4)+(5 \times 5)] & [(3 \times 3)+(5 \times -1)] \end{bmatrix}$

#####  $\space = \space \begin{bmatrix} \space\space8 &  12 & -10 \\ -1 & 37 & \space 4  \end{bmatrix}$



![[MatrisCarpim1.mp4]]



