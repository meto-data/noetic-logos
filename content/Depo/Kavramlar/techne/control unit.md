---
tags:
  - bilgi/techne
---
İşlemcinin çalışmasını yöneten birimdir. Bellekten alınan komutları yorumlar, komutların hangi sırayla ve hangi bileşenler tarafından yürütüleceğini belirler ve işlemci içindeki veri ve sinyal akışını koordine eder.



```mermaid
flowchart LR
    A["GİRDİ<br/>CPU'ya gelen komut"] 
    --> 
    B["KONTROL BİRİMİ<br/>(Control Unit)<br/><br/>Komutu çözümler<br/>Ne yapılacağını belirler<br/>İşlem sırasını koordine eder"]
    --> 
    C["ÇIKTI<br/>Kontrol sinyalleri<br/><br/>Register • ALU • Bellek<br/>gibi bileşenleri yönlendirir"]
```


**Komut → Control Unit → Kontrol sinyalleri**

Control Unit'in **girdisi komut**, yaptığı iş **komutu yorumlayıp yürütmeyi koordine etmek**, çıktısı ise **diğer CPU bileşenlerini yönlendiren kontrol sinyalleri**.
