---
title: Bilgisayar Donanımı - 5. Ders
ders: YBS2023
konu:
created: 2026-10-14
draft: false
tags:
  - akademi/dersler/ybs2023
---
## Gömülü Sistemler ve Raspberry Pi Mimarisi
- [[tek kart bilgisayar|Tek Kart Bilgisayar]] (Single Board Computer - SBC) sınıfında yer alan Raspberry Pi, standart bir masaüstü bilgisayar kasasıyla aynı işlevsel birimleri tek bir devre kartı üzerinden barındırır.
- Kart üzerindeki merkezî işlem birimi ([[CPU]]) ve sistem belleği ([[RAM]]) yerleşik olarak bulunur. Raspberry Pi 4 modelinden itibaren bellek kapasitesi $4 \space\text{GB}$, $8\space\text{GB}$ veya $12\space\text{GB}$ gibi farklı seçeneklerle yapılandırılabilmektedir.
- Raspberry Pi üzerinde dahili bir sabit disk ([[Hard Disk]]) yer almaz. Cihazın ikincil depolama ve ön yükleme birimi doğrudan [[MicroSD Kart]] üzerinden sağlanır.
- Eski nesil Raspberry Pi 1 modelleri standart SD kart kullanırken, sonraki tüm seriler MicroSD kart mimarisiyle çalışır.

## Görüntü, Çevre Birimi ve Ağ Arayüzleri
- Raspberry Pi 1, 2 ve 3 serilerinde standart tam boyutlu [[HDMI]] çıkışı bulunurken, Raspberry Pi 4 serisinden itibaren kart üzerindeki yer tasarrufunu artırmak amacıyla **Mini HDMI** (Micro HDMI) portlarına geçilmiştir.
- Kart üzerinde klavye ve fare bağlantısı için USB portları yer alır.
- Ağ bağlantısı tarafında tüm modellerde kablolu [[Ethernet]] portu bulunurken, Raspberry Pi 3 Model B+ ve sonraki modellerde dahili kablosuz ağ ([[Wi-Fi]]) yongası standart donanım olarak -taslayer almaktadır.