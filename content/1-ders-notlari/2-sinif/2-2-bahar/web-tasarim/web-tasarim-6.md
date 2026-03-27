---
title: Web Tasarım - 6. Ders
created: 2026-03-22
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-6
---
## 1. Formların Temel Yapısı ve Özellikleri

Kullanıcıdan veri almak için formları kullanıyoruz. Tüm girdi elemanları `<form>` ve `</form>` etiketleri arasına yazılır.

- `action`: Verilen gönderileceği hedef dosyayı belirtir. Misal, `sonuclar.html` sayfasına göndermek için `action = "sonuclar.html"` deriz.
- `method`: Verinin gönderilme şeklini belirler. GET metodu ile gönderdiğimiz veriler, adres çubuğunda soru işaretinden (`?`) sonra açıkça görünür. POST metoduna ileride değineceğiz. 


---

## 2. Girdi Alanları (`<input>`) ve Türleri (`type`)
Kullanıcıdan farklı formatlarda veri almak için `type` özelliğini değiştiriyoruz. Aşağıdaki input türlerini kullanıyoruz:

* **`text`:** Varsayılan input türüdür. Kısa metinler almak için kullanıyoruz.
* **`email`:** E-posta girişi içindir. Tarayıcı tabanlı doğrulama (validation) sağlar. Kullanıcının `@` işareti koyup koymadığını arka plana gerek kalmadan tarayıcı otomatik olarak test eder.
* **`submit`:** Formu gönderen butondur. Varsayılan metni tarayıcı diline göre değişir ("Gönder" veya "Send"). Üzerindeki yazıyı değiştirmek için `value="Verileri Gönder"` özelliğini kullanıyoruz.
* **`color`:** Renk seçici penceresi açar. Seçilen renk URL'ye Hexadecimal formatta gider. URL'deki `%23` işareti `#` (diyez/şarp) simgesini temsil eder (Örn: `%23E0E0FD`).
* **`reset`:** Formun içindeki tüm verileri temizleyip varsayılan/boş hâline döndürür.
* **`checkbox`:** Birden fazla seçim yapılabilen onay kutularıdır.
    * **`value`:** Kutu seçildiğinde arka plana hangi değerin gideceğini belirler (örn: `value="1"`).
    * **`checked`:** Sayfa yüklendiğinde o kutunun varsayılan olarak seçili gelmesini sağlar.
* **`date`:** Tarih seçici açar (Gün/Ay/Yıl). `min` ve `max` değerleri ile tarih aralığı koyabiliyoruz.
* **`file`:** Kullanıcıdan dosya/resim almak için kullanıyoruz. 
    * **`accept`:** Sadece belirli dosya türlerinin seçilmesini zorunlu kılıyoruz (Örn: `accept="image/png"` diyerek sadece PNG seçilmesini sağlıyoruz).
* **`hidden`:** Ekranda görünmeyen ancak arka planda veri göndermek için kullandığımız gizli input türüdür. Örneğin kullanıcının ID'sini formla beraber çaktırmadan göndermek için kullanıyoruz.
* **`image`:** Submit butonu gibi davranan bir resim ekler. `src` özelliği ile resmin yolunu belirtiyoruz.
* **`number`:** Sadece sayı girilebilen alandır. Klavyeden harf girilmesini engeller. `min`, `max` ve artış miktarını belirleyen `step` özelliklerini alabiliyor.
* **`password`:** Girilen karakterleri gizler (nokta veya yıldız yapar). 
* **`range`:** Bir kaydırıcı (slider) çubuğu oluşturur. Memnuniyet anketi gibi yerlerde kullanıyoruz. `min`, `max` ve `step` özellikleri ile aralığı belirliyoruz.
* **Diğer Türler:** `search` (satır sonu boşluklarını temizler), `time` (saat seçici), `month`, `url`, `week`.

---

## 3. Input Özellikleri (Attributes)

* **`name`:** Form verilerinin adres çubuğuna (URL'ye) hangi değişken adıyla gideceğini belirler. Veri göndermek için **mutlaka yazmak zorundayız.** `name` yoksa veri de gitmez.
* **`id` ve `for` İlişkisi:** Bir `<label>` etiketindeki `for` değeri ile `<input>` etiketindeki `id` değeri aynı olduğunda, bu iki elemanı birbirine bağlıyoruz. Böylece yazıya tıklandığında da kutu aktifleşiyor.
* **`required`:** Alanın doldurulmasını zorunlu kılıyoruz. Boş bırakıp gönder'e basılırsa tarayıcı "Lütfen bu alanı doldurun" uyarısı veriyor.
* **`minlength` / `maxlength`:** Metin kutusuna girilebilecek minimum ve maksimum karakter sayısını sınırlandırıyoruz.
* **`readonly`:** Alanın kullanıcı tarafından değiştirilmesini engelliyoruz (sadece okunabilir yapıyoruz).

---

## 4. JavaScript ile URL'den Veri Okuma

Formdan GET metoduyla gönderdiğimiz verileri `sonuclar.html` sayfasında ekrana yazdırmak için temel bir JavaScript kodu yazıyoruz. Bu kodları `<script>` etiketleri arasına yazıyoruz (İleride JS kodlarını ayrı dosyaya alacağız).

1. **URL Parametrelerini Almak:** Adres çubuğundaki verileri okumak için `URLSearchParams` sınıfını kullanıyoruz:
   `const params = new URLSearchParams(window.location.search);`
2. **Belirli Bir Veriyi Çekmek:** `name="isim"` olan veriyi bir değişkene atıyoruz:
   `const isim = params.get("isim");`
3. **Ekrana Yazdırmak:** HTML içinde `id="sonuclar"` olan bir `<div>` oluşturuyoruz ve JS ile içini dolduruyoruz:
   `document.getElementById("sonuclar").innerHTML = ...`
4. **Template Literals (Şablon Dizgileri):** Değişkenleri metin içine doğrudan yazabilmek için tırnak yerine backtick (`` ` ``) işareti kullanıyoruz ve değişkenleri `${degisken}` yapısıyla çağırıyoruz.

---

### 💻 Derste Yazdığımız Kodlar

**form.html (Veri Gönderen Sayfa):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formlar</title>
</head>
<body>
    <h2>Gelip ruhsuzluğu yıktı kelâmın cümle evzânı.</h2>
    <form action="sonuclar.html" method="get">
        <label for="isim">İsim:</label>
        <input required minlength="2" maxlength="100" type="text" name="isim" id="isim"> <br><br>

        <label for="soyad">Soyad:</label>
        <input minlength="2" maxlength="100" type="text" name="soyad" id="soyad"> <br><br>

        <label for="e-posta">E-posta:</label>
        <input type="email" name="e-posta" id="e-posta"> <br><br>

        <label for="renk">Renk Seç:</label>
        <input type="color" name="renk"><br><br>

        <h4>Sevdiğiniz Balık Türü: </h4>
        <label for="cp">Çipura</label>
        <input checked type="checkbox" name="balik" id="cp" value="1"> <br>
        <label for="sc">Sarı Çipura</label>
        <input type="checkbox" name="balik" id="sc" value="1"> <br>
        <label for="yunus">Yunus</label>
        <input type="checkbox" name="balik" id="yunus" value="1"> <br><br>
        
        <label for="dogum-tarihi">Doğum Tarihi:</label> <br><br>
        <input value="2004-03-22" type="date" name="dtarihi" id="dogum-tarihi"> <br><br>
        
        <label for="memnunluk">Dersten ne kadar memnunsunuz?</label>
        <input type="range" name="memnunluk" id="memnunluk" min="0" max="100"> <br><br>

        <label for="resim">Resim Seç:</label>
        <input type="file" name="resim" id="resim"> <br><br>

        <input type="hidden" name="gizli" value="Bu gizli bir veridir."> <br><br>
        
        <label for="görsel">Görsel Seç:</label>
        <input type="image" src="" alt="Görsel Seç" name="görsel" id="görsel"> <br><br>

        <input type="submit" value="Verileri Gönder"> <br><br>
        <input type="submit" value="Gönder"><br><br>
        <input type="reset" value="Sıfırla">
    </form>
</body>
</html>
```

**sonuclar.html (Veriyi Karşılayan Sayfa):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Üye kaydın alındı kanka hadi iyisin.</h2>

    <div id="sonuclar"></div>

<script>
    const params = new URLSearchParams(window.location.search);

    const isim = params.get("isim");
    const soyad = params.get("soyad");
    const eposta = params.get("e-posta");
    const memnunluk = params.get("memnunluk");

    document.getElementById("sonuclar").innerHTML = `
        <p>İsim: ${isim}</p>
        <p>Soyad: ${soyad}</p>
        <p>E-posta: ${eposta}</p>
        <p>Memnunluk: ${memnunluk}</p>
    `;
</script>
</body>
</html>
```

---

## Derse Aşkın

## Sınav Odaklı Vurgular ve Olası Sorular
1. **`name` Özelliğinin Önemi:** Bir input içindeki verinin karşı tarafa (URL'ye) gitmesi için `name` özelliğinin **şart olduğu** defalarca vurgulandı. Sınavda "Bir form elemanının değerinin sunucuya iletilebilmesi için hangi attribute kesinlikle bulunmalıdır?" şeklinde sorulma ihtimali çok yüksek.
2. **Tarayıcı Tabanlı Doğrulamalar (Browser Validation):** `type="email"` ve `required` özelliklerinin arka plan (sunucu/javascript) koduna gerek kalmadan **tarayıcı tarafından** engellendiği/kontrol edildiği vurgulandı. Sınavda "Aşağıdakilerden hangisi HTML5 ile gelen tarayıcı tabanlı bir doğrulamadır?" şeklinde sorulabilir.
3. **GET Metodunun Dezavantajı:** Şifre (`password`) alanına yazılan karakterler ekranda gizlense bile, form `GET` metodu ile gönderildiği için adres çubuğunda (URL'de) açıkça göründüğü bizzat test edildi. Bu durum sınavda "Güvenlik gerektiren veriler (parola vb.) gönderilirken neden GET metodu kullanılmamalıdır?" şeklinde bir soru olarak karşımıza çıkabilir. 
4. **Dosya Sınırlama (`accept`):** Dosya yükleme (`type="file"`) alanında sadece belirli uzantıların (örneğin sadece PNG) seçilebilmesi için `accept` özelliğinin kullanıldığı gösterildi. Sınavda özellik eşleştirme veya boşluk doldurma sorusu olarak çıkabilir.