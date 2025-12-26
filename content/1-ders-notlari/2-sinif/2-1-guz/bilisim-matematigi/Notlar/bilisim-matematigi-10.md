---
title: Bilişim Matematiği - 10. Ders
type: learning
ders: "[[Bilişim Matematiği]]"
created: 2025-12-18
date: 2024-12-05
cssclasses:
  - ders-notu
draft: false
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



<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 6: Diziler ve Seriler</span> <span>| 05.12.2025</span></h1>


###### $f: \mathbb{N}^+ \to \mathbb{R}$ olarak tanımlanan her fonksiyona bir **reel sayı dizisi** denir.

$$
\Large
\boxed{
\begin{array}{l}
f_1 = a_1 &&&& a_n = (a_1, a_2, a_3 \dots a_n \dots) \\
f_2 = a_2 &&&& a_1 = \text{\large Dizinin ilk terimi} \\
f_3 = a_3 &&&& a_n = \text{\large{Dizinin genel terimi}} \\
\space \vdots \quad \quad\vdots &&&& S_n = \text{\large Dizinin ilk n teriminin toplamı} \\
f_n = a_n &&&&  \boxed{\text{\large Diziler genel terimi ile tanımlanırlar.}}
\end{array}}
$$


---

### Örnek 1:

$$
\Large
\begin{aligned}{}
(a_n)= \left(\frac{2n-1}{n-3}\right) \\ \\

a) \space a_1 = \space ? \\
b) \space a_{2n} = \space ? \\
c) \space S_3 = \space ?
\end{aligned}
$$

#### Çözüm:

$$
\large
\begin{aligned}
&a_1 = \frac{2-1}{-2} = -\frac{1}{2} \\  
&a_{2n} = \frac{4n-1}{2n-2} \\ 
&S_3 = \left(-\frac{1}{2} -3 + \frac{5}{0} \right) = \text{Tanımsız} 
\end{aligned}
$$

---

### Örnek 2: 

$$
\Large
\begin{aligned}
(a_n) = 
\begin{cases}
2n-1,& \text{ n çift ise} \\  \\
2n,& \text{ n tek ise}
\end{cases}
\end{aligned} \implies a_2 + a_3 =?
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
a_2 = 3, \quad a_3 = 6 \\
a_2 + a_3 = 9
\end{aligned}
$$

---

### Örnek 3 (Önemli): Aşağıdaki ifadenin kaç terimi tam sayıdır?

$$
\Large
\begin{array}{}
(a_n) = (\frac{2n-8}{n+1})  
\end{array}
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&(a_n) = \frac{(2n+2) -10}{n+1} \\
&(a_n) = 2 - \frac{10}{\underbrace{n+1}_{\substack{\LARGE &10 \\ \LARGE &5 \\  \LARGE &2 \\ \Large &1 \\ \large -&1 \\ -&2 \\ -&5 \\ -&10 }}} \\ \\
&a_n \in \mathbb{N}^+ \text{ olduğundan, }\\ 
&\text{n'in alabileceği değerler: } 9, 4, 1. \\
\end{aligned}
$$


---

### Örnek 4: Aşağıdaki ifadenin kaç terimi 1'den küçüktür?

$$
\Large
(a_n) = \left( \frac{4n+1}{2n+7} \right)
$$


#### Çözüm:

>[!important] Not
>Normalde eşitsizliklerde "içler dışlar çarpımı" yapmak uygun değildir (işaret değişebilir çünkü). ANCAK, burada $n \in \mathbb{N}^+$ olduğu için payda ($2n+7$) kesinlikle pozitiftir. Gönül rahatlığıyla karşıya atabiliriz.


$$
\large
\begin{aligned}{}
\frac{4n+1}{2n+7}<1 \implies  4n+1 < 2n+7 \\
2n <6 \implies n <3, \quad \text{ 2 terim küçüktür.}
\end{aligned}
$$


---

### Örnek: Aşağıdaki dizinin kaç terimi negatiftir?


$$
\Large 
(a_n) = \left( \frac{n-10}{2n-5} \right)
$$

#### Çözüm:

>[!important] Not
>- Bir kesir şu koşullarda negatif olur:
>	1. Pay pozitif payda negatif ise.
>	2. Pay negatif payda pozitif ise.


- Bunu kafadan hesaplamak bir nevi amelelik olacağı için "işaretler tablosu" (sign chart) denilen haritalama yöntemi ile bunu yaparız.

##### Adım 1: Kökleri (Sınırları) Bul
- Payı sıfırlayan: $n-10 = 0 \implies n = 10$
- Paydayı sıfırlayan: $2n-5 = 0 \implies n=\frac{5}{2}$


##### Adım 2: Tabloyu Çiz. (Sayı doğrusunu bu köklere böleceğiz)

$$
\large 
\begin{array}{c|ccccccccc}
n & - \infty  & \frac{5}{2} &  & 10 & + \infty \\
\hline
\frac{n-10}{2n-5} & + & {\mid\mid} & - & \mid & + \\
\hline
\end{array}

$$

- Eldeki terimler: $3, 4, 5, 6, 7, 8, 9$
	- Toplam 7 terim negatif.


---

### Örnek 6:

$$
\Large
a_1 = 3, \quad a_n = (n+1) + (a_{n-1}) \implies a_{10} = ?
$$


#### Çözüm:

$$
\begin{array}{l}
n=2|& a_2 = \left[3 +  a_1 \right] \implies & a_2-a_1 = 3 \\ 
n=3|& a_3 = \left[ 4 + a_2\right] \implies &a_3-a_2 =  4 \\
n=4 |& a_4 = \left[5 + a_3\right] \implies &a_4-a_3 = 5 \\ 
\vdots & \vdots & \vdots & \\
n=10|& a_{10} = \left[11+ a_9 \right] \implies &a_{10}-a_9 = 11\\
\\ + \\
\hline
& & a_{10} - a_1 = 63, \implies a_{10} = 66
\end{array}
$$

