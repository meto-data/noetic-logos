---
title: Veri Madenciliği - 2
created: 2026-02-24
draft: true
tags: akademi/dersler/veri-madenciligi
slug: veri-madenciligi-2
---
Base nedir? Environment nedir? Linuxta karşılığı ne, bu bilgilere değin.

Frozen =?

Sütun sayısı, verinin büyüklüğünü belirler. Niteliğini aynı zamanda (?)

3 boyut...

\>=4 boyutlu, görsel olarak ifade edilemez.

- Veride önemli olan kavram niteliktir ve niteliğin değişmesi gerekir. Ayırt edici olan niteliktir kabaca.


Bir nitelik için kullanılan birim =?


Unknown 0 anlamı katarken null direkt değersiz, hiç yok anlamlarında.

---


Veri türleri önemli. Nümerik ve Nominal olmak üzere iki ayrı tür.

### Nümerik
- Sürekli: Yaş, Sıcaklık vs.
- Aralıklı (Interval): Çocuk sayısı, kaza sayısı vs. (>grup biçiminde kümelendirilebilir nispeten? sürekli artış göstermeyenden kastı da irdele)

### Nominal (Kategorik, nispeten dikotomik)
- Binary: Var-Yok, Kadın-Erkek, Hasta-Sağlıklı. Nispeten dikotomi gibi.
- İkiden Çok Kategorili: Renk-Şehir, İsim, Forma Numarası

### Ordinal Veriler
Değerleri arasında sıralı ilişki bulunmaz.

### Ratio (>rasyo) Veriler !!
- Oran (*ratio*) verilebilir veri türlerine denir, birbirleriyle oranlanabilir verilerdir. Kelvin derece ratio türündeyken santigrat nümerik türdedir. 100 santigrat derece, 50 santigrat derecenin iki katı denilemez ama kelvine çevrilirse 60 kelvin, 30 kelvinin 2 misli sıcak biçiminde ifade edilebilir.

```python
print('naber')
```

## Nitelik Türleri


---

- **[[Normalizasyon]]**: İncelenecek verileri normalden sapmayan bir ölçüye göre inceleme, aynı seviyeye getirme işlemi kabaca. Oyunlardaki eşleşme algoritmaları ara sıra benzerlik gösteriyor.

---

Eksik veriler doldurulurken, hangi kategori öncelenecekse onu optimize etmeye, onu daha isabetli kılmaya yönelik olan metod kullanılır. Sınıfsal ayrımla alakalıdır bir diğer deyişle.

Bir ders için bilinmiyorsa, diğer derslerine bakılarak bir metod kullanılabilir misal. Geçmişteki notlarına, geçmiş yıllardaki genel ortalamasına dayalı olarak bir metod da kullanılabilir.


---

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Finansal Dalgalanma Temsili")
plt.show()
```