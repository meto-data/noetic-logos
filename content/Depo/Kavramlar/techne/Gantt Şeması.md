---
tags:
  - bilgi/techne
---
Bir iş veya [[kavram-proje|proje]] kapsamındaki görevlerin başlangıç-bitiş zamanlarını, sürelerini ve birbirine göre sıralamasını yatay çubuklar hâlinde gösteren görsel planlama ve zaman çizelgeleme aracıdır.


```mermaid
gantt
    title Araştırma Planı
    dateFormat YYYY-MM-DD
    axisFormat %b

    section Hazırlık
    Literatür taraması :a1, 2026-11-01, 30d
    Hipotez ve tasarım :a2, after a1, 15d

    section Saha
    Veri toplama       :b1, after a2, 45d

    section Analiz
    Veri analizi (SPSS):c1, after b1, 30d
    Raporlama          :c2, after c1, 20d
```