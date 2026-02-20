---
title: Bilişim Mat. - 8. Ders
type: ogrenis
ders: "[[Bilişim Matematiği]]"
created: 2025-11-7
date: 2025-11-28
cssclasses:
  - ders-notu
draft: true
tags:
  - akademi/dersler/bilisim-matematigi
---
<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 5: Logaritma</span> | <span style="color:lightorange">14.11.2025</span></h2>

## Üstel Fonksiyon

### Aşağıdaki fonksiyona **Üstel Fonksiyon** denir.

$$
\Large
a \in \mathbb{R^+} -\{1\}, \space f: \mathbb{R} \to \mathbb{R}^+, \space f(x) = a^x 
$$

## Logaritma Fonksiyonu
- Üstel fonksiyonun ters fonksiyonuna denir.

$$
\Large
f(x) = a^x \implies f^{-1}(x) = log_{a}x
$$
### Örnek 1

$$
\Large
f: \mathbb{R}\to \mathbb{R}^+, f(x) = 3^{x-1} \implies f^{-1}(x) = ?
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&y=  3^{x-1} \\  
&\log_3y = \log_{3}3^{x-1} &\implies \quad&  \log_{3} y = (x-1). \log_{3}3 \\
 &\log_3y +1 = x  &\implies \quad & f^{-1}(x) = 1+ log_3x 
&\end{aligned}
$$


>[!important] Not
>Üstel fonksiyonlar logaritmik, logaritmik fonksiyonlar da üstel olarak ifade edilebilir.



---

### Örnek 2

$$
\Large
f:\mathbb{R} \to \mathbb{R}^+, f(x) = 5^{x^2-3} \implies f^{-1}(x) = ?
$$


#### Çözüm:

$$
\large
\begin{aligned}
&y=5^{x^2 -3} \\
& \log_{5}y = \log_55^{x^2-3} \implies \log_5 y = x^2-3 \\
& \log_5 y + 3 = x^2 \implies x = \pm \sqrt{log_5 y +3} \\
&f^{-1}(x) = \pm \sqrt{log_5{x} +3}
\end{aligned}
$$

---

## En Geniş Tanım Aralığı (**Önemli**)

$$
\LARGE \log_{h(x)}{g(x)}
$$


##### Yukarıdaki fonksiyonunda şu koşullar sağlanmalıdır:


$$
\large
\begin{aligned}{}
&h(x) > 0\\ &h(x) \not= 1 \\
&g(x)> 0
\end{aligned}
$$



---


### Örnek 3:  Aşağıdaki fonksiyonun en geniş tanım aralığı nedir?

$$
\Large 
y= \log_{9-x}{(x-2)}
$$

#### Çözüm:


$$
\large
\begin{aligned}{}
&9-x > 0, \quad 9-x \not = 1 \\
& x-2 > 0  \\
& \qquad \qquad \implies x <9, \quad x \not =8, \quad x >2 \\
& \qquad \qquad \implies \text{Ç.K} = (2, 9) -\{8\}
\end{aligned}
$$

***

### Örnek 4: 

$$
\Large
f: (2, +\infty) \to \mathbb{R},\quad f(x) = \log_5(x-2) \to f^{-1}(x) = ?
$$


#### Çözüm:

$$
\large
\begin{aligned}{}
&y =  log_5{(x-2)} \\
&5^y = x-2, \quad x= 5^y+2 \\
& f^{-1}(x) =  5^x +2
\end{aligned}
$$

$$
\Large
\boxed{
\begin{aligned}{}
&2^3 = 8 \\ \quad
&log_2^8 = 3 \quad
\end{aligned}}
$$
---

### Örnek 5 (**Finalde Çıkabilir**): Aşağıdaki ifade `R`'de tanımlı ise, `m`'nin en geniş tanım aralığı nedir?

$$
\Large
\begin{aligned}{}
y = log_{3}(x^2 + 4x + 2m -1)
\end{aligned}
$$

---


$$
\LARGE \text{Hatırlatma:} \quad  
\boxed{
\begin{aligned}{} 
\quad \quad &ax^2 + bx + c \quad \quad \\ \\
&\Delta = b^2-4ac
\end{aligned}}
$$



#### Çözüm:

 1. Logaritmanın içi **asla negatif veya sıfır olamaz**. Yani ($x^2+4x+2m-1)>0$ olmak zorundadır.
2. **Sorunun Şartı ("R'de Tanımlı"):** Soru bize diyor ki; *"X yerine ne koyarsan koy, bu ifade hep pozitif kalsın, hiç sıfıra düşmesin, hiç eksiye inmesin."*
3. Bu ifade aynı zamanda bir **Parabol**dür ($x^2$'li ifade). Başındaki sayı pozitif ($+x^2$) olduğu için kolları yukarı bakan ("Gülen Surat") bir grafiktir.
4. Gülen bir suratın **DAİMA POZİTİF** olması (hep $x$ ekseninin üzerinde uçması) için ne gerekir?
	* Yere (x eksenine) **hiç değmemesi** gerekir.
	* (Değerse sıfır olur, altına inerse negatif olur. Biz bunları istemiyoruz.)
5. **Diskriminant ($\Delta$) İlişkisi:**
	* Grafiğin yere değdiği noktalara **"Kök"** denir.
	* Biz yere değmesini **İSTEMİYORUZ**.
	* O hâlde **"KÖK YOK"** demeliyiz.
	* Matematikte "Kök Yok" demenin formülü: $\mathbf{\Delta <0}$ (Diskriminant Negatif).

- **Katsayılar**: $b=4, \quad a=1, \quad c = 2m-1$

$$
\large
\begin{aligned}{}
&\Delta = 16 -4(2m-1) \\
&\Delta = 20 -8m  \\
&\bf{20-8m < 0 \implies 8m > 20 \implies 2m > 5} \\ \\
&\bf{m > \frac{5}{2} \implies m \in \left(\frac{5}{2}, + \infty \right)} 
\end{aligned}
$$


