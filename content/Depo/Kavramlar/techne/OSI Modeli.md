---
tags:
  - bilgi/techne
---

ISO'nun farklı donanım ve yazılımlar arasındaki ağ iletişimini standartlaştırmak için tanımladığı 7 katmanlı kavramsal ağ mimarisidir. Fiziksel kablodan uygulama arayüzüne kadar her katman kendi görevini üstlenip bir üst katmana hizmet verir. Bu modüler yapı ağ iletişimindeki karmaşayı yönetilebilir parçalara böler. İşletmedeki [[Bilgi Sistemleri Hiyerarşisi]] gibi farklı bileşenleri ortak bir veri omurgasında buluşturur.

```mermaid
flowchart TD
    L7["7. Uygulama Katmanı (Application)"]
    L6["6. Sunum Katmanı (Presentation)"]
    L5["5. Oturum Katmanı (Session)"]
    L4["4. Taşıma Katmanı (Transport)"]
    L3["3. Ağ Katmanı (Network)"]
    L2["2. Veri Bağı Katmanı (Data Link)"]
    L1["1. Fiziksel Katman (Physical)"]

    L7 <--> L6 <--> L5 <--> L4 <--> L3 <--> L2 <--> L1
```