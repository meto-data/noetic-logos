---
cssclasses:
  - dashboard
  - wide-page
tags:
  - index
  - felsefe
created: 2025-12-27
---

# 🧠 Felsefe Notları

> *"Sorgulanmamış yaşam, yaşanmaya değmez." - Sokrates*

---

> [!multi-column]
>
>> [!abstract]+ 🕵️ Filozoflar
>> ```dataview
>> LIST rows.isim
>> FROM "ATLAS/3- Felsefe Notları/1- Filozoflar"
>> GROUP BY okul
>> LIMIT 10
>> ```
>
>> [!quote]+ 🏛️ Akımlar
>> ```dataview
>> LIST
>> FROM "ATLAS/3- Felsefe Notları/2- Akımlar"
>> SORT file.name ASC
>> ```

---

> [!multi-column]
>
>> [!example]+ 💡 Kavramlar
>> ```dataview
>> LIST
>> FROM "ATLAS/3- Felsefe Notları/3- Kavramlar"
>> SORT file.name ASC
>> LIMIT 10
>> ```
>
>> [!book]+ 📚 Eserler
>> ```dataview
>> LIST rows.isim
>> FROM "ATLAS/3- Felsefe Notları/4- Eserler"
>> GROUP BY yazar
>> ```

---

## 🗺️ Felsefe Haritası

[[Felsefe Haritası.canvas|Haritayı Görüntüle]]

---

## 🏗️ Klasör Yapısı
- 📂 **[[1- Filozoflar]]**: Düşünürler ve hayatları
- 📂 **[[2- Akımlar]]**: Felsefi okullar ve izmler
- 📂 **[[3- Kavramlar]]**: Felsefi terminoloji
- 📂 **[[4- Eserler]]**: Önemli kitaplar ve incelemeler