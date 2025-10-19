---
title: Bilişim Matematiği - 4. Hafta
type: learning
ders: "[[Bilişim Matematiği]]"
created: "[[2025-10-18]]"
tags:
  - ders/bilişim_matematiği
  - ders/bilişim_matematiği/a
date: 2025-10-17
cssclasses:
  - ders-notu
---

<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 3: Taban Aritmetiği</span> | <span style="color:#bf3f36">17.10.2025</span></h2>

## Sayıların Çözümlenmesi

### Onluk Sistemde Çözümleme
#### $\text{abc}$ 3 basamaklı sayısı için;

$$\left(\begin{array}{c@{\;\;}c@{\;\;}c}
a & b & c \\[4pt]
\downarrow & \downarrow & \downarrow \\[4pt]
a\cdot10^2  &+ \space  b\cdot10^1 & \space +c\cdot10^0
\end{array}\right) \to a.10^2 + b.10^1 + c.10^0
$$

### Diğer Sistemlerde Çözümleme
#### $\text{abcd}$ dört basamaklı sayısı için;

$$\left( \begin{array}{c@{\;\;}c@{\;\;}c@{\;\;}c} a & b & c & d \\[4pt] \downarrow & \downarrow & \downarrow & \downarrow \\[4pt] 
a\cdot2^3 &+ \space b\cdot2^2 &+ \space c\cdot2^1 &+ \space d\cdot2^0 \end{array} \right)_2 \to a.2^3 + c.2^1 + b.2^2 + a.2^3$$

---

### **Örnek**: 2 basamaklı $\text{ab}$ sayısı, rakamları toplamının $7$ katından  $9$ fazladır. Bu koşulu sağlayan iki basamaklı $ab$ sayılarının toplamı kaçtır?
##### $ab = 7(a+b) + 9 \to \space ab = 7a+7b+9$
##### $\space \space \to 10a+b = 7a+7b+9 \to \space 3a = 6b+9 $
##### $\space \space \space \space \to \underbrace{a}_{\substack{3\\5\\7\\9}} = 2\times\underbrace{b}_{\substack{0\\1\\2\\3}}+3$
##### $\space \space \space \to 51 + 72 + 93 + 30 = \boxed{246}$ 

---

### **Örnek**: $\text{AB5}$ ve $\text{C38}$ $3$ basamaklı, $\text{AB}$ iki basamaklı doğal sayılardır. $\text{AB5} - \text{AB} = \text{C38}$ ise, $A\times B \times C$ kaçtır?
##### $(100A + 10B + 5) - (10A + B) = 100C + 38$
##### $\to 90A + 9B = 100C + 33$
##### $\space \to 9 (10A+B) = 100C+33$
##### $\space \space \to 9(\underbrace{AB}_{37}) = 100(\underbrace{C}_{3}) + 33$ 
##### $\space \space \space \to A \times B \times C = 3.7.3 = \boxed{63}$

---

## Değişik Tabandan Onluk Tabana Geçiş

#### $$\boxed{\left(abc \right)_d = c.d^0 + b.d^1 + a.d^2}$$

---

### **Örnek**: $(2006)_a = 692 \implies a=?$
##### $6.a^0 + 0.a^1 + 0.a^2 + 2.a^3 = 692 \to 6 + 2a^3 = 692$
##### $\space \space \to a^3 = 343 \implies a=7$

---


## **Not**: $\text{ 10'luk Tabana Geçiş: }$<br><br>$\boxed{(bc,de)_n = b.n^1 + c.n^0 + d.n^{-1} + e.n^{-2}}$


---

### **Örnek**: $(12,34)_5 \stackrel{?}{=} (\space\space\space\space\space\space\space\space\space\space\space)_{10}$
##### $1.^5 + 2.5^0 + 3.5^{-1} + 4.5^{-2} = 7 + \frac{3}{5} + \frac{4}{25}$
##### $\to 7 + \frac{19}{25} = 7 + \frac{76}{100}$
##### $\space \space \to (7,76)_{10}$

---

## 10'luk Tabandan Değişik Tabana Geçiş
### **Örnek**: $(156)_{10} \stackrel{?}{=} (\space\space\space\space\space\space\space)_5$

![[taban1.svg]]
> [!important] **Not** 
> **En son** *kalan*dan itibaren yazılacak. <br> Bu durumda $(156)_{10} = (1111)_5$

---

### **Örnek**: $(155)_6 \stackrel{?}{=} (\space\space\space\space\space\space\space\space)_4$

##### $1.6^2 + 5.6^1 + 5.6^0 = 71_{10}$

![[taban2.svg|550]]

---

## Değişik Tabanlarda Dört İşlem

### a) Toplama 

> [!milestone] Bilgi
> Sadece uyarlama yapılması gerekiyor. $10$'luk sistemde nasıl toplama yapıyorsak bunu 6'lık sisteme uyarlayacağız. 10 olunca elde var demek yerine 6 olunca elde var demek gibi.


#### **Örnek**: $(5241)_6 + (3452)_6 \stackrel{?}{=}$

$$
\begin{array}{c@{}c@{}c@{}c@{}c} & & \boxed{1} & \overbrace{\boxed{1}}^{\text{ Elde var}} & \\[-1mm]  & (5 & 2 & 4 & 1)_6 \\ + & (3 & 4 & 5 & 2)_6 \\ \hline (1 & 3 & 1 & 3 & 3)_6 \end{array}
$$

- Sadece uyarlama yapılması gerekiyor. $10$'luk sistemde nasıl toplama yapıyorsak bunu 6'lık sisteme uyarlayacağız. 10 olunca elde var demek yerine 6 olunca elde var demek gibi.


#### **Örnek**: $(6351)_7 + (4635)_7 \stackrel{?}{=}$

$$
\begin{array}{c@{}c@{}c@{}c@{}c} & & \boxed{1} & \boxed{1} & \\[-1mm]  & (6 & 3 & 5 & 1)_7 \\ + & (4 & 6 & 3 & 5)_7 \\ \hline (1 & 4 & 3 & 1 & 6)_7 \end{array}
$$

---

### b) Çıkarma

#### **Örnek**: $(5423)_6 - (1235)_6 \stackrel{?}{=}$
$$
\begin{array}{c@{}c@{}c@{}c@{}c} &  & 3 & 7 & 9 \space\space\space \\[-1mm]  & (5 & 4 & 2 & 3)_6 \\ - & (1 & 2 & 3 & 5)_6 \\ \hline & (4 & 1 & 4 & 4)_6 \end{array}
$$


#### **Örnek**: $(6524)_7 - (3654)_7 \stackrel{?}{=}$


$$\begin{array}{c@{}c@{}c@{}c@{}c} & \space 5  & 11 & 9 &  \space\space\space \\[-1mm]  & (6 & 5 & 2 & 4)_7 \\ - & (3 & 6 & 5 & 4)_7 \\ \hline & (2 & 5 &  4 & 0)_7 \end{array}
$$

---


### c) Çarpma


#### **Örnek**: $(542)_6 \times (52)_6 \stackrel{?}{=}$


$$
\begin{array}{r}
   &   & (5 & 4 & 3)_6 \\ 
\times &   & & (5 & 2)_6 \\ 
\hline
      & & 1 & 5 & 3 & 0 \space\space &\\  
+   &4 & 4 & 4 & 3 & \\ 
\hline
&  5 & 0 & 4 & 0 &0 \space \space
\end{array}
$$

#### **Örnek**: $(434)_5 \times (24)_5 \stackrel{?}{=}$

$$
\begin{array}{r}
   &   & (4 & 3 & 4)_5 \\ 
\times &   & & (2 & 4)_5 \\ 
\hline
      & & 3 & 4 & 0 & 1 \space\space &\\  
+   &1 & 4 & 2 & 3 & \\ 
\hline
&  2 & 3 & 1 & 3 &1 \space \space
\end{array}
$$

---

#### **Örnek**: $m$ ve $n$ sayı tabanları olmak üzere; <br>$(43)m = (34)_n \implies m+n$ toplamının minimum değeri kaçtır?

- Şu çıkarımı yapmalıyız: $(43)_m$ ve $(34)_n$ ifadelerinde en büyük rakam $4$ olduğu için, tabanın kesinlikle 4'ten büyük olması gerekiyor. Bu durumda  $\boxed{m \land n \ge 5}$


##### $4m + 3 = 3n + 4 \implies 4m-3n = 1$
##### $(4 \times \underbrace{m)}_{\substack{7}} - (3 \times \underbrace{n)}_{9} = 1$

##### $\text{Minimum değer: } 16$

