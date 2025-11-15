

---

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



---


---

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