---
title: Web Tasarım - 10. Ders
created: 2026-04-22
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-10
---
## 1. JavaScript'e Giriş

**JavaScript Kodlarını Nereye Yazıyoruz?**
Kodları çalıştırmak için Visual Studio Code ve "Live Server" eklentisini kullanıyoruz. JS kodlarını projeye iki şekilde dahil edebiliriz:
1. **Dahili (Internal):** HTML dosyasının içinde, `<head>` veya `<body>` etiketleri arasına `<script>` ve `</script>` etiketleri açıp kodları doğrudan buraya yazıyoruz.
2. **Harici (External):** Uzantısı `.js` olan ayrı bir dosya açıyoruz (Örn: `script.js`). Ardından HTML dosyasının içine `<script src="script.js"></script>` yazarak bu dosyayı sayfamıza çağırıyoruz.

---

## 2. Ekrana Çıktı Verme
JavaScript'te kullanıcıya veya ekrana bir şeyler göstermek için şu komutları kullanıyoruz:
* **`document.write("Metin");`**: Parantez içindeki metni doğrudan HTML sayfasının (gövdesinin) içine yazdırır. İçerisinde HTML etiketleri de kullanılabilir (Örn: `document.write("<h1>Başlık</h1><br>");`).
* **`alert("Uyarı mesajı");`**: Sayfa ilk açıldığında veya bir eylem gerçekleştiğinde tarayıcıda yukarıdan açılan bir pop-up (uyarı) penceresi çıkartır.

---

## 3. Değişken Tanımlama (`var` ve `let`)
Diğer dillerdeki gibi `int`, `string`, `float` diye uzun uzun tür belirtmiyoruz. JavaScript veri türünü atadığımız değere göre otomatik anlıyor. 
Değişken tanımlamak için **`var`** veya **`let`** anahtar kelimelerini kullanıyoruz.

```javascript
let x = 100; // JS bunun tam sayı olduğunu anlar.
var y = "Yönetim Bilişim Sistemleri"; // JS bunun String olduğunu anlar.

// Tek satırda birden fazla değişken tanımlama:
let a = 10, b = 20, c;
c = a + b;
```

**String ve Sayıların Birlikte Kullanımı:**
Eğer bir sayıyı çift tırnak içine alırsanız JS onu metin (string) olarak algılar.
`let x = "100"; let y = 10;`
Bu ikisini toplarsanız (`x + y`) matematiksel toplama yapmaz, yan yana birleştirir. Sonuç **`10010`** olur.

---

## 4. Operatörler
* **Aritmetik Operatörler:** `+`, `-`, `*`, `/`, `%` (Mod alma).
* **Arttırma/Azaltma:** `x++` (Değeri 1 arttırır), `x--` (Değeri 1 azaltır).
* **Bileşik Atama:** `x += 2` (x'in mevcut değerine 2 ekle ve tekrar x'e eşitle demektir).
* **Karşılaştırma Operatörleri:** Geriye sadece `true` veya `false` döndürürler.

* **Mantıksal Operatörler:**
    * **Ve (`&&`):** İki koşulun da doğru (true) olması zorunludur. Biri bile yanlışsa sonuç `false` çıkar.
    * **Veya (`||`):** Koşullardan sadece birinin doğru (true) olması, sonucun `true` çıkması için yeterlidir.

---

## 5. Karar Yapıları (If-Else ve Switch-Case)
Programın akışını belirli şartlara göre yönlendirmek için kullanıyoruz.

**If - Else Yapısı:**

```javascript
let x = 5;
if (x == 1) {
    document.write("Değer 1'dir.");
} else if (x == 2) {
    document.write("Değer 2'dir.");
} else {
    document.write("Farklı bir sayıdır."); // Ekrana bu yazılır.
}
```

**Switch - Case Yapısı:**
Bir değişkenin alabileceği kesin değerleri kontrol etmek için kullanıyoruz. Her `case` bloğunun sonuna programdan çıkması için mutlaka **`break;`** yazıyoruz. Hiçbir şarta uymazsa **`default:`** bloğu çalışır.

---

## 6. Döngüler (For ve While)
Tekrarlayan işlemleri yaptırmak için döngüleri kullanıyoruz.

**For Döngüsü:**
Başlangıç değeri, bitiş koşulu ve artış/azalış miktarını tek satırda yazıyoruz.
```javascript
for (let i = 0; i < 10; i++) {
    document.write(i + "<br>"); // 0'dan 9'a kadar alt alta yazar.
}
```

**While Döngüsü:**
Sadece koşul belirtiyoruz. Artış veya azalış miktarını döngünün içine (süslü parantezlerin arasına) bizim manuel yazmamız gerekiyor. Aksi takdirde döngü asla bitmez (Sonsuz döngü).
```javascript
let a = 10;
while (a > 0) {
    document.write(a);
    a--; // Bunu yazmazsak sonsuz döngüye girer, tarayıcı çöker.
}
```

---

## 7. Break ve Continue Deyimleri
Döngülerin akışına müdahale etmek için kullanıyoruz.
* **`break;`**: Görüldüğü anda döngüyü tamamen iptal eder, döngüden dışarı atar.
* **`continue;`**: Görüldüğü anda o anki adımı (değeri) pas geçer, atlar ve döngüyü bir sonraki sayıdan devam ettirir.

```javascript
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // 5'i ekrana yazmaz, atlar. 6'dan devam eder.
    }
    document.write(i);
}
```
