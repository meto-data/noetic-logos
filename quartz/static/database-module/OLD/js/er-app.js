// ER Diyagramı Test Uygulaması
(function() {
    'use strict';

    // Uygulama Durumu
    const state = {
        currentSection: 'bilgi',
        currentTheme: 'light',
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        answers: [],
        answered: false
    };

    // DOM Elemanları (init'te doldurulacak)
    let elements = {};

    // Tema Yönetimi
    function loadTheme() {
        const savedTheme = localStorage.getItem('sql-learning-theme');
        if (savedTheme) {
            state.currentTheme = savedTheme;
            applyTheme(savedTheme);
        }
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            elements.themeIcon.innerHTML = '&#9788;';
            elements.themeText.textContent = 'Açık Tema';
        } else {
            document.documentElement.removeAttribute('data-theme');
            elements.themeIcon.innerHTML = '&#9790;';
            elements.themeText.textContent = 'Koyu Tema';
        }
        state.currentTheme = theme;
    }

    function toggleTheme() {
        const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('sql-learning-theme', newTheme);
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

    // Soruları Karıştır
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Testi Başlat
    function startTest() {
        state.questions = shuffleArray(ER_QUESTIONS);
        state.currentQuestionIndex = 0;
        state.score = 0;
        state.answers = [];
        state.answered = false;

        switchSection('test');
        renderQuestion();
    }

    // Soruyu Göster
    function renderQuestion() {
        const question = state.questions[state.currentQuestionIndex];
        const totalQuestions = state.questions.length;

        // Sayaç ve ilerleme çubuğu
        elements.questionCounter.textContent = `Soru ${state.currentQuestionIndex + 1} / ${totalQuestions}`;
        const progressPercent = ((state.currentQuestionIndex) / totalQuestions) * 100;
        elements.progressFill.style.width = `${progressPercent}%`;

        // Sembol
        elements.questionSymbol.innerHTML = question.symbol;

        // Soru metni
        elements.questionText.textContent = question.question;

        // Seçenekleri karıştır (ama doğru cevabın indeksini takip et)
        const optionsWithIndex = question.options.map((opt, idx) => ({
            text: opt,
            originalIndex: idx
        }));
        const shuffledOptions = shuffleArray(optionsWithIndex);

        // Seçenekleri göster
        let optionsHtml = '';
        shuffledOptions.forEach((option, idx) => {
            optionsHtml += `
                <button class="answer-option" data-index="${option.originalIndex}">
                    ${String.fromCharCode(65 + idx)}) ${option.text}
                </button>
            `;
        });
        elements.answerOptions.innerHTML = optionsHtml;

        // Olay dinleyicilerini ekle
        document.querySelectorAll('.answer-option').forEach(btn => {
            btn.addEventListener('click', selectAnswer);
        });

        // Geri bildirimi gizle
        elements.testFeedback.style.display = 'none';
        elements.btnNextQuestion.disabled = true;
        state.answered = false;
    }

    // Cevap Seç
    function selectAnswer(e) {
        if (state.answered) return;

        state.answered = true;
        const selectedIndex = parseInt(e.target.getAttribute('data-index'));
        const question = state.questions[state.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;

        // Tüm butonları devre dışı bırak
        document.querySelectorAll('.answer-option').forEach(btn => {
            btn.disabled = true;
            const btnIndex = parseInt(btn.getAttribute('data-index'));

            if (btnIndex === question.correct) {
                btn.classList.add('correct');
            } else if (btnIndex === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Sonucu kaydet
        state.answers.push({
            questionId: question.id,
            question: question.question,
            symbol: question.symbol,
            selectedOption: question.options[selectedIndex],
            correctOption: question.options[question.correct],
            isCorrect: isCorrect,
            explanation: question.explanation
        });

        if (isCorrect) {
            state.score++;
            showFeedback(true, 'Doğru!', question.explanation);
        } else {
            showFeedback(false, 'Yanlış!', question.explanation);
        }

        // Sonraki soru butonunu aktif et
        elements.btnNextQuestion.disabled = false;

        // Son soru ise buton metnini değiştir
        if (state.currentQuestionIndex === state.questions.length - 1) {
            elements.btnNextQuestion.textContent = 'Sonuçları Gör';
        } else {
            elements.btnNextQuestion.textContent = 'Sonraki Soru';
        }
    }

    // Geri Bildirim Göster
    function showFeedback(isCorrect, title, explanation) {
        elements.testFeedback.className = `test-feedback ${isCorrect ? 'correct' : 'wrong'}`;
        elements.testFeedback.innerHTML = `
            <p><strong>${title}</strong></p>
            <p>${explanation}</p>
        `;
        elements.testFeedback.style.display = 'block';
    }

    // Sonraki Soru
    function nextQuestion() {
        if (state.currentQuestionIndex < state.questions.length - 1) {
            state.currentQuestionIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    }

    // Sonuçları Göster
    function showResults() {
        switchSection('sonuc');

        const totalQuestions = state.questions.length;
        const percentage = Math.round((state.score / totalQuestions) * 100);

        // Skor gösterimi
        elements.finalScore.textContent = state.score;
        elements.scorePercentage.textContent = `%${percentage}`;

        // İlerleme çubuğunu tamamla
        elements.progressFill.style.width = '100%';

        // Sonuç mesajı
        let messageClass = '';
        let messageText = '';

        if (percentage >= 90) {
            messageClass = 'excellent';
            messageText = 'Mükemmel! ER diyagramlarını çok iyi biliyorsunuz.';
        } else if (percentage >= 70) {
            messageClass = 'good';
            messageText = 'İyi! ER diyagramları konusunda iyi bir anlayışınız var.';
        } else if (percentage >= 50) {
            messageClass = 'average';
            messageText = 'Orta. Bazı konuları tekrar gözden geçirmeniz faydalı olacaktır.';
        } else {
            messageClass = 'poor';
            messageText = 'Daha fazla çalışmanız gerekiyor. Bilgi bölümünü tekrar inceleyin.';
        }

        elements.resultMessage.className = `result-message ${messageClass}`;
        elements.resultMessage.textContent = messageText;

        // Yanlış cevapları listele
        const wrongAnswers = state.answers.filter(a => !a.isCorrect);

        if (wrongAnswers.length > 0) {
            let wrongHtml = '<h3>Yanlış Cevaplarınız</h3>';
            wrongAnswers.forEach((answer, idx) => {
                wrongHtml += `
                    <div class="wrong-answer-item">
                        <div class="question-label">Soru ${idx + 1}: ${answer.question}</div>
                        <div class="your-answer">Sizin cevabınız: ${answer.selectedOption}</div>
                        <div class="correct-answer-display">Doğru cevap: ${answer.correctOption}</div>
                    </div>
                `;
            });
            elements.wrongAnswers.innerHTML = wrongHtml;
        } else {
            elements.wrongAnswers.innerHTML = '<p style="color: var(--success-text); font-weight: bold;">Tebrikler! Tüm soruları doğru cevapladınız!</p>';
        }
    }

    // Testi Tekrarla
    function retryTest() {
        startTest();
    }

    // Bilgiye Dön
    function backToInfo() {
        switchSection('bilgi');
    }

    // Olay Dinleyicileri
    function attachEventListeners() {
        // Tema değiştirici
        elements.themeToggle.addEventListener('click', toggleTheme);

        // Navigasyon
        elements.navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            if (!section) return;
            link.addEventListener('click', function(e) {
                e.preventDefault();
                switchSection(section);
            });
        });

        // Teste başla
        elements.btnStartTest.addEventListener('click', startTest);

        // Sonraki soru
        elements.btnNextQuestion.addEventListener('click', nextQuestion);

        // Tekrarla
        elements.btnRetry.addEventListener('click', retryTest);

        // Bilgiye dön
        elements.btnBackInfo.addEventListener('click', backToInfo);
    }

    // DOM Elemanlarını Yükle
    function loadElements() {
        elements = {
            navLinks: document.querySelectorAll('.nav-link'),
            sections: document.querySelectorAll('.content-section'),
            themeToggle: document.getElementById('theme-toggle'),
            themeIcon: document.getElementById('theme-icon'),
            themeText: document.getElementById('theme-text'),
            btnStartTest: document.getElementById('btn-start-test'),
            questionCounter: document.getElementById('question-counter'),
            progressFill: document.getElementById('progress-fill'),
            questionSymbol: document.getElementById('question-symbol'),
            questionText: document.getElementById('question-text'),
            answerOptions: document.getElementById('answer-options'),
            testFeedback: document.getElementById('test-feedback'),
            btnNextQuestion: document.getElementById('btn-next-question'),
            finalScore: document.getElementById('final-score'),
            scorePercentage: document.getElementById('score-percentage'),
            resultMessage: document.getElementById('result-message'),
            wrongAnswers: document.getElementById('wrong-answers'),
            btnRetry: document.getElementById('btn-retry'),
            btnBackInfo: document.getElementById('btn-back-info')
        };
    }

    // Uygulamayı Başlat
    function init() {
        loadElements();
        loadTheme();
        attachEventListeners();
    }

    // Sayfa yüklendiğinde başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
