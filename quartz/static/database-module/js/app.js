// SQL Öğretim Sistemi Ana Uygulama
(function() {
    'use strict';

    // Uygulama Durumu
    const state = {
        db: null,
        currentSection: 'giris',
        currentCategory: null,
        currentSubcategory: null,
        currentExerciseIndex: 0,
        exercises: [],
        userVariables: {},
        completedExercises: new Set(),
        currentExerciseCompleted: false,
        currentTheme: 'light',
        editorTheme: 'dark',
        codeMirror: null
    };

    // DOM Elemanları
    const elements = {
        navLinks: document.querySelectorAll('.nav-link'),
        sections: document.querySelectorAll('.content-section'),
        btnStart: document.getElementById('btn-start'),
        categoryList: document.getElementById('category-list'),
        exerciseTitle: document.getElementById('exercise-title'),
        exerciseCounter: document.getElementById('exercise-counter'),
        btnPrev: document.getElementById('btn-prev'),
        btnNext: document.getElementById('btn-next'),
        referenceContent: document.getElementById('reference-content'),
        taskContent: document.getElementById('task-content'),
        sqlInput: document.getElementById('sql-input'),
        btnRun: document.getElementById('btn-run'),
        btnCheck: document.getElementById('btn-check'),
        btnHint: document.getElementById('btn-hint'),
        btnSolution: document.getElementById('btn-solution'),
        btnClear: document.getElementById('btn-clear'),
        outputContent: document.getElementById('output-content'),
        feedbackArea: document.getElementById('feedback-area'),
        feedbackContent: document.getElementById('feedback-content'),
        themeToggle: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        themeText: document.getElementById('theme-text'),
        editorThemeToggle: document.getElementById('editor-theme-toggle'),
        editorThemeIcon: document.getElementById('editor-theme-icon'),
        editorContainer: document.getElementById('editor-container'),
        moduleOverlay: document.getElementById('module-overlay'),
        moduleFrame: document.getElementById('module-frame'),
        moduleTitle: document.getElementById('module-dialog-title'),
        moduleClose: document.getElementById('module-close'),
        moduleButtons: document.querySelectorAll('.module-open-btn')
    };

    // CodeMirror Editörünü Başlat
    function initCodeMirror() {
        state.codeMirror = CodeMirror.fromTextArea(elements.sqlInput, {
            mode: 'text/x-sql',
            theme: 'dracula',
            lineNumbers: true,
            lineWrapping: true,
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            autofocus: false,
            placeholder: '-- SQL komutunuzu buraya yazın...\nSELECT * FROM tablo;',
            extraKeys: {
                'Ctrl-Enter': function(cm) {
                    runSQL();
                },
                'Ctrl-Space': 'autocomplete',
                'Tab': function(cm) {
                    cm.replaceSelection('    ', 'end');
                }
            },
            hintOptions: {
                tables: {
                    ogrenciler: ['id', 'ad', 'soyad', 'yas', 'bolum'],
                    urunler: ['id', 'ad', 'fiyat', 'stok'],
                    musteriler: ['id', 'ad', 'soyad', 'email', 'telefon']
                }
            }
        });

        // Editör yüksekliğini ayarla
        state.codeMirror.setSize(null, 180);
    }

    // Tema Yönetimi
    function loadTheme() {
        const savedTheme = localStorage.getItem('sql-learning-theme');
        if (savedTheme) {
            state.currentTheme = savedTheme;
            applyTheme(savedTheme);
        }

        // Editör temasını yükle
        const savedEditorTheme = localStorage.getItem('sql-editor-theme');
        if (savedEditorTheme === 'light') {
            applyEditorTheme('light');
        }
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            elements.themeIcon.innerHTML = '&#9788;'; // Güneş ikonu
            elements.themeText.textContent = 'Açık Tema';
        } else {
            document.documentElement.removeAttribute('data-theme');
            elements.themeIcon.innerHTML = '&#9790;'; // Ay ikonu
            elements.themeText.textContent = 'Koyu Tema';
        }
        state.currentTheme = theme;
    }

    function toggleTheme() {
        const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('sql-learning-theme', newTheme);
    }

    // Editör Tema Yönetimi
    function applyEditorTheme(theme) {
        state.editorTheme = theme;
        if (state.codeMirror) {
            if (theme === 'light') {
                state.codeMirror.setOption('theme', 'eclipse');
                elements.editorThemeIcon.innerHTML = '&#9790;'; // Ay ikonu (karanlığa geç)
            } else {
                state.codeMirror.setOption('theme', 'dracula');
                elements.editorThemeIcon.innerHTML = '&#9788;'; // Güneş ikonu (aydınlığa geç)
            }
        }
    }

    function toggleEditorTheme() {
        const newTheme = state.editorTheme === 'dark' ? 'light' : 'dark';
        applyEditorTheme(newTheme);
        localStorage.setItem('sql-editor-theme', newTheme);
    }

    function openModuleViewer(title, src) {
        if (!elements.moduleOverlay || !elements.moduleFrame) return;
        elements.moduleTitle.textContent = title;
        elements.moduleFrame.src = src;
        elements.moduleOverlay.classList.add('active');
        elements.moduleOverlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
    }

    function closeModuleViewer() {
        if (!elements.moduleOverlay || !elements.moduleFrame) return;
        elements.moduleOverlay.classList.remove('active');
        elements.moduleOverlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        elements.moduleFrame.src = '';
    }

    // SQL.js Veritabanını Başlat
    async function initDatabase() {
        try {
            const SQL = await initSqlJs({
                locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
            });
            state.db = new SQL.Database();
            console.log('SQLite veritabanı başarıyla başlatıldı.');
        } catch (error) {
            console.error('Veritabanı başlatılamadı:', error);
            showOutput('Hata: Veritabanı başlatılamadı. Sayfa yeniden yüklenmelidir.', 'error');
        }
    }

    // Bölüm Değiştirme
    function switchSection(sectionId) {
        elements.sections.forEach(section => {
            section.classList.remove('active');
        });
        elements.navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        const targetLink = document.querySelector(`[data-section="${sectionId}"]`);

        if (targetSection) {
            targetSection.classList.add('active');
        }
        if (targetLink) {
            targetLink.classList.add('active');
        }

        state.currentSection = sectionId;
    }

    // Kategorileri Göster
    function renderCategories() {
        let html = '';

        SQL_DATA.categories.forEach(category => {
            html += `
                <div class="category-card">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <div class="subcategory-list">
            `;

            category.subcategories.forEach(sub => {
                const exerciseCount = sub.exercises.length;
                html += `
                    <button class="subcategory-btn"
                            data-category="${category.id}"
                            data-subcategory="${sub.id}">
                        ${sub.name} <span class="exercise-count">(${exerciseCount} soru)</span>
                    </button>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        elements.categoryList.innerHTML = html;

        // Alt kategori butonlarına olay dinleyicisi ekle
        document.querySelectorAll('.subcategory-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const categoryId = this.getAttribute('data-category');
                const subcategoryId = this.getAttribute('data-subcategory');
                loadExercises(categoryId, subcategoryId);
            });
        });
    }

    // Alıştırmaları Yükle
    function loadExercises(categoryId, subcategoryId) {
        const category = SQL_DATA.categories.find(c => c.id === categoryId);
        if (!category) return;

        const subcategory = category.subcategories.find(s => s.id === subcategoryId);
        if (!subcategory) return;

        state.currentCategory = category;
        state.currentSubcategory = subcategory;
        state.exercises = subcategory.exercises;
        state.currentExerciseIndex = 0;

        // Veritabanını sıfırla
        resetDatabase();

        // Alıştırmayı göster
        renderCurrentExercise();
        switchSection('uygulama');
    }

    // Veritabanını Sıfırla
    function resetDatabase() {
        if (state.db) {
            state.db.close();
        }
        initSqlJs({
            locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
        }).then(SQL => {
            state.db = new SQL.Database();
        });
    }

    // Mevcut Alıştırmayı Göster
    function renderCurrentExercise() {
        if (state.exercises.length === 0) return;

        const exercise = state.exercises[state.currentExerciseIndex];

        // Başlık
        elements.exerciseTitle.textContent = `${state.currentSubcategory.name}`;

        // Sayaç
        elements.exerciseCounter.textContent = `${state.currentExerciseIndex + 1} / ${state.exercises.length}`;

        // Mevcut sorunun tamamlanma durumunu kontrol et
        state.currentExerciseCompleted = state.completedExercises.has(exercise.id);

        // Navigasyon butonları
        elements.btnPrev.disabled = state.currentExerciseIndex === 0;

        // Sonraki butonu: Son soru değilse VE mevcut soru tamamlandıysa aktif
        const isLastExercise = state.currentExerciseIndex === state.exercises.length - 1;
        elements.btnNext.disabled = isLastExercise || !state.currentExerciseCompleted;

        // Kilit durumunu göster
        updateLockStatus();

        // Setup scriptini çalıştır (gerekli tabloları oluştur)
        runSetupScript(exercise);

        // Referans Veri
        if (exercise.reference) {
            elements.referenceContent.innerHTML = `<pre>${escapeHtml(exercise.reference)}</pre>`;
        } else {
            elements.referenceContent.innerHTML = '<p class="no-data">(Bu soru için referans veri bulunmamaktadır.)</p>';
        }

        // Görev Açıklaması
        elements.taskContent.innerHTML = `<p>${escapeHtml(exercise.task).replace(/\n/g, '<br>')}</p>`;

        // Girdi ve Çıktıyı Temizle
        if (state.codeMirror) {
            state.codeMirror.setValue('');
        }
        elements.outputContent.innerHTML = '<p class="placeholder-text">SQL komutunuzu çalıştırdığınızda sonuçlar burada görünecektir.</p>';
        elements.feedbackArea.style.display = 'none';
    }

    // Setup scriptini çalıştır
    function runSetupScript(exercise) {
        if (!exercise.setup || !state.db) return;

        try {
            state.db.exec(exercise.setup);
            console.log('Setup scripti başarıyla çalıştırıldı:', exercise.id);
        } catch (error) {
            console.warn('Setup scripti çalıştırılamadı:', error.message);
        }
    }

    // Kilit durumunu güncelle
    function updateLockStatus() {
        const isLastExercise = state.currentExerciseIndex === state.exercises.length - 1;

        if (!isLastExercise && !state.currentExerciseCompleted) {
            elements.btnNext.title = 'Bu soruyu doğru cevaplamalısınız';
            elements.btnNext.classList.add('locked');
        } else {
            elements.btnNext.title = '';
            elements.btnNext.classList.remove('locked');
        }
    }

    // SQL Komutunu Çalıştır
    function runSQL() {
        const sql = state.codeMirror ? state.codeMirror.getValue().trim() : '';

        if (!sql) {
            showOutput('Lütfen bir SQL komutu girin.', 'warning');
            return;
        }

        if (!state.db) {
            showOutput('Veritabanı henüz hazır değil. Lütfen bekleyin.', 'error');
            return;
        }

        try {
            const results = state.db.exec(sql);

            if (results.length === 0) {
                showOutput('Komut başarıyla çalıştırıldı. (Sonuç satırı yok veya DDL/DML işlemi)', 'success');
            } else {
                let outputHtml = '';
                results.forEach((result, idx) => {
                    outputHtml += renderResultTable(result, idx);
                });
                elements.outputContent.innerHTML = outputHtml;
            }
        } catch (error) {
            showOutput(`SQL Hatası: ${error.message}`, 'error');
        }
    }

    // Sonuç Tablosunu Oluştur
    function renderResultTable(result, index) {
        let html = '';

        if (index > 0) {
            html += '<hr class="result-separator">';
        }

        html += '<div class="result-header">Sorgu Sonucu #' + (index + 1) + '</div>';
        html += '<table class="result-table">';

        // Başlık satırı
        html += '<thead><tr>';
        result.columns.forEach(col => {
            html += `<th>${escapeHtml(col)}</th>`;
        });
        html += '</tr></thead>';

        // Veri satırları
        html += '<tbody>';
        result.values.forEach(row => {
            html += '<tr>';
            row.forEach(cell => {
                const cellValue = cell === null ? '<em>NULL</em>' : cell;
                html += `<td>${escapeHtml(String(cellValue))}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody>';

        html += '</table>';
        html += `<p class="result-count">Toplam ${result.values.length} satır döndürüldü.</p>`;

        return html;
    }

    // Editörü temizle
    function clearEditor() {
        if (state.codeMirror) {
            state.codeMirror.setValue('');
        }
        elements.outputContent.innerHTML = '<p class="placeholder-text">SQL komutunuzu çalıştırdığınızda sonuçlar burada görünecektir.</p>';
        elements.feedbackArea.style.display = 'none';
    }

    // Çıktı Göster
    function showOutput(message, type = 'info') {
        const typeClass = {
            'success': 'output-success',
            'error': 'output-error',
            'warning': 'output-warning',
            'info': 'output-info'
        }[type] || 'output-info';

        elements.outputContent.innerHTML = `<p class="${typeClass}">${escapeHtml(message)}</p>`;
    }

    // Cevabı Kontrol Et
    function checkAnswer() {
        const userSQL = state.codeMirror ? state.codeMirror.getValue().trim() : '';
        const exercise = state.exercises[state.currentExerciseIndex];

        if (!userSQL) {
            showFeedback('Lütfen bir SQL komutu girin.', 'warning');
            return;
        }

        const normalized = normalizeSQL(userSQL);
        const expectedNormalized = normalizeSQL(exercise.solution);

        if (normalized === expectedNormalized) {
            // Doğru cevap - soruyu tamamlanmış olarak işaretle
            state.completedExercises.add(exercise.id);
            state.currentExerciseCompleted = true;
            updateLockStatus();

            // Sonraki butonunu güncelle
            const isLastExercise = state.currentExerciseIndex === state.exercises.length - 1;
            elements.btnNext.disabled = isLastExercise;

            showFeedback('Doğru! SQL komutunuz beklenen çözümle eşleşiyor. Sonraki soruya geçebilirsiniz.', 'success');
        } else {
            // Alternatif kontrol: Komut türü ve ana yapı
            const similarity = calculateSimilarity(normalized, expectedNormalized);

            if (similarity > 0.8) {
                showFeedback('Cevabınız beklenen çözüme oldukça yakın. Küçük farklılıklar mevcut olabilir. Çözümü görerek karşılaştırabilirsiniz.', 'partial');
            } else {
                showFeedback('Cevabınız beklenen çözümden farklı. İpucu alabilir veya çözümü görebilirsiniz.', 'incorrect');
            }
        }
    }

    // SQL'i Normalize Et
    function normalizeSQL(sql) {
        return sql
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .replace(/\s*,\s*/g, ',')
            .replace(/\s*\(\s*/g, '(')
            .replace(/\s*\)\s*/g, ')')
            .replace(/\s*;\s*/g, ';')
            .replace(/;+$/, '')
            .trim();
    }

    // Benzerlik Hesapla (Basit Levenshtein tabanlı)
    function calculateSimilarity(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        const maxLen = Math.max(len1, len2);

        if (maxLen === 0) return 1;

        // Basit kelime bazlı karşılaştırma
        const words1 = str1.split(/\s+/);
        const words2 = str2.split(/\s+/);

        let matchCount = 0;
        words1.forEach(word => {
            if (words2.includes(word)) {
                matchCount++;
            }
        });

        return matchCount / Math.max(words1.length, words2.length);
    }

    // Geri Bildirim Göster
    function showFeedback(message, type = 'info') {
        const typeClass = {
            'success': 'feedback-success',
            'partial': 'feedback-partial',
            'incorrect': 'feedback-incorrect',
            'warning': 'feedback-warning',
            'info': 'feedback-info'
        }[type] || 'feedback-info';

        elements.feedbackContent.innerHTML = `<p class="${typeClass}">${escapeHtml(message)}</p>`;
        elements.feedbackArea.style.display = 'block';
    }

    // İpucu Göster
    function showHint() {
        const exercise = state.exercises[state.currentExerciseIndex];
        showFeedback(`İpucu: ${exercise.hint}`, 'info');
    }

    // Çözümü Göster
    function showSolution() {
        const exercise = state.exercises[state.currentExerciseIndex];
        const solutionHtml = `
            <div class="solution-box">
                <h4>Beklenen Çözüm:</h4>
                <pre class="solution-code">${escapeHtml(exercise.solution)}</pre>
            </div>
        `;
        elements.feedbackContent.innerHTML = solutionHtml;
        elements.feedbackArea.style.display = 'block';
    }

    // Önceki Alıştırma
    function previousExercise() {
        if (state.currentExerciseIndex > 0) {
            state.currentExerciseIndex--;
            renderCurrentExercise();
        }
    }

    // Sonraki Alıştırma
    function nextExercise() {
        if (state.currentExerciseIndex < state.exercises.length - 1) {
            state.currentExerciseIndex++;
            renderCurrentExercise();
        }
    }

    // HTML Kaçış
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        return div.innerHTML;
    }

    // Olay Dinleyicileri
    function attachEventListeners() {
        // Tema Değiştirici
        elements.themeToggle.addEventListener('click', toggleTheme);

        // Editör Tema Değiştirici
        elements.editorThemeToggle.addEventListener('click', toggleEditorTheme);

        // Navigasyon
        elements.navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            if (!section) return;
            link.addEventListener('click', function(e) {
                e.preventDefault();
                switchSection(section);
            });
        });

        // Başla Butonu
        elements.btnStart.addEventListener('click', function() {
            switchSection('kategoriler');
        });

        // Alıştırma Navigasyonu
        elements.btnPrev.addEventListener('click', previousExercise);
        elements.btnNext.addEventListener('click', nextExercise);

        // SQL Editör Butonları
        elements.btnRun.addEventListener('click', runSQL);
        elements.btnCheck.addEventListener('click', checkAnswer);
        elements.btnHint.addEventListener('click', showHint);
        elements.btnSolution.addEventListener('click', showSolution);
        elements.btnClear.addEventListener('click', clearEditor);

        if (elements.moduleButtons) {
            elements.moduleButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const title = this.getAttribute('data-title') || 'Atölye';
                    const src = this.getAttribute('data-src');
                    if (src) {
                        openModuleViewer(title, src);
                    }
                });
            });
        }
        if (elements.moduleClose) {
            elements.moduleClose.addEventListener('click', closeModuleViewer);
        }
        if (elements.moduleOverlay) {
            elements.moduleOverlay.addEventListener('click', function(e) {
                if (e.target === elements.moduleOverlay) {
                    closeModuleViewer();
                }
            });
        }
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && elements.moduleOverlay && elements.moduleOverlay.classList.contains('active')) {
                closeModuleViewer();
            }
        });
    }

    // Uygulamayı Başlat
    async function init() {
        loadTheme(); // Kayıtlı temayı yükle
        await initDatabase();
        initCodeMirror(); // CodeMirror editörünü başlat

        // Kaydedilmiş editör temasını uygula
        const savedEditorTheme = localStorage.getItem('sql-editor-theme');
        if (savedEditorTheme) {
            applyEditorTheme(savedEditorTheme);
        }

        renderCategories();
        attachEventListeners();
    }

    // Sayfa yüklendiğinde başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
