---
title: Web Tasarım - 4. Ders
created: 2026-03-11
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-4
---
## Bürokrasi, ödev vs.

> [!WARNING] **ÖDEV VE SINAV SÜRECİ HAKKINDA BİLGİLENDİRME**
> 
> **GitHub ve Ödev Puanlandırması:**
> 1. Sadece yapay zekâya yazdırılmış, derste istenmeyen (karmaşık CSS style kodları vb.) kodları içeren ödevlere **puan verilmeyecektir**. Hoca sadece istediği konseptin uygulanmasını bekliyor. **Ders dışı hiçbir şeyin projeye eklenmesini istemiyor.**


---

# Derse Değgin

## 1. Sayfa Başlığı - `<title>` Etiketi
`<head>` bölümünde kullanılan `<title>` etiketi, sayfanın başlığını belirler.
* Sayfanın içeriğini ve anlamını ifade eder.
* **SEO (Search Engine Optimization - Arama Motoru Optimizasyonu)** için kritik öneme sahiptir. Arama motoru algoritmaları, sonuçları gösterip göstermeyeceğini belirlerken buradaki kelimeleri dikkate alır.

> 	Tarayıcıda "Favoriler (Bookmarks)" eklendiğinde görünen isim bu etiketle belirlenir.


---

## 2. Tablolar - `<table>` Etiketi
Eskiden web sayfalarının ana iskeletini (layout) kurmak için kullanılırdı (navbar, reklam alanı, içerik, footer gibi bölümleri tablo hücrelerine bölerek). Ancak günümüzde bu işlem için `<div>` ve semantik (anlamsal) etiketler kullanılmaktadır. Yine de veri listelemek için tablolar önemlidir.

* **Ana Etiketler:**
    * `<table>`: Tabloyu başlatır.
    * `<tr>` (Table Row): Tablo satırlarını oluşturur.
    * `<th>` (Table Heading): Başlık hücreleridir. Varsayılan olarak metni **kalın (bold)** yapar ve **ortalar**.
    * `<td>` (Table Data): Standart veri hücreleridir. Varsayılan olarak **sola yaslı** ve normal kalınlıktadır.
* **Hücre İçeriği:** Bir tablo hücresi (`<td>`); metin, resim, liste, link veya başka bir tablo içerebilir.
* **Tablo Özellikleri (CSS ve HTML Karışık):**
    * `border`: Çerçeve ekler. (Örn: `border-collapse` ile çift çizgili çerçeveler tek çizgi haline getirilir).
    * `width` / `height`: Tablo veya hücrelerin genişlik/yükseklik ayarları (Yüzde veya piksel olarak verilebilir).
* **Hücre Birleştirme:**
    * `colspan`: Sütunları birleştirir (Yatay birleştirme).
    * `rowspan`: Satırları birleştirir (Dikey birleştirme).
* **Tablo Başlığı:**
    * `<caption>`: Tabloya genel bir başlık eklemek için `<table>` etiketinden hemen sonra kullanılır.

---

## 3. Listeler (Lists)
Özellikle menü (navbar) yapımlarında çok sık kullanılır. Üç çeşidi vardır:

### Sırasız Listeler (Unordered List) - `<ul>`
* `<ul>` etiketi ile başlar, elemanlar `<li>` (List Item) ile eklenir.
* Varsayılan olarak maddelerin başına nokta koyar.
* *(Eski HTML özelliği)* `type` parametresi ile madde işareti değiştirilebilir: `circle` (içi boş yuvarlak), `disc` (dolu yuvarlak), `square` (kare).

### Sıralı Listeler (Ordered List) - `<ol>`
* `<ol>` etiketi ile başlar, elemanlar `<li>` ile eklenir.
* Varsayılan olarak 1, 2, 3... diye sıralar.
* `type` parametresi alabilir: `1`, `A`, `a`, `I`, `i`.
* `start` parametresi ile saymanın kaçtan başlayacağı belirlenebilir (Örn: `start="10"`).

### Açıklama Listeleri (Description List) - `<dl>`
* `<dl>` (Description List): Ana kapsayıcı.
* `<dt>` (Description Title): Açıklanacak başlık/terim.
* `<dd>` (Description Data): Terimin açıklaması.

> [!INFO] **İç İçe Listeler (Nested Lists)**
> Bir liste elemanının (`<li>`) içine yeni bir liste (`<ul>` veya `<ol>`) eklenebilir. Tarayıcı otomatik olarak alt listeyi içeriden başlatır.

---

## 4. Block ve Inline (Blok ve Satıriçi) Elemanlar
HTML elemanlarının ekranda nasıl davranacağını belirleyen iki temel varsayılan görüntüleme türü vardır.

* **Block-Level (Blok Seviyesi) Elemanlar:**
    * Her zaman **yeni bir satırda** başlarlar.
    * Ekrandaki yatay genişliğin (width) tamamını (`%100`) kaplarlar.
    * Üstten ve alttan otomatik boşluk bırakırlar.
    * *Örnekler:* `<p>`, `<div>`, `<li>`, `<header>`, `<footer>`, `<nav>`, `<section>`.
* **Inline (Satıriçi) Elemanlar:**
    * Yeni bir satırda başlamazlar.
    * Sadece içindeki içerik **ne kadar yer gerektiriyorsa o kadar** genişlik kaplarlar.
    * **Kural:** Bir inline elementin içine block element yazılamaz!
    * *Örnekler:* `<span>`, `<a>`, `<button>`, `<img>`.

---

## 5. Taşıyıcı ve Anlamsal Etiketler
* **`<div>` (Division):** HTML elemanlarını gruplamak ve taşımak için kullanılan blok seviyesinde bir konteynerdir. Kendi başına görsel bir anlam ifade etmez, `class` veya `id` verilerek CSS ile şekillendirilir.
* **`<span>`:** Metinlerin veya içeriklerin sadece belirli bir kısmını biçimlendirmek için kullanılan satıriçi (inline) bir konteynerdir.
* **Semantik Web Etiketleri:** `<div>` ile aynı işi yaparlar ancak arama motorlarına ve geliştiricilere o bölümün ne olduğunu anlatırlar.
    * `<header>` (Sayfa başlık kısmı)
    * `<nav>` (Navigasyon/Menü)
    * `<section>` (Bölüm)
    * `<footer>` (Sayfa altbilgisi)

---

## 6. Class ve ID Farkı
HTML elemanlarını CSS ile seçmek veya JavaScript ile manipüle etmek için kullanılırlar. Büyük/küçük harf duyarlıdırlar.

* **Class (Sınıf):**
    * **Birden fazla farklı elemana aynı `class` adı verilebilir.** (Örn: Sayfadaki 3 farklı `div`'e `class="city"` verilebilir).
    * CSS'te seçerken başına **nokta (`.`)** konur. (Örn: `.city`)
* **ID (Kimlik):**
    * **Benzersiz (Unique) olmalıdır.** Bir HTML sayfasında aynı ID'ye sahip birden fazla eleman olamaz/olmamalıdır.
    * Sayı ile başlayamaz, boşluk içeremez.
    * CSS'te seçerken başına **kare/hash (`#`)** konur. (Örn: `#city`)

---

## 💻 Derste Anlatılanların Kod Hâli

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <!-- SEMANTİK ETİKETLER (Derste sayfa layout'u anlatılırken bahsedilenler) -->
    <header>Sayfanın ana hatlarının en başındaki kısım</header>
    <nav>Menü ve linkler</nav>
    <section>İçerik bölümü</section>

    <!-- TABLOLAR -->
    <table style="border: solid black; width: 70%;">
        <caption>Tablo Başlığı (Caption)</caption>
        
        <colgroup span="2" style="background-color: lightgray;"></colgroup>

        <tr style="border: solid black;">
            <th colspan="2" style="border: solid black;">İsim Soyad (Colspan ile birleştirildi)</th>
            <th style="border: solid black;">Numara</th>
            <th style="border: solid black;">Not</th>
        </tr>
        <tr style="border: solid black;">
            <td style="border: solid black;">Veri 1</td>
            <td style="border: solid black;">Veri 2</td>
            <td style="border: solid black;">Veri 3</td>
            <td rowspan="2" style="border: solid black;">Rowspan</td>
        </tr>
        <tr style="border: solid black;">
            <td style="border: solid black;">Veri 4</td>
            <td style="border: solid black;">Veri 5</td>
            <td style="border: solid black;">Veri 6</td>
        </tr>
    </table>

    <br><br>

    <!-- LİSTELER -->
    <!-- Sırasız Liste -->
    <ul type="square">
        <li>Yönetim Bilişim Sistemleri (ABD Ekolü YBS)</li>
        <li>İşletme Enformatiği (Alman Ekolü YBS)</li>
        <li>Sağlık Kurumları Yöneticiliği</li>
        <li>Muhasebe</li>
        <li>Finans</li>
    </ul>

    <!-- Açıklama Listesi -->
    <dl>
        <dt>coffee</dt>
        <dd>A dark, bitter beverage made from the roasted and ground seeds of the coffee plant.</dd>
        <dt>philosophy</dt>
        <dd>Kavramların art alanına ışık tutmak, düşünme üzerine düşünmek vesaire.</dd>
    </dl>

    <!-- Sıralı Liste (Start özelliği ile) -->
    <ol type="1" start="10">
        <li>Mühendislik Fakültesi</li>
        <li>
            Teknoloji Fakültesi
            <!-- İç İçe Liste (Nested List) ve Type Özelliği -->
            <ol type="a">
                <li>Elektrik elektronik mühendisliği</li>
            </ol>
        </li>
    </ol>

    <br><br>

    <!-- BLOCK VE INLINE ELEMENTLER -->
    <!-- Paragraf (Block) ve Span (Inline) -->
    <p style="border: solid black;">
        Paragraf bir block level elementtir, satırı tamamen kaplar. 
        <span class="note" style="border: solid red;">
            Span ise inline (satır içi) elementtir, sadece gerektiği kadar yer kaplar.
        </span>
    </p>

    <!-- DİV, CLASS VE ID KULLANIMI -->
    <!-- Class: Birden fazla elemana verilebilir -->
    <div class="city" style="background-color: gray; color: white; padding: 20px; margin: auto; width: 50%;">
        City Class'ına Sahip Div 1
    </div>
    <div class="city" style="background-color: gray; color: white; padding: 20px; margin: auto; width: 50%;">
        City Class'ına Sahip Div 2
    </div>

    <!-- ID: Sayfada tek (unique) olmalıdır. -->
    <div id="city">
        City ID'sine Sahip Div 1
    </div>
    <div id="city">
        City ID'sine Sahip Div 2 (Aynı ID birden fazla elemente verilmemelidir)
    </div>

    <!-- SEMANTİK ETİKET (Footer) -->
    <footer>En alttaki genel bilgilerin olduğu kısım</footer>

</body>
</html>
```

---

# Derse Aşkın

## Sınav Odaklı Vurgular

1.  **Block ve Inline Kavramları (Sınav Sorusu Adayı):**
    * *Soru Potansiyeli:* "Aşağıdakilerden hangisi block-level bir elementtir?" (Cevap: div, p, vb.) veya "Inline bir element, block bir elementi kapsayabilir mi?" (Cevap: Hayır).
2. **Class ve ID Farkı:**
    * Hoca hem teorik olarak hem de editörde deneyerek bu ikisinin farkı üzerinde durdu. `class`'ın birden çok elemana, `ID`'nin tek bir elemana verildiği çıkabilir.
3.  **Tablolarda Hücre Birleştirme (`colspan` ve `rowspan`):**
    * Derste tablo kodlarken "İsim Soyad" kısmını tek bir hücrede göstermek için 'bilerek' :D hata yapıp sonra `colspan` kullanarak düzeltti. Bu tarz "yaparak gösterilen" trick'ler sınavlarda klasik veya test sorusu olarak ("Sütun birleştirmek için hangi özellik kullanılır?") sorulabilir.
4.  **Semantik  Web:**
    * Hoca `<div>` içinde `<div>` yazmanın eski bir yöntem olduğunu, bunun yerine `<header>`, `<nav>`, `<section>`, `<footer>` gibi etiketlerin kullanılması gerektiğini belirtti. Bu kavramların `<div>` ile aynı işi yaptığı ama tarayıcıya "anlam" ifade ettiği sınavda sorulabilir.