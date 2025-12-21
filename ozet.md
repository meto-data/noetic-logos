# Quartz Tema Sistemi Özeti

Bu dosya, Quartz projesindeki tema sisteminin nasıl çalıştığını ve değişiklik yaparken nelere dikkat edilmesi gerektiğini açıklar.

---

## 📁 Kritik Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `quartz/components/scripts/darkmode.inline.ts` | Tema listesi, isimleri, renkleri ve seçici panel mantığı |
| `quartz/styles/custom.scss` | Tema CSS değişkenleri ve özel stiller |
| `quartz/i18n/locales/tr-TR.ts` | Türkçe çeviriler (İçindekiler, Grafik Görünümü vb.) |
| `quartz/components/scripts/toc.inline.ts` | İçindekiler navigasyonu ve highlight |

---

## 🎨 Yeni Tema Ekleme

### 1. `darkmode.inline.ts` Güncellemesi

```typescript
// themes dizisine ekle
const themes = [
    "light",
    "dark",
    // ... diğer temalar
    "yeni-tema"  // <- YENİ
] as const

// İsim ekle
const themeNames: Record<Theme, string> = {
    // ...
    "yeni-tema": "Yeni Tema Adı"
}

// Renk ekle (tema seçicide gösterilecek)
const themeColors: Record<Theme, string> = {
    // ...
    "yeni-tema": "#HEX_RENK"
}
```

### 2. `custom.scss` Güncellemesi

```scss
[saved-theme="yeni-tema"] {
    --light: #ARKA_PLAN !important;
    --lightgray: #YAN_PANEL !important;
    --gray: #BORDER !important;
    --darkgray: #YARDIMCI_METIN !important;
    --dark: #ANA_METIN !important;
    --secondary: #VURGU_RENK !important;
    --tertiary: #IKINCIL_VURGU !important;
    --highlight: rgba(X, X, X, 0.1) !important;

    --surface: #KART_ARKA_PLAN;
    --border-color: #KENARLIK;
    --muted: #SILIK_METIN;
    --text: #METIN;
    --panel-bg: #PANEL_ARKA_PLAN;
}
```

---

## 🌊 Özel Efektler

### Deep Sea Dalga Animasyonu
- `@keyframes deep-sea-wave` ile tanımlanır
- `body::after` ve `body::before` pseudo elementleri kullanılır
- SVG path data URI ile dalga şekli oluşturulur

### Void Noise Efekti
- `@mixin noise($opacity)` ile tanımlanır
- `::before` pseudo elementi ile şeffaf piksel katmanı eklenir

---

## 🔧 Sık Yapılan Düzeltmeler

### Panel Arka Planları
```scss
.sidebar, .center, .right-sidebar {
    background-color: var(--panel-bg, var(--light)) !important;
}
```

### Tema Seçicinin Grayscale Sorunu
Void temasında `filter: grayscale(100%)` kullanma! Bu tema seçicideki renkleri de etkiler.

### TOC Navigasyonu Çalışmıyorsa
`toc.inline.ts` içine manuel click handler ekle:
```typescript
content.addEventListener("click", handleTocClick)
```

---

## 📝 Prompt Şablonları

### Yeni Tema Eklemek İçin
```
"[TEMA_ADI]" adında yeni bir tema ekle. Renkler:
- Arka Plan: #XXXXXX
- Yan Paneller: #XXXXXX
- Ana Metin: #XXXXXX
- Vurgu Rengi: #XXXXXX
```

### Mevcut Temayı Düzenlemek İçin
```
[TEMA_ADI] temasını düzenle:
- [DEĞİŞKEN_ADI] rengini #XXXXXX yap
- [EFEKT] ekle/kaldır
```

### Özel Efekt Eklemek İçin
```
[TEMA_ADI] temasına [EFEKT_ADI] efekti ekle:
- Animasyon türü: [dalga/noise/gradient]
- Opacity: X%
- Hız: Xs
```

---

## ⚠️ Dikkat Edilmesi Gerekenler

1. **CSS Değişkenleri:** Her zaman `!important` kullan
2. **SCSS Sözdizimi:** Parantez eşleşmelerini kontrol et
3. **Build Testi:** Her değişiklikten sonra `npx quartz build --serve` çalıştır
4. **Tema Sırası:** `themes` dizisindeki sıra, tema seçicide görünüm sırasını belirler
5. **Panel Stilleri:** Koyu temalarda panelleri `position: relative; z-index: 10;` ile efektlerin üstüne çıkar

---

## 🎭 Mevcut Temalar

| Tema | Açıklama |
|------|----------|
| `light` | Varsayılan açık tema |
| `dark` | Varsayılan koyu tema |
| `stone-dark` | Bazalt/Volkanik kaya, soğuk gri tonlar |
| `olive-light` | Açık zeytin yeşili |
| `olive-dark` | Koyu zeytin yeşili |
| `library-light` | Krem arka plan, kitaplık estetiği |
| `nord-light` | Nord renk paleti, buz mavisi |
| `deep-sea` | Okyanus derinliği, turkuaz vurgular, dalga animasyonu |
| `void` | Saf siyah (#000000), OLED dostu, mat Zinc tonları |
