"use strict";

(function () {
  const config = window.moduleConfig || {};
  window.moduleConfig = undefined;

  if (!config || !Array.isArray(config.moduleQuestions) || config.moduleQuestions.length === 0) {
    console.error("module-engine: Geçerli bir moduleConfig.moduleQuestions bulunamadı.");
    return;
  }

  const moduleQuestions = config.moduleQuestions.map((question, index) => normalizeQuestion(question, index));
  const questionContexts = moduleQuestions.map(question => (question.contextHtml && question.contextHtml.trim()) || "");
  const moduleMeta = buildModuleMeta(config.moduleMeta, moduleQuestions.length);
  const STORAGE_KEY = config.storageKey || `moduleState_${moduleMeta.id || "module"}_v1`;
  const excludeQuantitative = config.excludeQuantitativeFromAnalysis !== false;
  const KATEX_RESOURCES = {
    css: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
    js: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js",
    autoRender: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"
  };
  let katexReadyPromise = null;

  let quiz = defaultQuizState();
  const keyboardState = {
    pending: null,
    listenerReady: false
  };

  function normalizeQuestion(rawQuestion, index) {
    const question = rawQuestion || {};
    const normalized = {
      number: Number.isFinite(question.number) ? question.number : index + 1,
      text: String(question.text || ""),
      options: Array.isArray(question.options)
        ? question.options
            .map((option, optionIndex) => normalizeOption(option, optionIndex))
            .sort((a, b) => a.label.localeCompare(b.label, "tr", { sensitivity: "base", numeric: true }))
        : [],
      correctLabel: question.correctLabel ? String(question.correctLabel).trim() : null,
      isQuantitative: Boolean(question.isQuantitative),
      contextHtml: (question.contextHtml && question.contextHtml.trim()) || "",
      getContextForQuestion: question.getContextForQuestion != null ? question.getContextForQuestion : null
    };

    // contextHtml yoksa text'ten extract et
    if (!normalized.contextHtml) {
      const { body, context } = splitQuestionContext(normalized.text);
      normalized.text = body;
      normalized.contextHtml = context;
    }

    if (!normalized.options.length) {
      normalized.options = [{ label: "A", text: "Seçenek bulunamadı" }];
    }

    if (!normalized.options.some(option => option.label === normalized.correctLabel)) {
      console.warn(`Soru ${normalized.number} için doğru şık bulunamadı. İlk seçenek doğru olarak işaretlendi.`);
      normalized.correctLabel = normalized.options[0].label;
    }
    if (normalized.correctLabel) {
      normalized.correctLabel = normalized.correctLabel.toUpperCase();
    }

    return normalized;
  }

  function normalizeOption(option, index) {
    if (!option || typeof option !== "object") {
      return { label: String.fromCharCode(65 + index), text: "Seçenek tanımsız" };
    }
    return {
      label: option.label ? String(option.label).trim().toUpperCase() : String.fromCharCode(65 + index),
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

  function formatQuestionBody(text) {
    if (text === null || text === undefined) return "";
    const trimmed = String(text).trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<")) return trimmed;
    const paragraphs = trimmed.split(/\n{2,}/).map(part => part.trim()).filter(Boolean);
    if (paragraphs.length <= 1) return `<p>${trimmed.replace(/\n/g, "<br>")}</p>`;
    return paragraphs.map(part => `<p>${part}</p>`).join("");
  }

  function splitQuestionContext(rawText) {
    if (rawText === null || rawText === undefined) return { body: "", context: "" };
    let remaining = String(rawText);
    const contextSegments = [];
    const contextRegex = /<(pre|table)([\s\S]*?)<\/\1>/gi;
    remaining = remaining.replace(contextRegex, match => {
      const cleaned = sanitizeContextSegment(match.trim());
      if (cleaned) contextSegments.push(cleaned);
      return "";
    });

    const contextHtml = contextSegments.join("\n").trim();

    remaining = remaining
      .replace(/(<br\s*\/?>\s*){2,}/gi, "<br><br>")
      .replace(/^\s*(<br\s*\/?>|\n)+/, "")
      .replace(/(<br\s*\/?>|\n)+\s*$/, "");

    return {
      body: remaining.trim(),
      context: contextHtml
    };
  }

  function sanitizeContextSegment(segment) {
    if (!segment) return "";
    let cleaned = segment;
    if (/<table/i.test(cleaned)) cleaned = stripOptionRowsFromTable(cleaned);
    if (/<pre/i.test(cleaned)) cleaned = stripOptionLinesFromPre(cleaned);
    const plain = stripHtmlTags(cleaned).trim();
    if (!plain) return "";
    return cleaned;
  }

  function stripOptionRowsFromTable(html) {
    return html.replace(/<table([\s\S]*?)<\/table>/gi, tableMatch => {
      let working = tableMatch;
      working = working.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi, row => {
        const text = stripHtmlTags(row).trim();
        if (/^[A-E][\)\.]/i.test(text)) return "";
        return row;
      });
      working = working.replace(/<tbody>\s*<\/tbody>/gi, "");
      working = working.replace(/<thead>\s*<\/thead>/gi, "");
      if (!/<td\b/i.test(working)) return "";
      if (!stripHtmlTags(working).trim()) return "";
      return working;
    });
  }

  function stripOptionLinesFromPre(html) {
    return html.replace(/<pre([^>]*)>([\s\S]*?)<\/pre>/gi, (match, attrs = "", body = "") => {
      const filtered = body
        .split("\n")
        .filter(line => !/^[\s]*[A-E][\)\.]/i.test(line.trim()))
        .join("\n");
      if (!filtered.trim()) return "";
      return `<pre${attrs}>${filtered}</pre>`;
    });
  }

  function stripHtmlTags(html) {
    return String(html || "").replace(/<\/?[^>]+>/g, " ").replace(/\s+/g, " ");
  }

  function defaultQuizState() {
    const length = moduleQuestions.length;
    return {
      currentQuestionIndex: 0,
      answers: new Array(length).fill(null),
      completed: false,
      order: createSequentialOrder(length),
      optionOrder: moduleQuestions.map(question => question.options.map(option => option.label)),
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

  function createSequentialOrder(length) {
    return Array.from({ length }, (_, idx) => idx);
  }

  function isSequentialOrder(order) {
    if (!Array.isArray(order)) return false;
    for (let i = 0; i < order.length; i += 1) {
      if (order[i] !== i) return false;
    }
    return true;
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
    if (!Array.isArray(order) || order.length !== labels.length) return labels;
    const unique = new Set(order);
    if (unique.size !== labels.length || !labels.every(label => unique.has(label))) return labels;
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

    if (!isValidOrder(quiz.order, length) || !isSequentialOrder(quiz.order)) {
      quiz.order = createSequentialOrder(length);
    }

    if (!quiz.optionOrder || quiz.optionOrder.length !== length) quiz.optionOrder = moduleQuestions.map(q => q.options.map(opt => opt.label));
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
    quiz.currentQuestionIndex = 0;
    quiz.activeQuestionGlobalIndex = null;
    quiz.activeOrderIndex = null;
    quiz.activeQuestionStart = null;
    saveState();
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
    const questionBodyHtml = formatQuestionBody(question.text);
    const { html: contextHtml, ownerIndex } = getContextForQuestion(questionIndex);
    keyboardState.pending = null;

    const contextSection = contextHtml
      ? `<aside class="question-context">
            <div class="context-title">${ownerIndex === null || ownerIndex === questionIndex ? "Referans Veriler" : `Referans Veriler (Soru ${moduleQuestions[ownerIndex].number})`}</div>
            <div class="context-body">${contextHtml}</div>
         </aside>`
      : "";

    const questionMain = `
      <div class="question-main">
        <div class="question-header">
          <p><strong>Soru ${orderIndex + 1}/${moduleQuestions.length} (No:${question.number}):</strong></p>
        </div>
        <div class="question-body">
          ${questionBodyHtml || "<p>Soru metni bulunamadı.</p>"}
        </div>
        <div class="quiz-options">
          ${optionOrder
            .map(label => {
              const option = question.options.find(opt => opt.label === label);
              const id = `q${question.number}_${option.label}`;
              return `
                <label for="${id}" data-label="${option.label}" data-question-index="${questionIndex}">
                  <input type="radio" id="${id}" name="q_${questionIndex}" value="${option.label}" ${selectedLabel === option.label ? "checked" : ""}>
                  <span><strong>${option.label})</strong> ${option.text}</span>
                </label>`;
            })
            .join("")}
        </div>
      </div>`;

    container.innerHTML = `
      <div class="quiz-question${contextHtml ? " has-context" : ""}">
        ${contextSection}
        ${questionMain}
      </div>`;

    container.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', e => handleAnswerSelection(questionIndex, orderIndex, e.target.value));
    });

    if (selectedLabel) showAnswerFeedback(questionIndex, selectedLabel);
    else updateQuizFeedback(null);

    applyLatexRendering(container);
    applyOptionStyling(questionIndex);
    startActiveQuestionTimer(true, questionIndex, orderIndex);
  }

  function getContextForQuestion(questionIndex) {
    if (questionIndex == null || questionIndex < 0 || questionIndex >= moduleQuestions.length) {
      return { html: "", ownerIndex: null };
    }

    const question = moduleQuestions[questionIndex];

    // Eğer soru başka bir soruya referans veriyorsa (getContextForQuestion: 3 gibi)
    if (question.getContextForQuestion != null) {
      const refQuestionNumber = question.getContextForQuestion;
      // Soru numarasını index'e çevir (soru numarası 1-indexed)
      const refIndex = moduleQuestions.findIndex(q => q.number === refQuestionNumber);
      if (refIndex >= 0 && refIndex < questionContexts.length) {
        const html = questionContexts[refIndex];
        if (html) return { html, ownerIndex: refIndex };
      }
    }

    // Referans yoksa kendi context'ini kullan
    const html = questionContexts[questionIndex];
    if (html) return { html, ownerIndex: questionIndex };

    // Hiç context yoksa boş döndür
    return { html: "", ownerIndex: null };
  }

  function ensureKatexResources() {
    if (typeof window.renderMathInElement === "function") {
      return Promise.resolve();
    }
    if (katexReadyPromise) {
      return katexReadyPromise;
    }
    katexReadyPromise = new Promise((resolve, reject) => {
      injectKatexAssets()
        .then(() => {
          if (typeof window.renderMathInElement === "function") {
            resolve();
          } else {
            reject(new Error("renderMathInElement bulunamadı"));
          }
        })
        .catch(error => {
          katexReadyPromise = null;
          reject(error);
        });
    });
    return katexReadyPromise;
  }

  function injectKatexAssets() {
    const tasks = [];
    if (!document.querySelector('link[data-katex="css"]')) {
      tasks.push(
        new Promise((resolve, reject) => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = KATEX_RESOURCES.css;
          link.dataset.katex = "css";
          link.onload = () => resolve(true);
          link.onerror = () => reject(new Error("KaTeX CSS yüklenemedi"));
          document.head.appendChild(link);
        })
      );
    }
    const loadMain = () =>
      new Promise((resolve, reject) => {
        if (window.katex) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = KATEX_RESOURCES.js;
        script.defer = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error("KaTeX çekirdeği yüklenemedi"));
        document.head.appendChild(script);
      });

    const loadAutoRender = () =>
      new Promise((resolve, reject) => {
        if (typeof window.renderMathInElement === "function") {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = KATEX_RESOURCES.autoRender;
        script.defer = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error("KaTeX auto-render yüklenemedi"));
        document.head.appendChild(script);
      });

    return Promise.all(tasks)
      .catch(error => {
        console.warn("KaTeX stil dosyası yüklenirken hata oluştu:", error);
      })
      .then(() => loadMain())
      .then(() => loadAutoRender());
  }

  function applyLatexRendering(rootElement) {
    if (!rootElement) return;
    ensureKatexResources()
      .then(() => {
        if (typeof window.renderMathInElement !== "function") return;
        try {
          window.renderMathInElement(rootElement, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "\\[", right: "\\]", display: true },
              { left: "$", right: "$", display: false },
              { left: "\\(", right: "\\)", display: false }
            ],
            throwOnError: false,
            trust: true
          });
        } catch (error) {
          console.warn("KaTeX render hatası:", error);
        }
      })
      .catch(error => {
        console.warn("KaTeX yüklenemedi:", error);
      });
  }

  function handleAnswerSelection(questionIndex, orderIndex, selectedLabel) {
    quiz.answers[questionIndex] = selectedLabel;
    keyboardState.pending = null;
    const input = document.querySelector(`#quizQuestionContainer [name="q_${questionIndex}"][value="${selectedLabel}"]`);
    if (input instanceof HTMLInputElement) {
      input.checked = true;
    }
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
    if (!question) return;
    const selected = quiz.answers[questionIndex];
    const pendingLabel = keyboardState.pending && keyboardState.pending.questionIndex === questionIndex
      ? keyboardState.pending.label
      : null;

    document.querySelectorAll(`#quizQuestionContainer [name="q_${questionIndex}"]`).forEach(input => {
      const label = input.closest('label');
      if (!label) return;
      label.classList.remove("option-correct", "option-incorrect", "option-pending");
      if (selected) {
      if (input.value === question.correctLabel) label.classList.add("option-correct");
      else if (input.value === selected) label.classList.add("option-incorrect");
      }
      if (pendingLabel && input.value === pendingLabel) {
        label.classList.add("option-pending");
      }
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
    keyboardState.pending = null;
    quiz.currentQuestionIndex = newIndex;
    saveState();
    renderQuestion(newIndex);
    updateQuizNavigation();
  }

  function setPendingSelection(questionIndex, label) {
    if (!label || typeof questionIndex !== "number") return;
    keyboardState.pending = { questionIndex, label };
    applyOptionStyling(questionIndex);
  }

  function clearPendingSelection(questionIndex) {
    if (keyboardState.pending && keyboardState.pending.questionIndex === questionIndex) {
      keyboardState.pending = null;
      applyOptionStyling(questionIndex);
    } else if (!keyboardState.pending) {
      applyOptionStyling(questionIndex);
    }
  }

  function commitPendingSelection() {
    if (!keyboardState.pending) return;
    const { questionIndex, label } = keyboardState.pending;
    const orderIndex = quiz.currentQuestionIndex;
    handleAnswerSelection(questionIndex, orderIndex, label);
    keyboardState.pending = null;
    applyOptionStyling(questionIndex);
  }

  function getActiveQuestionIndices() {
    const orderIndex = quiz.currentQuestionIndex;
    const questionIndex = quiz.order[orderIndex];
    return { orderIndex, questionIndex };
  }

  function handleDigitKey(key) {
    const digit = Number.parseInt(key, 10);
    if (!Number.isFinite(digit)) return;
    const { questionIndex } = getActiveQuestionIndices();
    const optionOrder = quiz.optionOrder[questionIndex];
    const optionIndex = digit - 1;
    if (optionIndex < 0 || optionIndex >= optionOrder.length) return;
    setPendingSelection(questionIndex, optionOrder[optionIndex]);
  }

  function setupKeyboardShortcuts() {
    if (keyboardState.listenerReady) return;
    keyboardState.listenerReady = true;

    document.addEventListener("keydown", event => {
      const quizSection = document.getElementById("module-quiz");
      if (!quizSection?.classList.contains("active")) return;

      const target = event.target;
      if (target && target.tagName) {
        const tagName = target.tagName.toUpperCase();
        if (["INPUT", "TEXTAREA", "SELECT"].includes(tagName)) return;
        if (target.isContentEditable) return;
      }

      const { questionIndex } = getActiveQuestionIndices();

      switch (event.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
          event.preventDefault();
          handleDigitKey(event.key);
          break;
        case "Enter":
          event.preventDefault();
          commitPendingSelection();
          break;
        case "Escape":
          event.preventDefault();
          clearPendingSelection(questionIndex);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          navigateQuestion(Math.max(quiz.currentQuestionIndex - 1, 0));
          break;
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          navigateQuestion(Math.min(quiz.currentQuestionIndex + 1, moduleQuestions.length - 1));
          break;
        default:
          break;
      }
    });
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

  function updateProgressBar(scores) {
    const { total, answeredCount } = scores ?? getScores();
    const percent = total ? Math.round((answeredCount / total) * 100) : 0;
    const fill = document.getElementById("quizProgressFill");
    const label = document.getElementById("quizProgressLabel");
    if (fill) fill.style.width = `${percent}%`;
    if (label) label.textContent = `${percent}% tamamlandı (${answeredCount}/${total})`;
  }

  function updateScoreBoard() {
    const scores = getScores();
    const { correctCount, total, answeredCount, accuracy } = scores;
    document.getElementById("moduleCorrect").textContent = correctCount;
    document.getElementById("moduleTotal").textContent = total;
    document.getElementById("moduleAnswered").textContent = answeredCount;
    document.getElementById("moduleAccuracy").textContent = `${accuracy}%`;
    updateProgressBar(scores);
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
    setupKeyboardShortcuts();
    renderQuestion(quiz.currentQuestionIndex);
    updateQuizNavigation();
    updateScoreBoard();
    updateChallenges();
    showSection("home");
    window.addEventListener("beforeunload", finalizeActiveQuestionTime);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
