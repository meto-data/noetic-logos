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
