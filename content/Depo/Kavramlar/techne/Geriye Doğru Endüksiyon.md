---
tags:
  - bilgi/techne
---

Karar analizinde ve sistem çözümlemesinde sürecin son noktasından (sağ uçtan) başlayıp adım adım başlangıca doğru ilerleyerek en uygun yolu ya da krizin ana nedenini bulma yöntemidir. Yönetim soldan sağa kurulur. Sorun ise sağdan sola çözülür. Beş yıl sonraki kariyer hedefini belirleyip bugün alınacak eğitimleri ona göre seçmek bu mantıkla işler. Kaza incelemelerinde de gerçekleşen sonuçtan geriye doğru [[Ağ Diyagramı]] ve [[Balık Kılçığı Diyagramı]] dalları budanarak kök nedene inilir.

```mermaid
flowchart RL
    S(["Gerçekleşen Sonuç / Kriz<br/>(Sağ Uç - Başlangıç Noktası)"]) -->|"1. Adım Geriye"| N1["Doğrudan Tetikleyici<br/>(Hatalı Fırlatma Onayı)"]
    N1 -->|"2. Adım Geriye"| N2["İletişim Kopukluğu<br/>(Eksik Mühendis Raporu)"]
    N2 -->|"3. Adım Geriye"| K(["Ana Kök Neden<br/>(Yönetim ve Karar Sistemi Sorunu)"])
```