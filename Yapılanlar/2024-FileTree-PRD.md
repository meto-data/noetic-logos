# UI / Navigasyon — Dosya Ağacı Özelliği (Arşiv)

## Product Requirements Document (PRD)

### 1) Amaç ve Bağlam
- Site Quartz tabanlı bir not yayınlama altyapısıdır. `quartz.config.ts` üzerinden başlık ("🧠 Veri İmparatorluğu"), GA etiketi ve adres yapılandırılmıştır.
- Tema/ayarlar için kullanıcı tarafında kalıcı (localStorage) bir menü geliştirilmiştir. Popüler temalar eklendi (18+). Yazı tipi ve boyutu ayarlanabilir kılındı.
- Kritik bir hata (interaktif öğelerin çalışmaması) `settings.inline.ts` kaynaklıydı; düzeltildi.
- Grafik görünümü limit kaldırıldı (300 düğüm sınırı kaldırıldı).
- Otomatik Sözlük özelliği denendi, beklenti karşılanmadığı için kaldırıldı.
- Odak modu ve sayfa genişliği ayarı denendi, istenmediği için geri alındı.
- Yeni özellik: Dosya Ağacı (Tree View).

Kaynak (özet) referansı: `baglam.md` kayıtlarına göre süreç; tema/ayarlar → hata giderme → grafik limiti → sözlük/odak modu kararları → dosya ağacı özelliğinin tasarımı ve geliştirilmesi.

### 2) Problem Tanımı
- Klasör ve dosyaların sitede hızlı, anlaşılır ve filtrelenebilir şekilde görsellenmesi gerekiyor.
- Bazı klasörlerin/varlıkların hariç tutulması (ekler, görseller, pdf vs.) ve `index` türü dosyaların listelenmemesi isteniyor.
- “Detaylı bakış” modunda içeriklerin kelime sayısına göre yüzdesel dağılımının görülmesi, ancak dosyaların ilk etapta gizli kalıp klasöre tıklanınca açılması isteniyor.
- Tüm sayımlar (klasör/dosya/kelime) arasında tutarlılık zorunlu.

### 3) Kapsam ve Kısıtlar
- Hariç tutulanlar: `ekler`, `görseller`, `images`, `assets`, `attachments`, `files`, `media`, `resimler`, `dosyalar`, `pdf`, `pdfler` klasörleri; `index*`, `readme*`, gizli ve sistem dosyaları.
- Normal görünüm: Tüm klasör ve dosyalar recursive görünecek; sadece hariç tutulanlar listelenmeyecek.
- Detay (grafik) görünümü: Klasörler recursive gösterilecek; dosyalar gizli. Bir klasöre tıklanınca sadece o klasörün dosyaları (index hariç) görünecek ve kendi yüzdeleri/kelimeleri gösterilecek.
- Klasör ve dosya adları okunaklı olacak (tireler boşluğa çevrilir, `8- Makale İnceleme ve Özet` vb.).

### 4) Kullanıcı Hikâyeleri
- Ziyaretçi olarak, soldaki butondan ağaç görünümünü açtığımda, tüm klasör ve dosyaları (hariçler dışında) hiyerarşik olarak görmek istiyorum.
- Ziyaretçi olarak, grafik ikonuna bastığımda klasörleri yüzdeleriyle görmek; bir klasöre tıklayınca o klasördeki dosyaların kelime/yüzde detaylarını görmek istiyorum.
- Ziyaretçi olarak, listelerde `index` dosyalarını hiç görmemek istiyorum.
- Ziyaretçi olarak, yüzdelerin Türkçe biçimde (virgüllü) ve kelimelerin binlik ayraçla gösterilmesini istiyorum.

### 5) Tasarım Kararları
- Veri kaynağı: window tarafında mevcut `fetchData` (Quartz içeriğinin JSON/harita temsili). Tüm slug’lar üzerinden ağaç oluşturma.
- Ağaç modeli: `TreeNode { name, slug, isFolder, children, level }`.
- Filtreleme:
  - Klasör: `shouldExcludeFolder(name)` → hariç klasörler.
  - Dosya: `shouldExcludeFile(name)` → `index`, `readme`, gizli dosyalar vb.
- İsim temizleme: `cleanDisplayName(name)` → tireleri boşluğa çevirir, `^\d+-` desenini "N- " biçiminde normalize eder.
- Kelime sayımı: Markdown/kod blokları/link sentaksı temizlenir; boşluk bazlı sağlam sayım yapılır.
- Yüzdeler: İki ondalık basamak, Türkçe format (`,`), genişlik hesapları için nokta kullanılır.

### 6) Uygulama Detayları (Dosyalar ve Önemli Fonksiyonlar)

Değişen dosyalar:
- `quartz/components/FileTree.tsx`
  - “Detaylı Bakış” butonu kaldırıldı ve yerine grafik ikonu (`.file-tree-graph`) eklendi.
  - Derinlik seçici kaldırıldı.

- `quartz/components/styles/filetree.scss`
  - Ağaç, detay görünümü ve yeni etkileşimler için stiller güncellendi.
  - `.word-count`, `.folder-children`, `.folder-files`, hover ve mobil düzenlemeler eklendi.

- `quartz/components/scripts/filetree.inline.ts`
  - Hariç listeler: `EXCLUDED_FOLDERS`.
  - `shouldExcludeFolder()`: hariç klasörler.
  - `shouldExcludeFile()`: `index*`, `readme*`, gizli dosyalar, `.DS_Store`.
  - `countWords(text)`: kod blokları, inline code, linkler ve markdown sembollerini temizleyerek doğruya yakın kelime sayımı.
  - `buildTreeFromData()`: ağaç kurar; alt dosya sayısı ve `wordMap` üretir. `index*` dosyalar daha başta atlanır; hariç klasör içine düşenler alt dosya olarak sayılır (kelime toplamı ayrı tutulur fakat normal sayımlara dahil edilmez).
  - `cleanDisplayName()`: dosya/klasör adlarını okunur hale getirir.
  - `calculateFolderWords(node, wordMap)`: klasördeki tüm dosyaları (alt seviyeler dahil) toplayarak kelime sayar.
  - `renderTreeNode(...)` (aşırı yüklü kullanım):
    - Normal görünüm: tüm alt öğeler (klasör+dosya) recursive render edilir; hariçler gösterilmez.
    - Grafik/Detay görünümü: klasörler recursive görünür; dosyalar gizlidir. Her klasör satırına karşılık alt `div.folder-files` hazırlanır (başlangıçta gizli). Kelime ve yüzde etiketleri eklenir.
  - Etkileşimler:
    - Modal aç/kapat.
    - Normal görünüm render: tüm içerik.
    - Grafik görünüm render: toplam kelime (`wordMap` toplamı) baz alınarak yüzdeler hesaplanır, klasörler listelenir.
    - Klasöre tıklama (detay görünümü): Yakınındaki `.folder-files` bölümü aç/kapa; dosyalar index hariç yüzdeleriyle görünür.
  - Sayım Tutarlılığı: Üst bilgi satırındaki toplam kelime sayısı, sadece dahil edilen dosyaların (`wordMap`) toplamıyla eşleştirildi.

### 7) UI/UX Özeti
- Başlık çubuğunda dişli (ayarlar) yanına ağaç butonu ve detay/grafik görünümünü açan ikon yer alır.
- Modal açıldığında:
  - Normal mod (default): tüm klasör/dosyalar hiyerarşik görünür; `index` ve hariç klasörler görünmez.
  - Grafik mod: klasörler recursive listelenir; kelime ve yüzdeleri görünür. Klasöre tıklanınca sadece o klasörün dosyaları görünür.
- Yüzdeler virgüllü (örn. `69,34%`), sayılar binlik ayraçlıdır (örn. `21.726`).

### 8) Kabul Kriterleri
- [ ] Normal görünümde hariç tutulanlar dışında tüm klasör/dosyalar recursive görünüyor.
- [ ] `index*` dosyaları hiçbir görünümde görünmüyor.
- [ ] Grafik görünümünde klasörler recursive; dosyalar gizli ve klasöre tıklayınca sadece o klasörün dosyaları açılıyor.
- [ ] Klasör/dosya adları doğal Türkçe görünümde (tire → boşluk, `N- ` öneki korunur).
- [ ] Üstte gösterilen toplam kelime sayısı ile detay görünüm hesapları tutarlı.
- [ ] Linter hatası yok.

### 9) Açık Konular / Sonraki Adımlar
- Büyük içeriklerde performans: Ağacın kademeli (virtualized) render edilmesi değerlendirilebilir.
- Klasör aç/kapa durumunun hatırlanması (localStorage ile) eklenebilir.
- Hariç listesi kullanıcı ayarlarından yönetilebilir hale getirilebilir.
- Dosya yüzdeleri için renk skalası/ısı haritası düşünülebilir.

### 10) Teknik Ekler (Hızlı Referans)
- Veri kaynağı: `fetchData` (slug → içerik), `wordMap: Map<slug, number>`.
- Önemli fonksiyon imzaları (özet):
  - `buildTreeFromData(): { root, altFiles, altWords, wordMap }`
  - `renderTreeNode(node, isRoot, maxDepth, wordMap?, totalWords?, showFiles=true, isDetailView=false)`
  - `calculateFolderWords(node, wordMap): number`
  - `shouldExcludeFolder(name): boolean`
  - `shouldExcludeFile(name): boolean`
  - `countWords(text): number`


