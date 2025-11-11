
---

## Gizli Komut - 2025-11-10

- `ReadyForWeb/index.html`, `style.css` ve `app.js` dosyaları `quartz/static/logos-module/` altına kopyalandı; Quartz build çıktısında `/static/logos-module/` olarak servis edilecekler.
- Arama çubuğuna `logos` yazıp Enter'a basan (trimlenmiş, büyük/küçük harf fark etmez) ziyaretçiler otomatik olarak `/static/logos-module/index.html` sayfasına yönlendirilir; diğer aramalar normal FlexSearch davranışını sürdürür.
- Manuel test: Build alındıktan sonra yayınlanan sitede arama panelini aç (`Ctrl/Cmd + K`), `logos` yaz ve yönlendirme ile modülün yüklenip testlerin çalıştığını doğrula. Diğer aramalar için sonuçların listelendiğini kontrol et.
- Not: Bu özellik yalnızca gizli komutu bilenler için görünür; ReadyForWeb klasörü hâlâ depo kökünde referans amaçlı duruyor, canlı yayın `/static/logos-module/` altından servis ediliyor. Build/publish komutlarını çalıştırmadan önce gerekli yedeklemelerin alındığından emin ol.
- `/home/logos/noetic-papers/Finansal Yönetim` dizisindeki hub ve iki ders modülü `quartz/static/finance-module/` altına kopyalandı; `/static/finance-module/` altında yayınlanıyor.
- Arama çubuğuna `finance` yazıldığında (trim + case-insensitive) `/static/finance-module/index.html` hub sayfasına yönlendiriliyor; `logos` ve `finance` komutları `search.inline.ts` içinde tek bir eşleme tablosundan yönetiliyor.
- `/home/logos/noetic-papers/OOP` dizisindeki tek sayfalık modül `quartz/static/oop1-module/` altına taşındı; arama çubuğuna `oop1` yazıldığında `/static/oop1-module/index.html` açılıyor.

## Tarih Metadata - 2025-11-11

- Tüm `content/**/*.md` dosyalarının frontmatter’ına ISO formatında (`YYYY-MM-DD`) `created` alanı girilmesi zorunlu kılındı; güncel durum `scripts/manage-created-dates.mjs --write` ile normalize edildi.
- Quartz konfigürasyonunda `CreatedModifiedDate` plugin’i artık öncelikle frontmatter, ardından git geçmişini (son olarak filesystem) kullanacak şekilde ayarlandı.
- CI/sync öncesi kontrol için:
  - `npm run dates:check` → eksik/normalize edilmemiş dosyaları listeler (write yok, exit 1).
  - `npm run dates:write` → eksikleri otomatik doldurur (git creation date ya da FS fallback).
- Script çıktısında “manual follow-up” olarak işaretlenen dosyalar, uygun tarihi elle girene kadar yeniden raporlanır.
- Otomasyonu kapatmak için `dates.config.json` içindeki `enabled` değerini `false` yapabilir ya da tek seferlik `DATES_ENFORCE=false npm run dates:write` kullanabilirsin; yeniden açmak için `true`.