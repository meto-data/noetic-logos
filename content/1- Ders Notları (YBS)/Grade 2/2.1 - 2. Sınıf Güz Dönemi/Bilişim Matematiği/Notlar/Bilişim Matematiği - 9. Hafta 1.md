---
title: Bilişim Matematiği - 9. Ders
type: learning
ders: "[[Bilişim Matematiği]]"
created: "[[2025-12-05]]"
date: 2024-12-05
cssclasses:
  - ders-notu
draft: true
---

<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 5: Logaritma</span> <span>| 05.12.2025</span></h1>



# Logaritmanın Özellikleri


### Özellik 8: [[Zincir Kuralı]]

$$
\boxed{
\LARGE \log_a{\cancel b} \cdot \log_{\cancel b}\cancel c \cdot \log_{\cancel c}d = \log_ad
}
$$

---

### Örnek 16 (Sınavda Çıkabilir):

$$
\large
\begin{array}{}
\log_35 = a, \space \log_52 = b  \\\\  
\text{ise, }\log_{15}20  \text{ ifadesinin a ve b cinsinden değeri nedir?}
\end{array}
$$



#### Çözüm:

$$
\large
\begin{array}{}
\log_{3}5 \cdot \log_{5}2 = a.b \implies \log_32 = ab \\

\Large \frac{ \log_320}{\log_315} = \frac{\log_3 (2^2.5)}{\log_3(3.5)} = \frac{2.\log_32 + \log_35}{1+ \log_35} = \frac{2ab + a}{1+a}
\end{array}
$$

---

### Özellik 9:

$$
\LARGE 
\boxed{a^{\log_ab} = b, \quad a^{\log_bc} = c^{\log_ba}}
$$

---

### Örnek 17:

$$
\large
\begin{array}{}
2^{2+\log_4x} = 16 \implies x =?
\end{array}
$$

#### Çözüm:

$$
\large
\begin{array}{}
2^2 \cdot 2^{\log_4x} = 2^4 \\

2 + \log_{4}x = 4 \\
\log_4x = 2 \implies x = 16

\end{array}
$$

---

### Örnek 18:

$$
\Large
3^{\log_9x} + (\sqrt3)^{\log_3x} -4 = 0 \implies x =?
$$

#### Çözüm:

$$
\large
\begin{array}{l}
3^{\frac{1}{2} \cdot \log_3x} + \sqrt{3}^{\log_3x} = 4 \\
 \quad \to \quad\sqrt{3}^{\log_3x} = 3^{\Large \frac{1}{2}^{\log_3x}} = 3^{\frac{1}{2} \cdot\log_3x} \\
 \quad \to \quad\frac{1}{2} \cdot \log_3x = \log_3{\sqrt{x}} \\
 2\cdot3^{\log_3{\sqrt{x}}} = 4 \implies 3^{\log_3{\sqrt{x}}} = 2 \\ \\
 \sqrt{x} = 2 \implies \boxed{x =4}

\end{array}
$$


---

### Örnek 19

$$
\Large \log_23 \times \log_34 \times   \dots   \times \log_{63}64 = ? 
$$

#### Çözüm:

$$
\large
\log_264 = 6
$$

<br>

> Bkz. [[Zincir Kuralı]]


---

### Örnek 20 

$$
\Large
f(x) = 3^{x-1} \implies f^{-1}(x) =? 
$$

#### Çözüm:

$$
\large
\begin{array}{l}
y =3^{x-1} \implies \log_3 y = \log_3{3^{x-1}}\\ 
\log_3y = (x-1) \times 1 \implies x = \log_3y+1 \\
f^{-1}(x) = \log_3x +1
\end{array}
$$

---

### Örnek 21:

$$
\Large
f(x) = \log_4(2x-1) \implies f^{-1}(x) = ?
$$

#### Çözüm:

$$
\large
\begin{array}{l}
y = \log_4(2x-1) \implies 4^y = 2x-1 \\
4^y+1 = 2x \implies \frac{4^y+1}{2} = x \\
\qquad f^{-1}(x) = \frac{4^x+1}{2}
\end{array}
$$

---

