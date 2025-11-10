"use strict";

(function () {
  const config = window.moduleConfig || {};
  window.moduleConfig = undefined;

  if (!config || !Array.isArray(config.moduleQuestions) || config.moduleQuestions.length === 0) {
    console.error("module-engine: Geçerli bir moduleConfig.moduleQuestions bulunamadı.");
    return;
  }

  const moduleQuestions = config.moduleQuestions.map((question, index) => normalizeQuestion(question, index));
  const moduleMeta = buildModuleMeta(config.moduleMeta, moduleQuestions.length);
  const STORAGE_KEY = config.storageKey || `moduleState_${moduleMeta.id || "module"}_v1`;
  const excludeQuantitative = config.excludeQuantitativeFromAnalysis !== false;

  let quiz = defaultQuizState();

  function normalizeQuestion(rawQuestion, index) {
    const question = rawQuestion || {};
    const normalized = {
      number: Number.isFinite(question.number) ? question.number : index + 1,
      text: String(question.text || ""),
      options: Array.isArray(question.options) ? question.options.map((option, optionIndex) => normalizeOption(option, optionIndex)) : [],
      correctLabel: question.correctLabel ? String(question.correctLabel).trim() : null,
      isQuantitative: Boolean(question.isQuantitative)
    };

    if (!normalized.options.length) {
      normalized.options = [{ label: "A", text: "Seçenek bulunamadı" }];
    }

    if (!normalized.options.some(option => option.label === normalized.correctLabel)) {
      console.warn(`Soru ${normalized.number} için doğru şık bulunamadı. İlk seçenek doğru olarak işaretlendi.`);
      normalized.correctLabel = normalized.options[0].label;
    }

    return normalized;
  }

  function normalizeOption(option, index) {
    if (!option || typeof option !== "object") {
      return { label: String.fromCharCode(65 + index), text: "Seçenek tanımsız" };
    }
    return {
      label: option.label ? String(option.label).trim() : String.fromCharCode(65 + index),
      text: option.text ? String(option.text) : "Seçenek"
    };
  }

  function buildModuleMeta(meta, questionCount) {
    const details = (meta && meta.testDetails) || {};
    return {
      id: meta && meta.id ? meta.id : "module",
      title: meta && meta.title ? meta.title : "Öğrenme Modülü",
      description: meta && meta.description ? meta.description : "",
      focusAreas: Array.isArray(meta && meta.focusAreas) ? meta.focusAreas : [],
      learningObjectives: Array.isArray(meta && meta.learningObjectives) ? meta.learningObjectives : [],
      additionalNotes: meta && meta.additionalNotes ? meta.additionalNotes : "",
      testDetails: {
        questionCount,
        format: details.format || "Çoktan seçmeli, tek doğru şık",
        storageHint: details.storageHint || "Cevaplarınız tarayıcıda saklanır ve istediğiniz zaman devam edebilirsiniz.",
        extra: details.extra || []
      }
    };
  }

  function defaultQuizState() {
    const length = moduleQuestions.length;
    return {
      currentQuestionIndex: 0,
      answers: new Array(length).fill(null),
      completed: false,
      order: shuffleArray(Array.from({ length }, (_, idx) => idx)),
      optionOrder: moduleQuestions.map(question => shuffleArray(question.options.map(option => option.label))),
      questionTimes: new Array(length).fill(0),
      longQuestionIndices: [],
      incorrectQuestionIndices: [],
      activeQuestionGlobalIndex: null,
      activeOrderIndex: null,
      activeQuestionStart: null
    };
  }

  function shuffleArray(source) {
    const array = source.slice();
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function isValidOrder(order, length) {
    if (!Array.isArray(order) || order.length !== length) return false;
    const seen = new Set();
    for (const value of order) {
      if (!Number.isInteger(value) || value < 0 || value >= length || seen.has(value)) return false;
      seen.add(value);
    }
    return true;
  }

  function normalizeOptionOrder(order, questionIndex) {
    const question = moduleQuestions[questionIndex];
    const labels = question.options.map(option => option.label);
    if (!Array.isArray(order) || order.length !== labels.length) return shuffleArray(labels);
    const unique = new Set(order);
    if (unique.size !== labels.length || !labels.every(label => unique.has(label))) return shuffleArray(labels);
    return order.slice();
  }

  function normalizeIndexList(list) {
    if (!Array.isArray(list)) return [];
    const length = moduleQuestions.length;
    return Array.from(new Set(list.filter(index => Number.isInteger(index) && index >= 0 && index < length))).sort((a, b) => a - b);
  }

  function normalizeState() {
    const length = moduleQuestions.length;
    if (!quiz.answers || quiz.answers.length !== length) quiz.answers = new Array(length).fill(null);
    if (!quiz.questionTimes || quiz.questionTimes.length !== length) quiz.questionTimes = new Array(length).fill(0);
    if (!isValidOrder(quiz.order, length)) quiz.order = shuffleArray(Array.from({ length }, (_, idx) => idx));
    if (!quiz.optionOrder || quiz.optionOrder.length !== length) quiz.optionOrder = moduleQuestions.map(q => shuffleArray(q.options.map(opt => opt.label)));
    else quiz.optionOrder = quiz.optionOrder.map((order, idx) => normalizeOptionOrder(order, idx));
    quiz.longQuestionIndices = normalizeIndexList(quiz.longQuestionIndices);
    quiz.incorrectQuestionIndices = normalizeIndexList(quiz.incorrectQuestionIndices);
    if (!Number.isInteger(quiz.currentQuestionIndex) || quiz.currentQuestionIndex < 0 || quiz.currentQuestionIndex >= length) quiz.currentQuestionIndex = 0;
  }

  function loadState() {
    quiz = defaultQuizState();
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.quiz) {
        Object.assign(quiz, saved.quiz);
      }
    } catch (e) {
      console.warn("Could not load state.", e);
    }
    normalizeState();
    recalculateLongQuestions(true);
  }
  
  function saveState() {
    const stateToSave = { quiz };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  }

  function finalizeActiveQuestionTime() {
    normalizeState();
    if (quiz.activeQuestionGlobalIndex !== null && quiz.activeQuestionStart !== null) {
      const elapsed = Date.now() - quiz.activeQuestionStart;
      if (elapsed > 0) quiz.questionTimes[quiz.activeQuestionGlobalIndex] += elapsed;
    }
    quiz.activeQuestionGlobalIndex = null;
    quiz.activeOrderIndex = null;
    quiz.activeQuestionStart = null;
    recalculateLongQuestions(true);
    saveState();
    updateChallenges();
  }

  function startActiveQuestionTimer(force = false, questionIndexOverride = null, orderIndexOverride = null) {
    if (!document.getElementById("module-quiz")?.classList.contains("active")) return;
    normalizeState();
    const orderIndex = orderIndexOverride ?? quiz.currentQuestionIndex;
    const questionIndex = questionIndexOverride ?? quiz.order[orderIndex];
    if (questionIndex === null || questionIndex === undefined) return;
    quiz.activeOrderIndex = orderIndex;
    quiz.activeQuestionGlobalIndex = questionIndex;
    if (force || quiz.activeQuestionStart === null) {
      quiz.activeQuestionStart = Date.now();
      saveState();
    }
  }

  function recalculateLongQuestions(suppressUpdate = false) {
    normalizeState();
    const eligible = quiz.questionTimes
      .map((time, idx) => ({ time, idx }))
      .filter(item => item.time > 0 && !(excludeQuantitative && moduleQuestions[item.idx].isQuantitative));

    if (!eligible.length) {
      quiz.longQuestionIndices = [];
    } else {
      const total = eligible.reduce((sum, item) => sum + item.time, 0);
      const average = total / eligible.length;
      const threshold = average * 2;
      quiz.longQuestionIndices = eligible.filter(item => item.time > threshold).map(item => item.idx).sort((a,b) => a-b);
    }
    if (!suppressUpdate) updateChallenges();
  }

  function setupNavigation() {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = e.target.dataset.target;
        if (!target) return;
        if (document.querySelector(".section.active")?.id === "module-quiz") finalizeActiveQuestionTime();
        showSection(target);
        setActiveLink(e.target);
        if (target === "module-quiz") startActiveQuestionTimer(true);
      });
    });
  }

  function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(s => s.classList.toggle("active", s.id === sectionId));
  }

  function setActiveLink(activeLink) {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.toggle("active", l === activeLink));
  }

  function renderModuleOverview() {
    const container = document.getElementById("moduleOverviewContent");
    if (!container) return;
    const { title, description, focusAreas, learningObjectives, testDetails, additionalNotes } = moduleMeta;
    container.innerHTML = `
        <div class="module-highlight"><p><strong>${title}</strong>: ${description}</p></div>
        <div class="overview-grid">
            <div class="overview-card"><h3>Odak Konuları</h3><ul>${focusAreas.map(i => `<li>${i}</li>`).join("")}</ul></div>
            <div class="overview-card"><h3>Öğrenme Kazanımları</h3><ul>${learningObjectives.map(i => `<li>${i}</li>`).join("")}</ul></div>
            <div class="overview-card"><h3>Test Bilgileri</h3>
                <p>Toplam Soru: <strong>${testDetails.questionCount}</strong></p>
                <p>Format: ${testDetails.format}</p>
                <p>${testDetails.storageHint}</p>
                ${(testDetails.extra || []).map(i => `<p>${i}</p>`).join("")}
            </div>
        </div>
        ${additionalNotes ? `<p style="margin-top:18px;">${additionalNotes}</p>` : ""}`;
  }
  
  function renderQuestion(orderIndex) {
    normalizeState();
    const questionIndex = quiz.order[orderIndex];
    const question = moduleQuestions[questionIndex];
    const container = document.getElementById("quizQuestionContainer");
    if (!question || !container) return;
    
    const optionOrder = quiz.optionOrder[questionIndex];
    const selectedLabel = quiz.answers[questionIndex];

    container.innerHTML = `
            <div class="quiz-question">
                <p><strong>Soru ${orderIndex + 1}/${moduleQuestions.length} (No:${question.number}):</strong> ${question.text}</p>
                <div class="quiz-options">${optionOrder.map(label => {
                    const option = question.options.find(opt => opt.label === label);
                    const id = `q${question.number}_${option.label}`;
                    return `
                        <label for="${id}" data-label="${option.label}">
                            <input type="radio" id="${id}" name="q_${questionIndex}" value="${option.label}" ${selectedLabel === option.label ? "checked" : ""}>
                            <span><strong>${option.label})</strong> ${option.text}</span>
                        </label>`;
                }).join("")}</div>
            </div>`;

    container.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', e => handleAnswerSelection(questionIndex, orderIndex, e.target.value));
    });

    if (selectedLabel) showAnswerFeedback(questionIndex, selectedLabel);
    else updateQuizFeedback(null);
    
    applyOptionStyling(questionIndex);
    startActiveQuestionTimer(true, questionIndex, orderIndex);
  }

  function handleAnswerSelection(questionIndex, orderIndex, selectedLabel) {
    quiz.answers[questionIndex] = selectedLabel;
    const isCorrect = moduleQuestions[questionIndex].correctLabel === selectedLabel;
    updateIncorrectQuestion(questionIndex, !isCorrect);
    saveState();
    showAnswerFeedback(questionIndex, selectedLabel);
    applyOptionStyling(questionIndex);
    updateScoreBoard();
    updateChallenges();
  }

  function updateIncorrectQuestion(questionIndex, shouldMark) {
    const set = new Set(quiz.incorrectQuestionIndices);
    const question = moduleQuestions[questionIndex];
    if (excludeQuantitative && question.isQuantitative) shouldMark = false;
    if (shouldMark) set.add(questionIndex);
    else set.delete(questionIndex);
    quiz.incorrectQuestionIndices = Array.from(set).sort((a, b) => a - b);
  }

  function showAnswerFeedback(questionIndex, selectedLabel) {
    const question = moduleQuestions[questionIndex];
    if (!question) return;
    const correct = question.correctLabel === selectedLabel;
    const correctOption = question.options.find(o => o.label === question.correctLabel);
    const message = correct ? "Doğru! 🎉" : `Yanlış. Doğru cevap: ${correctOption.label}) ${correctOption.text}`;
    updateQuizFeedback({ type: correct ? "correct" : "incorrect", message });
  }

  function updateQuizFeedback(status) {
    const feedbackBox = document.getElementById("quizFeedback");
    if (!feedbackBox) return;
    feedbackBox.className = "feedback";
    if (!status) {
      feedbackBox.textContent = "";
      return;
    }
    feedbackBox.textContent = status.message;
    feedbackBox.classList.add("show", status.type);
  }

  function applyOptionStyling(questionIndex) {
    const question = moduleQuestions[questionIndex];
    const selected = quiz.answers[questionIndex];
    if (!question || !selected) return;
    document.querySelectorAll(`#quizQuestionContainer [name="q_${questionIndex}"]`).forEach(input => {
      const label = input.closest('label');
      label.classList.remove("option-correct", "option-incorrect");
      if (input.value === question.correctLabel) label.classList.add("option-correct");
      else if (input.value === selected) label.classList.add("option-incorrect");
    });
  }

  function updateQuizNavigation() {
    const prevBtn = document.getElementById("prevQuestionBtn");
    const nextBtn = document.getElementById("nextQuestionBtn");
    if(prevBtn) prevBtn.disabled = quiz.currentQuestionIndex === 0;
    if(nextBtn) nextBtn.disabled = quiz.currentQuestionIndex >= moduleQuestions.length - 1;
  }

  function navigateQuestion(newIndex) {
    finalizeActiveQuestionTime();
    if (newIndex < 0 || newIndex >= moduleQuestions.length) return;
    quiz.currentQuestionIndex = newIndex;
    saveState();
    renderQuestion(newIndex);
    updateQuizNavigation();
  }
  
  function formatDuration(ms) {
    const secs = Math.round(ms / 1000);
    if (secs < 60) return `${secs} sn`;
    return `${Math.floor(secs / 60)} dk ${secs % 60} sn`;
  }

  function updateChallenges() {
    const listEl = document.getElementById("challengeList");
    if (!listEl) return;
    const combined = Array.from(new Set([...quiz.longQuestionIndices, ...quiz.incorrectQuestionIndices]))
      .filter(idx => !(excludeQuantitative && moduleQuestions[idx].isQuantitative)).sort((a,b)=>a-b);
    if (!combined.length) {
      listEl.innerHTML = "<li>Testi çözdükten sonra burada listelenir.</li>";
      return;
    }
    listEl.innerHTML = combined.map(idx => {
      const q = moduleQuestions[idx];
      const reasons = [];
      if(quiz.incorrectQuestionIndices.includes(idx)) reasons.push("Yanlış");
      if(quiz.longQuestionIndices.includes(idx)) reasons.push("Uzun Süre");
      return `<li><strong>Soru ${q.number}</strong> (${reasons.join('/')}) - Süre: ${formatDuration(quiz.questionTimes[idx]||0)}</li>`;
    }).join("");
  }
  
  function retryChallenges() {
    finalizeActiveQuestionTime();
    const challengeIndices = Array.from(new Set([...quiz.longQuestionIndices, ...quiz.incorrectQuestionIndices]))
      .filter(idx => !(excludeQuantitative && moduleQuestions[idx].isQuantitative));
    if(!challengeIndices.length) return alert("Tekrar edilecek soru bulunmuyor.");

    quiz.answers = quiz.answers.map((ans, idx) => challengeIndices.includes(idx) ? null : ans);
    quiz.questionTimes = quiz.questionTimes.map((t, idx) => challengeIndices.includes(idx) ? 0 : t);
    quiz.order = [...challengeIndices, ...quiz.order.filter(idx => !challengeIndices.includes(idx))];
    quiz.currentQuestionIndex = 0;
    quiz.completed = false;
    
    saveState();
    showSection('module-quiz');
    setActiveLink(document.querySelector('.nav-link[data-target="module-quiz"]'));
    renderQuestion(0);
    updateQuizNavigation();
    updateScoreBoard();
    updateChallenges();
  }

  function submitQuiz() {
    finalizeActiveQuestionTime();
    quiz.completed = true;
    saveState();
    updateScoreBoard();
    
    const { correctCount, total, answeredCount } = getScores();
    const summaryBox = document.getElementById("quizSummary");
    const feedbackBox = document.getElementById("quizFeedback");
    
    if(summaryBox) summaryBox.innerHTML = `<h3>Test Sonucu</h3><p>${total} sorudan ${correctCount} doğru.</p><p>Cevaplanan: ${answeredCount}</p>`;
    
    let msg, type;
    if (answeredCount < total) {
      msg = "Test tamamlandı ancak cevaplanmamış sorular var.";
      type = "incorrect";
    } else if (correctCount === total) {
      msg = "Mükemmel! Tüm soruları doğru cevapladınız.";
      type = "correct";
    } else {
      msg = "Test tamamlandı. Skorunuzu İlerleme sekmesinde görebilirsiniz.";
      type = "correct";
    }
    updateQuizFeedback({ message: msg, type: type });
    updateChallenges();
  }
  
  function getScores() {
    const total = moduleQuestions.length;
    const answeredCount = quiz.answers.filter(a => a !== null).length;
    const correctCount = quiz.answers.reduce((acc, ans, idx) => acc + (ans === moduleQuestions[idx].correctLabel ? 1 : 0), 0);
    return { total, answeredCount, correctCount, accuracy: total > 0 ? (correctCount / total * 100).toFixed(0) : 0 };
  }

  function updateScoreBoard() {
    const { correctCount, total, answeredCount, accuracy } = getScores();
    document.getElementById("moduleCorrect").textContent = correctCount;
    document.getElementById("moduleTotal").textContent = total;
    document.getElementById("moduleAnswered").textContent = answeredCount;
    document.getElementById("moduleAccuracy").textContent = `${accuracy}%`;
  }

  function resetQuiz(isFullReset = false) {
    const msg = isFullReset ? "Tüm ilerlemenizi ve cevapları silmek istiyor musunuz?" : "Mevcut test cevaplarını sıfırlamak istiyor musunuz?";
    if (!confirm(msg)) return;
    
    finalizeActiveQuestionTime();
    if (isFullReset) localStorage.removeItem(STORAGE_KEY);
    
    quiz = defaultQuizState();
    saveState();
    
    renderQuestion(0);
    updateQuizNavigation();
    updateScoreBoard();
    updateChallenges();
    updateQuizFeedback(null);
    const summaryBox = document.getElementById("quizSummary");
    if(summaryBox) summaryBox.innerHTML = "";
  }

  function initControls() {
    document.getElementById("prevQuestionBtn")?.addEventListener("click", () => navigateQuestion(quiz.currentQuestionIndex - 1));
    document.getElementById("nextQuestionBtn")?.addEventListener("click", () => navigateQuestion(quiz.currentQuestionIndex + 1));
    document.getElementById("submitQuizBtn")?.addEventListener("click", submitQuiz);
    document.getElementById("resetQuizBtn")?.addEventListener("click", () => resetQuiz(false));
    document.getElementById("resetProgressBtn")?.addEventListener("click", () => resetQuiz(true));
    document.getElementById("retryChallengesBtn")?.addEventListener("click", retryChallenges);
  }

  function init() {
    loadState();
    setupNavigation();
    renderModuleOverview();
    initControls();
    renderQuestion(quiz.currentQuestionIndex);
    updateQuizNavigation();
    updateScoreBoard();
    updateChallenges();
    showSection("home");
    window.addEventListener("beforeunload", finalizeActiveQuestionTime);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
