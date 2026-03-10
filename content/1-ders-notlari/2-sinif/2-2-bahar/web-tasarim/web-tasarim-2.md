---
title: Web Tasarım - 2. Ders
created: 2026-02-25
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-2
---

> [!DANGER] **ÖDEV UYARISI: REPO İSİMLENDİRMESİ**
>
> 1. Repo ismi **Ad-Soyad** formatında olacak.
> 2. **Küçük harfler** kullanılacak.
> 3. **Boşluk** kesinlikle olmayacak.
> 4. Tire (`-`) veya alt çizgi (`_`) kullanımı önerilmiyor ("tire mire koymadan" dedi).


---

## DERS NOTLARI: HTML Temelleri ve Biçimlendirme

### 1. Temel Araçlar ve Kaynaklar
Hocanın derste kullandığı ve önerdiği kaynaklar:
*   **Referans Kaynaklar:**
    *   [MDN Web Docs](https://developer.mozilla.org/) (Mozilla Developer Network): Daha teknik, tarayıcı uyumluluğu için bakılacak yer.
    *   [W3Schools](https://www.w3schools.com/): Ansiklopedi gibi, temel etiketlerin listesi burada.
*   **Editör:** Visual Studio Code
    *   *İpucu:* Sol alttaki **Ayarlar -> Color Theme** kısmından "Dark" temayı seçebilirsin.
*   **GitHub Entegrasyonu:**
    *   Hoca dosyaları manuel yüklemek yerine VS Code içindeki **Source Control** sekmesini kullanmamızı önerdi.
    *   **Akış**: Değişiklik yap $\rightarrow$ Mesaj yaz $\rightarrow$ **Commit** $\rightarrow$ **Push**.

### 2. HTML Yapısı (Anatomi)
HTML bir programlama dili değil, bir **İşaretleme Dili**dir (Markup Language).

*   `<!DOCTYPE html>`: Tarayıcıya dokümanın [[HTML5]] olduğunu bildirir.
*   `<html>`: Kök element.
*   `<head>`: Sayfa başlığı (`<title>`) ve meta verilerin bulunduğu, ekranda gözükmeyen kısım.
*   `<body>`: Kullanıcının gördüğü her şey burada yer alır.

### 3. Metin Etiketleri (Text Elements)

> [!INFO] **Browser Davranışı**
> HTML kodunda birden fazla boşluk bırakmak (`Space`) veya `Enter` tuşuna basmak çıktıyı etkilemez. Tarayıcı bunları tek bir boşluk olarak görür.

#### Başlıklar (Headings)
`<h1>`'den `<h6>`'ya kadar sıralanır.
*   `<h1>`: En büyük başlık (Sayfada 1 tane olması SEO için iyidir).
*   Tarayıcılar başlıkların altına ve üstüne otomatik **margin** (boşluk) ekler.

#### Paragraf ve Satır İşlemleri
*   `<p>`: Paragraf etiketi. Her paragraf yeni satırdan başlar.
*   `<br>`: **Line Break**. Satır atlatır. (Kapanış etiketi yoktur).
*   `<hr>`: **Horizontal Rule**. Yatay çizgi çeker. (Kapanış etiketi yoktur).
*   `<pre>`: **Preformatted Text**. Kod editöründe nasıl yazdıysan (boşluklar, enterlar dahil) ekranda öyle görünür. Şiir gibi.

#### Metin Biçimlendirme (Formatting)
Derste üzerinden geçilen etiketler:

| Etiket | Anlamı | Açıklama |
| :--- | :--- | :--- |
| `<b>` | Bold | Kalın metin. |
| `<strong>` | Strong | Önemli metin (Genelde kalın gözükür). |
| `<i>` | Italic | Eğik metin. |
| `<em>` | Emphasized | Vurgulu metin. |
| `<mark>` | Marked | Sarı kalemle çizilmiş gibi. |
| `<small>` | Small | Küçük metin. |
| `<del>` | Deleted | Üstü çizili (Silinmiş). |
| `<ins>` | Inserted | Altı çizili (Eklenmiş). |
| `<sub>` | Subscript | Alt simge (Örnek: H₂O). |
| `<sup>` | Superscript | Üst simge (Örnek: x²). |

#### Alıntı ve Özel Etiketler
*   `<q>`: Kısa alıntı (Quote). Tarayıcı otomatik tırnak işareti (" ") ekler.
*   `<abbr>`: Kısaltma (Abbreviation). `title` özelliği ile üzerine gelince açıklama çıkar.
*   `<address>`: İletişim bilgileri. Genelde italik gösterir.
*   `<bdo dir="rtl">`: **Bi-directional Override**. Metni tersten (sağdan sola) yazar.
*   `<!-- Yorum Satırı -->`: Kodu debug ederken veya not alırken kullanılır, ekranda gözükmez.

### 4. Renkler ve Stiller (Giriş Seviyesi)
[[CSS]] konusuna gelmeden önce renkler `style` özelliği (attribute) ile gösterildi.

**Renk Tanımlama Yöntemleri:**
1.  **Renk İsimleri:** HTML'de ön tanımlı 140 renk var. (Örn: `Tomato`, `Violet`, `MediumSeaGreen`, `DodgerBlue`).
2.  **RGB:** `rgb(red, green, blue)` formatı. (0-255 arası değerler).
3.  **Hexadecimal:** `#` ile başlar, 16'lık tabanda yazılır. (Örn: `#ff0000`).

---

### 💻 Derste Yazılan Kodların Toplanmış Hâli


```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Hafta 2 - HTML Temelleri</title>
</head>
<!-- Body arka plan rengini değiştirdik -->
<body style="background-color: deepskyblue;">

    <!-- BAŞLIKLAR -->
    <!-- h1 içine style vererek rengini değiştirdik -->
    <h1 style="background-color: tomato;">Yönetim Bilişim Sistemleri</h1>
    <h2>HTML Ders Notları</h2>
    
    <!-- YATAY ÇİZGİ -->
    <hr>

    <!-- PARAGRAF VE BOŞLUKLAR -->
    <!-- style ile yazı rengini beyaz (white) yaptık -->
    <p style="color: white;">
        Bu bir paragraf elementidir.    HTML kodunda     bırakılan    boşluklar
        tarayıcı tarafından dikkate alınmaz. (Burada çok boşluk var ama gözükmeyecek).
    </p>

    <!-- SATIR ATLATMA (BR) -->
    <p>Bu satırdan sonra<br>alt satıra geçilecek.<br><br>İki satır boşluk bırakıldı.</p>

    <!-- PRE (ŞİİR ÖRNEĞİ) -->
    <h3>Pre Etiketi Örneği</h3>
    <pre>
    Korkma, sönmez bu şafaklarda yüzen al sancak;
    Sönmeden yurdumun üstünde tüten en son ocak.
        (Boşluklar ve enterlar olduğu gibi korunur)
    </pre>

    <hr>

    <!-- FORMATTING (BİÇİMLENDİRME) -->
    <h3>Metin Biçimlendirme</h3>
    <p>Bu metin <b>kalın (bold)</b> yazıldı.</p>
    <p>Bu metin <strong>önemli (strong)</strong> yazıldı.</p>
    <p>Bu metin <i>italik (italic)</i> yazıldı.</p>
    <p>Bu metin <mark>işaretlendi (mark)</mark>.</p>
    <p>Suyun formülü: H<sub>2</sub>O (sub etiketi)</p>
    <p>Matematik: 10<sup>2</sup> = 100 (sup etiketi)</p>

    <!-- ALINTI VE KISALTMA -->
    <p>Epiktetos, kendisine köle diyen bir kişiye dedi ki: <q>Asıl köle sensin.</q> (q etiketi tırnak ekler)</p>
    <p><abbr title="World Health Organization">WHO</abbr> (Üzerine gelince açıklama çıkar)</p>

    <!-- BORDER VE STİL ÖRNEĞİ -->
    <!-- Hoca çerçeve (border) örneği de verdi -->
    <p style="border: 2px solid dodgerblue; padding: 10px;">
        Bu paragrafın etrafında bir çerçeve var.
    </p>

    <!-- BDO (TERSTEN YAZMA) -->
    <p><bdo dir="rtl">Bu yazı sağdan sola yazılacak</bdo></p>

    <!-- YORUM SATIRI -->
    <!-- Bu yazı ekranda gözükmez, sadece kodda görünür -->

</body>
</html>
```

