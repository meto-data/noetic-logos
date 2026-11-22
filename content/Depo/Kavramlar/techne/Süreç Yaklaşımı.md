---
tags:
  - bilgi/techne
---

İşletme faaliyetlerini dikey departman sınırlarını aşan, müşteriye değer üreten yatay ve uçtan uca iş akışları biçiminde yönetme anlayışıdır. Birimler arasındaki kopukluğu aşar. Siparişin alınmasından üretime ve teslimata kadar geçen zinciri tek akışta topladığı için sorumluluk boşluklarını kapatır. 1980'lerde [[Sistem Yaklaşımı]] ile birlikte gelişen bu bakış, [[Toplam Kalite Yönetimi]] ve kurumsal kaynak planlaması (ERP) yazılımlarının omurgasını kurdu.

```mermaid
flowchart LR
    subgraph D["Dikey Departmanlar"]
        P["Pazarlama"]
        U["Üretim"]
        F["Finans"]
    end
    S1(["Müşteri Talebi"]) --> S2["Sipariş Alma"] --> S3["Üretim Planlama"] --> S4["Teslimat ve Tahsilat"] --> S5(["Müşteri Memnuniyeti"])
```