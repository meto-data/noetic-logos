---
tags:
  - akademi/dersler/veri-tabani
---
- Bir tablonun *birincil anahtarı* birden fazla sütundan (bileşik anahtar) oluşuyorsa, herhangi bir "anahtar olmayan sütun"un bu anahtarın sadece bir parçasına bağlı olması durumuna kısmi bağımlılık denir. 
- Yani anahtar tam olarak birden çok sütundan oluşurken, bazı sütunlar sadece o anahtarın alt kümesindeki bir veya birkaç parçaya bağlı kalıyor, tam anahtara değil.

#### Senaryo 1: Anahtar Tek Parçaysa (Bileşik Değilse)

| `🔑 Ogrenci_No (PK)` | `Ad` | `Soyad` |
| -------------------- | ---- | ------- |
|                      |      |         |
- Bu tablonun anahtarı sadece `Ogrenci_No`. Tek bir sütun bu.  
- Şimdi 2NF kuralını uygulamaya çalışalım: "Anahtar olmayan sütunlar, anahtarın bir kısmına değil, tamamına bağlı olmalıdır."
- Ad sütunu, anahtarın bir "kısmına" bağlı olabilir mi? **Hayır. Çünkü anahtarın 'kısmı' diye bir şey yok,** anahtar zaten tek bir bütün.
- Bu yüzden Ad ve Soyad mecburen anahtarın tamamına (`Ogrenci_No`) bağlıdır.
- **Sonuç:** Bir tablonun birincil anahtarı **tek bir sütundan** oluşuyorsa, o tablo 1NF'yi geçtiği anda **otomatik olarak 2NF'yi de geçmiş sayılır.** 2NF ihlali aramak anlamsızdır.

---

#### Senaryo 2: Anahtar Çok Parçalıysa (Bileşik Anahtarsa)


sütunlara ayrılır. Bu işlem sonucunda ortaya çıkan tablo şudur:


| `Ogrenci_No` | `Ad`  | `Soyad` | `Ders_Kod`  | `Egt_Ad`    | `Egt_Soyad` |
| ------------ | ----- | ------- | ----------- | ----------- | ----------- |
| 101          | Salih | Girgin  | VIBECODE101 | Wojak       | Developer   |
| 101          | Salih | Girgin  | MOBDEV101   | Fatih Kadir | Akın        |
| 102          | Arif  | Çıkkın  | TWITTER101  | Prompt      | Mühendisi   |
| 103          | Onur  | Özcan   | CHATGPT101  | Sam         | Altman      |
| 103          | Onur  | Özcan   | VIBECODE101 | Wojak       | Developer   |

- Bu tablonun anahtarı nedir? `Ogrenci_No` tek başına yeterli değil (çünkü `101` ve `103` iki kere var). `Ders_Kod` tek başına yeterli değil (çünkü `VIBECODE101` iki kere var). Bir satırı benzersiz yapan şey (`Ogrenci_No`, `Ders_Kod`) ikilisidir. İşte bu **bileşik anahtardır**.
- Şimdi anahtarımızın **iki parçası** var: `Ogrenci_No` parçası ve `Ders_Kod` parçası.
- Artık o kritik soruyu sorabiliriz: "Diğer sütunlar anahtarın tamamına mı bağlı, yoksa sadece bir parçasına mı?"
- **Ad ve Soyad sütunlarını inceleyelim:** '`Salih Girgin`' bilgisi, anahtarın tamamına, yani "101 numaralı öğrencinin VIBECODE101 dersini almasına" mı bağlı? **Hayır.** '`Salih Girgin`' bilgisi, anahtarın sadece **Ogrenci_No parçasına** bağlı. Hangi dersi alırsa alsın adı soyadı aynı kalır.
- İşte bu duruma **kısmî bağımlılık** denir. Anahtarın sadece bir kısmına bağlı olma durumu. Bu da 2NF'nin ihlalidir.

---

#### **ÖZETLE NEDEN ZORUNLU:**

- 2NF'nin varlık sebebi olan "kısmî bağımlılık" sorunu ancak ve ancak birincil anahtarın "kısımları" (yani parçaları) olduğunda ortaya çıkabilir. 
- Anahtar tek bir sütundan oluşuyorsa, parçası da yoktur, dolayısıyla 2NF sorunu da olamaz. Bu yüzden bileşik anahtar kavramını anlamak 2NF'nin neden gerektiğini anlamak için bir ön koşuldur, yani zorunludur.