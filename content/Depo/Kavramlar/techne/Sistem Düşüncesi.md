---
tags:
  - bilgi/techne
---

Bir bütünü oluşturan ögeleri aralarındaki karşılıklı etkileşim ve geri bildirim döngüleriyle birlikte inceleyen düşünme biçimidir. Parçaların toplamı bütünü vermez. Tek bir alt sistemde yapılan değişiklik, bağlı tüm birimleri zincirleme etkiler. Doğrusal düşünce bir nedenin tek bir sonuca yol açtığını varsayar, sistem düşüncesi ise sonucun geri dönüp nedeni nasıl dönüştürdüğünü izler. İşletmelerde sorun çözme yöntemi olan [[Sistem Yaklaşımı]] ve [[Bütünsel Bakış]] ilkesi doğrudan bu çerçeveden doğar.

```mermaid
flowchart LR
    subgraph D["Doğrusal (Parçacı) Bakış"]
        A1["Neden"] --> B1["Sonuç"]
    end
    subgraph S["Sistem Düşüncesi"]
        A2["Alt Sistem A"] <-->|"Etkileşim ve Geri Bildirim"| B2["Alt Sistem B"]
        B2 <--> C2["Alt Sistem C"]
        C2 <--> A2
    end
```