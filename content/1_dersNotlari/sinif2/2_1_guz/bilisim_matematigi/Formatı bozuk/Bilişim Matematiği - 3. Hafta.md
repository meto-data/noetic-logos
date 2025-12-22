---
title: Bilişim Matematiği - 3. Hafta
type: learning
ders: "[[ATLAS/1_dersNotlari/sinif2/2_1_guz/bilisim_matematigi/Formatı bozuk/Bilişim Matematiği - 3. Hafta]]"
created: "[[2025-10-10]]"
cssclasses:
  - ders-notu
---

<h2 style="text-align:center"><span style="color:darkblue; text-align:center">Ünite 2: Mantık</span> | <span style="color:#bf3f36">10.10.2025</span></h2>

## Koşullu Önermeler
### a) [["İSE" Bağlacı| Tek Yönlü Koşullu Önerme]] ($\implies$ -İSE-)

| $p$ | $q$ | $p \implies q$ |
| --- | --- | -------------- |
| 1   | 1   | 1              |
| 1   | 0   | 0              |
| 0   | 1   | 1              |
| 0   | 0   | 1              |

#### $p \implies q \equiv p' \land q$ 

---

### Örnek: $\left[(p \lor q) \implies (q \lor r)\right]' \equiv 1 \text{ ise,} \space \space \text{ p, q ve r'nin doğruluk değeri nedir?}$
##### $[(p' \land q') \lor (q \lor r)]' \equiv 1$
##### $\equiv [\underbrace{(p \lor q)}_{1} \land \underbrace{(q' \land r')}_{1} \equiv 1]$
##### $\space \space \space \space q \equiv 0, \space r \equiv 0, \space p \equiv 1$

***

### Örnek (<span style="color:darkred">Sınavda çıkabilir</span>): <br> $(p' \implies q') \implies (p \lor q)' \equiv \space ?$

##### $(p \lor q') \implies (p \lor q)'$
##### $\equiv (p' \land q) \lor (p' \land q')$
##### $\space \space \space \equiv  p' \land (q \lor q')$
##### $\space \space \space \space \space \space \equiv p' \land 1 \equiv p'$

---
---
***

### b) [["ANCAK VE ANCAK" Bağlacı|Çift Yönlü Koşullu Önerme]] ($\iff$ -ANCAK VE ANCAK-) 

| $p$ | $q$ | $\iff$ |
| --- | --- | ------ |
| 1   | 1   | 1      |
| 1   | 0   | 0      |
| 0   | 1   | 0      |
| 0   | 0   | 1      |
### $p \iff q \equiv (p \implies q) \land (q \implies p) \equiv (p' \lor q) \land (q' \lor p)$

---
### Örnek: <br>$p\iff (q \lor p')' \equiv \space ?$
##### $\equiv p \iff (q' \land p)$
##### $\space \space \equiv [p \implies (q' \land p)] \land [(q'\land p) \implies p]$
##### $\space \space \space \space \equiv [p' \lor (q' \land p)] \land [(q \lor p') \lor p]$
##### $\space \space \space\space \space \space \equiv [(p' \lor p) \land (p' \lor q')] \land \underbrace{[q \lor p]}_{1}$
##### $\space \space \space\space \space \space\space \space \equiv [1 \land (p' \lor q')] \land 1 \equiv p' \lor q'$

---

### Örnek: <br>$(p' \iff q)' \lor (q \land p)' \equiv \space?$
##### $\equiv [(p' \implies q )\land (q \implies p')]' \lor (q' \lor p' )$
##### $\space\space \equiv [(p \lor q) \land (q' \lor p')]' \lor (q' \lor p')$
##### $\space\space\space\space \equiv [(p' \land q') \lor (q \land p)] \lor (q' \lor p')$
$\space\space\space\space\space\space \lor \text{ olduğundan parantezi atlayabiliriz. Ayrıca, } (q' \lor p') = (q \land p)'$
##### $\space\space\space\space\space\space \equiv (p' \land q') \lor \underbrace{(q \land p) \lor (q \land p)'}_{1}$
##### $\space\space\space\space\space\space\space\space \equiv (p' \land q') \lor 1 \equiv \boxed{1}$

---
---
---


## İspat Yöntemleri
### 1- [[Doğrudan İspat]]
- $p \implies q$ önermesinde, $p \equiv 1$ iken $q$'nun da $1$ olduğunun gösterilmesine doğrudan ispat yöntemi denir.

---

### Örnek: <br>$p: x^2-1 = 0$ <br>$q: x=1, x=-1$

olduğuna göre, $p \implies q$ teoremini *doğrudan ispat yöntemiyle* ispatlayın.

###### *$p \equiv 1$ olduğunu varsayalım.
- $x^2 -1 = 0$
	- $x^2 -1 = (x-1)(x+1) = 0$
		- $\underbrace{x=1 \lor x= -1}_{q:}$
---
---

### 2- [[Olmayana Ergi Yöntemi]]
- $p \implies q$ teoreminin karşıt tersinin ($q' \implies p'$) ispatlanmasına denir.

---
### Örnek: <br>$p: 4x-32 =0$<br>$q: x=8$
- olduğuna göre, $p \implies q$'yu *olmayana ergi yöntemiyle* ispatlayın.

#### $p': 4x-32 \not = 0$
#### $q': x \not = 8$

##### $\underbrace{(x \not = 8)}_{\text{Doğru kabul edilir. } \equiv 1} \implies \underbrace{(4x-32 \not = 0)}_{\text{ Doğruluğu gösterilir.}}$

##### $\text{Dolayısıyla } q' \implies p' \text{ doğrudur.}$

 - Karşıt tersi doğru olan her önerme doğru olduğundan $p \implies q$' da doğrudur.


---
---
---

## Totoloji ve Çelişki
#### [[Totoloji]]
- Basit bileşenlerin doğruluk değeri ne olursa olsun doğru olan bileşke önerme.
- Söz gelişi, insanlar erkektir veya kadındır önermesi her zaman doğrudur. O nedenle bu önerme bir totolojidir.
- $(p \lor p') \equiv 1$ totolojidir.
- Doğruluk tablosunda her zaman $1$ değerini verir.
##### [[Çelişki]]
- Basit bileşenlerinin doğruluk değeri ne olursa olsun yanlış olan bileşke önerme.
- $(p \land p') \equiv 0$ çelişkidir.
- Doğruluk tablosunda her zaman $0$ değerini verir.

---

### Örnek: <br>$[(p' \land p)' \lor q]' \implies q \equiv 1$ önermesinin totoloji olduğunu gösterin.

#### 1. Yöntem: 

##### $[(p' \land p)' \lor q] \lor q \equiv 1$
##### $\equiv \underbrace{0' \lor q}_{1} \lor q \equiv 1$
##### $\space \space \equiv 1 \lor q \equiv 1$

#### 2. Yöntem (Tablo Yöntemi)

| $p$ | $q$ | $p'$ | $\overbrace{p' \land p}^{a}$ | $a'$ | $\overbrace{a' \lor q}^{m}$ | $m'$ | $m \implies q$ |
| --- | --- | ---- | ---------------------------- | ---- | --------------------------- | ---- | -------------- |
| 1   | 1   | 0    | 0                            | 1    | 1                           | 0    | **1**          |
| 1   | 0   | 0    | 0                            | 1    | 1                           | 0    | **1**          |
| 0   | 1   | 1    | 0                            | 1    | 1                           | 0    | **1**          |
| 0   | 0   | 1    | 0                            | 1    | 1                           | 0    | **1**          |
- $m \implies q$ her zaman 1 değerini verdiğinden, önerme bir totolojidir.

---

### Örnek: <br>$(0 \land 1) \land (p \lor q)' \equiv 0$ çelişki olduğunu gösterin.
##### $\equiv 0 \land (p' \land q') \equiv 0$

---
---
---

## Bileşik Önermelerin Elektrik Devrelerine Uygulanması

![[itmat1.svg|550]]

<br>

![[itmat2.svg]]



---

### Örnek
![[itmat3.svg]]
- Yukarıdaki devreyi bileşik önermelerde ifade edin ve akım geçip geçmediğine bakın.
#### $[(p\lor r) \land q] \lor [(s \lor t) \land u] \land (k \lor y)$
#### $\space \space \equiv [\underbrace{(0 \lor 1) \land 1}_{1}] \land [\underbrace{(0 \lor 1) \land 1}_{1}] \land (\underbrace{0 \lor 1}_{1}) \space \equiv \space 1 \space \text{ Dolayısıyla akım geçer.}$

