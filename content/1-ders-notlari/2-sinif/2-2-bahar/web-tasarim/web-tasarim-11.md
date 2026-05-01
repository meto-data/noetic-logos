---
title: Web Tasarım - 11. Ders
created: 2026-04-29
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-11
---
## 1. Fonksiyonlar (Functions)
Program içinde sürekli tekrarladığımız kod bloklarını bir kez tanımlayıp, ihtiyaç duydukça çağırmak için fonksiyonları kullanıyoruz. 

C# veya Java'daki gibi `public`, `private`, `void` veya `int` gibi uzun uzun tür belirtmiyoruz. JavaScript çok esnek bir dil. Sadece **`function`** kelimesini yazıp fonksiyonun adını belirliyoruz.

* **Geriye Değer Döndürmeyen Fonksiyon:**
  Sadece içindeki işlemi yapar, dışarıya bir veri fırlatmaz.
  ```javascript
  function merhaba() {
      document.write("Merhaba.");
  }
  merhaba(); // Fonksiyonu kullanmak için adıyla çağırıyoruz.
  ```

* **Parametre Alan Fonksiyon:**
  Dışarıdan içine veri (parametre) gönderdiğimiz fonksiyonlardır.
  ```javascript
  function kare(sayi) {
      document.write(sayi * sayi);
  }
  kare(5); // İçeri 5 gönderiyoruz, ekrana 25 yazıyor.
  ```

* **Geriye Değer Döndüren Fonksiyon (`return`):**
  İşlemi yaptıktan sonra sonucu bize geri yollamasını istiyorsak **`return`** kelimesini kullanıyoruz.
  ```javascript
  function topla(sayi1, sayi2) {
      return sayi1 + sayi2;
  }
  let sonuc = topla(10, 5); // Dönen 15 değerini bir değişkende tutuyoruz.
  document.write(sonuc);
  ```

---

## 2. Kullanıcıdan Veri Alma (`prompt` ve `confirm`)
Kullanıcıyla etkileşime girmek için hazır fonksiyonları/metotları kullanıyoruz.

* **`prompt()` Metodu:** Ekranda bir mesaj kutusu açıp kullanıcıdan metin/sayı girmesini istiyoruz. Girdiği değeri bir değişkende tutuyoruz.
 
  ```javascript
  let giris = prompt("Lütfen isminizi giriniz:");
  alert("Merhaba " + giris);
  ```

* **`confirm()` Metodu:** Kullanıcıya "Tamam" veya "İptal" seçenekleri sunan bir onay kutusu çıkartıyoruz. Tamam'a basarsa **`true`** (1), İptal'e basarsa **`false`** (0) değeri dönüyor. Bunu genelde `if-else` ile kontrol ediyoruz.
  ```javascript
  let onay = confirm("Silmek istediğinize emin misiniz?");
  if (onay == true) {
      document.write("Tamam'a bastınız.");
  } else {
      document.write("İptal'e bastınız.");
  }
  ```

---

## 3. Nesneler ve Sınıf Mantığı (Objects & Classes)
Nesne tabanlı programlamadaki mantığı burada da kuruyoruz. Nesnelerin özellikleri (değişkenleri) ve eylemleri (metotları) vardır.

**Kısa Yoldan Nesne Oluşturma:**
Süslü parantez `{}` açıp içine `özellik: değer` şeklinde atamalar yapıyoruz.
```javascript
var insan1 = {
    isim: "Metin",
    yas: 20,
    cinsiyet: "atak helikopteri"
};
// İçindeki bir özelliğe ulaşmak için nokta (.) kullanıyoruz:
document.write(insan1.isim); // Ekrana Metin yazar.
```

**Yapıcı (Constructor) Fonksiyon ile Nesne Türetme:**
Programda 30 tane insan olacaksa, hepsini tek tek yazmak amelelik olacağı için bir tane şablon (fonksiyon) oluşturuyoruz, ihtiyaç duydukça `new` kelimesiyle oradan yeni nesneler türetiyoruz.

* **`this` Kelimesinin Kullanımı:** Dışarıdan parametre olarak gelen değer ile nesnenin kendi özelliğinin isimleri aynıysa programın kafası karışmasın diye `this` kullanıyoruz. `this.isim`, "bu nesnenin kendi ismi" demektir.

```javascript
// Şablonumuzu oluşturuyoruz
function Hareket(isim, yas, gozRengi) {
    this.isim = isim;
    this.yas = yas;
    this.gozRengi = gozRengi;
    
    // Nesnenin içine metot da ekleyebiliyoruz
    this.dogumYili = function() {
        return 2026 - this.yas;
    }
}

// Şablondan yeni nesneler türetiyoruz
var i1 = new Hareket("Metin", 20, "kahverengi");
var i2 = new Hareket("Ece", 24, "siyah");

document.write(i1.isim); // Metin
document.write(i2.dogumYili()); // 2022
```

---

## 4. Diziler (Arrays)
Aynı türdeki birden fazla veriyi tek bir değişkende tutmak için dizileri kullanıyoruz. İndis (Index) numaraları **0'dan** başlıyor.

* **Dizi Tanımlama Yöntemleri:**
  ```javascript
  // 1. Yöntem: new Array ile
  var dizi = new Array("elma", "armut", "portakal");
  
  // 2. Yöntem: Sadece eleman sayısını verip sonra atama yapmak
  var dizi2 = new Array(3);
  dizi2[0] = "elma";
  dizi2[1] = "armut";
  
  // 3. Yöntem: Köşeli parantez ile
  var takim1 = ["Fenerbahçe", "Galatasaray"];
  var takim2 = ["Beşiktaş", "Trabzonspor"];
  ```

* **Dizi Metotları:**
  * **`.length`:** Dizinin içinde kaç tane eleman olduğunu sayıp bize veriyor.
  * **`.concat()`:** İki farklı diziyi yan yana birleştirip yeni bir yapı oluşturuyoruz.
  ```javascript
  var takımlar = takim1.concat(takim2);
  document.write(takımlar); // Hepsini yan yana yazar.
  ```

---

## 5. Matematiksel Fonksiyonlar (`Math` Sınıfı)
Sayısal işlemleri yapmak için JavaScript'in kendi içinde hazır gelen `Math` sınıfını kullanıyoruz.

* **`Math.abs(x)`:** Sayının mutlak değerini alıyoruz (Örn: -10 girilirse 10 çıkar).
* **`Math.floor(x)`:** Ondalıklı sayıyı hep **aşağı** yuvarlıyoruz (19.8 -> 19).
* **`Math.ceil(x)`:** Ondalıklı sayıyı hep **yukarı** yuvarlıyoruz (19.2 -> 20).
* **`Math.round(x)`:** Matematik kurallarına göre en yakına yuvarlıyoruz (5 ve üstü yukarı, altı aşağı).
* **`Math.pow(x, y)`:** Üs alıyoruz (Örn: `pow(2,3)` bize 8'i verir).
* **`Math.sqrt(x)`:** Karekök alıyoruz (Örn: 25 girilirse 5 çıkar).
* **`Math.random()`:** 0 ile 1 arasında rastgele bir sayı üretiyoruz.
