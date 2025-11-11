---
created: '2025-08-31'
---
- Basit faizden tek ve en önemli farklı **kazanılan faizin de faiz kazanmasıdır**.
- Her dönemin sonunda kazanılan faiz ana paraya eklenir ve bir sonraki dönemde faiz, bu yeni ve daha büyük ana para üzerinden hesaplanır. Para bu şekilde zamanla doğrusal olarak değil, **üslü (exponential)** olarak artar. 

---

#### Örnek
> 1.000 TL'nin yıllık %10 **bileşik faizle** nasıl büyüdüğüne bakalım

- **Başlangıç**: 1.000₺
- **1. Yılın Sonu**: 1.000₺'ye 100₺ faiz eklenir. $1.000 \times (1 + 0,10) = 1.100$₺
- **2. Yılın Sonu**: Faiz artık 1.100₺ üzerinden hesaplanır. $1.100 \times (1 + 0,10) = 1.210$₺
- **3. Yılın Sonu**: Faiz artık 1.210₺ üzerinden hesaplanır. $1.210 \times (1 + 0,10) = 1.331$₺

---

### Bileşik Faiz Formülü

#### $$GD_n = BD_0 \times (1+i)^n$$
- $GD_n$:  $n$ dönem sonundaki **Gelecek Değer**
- $BD_0$:  Başlangıçtaki ana para (*Bugünkü Değer*)
- $i$: Dönemlik faiz oranı
- $n$: Dönem sayısı


---

#### Örnek
> Yıllık %20 faiz oranı üzerinden bugün yatırdığımız 1.000 TL'nin bileşik faiz esasına göre 10 yıl sonra ulaşacağı değer nedir?

- $BD_0$: $1.000₺$
- $i$: $0,20$
- $n$: $10$ yıl
- $GD_n$:  $1.000 \times (1+0,20)^{10} = 1.000 \times 6,1917 = 6.192,7$₺

---
