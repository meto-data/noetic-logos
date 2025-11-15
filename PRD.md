## PRD: Finans Modüllerinde Referans Verisi Revizyonu

### 1) Amaç ve Bağlam
- Finans modüllerindeki sorular kullanıcıya karmaşık geliyor; tablolu/veri içeren soruların bilgileri seçeneklerin içinde veya soru metninde dağınık duruyor.
- "Referans Veriler" paneli mevcut olsa da tüm modüllerde tutarlı çalışmıyor; bazı sorular paneli kullanmıyor, bazıları aynı veriyi defalarca gösteriyor.
- Bu çalışma, tüm dahili ve harici finans modüllerini **manuel** biçimde tarayıp her soru için veri, soru gövdesi ve seçenek yapısını standardize etmeyi hedefler. Otomatik script kullanılmayacak; her soru ayrı okunup düzenlenecek.

### 2) Problem Tanımı
- Referans paneli bazı sorularda boş, bazılarında gereksiz seçenekleri/kopyaları içeriyor.
- Modül dosyalarında (örn. `*_data.js`) soru gövdeleri, tablolar ve seçenekler iç içe geçmiş durumda; hangi kısmın panelde gösterileceği net değil.
- Çok parçalı sorularda (i, ii, iii vb.) satır sonları düzensiz; `<br>` veya paragraf yapısı eksik.
- Rakam formatları (örn. `1500.000`) Türkçe biçimle uyumsuz.

### 3) Kapsam
- Dahili finans modülleri: `analiz_teknikleri_giris`, `bilanco_1`, `bilanco_2`, `finansal_analiz`, `temel_finansal_tablolar_ilkeler`, vb.
- Harici modüller: `likidite_oranlari`, `faaliyet_oranlari`, `finansal_yonetim`, `paranin_zaman_degeri`, doküman kaynaklı `taslak.md` bölümleri.
- İlgili HTML şablonları (`*_module.html`) ve `module_engine.js` ile `style.css` yalnızca gerekiyorsa (örneğin panel davranışı için) güncellenecek.
- Otomasyon (script) geliştirmek bu sprint içinde **kapsam dışıdır**; tüm düzenlemeler manuel yapılacak.

### 4) Gereksinimler
1. **Soru Gövdesi Temizliği**
   - Soru metni anlaşılır paragraf/`<br>` düzenine sahip olacak.
   - Çoğul ifadeler (i, ii, iii) `<br>` veya numaralı liste ile ayrılacak.
2. **Referans Paneli İçeriği**
   - Tüm tablolar, çok satırlı veri blokları ve hazır verilen sayısal setler soru gövdesinden alınarak `contextHtml` içine taşınacak.
   - Panelde seçenek (A, B, C...) yer almayacak; sadece veri blokları kalacak.
   - Aynı veri birden fazla soru tarafından kullanılıyorsa, veri ilk soruda tutulacak; takip eden sorular `getContextForQuestion` yapısı üzerinden paneli devralacak.
3. **Seçeneklerin Doğruluğu**
   - Her seçenek yalnızca metin içerecek; veri tekrar etmeyecek.
   - Doğru cevap (`correctLabel`) doğrulanacak.
4. **Rakam Formatları**
   - Türkçe binlik/ondalık ayracı kullanılacak (`1.500.000`, `73,5` gibi).
5. **Belgeleme**
   - Yapılan değişiklikler modül bazında `Yapılanlar/` klasöründe `.md` dosyaları olarak kaydedilecek (ör. `Yapılanlar/2025-01-analiz-teknikleri.md`).
   - Her kayıt: tarih, modül adı, yapılan düzenlemelerin özeti, özel notlar.
6. **Kalite Kontrol**
   - Her modül düzenlemesi sonrası tarayıcıda manuel kontrol yapılacak.
   - `npm run lint` veya ilgili testler gerekiyorsa çalıştırılacak.

### 5) İş Akışı
1. **Hazırlık**
   - `Yapılanlar/README.md` içinde kategori yapısı (örn. `Finans Modülleri / 2025-Q1`) tanımlanır.
   - Var olan PRD dokümanları Yapılanlar klasörüne taşınır ve etiketlenir.
2. **Modül Taraması** (her modül için tekrarlanır)
   - `*_data.js` okunur; soru metni, veri ve seçenekler ayrıştırılır.
   - Gerekirse kaynak `taslak.md` güncellenir (harici modüller için).
   - Referans paneli gerektiren tablolar `<pre>` veya temiz `<table>` ile `contextHtml`e taşınır.
   - Seçenek listesi güncellenir, sıralama ve doğru cevap kontrol edilir.
   - Kod formatı ve sayısal gösterim düzeltilir.
   - İlgili Yapılanlar kaydı oluşturulur.
3. **Toplu Kontrol**
   - `module_engine.js` ve `style.css` üzerinde yeni gereksinim çıkarsa PRD güncellenir.
   - Modüller arası tutarlılık, panel boyutu ve mobil davranış gözden geçirilir.
4. **Teslim**
   - Her modül için yapılan değişiklikler commit mesajlarında modül adıyla belirtilir.
   - PRD son durumla güncellenir; bekleyen sorular “Açık Konular” bölümünde listelenir.

### 6) Çıktılar
- Güncellenmiş `*_data.js` dosyaları (manuel düzenlenmiş sorular).
- Gerekirse güncellenmiş `taslak.md` kaynakları.
- `Yapılanlar/` klasöründe modül bazlı loglar.
- Nihai PRD ve ihtiyaç listesi.

### 7) Başarı Kriterleri
- [ ] Tüm finans modüllerinde veri içeren sorular referans panelinde görüntüleniyor.
- [ ] Panelde seçenek veya gereksiz satır yer almıyor.
- [ ] Tüm modüllerde sayısal format Türkçe yazım kurallarına uygun.
- [ ] `module_engine.js` paneli doğru sıralama ile çalıştırıyor; paneller arası veri aktarımı tutarlı.
- [ ] `Yapılanlar/` klasörü her modül güncellemesi için kayıt içeriyor.

### 8) Açık Konular / Riskler
- Manuel işlem süresi yüksek; kapsam genişledikçe ek kaynak gerekebilir.
- Bazı soruların doğruluğu için ek finansal kontrol gerekebilir.
- Harici modüller yeniden üretildiğinde (`generate-finance-external-modules.mjs`) manuel düzenlemeler üzerine yazılabilir; tekrar oluşturma süreci dikkatle yönetilmeli (gerekirse script geçici olarak devre dışı bırakılacak).

### 9) Referanslar
- Arşiv PRD: `Yapılanlar/2024-FileTree-PRD.md`
- Kapsamlı notlar: `baglam.md`, `yaptiklarim.md`
