---
draft: true
---

# *Ünite 3: Ortalamalar ve Merkezî Eğilim Ölçüleri | 06.03.2025*
## [[Duyarlı Ortalamalar]]
### 4- Kareli Ortalama
### $K = \frac{\sqrt{(x_{1})^{2}\times f_{1}+ (x_{2})^{2} \times f_{2 + \dots +} (x_{n})^2 \times f_{n} }}{n}$

### Örnek (Vizede çıkma ihtimali yüksek)

| Seriler | Frekans |
| ------- | ------- |
| 0-4     | 1       |
| 4-8     | 4       |
| 8-12    | 2       |
| 12-16   | 3       |
- Yukarıda verilen sınıflandırılmış seri için a, b, c ve d şıklarını bulunuz.

| Seriler | Frekans | X   |
| ------- | ------- | --- |
| 0-4     | 1       | 2   |
| 4-8     | 4       | 6   |
| 8-12    | 2       | 10  |
| 12-16   | 3       | 14  |
#### a) $\bar{x} \space \space \text{(Aritmetik Ortalama)} = ?$
##### $\frac{2+24+20+42}{10} = 8,8$
#### b) $G \space \space \text{(Geometrik Ortalama)} = ?$
##### $\sqrt[10]{2^1 \times 6^4 \times 10^2 \times 14^3 } = \sqrt[10]{711244800  } = 7,677$
#### c) $H \space \space \text{(Harmonik Ortalama)} = ?$
##### $\frac{10}{\frac{1}{2} + \frac{1}{6}.4 \space + \frac{1}{10}.2 \space + \frac{1}{14}.3} = \frac{10}{\frac{1}{2}+ \frac{2}{3} + \frac{1}{5} + \frac{3}{14}} = 6,325$
#### d) $K \space \space \text{(Kareli Ortalama)} = ?$
##### $\frac{\sqrt{ 2^2 .1 \space + \space 6^2.4\space + \space 10^2.2\space + \space 14^2.3\space }}{10} =\frac{\sqrt{ 4 + 144 + 200 + 588 }}{10} = 3,0594$

## Duyarlı Olmayan Ortalamalar
### Medyan (Ortanca)
- Bir seriyi tam ortasından bölen gözlem değeridir.
- **Örneğin:** 3, 4, 4, 5, 6, 7, 7, 7, 10
	- Medyan = 6

### Sınıflandırılmış Serilerde Medyan
#### $\text{Medyan} = L_{1} + \left( \frac{\frac{n}{2} - \sum f_{1} }{f_{\text{med.}}} \right) \times c$
$L_{1} = \text{Medyan sınıfının alt sınırı}$  <br>
$\frac{n}{2} = \text{Toplam gözlem sayısının (frekanslar toplamı) yarısı}$ <br>
$\sum f_{1} = \text{Medyan sınıfından önceki frekanslar toplamı}$ <br>
$f_{med} = \text{Medyan sınıfının frekansı}$ <br>
$c = \text{Medyan sınıfının uzunluğu}$


| Sınıflar | Frekans |
| -------- | ------- |
| 10-14    | 3       |
| 14-18    | 4       |
| 18-22    | 8       |
| 22-26    | 6       |
| 26-30    | 1       |
- Yukarıda verilen sınıflandırılmış seri için medyan?
##### $c \space\space \text{(Sınıf Uzunluğu)} =4$
##### $\frac{n}{2} = \frac{3+4+8+6+1}{2} = 11 \to \text{11. Gözlemin hangi sınıfa düştüğünü bulacağız}$
- Frekansları sırayla topladığımızda, 3+4+8 = 15 olduğundan, <br> 11. gözlem değeri (18-22) sınıfına düşüyor. Çünkü 18-22 sınıfı 8'den 15'e kadar olan gözlem değerlerini kapsıyor.

|              | Sınıflar | Frekans |
| ------------ | -------- | ------- |
|              | 10-14    | 3       |
|              | 14-18    | 4       |
| **(Medyan)** | 18-22    | 8       |
|              | 22-26    | 6       |
|              | 26-30    | 1       |
##### $L_{1} = 18$
##### $\sum f_{1} = 7$
##### $f_{med} = 8$

#### $$\text{Medyan} = 18 + \left( \frac{11 - 7 }{{\text{8}}} \right) \times 4 = \space 20$$
## Duyarlı Olmayan Ortalamalarda Mod
- Mod, bir seride en çok tekrarlanan gözlem değeridir.
- Mod bazen olmayabilir bazen de birden çok değer alabilir.
$$\text{Mod} =  L_{1} + (\frac{\Delta_{1} }{\Delta_{1} + \Delta_{2}}) \times c$$
$L_{1} = \text{Mod sınıfının alt sınırı}$ <br>
$\Delta_{1} = \text{Mod sınıfı ile bir önceki frekansın farkı}$<br>
$\Delta_{2} = \text{Mod sınıfı ile bir sonraki frekansın farkı}$<br>
$c = \text{Mod sınıfının uzunluğu}$

<br>

| Sınıf | Frekans |
| ----- | ------- |
| 0-8   | 2       |
| 8-16  | 8       |
| 16-24 | 4       |
| 24-32 | 6       |
- Yukarıda verilen sınıflandırılmış seri için **a)** ve **b)** şıklarını bulunuz.

#### **a) Medyan**
$c = 8$
$\frac{n}{2} = 10$

|              | Sınıf | Frekans |
| ------------ | ----- | ------- |
|              | 0-8   | 2       |
| **(Medyan)** | 8-16  | 8       |
|              | 16-24 | 4       |
|              | 24-32 | 6       |
$L_{1} = 8$
$\sum_{f_{1}} = 2$
$f_{med} = 8$
$$8 + \frac{10-2}{8}\times 8 = 16$$

#### b) Mod
|              | Sınıf | Frekans |           |
| ------------ | ----- | ------- | --------- |
|              | 0-8   | 2       |           |
| **(Medyan)** | 8-16  | 8       | **(Mod)** |
|              | 16-24 | 4       |           |
|              | 24-32 | 6       |           |
$\Delta_{1} = 8-2 = 6$
$\Delta_{2} = 8-4 = 4$
$c = 8$
$L_{1} = 8$
$$8 + (\frac{6}{6+4}) \times 8 = 8 + \frac{24}{5} = \frac{64}{5} = 12,8$$

---
# Diğer Merkezi Eğilim Ölçüleri
## Standart Sapma
- Verilen sıralı bir seri için verilerin aritmetik ortalamadan ne kadar saptığının ifadesidir.
$$\sigma = \sqrt{ \frac{\Sigma(\bar{x} - x_{1})^2}{n} }$$
**Örneğin:** 2, 2, 3, 3, 3, 4 $\to \sigma =?$  <br>
$\frac{2+2+3+3+3+4}{6} = \frac{17}{6} = 2,833$ <br>
$1. \to 2,833 - 2 = 0,833$ <br>
$2. \to 3 - 2,833 = 0,167$ <br>
$3. \to 4 - 2,833 = 1,167$ <br> 

$$\sigma = \sqrt{ \frac{(0,833)^2 \times 2 \space  + \space 0,167^2 \times 3 \space + \space 1,167^2}{6} }$$
$$\sigma = \sqrt{ \frac{0,693 \times 2 \space + \space  0,0278 \times 3 \space + \space 1,361}{6} }$$
$$\sigma = \sqrt{ \frac{1,386 + 0,083 + 1,361} {6} = \frac{2,83}{6}} = 0,686  $$

### Soru (Vizede çıkma potansiye yüksek)

| Sınıf | Frekans |
| ----- | ------- |
| 0-2   | 4       |
| 2-4   | 1       |
| 4-6   | 3       |
| 6-8   | 2       |
- Yukarıda verilen sınıflandırılmış seri için standart sapmayı ($\sigma$) bulun.

| Sınıf | Frekans | X (Sınıf Numarası) |
| ----- | ------- | ------------------ |
| 0-2   | 4       | 1                  |
| 2-4   | 1       | 3                  |
| 4-6   | 3       | 5                  |
| 6-8   | 2       | 7                  |
$\bar{x} = \frac{4\times 1 + 1 \times 3 + 3 \times 5 + 2 \times 7}{10} =\frac{36}{10} = 3,6$
$\sqrt{ \frac{(2,6)^2. 4 \space + \space  (0,6)^2.1 \space  + \space (1,4)^2. 3 \space + \space (3,4)^2.2 }{10} }$
$$\sigma = \sqrt{ \frac{27,04 + 0,36 +5,88 + 23,13}{10} } = 2,374$$

## Varyans 
- Standart sapmanın karesidir.
$$V= \sigma^2$$

| Sınıflar | Frekans |
| -------- | ------- |
| 0-6      | 3       |
| 6-12     | 2       |
| 12-18    | 4       |
| 18-24    | 1       |
- Yukarıda verilen sınıflandırılmış seri için standart sapma ve varyansı bulunuz.

| Sınıflar | Frekans | X (Sınıf Numarası) |
| -------- | ------- | ------------------ |
| 0-6      | 3       | 3                  |
| 6-12     | 2       | 9                  |
| 12-18    | 4       | 15                 |
| 18-24    | 1       | 21                 |
#### a) Standart Sapma ($\sigma$)
$\text{Aritmetik Ortalama: }\frac{9 + 18 + 60 + 21}{10} = \frac{108}{10} = 10,8$
$$\sigma = \sqrt{\frac{(7,8)^2.3 \space + \space (1,8)^2.2\space + \space  (4,2)^2.4 \space + \space  (10,2)^2.1}{10}  }$$
$$\sigma = \sqrt{ \frac{182,52 + 6,48 + 70,56 + 104,04}{10} } = \sqrt{ 36,36 } = 6,029$$

#### b) Varyans ($V$)
$$V = \sqrt{ 36,36 }^2 = 36,36 $$