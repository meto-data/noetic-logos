---
title: Web Tasarım - 7. Ders
created: 2026-04-01
draft: false
tags:
  - akademi/dersler/web-tasarim
slug: web-tasarim-6
---

**1. İlk Haftaların Konuları (İnternet ve Web Temelleri)**
Hocanızın kendi ifadesiyle sınavda çıkacak sözel/genel kültür kısımları şunlar:
*   **Domain (Alan Adı) nedir?** 
*   **Hosting (Barındırma) nedir?**
*   Hocanın ilk haftalarda "buna dikkat edin" diye özellikle vurguladığı web'in temel kavramları. *(Hoca bunları "genel kültür olarak bilmeniz gereken şeyler" olarak tanımlıyor).*
*   İlk web tarayıcısını kimin bulduğu **(Tim Berners-Lee - 1990)** ve CSS'in ilk çıkış tarihi **(1996)** gibi derste bahsettiği genel kültür bilgileri.

**2. CSS Çakışmaları ve Öncelik Kuralları (Hocanın "Güzel Soru Olur" Dediği Kısım)**
Hocanız sınavda kesinlikle soracağı soru tipini şu sözlerle açıkça belirtmiş: *"Yani bu da güzel bir soru olur aslında değil mi mesela. Şöyle bir paragraf... Şöyle bir kod var. Şöyle bir CSS kodu var. Bu paragrafın rengi hangisi olur?"*
Bu soruyu çözebilmeniz için şu hiyerarşiyi (Cascading Order) kesinlikle bilmeniz gerekiyor:
*   **En baskın olan (Öncelikli):** Inline CSS (Etiket içine yazılan `style="..."`)
*   **İkinci baskın:** ID seçici (`#id_adi`)
*   **Üçüncü baskın:** Class (Sınıf) seçici (`.class_adi`)
*   **En az baskın:** Element seçici (`p`, `h1` vb.)
*   Ayrıca `<head>` etiketi içinde (Internal) mi yoksa dışarıdan mı (External) çağrıldığına göre son yazılan kodun geçerli olması kuralı.

**3. CSS Seçiciler (Selectors) ve Sözdizimi (Syntax)**
*   HTML etiketine (Örn: `p`), ID'ye (`#`) ve Class'a (`.`) göre nasıl seçim yapıldığı.
*   Grouping Selector: Virgül kullanılarak birden fazla elemanın aynı anda seçilmesi (`h1, h2, p`).
*   Universal Selector: Yıldız (`*`) işaretinin sayfadaki her şeyi seçtiği bilgisi.
*   CSS'te yorum satırının nasıl yazıldığı ( `/* yorum */` ).

**4. Renk Formatları (Colors)**
Hoca renk kodlarının mantığı üzerinde çok durmuş, bunlardan soru gelebilir:
*   **RGB ve HEX formatı mantığı:** Örneğin `#FF0000`'ın kırmızı, `#FFFFFF`'in beyaz, `#000000`'ın siyah olması gibi.
*   **Saydamlık (Opacity/Transparency):** RGBA'daki "A" değerinin (Alfa) transparanlık kattığı. 1 değerinin tam görünür, 0.5'in yarı saydam, 0'ın ise tamamen görünmez yaptığı bilgisi.

**5. Arka Plan (Background) ve Çerçeve (Border)**
*   `background-image`, `background-repeat` (x veya y ekseninde tekrar), `background-attachment` (sabit/fixed veya kayan/scroll olması).
*   Çerçevenin (Border) kısa yoldan nasıl yazıldığı (Örn: `border: 5px dashed red;`).
*   Çerçeveyi yuvarlatmak için `border-radius` kullanıldığı.

**6. Margin Çakışması (Margin Collapse)**
Hocanızın bizzat kod üzerinde gösterdiği tuzaklı bir konu:
*   Üstteki paragrafa `margin-bottom: 50px`, alttaki paragrafa `margin-top: 50px` verirseniz aradaki boşluk 100px **olmaz**, çökmeye (collapse) uğrayarak ikisinden büyük olanı (ikisi de 50 olduğu için **50px**) alınır.

---

**Sınavda ÇIKMAYACAK veya Sorumlu Olmadığınız Konular:**
*   **Box Model'in devamı (Padding, Width, Height vb.):** Bir öğrenci "Padding'den falan sorumlu muyuz?" diye sorduğunda hoca Box Model konusunu vizeden sonraya, haftaya bıraktığını söylüyor. Yani Padding muhtemelen sınavda yok.
*   **Çok ince detaylar:** Hoca, çerçeve stillerini (dotted, dashed, double vs.) veya çok uzun ezber gerektiren ince ayarları "böyle çok detay bir şey sormayacağız" diyerek elemiş.

**Hocanın Sınav Zorluğu Hakkındaki Yorumu:**
Hoca sınavın zor olmayacağını belirterek öğrencileri şu şekilde rahatlatmış: *"Çalışmadan girseniz de zaten yaparsınız. Yok canım, ben soracağım. Zaten derslere giren (yapar)."* Yani derste gösterdiği kod mantıklarını ve bahsettiği temel terimleri (domain vb.) bilmeniz yeterli olacaktır.