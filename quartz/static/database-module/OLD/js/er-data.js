// ER Diyagramı Test Verileri
const ER_QUESTIONS = [
    {
        id: 1,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="30" y="20" width="100" height="40" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Varlık (Entity)", "İlişki (Relationship)", "Nitelik (Attribute)", "Zayıf Varlık"],
        correct: 0,
        explanation: "Dikdörtgen, ER diyagramında bir varlığı (entity) temsil eder."
    },
    {
        id: 2,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <ellipse cx="80" cy="40" rx="60" ry="30" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Varlık (Entity)", "Nitelik (Attribute)", "İlişki (Relationship)", "Birincil Anahtar"],
        correct: 1,
        explanation: "Elips, bir niteliği (attribute) temsil eder."
    },
    {
        id: 3,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <polygon points="80,10 140,40 80,70 20,40" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Nitelik (Attribute)", "Varlık (Entity)", "İlişki (Relationship)", "Genelleştirme"],
        correct: 2,
        explanation: "Baklava (eşkenar dörtgen), varlıklar arasındaki ilişkiyi temsil eder."
    },
    {
        id: 4,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <ellipse cx="80" cy="40" rx="60" ry="30" fill="none" stroke="currentColor" stroke-width="3"/>
            <line x1="30" y1="45" x2="130" y2="45" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Çok Değerli Nitelik", "Türetilmiş Nitelik", "Birincil Anahtar (Primary Key)", "Yabancı Anahtar"],
        correct: 2,
        explanation: "Altı çizili elips, birincil anahtarı (primary key) temsil eder."
    },
    {
        id: 5,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="30" y="20" width="100" height="40" fill="none" stroke="currentColor" stroke-width="3"/>
            <rect x="35" y="25" width="90" height="30" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Güçlü Varlık", "Zayıf Varlık (Weak Entity)", "Alt Varlık", "Bileşik Varlık"],
        correct: 1,
        explanation: "Çift çizgili dikdörtgen, zayıf varlığı temsil eder. Zayıf varlık, başka bir varlığa bağımlıdır."
    },
    {
        id: 6,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <ellipse cx="80" cy="40" rx="60" ry="30" fill="none" stroke="currentColor" stroke-width="3"/>
            <ellipse cx="80" cy="40" rx="54" ry="24" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Birincil Anahtar", "Türetilmiş Nitelik", "Çok Değerli Nitelik (Multivalued)", "Bileşik Nitelik"],
        correct: 2,
        explanation: "Çift çizgili elips, çok değerli niteliği temsil eder. Örneğin bir kişinin birden fazla telefon numarası olabilir."
    },
    {
        id: 7,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <ellipse cx="80" cy="40" rx="60" ry="30" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8,4"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Opsiyonel Nitelik", "Türetilmiş Nitelik (Derived)", "Çok Değerli Nitelik", "Zayıf Nitelik"],
        correct: 1,
        explanation: "Kesikli çizgili elips, türetilmiş niteliği temsil eder. Bu nitelik diğer niteliklerden hesaplanır (örn: yaş, doğum tarihinden türetilir)."
    },
    {
        id: 8,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <polygon points="80,10 140,40 80,70 20,40" fill="none" stroke="currentColor" stroke-width="3"/>
            <polygon points="80,16 132,40 80,64 28,40" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Normal İlişki", "Tanımlayıcı İlişki (Identifying)", "Özyinelemeli İlişki", "Çoka-Çok İlişki"],
        correct: 1,
        explanation: "Çift çizgili baklava, tanımlayıcı ilişkiyi temsil eder. Zayıf varlığı tanımlayan ilişkidir."
    },
    {
        id: 9,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <polygon points="80,15 120,65 40,65" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Alt Tip İlişkisi", "Genelleştirme/Özelleştirme (ISA)", "Üçlü İlişki", "Hiyerarşik Yapı"],
        correct: 1,
        explanation: "Üçgen, genelleştirme/özelleştirme (ISA) ilişkisini temsil eder. Üst sınıf-alt sınıf ilişkisini gösterir."
    },
    {
        id: 10,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <line x1="20" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu çizgi türü neyi ifade eder?",
        options: ["Tam Katılım", "Kısmi Katılım (Partial Participation)", "Zorunlu İlişki", "Opsiyonel İlişki"],
        correct: 1,
        explanation: "Tek çizgi, kısmi katılımı temsil eder. Varlığın ilişkiye katılması zorunlu değildir."
    },
    {
        id: 11,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <line x1="20" y1="38" x2="140" y2="38" stroke="currentColor" stroke-width="3"/>
            <line x1="20" y1="42" x2="140" y2="42" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Bu çizgi türü neyi ifade eder?",
        options: ["Kısmi Katılım", "Tam Katılım (Total Participation)", "Çift Yönlü İlişki", "Güçlü Bağlantı"],
        correct: 1,
        explanation: "Çift çizgi, tam katılımı temsil eder. Varlığın ilişkiye katılması zorunludur."
    },
    {
        id: 12,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <ellipse cx="60" cy="40" rx="45" ry="25" fill="none" stroke="currentColor" stroke-width="3"/>
            <ellipse cx="110" cy="50" rx="30" ry="18" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="90" y1="40" x2="90" y2="50" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        question: "Bu yapı neyi ifade eder?",
        options: ["Çok Değerli Nitelik", "Bileşik Nitelik (Composite)", "İç İçe Varlık", "Hiyerarşik Nitelik"],
        correct: 1,
        explanation: "İç içe elipsler, bileşik niteliği temsil eder. Örneğin 'adres' niteliği: sokak, şehir, posta kodu gibi alt niteliklerden oluşur."
    },
    {
        id: 13,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="30" y="20" width="100" height="40" fill="none" stroke="currentColor" stroke-width="3"/>
            <text x="80" y="45" text-anchor="middle" font-size="14" fill="currentColor">OGRENCI</text>
        </svg>`,
        question: "Bu yapıda 'OGRENCI' neyi temsil eder?",
        options: ["Nitelik Adı", "İlişki Adı", "Varlık Adı (Entity Name)", "Tablo Adı"],
        correct: 2,
        explanation: "Dikdörtgen içindeki metin, varlık adını belirtir."
    },
    {
        id: 14,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <line x1="20" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="3"/>
            <text x="130" y="35" font-size="16" font-weight="bold" fill="currentColor">N</text>
        </svg>`,
        question: "Çizgi üzerindeki 'N' neyi ifade eder?",
        options: ["Normal İlişki", "Negatif Değer", "Çok (Many) Kardinalite", "Null Değer"],
        correct: 2,
        explanation: "'N' çok (many) kardinalitesini temsil eder. Bir varlık, ilişkide birden fazla kez katılabilir."
    },
    {
        id: 15,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <line x1="20" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="3"/>
            <text x="130" y="35" font-size="16" font-weight="bold" fill="currentColor">1</text>
        </svg>`,
        question: "Çizgi üzerindeki '1' neyi ifade eder?",
        options: ["Birincil Anahtar", "Bir (One) Kardinalite", "Tek Varlık", "İlk Sıra"],
        correct: 1,
        explanation: "'1' bir (one) kardinalitesini temsil eder. Bir varlık, ilişkide en fazla bir kez katılır."
    },
    {
        id: 16,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="20" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <polygon points="80,20 110,40 80,60 50,40" fill="none" stroke="currentColor" stroke-width="2"/>
            <rect x="90" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="70" y1="40" x2="50" y2="40" stroke="currentColor" stroke-width="2"/>
            <line x1="110" y1="40" x2="90" y2="40" stroke="currentColor" stroke-width="2"/>
            <text x="55" y="35" font-size="10" fill="currentColor">1</text>
            <text x="118" y="35" font-size="10" fill="currentColor">N</text>
        </svg>`,
        question: "Bu diyagram hangi ilişki türünü gösterir?",
        options: ["Bire-Bir (1:1)", "Bire-Çok (1:N)", "Çoka-Çok (M:N)", "Özyinelemeli"],
        correct: 1,
        explanation: "1:N gösterimi, bire-çok ilişkiyi temsil eder. Sol varlık birden fazla sağ varlıkla ilişkilendirilebilir."
    },
    {
        id: 17,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="20" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <polygon points="80,20 110,40 80,60 50,40" fill="none" stroke="currentColor" stroke-width="2"/>
            <rect x="90" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="70" y1="40" x2="50" y2="40" stroke="currentColor" stroke-width="2"/>
            <line x1="110" y1="40" x2="90" y2="40" stroke="currentColor" stroke-width="2"/>
            <text x="55" y="35" font-size="10" fill="currentColor">M</text>
            <text x="118" y="35" font-size="10" fill="currentColor">N</text>
        </svg>`,
        question: "Bu diyagram hangi ilişki türünü gösterir?",
        options: ["Bire-Bir (1:1)", "Bire-Çok (1:N)", "Çoka-Çok (M:N)", "Tek Yönlü"],
        correct: 2,
        explanation: "M:N gösterimi, çoka-çok ilişkiyi temsil eder. Her iki taraf da birden fazla eşleşme yapabilir."
    },
    {
        id: 18,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="20" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <polygon points="80,20 110,40 80,60 50,40" fill="none" stroke="currentColor" stroke-width="2"/>
            <rect x="90" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="70" y1="40" x2="50" y2="40" stroke="currentColor" stroke-width="2"/>
            <line x1="110" y1="40" x2="90" y2="40" stroke="currentColor" stroke-width="2"/>
            <text x="55" y="35" font-size="10" fill="currentColor">1</text>
            <text x="118" y="35" font-size="10" fill="currentColor">1</text>
        </svg>`,
        question: "Bu diyagram hangi ilişki türünü gösterir?",
        options: ["Bire-Bir (1:1)", "Bire-Çok (1:N)", "Çoka-Çok (M:N)", "Sıfıra-Bir"],
        correct: 0,
        explanation: "1:1 gösterimi, bire-bir ilişkiyi temsil eder. Her varlık en fazla bir diğer varlıkla eşleşir."
    },
    {
        id: 19,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="55" y="10" width="50" height="25" fill="none" stroke="currentColor" stroke-width="2"/>
            <polygon points="80,45 100,60 80,75 60,60" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="80" y1="35" x2="80" y2="45" stroke="currentColor" stroke-width="2"/>
            <line x1="60" y1="60" x2="80" y2="60" stroke="currentColor" stroke-width="2"/>
            <line x1="100" y1="60" x2="80" y2="60" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        question: "Bu yapı neyi temsil eder?",
        options: ["İkili İlişki", "Özyinelemeli İlişki (Recursive)", "Üçlü İlişki", "Hiyerarşik İlişki"],
        correct: 1,
        explanation: "Bir varlığın kendisiyle ilişkisi, özyinelemeli (recursive) ilişkidir. Örneğin: çalışan-yönetici ilişkisi."
    },
    {
        id: 20,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <ellipse cx="80" cy="40" rx="60" ry="30" fill="none" stroke="currentColor" stroke-width="3"/>
            <line x1="30" y1="45" x2="130" y2="45" stroke="currentColor" stroke-width="3" stroke-dasharray="6,3"/>
        </svg>`,
        question: "Bu sembol neyi ifade eder?",
        options: ["Birincil Anahtar", "Kısmi Anahtar (Partial Key)", "Yabancı Anahtar", "Alternatif Anahtar"],
        correct: 1,
        explanation: "Kesikli altı çizili elips, kısmi anahtarı temsil eder. Zayıf varlığın kısmi tanımlayıcısıdır."
    },
    {
        id: 21,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="30" y="20" width="100" height="40" fill="none" stroke="currentColor" stroke-width="3"/>
            <rect x="35" y="25" width="90" height="30" fill="none" stroke="currentColor" stroke-width="3"/>
            <ellipse cx="80" cy="10" rx="30" ry="12" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="80" y1="20" x2="80" y2="22" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        question: "Zayıf varlığın niteliğinde altı çizili olması neyi gösterir?",
        options: ["Birincil Anahtar", "Yabancı Anahtar", "Kısmi Anahtar", "Discriminator (Ayırıcı)"],
        correct: 2,
        explanation: "Zayıf varlıkta altı çizili nitelik, kısmi anahtardır. Tek başına varlığı tanımlamaz, sahip varlıkla birlikte tanımlar."
    },
    {
        id: 22,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <line x1="20" y1="38" x2="70" y2="38" stroke="currentColor" stroke-width="3"/>
            <line x1="20" y1="42" x2="70" y2="42" stroke="currentColor" stroke-width="3"/>
            <polygon points="80,20 110,40 80,60 50,40" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="110" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="3"/>
        </svg>`,
        question: "Sol taraftaki çift çizgi neyi gösterir?",
        options: ["Güçlü Varlık", "Tam Katılım (Zorunlu)", "Kısmi Katılım", "Çift Yönlü İlişki"],
        correct: 1,
        explanation: "İlişkiye giden çift çizgi, tam katılımı (total participation) gösterir. O varlığın ilişkiye katılması zorunludur."
    },
    {
        id: 23,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <polygon points="80,15 120,65 40,65" fill="none" stroke="currentColor" stroke-width="3"/>
            <text x="80" y="52" text-anchor="middle" font-size="12" fill="currentColor">d</text>
        </svg>`,
        question: "Üçgen içindeki 'd' harfi neyi ifade eder?",
        options: ["Derived (Türetilmiş)", "Disjoint (Ayrık)", "Dependent (Bağımlı)", "Direct (Doğrudan)"],
        correct: 1,
        explanation: "'d' disjoint (ayrık) anlamına gelir. Alt sınıflar birbirini dışlar, bir varlık sadece bir alt sınıfa ait olabilir."
    },
    {
        id: 24,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <polygon points="80,15 120,65 40,65" fill="none" stroke="currentColor" stroke-width="3"/>
            <text x="80" y="52" text-anchor="middle" font-size="12" fill="currentColor">o</text>
        </svg>`,
        question: "Üçgen içindeki 'o' harfi neyi ifade eder?",
        options: ["Optional (Opsiyonel)", "Overlapping (Örtüşen)", "One (Bir)", "Origin (Köken)"],
        correct: 1,
        explanation: "'o' overlapping (örtüşen) anlamına gelir. Bir varlık birden fazla alt sınıfa ait olabilir."
    },
    {
        id: 25,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="30" y="10" width="100" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <polygon points="80,50 100,65 80,80 60,65" fill="none" stroke="currentColor" stroke-width="3"/>
            <polygon points="80,54 96,65 80,76 64,65" fill="none" stroke="currentColor" stroke-width="3"/>
            <line x1="80" y1="40" x2="80" y2="50" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        question: "Çift çizgili baklava bir varlığa bağlıysa ne anlama gelir?",
        options: ["Normal İlişki", "Zayıf Varlığın Tanımlayıcı İlişkisi", "Güçlü İlişki", "Bağımsız İlişki"],
        correct: 1,
        explanation: "Çift çizgili baklava, zayıf varlığı tanımlayan ilişkiyi gösterir. Zayıf varlık bu ilişki üzerinden güçlü varlığa bağlanır."
    },
    {
        id: 26,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <line x1="80" y1="10" x2="80" y2="70" stroke="currentColor" stroke-width="2"/>
            <line x1="20" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="2"/>
            <text x="30" y="35" font-size="12" fill="currentColor">(0,N)</text>
            <text x="110" y="35" font-size="12" fill="currentColor">(1,1)</text>
        </svg>`,
        question: "(0,N) gösterimi neyi ifade eder?",
        options: ["Sıfır veya daha fazla", "En az sıfır, en fazla N", "Tam olarak N", "N'den az"],
        correct: 1,
        explanation: "(0,N) min-max gösteriminde minimum 0, maksimum N (çok) anlamına gelir. Katılım opsiyoneldir ve birden fazla olabilir."
    },
    {
        id: 27,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <line x1="80" y1="10" x2="80" y2="70" stroke="currentColor" stroke-width="2"/>
            <line x1="20" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="2"/>
            <text x="30" y="35" font-size="12" fill="currentColor">(1,1)</text>
            <text x="110" y="35" font-size="12" fill="currentColor">(1,N)</text>
        </svg>`,
        question: "(1,1) gösterimi neyi ifade eder?",
        options: ["Tam olarak bir", "En az bir, en fazla bir", "Sıfır veya bir", "Birden fazla"],
        correct: 1,
        explanation: "(1,1) minimum 1, maksimum 1 anlamına gelir. Tam olarak bir kez katılım zorunludur."
    },
    {
        id: 28,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="55" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
            <ellipse cx="30" cy="20" rx="25" ry="15" fill="none" stroke="currentColor" stroke-width="2"/>
            <ellipse cx="130" cy="20" rx="25" ry="15" fill="none" stroke="currentColor" stroke-width="2"/>
            <ellipse cx="80" cy="75" rx="25" ry="15" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="55" y1="30" x2="45" y2="25" stroke="currentColor" stroke-width="2"/>
            <line x1="105" y1="30" x2="115" y2="25" stroke="currentColor" stroke-width="2"/>
            <line x1="80" y1="55" x2="80" y2="60" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        question: "Bir varlığa bağlı birden fazla elips neyi gösterir?",
        options: ["Çok değerli nitelikler", "Varlığın birden fazla niteliği", "Bileşik varlık", "İlişkili varlıklar"],
        correct: 1,
        explanation: "Bir varlığa bağlı her elips, o varlığın bir niteliğini temsil eder. Varlıklar genellikle birden fazla niteliğe sahiptir."
    },
    {
        id: 29,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <rect x="20" y="15" width="40" height="25" fill="none" stroke="currentColor" stroke-width="2"/>
            <rect x="100" y="15" width="40" height="25" fill="none" stroke="currentColor" stroke-width="2"/>
            <rect x="60" y="50" width="40" height="25" fill="none" stroke="currentColor" stroke-width="2"/>
            <polygon points="80,20 95,35 80,50 65,35" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="60" y1="27" x2="65" y2="35" stroke="currentColor" stroke-width="2"/>
            <line x1="100" y1="27" x2="95" y2="35" stroke="currentColor" stroke-width="2"/>
            <line x1="80" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        question: "Üç varlığı birbirine bağlayan ilişki ne olarak adlandırılır?",
        options: ["İkili İlişki", "Üçlü (Ternary) İlişki", "Çoklu Varlık", "Hiyerarşik İlişki"],
        correct: 1,
        explanation: "Üç varlığı aynı anda birbirine bağlayan ilişki, üçlü (ternary) ilişkidir."
    },
    {
        id: 30,
        symbol: `<svg width="160" height="80" viewBox="0 0 160 80">
            <ellipse cx="80" cy="40" rx="60" ry="30" fill="none" stroke="currentColor" stroke-width="3"/>
            <text x="80" y="45" text-anchor="middle" font-size="14" fill="currentColor">yas</text>
        </svg>`,
        question: "'yas' niteliği hangi türde olmalıdır?",
        options: ["Basit Nitelik", "Bileşik Nitelik", "Türetilmiş Nitelik", "Çok Değerli Nitelik"],
        correct: 2,
        explanation: "Yaş, doğum tarihinden hesaplandığı için türetilmiş niteliktir. Kesikli çizgi ile gösterilmelidir."
    }
];
