(function() {
    'use strict';

    const steps = [
        {
            id: '0NF',
            title: 'Atomik Olmayan Yapı',
            label: '0NF',
            description: 'Öğrenci ve aldığı tüm derslerin tek satırda tutulduğu düzensiz yapı. Çok değerli alanlar veri tekrarına ve anomalilere neden olur.',
            anomalies: {
                unresolved: [
                    'Atomik olmayan "Aldığı Dersler" alanı',
                    'Güncelleme/Silme/Ekleme anomalileri',
                    'Veri tekrarlarının kontrolsüz artması'
                ],
                resolved: []
            },
            tables: [
                {
                    title: 'Ogrenci_Ders (0NF)',
                    headers: ['Ogrenci_No', 'Ogrenci', 'Aldigi_Ders_ve_Egitmenler'],
                    rows: [
                        ['101', 'Salih Girgin', 'VIBECODE101 (Wojak Developer), MOBDEV101 (Fatih Kadir Akın)'],
                        ['102', 'Arif Çıkkın', 'TWITTER101 (Prompt Mühendisi)'],
                        ['103', 'Onur Özcan', 'CHATGPT101 (Sam Altman), VIBECODE101 (Wojak Developer)']
                    ]
                }
            ]
        },
        {
            id: '1NF',
            title: 'Atomiklik Sağlandı',
            label: '1NF',
            description: 'Çok değerli alanlar satırlara bölündü. Her hücre tek değer içeriyor ancak tekrarlar devam ediyor.',
            anomalies: {
                unresolved: [
                    'Bileşik anahtar: (Ogrenci_No, Ders_Kod)',
                    'Ad/Soyad bilgisi tekrar ediyor',
                    'Ekleme/Silme anomalileri devam ediyor'
                ],
                resolved: [
                    'Atomik olmayan alanlar giderildi'
                ]
            },
            tables: [
                {
                    title: 'Ogrenci_Ders (1NF)',
                    headers: ['Ogrenci_No', 'Ad', 'Soyad', 'Ders_Kod', 'Egt_Ad', 'Egt_Soyad'],
                    rows: [
                        ['101', 'Salih', 'Girgin', 'VIBECODE101', 'Wojak', 'Developer'],
                        ['101', 'Salih', 'Girgin', 'MOBDEV101', 'Fatih Kadir', 'Akın'],
                        ['102', 'Arif', 'Çıkkın', 'TWITTER101', 'Prompt', 'Mühendisi'],
                        ['103', 'Onur', 'Özcan', 'CHATGPT101', 'Sam', 'Altman'],
                        ['103', 'Onur', 'Özcan', 'VIBECODE101', 'Wojak', 'Developer']
                    ]
                }
            ]
        },
        {
            id: '2NF',
            title: 'Kısmi Bağımlılıklar Giderildi',
            label: '2NF',
            description: 'Ad/Soyad gibi sadece Ogrenci_No\'ya bağlı alanlar ayrı tabloya taşındı. Öğrenciler ile ders kayıtları ayrıldı.',
            anomalies: {
                unresolved: [
                    'Eğitmen bilgisi Ders_Kod\'a bağlı (geçişli bağımlılık)',
                    'Ders bilgisi silinince eğitmen bilgisi kaybolabilir'
                ],
                resolved: [
                    'Öğrenci bilgilerindeki tekrar kaldırıldı',
                    'Kısmi bağımlılıklar giderildi'
                ]
            },
            tables: [
                {
                    title: 'Ogrenciler',
                    headers: ['Ogrenci_No', 'Ad', 'Soyad'],
                    rows: [
                        ['101', 'Salih', 'Girgin'],
                        ['102', 'Arif', 'Çıkkın'],
                        ['103', 'Onur', 'Özcan']
                    ]
                },
                {
                    title: 'Ders_Kayitlari',
                    headers: ['Ogrenci_No', 'Ders_Kod', 'Egt_Ad', 'Egt_Soyad'],
                    rows: [
                        ['101', 'VIBECODE101', 'Wojak', 'Developer'],
                        ['101', 'MOBDEV101', 'Fatih Kadir', 'Akın'],
                        ['102', 'TWITTER101', 'Prompt', 'Mühendisi'],
                        ['103', 'CHATGPT101', 'Sam', 'Altman'],
                        ['103', 'VIBECODE101', 'Wojak', 'Developer']
                    ]
                }
            ]
        },
        {
            id: '3NF',
            title: 'Geçişli Bağımlılıklar Giderildi',
            label: '3NF',
            description: 'Ders ve eğitmen bilgileri kendi tablosuna taşındı. Kayıtlar tablosu yalnızca ilişkiyi ifade ediyor. Veri tekrarları yok.',
            anomalies: {
                unresolved: [],
                resolved: [
                    'Geçişli bağımlılıklar kaldırıldı',
                    'Güncelleme/Ekleme/Silme anomalileri giderildi',
                    'Veri tekrarları minimize edildi'
                ]
            },
            tables: [
                {
                    title: 'Ogrenciler',
                    headers: ['Ogrenci_No', 'Ad', 'Soyad'],
                    rows: [
                        ['101', 'Salih', 'Girgin'],
                        ['102', 'Arif', 'Çıkkın'],
                        ['103', 'Onur', 'Özcan']
                    ]
                },
                {
                    title: 'Dersler',
                    headers: ['Ders_Kod', 'Egt_Ad', 'Egt_Soyad'],
                    rows: [
                        ['VIBECODE101', 'Wojak', 'Developer'],
                        ['MOBDEV101', 'Fatih Kadir', 'Akın'],
                        ['TWITTER101', 'Prompt', 'Mühendisi'],
                        ['CHATGPT101', 'Sam', 'Altman']
                    ]
                },
                {
                    title: 'Kayitlar',
                    headers: ['Kayit_ID', 'Ogrenci_No', 'Ders_Kod'],
                    rows: [
                        ['1', '101', 'VIBECODE101'],
                        ['2', '101', 'MOBDEV101'],
                        ['3', '102', 'TWITTER101'],
                        ['4', '103', 'CHATGPT101'],
                        ['5', '103', 'VIBECODE101']
                    ]
                }
            ]
        }
    ];

    const state = {
        currentIndex: 0
    };

    const elements = {
        stepList: document.getElementById('step-list'),
        stageLabel: document.getElementById('stage-label'),
        stageTitle: document.getElementById('stage-title'),
        stageDescription: document.getElementById('stage-description'),
        tableWrapper: document.getElementById('table-wrapper'),
        anomalyPanel: document.getElementById('anomaly-panel'),
        btnNext: document.getElementById('btn-next-step'),
        btnPrevious: document.getElementById('btn-previous-step'),
        themeToggle: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        themeText: document.getElementById('theme-text')
    };

    function renderTimeline() {
        const html = steps.map((step, index) => `
            <li class="step-item ${index === state.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="step-meta">${step.label}</div>
                <strong>${step.title}</strong>
            </li>
        `).join('');
        elements.stepList.innerHTML = html;
        elements.stepList.querySelectorAll('.step-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = Number(item.getAttribute('data-index'));
                setStep(index);
            });
        });
    }

    function renderTables(step) {
        const html = step.tables.map(table => {
            const headerHtml = table.headers.map(col => `<th>${col}</th>`).join('');
            const rowHtml = table.rows.map(row => {
                return '<tr>' + row.map(cell => `<td>${cell}</td>`).join('') + '</tr>';
            }).join('');
            return `
                <table class="data-table">
                    <caption>${table.title}</caption>
                    <thead><tr>${headerHtml}</tr></thead>
                    <tbody>${rowHtml}</tbody>
                </table>
            `;
        }).join('');
        elements.tableWrapper.innerHTML = html;
    }

    function renderAnomalies(step) {
        const unresolvedHtml = step.anomalies.unresolved.map(text => `
            <div class="anomaly-item issue">
                <span class="badge badge-issue"></span>${text}
            </div>
        `).join('');
        const resolvedHtml = step.anomalies.resolved.map(text => `
            <div class="anomaly-item resolved">
                <span class="badge badge-resolved"></span>${text}
            </div>
        `).join('');
        elements.anomalyPanel.innerHTML = `
            <div class="anomaly-lists">
                <h4>Tespit Edilen Sorunlar</h4>
                ${unresolvedHtml || '<p>Tüm sorunlar giderildi.</p>'}
            </div>
            <div class="anomaly-lists">
                <h4>Çözülen Sorunlar</h4>
                ${resolvedHtml || '<p>Bu adımda henüz çözüm uygulanmadı.</p>'}
            </div>
        `;
    }

    function setStep(index) {
        state.currentIndex = index;
        const step = steps[index];
        elements.stageLabel.textContent = step.label;
        elements.stageTitle.textContent = step.title;
        elements.stageDescription.textContent = step.description;
        renderTables(step);
        renderAnomalies(step);
        renderTimeline();
        updateButtons();
    }

    function updateButtons() {
        elements.btnPrevious.disabled = state.currentIndex === 0;
        elements.btnNext.disabled = state.currentIndex === steps.length - 1;
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        if (current === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            elements.themeIcon.innerHTML = '&#9790;';
            elements.themeText.textContent = 'Koyu Tema';
            localStorage.setItem('sql-learning-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            elements.themeIcon.innerHTML = '&#9788;';
            elements.themeText.textContent = 'Açık Tema';
            localStorage.setItem('sql-learning-theme', 'dark');
        }
    }

    function loadTheme() {
        const saved = localStorage.getItem('sql-learning-theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            elements.themeIcon.innerHTML = '&#9788;';
            elements.themeText.textContent = 'Açık Tema';
        }
    }

    function init() {
        elements.btnNext.addEventListener('click', () => {
            if (state.currentIndex < steps.length - 1) {
                setStep(state.currentIndex + 1);
            }
        });
        elements.btnPrevious.addEventListener('click', () => {
            if (state.currentIndex > 0) {
                setStep(state.currentIndex - 1);
            }
        });
        elements.themeToggle.addEventListener('click', toggleTheme);
        loadTheme();
        setStep(0);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
