---
tags:
  - bilgi/techne
created: 2026-10-05
---
- Bilgisayar sistemindeki komutları yorumlayan, veri akışını yöneten ve tüm operasyonları koordine eden donanım çekirdeğidir. Bünyesinde komut silsilesini ve aygıt senkronizasyonunu yöneten [[control unit|Kontrol Birimi]] (Control Unit) ile matematiksel ve mantıksal hesaplamaalrı icra eden [[arithmetic logic unit|Aritmetik Mantık Birimi]] (Arithmetic Logic Unit - ALU) bulunur.
	- Sisteme klavyeden $5+3$ ifadesi girildiğinde, girdi birimi bu karakterleri elektik sinyallerine dönüştürerek ana belleğe (RAM) aktarır. Kontrol birimi, bellekteki verileri ve toplama komutunu [[arithmetic logic unit|ALU]]'ya sevk eder. ALU bünyesidne ikili toplayıcı mantık kapıları işlemi gerçekleştirir, sonucu 8 olarak üretir ve tekrar RAM üzerindeki hedef adrese yazar. [[control unit|Kontrol birimi]] bu sonucu çıktı birimi olarak monitöre aktararak ekranda "$8$" değerinin görüntülenmesini sağlar.


```mermaid
flowchart TB
    RAM["ANA BELLEK<br/>RAM<br/><br/>• Program komutları<br/>• İşlenecek veriler"]

    subgraph CPU["MERKEZİ İŞLEM BİRİMİ - CPU"]
        direction TB

        CU["KONTROL BİRİMİ<br/>Control Unit<br/><br/>• Komutları yorumlar<br/>• İşlem sırasını yönetir<br/>• Kontrol sinyalleri üretir"]

        REG["REGISTERLAR<br/><br/>• Geçici veri ve adresleri tutar"]

        ALU["ARİTMETİK MANTIK BİRİMİ<br/>ALU<br/><br/>• Aritmetik işlemler<br/>• Mantıksal işlemler<br/>• Karşılaştırmalar"]

        FLAGS["DURUM BAYRAKLARI<br/>FLAGS<br/><br/>Zero • Carry • Sign • Overflow"]
    end

    RAM -->|"Komut"| CU
    RAM -->|"Veri"| REG

    CU -->|"Kontrol sinyalleri"| REG
    CU -->|"İşlem seçimi"| ALU

    REG -->|"Operandlar"| ALU
    ALU -->|"Sonuç"| REG

    ALU -->|"Durum bilgisi"| FLAGS
    FLAGS -->|"Durum bilgisi"| CU

    REG -->|"Veri"| RAM
```
