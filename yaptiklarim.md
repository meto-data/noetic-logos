# Gizli Komut Özelliği - Implementation Documentation

## Özet

Quartz tabanlı noetic-papers sitesine, arama çubuğuna özel bir komut (`logos`) girildiğinde gizli bir test modülüne yönlendiren bir özellik eklendi. Bu özellik, mevcut arama fonksiyonelliğini bozmadan çalışır ve yalnızca komutu bilen kullanıcılar için erişilebilirdir.

## Problem Tanımı

- Kullanıcı, `ReadyForWeb/` klasöründe bulunan bir test modülünü (`index.html`, `style.css`, `app.js`) siteye entegre etmek istiyordu
- Bu modül, normal site navigasyonunda görünmemeli, sadece özel bir komutla erişilebilir olmalıydı
- Mevcut Quartz arama sistemi hiçbir şekilde etkilenmemeliydi
- Build süreci ve mevcut yapıya zarar verilmemeliydi

## Çözüm Yaklaşımı

### 1. Statik Dosyaların Taşınması

**Yapılan İşlem:**
- `ReadyForWeb/` klasöründeki üç dosya (`index.html`, `style.css`, `app.js`) `quartz/static/logos-module/` klasörüne taşındı

**Neden Bu Yol Seçildi:**
- Quartz'ın `Static` emitter plugin'i, `quartz/static/` altındaki tüm dosyaları otomatik olarak build çıktısına (`public/static/`) kopyalar
- Bu sayede dosyalar build sürecine otomatik dahil olur ve `/static/logos-module/` path'i altında servis edilir
- Orijinal `ReadyForWeb/` klasörü referans amaçlı kök dizinde bırakıldı (git'te ignore edilebilir)

**Dosya Yapısı:**
```
quartz/
└── static/
    └── logos-module/
        ├── index.html
        ├── style.css
        └── app.js
```

### 2. Arama Sistemine Gizli Komut Entegrasyonu

**Değiştirilen Dosya:** `quartz/components/scripts/search.inline.ts`

**Yapılan Değişiklikler:**

#### a) Sabitlerin Tanımlanması (Satır 167-168)
```typescript
const secretCommand = "logos"
const secretModulePath = "/static/logos-module/index.html"
```

#### b) Yönlendirme Fonksiyonunun Eklenmesi (Satır 208-212)
```typescript
function redirectToSecretModule() {
  hideSearch()
  const targetUrl = new URL(secretModulePath, window.location.origin)
  window.location.assign(targetUrl.toString())
}
```

**Açıklama:**
- `hideSearch()`: Arama panelini kapatır ve temizler
- `new URL()`: Relative path'i absolute URL'ye dönüştürür (SPA routing ile uyumlu)
- `window.location.assign()`: Sayfa yönlendirmesi yapar (history'ye ekler)

#### c) `onType` Fonksiyonuna Kontrol Eklenmesi (Satır 409-416)

**Önceki Kod:**
```typescript
async function onType(e: HTMLElementEventMap["input"]) {
  if (!searchLayout || !index) return
  currentSearchTerm = (e.target as HTMLInputElement).value
  searchLayout.classList.toggle("display-results", currentSearchTerm !== "")
  searchType = currentSearchTerm.startsWith("#") ? "tags" : "basic"
  // ... normal arama mantığı devam eder
}
```

**Yeni Kod:**
```typescript
async function onType(e: HTMLElementEventMap["input"]) {
  if (!searchLayout || !index) return
  currentSearchTerm = (e.target as HTMLInputElement).value
  const normalizedTerm = currentSearchTerm.trim().toLowerCase()
  if (normalizedTerm === secretCommand) {
    redirectToSecretModule()
    return  // Normal arama akışını durdur
  }
  searchLayout.classList.toggle("display-results", currentSearchTerm !== "")
  searchType = currentSearchTerm.startsWith("#") ? "tags" : "basic"
  // ... normal arama mantığı devam eder
}
```

**Önemli Detaylar:**
- `trim()`: Başta/sonda boşlukları temizler
- `toLowerCase()`: Büyük/küçük harf duyarsız kontrol sağlar
- `return`: Gizli komut tespit edildiğinde normal FlexSearch akışı çalışmaz
- Kontrol, normal arama mantığından **önce** yapılır, böylece performans etkisi minimaldir

### 3. Güvenlik ve Yedekleme

**Yedek Dosya:** `YEDEK/search.inline.ts.20251110`
- Orijinal `search.inline.ts` dosyasının timestamp'li bir kopyası oluşturuldu
- Geri dönüş için referans olarak saklandı
- Dosya adı formatı: `{dosya-adi}.{tarih}`

## Teknik Detaylar

### Quartz Build Süreci

1. **Build Komutu:**
   ```bash
   npx quartz build
   ```

2. **Static Plugin Çalışması:**
   - `quartz/plugins/emitters/static.ts` plugin'i çalışır
   - `quartz/static/` altındaki tüm dosyalar taranır
   - Dosyalar `public/static/` altına kopyalanır
   - Path yapısı korunur

3. **Sonuç:**
   ```
   public/
   └── static/
       └── logos-module/
           ├── index.html
           ├── style.css
           └── app.js
   ```

### Erişim Yolları

**Canlı Site:**
- Ana site: `https://noetic-logos.pages.dev/`
- Gizli modül: `https://noetic-logos.pages.dev/static/logos-module/index.html`
- Arama komutu: `Ctrl/Cmd + K` → `logos` yaz → Enter

**Lokal Test:**
```bash
npx quartz build --serve
# Tarayıcı: http://localhost:8080
# Arama: http://localhost:8080/static/logos-module/index.html
```

## Test Senaryoları

### ✅ Başarılı Senaryolar

1. **Gizli Komut Çalışması:**
   - Arama açılır (`Ctrl/Cmd + K`)
   - `logos` yazılır (büyük/küçük harf fark etmez)
   - Enter'a basılır veya yazmaya devam edilir
   - Sayfa `/static/logos-module/index.html`'e yönlendirilir

2. **Normal Arama Korunması:**
   - Arama açılır
   - Herhangi bir başka terim yazılır (`logos` hariç)
   - FlexSearch sonuçları normal şekilde gösterilir

3. **Tag Arama Korunması:**
   - `#tag` formatında arama yapılır
   - Tag bazlı sonuçlar gösterilir

### ❌ Test Edilmesi Gerekenler

1. **Boşluklu Girişler:** `" logos "` (trim ile çözülmüş olmalı)
2. **Büyük/Küçük Harf:** `"LOGOS"`, `"Logos"`, `"loGos"` (hepsi çalışmalı)
3. **Kısmi Eşleşmeler:** `"logos123"` (çalışmamalı, sadece tam eşleşme)
4. **SPA Routing:** Yönlendirme sonrası browser history'nin doğru çalışması

## Dosya Değişiklikleri Özeti

### Yeni Dosyalar
- `quartz/static/logos-module/index.html`
- `quartz/static/logos-module/style.css`
- `quartz/static/logos-module/app.js`
- `YEDEK/search.inline.ts.20251110`

### Değiştirilen Dosyalar
- `quartz/components/scripts/search.inline.ts` (12 satır eklendi)
- `baglam.md` (dokümantasyon eklendi)

### Git Commit
```
feat: Add secret 'logos' command to search that redirects to hidden test module

- Move ReadyForWeb content to quartz/static/logos-module/
- Intercept 'logos' search query to redirect to /static/logos-module/
- Backup original search.inline.ts to YEDEK/
- Document feature in baglam.md for future reference
```

## Potansiyel Sorunlar ve Çözümleri

### 1. Path Sorunları
**Sorun:** Build sonrası dosyalar bulunamayabilir
**Çözüm:** `quartz/static/` altına koymak Quartz'ın garantili yöntemidir

### 2. CORS/SPA Routing
**Sorun:** Yönlendirme SPA routing'i bozabilir
**Çözüm:** `window.location.assign()` kullanıldı (history'ye ekler, SPA uyumlu)

### 3. Case Sensitivity
**Sorun:** Kullanıcı büyük harfle yazarsa çalışmayabilir
**Çözüm:** `toLowerCase()` ile normalize edildi

### 4. Whitespace
**Sorun:** Başta/sonda boşluk varsa çalışmaz
**Çözüm:** `trim()` ile temizlendi

## Gelecek Geliştirmeler

1. **Çoklu Gizli Komut:** Aynı mantıkla başka komutlar eklenebilir
2. **Komut Parametreleri:** `logos:test1` gibi parametreli komutlar
3. **Analytics:** Gizli komut kullanımını takip etme
4. **Konfigürasyon:** Komut adını config'den okuma

## Notlar

- Orijinal `ReadyForWeb/` klasörü kök dizinde duruyor (opsiyonel cleanup)
- Build komutu çalıştırılmadan önce test edilmedi (production'da test gerekli)
- Mevcut arama fonksiyonelliği hiçbir şekilde değiştirilmedi, sadece ön kontrol eklendi
- Kod, Quartz'ın mevcut mimarisine uyumlu şekilde eklendi

## Referanslar

- Quartz Static Plugin: `quartz/plugins/emitters/static.ts`
- Search Component: `quartz/components/Search.tsx`
- Search Script: `quartz/components/scripts/search.inline.ts`
- Git Tag: `before-logos-feature` (geri dönüş noktası)

