---
tags:
  - akademi/dersler/veri-tabani
---
- Bir tablodaki her satırı (kaydı) **benzersiz** olarak tanımlayan alandır. 
- Aynı tablodaki iki satırda aynı *primary key* değeri olamaz.
#### Özellikleri
- **Tekildir (unique)**: Aynı değerden sadece bir tane olabilir.
- **Boş olamaz (NOT NULL)**: Her kaydın bir kimliği olmalı.
- **Değişmez (immutable)**: Genelde sabit kalır, çünkü kaydı tanımlayan özdür.
- **Bir tabloya sadece bir tane primary key tanımlanabilir. (Ama birden fazla kolondan oluşabilir $\to$ [[composite key]])**
- Sorgu performansını artırır, çünkü birincil anahtarlar otomatik olarak indekslenir. Bu sayede verilere erişim çok hızlı olur.
