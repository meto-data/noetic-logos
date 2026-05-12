---
title: Web Tasarım - 12. Ders
created: 2026-05-07
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-12
---
> [!WARNING] **DERS MATERYALLERİ HAKKINDA BİLGİLENDİRME**
> **Ders Dokümanları ve Eksik Konular:**
> * 22-29 Nisan tarihleri arasında işlenen kodlar hocanın akademik sayfasına RAR dosyası olarak yüklendi.
> * Ancak yüklenen dosyalarda **3. ve 4. uygulamalar (Aritmetik Operatörler, Arttırma/Azaltma Operatörleri, Karşılaştırma Operatörleri) eksik.** Bu konular derste işlendi ve daha önceki derslerden de bilindiğinden kendi kendimize çalışacağız bu uygulamaları.


---

# Ders Notları

## 1. DOM (Document Object Model) Kavramı
HTML sayfasındaki kodlar arka planda bir **ağaç (tree)** yapısı oluşturur. En tepede `document` (sayfanın tamamı), onun altında `html`, onun altında `head` ve `body`, body'nin altında ise `div`, `p`, `a` gibi elementler (dallar/yapraklar) bulunur. JavaScript ile bu ağaç yapısındaki herhangi bir elemana ulaşıp onu değiştirmeye **DOM Manipülasyonu** denir.

### DOM Seçicileri (Erişim Metotları)
Bir HTML etiketine JavaScript'ten ulaşmak için şu 3 temel metot kullanılır:

1. **`getElementById("id_adi")`:** HTML'de verilen `id` değerine göre elemanı seçer. ID'ler sayfada eşsiz (tek) olduğu için doğrudan o elemanı getirir.
2. **`getElementsByClassName("sinif_adi")[indis]`:** HTML'de verilen `class` değerine göre elemanları seçer. Sınıflar birden fazla elemanda olabileceği için dönen sonuç bir **dizi (array)** gibidir. Hangisini seçeceğimizi köşeli parantez içinde indis numarası (`[0]`, `[1]` vb.) ile belirtmek zorundayız.
3. **`getElementsByTagName("etiket_adi")[indis]`:** Doğrudan etiket adına (`div`, `p` vb.) göre seçim yapar. Yine sayfada birden fazla aynı etiket olabileceği için indis numarası belirtmek zorunludur.

---

## 2. DOM Özellikleri ve Müdahaleler
Seçtiğimiz elemanın içeriğini, stilini veya sınıfını değiştirmek için şu özellikler kullanılır:

* **`.innerHTML`:** Seçilen elemanın içine metin veya yeni HTML etiketleri ekler/değiştirir.
* **`.textContent`:** Seçilen elemanın sadece metin (text) içeriğini değiştirir. `innerHTML`'nin aksine HTML etiketlerine dokunmaz.
* **`.style`:** Elemanın CSS özelliklerini doğrudan JavaScript üzerinden değiştirir.
    * *Örnek:* `document.getElementById("metin").style.color = "red";`
    * *Örnek:* `document.getElementById("metin").style.fontSize = "20px";`
* **`.classList.toggle("sinif_adi")`:** Belirtilen CSS sınıfını elemana ekler, zaten varsa çıkartır. Tıpkı bir elektrik anahtarı (aç/kapa - 1/0) gibi çalışır.
* **`.classList.remove("sinif_adi")`:** Belirtilen CSS sınıfını elemandan tamamen siler.
* **HTML Niteliklerini Değiştirme:** Bir resmin (`img`) kaynağını (`src`), genişliğini (`width`) veya yüksekliğini (`height`) JS üzerinden değiştirebiliriz.
    * *Örnek:* `document.getElementById("resim").src = "yazilimci2.jpeg";`

---

## 3. DOM Ağaç Gezinimi (Gezinme Metotları)
* **`.childNodes`:** Seçilen elemanın altındaki çocuk (child) düğümleri getirir.
* **`.parentNode`:** Seçilen elemanın bir üstündeki ebeveyn (parent) etiketi getirir.

---

## 4. Kapsamlı Örnek: Vize-Final Not Hesaplama Uygulaması
Kullanıcıdan veri alıp işleyerek ekrana yazdıran bir uygulama yapıldı.

* **`placeholder`:** Kullanıcıya kutuya ne gireceğini anlatan silik gri renkteki ipucu metnidir.
* **`.value`:** Bir `<input>` kutusunun içine kullanıcının yazdığı değeri almak için kullanılır.
* **`Number()`:** Input'tan gelen değer varsayılan olarak metin (string) olduğu için, matematiksel işlem yapabilmek adına onu sayıya (number) dönüştüren fonksiyondur.

```javascript
function hesapla() {
    // 1. Kullanıcının inputlara girdiği değerleri sayıya çevirerek al
    let vize = Number(document.getElementById("vize").value);
    let final = Number(document.getElementById("final").value);

    // 2. Ortalama hesapla
    let ortalama = (vize * 0.4) + (final * 0.6);

    // 3. Şarta göre ekrana yazdır
    if (ortalama > 50) {
        document.getElementById("sonuc").innerHTML = ortalama + " - Geçti";
    } else {
        document.getElementById("sonuc").innerHTML = ortalama + " - Kaldı";
    }
}
```

---

##### **NOT**: Hocanın verdiği RAR dosyasında detaylı olarak kodlar var. O yüzden kodları buraya yazmayacağım gereksiz yer kaplamasın diye, o kodlara bakınız.
## Sınav Odaklı Vurgular ve Olası Sorular

1. **`getElementById` vs `getElementsByClassName` Farkı:**
    * `ById` olan metotta "Element" kelimesi tekildir, çünkü ID sadece bir tanedir.
    * `ByClassName` ve `ByTagName` metotlarında "Elements" kelimesi çoğuldur (S takısı vardır). Sınavda bu metotlar kullanıldığında yanına **indis numarası (`[0]`) konulup konulmadığı** şaşırtmacalı şıklarda sorulur. İndis numarası yoksa kod çalışmaz!
2. **`Math` Yuvarlama Fonksiyonları:** `Math.floor()` (Zemine/Aşağı yuvarla) ile `Math.ceil()` (Tavana/Yukarı yuvarla) arasındaki fark test sorularında karşımıza gelebilir.
3. **`classList.toggle` Mantığı:** Sınavda "Bir butona basıldığında bir CSS sınıfını elemana ekleyen, tekrar basıldığında çıkaran (aç/kapa mantığıyla çalışan) metot hangisidir?" şeklinde sorulursa cevap **`toggle`** olacaktır.
4. **Input'tan Veri Alma:** "Bir HTML formundaki metin kutusuna (input) girilen değeri JavaScript'te yakalamak için hangi özellik kullanılır?" sorusunun cevabı **`.value`**'dur. `.innerHTML` ile karıştırılmamalıdır; `.innerHTML` etiketlerin içindeki yazıyı değiştirir, `.value` ise input kutularındaki girdi değerini alır.