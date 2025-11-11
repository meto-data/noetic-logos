---
created: '2025-10-03'
---
- "$p \implies q$" gibi bir *şartlı önerme* gelirse, doğrudan ispat yönteminin kullanılabilme *ihtimali* vardır.
	- "$n$ tek sayı ise, $n^2$ de tek sayıdır." $\to$ Doğrudan ispat kullanılabilir.
	- "$m$ ve $n$ çift sayı ise, $m+n$ de çift sayıdır." $\to$ Doğrudan ispat kullanılabilir.

---
- "$n^2$ tek sayı ise $n$ de tek sayıdır." $\to$ Doğrudan ispat kullanılamaz. *Olmayana ergi* kullanılır.
- "$m+n$ çift sayı ise, $m$ ve $n$ çift sayıdır. " $\to$ Doğrudan ispat kullanılamaz. *Olmayana ergi* kullanılır.

---

#### $p \implies q$
- **1. Adım:** 1. Önerme doğru kabul edilir. ($p \text{ doğru kabul edilir.}$)
- **2. Adım**: $q$'nun doğru olduğu gösterilmeye çalışılır. *Eğer başarılırsa, bu bize*
- **3. Adım**: $p \implies q$'nun doğru olduğunu söyler.


---

### Soru: $n \text{ çift sayı ise } n^2 \text{ de çift sayıdır.}$ ispatlayınız.
- **1. Adım**:  $n=2k$ , $k \in \mathbb{Z}$ kabul edelim.
- **2. Adım**: $n^2 = (2k)^2 = 4k^2 =  2.2k^2 \space \space\boxed{2k^2 =p}, p \in \mathbb{Z}$
	- $n^2 = 2p$
- **3. Adım**: $n$ çift sayı ise, $n^2$ de çift sayıdır.

---

### Soru: "$m \text{ ve } n \text{ tek sayı ise } m.n \text{ tek sayıdır.}$" ispatlayınız.
- **1. Adım**: $m = 2k+1, k \in \mathbb{Z}$, $n= 2l+1, l \in \mathbb{Z}$ kabul edelim.
- **2. Adım**: $m.n = (2k+1).(2l+1) = 4kl + 2k + 2l + 1$
	- $2(2kl+k+l) +1$
		- $P = 2kl + k + l, \space P \in \mathbb{Z}$
		- $m.n = 2P + 1$
		- $m.n = \text{ tek.}$
- **3. Adım:** $m$ ve $n$ tek sayı ise, $m.n$ tek sayıdır.
