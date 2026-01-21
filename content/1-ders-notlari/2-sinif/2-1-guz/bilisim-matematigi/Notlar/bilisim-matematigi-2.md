---
title: Bilişim Mat. - 2. Ders
type: ogrenis
ders: Bilişim Matematiği
konu: Mantık
created: 2025-10-03
cssclasses:
  - ders-notu
draft: true
---
- **Not**: Ders hârici bir anlatım için [[1- Buders Önermeler]] ve [[1- Temeller (Mantık)]] notlarına bakılması tavsiye edilir. <br>
- **Not 2**: Sadece bu dosya için, bu dosya ders anlatımına bire-bir sadık değildir. Derste anlatılanların hepsini kapsar ancak ilave eklemeler de vardır.

---
<br>

<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 2: Mantık</span> | <span style="color:#bf3f36">03.10.2025</span></h2>

- **[[Önerme]]**: Doğru **ya da** yanlış, **kesin** hüküm bildiren ifade.

## **[[Doğruluk Değeri]]** (Truth Value)
- Bir önerme ele aldığımızda, bu önerme ya doğrudur (**1**) ya da yanlıştır (**0**)
- Bir önermenin denkliği $\equiv$ sembolü ile gösterilir. Mesela $p \equiv 1$ veya $q \equiv 0$ gibi.

## **[[Denk Önermeler]]**
- Doğruluk değerleri aynı olan önermelerdir

>[!example] Örnek
> $p$: Türkiye'nin başkenti Ankara'dır.  ($p \equiv 1$)<br>
> $q$: $-3$'ün karesi $9$'dur. ($q \equiv 1$)<br>
> Bu durumda $p$ ve $q$ denk önermelerdir, $p \equiv q$.

## **[[Bir Önermenin Olumsuzu| Bir Önermenin Olumsuzu (Değili)]]** (Negation)
- Bir önermenin doğruluk değerini değiştirir.
	- $p$: Türkiye'nin başkenti Ankara'dır. ($p \equiv 1$)
	- $p'$: Türkiye'nin başkenti Ankara değildir. ($p' \equiv 0$)
	- $q$: $(-5)^2 = 25$'tir. ($q \equiv 1$)
	- $q'$: $(-5)^2 \not = 25$  ($q' \equiv 0$)

## [[Doğruluk Tablosu]] (Truth Table)
- Önerme sayısına *n* dersek, $2^n$ tane doğruluk durumu ortaya çıkar.
- $p$ ve $q$ olmak üzere $2$ önermemiz var diyelim, bu durumda $2^2=4$ adet doğruluk durumu ortaya çıkacaktır.

| $\mathbf{p}$ | $\mathbf{q}$ |
| :----------: | :----------: |
|      1       |      1       |
|      1       |      0       |
|      0       |      1       |
|      0       |      0       |

- Eğer $r$ önermesini de eklersek, bu sefer $3$ adet önermemiz olacağı için $2^3 = 8$ adet doğruluk durumu ortaya çıkacaktır.

| **$\mathbf{p}$** | $\mathbf{q}$ | $\mathbf{r}$ |            **$\mathbf{p}'$**             |
| :--------------: | :----------: | :----------: | :--------------------------------------: |
|      **1**       |      1       |      1       | <span style="color:darkred">**0**</span> |
|      **1**       |      1       |      0       | <span style="color:darkred">**0**</span> |
|      **1**       |      0       |      1       | <span style="color:darkred">**0**</span> |
|      **1**       |      0       |      0       | <span style="color:darkred">**0**</span> |
|      **0**       |      1       |      1       | <span style="color:darkred">**1**</span> |
|      **0**       |      1       |      0       | <span style="color:darkred">**1**</span> |
|      **0**       |      0       |      1       | <span style="color:darkred">**1**</span> |
|      **0**       |      0       |      0       | <span style="color:darkred">**1**</span> |

---

# [[Bileşik Önerme ve Bağlaçlar]] (Compound Proposition and Logical Operators)

- **[[Bileşik Önerme]]**: İki veya daha fazla önermenin bağlaçlar yardımıyla birleştirilmesiyle ortaya çıkan yeni önerme.

## a) "VE" Bağlacı (**∧**) (AND)
- Yazılımda gördüğümüz `&&` operatörüne karşılık gelir.
- "VE" bağlacı ile birleştirilen önermelerin sonucunun doğru (1) olabilmesi için **tüm önermelerin** doğru olması gerekir.
- Çarpma işlemi gibi düşünülebilir.

| $\mathbf{p}$ | $\mathbf{q}$ | $\mathbf{p \land q}$ |
| :-: | :-: | :---------: |
|  1  |  1  |      1      |
|  1  |  0  |      0      |
|  0  |  1  |      0      |
|  0  |  0  |      0      |

### Örnek 1: Aşağıdaki ifadenin en sade halini bulunuz.

$$
\Large
[p' \land (p \land q)] \land (0' \land p) \equiv ?
$$
#### Çözüm Adımları:
$$
\large
\begin{aligned}{}
&\equiv [\underbrace{(p' \land p)}_{0} \land q] \land (\underbrace{0'}_{1} \land p) && \text{(Birleşme Özelliği)}\\
&\equiv (0 \land q) \land (1 \land p) \\
&\equiv 0 \land p \\
&\equiv 0
\end{aligned}{}
$$


---


## b) "VEYA" Bağlacı (**∨**) (OR)

- Yazılımda gördüğümüz `||` operatörüne karşılık gelir.
- "VEYA" bağlacı ile birleştirilen önermelerin sonucunun yanlış (0) olabilmesi için **tüm önermelerin** yanlış olması gerekir.
- Toplama işlemi gibi düşünülebilir (1+1=1 hariç).

| $\mathbf{p}$ | $\mathbf{q}$ | $\mathbf{p \lor q}$ |
| :-: | :-: | :------: |
|  1  |  1  |     1    |
|  1  |  0  |     1    |
|  0  |  1  |     1    |
|  0  |  0  |     0    |


### Örnek 2: Aşağıda verilen önermelerin en sade hâlini yazınız.

$$
\large
\begin{array}{}
& \mathbf{a)} \space (p \lor 1) \land (q \lor q') \\
& \to \boxed{1 \land 1 \equiv 1} \\ \\
&\mathbf{b)} \space (q \lor 0) \lor (q' \lor 1) \\
& \to \boxed{q \lor 1 \equiv 1} \\ \\
& \mathbf{c)} \space (p \land p') \lor (q \land 0) \\
& \to \boxed{0 \lor 0 \equiv 0}
\end{array}{}
$$


### Örnek 3:


$$
\large
\begin{array}{}
\boxed{\large p \equiv q' \equiv r \equiv 0} \implies \\ \\\LARGE \left[(p' \land r) \lor (q \land r') \right] \lor \left[(p' \land r') \land (q')' \right] \equiv ?
\end{array}{}
$$


#### Çözüm Adımları:

$$
\large
\begin{aligned}
&p \equiv 0 \implies p' \equiv 1 \\
&q' \equiv 0 \implies q \equiv 1 \\
&r \equiv 0 \implies r' \equiv 1 \\
\\
&\equiv [(1 \land 0) \lor (1 \land 1)] \lor [(1 \land 1) \land 1] \\
&\equiv [0 \lor 1] \lor [1 \land 1] \\
&\equiv 1 \lor 1 \equiv 1
\end{aligned}
$$

---


### Örnek 4 (**Sınavda çıkabilir**): Aşağıdaki ifadenin en sade halini bulunuz.
$$
\Large
\left[(p' \land r)' \land r\right] \lor (p' \lor r)' \equiv ?
$$
#### Çözüm Adımları:
$$
\large
\begin{aligned}
&\equiv [(p \lor r') \land r] \lor (p \land r') &&\text{(De Morgan Kuralları)} \\
&\equiv [(p \land r) \lor (r' \land r)] \lor (p \land r') &&\text{(Dağılma Özelliği)} \\
&\equiv [(p \land r) \lor 0] \lor (p \land r') \\
&\equiv (p \land r) \lor (p \land r') \\
&\equiv p \land (r \lor r') &&\text{(p parantezine alma)} \\
&\equiv p \land 1 \equiv p
\end{aligned}
$$


---

## c) "YA DA" Bağlacı (**⊻**) (XOR)

- "YA DA" bağlacında önermelerin doğruluk değerleri **farklı** ise sonuç doğru (1), **aynı** ise sonuç yanlıştır (0).

| $\mathbf{p}$ | $\mathbf{q}$ | $\mathbf{p \veebar q}$ |
| :----------: | :----------: | :--------------------: |
|      1       |      1       |           0            |
|      1       |      0       |           1            |
|      0       |      1       |           1            |
|      0       |      0       |           0            |

### Örnek 5: 

$$
\large 
\boxed {\left(p \lor q \equiv 0 , \space  q \lor r \equiv 1 \right)} \implies \LARGE \mathbf{(p \veebar q') \land (p' \veebar r)} \equiv ?
$$



#### Çözüm Adımları:
$$
\large
\begin{aligned}
&p \lor q \equiv 0 \implies p \equiv 0, \enspace q \equiv 0 \\
&q \lor r \equiv 1 \implies 0 \lor r \equiv 1 \implies r \equiv 1 \\
\\
&\to (p \veebar q') \land (p' \veebar r) \\
&\to (0 \veebar 1) \land (1 \veebar 1) \\
&\to 1 \land 0 \equiv 0
\end{aligned}
$$


### Örnek 6: Aşağıdaki ifadenin en sade halini bulunuz.

$$
\Large \mathbf{
(p \lor p') \veebar (q \land q')} \equiv ?
$$

#### Çözüm Adımları:
$$
\Large
(p \lor p') \veebar (q \land q') \equiv 1 \veebar 0 \equiv 1
$$