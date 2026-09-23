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

  // Render Words in Sidebar
  data.words.forEach((w) => {
    const badge = document.createElement("li")
    badge.className = "word-badge"
    badge.setAttribute("data-word", w.word.toUpperCase())
    const clueText = w.clue ? ` (${escapeHtml(w.clue)})` : ""
    badge.innerHTML = `
      <span class="word-status-icon">○</span>
      <span class="word-name">${escapeHtml(w.word.toUpperCase())}${clueText}</span>
    `
    wordsListEl.appendChild(badge)
  })

  // Render Grid Cells
  const cellMap = new Map<string, HTMLElement>()
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const char = (data.grid[r] && data.grid[r][c]) ? data.grid[r][c] : " "
      const cell = document.createElement("div")
      cell.className = "puzzle-cell"
      cell.setAttribute("data-row", String(r))
      cell.setAttribute("data-col", String(c))

      if (char === " " || char === "") {
        cell.classList.add("cell-empty")
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
      const wordKey = matchedWordObj.word.toUpperCase().replace(/\s+/g, "")
      foundWords.add(wordKey)

      currentPath.forEach((p) => {
        foundCells.add(`${p.r},${p.c}`)
        const cell = cellMap.get(`${p.r},${p.c}`)
        if (cell) {
          cell.classList.remove("selecting")
          cell.classList.add("found")
        }
      })

      // Update Word Badge
      const badge = wordsListEl.querySelector(`.word-badge[data-word="${wordKey}"]`)
      if (badge) {
        badge.classList.add("is-found")
        const icon = badge.querySelector(".word-status-icon")
        if (icon) icon.textContent = "✓"
      }

      foundValEl.textContent = String(foundWords.size)
      showToast(`🎉 "${matchedWordObj.word}" kelimesi bulundu!`, "success", 2000)

      if (foundWords.size === totalWords) {
        setTimeout(() => {
          showToast(`🏆 Tebrikler! Tüm kelimeleri tamamladınız!`, "success", 4000)
        }, 500)
      }
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
      cell.classList.remove("selecting", "found", "mismatch")
    })

    wordsListEl.querySelectorAll(".word-badge").forEach((badge) => {
      badge.classList.remove("is-found")
      const icon = badge.querySelector(".word-status-icon")
      if (icon) icon.textContent = "○"
    })
  })
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
}

document.addEventListener("nav", initInteractiveWidgets)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initInteractiveWidgets)
} else {
  initInteractiveWidgets()
}

export {}
