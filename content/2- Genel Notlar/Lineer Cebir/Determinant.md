---
created: '2025-11-07'
---
- <u>Kare matrislerde</u> hesaplanan **sabit** bir değerdir
- Determinant, bir **sayıya** eşittir.
- Bu sayı, "denklem sistemleri" hakkında çözülebilir mi çözülemez mi yorumu yapmamızı sağlar.
- Bir matrisin tersinin varlığı hakkında bilgi verir.
 

### Determinant Hesaplama
- Sadece kare matrislerin determinantı vardır.
- $A$ matrisinin determinantı 2 şekilde gösterilir.
##### 1. $\det A$
##### 2. $|A|$


---

### **1x1** Matrisin Determinantı

- 1x1 matrislerin determinantı, kendisine eşittir.
- $A = [5] \implies \det A =5$

### **2x2** Matrisin Determinantı
##### $A = \begin{bmatrix} a & b \\ c & d\end{bmatrix} \space \space \space \det A = ad - bc$


<br>

#### Soru: $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \implies \det A =?$
##### $\det A = 4 -6 = -2$


<br>

#### Soru: $\begin{bmatrix} 3 & 2 \\ 4 & x\end{bmatrix} = 6 \implies x =?$

##### $3x - 8 = 6 \implies 3x = 14 \to x = \frac{14}{3}$



<br>

### **3x3** Matrisin Determinantı
- Sarrus yöntemi ile hesaplanır.

#### $A = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & k \end{bmatrix} \qquad \det A = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & k \\ a & b & c \\ d & e & f \end{bmatrix} = \begin{bmatrix} a & b & c & a & b \\ d & e & f & d & e \\ g & h & k & g & h  \end{bmatrix}$
#####  $\det A = [(aek).(bfg).(cdh)] - [(ceg) - (afh) - (bdk)]$



## **4x4, 5x5, 6x6, $\dots$** kare matrislerin determinantı

## Kofaktörler ile Determinant Hesaplama
##### Ön Bilgi

---


#### $A = \begin{bmatrix} 1 & 2 & 3 \\ 5 & -2 & 1 \\ 4 & 5 & 6 \end{bmatrix}_{3x3}$
##### $A_{3x3} \to \text{ Matris}$
##### $\boxed{A_{21} \to a_{21} \quad \text{ elemanının kofaktörü.}}$


#### $A_{mn} = (-1)^{m+n} \space . \space  \left| \begin{matrix} & & \\ &  & \end{matrix}\right|$
 
- $\left|\begin{matrix} & & \\ & & \end{matrix}\right| =$m. satır, n. sütun  matristen atıldıktan sonra kalan kısmın determinantı 
- $A_{31} = (-1)^{4} \times (2 +6) = 8$

---

> [!warning] Not!
**Kofaktör ile determinant hesaplama, tüm kare matrislerin determinantını almamızı sağlar.**


- İstenilen satır ve sütun seçilir. (İşlem kolaylığı için tercihen içinde 0 olanları seçmeliyiz)
- Hangi satır veya hangi sütunun seçildiği önemli değildir. Hepsinden aynı sonuç çıkar.
- Her bir elemanla onun kofaktörü çarpılır.

### $\left| \begin{matrix}a_{11} & a_{12} &  a_{13} \\ a_{21} &  a_{22} &  a_{23} \\  a_{31} &  a_{32} &  a_{33} \end{matrix} \right| \implies \det =  a_{11}. A_{11} + a_{12} . A_{12} +  a_{13}. A{13}$


### Soru $A = \begin{bmatrix} 1 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 1 & 4 \end{bmatrix} \quad \det A =?$

#### Kofaktör İle

##### $\det A = 1. A_{11} + 2. A_{12} + 0.A_{13} = A_{11} + 2A_{12}$
##### $A_{11} = (-1)^2 \times (-12 - (2)) = -14$
##### $2A_{12} = 2.\left[(-1)^3 \times (4-0)\right] = -8$
##### $\space \to \space \det A = -22$


#### Sarrus İle
##### $\begin{bmatrix} 1 & 2 & 0 \\ 1 & -3 & 2 \\ 0 & 1 & 4 \\ 1 & 2 & 0 \\ 1 & -3 & 2 \end{bmatrix} \quad = [-12 + 0 + 0] - [0+ 2+8] = -22$


---


### Soru $A = \begin{bmatrix} 1 & 2 & -1 & 3 \\ 0 & 1 & 2 & 4 \\ 2 & -1 & 3 & 0 \\ 0 & 2 & 1 & 5 \end{bmatrix} \quad \det A =?$

##### $\det A = A_{11} + 2A_{31}$
##### $A_{11} = (-1)^2 \times \left | \begin{matrix} 1 & 2 & 4 \\ -1 & 3 & 0 \\ 2 & 1 & 5 \\ 1 & 2 & 4 \\ -1 & 3 & 0 \end{matrix} \right | = (11 -14) = -3$

##### $2.A_{31} = 2.(-1)^4 \times \left | \begin{matrix} 2 & -1 & 3 \\ 1 & 2 & 4 \\ 2 & 1 & 5 \\ 2 & -1 & 3 \\ 1 & 2 & 4 \end{matrix} \right | = 15-15 = 0$
#### $\det A = -3$


## Determinant Kuralları
1. Bir matriste tamamen 0'dan oluşan satır veya sütun bulunursa, o matrisin determinant 0 olur.
2. Bir matriste bir satır veya sütun, başka bir satır veya sütunun aynısı veya katı ise, determinant 0 olur.
3. Bir matriste iki satır veya iki sütun yer değiştirirse, determinantın işareti değişir
4. Bir matrisin bir satırı veya bir sütunu, bir sayı ile çarpılırsa, determinant da o sayı ile çarpılmalıdır.
### **5**: Bir satır (sütun için geçerli değil!) bir başka satıra eklenir veya çıkarılırsa, bir satır bir sayı ile çarpılıp diğer bir satıra eklenir veya çıkarılırsa, determinant değişmez.

#### $\det \left | \begin{matrix} 2010 & 2011 \\ 2012 & 2013 \end{matrix} \right | = \det \left | \begin{matrix} 2010 & 2011 \\ 2 & 2 \end{matrix} \right |$
##### $\space \to \space 4020 - 4022 = -2$

### **6**: Aşağıdaki matrislerde determinant, köşegendeki elemanların çarpımına eşittir.
#### **Köşegen Matris**
##### $\begin{bmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{bmatrix}$

#### **Alt Üçgen Matris**
##### $\begin{bmatrix} a & 0 & 0 \\ d & b & 0 \\ e & f & c \end{bmatrix}$

#### **Üst Üçgen Matris**
##### $\begin{bmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{bmatrix}$


