# Noetic Logos — Kod Tabanı İnceleme Raporu

**Tarih:** 15 Mart 2026  
**Proje:** Noetic Logos (Quartz v4.5.1 tabanlı dijital bahçe / bilgi tabanı)  
**Toplam Dosya:** ~4.100+ dosya (node_modules hariç)

---

## 1. Proje Genel Yapısı

Noetic Logos, Quartz v4.5.1 üzerine inşa edilmiş, Türkçe akademik ders notları ve denemeler barındıran bir **dijital bahçe** projesidir. GitHub Pages üzerinden yayınlanır, Capacitor ile Android uygulaması olarak da paketlenebilir.

| Dizin | Boyut | Amaç |
|-------|-------|------|
| `content/` | 169 MB | Markdown notlar, PDF'ler, görseller |
| `quartz/` | ~60 MB | Quartz çekirdeği, bileşenler, eklentiler |
| `quartz/static/` | 58 MB | Harici modüller (YBS, Finance, vb.) |
| `android/` | 576 KB | Capacitor Android projesi |
| `PROMPTER/` | — | AI geliştirme prompt şablonları |
| `Kopya/` | — | UI referans/mockup dosyaları |
| `scripts/` | — | Build ve bakım betikleri |

---

## 2. Güvenlik ve Gizlilik Analizi (Riskli Dosyalar)

### YÜKSEK RİSK

| # | Bulgu | Dosya | Açıklama |
|---|-------|-------|----------|
| 1 | **Kişisel e-posta adresi** | `quartz/static/database-module/assets/index-DKi84OW5.js` | `aslıaslan@gmail.com` gerçek bir kişisel e-posta olabilir. Örnek veri olarak `ornek@example.com` ile değiştirilmelidir. |
| 2 | **Hardcoded Worker URL** | `quartz/components/scripts/chat.inline.ts` | `https://noetic-presence.mselayet.workers.dev` — Cloudflare Workers URL'si doğrudan kodda yazılı. `mselayet` alt alan adı proje sahibini ifşa edebilir. Ortam değişkenine taşınması önerilir. |

### ORTA RİSK

| # | Bulgu | Dosya | Açıklama |
|---|-------|-------|----------|
| 3 | **Kurumsal e-posta** | `content/.../web-tasarim-3.md` | `ogrenci@duzce.edu.tr` — Düzce Üniversitesi alan adı. Örnek mi gerçek mi belirsiz. |
| 4 | **Örnek e-posta** | `content/.../web-tasarim-3.md` | `metin@gmail.com` — Muhtemelen örnek ama gerçek bir kişiye ait olabilir. |
| 5 | **`.env` gitignore'da yok** | `.gitignore` | `.env` / `.env.local` dosyaları açıkça gitignore'a eklenmemiş. Şu an böyle bir dosya yok ama ileride yanlışlıkla commit edilebilir. |

### DÜŞÜK RİSK

| # | Bulgu | Dosya | Açıklama |
|---|-------|-------|----------|
| 6 | Instagram profili | `quartz/components/PageLayout.tsx` | `instagram.com/meto.data` — Herkese açık sosyal medya, düşük risk. |
| 7 | Upstream yazarın e-postası | `package.json` | `j.zhao2k19@gmail.com` — Quartz orijinal yazarına ait, standart açık kaynak bilgisi. |

### İYİ UYGULAMALAR (Olumlu)

- `CLOUDFLARE_BEACON_TOKEN` ortam değişkeninden okunuyor (`quartz.config.ts`)
- `STUDY_CHAT_SIGNAL_URL` ortam değişkeninden okunuyor (`quartz/config/studyChat.ts`)
- GitHub Actions'ta `secrets.GITHUB_TOKEN` kullanılıyor
- `.gitignore`'da `analytics/`, `private/`, `dates.config.json` doğru şekilde yer alıyor
- Repoda `.env` dosyası mevcut değil

---

## 3. Gereksiz / İncelenmesi Gereken Dosyalar

### Kesinlikle Gereksiz veya Temizlenmesi Gereken

| # | Dosya/Dizin | Neden |
|---|-------------|-------|
| 1 | `content/Depo/Eskiler/` (19 MB) | Eski/arşivlenmiş içerik. Yüzlerce küçük `.md` dosyası ve görseller. Git geçmişinde kalır, aktif projeden çıkarılabilir. |
| 2 | `tsconfig.tsbuildinfo` (245 KB) | Build artefaktı. `.gitignore`'da var ama repo'da commit edilmiş. |
| 3 | `Kopya/` | UI mockup/referans dizini. Geliştirme notları içeriyor, üretimde gereksiz. |
| 4 | `PROMPTER/` | AI geliştirme prompt şablonları. Üretimde gereksiz, kişisel geliştirme araci. |
| 5 | `ozet.md` (kök dizin) | Tema özeti. Geliştirme referansı, repoda olması gerekmez. |
| 6 | `CODE_OF_CONDUCT.md` | Quartz upstream'den kalmış. Bu özelleştirilmiş bir fork ise kendi versiyonunuz gerekir veya kaldırılabilir. |
| 7 | `FUNDING.yml` | Quartz upstream sponsorluk bilgisi. Size ait değilse kaldırılmalı. |

### Büyük Dosyalar (Git Geçmişini Şişiren)

| Dosya | Boyut | Öneri |
|-------|-------|-------|
| PDF'ler (toplam ~60+ MB) | 2–10 MB/adet | Git LFS'e taşınması veya harici barındırma önerilir |
| `quartz/static/ybs-module/` | 36 MB | En büyük statik modül. Lazy loading düşünülmeli |
| `quartz/static/data-mining-module/` | 15 MB | Büyük statik modül |
| Video dosyaları (`Videolar/`) | 2.4 MB | Git LFS daha uygun |

### Gerekli Dosyalar

| Dosya/Dizin | Neden Gerekli |
|-------------|---------------|
| `content/` (Depo hariç) | Ana içerik, projenin omurgası |
| `quartz/` | SSG motoru ve özelleştirmeler |
| `quartz.config.ts` | Ana yapılandırma |
| `quartz.layout.ts` | Sayfa düzeni |
| `package.json` / `package-lock.json` | Bağımlılık yönetimi |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
| `android/` | Capacitor Android sarmalayıcı |
| `capacitor.config.ts` | Capacitor yapılandırması |
| `scripts/` | Build ve bakım betikleri |
| `Dockerfile` | Container desteği |

---

## 4. Hatalar ve Sorunlar

### YÜKSEK ÖNCELİK

| # | Sorun | Dosya | Detay |
|---|-------|-------|-------|
| 1 | **Study Chat boş `signalServerUrl`** | `quartz/config/studyChat.ts` | `signalServerUrl` ortam değişkeni ayarlanmadığında `""` oluyor. Chat etkinleştirildiğinde runtime hatasına yol açar. Boşken chat'i otomatik devre dışı bırakacak bir kontrol eklenmeli. |
| 2 | **Hardcoded asset hash** | `index.html:150` | `./assets/index-BShGXWWS.js` — Hash değeri her build'de değişir. Build sonrası bu dosya güncellenmezse 404 hatası verir. Bir manifest sistemi veya dinamik yükleme kullanılmalı. |

### ORTA ÖNCELİK

| # | Sorun | Dosya | Detay |
|---|-------|-------|-------|
| 3 | **Palet seçim mantığı kırılgan** | `quartz.config.ts:163-178` | İç içe ternary zinciri. Birden fazla seçenek `true` ise ilk eşleşen kazanır, bu kasıtlı olmayabilir. Doğrulama veya `Object.entries().find()` yaklaşımı önerilir. |
| 4 | **27+ `@ts-ignore` kullanımı** | Çeşitli `.ts`/`.tsx` dosyaları | Tip hatalarını bastırır, gerçek bug'ları gizleyebilir. `@ts-expect-error` ile değiştirilmeli veya tipler düzeltilmeli. |
| 5 | **LaTeX `externalResources` eksik switch dalları** | `quartz/plugins/transformers/latex.ts` | Sadece `"katex"` ele alınmış. `"mathjax"` veya `"typst"` için `undefined` dönüyor, alt akışlarda sorun çıkarabilir. |
| 6 | **Dockerfile root olarak çalışıyor** | `Dockerfile` | `USER` direktifi yok. Güvenlik için non-root kullanıcı eklenmeli. |
| 7 | **Dockerfile'da `.dockerignore` eksik** | — | `COPY . .` ile `.git`, `node_modules` gibi gereksiz dosyalar da kopyalanıyor. |

### DÜŞÜK ÖNCELİK

| # | Sorun | Dosya | Detay |
|---|-------|-------|-------|
| 8 | **`index.html` meta etiketleri eksik** | `index.html` | `description`, Open Graph, Twitter Card, canonical URL etiketleri yok. SEO ve paylaşım için eklenmelidir. |
| 9 | **Tailwind CDN kullanımı** | `index.html:7` | `cdn.tailwindcss.com` üretimde önerilmez. Build-time Tailwind daha performanslı ve güvenilirdir. |
| 10 | **`manage-created-dates.mjs` rename handling** | `scripts/manage-created-dates.mjs` | Git rename girişlerinin (`R  eski.md yeni.md`) doğru parse edilmemesi riski. |

---

## 5. Optimizasyon Önerileri

### Performans

| # | Öneri | Etki | Detay |
|---|-------|------|-------|
| 1 | **Statik modülleri lazy load yapma** | Yüksek | `quartz/static/` altındaki modüller toplam 58 MB. Özellikle `ybs-module` (36 MB) ve `data-mining-module` (15 MB) ilk yüklemede gereksiz yere indirilmemeli. |
| 2 | **PDF'leri Git LFS'e taşıma** | Yüksek | ~60+ MB PDF ve video dosyası Git geçmişini şişiriyor. Her clone işlemi gereksiz yere yavaşlıyor. |
| 3 | **`content/Depo/Eskiler/` taşıma** | Orta | 19 MB'lık eski içerik. Ayrı bir branch'e veya arşiv repo'suna taşınabilir. |
| 4 | **SPA modunu etkinleştirme** | Orta | `enableSPA: false` ayarı var. SPA modu sayfa geçişlerini hızlandırır ancak mevcut modül entegrasyonları ile test gerektirir. |

### Kod Kalitesi

| # | Öneri | Etki | Detay |
|---|-------|------|-------|
| 5 | **`@ts-ignore` temizliği** | Orta | 27+ yerde kullanılıyor. Tip güvenliğini zayıflatıyor. Her birini inceleyip ya tipi düzeltmeli ya da `@ts-expect-error` ile açıklama eklenmeli. |
| 6 | **Palet seçimini refactor etme** | Düşük | Ternary zinciri yerine key-based lookup: `PALETTES.light[Object.entries(SELECT_LIGHT).find(([_, v]) => v)?.[0] ?? 'default']` |
| 7 | **Commit mesajları iyileştirme** | Düşük | Son commit mesajları `güncelledim` gibi açıklayıcı olmayan ifadeler. Semantic commit convention (feat:, fix:, docs: vb.) kullanılması önerilir. |

### Yapılandırma

| # | Öneri | Etki | Detay |
|---|-------|------|-------|
| 8 | **`.gitignore`'a `.env*` ekleme** | Yüksek | Gelecekte yanlışlıkla commit edilmesini önler. |
| 9 | **`.dockerignore` oluşturma** | Orta | `node_modules`, `.git`, `content/Depo/Eskiler`, `PROMPTER`, `Kopya` gibi dizinleri hariç tutmalı. |
| 10 | **`tsconfig.tsbuildinfo` kaldırma** | Düşük | `.gitignore`'da var ama zaten commit edilmiş. `git rm --cached` ile kaldırılmalı. |

### Yapısal

| # | Öneri | Etki | Detay |
|---|-------|------|-------|
| 11 | **Upstream Quartz dosyalarını temizleme** | Düşük | `CODE_OF_CONDUCT.md`, `.github/FUNDING.yml`, `ci.yaml`, `docker-build-push.yaml` gibi upstream'e ait dosyalar bu fork'ta gereksiz. |
| 12 | **Modül URL'lerini ortam değişkenine taşıma** | Orta | `chat.inline.ts`'deki `WORKER_URL` hardcoded. Farklı ortamlar için (dev, staging, prod) ortam değişkeni kullanılmalı. |

---

## 6. Dosya Sınıflandırma Özeti

### Gerekli (Projenin çalışması için zorunlu)
- `quartz/` — SSG motoru ve bileşenler
- `content/` (Depo hariç) — Ana içerik
- `quartz.config.ts`, `quartz.layout.ts` — Yapılandırma
- `package.json`, `package-lock.json` — Bağımlılıklar
- `.github/workflows/deploy.yml` — CI/CD
- `capacitor.config.ts`, `android/`, `capacitor-shell/` — Mobil uygulama
- `scripts/` — Build betikleri
- `globals.d.ts`, `index.d.ts`, `tsconfig.json` — TypeScript yapılandırması

### Gereksiz veya Opsiyonel (Kaldırılabilir)
- `content/Depo/Eskiler/` — Eski arşiv içerik (19 MB)
- `Kopya/` — UI referans dosyaları
- `PROMPTER/` — AI prompt şablonları
- `ozet.md` — Geliştirme notu
- `CODE_OF_CONDUCT.md` — Upstream'den kalmış
- `.github/FUNDING.yml` — Upstream sponsorluk
- `.github/workflows/ci.yaml` — Upstream CI (bu fork için gereksiz)
- `.github/workflows/docker-build-push.yaml` — Upstream Docker workflow
- `tsconfig.tsbuildinfo` — Build artefaktı (commit edilmemeli)

### Riskli (Gizlilik / Güvenlik açısından)
- `quartz/static/database-module/assets/index-DKi84OW5.js` — Kişisel e-posta
- `quartz/components/scripts/chat.inline.ts` — Hardcoded Worker URL
- `content/.../web-tasarim-3.md` — Kurumsal/kişisel e-postalar
- `.gitignore`'da `.env*` eksik

---

## 7. Sonuç ve Öncelikli Aksiyon Listesi

1. **`aslıaslan@gmail.com`** → `ornek@example.com` ile değiştir
2. **`.gitignore`'a `.env*` ekle**
3. **`WORKER_URL`** → ortam değişkenine taşı
4. **`tsconfig.tsbuildinfo`** → `git rm --cached` ile kaldır
5. **`.dockerignore` oluştur**
6. **PDF/video dosyalarını Git LFS'e taşımayı değerlendir**
7. **`content/Depo/Eskiler/`** → ayrı arşive taşımayı değerlendir
8. **`@ts-ignore` kullanımlarını gözden geçir**
9. **`index.html` asset hash** → dinamik yükleme mekanizması kur
10. **Study Chat `signalServerUrl` validasyonu** → boşken chat'i devre dışı bırak
