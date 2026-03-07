---
title: Web Tasarım - 3. Ders
created: 2026-03-04
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-3
---

---

## Bürokrasi falan

> [!WARNING] **YENİ ÖDEV: 3 SAYFALI WEB SİTESİ**
> 
> **Ödevin Şartları:**
> 1. **En az 3 sayfa** olacak (Örn: `index.html`, `hakkimizda.html`, `iletisim.html`).
> 2. Sayfalar arası **kesinlikle linkleme (navigasyon)** olacak. (Bir sayfadan diğerine gidip gelinebilecek).
> 3. İçerik **"anlamlı"** olacak. (Sadece `lorem ipsum` ve rastgele resimler koymayın, bir konsepti olsun).
> 4. Derste öğrenilen her şey kullanılacak: **Resimler, Image Map, relative link, favicon vb.**
> 5. **GitHub Pages ile Yayınlanacak**.

---

#  Linkler ve Görseller


### 1. Linkler (Bağlantılar) - `<a>` Etiketi
HTML'de bir sayfadan diğerine geçmek için **Anchor** (Çıpa) kelimesinden gelen `<a>` etiketi kullanılır.

* **Sözdizimi (Syntax):** `<a href="gidilecek_adres">Tıklanacak Metin</a>`
* **`href` Özelliği:** Hypertext Reference. Gidilecek URL'yi veya dosya yolunu belirtir.
* **Mutlak (Absolute) vs Göreceli (Relative) Adresler:**
    * *Mutlak:* Tam web adresi. Örn: `href="http://duzce.edu.tr"`
    * *Göreceli:* Kendi dosyalarımız arası geçiş. Örn: `href="ikinci-sayfa.html"`
    * *Üst Klasöre Çıkmak:* `href="../resimler/logo.png"` (İki nokta ve slash).

#### Linklerin Hedefi (`target` Özelliği)
Linke tıklandığında sayfanın nerede açılacağını belirler:
* `target="_blank"`: Linki **yeni bir sekmede** açar. (En çok kullanılan budur).
* `target="_self"`: Linki aynı sekmede açar. (Varsayılan değer budur, yazmaya gerek yoktur).

#### E-posta Linki (`mailto:`)
Kullanıcı tıklandığında bilgisayarındaki varsayılan e-posta uygulamasını (Outlook, Mail vb.) açar.
* `<a href="mailto:metin@gmail.com">Metin'e Mail At</a>`

#### Sayfa İçi Yönlendirme (Bookmark / Anchor Link)
Çok uzun bir sayfada (örneğin Wikipedia) belirli bir başlığa tıklayıp aşağı kaymak için kullanılır.
1. Önce hedefe bir ID verilir: `<h2 id="bolum4">Bölüm 4</h2>`
2. Sonra link verilir: `<a href="#bolum4">Bölüm 4'e Git</a>`

> [!INFO] **Linklerin Varsayılan Renkleri**
> Tarayıcılar linkleri varsayılan olarak şu renklerde gösterir (CSS ile değiştirilebilir):
> * **Ziyaret Edilmemiş (Unvisited):** Mavi ve altı çizili.
> * **Ziyaret Edilmiş (Visited):** Mor ve altı çizili.
> * **Aktif (Tıklanma anı):** Kırmızı ve altı çizili.

---

### 🖼️ 2. Görseller - `<img>` Etiketi 
Sayfaya resim eklemek için kullanılır. **Kapanış etiketi yoktur!**

* **Sözdizimi:** `<img src="resim_yolu.jpg" alt="Alternatif Metin">`
* **`src` (Source):** Resmin nerede olduğunu belirtir.
* **`alt` (Alternative Text):** Resim yüklenemezse veya görme engelliler için ekran okuyucu kullanılıyorsa okunacak metindir. 
* **Boyutlandırma:** `width` (genişlik) ve `height` (yükseklik) özellikleriyle piksel veya yüzde olarak boyut verilebilir. (Örn: `width="300"` veya `width="50%"`).

#### Resmi Link Yapmak
Bir resme tıklandığında başka bir yere gitmesini istiyorsak, `<img>` etiketini `<a>` etiketinin içine alırız:

```html
<a href="http://duzce.edu.tr">
    <img src="duzce_logo.png" alt="Düzce Üniversitesi">
</a>
```

---

### 🗺️ 3. Gelişmiş Görsel İşlemleri

#### Görsel Haritası (Image Map) - `<map>` ve `<area>`
Bir resmin sadece belirli bölgelerine tıklanabilirlik özelliği katmak için kullanılır.
1. Resme `usemap="#harita_adi"` özelliği eklenir.
2. `<map name="harita_adi">` oluşturulur.
3. İçine `<area>` etiketleriyle şekiller çizilir.
    * `shape="rect"` (Dikdörtgen): Sol üst ve sağ alt X,Y koordinatları istenir.
    * `shape="circle"` (Daire): Merkez koordinatı ve yarıçap (r) istenir.

#### `<picture>` Etiketi (Responsive Görseller)
Farklı ekran boyutlarında (telefon, tablet, bilgisayar) farklı resimler göstermek için kullanılır. Mobil uyumluluk (Responsive Design) için çok önemlidir.

#### Favicon (Sekme İkonu)
Tarayıcı sekmesinde sayfa başlığının yanında duran küçük ikondur. `<head>` etiketleri arasına yazılır. Genelde `.ico` formatındadır.
* `<link rel="icon" type="image/x-icon" href="favicon.ico">`

---

### 💻 Derste Anlatılanların Kod Hâli


```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Hafta 3 - Linkler ve Görseller</title>
    <!-- Favicon Ekleme -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>

    <!-- SAYFA İÇİ YÖNLENDİRME (Menü) -->
    <nav>
        <a href="ikinci_sayfa.html">Hakkımızda Sayfasına Git</a> | 
        <a href="http://duzce.edu.tr" target="_blank">Düzce Üni (Yeni Sekme)</a> |
        <a href="#iletisim">Aşağı Kaydır (İletişim)</a>
    </nav>

    <hr>

    <h2>Görsel Ekleme ve Boyutlandırma</h2>
    <!-- Klasör içinden resim çekme ve boyutlandırma -->
    <img src="resimler/manzara.jpg" alt="Dağ Manzarası" width="500">

    <h2>Resmi Link Olarak Kullanma</h2>
    <a href="https://github.com" target="_blank">
        <img src="github_logo.png" alt="GitHub'a Git" width="100">
    </a>

    <h2>Image Map (Görsel Haritası) Örneği</h2>
    <!-- usemap özelliği ile map'e bağlıyoruz -->
    <img src="gezegenler.jpg" alt="Gezegenler" usemap="#gezegen_haritasi" width="600">
    
    <map name="gezegen_haritasi">
        <!-- Dikdörtgen alan (rect) -->
        <area shape="rect" coords="0,0,100,100" href="gunes.html" alt="Güneş">
        <!-- Dairesel alan (circle) -->
        <area shape="circle" coords="300,150,50" href="dunya.html" alt="Dünya">
    </map>

    <h2>Picture Etiketi (Cihaza Göre Resim)</h2>
    <picture>
        <!-- Ekran genişliği 650px'den büyükse bunu göster -->
        <source media="(min-width: 650px)" srcset="buyuk_resim.jpg">
        <!-- Ekran 465px'den büyükse bunu göster -->
        <source media="(min-width: 465px)" srcset="orta_resim.jpg">
        <!-- Hiçbiri uymuyorsa (mobilde) bunu göster -->
        <img src="kucuk_resim.jpg" alt="Responsive Resim">
    </picture>

    <br><br><br><br><br><br><br><br><br><br> <!-- Sayfayı uzatmak için -->

    <!-- SAYFA İÇİ YÖNLENDİRME HEDEFİ -->
    <h2 id="iletisim">İletişim Bölümü</h2>
    <p>Bana ulaşmak için <a href="mailto:ogrenci@duzce.edu.tr">mail atabilirsiniz.</a></p>

</body>
</html>
```

---

## Derse Aşkın

Hocanın üzerinde durduğu ve sınavlarda (veya ileride iş mülakatlarında) karşına kesin çıkacak kritik detaylar:

1.  **`alt` Özelliğinin Önemi (Sınav Sorusu Adayı):**
    * *Soru:* `<img>` etiketindeki `alt` özelliği neden kullanılır?
    * *Cevap:* Üç ana sebebi vardır: 
        1. Resim linki kırılırsa ekranda ne olduğunu yazıyla belirtmek için.
        2. Görme engelli kullanıcıların kullandığı **Ekran Okuyucular (Screen Readers)** resmi betimleyebilsin diye.
        3. Arama motoru optimizasyonu (**SEO**) için (Google resmin ne olduğunu bu yazıdan anlar).
2.  **Kapanmayan Etiketler (Self-Closing Tags):**
    * Geçen hafta `<br>` ve `<hr>` görmüştük. Bu hafta buna `<img>` ve `<area>` eklendi. Bu etiketlerin kapanışı (örn: `</img>`) **yoktur**.
3.  **Inline (Satır-içi) vs Block (Blok) Elementler:**
    * Hoca derste birkaç resmi yan yana koyduğunda resimlerin alt alta değil, **yan yana** dizildiğini fark etti. Bunun sebebi `<a>` ve `<img>` etiketlerinin **Inline (Satıriçi)** elementler olmasıdır. Paragraf (`<p>`) veya başlık (`<h1>`) gibi tüm satırı kaplamazlar, sadece kendi boyutları kadar yer kaplarlar.

