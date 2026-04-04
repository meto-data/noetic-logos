---
title: Bilişim Mat. - 9. Ders
type: ogrenis
ders: "[[Bilişim Matematiği]]"
created: 2025-11-28
date: 2025-11-28
cssclasses:
  - ders-notu
draft: false
tags:
  - akademi/dersler/bilisim-matematigi
---
<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 5: Logaritma</span> <span>| 28.11.2025</span></h1>



# Logaritmanın Özellikleri

### Özellik 1:

$$
\LARGE
y = log_ax \iff a^y = x
$$

### Özellik 2: 

$$
\LARGE
\log_{a}{1} = 0
$$

### Özellik 3:

#### 3.1. Doğal Logaritma (Natural Log)

$\large \log_{e}x = \ln x$ <br>

${\large e \cong 2,71}$

#### 3.2. Bayağı Logaritma (Common Log)


$\large \log_{10}x = \log x$

---

## Örnekler

### Örnek 6:

$$
\Large
\log_{3}{(\log_{2}x)} = 1 \implies x=?
$$

#### Çözüm::

$$
\large
\log_{3}3 = 1 \implies \log_2x = 3 \quad x=8 
$$

---
### Örnek 7:

$$
\Large
\log10 + \ln e + \log_55 = ?
$$

#### Çözüm::

$$
\large
\log_{10}10 + \log_ee + \log_55 = 1 + 1 + 1 = 3
$$

---

### Örnek 8:

$$
\Large
\log(\ln x) = 0 \implies x =? 
$$

#### Çözüm:

$$
\large

\log_{10}(\log_ex) = 0 \implies \log_ex = 1 \implies \boxed{x=e}
$$


---



### Özellik 4:

$$
\Large
\log_{a^m}{b^n} = \frac{n}{m} .log_ab
$$

---

### Örnek 9:

$$
\Large
\log_{\sqrt 2}2 + \log_{\frac{1}{2}}{4} - \log_381 = ? 
$$

#### Çözüm::

$$
\large
\begin{array}{}
\log_{2^{\frac{1}{2}}}2^1 + \log_{2^{-1}}{2^2} - 4 \\
\frac{1}{\frac{1}{2}}.1 + (-2.1) - 4  = 2 -2 -4 = \boxed{-4}
\end{array}
$$

---


### Örnek 10:

$$
\Large
\log_35 = x \implies \log_9125 = ?
$$

#### Çözüm::

$$
\large
\log_{3^2}{5^3} \to \frac{3}{2}. \log_35 = \frac{3x}{2} 
$$

---

### Özellik 5:

$$
\LARGE
\begin{array}{}
\log_{a}{x.y} = (\log_ax) + (\log_ay)\\
\log_{a}{\frac{x}{y}} = (\log_ax) - (\log_{a}{y})
\end{array}
$$

---

### Örnek 11 (Sınavda Çıkabilir)

$$
\large
\log_{a}{(x+y)} = \log_a(2x) + \log_a(y) \implies \text{ x'in y türünden eşiti nedir?}
$$

#### Çözüm:

$$
\large
\begin{array}{}
&\log_a(x+y) = \log_a(2xy) \\
&x+y = 2xy \\
&y = 2xy-x \\ 
&y= x(2y-1) \\
&x = \frac{y}{2y-1}

\end{array}
$$

---

### Örnek 12

$$
\Large
\log_2{(x-3)} - \log_2 (x-1) = -1 \implies x=?

$$

#### Çözüm:



$$
\large
\begin{array}{}
\log_2{(\frac{x-3}{x-1})} = -1 \implies 2^{-1} = \frac{x-3}{x-1} \\
\frac{1}{2} = \frac{x-3}{x-1} \implies x-1 = 2x-6 \quad \to x=5
\end{array}
$$

---



### Özellik 6: Taban Değiştirme


$$
\LARGE
\begin{array}{}
c \not = 1, \\
log_ab = \frac{log_cb}{log_ca}
\end{array}
$$


---

### Örnek 13
$$
\Large
\begin{array}{}
\log2 = a, \space \log3 = b \implies log_{18}72 \\ \\ \text{ ifadesinin a ve b cinsinden eşiti nedir?}
\end{array}
$$

---

#### Çözüm:



$$
\Large
\begin{array}{}
\log_{18}72 = \frac{\log_{10}72}{\log_{10}18} = \frac{\log_{10}(2^3.3^2)}{\log_{10}{(2^1.3^2)}} \\
\quad \to \frac{3.\log{2} + 2.\log{3}}{\log2 + 2. \log{3}} = \frac{3a+2b}{a+2b}
\end{array} 
$$

---


### Örnek 14


$$
\LARGE
\log_ab = 21, \log_2b = 3 \implies a,b =?
$$

#### Çözüm:

$$
\large
\begin{array}{}
\frac{log_2b}{log_2a} = 21 , \quad \frac{\log_2b}{1} = 3 \\
\log_2b = 3 \implies \boxed{b = 8} \\ \\
21.\log_2a = \log_28 \implies 21.\log_2a = 3 \\ 
\to \log_2a = \frac{3}{21} \implies \log_2a = \frac{1}{7}\\
\boxed{a = 2^\frac{1}{7}}
\end{array}
$$
---

### Özellik 7:

$$
\LARGE
\log_ab = \frac{1}{\log_ba}
$$

---
### Örnek 15:

$$
\large
\begin{array}{}
\log_2x - log_x8 = 2 \implies \text{ x değerlerinin çarpımı nedir?}
\end{array}
$$

#### Çözüm:

$$
\large
\begin{array}{}
\log_x2^3 = 3.\log_x2 = 3.\frac{\Large1}{\Large \log_2x} \\\\
\log_2x - \frac{3}{\Large \log_2x} =2, \qquad \boxed{log_2x = t} \\
t - \frac{3}{t} = 2 \implies t^2-3 = 2t \\
\underbrace{\large t^2}_{\substack{t \\t}}-2t\underbrace{\large - 3}_{\substack{1 \\-3}} = 0 \implies (t-3)(t+1) = 0 \\ \\
t=3, \quad t= -1 \\

\log_2x = 3 \implies x = 8 \\
 \log_2x = -1 \implies x = \frac{1}{2} \\
 \Pi( x) = 8.\frac{1}{2} = 4 
\end{array}
$$

>[!important] Ufak detay.
>Bulunan kökler ($8$ ve $\frac{1}{2}$)  için çözüm geçerlidir. Eğer köklerden biri 1 çıksaydı onu elimizin tersiyle itmemiz gerekecekti. Zira ilk başta $\log_x8$ ifadesi vardı, ancak biz tabanın 0 veya 1 olmayacağını bildiğimizden, taban bu değeri alamazdı.  <br>
>Ayriyeten, "$\Pi (x)$", "bütün x değerlerinin çarpımı" anlamına gelir.
>


