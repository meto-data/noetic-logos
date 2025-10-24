## 1- Sıfır Matrisi
- İçindeki tüm elemanlar sıfırdır.

---

### 2- **Kare Matris**
- Satır sayısı = sütun sayısı olan matristir.

##### $\begin{bmatrix} 1 & 3 & 5 \\ 5 & 2 & 3 \\ 1 & 9 & 4 \end{bmatrix}_{\boxed{3} \times \boxed{3}}$

- **Sadece kare matrislerin determinantı vardır.**
- **Sadece kare matrislerin *tersi* alınabilir.**

### 3- Köşegen Matris (Diagonal Matrix)
- Kare matristir.
- Sadece kare matrislerde köşegen vardır.
- **Köşegeni dışındaki tüm elemanları 0 olan matristir.**
	- $\begin{bmatrix}\boxed{1} & 0 \\ 0 & \boxed{2} \end{bmatrix} \space \space \space \begin{bmatrix} \boxed{1} & 0 & 0 \\ 0 & \boxed{2} & 0 \\ 0 & 0 & \boxed{-3} \end{bmatrix} \space \space \space \begin{bmatrix} \boxed{1} & 0 & 0 \\ 0 & \boxed{0} & 0 \\ 0 & 0 & \boxed{3} \end{bmatrix}$ 

- Determinantı, köşegendeki elemanlarının çarpımına eşittir.

### 4- Alt Üçgen (Lower Triangular) ve Üst Üçgen (Upper Triangular) Matris (Kare Matristirler)
- Alt üçgen matriste, köşegenin üst tarafı 0 olur.

- $\begin{bmatrix} \boxed{1} & 0 & 0 \\ 2 & \boxed{5} & 0 \\ 3 & -1 & \boxed{4} \end{bmatrix}$

- Köşegendeki elemanlarının çarpımı direkt matrisin determinantını verir.


- Üst üçgen matris, köşegendeki elemanların alt tarafının 0 olduğu matristir.

- $\begin{bmatrix} \boxed{1} & 6 & 2 \\ 0 & \boxed{6} & 5 \\ 0 & 0 & \boxed{4} \end{bmatrix}$


- Köşegendeki elemanlarının çarpımı matrisin determinantını verir.

---

### 5- **Birim Matris** (Identity Matrix)
- Kare matristir.
- Köşegen matristir.
	- Özel bir köşegen matristir.
- **Köşegendeki tüm elemanlar 1, diğer elemanlar 0 olan matristir.**
- $\text{I }$ ile gösterilir.
##### $\text{I}_1 = [1]_{1 \times 1}$ 

<br>

##### $\text{I}_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1  \end{bmatrix}_{2 \times 2}$

<br>

##### $\text{I}_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}_{3 \times 3}$


- Birim matris, çarpmada etkisizdir.

### $\text{A}.\text{I} = \text{A}$

- En önemli özelliği ise matrislerin tersini bulmamızı sağlamasıdır.
- Bir matris ile onun ters matrisinin (inverse matrix) çarpımı bize *birim matrisi* verir.

### $\boxed{\text{A}. \text{A}^{-1} = \text{I}}$


---

### 6- Simetrik Matris
- Kare matristir.
- Köşegenin alt ve üst tarafında kalanlar birbiriyle aynıdır. 

### $\begin{bmatrix} \cancel{1} & \boxed{3} & \boxed{\boxed{5}} \\ \boxed{3} & \cancel{2} & \boxed{7} \\ \boxed{\boxed{5}} & \boxed{7} & \cancel{-1}\end{bmatrix}$




---

## Bir Matrisin Devriği (Transpose)
- Matrisin satırlarını sütun hâline getirme işidir.

### $A^T = A^t \to$ A'nın devriği (transpose)

##### $A_{m \times n} \to A^{T}_{n\times m}$