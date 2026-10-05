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
- Elektronik bileşenlerin lehimleme gerekmeksizin geçici olarak birleştirilmesini, test edilmesini ve prototiplenmesini sağlayan delikli platformdur. Gövde iki ana bölümden ve simetrik iki paralel bloktan oluşur.