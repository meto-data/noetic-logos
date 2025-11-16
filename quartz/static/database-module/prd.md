# ER Diyagramı Oluşturucu - PRD (Product Requirements Document)

## Genel Bakış

**Uygulama**: Entity-Relationship Diyagram Oluşturucu
**Versiyon**: 1.0
**Son Güncelleme**: 2025-11-16
**Teknoloji**: Vanilla JavaScript, HTML5, CSS3 (Bağımlılık: html2canvas)

## Temel Özellikler

### 1. Şekil Yönetimi
- **Desteklenen Şekiller**:
  - Varlık (Entity) - Dikdörtgen
  - Zayıf Varlık (Weak Entity) - Çift çizgili dikdörtgen
  - Nitelik (Attribute) - Elips
  - Anahtar Nitelik (Key Attribute) - Altı çizili elips
  - Çok Değerli Nitelik (Multivalued) - Çift elips
  - Türetilmiş Nitelik (Derived) - Kesikli elips
  - İlişki (Relationship) - Baklava/Diamond
  - Tanımlayıcı İlişki (Identifying Relationship) - Çift çizgili baklava

- **Sürükle-Bırak**: Toolbox'tan canvas'a
- **Çoklu Seçim**: Ctrl+Click veya marquee selection
- **Kopyala/Yapıştır**: Ctrl+C, Ctrl+V
- **Grid Snap**: Shift tuşuyla 10px hizalama
- **Otomatik Etiketleme**: Çift tıklama ile düzenleme

### 2. İlişki Oluşturma (Otomatik Diamond)
- İki entity seçildiğinde **otomatik olarak ortaya diamond** konur
- Tek modal ile:
  - İlişki adı girişi
  - Kardinalite seçimi (1:1, 1:N, N:1, M:N, 0..1:1, 1:0..1)
- Kardinaliteler çizgilerin **ortasında** gösterilir
- İptal edilirse tüm oluşturulan elemanlar temizlenir

### 3. Kardinalite Sistemi
- **Preset Seçenekleri**: 1:1, 1:N, N:1, M:N, 0..1:1, 1:0..1
- **Etiket Konumlandırma**:
  - Entity-Relationship: Çizgi tam ortasında
  - Entity-Entity: Çizginin 1/3 ve 2/3 noktalarında
- **Görsel İyileştirmeler**: `text-anchor: middle`, beyaz stroke ile okunabilirlik

### 4. Zoom ve Navigasyon
- **Zoom Aralığı**: %100 - %300 (küçültme yok)
- **Kontroller**: +/- butonları, Reset butonu
- **Mouse Wheel**: Ctrl + Scroll ile zoom
- **Transform Origin**: Sol üst köşe

### 5. Dışa Aktarma
- **JSON**: Tam diyagram verisi (şekiller, bağlantılar, pozisyonlar)
- **PNG**: html2canvas ile raster görüntü
- **SVG**: Vektörel çıktı, tüm şekiller ve etiketler dahil
- **Clipboard**: JSON'ı panoya kopyalama
- **Metin Import**: Textarea'dan JSON yükleme

### 6. Veri Kalıcılığı
- **LocalStorage Auto-Save**: Her değişiklik 2 saniye sonra otomatik kaydedilir
- **Oturum Kurtarma**: Sayfa yenilendiğinde önceki çalışmayı yükleme seçeneği
- **JSON Import/Export**: Dosya sistemi ile

### 7. Mobil ve Touch Desteği
- **Responsive Breakpoints**:
  - 1024px: Kompakt layout
  - 900px: Tek sütun, grid toolbox
  - 600px: Küçük ekran optimizasyonu
  - 500px (landscape): Özel layout
- **Touch Events**:
  - Şekil sürükleme
  - Toolbox'tan dokunarak ekleme
  - Zoom seviyesine göre koordinat düzeltme
- **Büyük Dokunma Alanları**: 44px+ butonlar (WCAG uyumu)

### 8. Senaryo Sistemi
- Önceden tanımlı senaryolar (er-scenarios.js)
- Gereksinim listesi ve otomatik kontrol
- Geri bildirim sistemi (başarı/kısmi/hata)

## Dosya Yapısı

```
Database/
├── er-builder.html          # Ana HTML sayfası
├── css/
│   ├── er-builder.css       # Uygulama stilleri (~830 satır)
│   └── style.css            # Genel site stilleri
├── js/
│   ├── er-builder.js        # Ana uygulama mantığı (~1850 satır)
│   └── er-scenarios.js      # Senaryo tanımları
└── prd.md                   # Bu dosya
```

## Teknik Mimari

### State Yönetimi
```javascript
const state = {
    shapes: [],                    // Şekil nesneleri
    connections: [],               // Bağlantı nesneleri
    selectedIds: Set(),            // Seçili şekil ID'leri
    zoomLevel: 1,                  // Zoom seviyesi (1-3)
    connectMode: boolean,          // Bağlantı çizme modu
    deleteMode: boolean,           // Silme modu
    autoSaveTimer: null,           // Auto-save zamanlayıcı
    pendingRelSetup: null,         // Bekleyen ilişki kurulumu
    // ... diğer state değişkenleri
};
```

### Şekil Veri Yapısı
```javascript
{
    id: "shape-0",
    type: "entity|weak-entity|attribute|...",
    x: number,
    y: number,
    width: 120,
    height: 60,
    label: "Şekil Adı"
}
```

### Bağlantı Veri Yapısı
```javascript
{
    id: "conn-0",
    from: "shape-0",
    to: "shape-1",
    fromCardinality: "1|N|M|0..1|0..N",
    toCardinality: "1|N|M|0..1|0..N",
    label: "Açıklama"
}
```

## Bilinen Sınırlamalar

1. **Bağlantı Çizgileri**: Şekil kenarlarına değil, merkezlerine bağlanır
2. **Undo/Redo**: Henüz implement edilmedi
3. **Total/Partial Participation**: CSS'te tanımlı ama UI'da yok
4. **ISA/Generalization Triangle**: Şekil olarak mevcut değil
5. **Çoklu Relationship Bağlantısı**: 2'den fazla entity bağlantısında preset otomatik uygulanmaz

## Gelecek Geliştirmeler (Öneriler)

### Yüksek Öncelik
- [ ] Undo/Redo (Ctrl+Z, Ctrl+Y)
- [ ] ISA/Generalization üçgen şekli
- [ ] Total/Partial participation UI (çift çizgi)
- [ ] Bağlantı çizgilerinin şekil kenarlarına bağlanması

### Orta Öncelik
- [ ] Şekil boyutlandırma (resize handles)
- [ ] Otomatik layout/hizalama algoritması
- [ ] Daha fazla export formatı (PDF, PlantUML)
- [ ] Collaboration/realtime editing

### Düşük Öncelik
- [ ] Animasyonlar ve geçiş efektleri
- [ ] Tema özelleştirme (renk paletleri)
- [ ] Şablon galerisi
- [ ] Versiyon geçmişi

## Kısayollar

| Kısayol | İşlev |
|---------|-------|
| Ctrl+A | Tümünü seç |
| Ctrl+C | Kopyala |
| Ctrl+V | Yapıştır |
| Ctrl+D | Çoğalt |
| Delete | Seçileni sil |
| Escape | Modu bırak / Modal kapat |
| Shift+Sürükle | Grid snap (10px) |
| Ctrl+Scroll | Zoom in/out |
| Çift tıklama | Şekli düzenle |
| Enter (modal'da) | Kaydet |

## CSS Değişkenleri

Uygulama tema sistemi için CSS değişkenlerini kullanır:
- `--bg-primary`: Ana arka plan
- `--bg-secondary`: İkincil arka plan
- `--bg-tertiary`: Üçüncül arka plan
- `--text-primary`: Ana metin rengi
- `--accent-color`: Vurgu rengi
- `--border-color`: Kenarlık rengi

## Test Kontrol Listesi

- [ ] İki entity bağlandığında diamond oluşuyor mu?
- [ ] Kardinalite etiketleri çizgi ortasında mı?
- [ ] Zoom %100-300 arasında çalışıyor mu?
- [ ] LocalStorage'a kaydediliyor mu?
- [ ] Mobilde touch sürükleme çalışıyor mu?
- [ ] SVG export tüm şekilleri içeriyor mu?
- [ ] Shift ile grid snap çalışıyor mu?
- [ ] Modal'dan iptal edilince temizlik yapılıyor mu?

## Notlar

- IIFE (Immediately Invoked Function Expression) pattern kullanılıyor
- Tüm DOM elemanları `loadElements()` ile yüklenir
- Event delegation yerine doğrudan event binding tercih edilmiş
- SVG namespace (`createElementNS`) kullanımına dikkat
- Touch ve mouse event'leri ayrı handle ediliyor
