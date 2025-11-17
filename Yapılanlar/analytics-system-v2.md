# Real-Time Visitor Analytics System v2.0

**Tarih:** 2025-11-17
**Amaç:** Gizli admin paneli ile anlık ve geçmiş ziyaretçi takibi

---

## Sistem Mimarisi

```
[Ziyaretçi] → [Tracker Script] → [Cloudflare Worker] → [KV Storage]
                                        ↓
                               [Admin Panel] ← [Şifre korumalı]
```

---

## Oluşturulan Dosyalar

### 1. Cloudflare Worker API
**Konum:** `cloudflare-worker/src/index.js`

- **POST /presence/heartbeat** - Her 30 saniyede ziyaretçi bilgisi
- **POST /presence/event** - Scroll, click, exit link olayları
- **POST /presence/leave** - Sayfa terk edildiğinde
- **GET /presence/active** - Anlık aktif ziyaretçiler (auth gerekli)
- **GET /presence/history** - Geçmiş veriler (auth gerekli)
- **GET /presence/device** - Cihaz profilleri (auth gerekli)

### 2. Client-Side Tracker
**Konum:** `quartz/static/scripts/core.min.js`

İzlenen veriler:
- Session ID (oturum bazlı)
- Device ID (kalıcı - localStorage)
- Sayfa URL'i ve referrer
- Scroll derinliği (%25 artışlarla)
- Sayfada kalma süresi
- Ekran çözünürlüğü
- Tarayıcı dili
- Tıklama olayları (element + koordinat)
- Exit linkler (dış sitelere giden)
- Site içi aramalar

### 3. Admin Dashboard
**Konum:** `quartz/static/nlp/index.html`

7 ana sekme:
1. **Anlık İzleme** - Aktif ziyaretçiler tablosu, aktif sayfalar, kaynaklar
2. **Trafik Kaynakları** - Direct/Google/Social/Referral, çıkış linkleri
3. **Sayfa Analizi** - Top sayfalar, sayfa başına süre
4. **Cihazlar** - Device/Browser/OS dağılımı, cihaz profilleri
5. **Coğrafya** - Ülke ve şehir bazlı dağılım
6. **Kullanıcı Davranışı** - Yolculuklar, saatlik aktivite grafiği
7. **Geçmiş Veriler** - 7/14/30 günlük trendler

Metrikler:
- Anlık aktif kullanıcı sayısı
- Unique ziyaretçi / cihaz sayısı
- Pages per session
- Engagement rate (%50+ scroll)
- Bounce rate
- Mobil vs Desktop oranı
- Yeni vs geri dönen ziyaretçiler

### 4. Wrangler Config
**Konum:** `cloudflare-worker/wrangler.toml`

```toml
name = "noetic-presence"
kv_namespaces = [
  { binding = "VISITOR_PRESENCE", id = "d4ffb481623c4cc3be9b9ab27ab049c9" },
  { binding = "VISITOR_HISTORY", id = "a659c9eb816e45769261ac88b2d3f505" }
]
```

---

## Erişim

**Secret Command:** Arama kutusuna `nlp` yaz
**Şifre:** `logos` (Dashboard'da ADMIN_PASSWORD secret olarak ayarlandı)
**Worker URL:** `https://noetic-presence.mselayet.workers.dev`

---

## Güvenlik ve Gizlilik

- Tracker script belirsiz isimle (`core.min.js`) ve minified
- Admin panel `/static/nlp/` - kimse URL'i bilmiyor
- Bearer token authentication
- CORS sadece `noetic-logos.pages.dev` için
- Device ID hash edilmiş (ilk 12 karakter gösteriliyor)
- IP adresi saklanmıyor, sadece ülke/şehir

---

## KV Storage Yapısı

### VISITOR_PRESENCE (TTL: 120s)
```
visitor_{sessionId} → {
  sessionId, deviceId, page, device, browser, os,
  country, city, region, timezone, source,
  screenSize, language, scrollDepth, timeOnPage, lastSeen
}
```

### VISITOR_HISTORY (TTL: 90 gün)
```
daily_{YYYY-MM-DD} → {
  uniqueVisitors[], uniqueDevices[], sessions{},
  pageViews{}, devices{}, browsers{}, countries{}, cities{},
  trafficSources{}, referrers{}, hourlyActivity{},
  exitLinks{}, scrollDepths{}, timeOnPage{}, clickEvents{},
  searchQueries[], newVsReturning{}, bounceCount, totalSessions
}

device_{deviceId} → {
  firstSeen, lastSeen, totalVisits, totalPageViews,
  sessions[], favoritePages{}, countries[], browsers[]
}
```

---

## Deployment Komutları

```bash
# Worker deploy
cd cloudflare-worker
npx wrangler deploy

# Worker logları izle
npx wrangler tail

# KV verilerini kontrol et
npx wrangler kv key list --namespace-id=a659c9eb816e45769261ac88b2d3f505

# Site build & deploy
cd ..
git add -A && git commit -m "message" && git push
```

---

## Değiştirilen Quartz Dosyaları

1. **quartz/components/Head.tsx:100** - Tracker script inject
2. **quartz/components/scripts/search.inline.ts:172** - `nlp` secret command eklendi

---

## Bilinen Limitasyonlar

- Cloudflare Workers free tier: 100k request/gün
- KV free tier: 100k read, 1k write/gün
- TTL sınırlamaları: Presence 120s, History 90 gün, Device 365 gün
- IP geolocation Cloudflare'e bağlı (CF-IPCountry header)

---

## Gelecek İyileştirmeler

- [ ] Heatmap görselleştirme
- [ ] Conversion funnel tracking
- [ ] Custom event tracking
- [ ] PDF/Excel export
- [ ] Alert sistemi (spike detection)
- [ ] A/B test tracking
- [ ] Performance metrics (page load time)
