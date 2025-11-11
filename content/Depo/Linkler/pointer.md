---
created: '2025-10-08'
---
- İşaretçi olarak da bilinir.
- Bir değişkenin *kendisini* değil, o değişkenin **bellekteki adresini** tutan özel bir değişkendir.
- Program bir veriye erişmek istediğinde, o verinin adresini tutan pointer'i takip eder ve RAM'deki ilgili adrese giderek veriyi okur veya yazar.
- C, C++ gibi dillerde programcılar pointer'ları doğrudan yönetir. C# gibi modern dillerde ise bu mekanizma büyük ölçüde soyutlanmıştır. Bir nesne değişkeni (referans) aslında arka planda bir pointer gibi çalışarak Heap'teki nesnenin adresini tutar, ancak biz bu adresi doğrudan görmeyiz ve yönetmeyiz.
