---
title: Bilgisayar Donanımı - 3. Ders
ders: YBS2023
konu: Gömülü Sistemler, IoT ve Donanım Mimarisi
created: 2026-09-30
draft: false
tags:
  - akademi/dersler/ybs2023
---
## Kavramlar ve Tanımlar

### Gömülü Sistemler (Embedded Systems)
- [[gömülü sistemler|Gömülü sistemler]], belirli bir mekanik veya elektriksel donanımı kontrol etmek, verileri anlık işlemek ve tek bir amaca yönelik işlevleri yürütmek üzere tasarlanmış; işlemci, bellek ve giriş/çıkış birimlerini tek bir gövdede birleştiren tümleşik bilişim sistemleridir. 
- Yeryüzünde üretilen mikroçiplerin %98'lik bölümü gömülü sistemlerin bünyesinde yer alırken genel amaçlı kişisel bilgisayarlar ise toplam üretimin %2'lik payını oluşturur.


### [[röle|Röle]] (Relay) ve Güç İzolasyonu
- Düşük gerilimli sayısal mantık sinyalleri (3.3V veya 5V DC) aracılığıyla yüksek gerilimli ve yüksek akımlı (12V, 24V veya 220V AC) elektriksel devreleri güvenle açıp kapatan elektromanyetik anahtarlama elemanıdır. Düşük güçlü kontrol kartı ile yüksek güçlü iş elemanı arasında tam bir elektriksel yalıtım ([[galvanik izolasyon|Galvanik İzolasyon]]) kurar.
	- Kampüs giriş turnikeleri, akıllı bariyerler ve manyetik kapı kilitleri [[röle]] modülleriyle sürülür. Öğrenci kartı [[RFID]] okuyucuya yaklaştırıldığında sistem kimliği doğrular. Mikrodenetleyicinin USB portundan sağlanan 5 voltluk zayıf enerji, turnikenin çelik kollarını döndürecek tork motorunu veya bariyeri kaldıracak 12 voltluk mekanizmayı harekete geçirmeye yetersiz kalır. **Kontrol kartı röleye bir tetikleme sinyali iletir. röle içerisindeki elektromıknatıs, hareketli kontağı “tık” sesiyle çekerek harici 12 voltluk besleme hattını motora bağlar ve motorun turnike mekanizmasını hareket ettirmesini sağlar.**

### Breadboard (Devre Tahtası) Mimarisi
- Elektronik bileşenlerin lehim yapılmadan geçici olarak bağlanmasını sağlayan delikli plastik platformdur. Devre kurma, test etme ve prototip hazırlama amacıyla kullanılır. Bileşenler kolayca takılıp çıkarılabilir.
- **Güç hatları**: Kenarlarda dikey uzanır, kırmızı (+) ve mavi (-) işaretlidir. Hat boyunca tüm delikler birbirine bağlıdır. Karttan gelen 5V ve GND bu hatlara bağlanarak birçok sensöre aynı anda enerji dağıtılır.
- **Orta alan**: Aynı satırdaki 5 delik (a-e) yatay olarak birbirine bağlıdır. Aynı satıra takılan bileşenler elektriksel olarak bağlanmış olur.
- **Orta kanal**: İki bloğu birbirinden ayırır. Entegre devreler kısa devre oluşmaması için bu kanala yerleştirilir.



---


| Mimari Parametre                | [[Arduino Uno]] Mimarisi                                                                                 | [[Raspberry Pi 3B+]] Mimarisi                                     |
| :------------------------------ | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **Donanım Sınıfı**              | 8-bit Mikrodenetleyici Geliştirme Kartı                                                                  | 64-bit Dört Çekirdekli Tek Kart Bilgisayar                        |
| **İşlemci Çekirdeği**           | ATmega328P (16 MHz Saat Hızı)                                                                            | Broadcom BCM2837B0 ARM Cortex-A53 (1.4 GHz)                       |
| **İşletim Sistemi Desteği**     | Doğrudan çıplak metal (bare-metal) kod yürütür                                                           | Tam Teşekküllü Linux Tabanlı OS ([[Raspbian]])                    |
| **Birincil Programlama Ortamı** | Harici PC üzerinden derlenen Arduino IDE \[Hoca "emülatör" dedi, yanlış bu, emülatör değildir.\] (C/C++) | Yerel OS üzerinde çalışan Python, C++, Java ortamları             |
| **Kod Çalıştırma Mantığı**      | Bilgisayardan derlenip Flash belleğe tek yönlü aktarılır                                                 | İşletim sisteminde dosya olarak (.py) saklanır ve yorumlanır      |
| **Ağ ve İletişim Yetenekleri**  | Ek modüllerle sağlanan temel ağ desteği                                                                  | Tümleşik Gigabit Ethernet, Çift Bant [[Wi-Fi]], Bluetooth 4.2     |
| **Birincil Kullanım Amacı**     | Düşük gecikmeli, zaman hassasiyetli pin ve motor kontrolü                                                | Görüntü işleme, veri tabanı, web sunucusu, karmaşık IoT analitiği |
