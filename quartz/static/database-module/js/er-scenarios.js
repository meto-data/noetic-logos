// ER Diyagramı Senaryoları
const ER_SCENARIOS = {
    araba: {
        id: 'araba',
        title: 'Temel Varlık ve Nitelik Oluşturma',
        description: `Sisteme 'Araba' adında bir varlık ekleyin. Bu arabanın şu özelliklerini (niteliklerini) diyagrama yerleştirip varlığa bağlayın: 'Model', 'Yıl', 'Renk' ve 'Marka'.`,
        requirements: [
            { id: 'r1', text: 'Araba varlığı oluşturulmalı', type: 'entity', label: 'Araba' },
            { id: 'r2', text: 'Model niteliği eklenmeli', type: 'attribute', label: 'Model' },
            { id: 'r3', text: 'Yıl niteliği eklenmeli', type: 'attribute', label: 'Yıl' },
            { id: 'r4', text: 'Renk niteliği eklenmeli', type: 'attribute', label: 'Renk' },
            { id: 'r5', text: 'Marka niteliği eklenmeli', type: 'attribute', label: 'Marka' },
            { id: 'r6', text: 'Tüm nitelikler Araba varlığına bağlanmalı', type: 'connection', from: ['Model', 'Yıl', 'Renk', 'Marka'], to: 'Araba' }
        ]
    },
    ogrenci: {
        id: 'ogrenci',
        title: 'Birleşik ve Türetilmiş Nitelikler',
        description: `'Öğrenci' varlığını detaylandırın. 'Ad', 'Soyad', 'Numara' niteliklerini ekleyin. 'Numara' altı çizili (Anahtar) olmalı. 'Adres' birleşik nitelik olup 'Sokak' ve 'İl' alt niteliklerine sahip olmalı. 'Yaş' ise türetilmiş nitelik (kesik çizgili) olmalı.`,
        requirements: [
            { id: 'r1', text: 'Öğrenci varlığı oluşturulmalı', type: 'entity', label: 'Öğrenci' },
            { id: 'r2', text: 'Ad niteliği eklenmeli', type: 'attribute', label: 'Ad' },
            { id: 'r3', text: 'Soyad niteliği eklenmeli', type: 'attribute', label: 'Soyad' },
            { id: 'r4', text: 'Numara anahtar niteliği olarak eklenmeli', type: 'key-attribute', label: 'Numara' },
            { id: 'r5', text: 'Adres niteliği eklenmeli', type: 'attribute', label: 'Adres' },
            { id: 'r6', text: 'Sokak alt niteliği eklenmeli', type: 'attribute', label: 'Sokak' },
            { id: 'r7', text: 'İl alt niteliği eklenmeli', type: 'attribute', label: 'İl' },
            { id: 'r8', text: 'Yaş türetilmiş nitelik olarak eklenmeli', type: 'derived', label: 'Yaş' },
            { id: 'r9', text: 'Sokak ve İl, Adres niteliğine bağlanmalı', type: 'connection', from: ['Sokak', 'İl'], to: 'Adres' }
        ]
    },
    pasaport: {
        id: 'pasaport',
        title: 'Bire-Bir (1:1) İlişki Kurma',
        description: `İki varlık tanımlayın: 'Kişi' (TCNo, Ad, Soyad) ve 'Pasaport' (SeriNo, VerTarih). Kural: 'Her bir kişi sadece bir pasaport alabilir.' Bu iki varlık arasına 'alır' ilişkisini kurun ve ilişki derecelerini (1-1) belirtin.`,
        requirements: [
            { id: 'r1', text: 'Kişi varlığı oluşturulmalı', type: 'entity', label: 'Kişi' },
            { id: 'r2', text: 'TCNo anahtar niteliği eklenmeli', type: 'key-attribute', label: 'TCNo' },
            { id: 'r3', text: 'Ad niteliği eklenmeli', type: 'attribute', label: 'Ad' },
            { id: 'r4', text: 'Soyad niteliği eklenmeli', type: 'attribute', label: 'Soyad' },
            { id: 'r5', text: 'Pasaport varlığı oluşturulmalı', type: 'entity', label: 'Pasaport' },
            { id: 'r6', text: 'SeriNo anahtar niteliği eklenmeli', type: 'key-attribute', label: 'SeriNo' },
            { id: 'r7', text: 'VerTarih niteliği eklenmeli', type: 'attribute', label: 'VerTarih' },
            { id: 'r8', text: 'alır ilişkisi eklenmeli', type: 'relationship', label: 'alır' },
            { id: 'r9', text: 'Kişi-alır bağlantısı kurulmalı', type: 'connection', from: 'Kişi', to: 'alır' },
            { id: 'r10', text: 'alır-Pasaport bağlantısı kurulmalı', type: 'connection', from: 'alır', to: 'Pasaport' }
        ]
    },
    siparis: {
        id: 'siparis',
        title: 'Bire-Çok (1:N) İlişki Kurma',
        description: `'Müşteri' ve 'Sipariş' varlıklarını ekleyin. İş Kuralı: 'Bir müşteri birden çok sipariş verebilmektedir.' Aralarındaki 'verir' ilişkisini bu kurala göre çizin. Müşteri tarafına '1', Sipariş tarafına 'N' yazın.`,
        requirements: [
            { id: 'r1', text: 'Müşteri varlığı oluşturulmalı', type: 'entity', label: 'Müşteri' },
            { id: 'r2', text: 'Sipariş varlığı oluşturulmalı', type: 'entity', label: 'Sipariş' },
            { id: 'r3', text: 'verir ilişkisi eklenmeli', type: 'relationship', label: 'verir' },
            { id: 'r4', text: 'Müşteri-verir bağlantısı (1) kurulmalı', type: 'connection', from: 'Müşteri', to: 'verir', cardinality: '1' },
            { id: 'r5', text: 'verir-Sipariş bağlantısı (N) kurulmalı', type: 'connection', from: 'verir', to: 'Sipariş', cardinality: 'N' }
        ]
    },
    proje: {
        id: 'proje',
        title: 'Çoktan-Çoka (M:N) İlişki ve İlişki Niteliği',
        description: `'Öğrenci' ve 'Proje' varlıklarını modelleyin. Kural 1: Her öğrenci birden çok proje yapabilir, her projede birden çok öğrenci olabilir (M:N). Kural 2: Öğrencinin projeden aldığı 'Not' ilişkinin kendisine ait olmalı. 'Not' niteliğini 'yapar' ilişkisine bağlayın.`,
        requirements: [
            { id: 'r1', text: 'Öğrenci varlığı oluşturulmalı', type: 'entity', label: 'Öğrenci' },
            { id: 'r2', text: 'Proje varlığı oluşturulmalı', type: 'entity', label: 'Proje' },
            { id: 'r3', text: 'yapar ilişkisi eklenmeli', type: 'relationship', label: 'yapar' },
            { id: 'r4', text: 'Not niteliği eklenmeli', type: 'attribute', label: 'Not' },
            { id: 'r5', text: 'Öğrenci-yapar bağlantısı (M) kurulmalı', type: 'connection', from: 'Öğrenci', to: 'yapar', cardinality: 'M' },
            { id: 'r6', text: 'yapar-Proje bağlantısı (N) kurulmalı', type: 'connection', from: 'yapar', to: 'Proje', cardinality: 'N' },
            { id: 'r7', text: 'Not niteliği yapar ilişkisine bağlanmalı', type: 'connection', from: 'Not', to: 'yapar' }
        ]
    }
};
