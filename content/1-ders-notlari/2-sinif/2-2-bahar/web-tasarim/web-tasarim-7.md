---
title: Web Tasarım - 7. Ders
created: 2026-04-01
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-6
---
## Bürokrasi falan

> [!WARNING] **ÖDEVLER VE VİZE SINAVI HAKKINDA BİLGİLENDİRME**
> 
> **Vize Sorumluluğu:**
> * Vize sınavında **Padding ve Box Model (Kutu Modeli) konularına kadar** sorumluyuz. Margin konusunu işledik, ancak Padding ve Box Model konuları vizeden sonraki haftaya bırakıldı.
> 
> **Ödev Kuralları:**
> * CSS kodlarını HTML etiketlerinin içine (`style="..."` şeklinde) yazmak (Inline CSS) **ödevlerde kesinlikle yasak.** 

---

# Ders Notları

## 1. CSS'e Giriş (Cascading Style Sheets)
Bugün CSS (Basamaklı Stil Sayfaları) konusuna giriş yaptık. CSS, HTML elemanlarının ekranda nasıl görüneceğini tanımlamamıza yarıyor. HTML ile sayfanın iskeletini kurarken, CSS ile makyajını yapıyoruz bir nevi. 
* *Genel Kültür:* İlk web tarayıcısını 1990'da *Tim Berners-Lee* geliştirmiş. **CSS 1** ise 1996'da çıkmıştır.

##### **CSS Sözdizimi**:
CSS yazarken önce neyi değiştireceğimizi seçiyor, sonra süslü parantez açıp özellik ve değer giriyoruz. Her değerden sonra noktalı virgül (`;`) koymayı unutmuyoruz.

`Seçici { özellik: değer; }` -> Örn: `h1 { color: red; }`

---

## 2. Seçiciler (Selectors)
Hangi HTML elemanına stil vereceğimizi belirlemek için seçicileri kullanıyoruz:

* **Element Seçici:** Doğrudan etiket adını yazıyoruz. (Örn: `p`, `body`, `h1`). Sayfadaki tüm o etiketleri etkiler.
* **ID Seçici (`#`):** HTML'de verdiğimiz `id` özelliğine göre seçim yapıyoruz. ID'ler sayfada tek (unique) olmalı ve sayıyla başlamamalıdır. Başına diyez (`#`) koyarak seçiyoruz. (Örn: `#paragraf1`).
* **Class (Sınıf) Seçici (`.`):** HTML'de verdiğimiz `class` özelliğine göre seçim yapıyoruz. Birden fazla elemana aynı class verilebilir. Başına nokta (`.`) koyarak seçiyoruz. (Örn: `.center`).
* **Universal (Evrensel) Seçici (`*`):** Sayfadaki her şeyi seçer.
* **Gruplama:** Birden fazla elemana aynı stili vereceksek aralarına virgül koyarak yazıyoruz. (Örn: `h1, h2, p { color: blue; }`).

---

## 3. CSS Kodlarını Nereye Yazıyoruz?
CSS kodlarını sayfamıza 3 farklı şekilde dâhil edebiliyoruz:

1. **Inline (Satır İçi):** Doğrudan HTML etiketinin içine `style="..."` yazarak yapıyoruz.
2. **Internal (İç CSS):** HTML dosyasında `<head>` etiketleri arasına `<style>` açıp içine yazıyoruz.
3. **External (Dış CSS):** Uzantısı `.css` olan ayrı bir dosya açıp kodları oraya yazıyoruz. Sonra HTML'in `<head>` kısmına `<link rel="stylesheet" href="stil.css">` yazarak bağlıyoruz. Yüzlerce sayfayı tek dosyadan yönetmek için en doğru yöntem budur.

**Cascading (Basamaklanma) ve Öncelik Sırası:**
Aynı elemana farklı yerlerden renk verirsek hangisi geçerli olur? Kural şu: **En içteki, en baskındır.**
* **Öncelik Sırası:** Inline CSS > Internal/External CSS > Tarayıcı Varsayılanı.
* **Seçici Önceliği:** ID Seçici (`#`) **>** Class Seçici (`.`) **>** Element Seçici (`p`).

---

## 4. CSS Yorum Satırı
HTML'de yorum satırı `<!-- yorum -->` şeklindeyken, CSS'te yorum satırı `/* yorum */` şeklinde yapılıyor.

---

## 5. Renkler (Colors)
Renkleri birkaç formatta tanımlayabiliyoruz:
* **İsimle:** `red`, `blue`, `black` vb.
* **RGB:** `rgb(255, 0, 0)` (Kırmızı). Değerler 0-255 arasıdır. Hepsi 0 ise siyah, hepsi 255 ise beyaz olur.
* **Hexadecimal (On Altılı):** `#FF0000` (Kırmızı). `#FFFFFF` (Beyaz). `#000000` (Siyah).
* **RGBA:** Sonundaki "A" (Alpha) saydamlık verir. 0 ile 1 arası değer alır. `0.5` yarı saydamdır.
	* `rgba(255, 0, 0, 0.5);`

---

## 6. Arka Plan (Background)
* **`background-color`:** Arka plan rengini değiştirir.
* **`background-image`:** Arka plana resim koyar. Kullanımı: `url('resim.jpg')` şeklindedir.
* **`background-repeat`:** Resim küçükse tarayıcı onu tekrar ettirir (döşer). Sadece sağa döşemek için `repeat-x`, sadece aşağı döşemek için `repeat-y`, hiç tekrar etmesin, tek kalsın diyorsak `no-repeat` kullanıyoruz.
* **`background-attachment`:** Arka planın sayfayla kayıp kaymayacağını belirler. `fixed` yaparsak yazılar kayar ama arka plan resmi ekrana çivilenmiş gibi sabit kalır. `scroll` varsayılan değerdir.
* **Shorthand (Kısa Yazım):** Bunları tek tek yazmak yerine tek satırda birleştirebiliyoruz: `background: blue url('resim.jpg') no-repeat fixed center;`

---

## 7. Çerçeveler (Borders)
Elemanların etrafına çizgi çekmek için kullanıyoruz. Çerçeve, elemanın dışına doğru verilir, içindeki yazıyı ezmez.
* **`border-style`:** Çizginin tipini belirler. `solid` (düz), `dashed` (kesik kesik), `dotted` (noktalı), `double` (çift).
* **`border-width`:** Çizginin kalınlığı. `5px`, `thick` vb.
* **`border-color`:** Çizginin rengi.
* **Shorthand:** `border: 5px dashed red;` (Kalınlık, tip, renk yan yana yazılır).
* **Yönler:** Sadece alta çizgi çekmek için `border-bottom`, sola çekmek için `border-left` kullanıyoruz.
* **`border-radius`:** Çerçevenin köşelerini yuvarlatır. `border-radius: 10px;` veya tam daire yapmak için `%` (yüzde) kullanabiliyoruz.

---

## 8. Dış Boşluk (Margin)
Elemanın **çerçevesinin dışından**, etrafındaki diğer elemanlarla arasına mesafe koymak için kullanıyoruz.
* `margin-top`, `margin-bottom`, `margin-right`, `margin-left` ile tek tek verebiliyoruz.
* `margin: 20px;` dersek 4 taraftan da 20 piksel boşluk bırakır.
* `margin: auto;` elemanı sağdan ve soldan eşit boşluk bırakarak tam ortaya hizalar.
* **Margin Collapse (Margin Çakışması):** Alt alta duran iki paragraftan üsttekine `margin-bottom: 50px`, alttakine `margin-top: 50px` verirsek aralarındaki boşluk 100px **olmaz**. Çakışırlar ve büyük olanın sözü geçer (ikisi de 50 ise ara boşluk sadece 50px olur).

---

## 💻 Derste Bahsedilenlerin Kod Hâli (Özet)

**stil.css (Dış CSS Dosyamız):**
```css
/* Evrensel Seçici ile sayfanın arka planını ve sabit resmini ayarlıyoruz */
body {
    background-color: #f0f0f0;
    background-image: url('../resimler/benimresmimbudurkardesss.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
}

/* Class Seçici */
.para1 {
    background-color: yellow;
    border: 2px dashed bllue; /* Kısa yoldan çerçeve */
    border-radius: 15px; /* Köşeleri yuvarlattık */
    margin: 25px; /* Dışarıdan 20px boşluk */
}

/* ID Seçici (Class'ı ezer) */
#para1 {
    background-color: lightblue;
    border-style: solid;
}

/* Margin Collapse Örneği */
.ust-kutu {
    margin-bottom: 50px;
}
.alt-kutu {
    margin-top: 50px;
}
/* İki kutu arası boşluk 100px değil, 50px olacaktır. */
```

---

## Sınav Odaklı Vurgular ve Olası Sorular
1. **Basamaklanma Önceliği (Cascading Priority - Banko Soru):** Hoca bizzat "Bu güzel bir soru olur" diyerek vurgu yapmıştı. Sınavda bir paragrafa hem ID, hem Class, hem de Element seçici ile farklı renkler verip "Ekranda hangi renk görünür?" diye sorabilir. **Sıralama şudur: ID > Class > Element.** ID'nin dediği olur. Eğer Inline CSS (`style="..."`) varsa, hepsini ezer, ID'yi bile ezer.
2. **Margin Collapse (Çakışma):** Hoca 50px alt boşluk ve 50px üst boşluk bırakıp sonucun 100px olmadığını özellikle gösterdi. Sınavda "Üstteki div'in `margin-bottom`'u 40px, alttaki div'in `margin-top`'u 30px ise aralarındaki mesafe kaç px olur?" tarzı bir şaşırtmaca sorabilir. Cevap toplamları değil, **büyük olan değerdir** (Yani 40px'tir).
3. **RGB ve Hexadecimal Renk Kodları:** Hoca test çözer gibi ekrana yansıtıp sordu. Beyazın Hex karşılığının `#FFFFFF` veya RGB karşılığının `rgb(255, 255, 255)` olduğu; kırmızının `#FF0000` olduğu sınavda test sorusu olarak karşımıza çıkma ihtimali çok yüksektir. 
4. **Margin Nereye Boşluk Verir?** Çerçevenin (border) **dışına** boşluk verdiğini üzerine basa basa belirtti. Sınavda "Border'ın dışına boşluk bırakan özellik hangisidir?" şeklinde sorulabilir.