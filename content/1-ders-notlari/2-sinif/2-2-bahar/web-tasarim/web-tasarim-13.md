---
title: Web Tasarım - 13. Ders
created: 2026-05-13
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-13
---
## Bürokrasi ve Sınıf İçi İşleyiş

> [!WARNING] Gelecek Hafta
> **Gelecek Haftanın Planı:**
> * Haftaya web sayfalarındaki resim geçişlerini sağlayan ve hareketli nesnelerle kurgulanan **Slider** yapısı işlenecektir.

---

## 1. Dinamik Liste ve Ürün Ekleme (Alışveriş Sepeti Mantığı)
Bu uygulamada kullanıcıdan bir "Ürün Adı" ve "Fiyat" alınarak bir `<ul>` (sırasız liste) içine eklenmesi ve toplam tutarın kümülatif olarak (üzerine eklenerek) hesaplanması sağlandı. 

**Kullanılan Metotların Detaylı Açıklaması:**
* **`.value`:** Bir `<input>` (metin kutusu) içine kullanıcının klavyeden girdiği değeri çekip almak için kullanılır.
* **`Number()`:** JavaScript, input kutularından gelen her şeyi varsayılan olarak metin (string) kabul eder. Eğer fiyat gibi matematiksel bir işlem yapacağımız bir değer alıyorsak, bunu sayısallaştırmak için `Number()` fonksiyonunun içine alırız.
* **`document.createElement("etiket")`:** HTML tarafında fiziksel olarak bulunmayan, sadece JavaScript'in hafızasında sanal bir HTML etiketi (örneğin bir `<li>` maddesi) yaratır.
* **`.appendChild(eleman)`:** Hafızada yaratılan veya var olan bir HTML elemanını, başka bir elemanın içine "çocuk (alt) eleman" olarak yerleştirir. Bu sayede yaratılan `<li>` maddesi, `<ul>` listesinin içine fiziksel olarak gömülür.

```html
<input type="text" id="urun" placeholder="Ürün Adı">
<input type="number" id="fiyat" placeholder="Fiyat">
<button onclick="urunEkle()">Listeye Ekle</button>

<ul id="liste"></ul>
<p id="toplam">Toplam Tutar: 0 TL</p>

<script>
    let toplamFiyat = 0; 

    function urunEkle() {
        let urunAdi = document.getElementById("urun").value;
        let urunFiyati = Number(document.getElementById("fiyat").value);

        let li = document.createElement("li");
        li.innerHTML = urunAdi + " - " + urunFiyati + " TL";
        
        document.getElementById("liste").appendChild(li);

        toplamFiyat += urunFiyati;
        
        document.getElementById("toplam").innerHTML = "Toplam tutar " + toplamFiyat + " TL";
    }
</script>
```

---

## 2. Tema Değiştirme (Aç/Kapa Mantığı)
Sayfanın arka planını siyah, yazılarını beyaz yapan bir karanlık mod (Dark Mode) uygulaması yapıldı. 

**Kullanılan Metodun Detaylı Açıklaması:**
* **`classList.toggle("sinif_adi")`:** Bir HTML elemanının CSS sınıf listesine bakar. Eğer belirttiğimiz sınıf (örneğin `dark`) o elemanda **yoksa ekler**, eğer **varsa siler**. Elektrik anahtarı gibi 1-0 (Aç-Kapa) mantığıyla çalışır. Bu sayede "Temayı Aç" ve "Temayı Kapat" diye iki ayrı buton ve fonksiyon yazmaktan kurtuluruz.

```html
<h2 id="baslik">JavaScript Document Object Model Dersi</h2>
<p>Bu sayfada tema değiştirilebilir.</p>
<button onclick="temaDegistir()">Tema Değiştir</button>

<style>
    .dark {
        background-color: black;
        color: white;
    }
</style>

<script>
    function temaDegistir() {
        document.body.classList.toggle('dark');
    }
</script>
```

---

## 3. Rastgele Şifre Oluşturucu
İçinde harfler, sayılar ve noktalama işaretleri bulunan bir karakter havuzundan 8 haneli rastgele bir şifre üreten algoritma yazıldı.

**Kullanılan Metotların Detaylı Açıklaması:**
* **`Math.random()`:** 0 ile 1 arasında (0.1, 0.85 vb.) rastgele ondalıklı bir sayı üretir. Bu sayıyı, karakter havuzunun toplam uzunluğu (`.length`) ile çarparak havuzun sınırları içinde rastgele bir sayı elde ederiz.
* **`Math.floor()`:** Elde ettiğimiz rastgele sayı ondalıklı olduğu için (örn: 15.7), bunu bir dizinin indis numarası olarak kullanamayız (15.7'nci harf diye bir şey yoktur). `floor` metodu bu sayıyı daima **alt tam sayıya** yuvarlayarak (15'e) net bir indis numarası elde etmemizi sağlar.
* **`+=` (Artı Eşittir Operatörü):** Bu operatör sayılarda toplama yaparken, metinlerde (string) **yan yana birleştirme (concatenation)** yapar. Çektiğimiz karakterler harf ve sembol olduğu için bunları matematiksel olarak toplayamayız, `+=` sayesinde bunları yan yana dizerek şifreyi oluştururuz.

```html
<button onclick="sifreOlustur()">Şifre Oluştur</button>
<p id="sifre"></p>

<script>
    function sifreOlustur() {
        let karakterler = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?";
        let uretilenSifre = ""; 

        for (let i = 0; i < 8; i++) {
            let rastgeleIndeks = Math.floor(Math.random() * karakterler.length);
            uretilenSifre += karakterler[rastgeleIndeks]; 
        }

        document.getElementById("sifre").innerHTML = uretilenSifre;
    }
</script>
```

---

## 4. Animasyonlar ve Hareketli Nesneler
HTML elemanlarına hareket ve animasyon kazandırmak için JavaScript'in zamanlayıcı (timer) fonksiyonları kullanılır. Derste bir kutuyu hareket ettirme ve rengini otomatik değiştirme uygulamaları yapıldı.

**Kullanılan Metotların Detaylı Açıklaması:**
* **`setInterval(fonksiyon, milisaniye)`:** İçine yazdığımız kod bloğunu, belirttiğimiz milisaniye aralıklarıyla **sürekli olarak ve sonsuza kadar** tekrar ettiren fonksiyondur. (1000 milisaniye = 1 saniyedir). Animasyonların kalbidir.
* **`clearInterval(degisken_adi)`:** `setInterval` sonsuza kadar çalıştığı için, onu belirli bir şarta bağlayıp durdurmamız gerekir. `setInterval`'i bir değişkene atarız ve durmasını istediğimiz yerde `clearInterval` içine o değişkeni yazarak döngüyü kırıp animasyonu bitiririz.

### Kutuyu Sağa Doğru Hareket Ettirme
Kırmızı bir kutuyu soldan sağa hareket ettirmek için konum değeri sürekli artırılıp CSS'in `left` özelliğine atandı. Hoca burada şu çok önemli detayı belirtti: *"Left yazdım diye s1ola gitmiyor. Left, 'soldan uzaklık' demektir. Soldan uzaklığı artırdığınız için kutu sağa doğru itilmiş olur."*

```html
<div id="kutu" style="width: 100px; height: 100px; background-color: red; position: relative;"></div>
<br>
<button onclick="hareketEt()">Animasyonu Başlat</button>

<script>
    function hareketEt() {
        let kutu = document.getElementById("kutu");
        let konum = 0; // Başlangıç noktası

        let animasyon = setInterval(function() {
            if (konum > 400) {
                clearInterval(animasyon); // Konum 400'ü geçince animasyonu durdur
            } else {
                konum++; // Konumu her adımda 1 artır
                kutu.style.left = konum + "px"; // CSS'teki left (soldan uzaklık) değerine pikselli olarak ata
            }
        }, 5); // Bu işlemi her 5 milisaniyede bir tekrarla
    }
</script>
```


### Renk Değiştirme Animasyonu
Bir dizi içine renkler tanımlandı. `setInterval` ile her 1 saniyede kutunun arka plan rengi dizideki bir sonraki renge geçirildi. İndis numarası dizinin eleman sayısına ulaştığında, hata vermemesi için tekrar sıfırlanarak başa dönmesi sağlandı.

```html
<div id="renkKutusu" style="width: 150px; height: 150px; background-color: red;"></div>

<script>
    let renkler = ['red', 'blue', 'green', 'purple', 'orange'];
    let indeks = 0;

    setInterval(function() {
        document.getElementById("renkKutusu").style.backgroundColor = renkler[indeks];
        indeks++; // Bir sonraki renge geçmek için indeksi artır

        // Eğer indeks, dizinin toplam eleman sayısına ulaşırsa (dizi bittiyse)
        if (indeks == renkler.length) {
            indeks = 0; // Tekrar başa (red) dön
        }
    }, 1000); // Bu işlemi her 1000 milisaniyede (1 saniye) bir tekrarla
</script>
```
