### **Örnek 1**:  İki basamaklı `ab` sayısı, rakamları toplamının `7` katından `9` fazladır. Bu koşulu sağlayan iki basamaklı `ab` sayılarının toplamı kaçtır?

#### Çözüm Adımları:

$$
\Large
\begin{aligned}{}
ab &= 7(a+b) +9 \\
10a+b &= 7a+7b + 9 \\
3a &= 6b+9 \quad \text{\normalsize (3'e bölelim)} \\
\underbrace{a}_{\substack{3 \\ 5 \\ 7 \\ 9}} &= (\underbrace{b}_{\substack{0 \\ 1 \\2 \\ 3}} \times 2 ) +3 \\  
\end{aligned}{}
$$

$$
\large \mathbf{
\text{\Large Toplam} = 30+51+72+93 = \boxed{246}}
$$



---



### **Örnek 4**: Aşağıdaki sayının onluk tabandaki karşılığını bulunuz.
$$
\Large
(12,34)_5
$$
#### Çözüm Adımları:
$$
\large
\begin{aligned}{}
(12,34)_5 &= 1 \cdot 5^1 + 2 \cdot 5^0 + 3 \cdot 5^{-1} + 4 \cdot 5^{-2} \\
&= 5 + 2 + \frac{3}{5} + \frac{4}{25} \\
&= 7 + \frac{15}{25} + \frac{4}{25} \\
&= 7 + \frac{19}{25} = 7 + \frac{76}{100} = (7,76)_{10}
\end{aligned}{}
$$




---

### **Örnek 5**: Aşağıdaki sayının 5'lik tabandaki karşılığını bulunuz.

$$
\LARGE
\mathbf{(156)_{10}}
$$

#### Çözüm Adımları:
![[taban1.svg]]
> [!important] **Not**
> Bölme işlemi bittiğinde, **en son bölümden** başlayarak kalanlar sırasıyla yazılır.

<br>


$$
\Large \mathbf{
(156)_{10} = (1111)_5}
$$



---

### **Örnek 6**: Aşağıdaki sayının 4'lük tabandaki karşılığını bulunuz.
$$
\Large
(155)_6
$$
#### Çözüm Adımları:
Önce $(155)_6$ sayısını 10'luk tabana çevirelim:
$$
\large
(155)_6 = 1 \cdot 6^2 + 5 \cdot 6^1 + 5 \cdot 6^0 = 36 + 30 + 5 = (71)_{10}
$$
Şimdi de $(71)_{10}$ sayısını 4'lük tabana çevirelim:
![[taban2.svg|550]]
<br>

$$
\Large \mathbf{
(155)_6 = (71)_{10} = (1013)_4}
$$



---

### **Örnek 13**: $m$ ve $n$ sayı tabanları olmak üzere, verilen eşitliğe göre $m+n$ toplamının minimum değeri kaçtır?
$$
\Large
(43)_m = (34)_n
$$
#### Çözüm Adımları:
- Şunu hatırlamalıyız: "**Bir sayı tabanındaki rakamlar, tabanın kendisinden küçük olmalıdır.**"
	- $(43)_m \implies m > 4$
	- $(34)_n \implies n > 4$
- Bu durumda $m, n \ge 5$ olmalıdır.
$$
\large
\begin{aligned}{}
&4 \cdot m^1 + 3 \cdot m^0 = 3 \cdot n^1 + 4 \cdot n^0 \\
&4m + 3 = 3n + 4 \\
&4m - 3n = 1 \\  \\

&(4 \times \underbrace{m)}_{\substack{7}} - (3 \times \underbrace{n)}_{9} = 1
\end{aligned}{}
$$

$$
\large \mathbf{
m_\text{{min}} = 7 \space \space \land \space \space  n_\text{{min}} = 9 \implies m+n =\boxed{16}}
$$


