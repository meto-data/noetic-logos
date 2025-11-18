# 2025-11-17 Yapılanlar

## Chat Sistemi (Sohbet)

### Yeni Özellikler
- **Settings entegrasyonu**: Ayarlar paneline "Özellikler" bölümü altında Sohbet toggle'ı eklendi
  - Modern switch tasarımı (sağda toggle, solda yazı)
  - Açınca chat aktif, kapatınca tamamen deaktif (leave + cleanup)
  - localStorage ile kalıcı

- **Deneysel uyarı**: Chat panelinin altına disclaimer eklendi
  - "🧪 Deneysel özellik! Test aşamasındadır, hatalar olabilir. Sorumluluk kabul edilmez :)"

- **Default kapalı**: Chat artık varsayılan olarak kapalı, Ayarlar'dan açılması gerekiyor

- **/sayfa komutu iyileştirmesi**: Markdown link formatı
  - Eski: `📄 Sayfa Adı\nhttps://url...`
  - Yeni: `📄 [Sayfa Adı](https://url...)` - tıklanabilir link
  - Sadece noetic-logos.pages.dev URL'leri kabul edilir (güvenlik)

### UI/UX İyileştirmeleri
- **Sabit boyut**: 430x520px (resize kaldırıldı)
- **Mobil uyum**: 480px altında tam genişlik, responsive tasarım
- **Header sadeleştirildi**: Nickname + yeşil/kırmızı status dot + çevrim içi sayısı
- **"Hazır" yazısı kaldırıldı**: Sadece görsel durum göstergesi
- **Border radius**: 10px max
- **Takma ad formu**: Daha orantılı (40px padding, max-width: 280px, büyük fontlar)
- **Mesaj silme**: Onay istemeden direkt silme

### Performans Optimizasyonları
- **Polling sadece panel açıkken**: Panel kapalıyken 0 request (eskiden sürekli polling)
  - Eski: 4,320 request/6 saat
  - Yeni: 0 request/6 saat (panel kapalıyken)
- **Heartbeat sadece panel açıkken**: Panel kapatılınca durdurulur
- **Reddit tarzı yükleme**: Panel açılınca mesajlar yüklenir, kapatılınca her şey durur

## Settings (Ayarlar) Sistemi

### Tema Flicker Düzeltmesi
- Palette/font/size ayarları artık **hemen** uygulanıyor (DOMContentLoaded beklemiyor)
- Sayfa yenilenirken artık default tema görünmüyor
- localStorage'dan okunan değerler anında DOM'a uygulanıyor

### Default Yazı Boyutu
- Varsayılan yazı boyutu "Orta" (1.1rem) yerine "Çok küçük" (0.9rem) yapıldı

### Toggle Stili
- Sohbet toggle'ı için modern switch tasarımı
- `justify-content: space-between` ile yazı solda, switch sağda
- `margin-left: 1vw` ile taşma sorunu düzeltildi

## Değiştirilen Dosyalar

### quartz/components/scripts/chat.inline.ts
- Polling optimizasyonu (startPolling, stopPolling, stopHeartbeat)
- Settings toggle event listener'ları (activate/deactivate)
- Markdown link parsing (parseMessageContent)
- /sayfa komutu markdown formatı
- Sabit panel boyutu (430x520)
- Mobil responsive stiller
- Disclaimer eklendi
- "Hazır" kontrolü kaldırıldı

### quartz/components/scripts/settings.inline.ts
- Tema/font/size ayarları hemen uygulanıyor (flicker fix)
- Chat toggle event handler
- CHAT_ACTIVE_KEY constant
- Default font size 0.9rem

### quartz/components/Settings.tsx
- "Özellikler" bölümü eklendi
- Chat toggle checkbox
- Yazı boyutu default "Çok küçük" olarak işaretlendi

### quartz/components/styles/settings.scss
- Toggle switch stilleri (.toggle-label, input[type="checkbox"])
- margin-left: 1vw düzeltmesi

## Notlar

- Cloudflare Worker deploy edilmedi (wrangler deploy gerekiyor)
- D1 database 100K write/gün limiti var
- Chat güvenliği: XSS koruması, rate limiting, CORS kısıtlaması, IDOR koruması mevcut
- Explorer'daki tarihe göre sıralama sorunu çözülmedi (FileTrieNode frontmatter'a erişmiyor)

## Yarın Devam Edilecekler

- Cloudflare Worker deploy
- Explorer'da oluşturulma tarihine göre sıralama (opsiyonel)
- Test ve bug fix
