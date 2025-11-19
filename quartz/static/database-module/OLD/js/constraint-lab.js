(function() {
    'use strict';

    const constraintPalette = [
        { id: 'pk', name: 'Primary Key', className: 'chip-pk', description: 'Her satırı benzersiz tanımlar.' },
        { id: 'fk', name: 'Foreign Key', className: 'chip-fk', description: 'Başka bir tablonun primary key\'ine referans verir.' },
        { id: 'unique', name: 'Unique', className: 'chip-unique', description: 'Tekrarlanan veriyi engeller.' },
        { id: 'notnull', name: 'Not Null', className: 'chip-notnull', description: 'Boş değer girilemez.' },
        { id: 'check', name: 'Check', className: 'chip-check', description: 'Koşullu doğrulama sağlar.' }
    ];

    const tables = [
        {
            id: 'ogrenciler',
            title: 'Öğrenciler',
            columns: [
                { id: 'ogrenciler-ogr_no', name: 'ogr_no', desc: 'Öğrenci numarası', allowed: ['pk', 'unique', 'notnull'], required: ['pk'] },
                { id: 'ogrenciler-ad', name: 'ad', desc: 'Öğrencinin adı', allowed: ['notnull'] },
                { id: 'ogrenciler-soyad', name: 'soyad', desc: 'Öğrencinin soyadı', allowed: ['notnull'] },
                { id: 'ogrenciler-mail', name: 'mail', desc: 'İletişim adresi', allowed: ['unique', 'notnull'], required: ['unique'] },
                { id: 'ogrenciler-tel', name: 'tel', desc: 'Telefon', allowed: ['unique'] },
                { id: 'ogrenciler-bolum_no', name: 'bolum_no', desc: 'Bağlı olduğu bölüm', allowed: ['fk', 'notnull'], required: ['fk'] }
            ]
        },
        {
            id: 'bolumler',
            title: 'Bölümler',
            columns: [
                { id: 'bolumler-bolum_no', name: 'bolum_no', desc: 'Bölüm numarası', allowed: ['pk', 'unique', 'notnull'], required: ['pk'] },
                { id: 'bolumler-bolum_ad', name: 'bolum_ad', desc: 'Bölüm adı', allowed: ['unique', 'notnull'], required: ['unique'] },
                { id: 'bolumler-fakulte', name: 'fakulte', desc: 'Fakülte', allowed: ['notnull'] }
            ]
        },
        {
            id: 'notlar',
            title: 'Notlar',
            columns: [
                { id: 'notlar-kayit_id', name: 'kayit_id', desc: 'Kayıt numarası', allowed: ['pk', 'unique', 'notnull'], required: ['pk'] },
                { id: 'notlar-ogr_no', name: 'ogr_no', desc: 'Öğrenci numarası', allowed: ['fk', 'notnull'], required: ['fk'] },
                { id: 'notlar-ders_kod', name: 'ders_kod', desc: 'Ders kodu', allowed: ['notnull'] },
                { id: 'notlar-vize', name: 'vize', desc: 'Vize notu', allowed: ['check'], required: ['check'] },
                { id: 'notlar-final', name: 'final', desc: 'Final notu', allowed: ['check'], required: ['check'] }
            ]
        }
    ];

    const sqlQuestions = [
        {
            category: 'Basit Projeksiyon',
            info: 'SELECT ve proje işlemleri',
            example: 'SELECT * FROM ogrenci;'
        },
        {
            category: 'Filtreleme',
            info: 'WHERE koşullu sorgular',
            example: 'SELECT ogr_no FROM notlar WHERE vize < 50;'
        },
        {
            category: 'JOIN',
            info: 'Tablolar arası ilişkilendirme',
            example: 'SELECT ogrenci.ad, bolumler.bolum_ad FROM ogrenci JOIN bolumler ON ogrenci.bolum_no = bolumler.bolum_no;'
        }
    ];

    const totalRequirements = tables.reduce((sum, table) => {
        return sum + table.columns.reduce((innerSum, column) => {
            return innerSum + (column.required ? column.required.length : 0);
        }, 0);
    }, 0);

    const state = {
        assignments: {},
        metRequirements: new Set(),
        totalRequirements,
        currentTableIndex: 0
    };

    const elements = {
        tableView: document.getElementById('table-view'),
        tableTabs: document.getElementById('table-tabs'),
        palette: document.getElementById('constraint-palette'),
        progressBadge: document.getElementById('progress-badge'),
        anomalyPanel: document.getElementById('anomaly-panel'),
        toast: document.getElementById('constraint-toast'),
        btnReset: document.getElementById('btn-reset'),
        questionTabs: document.getElementById('question-tabs'),
        themeToggle: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        themeText: document.getElementById('theme-text')
    };

    function renderTableTabs() {
        const buttons = tables.map((table, index) => `
            <button class="table-tab ${index === state.currentTableIndex ? 'active' : ''}" data-index="${index}">
                ${table.title}
            </button>
        `).join('');
        elements.tableTabs.innerHTML = buttons;
        elements.tableTabs.querySelectorAll('.table-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = Number(btn.getAttribute('data-index'));
                if (index !== state.currentTableIndex) {
                    state.currentTableIndex = index;
                    renderTableSection();
                    renderTableTabs();
                }
            });
        });
    }

    function renderTableSection() {
        const table = tables[state.currentTableIndex];
        const headerRow = `
            <div class="column-row">
                <div><strong>Kolon</strong></div>
                <div><strong>Açıklama</strong></div>
                <div><strong>Kısıtlar</strong></div>
            </div>
        `;
        const rows = table.columns.map(col => `
            <div class="column-row" data-column="${col.id}">
                <div class="column-name">${col.name}</div>
                <div class="column-desc">${col.desc}</div>
                <div class="drop-zone" data-drop="${col.id}"></div>
            </div>
        `).join('');
        elements.tableView.innerHTML = `
            <div class="table-section">
                <h3>${table.title}</h3>
                <div class="table-grid">
                    ${headerRow + rows}
                </div>
            </div>
        `;
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.addEventListener('dragover', handleDragOver);
            zone.addEventListener('drop', handleDrop);
            zone.addEventListener('dragleave', () => zone.classList.remove('hover'));
            const columnId = zone.getAttribute('data-drop');
            const assigned = state.assignments[columnId] || [];
            assigned.forEach(constraintId => {
                const constraintData = constraintPalette.find(c => c.id === constraintId);
                if (!constraintData) return;
                const chip = document.createElement('span');
                chip.className = `constraint-chip ${constraintData.className}`;
                chip.textContent = constraintData.name;
                zone.appendChild(chip);
            });
        });
    }

    function renderPalette() {
        elements.palette.innerHTML = constraintPalette.map(constraint => `
            <div class="palette-item" draggable="true" data-constraint="${constraint.id}">
                <span class="constraint-chip ${constraint.className}">${constraint.name}</span>
                <p>${constraint.description}</p>
            </div>
        `).join('');

        elements.palette.querySelectorAll('.palette-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', item.getAttribute('data-constraint'));
            });
        });
    }

    function renderQuestionTabs() {
        elements.questionTabs.innerHTML = sqlQuestions.map(q => `
            <div class="question-tab">
                <h4>${q.category}</h4>
                <p>${q.info}</p>
                <code>${q.example}</code>
            </div>
        `).join('');
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }

    function handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('hover');
        const constraintId = e.dataTransfer.getData('text/plain');
        const columnId = e.currentTarget.getAttribute('data-drop');
        applyConstraint(columnId, constraintId);
    }

    function getColumnById(columnId) {
        for (const table of tables) {
            const column = table.columns.find(col => col.id === columnId);
            if (column) {
                return { column, table };
            }
        }
        return null;
    }

    function getConstraintLabel(id) {
        const item = constraintPalette.find(c => c.id === id);
        return item ? item.name : id;
    }

    function applyConstraint(columnId, constraintId) {
        const columnInfo = getColumnById(columnId);
        if (!columnInfo) return;
        const { column, table } = columnInfo;

        if (!column.allowed.includes(constraintId)) {
            showToast('Bu kısıt bu kolona uygulanamaz.');
            return;
        }

        const dropZone = document.querySelector(`.drop-zone[data-drop="${columnId}"]`);
        if (!state.assignments[columnId]) {
            state.assignments[columnId] = [];
        }

        if (state.assignments[columnId].includes(constraintId)) {
            showToast('Bu kısıt zaten uygulanmış.');
            return;
        }

        state.assignments[columnId].push(constraintId);

        const constraintData = constraintPalette.find(c => c.id === constraintId);
        const chip = document.createElement('span');
        chip.className = `constraint-chip ${constraintData.className}`;
        chip.textContent = constraintData.name;
        dropZone.appendChild(chip);

        if (column.required && column.required.includes(constraintId)) {
            const key = `${columnId}:${constraintId}`;
            state.metRequirements.add(key);
        }

        updateProgress();
        updateAnomalies();
        showToast(`${table.title}.${column.name} alanı ${constraintData.name} ile güçlendirildi.`);
    }

    function updateProgress() {
        elements.progressBadge.textContent = `${state.metRequirements.size} / ${state.totalRequirements} kısıt`;
    }

    function updateAnomalies() {
        const issues = [];
        const resolved = [];
        const currentTable = tables[state.currentTableIndex];

        currentTable.columns.forEach(column => {
            (column.required || []).forEach(req => {
                const key = `${column.id}:${req}`;
                const label = `${currentTable.title}.${column.name} için ${getConstraintLabel(req)}`;
                if (state.metRequirements.has(key)) {
                    resolved.push(`${label} tanımlandı.`);
                } else {
                    issues.push(`${label} tanımlanmadı.`);
                }
            });
        });

        elements.anomalyPanel.innerHTML = `
            <h4>Anomaliler</h4>
            ${issues.map(item => `<div class="anomaly-item">${item}</div>`).join('') || '<p>Bu tabloda tüm zorunlu kısıtlar uygulandı.</p>'}
            ${resolved.map(item => `<div class="anomaly-item resolved">${item}</div>`).join('')}
        `;
    }

    function showToast(message) {
        elements.toast.textContent = message;
        elements.toast.classList.add('show');
        setTimeout(() => elements.toast.classList.remove('show'), 2200);
    }

    function resetConstraints() {
        state.assignments = {};
        state.metRequirements.clear();
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.innerHTML = '';
        });
        updateProgress();
        updateAnomalies();
        showToast('Tüm kısıtlar sıfırlandı.');
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
        renderTableTabs();
        renderTableSection();
        renderPalette();
        renderQuestionTabs();
        updateAnomalies();
        updateProgress();
        elements.btnReset.addEventListener('click', resetConstraints);
        elements.themeToggle.addEventListener('click', toggleTheme);
        loadTheme();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
