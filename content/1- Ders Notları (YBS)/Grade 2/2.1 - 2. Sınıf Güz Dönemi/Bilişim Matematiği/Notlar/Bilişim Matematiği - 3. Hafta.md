---
title: Bilişim Matematiği - 3. Ders
type: learning
ders: Bilişim Matematiği
created: "[[2025-10-10]]"
cssclasses:
  - ders-notu
---
<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 2: Mantık</span> | <span style="color:#bf3f36">10.10.2025</span></h2>

# Koşullu Önermeler
## a) [["İSE" Bağlacı| Tek Yönlü Koşullu Önerme]] ("İSE" Bağlacı) (**⇒**)
- Sonucun `0` olduğu tek durum, birinci önermenin doğru (`1`), ikinci önermenin yanlış (`0`) olduğu durumdur. (`100` kuralı)

| $\mathbf{p}$ | $\mathbf{q}$ | $\mathbf{p \implies q}$ |
| :----------: | :----------: | :---------------------: |
|      1       |      1       |            1            |
|      1       |      0       |            0            |
|      0       |      1       |            1            |
|      0       |      0       |            1            |

$$
\LARGE
\boxed{p \implies q \equiv p' \lor q}
$$
---

### **Örnek 1**: Aşağıdaki ifadenin doğru olduğu bilindiğine göre, **p**, **q** ve **r**'nin doğruluk değerini bulunuz.

$$
\Large
\left[(p \lor q) \implies (q \lor r)\right]' \equiv 1
$$
#### Çözüm Adımları:

$$
\large
\begin{aligned}{}
&\equiv \left[ (p' \land q') \lor (q \lor r)\right]' \equiv 1 \\ \\
&\equiv \left[ \underbrace{(p' \lor q')}_1 \land \underbrace{(q' \land r')}_{1} \right] \equiv 1 \\ \\
&\to \boxed{q \equiv 0, \quad r \equiv 0 \quad p \equiv 1}
\end{aligned}{}
$$



---

### Örnek 2 (**Sınavda çıkabilir**): Aşağıdaki ifadenin en sade halini bulunuz.

$$
\Large
(p' \implies q') \implies (p \lor q)' \equiv \space ?
$$
#### Çözüm Adımları:

$$
\large
\begin{aligned}{}
&\equiv \left( p \lor q' \right) \implies \left( p \lor q\right)' \\  
&\equiv \left( p' \land q \right) \lor \left(p' \land q' \right)  \equiv p' \land \left( q \lor q'\right) \\
& \equiv p' \land 1 \quad \equiv \boxed{p'}
\end{aligned}{}
$$

---

### b) [["ANCAK VE ANCAK" Bağlacı|Çift Yönlü Koşullu Önerme]] ("ANCAK VE ANCAK" Bağlacı) (**⇔**)
- Her iki önermenin doğruluk değeri **aynı** ise sonuç doğru (`1`), **farklı** ise sonuç yanlıştır (`0`).

| $\mathbf{p}$ | $\mathbf{q}$ | $\mathbf{p \iff q}$ |
| :----------: | :----------: | :-----------------: |
|      1       |      1       |          1          |
|      1       |      0       |          0          |
|      0       |      1       |          0          |
|      0       |      0       |          1          |

$$
\LARGE
\boxed{p \iff q \equiv (p \implies q) \land (q \implies p)}
$$

---

### **Örnek 3:** Aşağıdaki ifadenin en sade halini bulunuz.

$$
\mathbf{
\Large
p \iff (q \lor p')' \equiv \space ?}
$$
#### Çözüm Adımları:

$$
\large
\begin{aligned}{}
&\equiv  p \iff \left(q' \land p \right) \\
&\equiv \left[p \implies (q' \land p) \right] \land \left[ (q' \land p) \implies p\right] \\ \\
&\equiv \left[ p' \lor (q' \land p)\right] \land \left[ \underbrace{(q \lor p') \lor p}_{1}\right] \\\\
&\equiv \left[(p' \lor q') \land \underbrace{(p' \lor p)}_{ 1}\right] \land 1  \equiv \LARGE \mathbf{(p' \lor q')}

\end{aligned}{}
$$


---


### **Örnek 4:** Aşağıdaki ifadenin en sade halini bulunuz.
$$
\Large \mathbf{
(p' \iff q)' \lor (q \land p)'} \equiv \space?
$$

#### Çözüm Adımları:
$$
\large
\begin{aligned}{}
& \equiv \left[ (p' \implies q) \land (q \implies p') \right]' \lor (q' \lor p') \\
& \equiv \left[(p \lor q) \land (q' \lor p')\right]' \lor (q' \lor p') \\
& \equiv \left[ (p' \land q') \lor (q \land p) \right] \lor (q' \land p') \\ \\
& \equiv (p' \land q') \lor \underbrace{(q \land p) \lor (q' \land p')}_{1} \\ \\
&\mathbf{\equiv (p' \land q') \lor 1 \quad \equiv \quad 1}
\end{aligned}{}
$$


---

# İspat Yöntemleri
## 1- [[Doğrudan İspat]]
- $p \implies q$ önermesinde, $p \equiv 1$ kabul edilerek $q \equiv 1$ olduğunun gösterilmesidir.

### **Örnek 5**: Aşağıdaki teoremi *doğrudan ispat yöntemiyle* ispatlayınız.

$$
\Large
\begin{array}{}
&p: x^2-1 = 0 \\ 
& q: x=1, \quad x=-1
\end{array}{}
$$

#### Çözüm Adımları:

- $p \equiv 1$ olduğunu varsayalım. Bu durumda $x^2-1 = 0$ denklemi doğrudur.
$$
\large
\begin{aligned}
&x^2 -1 = 0 \\
&\to (x-1)(x+1) = 0 \\
&\to x-1=0 \text{ veya } x+1=0 \\
&\to \underbrace{x=1 \text{ veya } x=-1}_{q \text{ önermesi}}
\end{aligned}
$$

- $p$ önermesinin doğru olması, $q$ önermesinin de doğru olmasını gerektirdi. Böylece ispat tamamlandı.

---

## 2- [[Olmayana Ergi Yöntemi]]

- $p \implies q$ teoreminin, ona denk olan karşıt tersi ($q' \implies p'$) önermesinin ispatlanmasıdır.

### **Örnek 6**: Aşağıdaki teoremi *olmayana ergi yöntemiyle* ispatlayınız.

$$
\Large
\begin{array}{}
&p: 4x-32 =0 \\
&q: x=8  \qquad \space
\end{array}{}
$$


#### Çözüm Adımları:

$$
\Large
\begin{array}{}
&p': 4x-32 \not = 0 \\  
&q': x \not = 8  \qquad    
\end{array}{}
$$


$$
\Large \mathbf{
\underbrace{(x \not = 8)}_{\text{Doğru kabul edilir. } (\equiv 1)} \implies \underbrace{(4x-32 \not = 0)}_{\text{ Doğruluğu gösterilir.}}}
$$


- $q'$ önermesinin doğru olması $p'$ önermesinin de doğru olmasını gerektirdi. O halde $q' \implies p'$ doğrudur. Bir önermenin karşıt tersi kendisine denk olduğu için $p \implies q$ da doğrudur.

---

## Totoloji ve Çelişki
### [[Totoloji]]
- Bileşenlerinin doğruluk değeri ne olursa olsun daima doğru (`1`) olan bileşik önermedir. Örn: $(p \lor p')$
### [[Çelişki]]
- Bileşenlerinin doğruluk değeri ne olursa olsun daima yanlış (`0`) olan bileşik önermedir. Örn: $(p \land p')$

---

### **Örnek 7**: Aşağıdaki önermenin bir totoloji olduğunu gösteriniz.

$$
\mathbf{
\Large
[(p' \land p)' \lor q]' \implies q}
$$

#### 1. Yöntem:
$$
\large
\begin{aligned}
&\equiv [(0)' \lor q]' \implies q \\
&\equiv [1 \lor q]' \implies q \\
&\equiv [1]' \implies q \\
&\equiv 0 \implies q \\
&\equiv 0' \lor q \equiv 1 \lor q \equiv \boxed{1}
\end{aligned}
$$


#### 2. Yöntem (Tablo Yöntemi)

| $\mathbf{p}$ | $\mathbf{q}$ | $\mathbf{p'}$ | $\mathbf{\overbrace{p' \land p}^{a}}$ | $\mathbf{a'}$ | $\mathbf{\overbrace{a' \lor q}^{m}}$ | $\mathbf{m'}$ | $\mathbf{m \implies q}$ |
| ------------ | ------------ | ------------- | ------------------------------------- | ------------- | ------------------------------------ | ------------- | ----------------------- |
| 1            | 1            | 0             | 0                                     | 1             | 1                                    | 0             | **1**                   |
| 1            | 0            | 0             | 0                                     | 1             | 1                                    | 0             | **1**                   |
| 0            | 1            | 1             | 0                                     | 1             | 1                                    | 0             | **1**                   |
| 0            | 0            | 1             | 0                                     | 1             | 1                                    | 0             | **1**                   |

- $\mathbf{m \implies q}$ sütunu daima `1` olduğundan önerme bir totolojidir.


---

### **Örnek 8**: Aşağıdaki önermenin bir çelişki olduğunu gösteriniz.

$$
\Large \mathbf{
(0 \land 1) \land (p \lor q)' \equiv 0}
$$

#### Çözüm Adımları:

$$
\large
\equiv 0 \land (p' \land q') \equiv \boxed{0}
$$

- "VE" bağlacında bir terimin `0` olması sonucu daima `0` yapacağından, bu önerme bir çelişkidir.

---

## Bileşik Önermelerin Elektrik Devrelerine Uygulanması

- Paralel bağlı anahtarlar **VEYA (∨)**, seri bağlı anahtarlar **VE (∧)** bağlacı ile ifade edilir.

![[itmat1.svg|550]]

<br>

![[itmat2.svg]]

---

### **Örnek 9**: Aşağıdaki devreye karşılık gelen bileşik önermeyi yazarak devreden akım geçip geçmediğini bulunuz.
![[itmat3.svg]]
#### Çözüm Adımları:

$$
\Large \mathbf{
\left( [(p \lor r) \land q] \lor [(s \lor t) \land u] \right) \land (k \lor y)}
$$


$$
\large
\begin{aligned}{}
&\equiv \left( [(\underbrace{0 \lor 1}_{1}) \land 1] \lor [(\underbrace{0 \lor 1}_{1}) \land 1] \right) \land (\underbrace{0 \lor 1}_{1}) \\ \\
&\equiv \left( [\underbrace{1 \land 1}_{1}] \lor [\underbrace{1 \land 1}_{1}] \right) \land 1 \\ \\
&\equiv (\underbrace{1 \lor 1}_{1}) \land 1 \\ \\
&\equiv 1 \land 1 \equiv \boxed{1}
\end{aligned}{}
$$
