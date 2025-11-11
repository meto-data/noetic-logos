---
created: '2025-10-24'
---
### Eşelon Matris Olma Şartları
- Tamamen 0'dan oluşan satır varsa en aşağı satırda olmalıdır.
- Her satırın *0'dan farklı **ilk** elemanı* 1 olmalıdır.
- Her satırda *0'dan farklı 1 olan ilk elemanın altında kalan tüm elemanlar* **0 olmalıdır**.
- 1'ler basamak oluşturacak biçimde olmalıdır. Basamakvari bir hareket olmalıdır.
	- $\begin{bmatrix}\boxed{1} & 2 & -1 & 4 \\ 0 & \boxed{1} & 2 & -1 \\ 0 & 0 & 0 & \boxed{1} \end{bmatrix}$

### Örnek: <br>$\begin{bmatrix} 2 & -1 & 3 & 4 \\ 1 & 2 & -1 & 5 \\ 3 & 1 & 2 & 6 \end{bmatrix}$

- İlkin ilk satırın ilk elemanını 1 yapmayı hedefleyeceğiz.

###### $S_1 \leftrightarrow  S_2 \implies \begin{bmatrix} 1 & 2 & -1 & 5 \\ 2 & -1 & 3 & 4 \\ 3 & 1 & 2 & 6 \end{bmatrix}$

- $-2S_1 + S_2 \to S_2$  (Yeni 2. satır elde ettik)
- $-3S_1  + S_3 \to S_3$  (Yeni 3. satır elde ettik)

##### $\begin{bmatrix} 1 & 2 & -1 & 5 \\ 0 &  -5 & 5 & -6 \\ 0 & -5 & 5 & -9  \end{bmatrix}$

- $\frac{-1}{5}S_2 \to S_2$

##### $\begin{bmatrix} 1 & 2 & -1 & 5 \\ 0 & 1 & -1 & \frac{6}{5} \\ 0 & -5 & 5 & -9  \end{bmatrix}$

- $5S_2 + S_3 \to S_3$


##### $\begin{bmatrix} 1 & 2 & -1 & 5 \\ 0 & 1 & -1 & \frac{6}{5} \\ 0 & 0 & 0 & -3 \end{bmatrix}$

- $\frac{-1}{3}S_3 \to S_3$


##### $\begin{bmatrix} 1 & 2 & -1 & 6 \\ 0 & 1 & -1 & \frac{6}{5} \\ 0 & 0 & 0 & 1 \end{bmatrix}$

