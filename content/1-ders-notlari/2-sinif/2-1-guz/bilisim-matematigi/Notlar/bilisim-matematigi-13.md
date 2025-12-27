---
title: Bilişim Mat. - 13. Ders
type: ogrenis
ders: "[[Bilişim Matematiği]]"
created: 2025-12-26
date: 2025-12-26
cssclasses:
  - ders-notu
draft: false
---
<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 6: Diziler ve Seriler</span> <span>| 25.12.2025</span></h1>

<h2 style=" text-align:center">Seriler</h2>

### Aritmetik Seri

$$
\large 
S_n = \frac{n}{2} \left[2a_1 + (n-1) \cdot r\right]
$$

### Geometrik Seri 

$$\large S_n = a_1 \cdot \frac{1-r^n}{1-r}$$

---

### **Örnek 1**:

$$
\large
\sum_{k=1}^{\infty}{\frac{4^{k+1}}{5^k}} = \space ?
$$

#### Çözüm:

$$
\begin{aligned}{}
&\frac{4^2}{5} + \frac{4^3}{5^2} + \dots + \frac{4^{k+1}}{5^k} + \dots \\ \\
&\frac{4^2}{5} \left(\frac{4}{5} + \left(\frac{4}{5}\right)^2 + \dots +\right)  \\ \\
&a_1 = \frac{4^2}{5}, \quad r = \frac{4}{5} \\ \\
&S_n = \frac{4^2}{5} \cdot \frac{1-\frac{4}{5}^n}{1-\frac{4}{5}} = \frac{4^2}{5} \cdot \frac{1-\frac{4}{5}^{\infty}}{\frac{1}{5}} \\
&\mathbf{S_n = \frac{4^2}{5} \cdot \frac{1- \cancel{\frac{4}{5}^{\infty}}^0}{\frac{1}{5}} = \frac{4^2}{5} \cdot 5 = \boxed{16}}
\end{aligned}
$$


### Örnek 2:
80 metre yükseklikten serbest bırakılan bir lastik top, bir önceki yüksekliğinin $\frac{2}{3}$'ü kadar zıplıyor. Topun duruncaya kadar aldığı tüm zıplamaların toplamı kaçtır?

#### Çözüm:
$$
\begin{aligned}{}
& 80 + 80 \cdot\frac{2}{3} + 80 \cdot \left(\frac{2}{3}\right)^2 \\
& 80 \left( 1 + \frac{2}{3} + \left(\frac{2}{3}\right)^2 + \dots + \right) \\ \\
&a_1 = 80 \\
& r = \frac{2}{3} \\ \\
&S_n = 80 \cdot \frac{1-\frac{2}{3}^\infty}{1-\frac{2}{3}} = 80 \cdot \frac{1-0}{\frac{1}{3}} \\ \\
&\mathbf{S_n = 80 \cdot 3 = 240}
\end{aligned}
$$

### **Örnek 3**:

$$
\large 
1<x<y \implies \sum_{n=1}^{\infty}{\left(\frac{3x}{4y}\right)^{n-1}} = \space ?
$$

#### Çözüm:

$$
\begin{aligned}{}
&a_1 = \left(\frac{3x}{4y}\right)^0 = 1 &&\\[10pt] 
&1 + \left(\frac{3x}{4y}\right) + \left(\frac{3x}{4y}\right)^2 + \dots +  &&\\[10pt]
&1\left(\frac{3x}{4y}+ \left(\frac{3x}{4y}\right)^2 + \dots +  \right)  &&\\[10pt]
&r = \frac{3x}{4y}  &&\\[10pt]
&S_n = 1 \cdot \left[ \frac{1- \left(\frac{3x}{4y}\right)^\infty}{1- \frac{3x}{4y}} \right] = \frac{1-0}{1- \frac{3x}{4y}}  &&\\[10pt]
&\mathbf{ S_n = \frac{1}{\frac{4y-3x}{4y}} = \frac{4y}{4y-3x}} &&\\[10pt]
\end{aligned}
$$

