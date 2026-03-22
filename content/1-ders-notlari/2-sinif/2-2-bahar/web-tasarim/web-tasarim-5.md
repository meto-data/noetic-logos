---
title: Web Tasarım - 5. Ders
created: 2026-03-18
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-5
---
## Bürokrasi falan

> [!WARNING] **ÖDEVLER VE DERS İŞLEYİŞİ HAKKINDA BİLGİLENDİRME**
> 
> **Ödev Puanlandırması (Ağırlık: %20):**
> 1. İlk iki hafta verilen ödevler kontrol edildi. Sadece yapay zekâya yazdırılıp **aynı şeyleri (kopyala-yapıştır)** teslim edenlere **0** verildi. Haberleri yok, ancak hoca **0** vereceğim onlara diye belirtti.
> 2. Yapay zekâ kullanmasına rağmen istenen konsepte yakın olanlara, derste anlatılmayan etiketler (`<nav>`, `<section>` vb.) kullanmış olsalar bile **kısmî puan** verildi.
> 3. Bu hafta için yeni bir **ödev yok**.
> 
> **Gelecek Haftanın Planı:**
> * Haftaya yavaş yavaş **CSS** konularına giriş yapılacak.

---

# Derse Değgin

## 1. Formlar - `<form>` Etiketi
Formlar, kullanıcıdan veri toplamak ve bu veriyi arka planda işlenmesi için bir sunucuya (server) göndermek amacıyla kullanılır. "Gönder" veya "Submit" butonuna basıldığında form içindeki veriler hedefe iletilir.

* **`action` Özelliği:** Form submit edildiğinde (gönderildiğinde) verilerin hangi dosyaya veya adrese gideceğini belirler. (Örn: `action="form2.html"`).
    * Eğer `action` özelliği yazılmazsa veya içi boş bırakılırsa, form **kendi bulunduğu sayfaya** döner (sayfayı yeniler).
* **`method` Özelliği:** Verinin gönderilme şeklini belirler. Derste `get` ve `post` metotlarından bahsedildi. `get` metodu kullanıldığında form verileri adres çubuğunda (URL'de) görünür. `post` metoduna değinmedik diye hatırlıyorum, sadece kelime olarak değinmiştik zannedersem.
* **`target` Özelliği:** Tıpkı linklerdeki gibi formun sonucunun nerede açılacağını belirler. `target="_blank"` form verisi gönderildikten sonra sonucun yeni bir sekmede açılmasını sağlar, böylece mevcut form sayfası temiz bir şekilde ekranda kalmaya devam eder.

---

## 2. Girdi Alanları - `<input>` Etiketi ve Özellikleri
Form içerisinde en çok kullanılan HTML elemanı `<input>`'tur. Kapanış etiketi (örn: `</input>`) **yoktur**. Satır içi (inline) bir eleman olduğu için yan yana dizilirler. Alt alta almak için `<br>` etiketi kullanılabilir.

* **`type` Özelliği:** Input'un türünü belirler. Derste sayılan türler şunlardır:
    1. `text`: Tek satırlık metin girişi.
    2. `radio`: Radyo butonu (Seçenekler için, sadece bir tane seçilebilir).
        - Eski tip araba radyolarında istasyon değiştirmek için büyük fiziksel tuşlar olurdu. Bu taşların çok özel bir mekanizması vardı: Bir tuşa basıldığı vakit o ana kadar basılı olan diğer tuş otomatik olarak dışarı fırlardı. İşte bu mantıkla `radio` denilmiştir buna da.
    3. `checkbox`: Onay kutusu.
    4. `submit`: Formu gönderen buton.
    5. `reset`: Formdaki tüm verileri temizleyen (sıfırlayan) buton.

* **Metin (Text) Input Özellikleri:**
    * **`name`:** Veriyi gönderirken değişkenin adını belirler. **Çok önemlidir.** `name` belirtilmezse o kutuya girilen değer karşı tarafa gönderilemez. (Örn: URL'de `?isim=Ali` şeklinde görünmesini sağlayan şey `name="isim"` olmasıdır).
    * **`maxlength`:** Kutuya girilebilecek maksimum karakter sayısını sınırlar.
    * **`minlength`:** Kutuya girilmesi gereken minimum karakter sayısını belirler. Eksik girilirse tarayıcı uyarı verir.
    * **`size`:** Input alanının ekranda görünen genişliğini (karakter cinsinden) belirler. Varsayılan genişlik 20 karakterdir.

---

## 3. Etiketleme - `<label>` Etiketi
Form alanlarının ne işe yaradığını belirtmek için kullanılır. Ekran okuyucular (görme engelliler) için bir yol göstericidir. Ayrıca label metnine tıklandığında ilgili input alanının aktifleşmesini (odaklanmasını) sağlar.

* **İlişkilendirme:** Bir `<label>` ile `<input>`'u birbirine bağlamak için;
    1. Input'a bir `id` verilir. (Örn: `id="isim"`)
    2. Label'a `for` özelliği eklenip aynı değer yazılır. (Örn: `<label for="isim">`)

---

## 4. Butonlar
* **`<button type="submit">Gönder</button>`**: Form verilerini `action` adresine yollar.
	* *(Not: Form içinde bir buton olmasa bile, bir text input içindeyken klavyeden **"Enter"** tuşuna basmak formu submit eder).*
* **`<input type="reset">`**: Formun içindeki tüm doldurulmuş alanları silip varsayılan/boş haline geri döndürür.

---

## 5. Derste Yapılan Uygulamalar (Arama Motoru Yönlendirmeleri)
Derste form mantığını anlamak için dış sitelere veri gönderildi:
* **Google'da Arama Yapmak:** Google'ın arama URL'si `search`'tür ve arama kelimesini `q` değişkeniyle alır.
    * `action="https://www.google.com/search"` ve `<input name="q">`
* **YouTube'da Arama Yapmak:** YouTube'un arama URL'si `results`'tur ve arama kelimesini `search_query` değişkeniyle alır.
    * `action="https://www.youtube.com/results"` ve `<input name="search_query">`

---

### 💻 Derste Anlatılanların Kod Hâli

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafta - Formlar</title>
</head>

<body>

    <!-- 1. KENDİ SAYFAMIZA VERİ GÖNDEREN FORM -->
    <h2>Kayıt Formu (Yerel)</h2>
    <!-- target="_blank" ile yeni sekmede açılır. action boş bırakılırsa kendi sayfasına döner. -->
    <form action="form2.html" method="get" target="_blank">
        
        <!-- Label ve Input ilişkilendirmesi (for ve id kullanımı) -->
        <label for="isim_id">İsim:</label>
        <input type="text" id="isim_id" name="isim" maxlength="10" minlength="2" size="16">
        
        <br><br> <!-- Inline elemanları alt alta almak için -->

        <label for="soyad_id">Soyad:</label>
        <input type="text" id="soyad_id" name="soyad">

        <br><br>

        <button type="submit">Gönder</button>
        <input type="reset" value="Formu Temizle">
    </form>

    <hr>

    <!-- 2. GOOGLE ARAMA FORMU -->
    <h2>Google'da Arama Yap</h2>
    <form action="https://www.google.com/search" method="get" target="_blank">
        <label for="google_arama">Arama Kelimesi:</label>
        <!-- Google'ın anlayabilmesi için name="q" olmak zorundadır -->
        <input type="text" id="google_arama" name="q">
        <button type="submit">Google'da Ara</button>
    </form>

    <hr>

    <!-- 3. YOUTUBE ARAMA FORMU -->
    <h2>YouTube'da Arama Yap</h2>
    <form action="https://www.youtube.com/results" method="get" target="_blank">
        <label for="youtube_arama">Arama Kelimesi:</label>
        <!-- YouTube'un anlayabilmesi için name="search_query" olmak zorundadır -->
        <input type="text" id="youtube_arama" name="search_query">
        <button type="submit">YouTube'da Ara</button>
    </form>

</body>
</html>
```

---

## Derse Aşkın

Hocanın anlattıklarında düzeltilmesi gereken kritik hatalar (Hakikat) ve sınavda sorabileceği, üzerine basa basa vurguladığı yerler.
## Sınav Odaklı Vurgular
1. **`name` Özelliğinin Önemi (Kesin Sınav Sorusu Adayı):**
    * Bir formun karşı tarafa (sunucuya) veri gönderebilmesi için `<input>` etiketinde kesinlikle **`name`** özelliği olmalıdır.  (URL'de `?isim=Ali` kısmındaki `isim` kelimesi `name`'den gelir).
2. **`action` Özelliği Boş Bırakılırsa Ne Olur?**
    * Hoca derste bizzat kodu silerek test etti: "Action kısmını silelim... Ne oldu? Tekrar aynı sayfaya döndü." Sınavda "Bir formun action özelliği tanımlanmazsa form submit edildiğinde ne gerçekleşir?" şeklinde bir test sorusu olarak karşınıza çıkma ihtimali çok yüksektir.
3. **Form Elemanlarının Inline (Satıriçi) Olması:**
    * Form elemanlarının varsayılan davranışının blok değil, satıriçi (inline) olduğu sınavda sorulabilir. `<br>` etiketi koyarız bu durumlarda.
4. **Enter Tuşu ile Form Gönderme:**
    * Hoca submit butonunu silip formu "Enter" tuşu ile göndermeyi test etti. Tarayıcıların, form içerisinde bir text input varken Enter tuşuna basıldığında formu otomatik submit etme davranışı (buton olmasa dahi) sınavda şaşırtmacalı bir soru olarak gelebilir.