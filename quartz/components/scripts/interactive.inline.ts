// ----------------------------------------------------
// Interactive Widgets Client Script (Quiz & Puzzle)
// ----------------------------------------------------

interface QuizOption {
  key: string
  text: string
  isCorrect?: boolean
  explanation?: string
}

interface QuizQuestion {
  id: number
  question: string
  options: QuizOption[]
}

interface QuizData {
  title?: string
  description?: string
  questions: QuizQuestion[]
}

interface PuzzleWord {
  word: string
  direction?: string
  start?: [number, number]
  end?: [number, number]
  path?: [number, number][]
  clue?: string
}

interface PuzzleData {
  title?: string
  dimensions: { rows: number; cols: number }
  grid: string[][]
  words: PuzzleWord[]
}

function decodePayload<T>(base64: string): T | null {
  try {
    const jsonStr = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    )
    return JSON.parse(jsonStr)
  } catch (e) {
    try {
      return JSON.parse(atob(base64))
    } catch {
      console.error("[Interactive] Failed to decode base64 payload", e)
      return null
    }
  }
}

// ----------------------------------------------------
// 1. QUIZ RENDERER
// ----------------------------------------------------

function initQuiz(container: HTMLElement) {
  const payloadRaw = container.getAttribute("data-payload")
  if (!payloadRaw) return

  const data = decodePayload<QuizData>(payloadRaw)
  if (!data || !data.questions || !Array.isArray(data.questions)) return

  container.setAttribute("data-initialized", "true")
  container.className = "interactive-quiz-container"

  let score = 0
  let answeredCount = 0
  const totalQuestions = data.questions.length

  const titleHtml = data.title ? `<h3 class="quiz-title">${escapeHtml(data.title)}</h3>` : ""
  const descHtml = data.description ? `<p class="quiz-desc">${escapeHtml(data.description)}</p>` : ""

  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-title-area">
        ${titleHtml}
        ${descHtml}
      </div>
      <div class="quiz-stats-badge">
        <span>Skor:</span>
        <span class="score-number score-val">0</span>
        <span>/ ${totalQuestions}</span>
      </div>
    </div>
    <div class="quiz-questions-list"></div>
    <div class="quiz-footer">
      <div class="quiz-result-msg">Soruları yanıtlamak için seçeneklere tıklayın.</div>
      <button type="button" class="quiz-reset-btn">🔄 Testi Yeniden Başlat</button>
    </div>
  `

  const listEl = container.querySelector(".quiz-questions-list") as HTMLElement
  const scoreValEl = container.querySelector(".score-val") as HTMLElement
  const resultMsgEl = container.querySelector(".quiz-result-msg") as HTMLElement
  const resetBtn = container.querySelector(".quiz-reset-btn") as HTMLButtonElement

  data.questions.forEach((q, qIndex) => {
    const card = document.createElement("div")
    card.className = "quiz-question-card"
    card.setAttribute("data-qid", String(q.id ?? qIndex + 1))

    const promptEl = document.createElement("div")
    promptEl.className = "question-prompt"
    promptEl.innerHTML = `<span class="question-num">${qIndex + 1}.</span> ${escapeHtml(q.question)}`
    card.appendChild(promptEl)

    const optionsList = document.createElement("ul")
    optionsList.className = "options-list"

    q.options.forEach((opt) => {
      const optItem = document.createElement("li")
      optItem.className = "option-item"
      optItem.setAttribute("data-key", opt.key)

      optItem.innerHTML = `
        <span class="option-key-badge">${escapeHtml(opt.key)}</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
        <span class="option-icon"></span>
      `

      optItem.addEventListener("click", () => {
        if (card.classList.contains("answered")) return
        card.classList.add("answered")

        answeredCount++
        const isCorrect = Boolean(opt.isCorrect)

        // Lock all options in this question
        card.querySelectorAll(".option-item").forEach((el) => el.classList.add("locked"))

        const explanationBox = card.querySelector(".explanation-box") as HTMLElement

        if (isCorrect) {
          score++
          scoreValEl.textContent = String(score)
          optItem.classList.add("state-correct")
          const icon = optItem.querySelector(".option-icon")
          if (icon) icon.textContent = "✓"

          explanationBox.className = "explanation-box visible correct-explanation"
          explanationBox.innerHTML = `
            <div class="exp-label">✓ Doğru Yanıt!</div>
            <div>${escapeHtml(opt.explanation || "Tebrikler, doğru seçeneği işaretlediniz.")}</div>
          `
        } else {
          optItem.classList.add("state-wrong")
          const icon = optItem.querySelector(".option-icon")
          if (icon) icon.textContent = "✗"

          // Find correct option to reveal
          const correctOpt = q.options.find((o) => o.isCorrect)
          if (correctOpt) {
            const correctEl = card.querySelector(`.option-item[data-key="${correctOpt.key}"]`)
            if (correctEl) {
              correctEl.classList.add("state-revealed")
              const correctIcon = correctEl.querySelector(".option-icon")
              if (correctIcon) correctIcon.textContent = "✓"
            }
          }

          explanationBox.className = "explanation-box visible wrong-explanation"
          const wrongWhy = opt.explanation ? `<div>${escapeHtml(opt.explanation)}</div>` : ""
          const correctWhy = correctOpt?.explanation
            ? `<div class="exp-correct-ref"><strong>Neden ${correctOpt.key}?</strong> ${escapeHtml(correctOpt.explanation)}</div>`
            : ""

          explanationBox.innerHTML = `
            <div class="exp-label">✗ Yanlış Yanıt (${opt.key})</div>
            ${wrongWhy}
            ${correctWhy}
          `
        }

        if (answeredCount === totalQuestions) {
          const ratio = score / totalQuestions
          if (ratio === 1) {
            resultMsgEl.textContent = `🎉 Kusursuz! ${totalQuestions} sorunun tamamını doğru bildiniz!`
          } else if (ratio >= 0.7) {
            resultMsgEl.textContent = `👏 Tebrikler! ${totalQuestions} sorudan ${score} tanesini doğru bildiniz.`
          } else {
            resultMsgEl.textContent = `📖 ${totalQuestions} sorudan ${score} tanesini bildiniz. Notları tekrar gözden geçirmeniz tavsiye edilir.`
          }
        }
      })

      optionsList.appendChild(optItem)
    })

    card.appendChild(optionsList)

    const expBox = document.createElement("div")
    expBox.className = "explanation-box"
    card.appendChild(expBox)

    listEl.appendChild(card)
  })

  resetBtn.addEventListener("click", () => {
    score = 0
    answeredCount = 0
    scoreValEl.textContent = "0"
    resultMsgEl.textContent = "Soruları yanıtlamak için seçeneklere tıklayın."

    container.querySelectorAll(".quiz-question-card").forEach((card) => {
      card.classList.remove("answered")
      card.querySelectorAll(".option-item").forEach((opt) => {
        opt.className = "option-item"
        const icon = opt.querySelector(".option-icon")
        if (icon) icon.textContent = ""
      })
      const expBox = card.querySelector(".explanation-box") as HTMLElement
      if (expBox) {
        expBox.className = "explanation-box"
        expBox.innerHTML = ""
      }
    })
  })
}

// ----------------------------------------------------
// 2. PUZZLE / WORD SEARCH RENDERER
// ----------------------------------------------------

function initPuzzle(container: HTMLElement) {
  const payloadRaw = container.getAttribute("data-payload")
  if (!payloadRaw) return

  const data = decodePayload<PuzzleData>(payloadRaw)
  if (!data || !data.grid || !data.words) return

  container.setAttribute("data-initialized", "true")
  container.className = "interactive-puzzle-container"

  const rows = data.dimensions?.rows || data.grid.length
  const cols = data.dimensions?.cols || (data.grid[0] ? data.grid[0].length : 0)
  const totalWords = data.words.length

  const titleHtml = data.title ? `<h3 class="puzzle-title">${escapeHtml(data.title)}</h3>` : ""

  container.innerHTML = `
    <div class="puzzle-header">
      <div class="puzzle-title-area">
        ${titleHtml}
        <p class="puzzle-hint">🖱️ Fareyle veya 📱 parmağınızla harflerin üzerinden sürükleyerek kelimeleri bulun.</p>
      </div>
      <div class="puzzle-status-badge">
        <span>Bulunan:</span>
        <span class="found-counter found-val">0</span>
        <span>/ ${totalWords}</span>
      </div>
    </div>
    <div class="puzzle-body">
      <div class="puzzle-grid-wrapper">
        <div class="puzzle-grid" style="--grid-cols: ${cols}; grid-template-columns: repeat(${cols}, 1fr);"></div>
      </div>
      <div class="puzzle-toast"></div>
      <div class="puzzle-bottom-controls">
        <button type="button" class="puzzle-toggle-words-btn">👁️ Kelime Listesini Göster (İpucu)</button>
        <button type="button" class="puzzle-restart-btn">🔄 Sıfırla</button>
      </div>
      <div class="puzzle-words-drawer" style="display: none;">
        <div class="words-drawer-title">Aranacak Kelimeler (${totalWords})</div>
        <ul class="words-badge-list"></ul>
      </div>
    </div>
  `

  const gridEl = container.querySelector(".puzzle-grid") as HTMLElement
  const wordsListEl = container.querySelector(".words-badge-list") as HTMLElement
  const foundValEl = container.querySelector(".found-val") as HTMLElement
  const toastEl = container.querySelector(".puzzle-toast") as HTMLElement
  const restartBtn = container.querySelector(".puzzle-restart-btn") as HTMLButtonElement
  const toggleWordsBtn = container.querySelector(".puzzle-toggle-words-btn") as HTMLButtonElement
  const wordsDrawer = container.querySelector(".puzzle-words-drawer") as HTMLElement

  toggleWordsBtn.addEventListener("click", () => {
    const isHidden = wordsDrawer.style.display === "none"
    wordsDrawer.style.display = isHidden ? "block" : "none"
    toggleWordsBtn.textContent = isHidden
      ? "🙈 Kelime Listesini Gizle"
      : "👁️ Kelime Listesini Göster (İpucu)"
  })

  // Render Grid Cells
  const cellMap = new Map<string, HTMLElement>()
  const DISTRACTOR_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let char = (data.grid[r] && data.grid[r][c]) ? String(data.grid[r][c]).trim() : ""
      const cell = document.createElement("div")
      cell.className = "puzzle-cell"
      cell.setAttribute("data-row", String(r))
      cell.setAttribute("data-col", String(c))

      if (char === "") {
        if (data.type === "crossword") {
          cell.classList.add("cell-empty")
        } else {
          // Word search: fill empty cells with deterministic random distractor letters
          const hash = Math.abs(Math.sin((r + 1) * 997 + (c + 1) * 313 + totalWords * 17) * 10000)
          char = DISTRACTOR_LETTERS[Math.floor(hash) % DISTRACTOR_LETTERS.length]
          if (!data.grid[r]) data.grid[r] = []
          data.grid[r][c] = char
          cell.textContent = char.toUpperCase()
        }
      } else {
        cell.textContent = char.toUpperCase()
      }

      gridEl.appendChild(cell)
      cellMap.set(`${r},${c}`, cell)
    }
  }

  // State Management
  const foundWords = new Set<string>()
  const foundCells = new Set<string>()
  let isInteracting = false
  let startCell: { r: number; c: number } | null = null
  let currentPath: Array<{ r: number; c: number }> = []
  let toastTimer: number | null = null

  function showToast(msg: string, type: "success" | "error", duration = 2000) {
    if (toastTimer) window.clearTimeout(toastTimer)
    toastEl.className = `puzzle-toast toast-${type}`
    toastEl.textContent = msg
    toastTimer = window.setTimeout(() => {
      toastEl.className = "puzzle-toast"
      toastEl.textContent = ""
    }, duration)
  }

  // Directional Ray Calculation with Angle Snapping
  function calculateRay(r1: number, c1: number, r2: number, c2: number): Array<{ r: number; c: number }> {
    const dr = r2 - r1
    const dc = c2 - c1

    if (dr === 0 && dc === 0) return [{ r: r1, c: c1 }]

    const absDr = Math.abs(dr)
    const absDc = Math.abs(dc)

    let stepR = 0
    let stepC = 0
    let length = 0

    // Dominant Direction Logic
    if (absDr === 0) {
      stepR = 0
      stepC = dc > 0 ? 1 : -1
      length = absDc
    } else if (absDc === 0) {
      stepR = dr > 0 ? 1 : -1
      stepC = 0
      length = absDr
    } else if (absDr >= absDc * 2) {
      // Snaps to vertical
      stepR = dr > 0 ? 1 : -1
      stepC = 0
      length = absDr
    } else if (absDc >= absDr * 2) {
      // Snaps to horizontal
      stepR = 0
      stepC = dc > 0 ? 1 : -1
      length = absDc
    } else {
      // Snaps to 45 degree diagonal
      stepR = dr > 0 ? 1 : -1
      stepC = dc > 0 ? 1 : -1
      length = Math.max(absDr, absDc)
    }

    const path: Array<{ r: number; c: number }> = []
    for (let i = 0; i <= length; i++) {
      const curR = r1 + i * stepR
      const curC = c1 + i * stepC
      if (curR >= 0 && curR < rows && curC >= 0 && curC < cols) {
        path.push({ r: curR, c: curC })
      }
    }
    return path
  }

  // Find coordinates of a word in grid (via explicit path, start/end ray, or grid search)
  function findWordPath(w: PuzzleWord): Array<{ r: number; c: number }> {
    if (w.path && w.path.length > 0) {
      return w.path.map((pt) => ({ r: pt[0], c: pt[1] }))
    }
    if (w.start && w.end) {
      return calculateRay(w.start[0], w.start[1], w.end[0], w.end[1])
    }
    // Search grid for the word in 8 directions
    const target = w.word.toUpperCase().replace(/\s+/g, "")
    const dirs = [
      [0, 1], [0, -1], [1, 0], [-1, 0],
      [1, 1], [-1, -1], [1, -1], [-1, 1],
    ]
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const char = data.grid[r]?.[c]?.toUpperCase() || ""
        if (char !== target[0]) continue

        for (const [dr, dc] of dirs) {
          const path: Array<{ r: number; c: number }> = []
          let match = true
          for (let i = 0; i < target.length; i++) {
            const nr = r + i * dr
            const nc = c + i * dc
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
              match = false
              break
            }
            if ((data.grid[nr]?.[nc]?.toUpperCase() || "") !== target[i]) {
              match = false
              break
            }
            path.push({ r: nr, c: nc })
          }
          if (match) return path
        }
      }
    }
    return []
  }

  function markWordAsFound(wordObj: PuzzleWord, isReveal = false) {
    const wordKey = wordObj.word.toUpperCase().replace(/\s+/g, "")
    const isNew = !foundWords.has(wordKey)

    if (isNew) {
      foundWords.add(wordKey)
      foundValEl.textContent = String(foundWords.size)
    }

    const wordPath = (!isReveal && currentPath.length > 0) ? currentPath : findWordPath(wordObj)
    wordPath.forEach((p) => {
      foundCells.add(`${p.r},${p.c}`)
      const cell = cellMap.get(`${p.r},${p.c}`)
      if (cell) {
        cell.classList.remove("selecting", "mismatch")
        cell.classList.add("found")
        // Animate pulse highlight
        cell.classList.remove("revealed-pulse")
        void cell.offsetWidth // trigger reflow
        cell.classList.add("revealed-pulse")
        setTimeout(() => {
          cell.classList.remove("revealed-pulse")
        }, 1600)
      }
    })

    // Update Word Badge
    const badge = wordsListEl.querySelector(`.word-badge[data-word="${wordKey}"]`)
    if (badge) {
      badge.classList.add("is-found")
      const icon = badge.querySelector(".word-status-icon")
      if (icon) icon.textContent = "✓"
      const revealBtn = badge.querySelector(".word-reveal-btn") as HTMLButtonElement
      if (revealBtn) {
        revealBtn.innerHTML = "✓ Bulundu"
        revealBtn.title = "Konumu tekrar vurgulamak için tıklayın"
      }
    }

    if (isNew) {
      if (isReveal) {
        showToast(`💡 "${wordObj.word}" bulmacada gösterildi!`, "success", 2500)
      } else {
        showToast(`🎉 "${wordObj.word}" kelimesi bulundu!`, "success", 2000)
      }

      if (foundWords.size === totalWords) {
        setTimeout(() => {
          showToast(`🏆 Tebrikler! Tüm kelimeleri tamamladınız!`, "success", 4000)
        }, 500)
      }
    } else if (isReveal) {
      showToast(`✨ "${wordObj.word}" konumu vurgulandı!`, "success", 1500)
    }

    if (isReveal) {
      gridEl.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  // Render Words in Drawer with "Bulmacada Göster" button
  data.words.forEach((w) => {
    const wordKey = w.word.toUpperCase().replace(/\s+/g, "")
    const badge = document.createElement("li")
    badge.className = "word-badge"
    badge.setAttribute("data-word", wordKey)
    const clueText = w.clue ? ` <span class="word-clue">(${escapeHtml(w.clue)})</span>` : ""
    badge.innerHTML = `
      <div class="word-badge-info">
        <span class="word-status-icon">○</span>
        <span class="word-name"><strong>${escapeHtml(w.word.toUpperCase())}</strong>${clueText}</span>
      </div>
      <button type="button" class="word-reveal-btn" title="Bulmacada Göster">
        👁️ Bulmacada Göster
      </button>
    `

    const revealBtn = badge.querySelector(".word-reveal-btn") as HTMLButtonElement
    if (revealBtn) {
      revealBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        markWordAsFound(w, true)
      })
    }

    wordsListEl.appendChild(badge)
  })

  function updateSelectingVisuals(path: Array<{ r: number; c: number }>) {
    // Clear old non-found selecting
    gridEl.querySelectorAll(".puzzle-cell.selecting").forEach((el) => {
      el.classList.remove("selecting")
    })

    path.forEach((p) => {
      const cell = cellMap.get(`${p.r},${p.c}`)
      if (cell && !cell.classList.contains("cell-empty")) {
        cell.classList.add("selecting")
      }
    })
  }

  function handleStart(r: number, c: number) {
    const cell = cellMap.get(`${r},${c}`)
    if (!cell || cell.classList.contains("cell-empty")) return
    isInteracting = true
    startCell = { r, c }
    currentPath = [{ r, c }]
    updateSelectingVisuals(currentPath)
  }

  function handleMove(r: number, c: number) {
    if (!isInteracting || !startCell) return
    const newPath = calculateRay(startCell.r, startCell.c, r, c)
    currentPath = newPath
    updateSelectingVisuals(currentPath)
  }

  function handleEnd() {
    if (!isInteracting || !startCell) return
    isInteracting = false

    if (currentPath.length < 2) {
      updateSelectingVisuals([])
      startCell = null
      currentPath = []
      return
    }

    const grid = data.grid
    const words = data.words

    const selectedLetters = currentPath
      .map((p) => (grid[p.r] && grid[p.r][p.c] ? grid[p.r][p.c].toUpperCase() : ""))
      .join("")
    const reversedLetters = selectedLetters.split("").reverse().join("")

    // Check match against target words
    let matchedWordObj: PuzzleWord | null = null
    for (const w of words) {
      const targetWord = w.word.toUpperCase().replace(/\s+/g, "")
      if (foundWords.has(targetWord)) continue

      if (selectedLetters === targetWord || reversedLetters === targetWord) {
        matchedWordObj = w
        break
      }

      // Also check path coordinate equality if specified
      if (w.path && w.path.length === currentPath.length) {
        const directMatch = w.path.every(
          (pt, idx) => pt[0] === currentPath[idx].r && pt[1] === currentPath[idx].c
        )
        const reverseMatch = w.path.every(
          (pt, idx) =>
            pt[0] === currentPath[currentPath.length - 1 - idx].r &&
            pt[1] === currentPath[currentPath.length - 1 - idx].c
        )
        if (directMatch || reverseMatch) {
          matchedWordObj = w
          break
        }
      }
    }

    if (matchedWordObj) {
      // MATCH SUCCESS
      markWordAsFound(matchedWordObj, false)
    } else {
      // MISMATCH - TEMPORARY RED FLASH (1-2 seconds)
      const invalidPath = [...currentPath]
      invalidPath.forEach((p) => {
        const cell = cellMap.get(`${p.r},${p.c}`)
        if (cell) {
          cell.classList.remove("selecting")
          cell.classList.add("mismatch")
        }
      })

      showToast("Eşleşmedi, tekrar deneyin.", "error", 1200)

      setTimeout(() => {
        invalidPath.forEach((p) => {
          const cell = cellMap.get(`${p.r},${p.c}`)
          if (cell) {
            cell.classList.remove("mismatch")
          }
        })
      }, 1200)
    }

    startCell = null
    currentPath = []
  }

  // --- Pointer & Mouse Listeners ---
  gridEl.addEventListener("mousedown", (e) => {
    const target = (e.target as HTMLElement).closest(".puzzle-cell") as HTMLElement
    if (!target) return
    const r = parseInt(target.getAttribute("data-row") || "-1", 10)
    const c = parseInt(target.getAttribute("data-col") || "-1", 10)
    if (r >= 0 && c >= 0) handleStart(r, c)
  })

  window.addEventListener("mousemove", (e) => {
    if (!isInteracting) return
    const el = document.elementFromPoint(e.clientX, e.clientY)?.closest(".puzzle-cell") as HTMLElement
    if (el) {
      const r = parseInt(el.getAttribute("data-row") || "-1", 10)
      const c = parseInt(el.getAttribute("data-col") || "-1", 10)
      if (r >= 0 && c >= 0) handleMove(r, c)
    }
  })

  window.addEventListener("mouseup", () => {
    if (isInteracting) handleEnd()
  })

  // --- Touch Listeners (Mobile & Tablet) ---
  gridEl.addEventListener(
    "touchstart",
    (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      const el = document.elementFromPoint(touch.clientX, touch.clientY)?.closest(".puzzle-cell") as HTMLElement
      if (el) {
        e.preventDefault() // prevent page scroll while initiating puzzle selection
        const r = parseInt(el.getAttribute("data-row") || "-1", 10)
        const c = parseInt(el.getAttribute("data-col") || "-1", 10)
        if (r >= 0 && c >= 0) handleStart(r, c)
      }
    },
    { passive: false }
  )

  gridEl.addEventListener(
    "touchmove",
    (e: TouchEvent) => {
      if (!isInteracting) return
      e.preventDefault() // prevent scroll during drag
      const touch = e.touches[0]
      if (!touch) return
      const el = document.elementFromPoint(touch.clientX, touch.clientY)?.closest(".puzzle-cell") as HTMLElement
      if (el) {
        const r = parseInt(el.getAttribute("data-row") || "-1", 10)
        const c = parseInt(el.getAttribute("data-col") || "-1", 10)
        if (r >= 0 && c >= 0) handleMove(r, c)
      }
    },
    { passive: false }
  )

  window.addEventListener("touchend", () => {
    if (isInteracting) handleEnd()
  })

  // Reset Button
  restartBtn.addEventListener("click", () => {
    foundWords.clear()
    foundCells.clear()
    foundValEl.textContent = "0"
    toastEl.className = "puzzle-toast"
    toastEl.textContent = ""

    gridEl.querySelectorAll(".puzzle-cell").forEach((cell) => {
      cell.classList.remove("selecting", "found", "mismatch", "revealed-pulse")
    })

    wordsListEl.querySelectorAll(".word-badge").forEach((badge) => {
      badge.classList.remove("is-found")
      const icon = badge.querySelector(".word-status-icon")
      if (icon) icon.textContent = "○"
      const revealBtn = badge.querySelector(".word-reveal-btn") as HTMLButtonElement
      if (revealBtn) {
        revealBtn.innerHTML = "👁️ Bulmacada Göster"
        revealBtn.title = "Bulmacada Göster"
      }
    })
  })
}

// ----------------------------------------------------
// 3. LEXICON & ETYMOLOGY INSPECTOR (Kelime ve Köken Atlası)
// ----------------------------------------------------

interface LexiconData {
  word: string
  mainTranslation: string
  posList: Array<{
    pos: string
    posTr: string
    meanings: string[]
  }>
  etymology: string
  cognates: string[]
}

const lexiconCache = new Map<string, LexiconData>()
let activeLexiconCard: HTMLElement | null = null

function speakWord(word: string) {
  if (!("speechSynthesis" in window)) return
  try {
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(word)
    utter.lang = "en-US"
    utter.rate = 0.88
    window.speechSynthesis.speak(utter)
  } catch (err) {
    console.error("[Lexicon] Speech synthesis error:", err)
  }
}

async function fetchLexiconData(rawWord: string): Promise<LexiconData> {
  const word = rawWord.toLowerCase().replace(/[^a-zA-Z]/g, "")
  if (lexiconCache.has(word)) {
    return lexiconCache.get(word)!
  }

  // 1. Google Translate Dictionary endpoint (CORS supported, fast)
  const gPromise = fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&dt=bd&q=${encodeURIComponent(word)}`
  )
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null)

  // 2. Wiktionary REST HTML (Official Wikimedia API, has full etymology)
  const wPromise = fetch(`https://en.wiktionary.org/api/rest_v1/page/html/${encodeURIComponent(word)}`)
    .then((r) => (r.ok ? r.text() : ""))
    .catch(() => "")

  // 3. Datamuse related words / derivations
  const dPromise = fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(word)}*&max=10`)
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => [])

  const [gData, wHtml, dWords] = await Promise.all([gPromise, wPromise, dPromise])

  const posTrMap: Record<string, string> = {
    noun: "İsim (Noun)",
    verb: "Fiil (Verb)",
    adjective: "Sıfat (Adjective)",
    adverb: "Zarf (Adverb)",
    pronoun: "Zamir (Pronoun)",
    preposition: "Edat (Preposition)",
    conjunction: "Bağlaç (Conjunction)",
    interjection: "Ünlem (Interjection)",
  }

  const posList: Array<{ pos: string; posTr: string; meanings: string[] }> = []
  let mainTranslation = ""

  if (gData) {
    mainTranslation = gData[0]?.[0]?.[0] || ""
    if (Array.isArray(gData[1])) {
      gData[1].forEach((item: any) => {
        const posName = String(item[0] || "").toLowerCase()
        const posTr = posTrMap[posName] || `${posName.charAt(0).toUpperCase() + posName.slice(1)}`
        const meanings = Array.isArray(item[1]) ? item[1].slice(0, 5) : []
        if (meanings.length > 0) {
          posList.push({ pos: posName, posTr, meanings })
        }
      })
    }
  }

  let etymology = ""
  if (wHtml) {
    const m =
      wHtml.match(/<section[^>]*id="Etymology[^>]*>([\s\S]*?)<\/section>/i) ||
      wHtml.match(/<h[234][^>]*id="Etymology[^>]*>[\s\S]*?<\/h[234]>([\s\S]*?)(?=<h[234]|$)/i) ||
      wHtml.match(/<h[234][^>]*>(?:<span[^>]*>)?Etymology[\s\S]*?<\/h[234]>([\s\S]*?)(?=<h[234]|$)/i)
    if (m) {
      etymology = m[1]
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<sup[\s\S]*?<\/sup>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    }
  }

  const cognates: string[] = []
  if (Array.isArray(dWords)) {
    dWords.forEach((item: any) => {
      const w = String(item.word || "").toLowerCase()
      if (w !== word && !w.includes(" ") && w.length >= 3 && !cognates.includes(w)) {
        cognates.push(w)
      }
    })
  }

  const result: LexiconData = {
    word,
    mainTranslation,
    posList,
    etymology: etymology.slice(0, 600),
    cognates: cognates.slice(0, 8),
  }

  lexiconCache.set(word, result)
  return result
}

function ensureLexiconCard(): HTMLElement {
  let card = document.getElementById("lexicon-inspector-card")
  if (!card) {
    card = document.createElement("div")
    card.id = "lexicon-inspector-card"
    card.className = "lexicon-card"
    card.style.display = "none"
    document.body.appendChild(card)

    // Global click listener to close when clicking outside
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      if (
        activeLexiconCard &&
        activeLexiconCard.style.display !== "none" &&
        !activeLexiconCard.contains(target) &&
        !target.closest(".lex-word") &&
        !target.closest(".lex-cognate-pill") &&
        !target.closest(".lex-selection-bubble")
      ) {
        closeLexiconInspector()
      }
    })

    // Escape key listener
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && activeLexiconCard && activeLexiconCard.style.display !== "none") {
        closeLexiconInspector()
      }
    })
  }
  return card
}

function closeLexiconInspector() {
  if (activeLexiconCard) {
    activeLexiconCard.style.display = "none"
  }
}

async function showLexiconInspector(rawWord: string) {
  const word = rawWord.trim().replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, "")
  if (word.length < 2) return

  const card = ensureLexiconCard()
  activeLexiconCard = card
  card.style.display = "flex"

  // Render Loading Skeleton
  card.innerHTML = `
    <div class="lex-card-header">
      <div class="lex-header-left">
        <span class="lex-icon">📖</span>
        <span class="lex-title-word">${escapeHtml(word)}</span>
        <button type="button" class="lex-audio-btn" title="Telaffuzu Dinle">🔊</button>
      </div>
      <div class="lex-header-right">
        <button type="button" class="lex-close-btn" title="Kapat">✕</button>
      </div>
    </div>
    <div class="lex-card-body">
      <div class="lex-loading">
        <div class="lex-spinner"></div>
        <span>"${escapeHtml(word)}" araştırılıyor...</span>
      </div>
    </div>
  `

  const audioBtn = card.querySelector(".lex-audio-btn") as HTMLButtonElement
  if (audioBtn) {
    audioBtn.addEventListener("click", () => speakWord(word))
  }
  const closeBtn = card.querySelector(".lex-close-btn") as HTMLButtonElement
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLexiconInspector)
  }

  try {
    const data = await fetchLexiconData(word)

    // Render POS items HTML
    let posHtml = ""
    if (data.posList.length > 0) {
      posHtml = `
        <div class="lex-section">
          <div class="lex-section-title">🏷️ Sözcük Türleri & Türkçe Karşılıkları</div>
          <div class="lex-pos-list">
            ${data.posList
              .map(
                (p) => `
              <div class="lex-pos-item">
                <span class="lex-pos-tag lex-pos-${p.pos}">${escapeHtml(p.posTr)}</span>
                <span class="lex-pos-meanings">${escapeHtml(p.meanings.join(", "))}</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `
    } else if (data.mainTranslation) {
      posHtml = `
        <div class="lex-section">
          <div class="lex-section-title">🏷️ Türkçe Karşılığı</div>
          <div class="lex-main-badge">${escapeHtml(data.mainTranslation)}</div>
        </div>
      `
    }

    // Render Etymology HTML
    let etymologyHtml = ""
    if (data.etymology) {
      etymologyHtml = `
        <div class="lex-section">
          <div class="lex-section-title">🏛️ Köken & Etimoloji (Wiktionary)</div>
          <p class="lex-etymology-text">${escapeHtml(data.etymology)}</p>
        </div>
      `
    } else {
      etymologyHtml = `
        <div class="lex-section">
          <div class="lex-section-title">🏛️ Köken & Etimoloji</div>
          <p class="lex-etymology-text lex-text-muted">Bu sözcük için doğrudan etimoloji kaydı bulunamadı. Aşağıdaki Etymonline bağlantısından detaylı inceleyebilirsiniz.</p>
        </div>
      `
    }

    // Render Cognates HTML
    let cognatesHtml = ""
    if (data.cognates.length > 0) {
      cognatesHtml = `
        <div class="lex-section">
          <div class="lex-section-title">🌿 Aynı Kökten Kelimeler (Word Family)</div>
          <div class="lex-cognates-list">
            ${data.cognates
              .map(
                (c) => `
              <button type="button" class="lex-cognate-pill" data-cognate="${escapeHtml(c)}">${escapeHtml(c)}</button>
            `
              )
              .join("")}
          </div>
        </div>
      `
    }

    // Render External Quick Links
    const linksHtml = `
      <div class="lex-section lex-links-section">
        <a href="https://www.etymonline.com/word/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Etymonline ↗</a>
        <a href="https://en.wiktionary.org/wiki/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Wiktionary ↗</a>
        <a href="https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Cambridge ↗</a>
        <a href="https://tureng.com/tr/turkce-ingilizce/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Tureng ↗</a>
      </div>
    `

    const mainBadgeHtml = data.mainTranslation
      ? `<div class="lex-top-translation">Anlamı: <strong>${escapeHtml(data.mainTranslation)}</strong></div>`
      : ""

    const bodyEl = card.querySelector(".lex-card-body") as HTMLElement
    if (bodyEl) {
      bodyEl.innerHTML = `
        ${mainBadgeHtml}
        ${posHtml}
        ${etymologyHtml}
        ${cognatesHtml}
        ${linksHtml}
      `

      // Add click listeners to cognate pills
      bodyEl.querySelectorAll(".lex-cognate-pill").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation()
          const cognateWord = (btn as HTMLElement).getAttribute("data-cognate")
          if (cognateWord) {
            showLexiconInspector(cognateWord)
          }
        })
      })
    }
  } catch (err) {
    const bodyEl = card.querySelector(".lex-card-body") as HTMLElement
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div class="lex-error">
          <p>⚠️ Bilgiler alınırken bir sorun oluştu.</p>
          <div class="lex-links-section">
            <a href="https://www.etymonline.com/word/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Etymonline'da Ara ↗</a>
            <a href="https://tureng.com/tr/turkce-ingilizce/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Tureng'de Ara ↗</a>
          </div>
        </div>
      `
    }
  }
}

function getWordAtClick(e: MouseEvent): string | null {
  let range: Range | null = null
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY)
  } else if ((document as any).caretPositionFromPoint) {
    const pos = (document as any).caretPositionFromPoint(e.clientX, e.clientY)
    if (pos && pos.offsetNode) {
      range = document.createRange()
      range.setStart(pos.offsetNode, pos.offset)
      range.collapse(true)
    }
  }
  if (!range || range.startContainer.nodeType !== Node.TEXT_NODE) return null
  const text = range.startContainer.textContent || ""
  const offset = range.startOffset

  let start = offset
  while (start > 0 && /[a-zA-Z]/.test(text[start - 1])) {
    start--
  }
  let end = offset
  while (end < text.length && /[a-zA-Z]/.test(text[end])) {
    end++
  }
  const raw = text.slice(start, end).trim()
  return raw.length >= 2 ? raw : null
}

function tokenizeElementWords(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null)
  const textNodes: Text[] = []
  let node: Node | null
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("a, code, pre, script, style, .lex-word, button, .puzzle-grid, .quiz-option")) {
      continue
    }
    if (node.textContent && /[a-zA-Z]{2,}/.test(node.textContent)) {
      textNodes.push(node as Text)
    }
  }
  textNodes.forEach((tn) => {
    const text = tn.textContent || ""
    const frag = document.createDocumentFragment()
    // Split into word tokens and non-word tokens
    const tokens = text.split(/([a-zA-Z][a-zA-Z'-]*[a-zA-Z]|[a-zA-Z]{2,})/)
    tokens.forEach((t) => {
      if (/^[a-zA-Z]/.test(t) && t.length >= 2) {
        const span = document.createElement("span")
        span.className = "lex-word"
        span.setAttribute("data-lex-word", t)
        span.textContent = t
        frag.appendChild(span)
      } else {
        frag.appendChild(document.createTextNode(t))
      }
    })
    tn.parentNode?.replaceChild(frag, tn)
  })
}

function initLexiconInspector() {
  const marker = document.querySelector(".interactive-lexicon-page-marker[data-active='true']")
  if (!marker) {
    closeLexiconInspector()
    document.querySelectorAll(".lexicon-status-badge").forEach((el) => el.remove())
    return
  }

  const article = document.querySelector("article")
  if (!article || article.hasAttribute("data-lexicon-initialized")) return
  article.setAttribute("data-lexicon-initialized", "true")

  // 1. In tables, wrap English words into .lex-word for visual feedback & hover
  article.querySelectorAll("table td, table th").forEach((cell) => {
    tokenizeElementWords(cell as HTMLElement)
  })

  // 2. Delegate click on article
  article.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    // Ignore interactive widgets, quizzes, puzzles, external links
    if (target.closest(".interactive-quiz-widget, .interactive-puzzle-widget, a, button")) {
      return
    }

    const lexSpan = target.closest(".lex-word") as HTMLElement
    if (lexSpan) {
      const word = lexSpan.getAttribute("data-lex-word") || lexSpan.textContent || ""
      if (word.length >= 2) {
        showLexiconInspector(word)
        return
      }
    }

    // Fallback: Click on any word in article
    const wordAtClick = getWordAtClick(e)
    if (wordAtClick && /^[a-zA-Z]{2,}$/.test(wordAtClick)) {
      showLexiconInspector(wordAtClick)
    }
  })

  // 3. Add floating status badge on bottom-right
  if (!document.querySelector(".lexicon-status-badge")) {
    const badge = document.createElement("div")
    badge.className = "lexicon-status-badge"
    badge.title = "Kelime & Köken Atlası bu sayfada aktif. İncelemek istediğiniz herhangi bir kelimeye tıklayabilirsiniz."
    badge.innerHTML = `<span class="lex-pulse-dot"></span><span>📚 Kelime Atlası</span>`
    badge.addEventListener("click", () => {
      showLexiconInspector("language")
    })
    document.body.appendChild(badge)
  }
}

// ----------------------------------------------------
// Core Initialization & Lifecycle
// ----------------------------------------------------

function escapeHtml(str: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return String(str).replace(/[&<>"']/g, (m) => map[m])
}

function initInteractiveWidgets() {
  document.querySelectorAll(".interactive-quiz-widget:not([data-initialized])").forEach((el) => {
    initQuiz(el as HTMLElement)
  })

  document.querySelectorAll(".interactive-puzzle-widget:not([data-initialized])").forEach((el) => {
    initPuzzle(el as HTMLElement)
  })

  initLexiconInspector()
}

document.addEventListener("nav", initInteractiveWidgets)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initInteractiveWidgets)
} else {
  initInteractiveWidgets()
}

export {}
