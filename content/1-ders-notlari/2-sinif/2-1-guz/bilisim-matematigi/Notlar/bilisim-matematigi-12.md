---
title: Bilişim Mat. - 12. Ders
type: ogrenis
ders: "[[Bilişim Matematiği]]"
created: 2025-12-19
date: 2025-12-19
cssclasses:
  - ders-notu
draft: false
tags:
  - akademi/dersler/bilisim-matematigi
---
<h1 style="text-align:center"><span style="color:lightblue; text-align:center">Ünite 6: Diziler ve Seriler</span> <span>| 19.12.2025</span></h1>

# Geometrik Dizi		
- Dizinin terimleri arasında geometrik bir artış söz konusu ve genel terimi aşağıdaki gibi olan dizilere **geometrik dizi** denir.

$$
\LARGE
\begin{aligned}{}
\boxed{
\space a_n = a_1\cdot {r}^{n-1} \space
} \\\\

\large r= \text{ortak çarpan}
\end{aligned}
$$


---

### Özellik 1: 
- Bir geometrik dizide, başttan ve sondan eşit uzaklıktaki terimlerin çarpımı eşittir.

>-  Söz gelişi, elimizde ortak çarpanı $r=2$ olan ve ilk terimi $a_1= 3$ olarak belirlenmiş 6 terimli bir dizi olsun: $(3, 6, 12, 24, 48, 96)$.
>- Burada kuralın işleyişini şu şekilde gözlemleyebiliriz: <br>
> Baştan 1. ve sondan 1. $\to 3 \cdot 96 = 288$ <br>
> Baştan 2. ve sondan 2. $\to 6 \cdot 48 = 288$ <br>
> Baştan 3. ve sondan 3. $\to 12 \cdot 24 = 288$ <br><br>
> Velhasıl, $1+6 \space (a_1 + a_7) = \quad 2+5 = \quad 3+4 = 7$ olduğu müddet bu çarpımlar asla değişmez.


### Özellik 2:
- Bir geometrik dizide, ardışık iki terim arasındaki ilişki her daim sabittir. Geometrik dizi, bir terimin kendinden önceki terime bölünmesiyle elde edilen "ortak çarpanın" (common ratio) sürekli tekrarıdır.

$$
\Large
\begin{aligned}
&r = \frac{a_2}{a_1} = \frac{a_3}{a_2} = \dots \text{ ile bulunur.} \\ \\
&r = \frac{a_{n+1}}{a_n}
\end{aligned}
$$

### Özellik 3:
- Bir dizide herhangi bir terimin karesi, kendisinden $k$ birim önceki ve $k$ birim sonraki terimlerin çarpımına muadildir; bu da sistemin kendi içine dönük bir denge kurduğunu ispatlar. 
- Daha anlaşılır bir tabirle; 
	- **Geometrik bir dizide herhangi bir terim, kendisine eşit mesafedeki iki terimin *geometrik ortasıdır*; yani o iki terimin çarpımının kareköküne eşittir.**


$$
\Large
\begin{aligned}{}
\space &a_3= \sqrt{a_2 \cdot a_4} = \sqrt{a_1 \cdot a_5} \space \\\\
&a_n = \sqrt{a_{n-k}  \cdot a_{n+k}} \\ \\
(&a_n)^2 = a_{n-k} \cdot a_{n+k}
\end{aligned}
$$


### Özellik 4:

$$
\Large
S_n = a_1 \cdot \frac{1-r^n}{1-r}
$$


---


### **Örnek 16**: Aşağıdaki dizi bir geometrik dizidir.

$$
\Large
\begin{aligned}{}
&(a_n) = (9, 36, 144, \dots) \\ \\
&a_n \text{ ve } a_{23} = \space ?
\end{aligned}
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&a_n = a_1 \cdot r^{n-1} , \quad  r = \frac{a_{n-1}}{a_n} \implies \\ 
&r = \frac{a_2}{a_1} = \frac{36}{9} = 4 \\ \\
&a_n = 9 \cdot 4^{n-1} \\ \\

&a_{23} = 9 \cdot 4^{22}
\end{aligned}
$$

### **Örnek 17**: Aşağıdaki bilgilere göre x ve y değerlerini bulunuz.

$$
\Large
\begin{aligned}{}
&\large x \not = 0, & \\
&x, y, 5x  &\space \large (\text{ aritmetik dizinin ardışık 3 terimi}) \\
&x,y, 6(x-1) &\space \large (\text{ geometrik dizinin ardışık 3 terimi}) \\ \\

\end{aligned}
$$

#### Çözüm:
- Aritmetik dizi bilgisini de burada kullanmamız gerekiyor. Bilindiği üzere, aritmetik dizide bir terime eşit uzaklıktaki 2 terimin toplanması ve ikiye bölünmesi, bize o terimi verir. 
	- Söz gelişi, $\large a_3 = \frac{a_1+ a_5}{2}$ 


$$
\large
\begin{aligned}{}
&y = 3x \space (\text {Aritmetik dizi olduğundan}) \\
& y = \sqrt{x \cdot 6(x-1)} \to \sqrt{6x^2 -6x} \\
& \to y^2 = 6x^2 -6x \text { (Geo.)} \\
& \to y^2 = 9x^2 \text{ (Arit.)}  \\ \\
& 6x^2 -6x = 9x^2 \to \underbrace{3x^2 + 6x}_{3x(x+2)} = 0 \\
& x=-2
\end{aligned}
$$

- $x$, $0$ değerini alamayacağı için, $-2$ dışında bir ihtimal kalmıyor. 


---

### **Örnek 18**: İki terim (`(1/128), (256)`) arasında geometrik dizi oluşturacak şekilde **14** terim yerleştiriliyor. Buna göre istenilen değerleri bulunuz.

$$
\Large
\begin{aligned}{}
a_9 \space \large \text{ ve } S_{10} \large \text{ değerlerini bulun.}
\end{aligned}
$$


#### Çözüm:

$$
\large
\begin{aligned}{}
& \frac{1}{128}, a_2 \dots a_{15}, 256 \\\\
& a_{16}  = 2^{-7} \cdot r^{15} = 256  \\
& 2^8 = 2^{-7} \cdot r^{15} \implies \boxed{r = 2} \\ \\
& a_9 = 2^{-7} \cdot 2^8 = 2 \\ \\
& S_{10} = 2^{-7} \cdot \frac{1-2^{10}}{1-2} = 2^{-7} \cdot \frac{1-2^{10}}{-1} \\ 
&S_{10} =  \frac{1}{128} \cdot 2^{10} -1 = \boxed{\frac{2^{10} -1}{2^7}}
\end{aligned}
$$

---

### **Örnek 19**: Bir geometrik dizide;

$$
\Large
a_7 = 6 \implies \sqrt{a_{11} \cdot a_9 \cdot a_5 \cdot a_3} = \space ?
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&a_7 = \sqrt{a_{11} \cdot a_9} = \sqrt{a_5 \cdot a_3} \\
&6 = \sqrt{36} \implies \sqrt{36 \cdot 36} = \sqrt{36^2} = \boxed{36}
\end{aligned}
$$

---

### **Örnek 20**: Aşağıdaki dizi, hem aritmetik hem de geometrik bir dizinin ardışık 3 terimidir. Buna göre `a+b+c` değerini bulunuz.


$$
\Large
a^2+b^2, 4a-4, a\cdot c
$$

#### Çözüm:

$$
\large
\begin{aligned}{}
&4a-4 = \frac{a^2+b^2 + a\cdot c}{2} \\
&4a-4 = \sqrt{(a^2+b^2) \cdot ac} \\ \\
& k = a^2+b^2 \\ \\
&\sqrt{kac} = \frac{k +ac}{2} \implies kac = \frac{k^2 + 2kac +  a^2c^2}{4} \\ \\
& 4kac = k^2 + 2kac +a^2c^2 \to \underbrace{k^2}_{\substack{k \\k}} -2kac + \underbrace{a^2c^2}_{\substack{-ac \\ -ac}} \\ 
& (k-ac)^2 = 0 \implies k=ac = \boxed{a^2+b^2 = ac} \\ \\
\end{aligned}
$$


- $1$. terim ile $3$. terim aynı çıktığından, hem aritmetik hem de geometrik dizi <u>oluşturmaz.</u> Bu hâliyle, $\boxed{a^2+b^2+c^2} = \text{ tanımsızdır.}$


- **Not**: Hoca kuvvetle muhtemel yanlış biliyor. Bu dizi bir sabit dizidir ve cevabın "4" olması gerekir, en azından neredeyse tüm *dil modelleri* (**ChatGPT-5.2-extended-thinking**, **Claude 4.5 Opus**, **Gemini 3.0 Pro**, **Grok 4**, **Kimi K2 Thinking**, **Kimi OK Computer** ve **Copilot**) bu konuda hemfikir. Evet, erinmedim, hepsine teyit ettirdim. 
- Nitekim sınavda sorulursa mecburen hocanın yaptığı gibi yapmak gerekiyor, ancak hakîkati otoriteye kurban etmemeli. Asıl çözüm şöyle yapılmalıydı:

- $1$. ve $3.$ terim birbirine eşitse, o hâlde $2$. terim de bunlara eşit olmalıdır ($a_2 = \frac{a_1+a_3}{2})$, bu durumda bu dizi bir **sabit dizi**dir.

$$
\large
\begin{aligned}{}
&a^2+b^2 = 4a-4 \implies a^2-4a+4 = -b^2 \\
&(a-2)^2 +b^2 = 0 \implies a= 2 , b=0 \\
& 4a-4 = ac \implies 4 = 2c, c=2 \\
&a+b+c = 2+0+2 = 4
\end{aligned}
$$


- $a_n = 4 + (n-1) \cdot 0 = 4$ (*Aritmetik*)
- $a_n = 4 \cdot 1^{n-1} = 4$ (*Geometrik*)

---


### **Örnek 21**: Aşağıdaki dizi bir geometrik dizi olmak üzere;

$$
\Large
\begin{aligned}{}
S_5 = 18 , \quad S_{10} = 594 \implies a_{10} = \space ?
\end{aligned}
$$

#### Çözüm:

##### `r` değerini bulmak için iki yol var. 

$$
\large
\begin{aligned}{} 
\text{1. Yol:} \\ \\
&S_{5} = a_1 + a_2 + a_3 + a_4 + a_5 \\
&S_{10} = S_5 + a_6 + \dots + a_{10} \\
&a_6 = \mathbf{a_1 \cdot r^5} \\
&a_7 = a_1 \cdot r^6 =  \mathbf{a_2 \cdot r^5} \quad «a_2 = a_1 \cdot r» \\ \\
&S_{10} = S_5 + (\mathbf{r^5 \cdot S_5}) = 18 + 18r^5 \\
&594 = 18(1 + r^5) \implies 33 = 1+ r^5 \\
&r^5 = 32\space, \quad \boxed{\mathbf{r=2}} \\ \\
\text{2. Yol: } \\

&\begin{aligned}{}
&S_5 = a_1 \cdot \frac{1-r^5}{1-r} = 18 \\ 
&S_{10} = a_1 \cdot \frac{1-r^{10}}{1-r} =594 \\  
\end{aligned} \text{ (Böl)}= \frac{1-r^5}{1-r^{10}} = \frac{1}{33}   \\
&33 (1- r^5) = 1-r^{10} \quad \boxed{r^5 = k} \\
&33 -33k = 1-k^2 \\
&\underbrace{k^2}_{\substack{k \\ k}}-33k +\underbrace{32}_{\substack{-32 \\ -1}} = 0 \\ \\
&(k-32)(k-1) = 0 \to \quad (r^5-32)(r^5-1) = 0, \space &r \not = 1 \\ \\
&« r=1 \text{ olursa payda } 0 \text{ olacağından, } \mathbf{r \neq 1} \text{»}
\\
& \mathbf{\boxed{\mathbf{r = 2}}} \\ \\ 
\hline
\\

&18 = a_1 \cdot \frac{1-2^5}{-1} = a_1 \cdot (31)  \implies \boxed{a_1 = \frac{18}{31}} \\ \\
&a_{10} = \frac{18}{31} \cdot 2^{9}
\end{aligned}
$$
