- Tümevarım ile ispata ne zaman ihtiyaç duyarız?
	- *Genellikle* eşitliklerin doğruluğunun ispatlanmasında kullanılır.
		- $1+2+3+ \dots+ n  = \frac{n.(n+1)}{2}, n \in \mathbb{N}^{+}$
		- $1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n.(n+1).(2n+1)}{6}, n \in \mathbb{Z}^{+}$
		

> [!quote] 
> Matematiksel tümevarım bir önermenin genellikle tüm doğal sayılar için doğru olduğunu göstermek üzere kullanılan matematiksel kanıtlama yöntemidir. Bu yöntem, sonsuz sayıda durumu sonlu bir akıl yürütme zinciri ile kanıtlama imkanı sağlar.

![[e29f16d5.png]]

#### 3 adımlı ispat yöntemidir.
- $1+2+3+ \dots+ n  = \frac{n.(n+1)}{2}, n \in \mathbb{N}^{+}$ için; <br>
1. $n=1$ doğru mu?  (Kontrol edilmelidir)
	1. "Evet, doğrudur" dersek:
2. $n=k$ doğru kabul edilir.
3. $n=k+1$ doğru olduğu gösterilmeye çalışılır.


## Örnek
#### $1+2+3+ \dots+ n  = \frac{n.(n+1)}{2}, n \in \mathbb{N}^{+}$ eşitliğinin doğruluğunu ispatlayın.
#### 1. Adım: $n=1 \text{ doğru mu?}$ 
- $1 = \frac{1.(2)}{2} = 1 \text{ doğru.}$
#### 2. Adım: $n=k  \text{ doğru kabul edelim.}$ 
- $1 + 2 + 3 + \dots + k = \frac{k.(k+1)}{2}, k \in \mathbb{N}^+$
#### 3. Adım: $n = k+1 \text { doğru mu?}$
##### $\underbrace{1 + 2 + \dots + k}_{\frac{k(k+1)}{2}} + k+1 \stackrel{?}{=} \frac{(k+1).(k+2)}{2}$
##### $\frac{k.(k+1) + 2k+2}{2} \stackrel{?}{=}  \frac{(k+1).(k+2)}{2}$
- $[k.(k+1) + 2k+2] = k(k + 1 + 2) + 2$
	-  $= (k^2 + 3k) + 2 = (k+2).(k+1)$
##### $\frac{(k+2)(k+1)}{2} = \frac{(k+1)(k+2)}{2}$

---


## Örnek
### $1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n.(n+1).(2n+1)}{6}, n \in \mathbb{Z}+$ eşitliğinin doğruluğunu ispatlayınız.
#### 1. Adım: $n=1 \text{ doğru mu?}$
- $1 = \frac{1.(2).(3)}{6} = 1 \text{, doğru.}$
#### 2. Adım: $n=k \text { doğru kabul edelim.}$
##### $1^2 + 2^2 + 3^2 + \dots + k^2 = \frac{k.(k+1).(2k+1)}{6}, n \in \mathbb{Z}+$
#### 3. Adım: $n= k+1 \text{ doğru mu?}$
##### $\underbrace{1^2 + 2^2 + 3^2 + \dots + k^2}_{\frac{k.(k+1).(2k+1)}{6}} + (k+1)^2 \stackrel{?}{=} \frac{(k+1).(k+2).(2k+3)}{6}$
##### $\frac{k.(k+1).(2k+1) + 6(k + 1)^2}{6} \stackrel{?}{=}\frac{(k+1).(k+2).(2k+3)}{6}$
##### $\frac{(k+1)(2k^2+k + 6k+6)}{6} \stackrel{?}{=} \frac{(k+1)(k+2)(2k+3)}{6}$
- $(2k^2+7k+6) = (2k+3)(k+2)$
##### $\boxed{\frac{(k+1)(k+2)(2k+3)}{6} = \frac{(k+1)(k+2)(2k+3)}{6}}$
