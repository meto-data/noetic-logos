---
title: Web Tasarım - 1. Ders
created: 2026-02-18
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-1
---

## Sınav ve Değerlendirme
- %40 vize, %40 final olacak yanılmıyorsam.
- %20 ise dönem boyunca toplamda verilecek 4 adet ödevden ölçülecek; her ödev %5.
- Derse gelmeyenler de ödevden sorumlu.


---

### 1. Web'in Çalışma Mantığı
Bir web sitesine girmek istediğimizde arka planda şu işlemler gerçekleşir:
*  **Tarayıcı (Browser):** İnternete açıldığımız araçtır (Chrome, Firefox vb.).
*  **DNS (Domain Name System):** Tarayıcıya bir alan adı (örn: *meto-data.github.io/noetic-logos*) yazıldığında, tarayıcı bunu DNS sunucusuna sorar. DNS ise bu alan adının hangi **IP adresi** ile eşleştiğini söyler. (İlk girişte sorulur, sonra tarayıcı hafızasına alır).
*  **İstemci-Sunucu (Client-Server) İlişkisi:**
    *   **İstemci (Client):** İstekte bulunan (*Request*) taraf (Bizim bilgisayarımız).
    *   **Sunucu (Server):** Cevap veren (*Response*) taraf (Web sitesinin dosyalarının barındığı bilgisayar).
*  **Süreç:** İstemci IP adresini öğrenir » Sunucuya bağlanır ve içeriği ister » Sunucu HTML, CSS ve JavaScript dosyalarını gönderir » Tarayıcı bu kodları yorumlayıp görsel hâle getirir.

### 2. Ağ Altyapısı ve Cihazlar
*   **Kablolar:**
    *   **Bakır Kablo:** Elektrik sinyali iletir.
    *   **Fiber Optik Kablo:** Işık sinyali iletir (kıl gibi ince cam). Işık hızıyla veri taşır.
*   **Ağ Cihazları:**
    *   **Son Kullanıcı Cihazları:** PC, telefon, tablet.
    *   **Ara Bağlantı Cihazları:**
        *   **Switch (Anahtar):** Ağ içindeki cihazları birbirine bağlar (Daha basit/akılsız cihaz).
        *   **Router (Yönlendirici):** Ağları birbirine bağlar ve yönlendirir (Daha akıllı cihaz).
*   **Anahtarlama Yöntemleri:**
    *   **Devre Anahtarlama (Circuit Switching):** Eski telefon mantığıdır. Bağlantı kurulunca hat meşgul edilir, başkası giremez.
    *   **Paket Anahtarlama (Packet Switching):** İnternetin çalışma mantığıdır. Veri paketlere bölünür, o an hangi yol boşsa oradan gider. Hat sürekli meşgul edilmez.

### 3. Temel Web Teknolojileri
Adından da anlaşılacağı üzere dersin **ana içeriği** bu üç teknoloji ekseninde ilerleyecektir:
1. **HTML (HyperText Markup Language):**
    - Vücudun iskeleti veya binanın kaba inşaatına benzer. Sayfanın ana yapısını ve içeriğini oluşturur. Bir programlama dili değil, **etiketleme (işaretleme)** dilidir.
2. **CSS (Cascading Style Sheets):**
    * Binanın boyası, kartonpiyeridir bir nevi. Görsel zenginleştirme, stil, renk ve tasarım ile ilintili işlemler gerçekleştirilir.
3. **JavaScript (JS):** Vücudun kas sistemi, hareket kabiliyeti gibidir. Sayfaya **fonksiyonellik** kazandırır. (Örn: Açılır menüler, hesaplamalar, oyunlar, tıklayınca bir şey olması).

### 4. Frontend ve Backend Kavramları
*   **Frontend (Ön Yüz):** İşin sunum kısmı, kullanıcının gördüğü ekran. (HTML, CSS, JS burada çalışır). Biz de daha ziyade bu alanda olacağız ders boyunca.
*   **Backend (Arka Yüz):** İşin mutfağı. Veri tabanı işlemleri, sunucu taraflı hesaplamalar. (Java, C++, PHP, Python gibi diller kullanılır).

### 5. Geliştirme Ortamı (IDE)
* **IDE (Integrated Development Environment):** Entegre Geliştirme Ortamı. Kod yazarken hataları düzelten, tamamlayan, yardımcı olan yazılımlardır..

### 6. Temel HTML Yapısı

- VS Code'da `!` (ünlem) yazıp Enter'a basınca hazır yapı gelir:

```html
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Tasarım ve Programlama Dersi</title>
</head>
<body>
    <h1 style="color:black">Metin'in İnternet Sitesi...</h1>
</body>
</html>
```

*   `<html>`: Tüm kodları kapsar.
*   `<head>`: Sayfa hakkında bilgiler (başlık vb.) içerir. Kullanıcı burayı doğrudan sayfa içinde görmez.
    *   `<title>`: Tarayıcı sekmesinde görünen başlıktır.
*   `<body>`: Sayfada görünen tüm içerik (yazılar, resimler) buraya yazılır.
*   `<h1>`: Başlık etiketi.
*   `<p>`: Paragraf etiketi.

Daha birçok etiket olmasına karşın henüz işlenmediği için değinilmedi. İlerleyen hafta değinilecektir.

### 7. Hosting ve Domain
*   **Server (Sunucu):** 7/24 açık olan, internete bağlı güçlü bilgisayar.
*   **Hosting (Barındırma):** Sunucuda dosyalarınızın saklanması için kiralanan alan.
*   **Domain (Alan Adı):** Sitenin adresi (örn: *google.com*). IP adreslerini akılda tutmak zor olduğu için kullanılır.
