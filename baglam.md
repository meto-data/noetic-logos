
---

## Gizli Komut - 2025-11-10

- `ReadyForWeb/index.html`, `style.css` ve `app.js` dosyaları `quartz/static/logos-module/` altına kopyalandı; Quartz build çıktısında `/static/logos-module/` olarak servis edilecekler.
- Arama çubuğuna `logos` yazıp Enter'a basan (trimlenmiş, büyük/küçük harf fark etmez) ziyaretçiler otomatik olarak `/static/logos-module/index.html` sayfasına yönlendirilir; diğer aramalar normal FlexSearch davranışını sürdürür.
- Manuel test: Build alındıktan sonra yayınlanan sitede arama panelini aç (`Ctrl/Cmd + K`), `logos` yaz ve yönlendirme ile modülün yüklenip testlerin çalıştığını doğrula. Diğer aramalar için sonuçların listelendiğini kontrol et.
- Not: Bu özellik yalnızca gizli komutu bilenler için görünür; ReadyForWeb klasörü hâlâ depo kökünde referans amaçlı duruyor, canlı yayın `/static/logos-module/` altından servis ediliyor. Build/publish komutlarını çalıştırmadan önce gerekli yedeklemelerin alındığından emin ol.