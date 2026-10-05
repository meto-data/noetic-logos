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
// FontAwesome SVG Icons (Emoji-free, crisp vector icons)
// ----------------------------------------------------

const FA_ICONS = {
  search: `<svg class="fa-icon fa-magnifying-glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,
  book: `<svg class="fa-icon fa-book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`,
  volume: `<svg class="fa-icon fa-volume-high" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C478.4 340.1 496 300.1 496 256s-17.6-84.1-54.2-111.7c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM380.6 34.6c9.7 5.6 15.4 16.2 14.8 27.4L372 256l23.4 194c.6 11.2-5.1 21.8-14.8 27.4s-21.7 4.9-30.8-1.8L211.7 368H128c-35.3 0-64-28.7-64-64V208c0-35.3 28.7-64 64-64h83.7L349.8 36.4c9.1-6.7 21.1-7.4 30.8-1.8z"/></svg>`,
  close: `<svg class="fa-icon fa-xmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`,
  tag: `<svg class="fa-icon fa-tag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L414.8 321.2c25-25 25-65.5 0-90.5L238.7 54.7C226.7 42.7 210.5 36 193.5 36H48C21.5 36 0 57.5 0 84v-4zM112 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  landmark: `<svg class="fa-icon fa-landmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l216 123.4c8.4 4.8 13.6 13.8 13.6 23.5c0 14.9-12.1 27-27 27H37.5C22.6 178 10.5 166 10.5 151.1c0-9.7 5.2-18.7 13.6-23.5L240.1 4.2zM64 224h48v160H64V224zm144 0h48v160h-48V224zm144 0h48v160h-48V224zM32 448h448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`,
  codeBranch: `<svg class="fa-icon fa-code-branch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V358.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80zm208 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 44.2-35.8 80-80 80-28.3 0-53.1-14.7-67.3-37.1l-66.2 38.6c3.6 12 5.5 24.8 5.5 38.5 0 25.1-7.2 48.5-19.7 68.3l62.4 36.4C294.9 318.7 319.7 304 348 304c44.2 0 80 35.8 80 80s-35.8 80-80 80c-44.2 0-80-35.8-80-80 0-7.3 1-14.3 2.8-21l-63.5-37.1c-14.8 13.7-34.4 22.1-55.9 22.1h-8v-64h8c22.1 0 40-17.9 40-40 0-14.7-8-27.6-19.9-34.6l64.2-37.5c14.2 13.5 33.3 21.9 54.3 21.9 44.2 0 80-35.8 80-80z"/></svg>`,
  quote: `<svg class="fa-icon fa-quote-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h80c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h80c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"/></svg>`,
  externalLink: `<svg class="fa-icon fa-arrow-up-right-from-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>`,
  grip: `<svg class="fa-icon fa-grip-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><path d="M96 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm128-320a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`,
  resize: `<svg class="fa-icon fa-up-right-and-down-left-from-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-39-39c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/></svg>`,
  rotateRight: `<svg class="fa-icon fa-rotate-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224c106.1 0 193.3-74.1 216.2-173.3 2.6-11.3-4.5-22.7-15.8-25.3-11.3-2.6-22.7 4.5-25.3 15.8C411.4 374.3 340.5 432 256 432 158.8 432 80 353.2 80 256S158.8 80 256 80c44.1 0 84.4 16.3 115.5 43.4l-57.1 57.1c-15.1 15.1-4.4 41 17 41h144c13.3 0 24-10.7 24-24V56.96c0-21.4-25.9-32.1-49.5-17z"/></svg>`,
  copy: `<svg class="fa-icon fa-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L384 99.9V320c0 8.8-7.2 16-16 16zM192 0c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-17-6.7-33.3-18.7-45.3L381.3 18.7C369.3 6.7 353 0 336 0H192zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>`,
  eye: `<svg class="fa-icon fa-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 92.9-131.1 3.3-7.9 3.3-16.7 0-24.6-14.8-35.7-46.1-87.7-92.9-131.1C433.5 68.8 368.8 32 288 32zm0 112c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112 50.1-112 112-112zm0 64c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"/></svg>`,
  eyeSlash: `<svg class="fa-icon fa-eye-slash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L526.9 387.8C592.5 338.4 640 256 640 256s-47.5-82.4-113.1-131.8C459.7 75.8 392.2 48 320 48c-42.5 0-83.3 9.7-119.9 26.6L72.6 11.4 38.8 5.1zM320 112c48.6 0 94.3 17.5 131.1 48.2 24.3 20.3 44.5 46.1 58.7 71.8-14.2 25.7-34.4 51.5-58.7 71.8-21.2 17.7-45.7 31.4-72.3 39.8L320 286V112zm-88.7 54.7L181.7 127C143.5 149.2 112.5 181.9 90.2 224c22.3 42.1 53.3 74.8 91.5 97-4.5-12.8-7.7-26.3-9.5-40.3-2-15.6-2.5-31.5-.7-47.2 2-17.7 7.6-34.7 16.1-50.1l-16.3-16.7z"/></svg>`,
  circleCheck: `<svg class="fa-icon fa-circle-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`,
  circleExclamation: `<svg class="fa-icon fa-circle-exclamation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"/></svg>`,
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
      <button type="button" class="quiz-reset-btn">${FA_ICONS.rotateRight} Testi Yeniden Başlat</button>
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
            resultMsgEl.textContent = `Kusursuz! ${totalQuestions} sorunun tamamını doğru bildiniz!`
          } else if (ratio >= 0.7) {
            resultMsgEl.textContent = `Tebrikler! ${totalQuestions} sorudan ${score} tanesini doğru bildiniz.`
          } else {
            resultMsgEl.textContent = `${totalQuestions} sorudan ${score} tanesini bildiniz. Notları tekrar gözden geçirmeniz tavsiye edilir.`
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
        <p class="puzzle-hint">Fareyle veya parmağınızla harflerin üzerinden sürükleyerek kelimeleri bulun.</p>
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
        <button type="button" class="puzzle-toggle-words-btn">${FA_ICONS.eye} Kelime Listesini Göster (İpucu)</button>
        <button type="button" class="puzzle-restart-btn">${FA_ICONS.rotateRight} Sıfırla</button>
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
    toggleWordsBtn.innerHTML = isHidden
      ? `${FA_ICONS.eyeSlash} Kelime Listesini Gizle`
      : `${FA_ICONS.eye} Kelime Listesini Göster (İpucu)`
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
        showToast(`"${wordObj.word}" bulmacada gösterildi!`, "success", 2500)
      } else {
        showToast(`"${wordObj.word}" kelimesi bulundu!`, "success", 2000)
      }

      if (foundWords.size === totalWords) {
        setTimeout(() => {
          showToast(`Tebrikler! Tüm kelimeleri tamamladınız!`, "success", 4000)
        }, 500)
      }
    } else if (isReveal) {
      showToast(`"${wordObj.word}" konumu vurgulandı!`, "success", 1500)
    }

    if (isReveal) {
      gridEl.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  // Render Words in Drawer with "Bulmacada Göster" button
  data.words.forEach((w) => {
    const wordKey = w.word.toUpperCase().replace(/\s+/g, "")
    const badge = document.createElement("li")
    badge.setAttribute("data-word", wordKey)
    badge.className = "word-badge"
    const clueText = w.clue ? ` <span class="word-clue">(${escapeHtml(w.clue)})</span>` : ""
    badge.innerHTML = `
      <div class="word-badge-info">
        <span class="word-status-icon">○</span>
        <span class="word-name"><strong>${escapeHtml(w.word.toUpperCase())}</strong>${clueText}</span>
      </div>
      <button type="button" class="word-reveal-btn" title="Bulmacada Göster">
        ${FA_ICONS.eye} Bulmacada Göster
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
        revealBtn.innerHTML = `${FA_ICONS.eye} Bulmacada Göster`
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
  examples: string[]
}

const lexiconCache = new Map<string, LexiconData>()
let activeLexiconCard: HTMLElement | null = null
let activeActionPill: HTMLElement | null = null

function speakWord(word: string) {
  if (!("speechSynthesis" in window)) return
  try {
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(word)
    utter.lang = "en-US"
    utter.rate = 0.88
    window.speechSynthesis.speak(utter)
  } catch (err) {
    console.error("[Lexicon] Speech error:", err)
  }
}

async function fetchLexiconData(rawWord: string): Promise<LexiconData> {
  const word = rawWord.toLowerCase().replace(/[^a-zA-Z'-]/g, "").trim()
  if (lexiconCache.has(word)) {
    return lexiconCache.get(word)!
  }

  // 1. Google Translate GTX (Turkish translation & word classes)
  const gPromise = fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&dt=bd&q=${encodeURIComponent(word)}`
  )
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null)

  // 2. Wiktionary REST Definitions (Definitions, POS, and authentic examples)
  const defPromise = fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`)
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null)

  // 3. Wiktionary REST HTML (Official Wikimedia Parsoid endpoint for etymology and derived terms)
  const htmlPromise = fetch(`https://en.wiktionary.org/api/rest_v1/page/html/${encodeURIComponent(word)}`)
    .then((r) => (r.ok ? r.text() : ""))
    .catch(() => "")

  // 4. Datamuse related trigger words (fallback for cognates)
  const dPromise = fetch(`https://api.datamuse.com/words?rel_trg=${encodeURIComponent(word)}&max=8`)
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => [])

  const [gData, defData, wHtml, dWords] = await Promise.all([gPromise, defPromise, htmlPromise, dPromise])

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

  // Parse Wiktionary definitions & real example sentences
  const examples: string[] = []
  if (defData && Array.isArray(defData.en)) {
    defData.en.forEach((entry: any) => {
      const posName = String(entry.partOfSpeech || "").toLowerCase()
      if (posList.length === 0 && entry.definitions && entry.definitions.length > 0) {
        const posTr = posTrMap[posName] || entry.partOfSpeech || "Kelime"
        const enMeanings = entry.definitions
          .map((d: any) => (d.definition || "").replace(/<[^>]+>/g, "").trim())
          .filter((t: string) => t.length > 0)
          .slice(0, 3)
        if (enMeanings.length > 0) {
          posList.push({ pos: posName, posTr, meanings: enMeanings })
        }
      }

      if (Array.isArray(entry.definitions)) {
        entry.definitions.forEach((d: any) => {
          if (Array.isArray(d.parsedExamples)) {
            d.parsedExamples.forEach((ex: any) => {
              const str = (ex.example || "").trim()
              if (str && !examples.includes(str) && examples.length < 4) {
                examples.push(str)
              }
            })
          } else if (Array.isArray(d.examples)) {
            d.examples.forEach((ex: any) => {
              const str = String(ex || "").trim()
              if (str && !examples.includes(str) && examples.length < 4) {
                examples.push(str)
              }
            })
          }
        })
      }
    })
  }

  // Parse Wiktionary HTML for authentic Etymology and Derived / Related terms (Cognates)
  let etymology = ""
  const cognates: string[] = []

  if (wHtml) {
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(wHtml, "text/html")
      const headings = Array.from(doc.querySelectorAll("h2, h3, h4, h5"))

      // Find English section
      const enHeading = headings.find((h) => (h.textContent || "").trim().toLowerCase() === "english")
      const enScope = enHeading ? enHeading.closest("section") || enHeading.parentElement || doc.body : doc.body

      // 1. Etymology
      const etymHeading = Array.from(enScope.querySelectorAll("h3, h4, h5")).find((h) =>
        /etymology/i.test(h.textContent || "")
      )
      if (etymHeading) {
        const parentSec = etymHeading.closest("section") || etymHeading.parentElement
        if (parentSec) {
          const paragraphs = Array.from(parentSec.querySelectorAll("p"))
          for (const p of paragraphs) {
            const txt = (p.textContent || "").trim()
            if (
              txt.length > 15 &&
              !txt.startsWith("Pronunciation") &&
              !txt.startsWith("Rhymes") &&
              !txt.startsWith("IPA")
            ) {
              etymology = txt
              break
            }
          }
        }
      }

      // 2. Genuine Cognates & Derived / Related terms (strict single-word morphological terms)
      const relatedCandidates: string[] = []
      const derivedCandidates: string[] = []

      const termHeadings = Array.from(enScope.querySelectorAll("h3, h4, h5, h6"))
      termHeadings.forEach((th) => {
        const text = (th.textContent || "").trim().toLowerCase()
        const isRel = text.includes("related terms")
        const isDer = text.includes("derived terms")
        if (isRel || isDer) {
          const sec = th.closest("section") || th.parentElement
          if (sec) {
            sec.querySelectorAll("li a, ul a").forEach((a) => {
              const rawTerm = (a.textContent || "").trim()
              // Strict filter: purely alphabetical single word, 3-18 chars, no spaces, no hyphens, no digits
              if (/^[a-zA-Z]{3,18}$/.test(rawTerm)) {
                const termLower = rawTerm.toLowerCase()
                // Avoid proper nouns (capitalized word when search term is lowercase)
                const isProper =
                  rawTerm[0] === rawTerm[0].toUpperCase() &&
                  rawTerm[0] !== rawTerm[0].toLowerCase() &&
                  word[0] === word[0].toLowerCase()
                if (termLower !== word && !isProper) {
                  const target = isRel ? relatedCandidates : derivedCandidates
                  if (!target.includes(termLower)) {
                    target.push(termLower)
                  }
                }
              }
            })
          }
        }
      })

      // Prioritize words containing or contained in the base word (morphological family), then related, then derived
      const combined = [...relatedCandidates, ...derivedCandidates]
      const score = (w: string) => {
        if (w.includes(word) || word.includes(w)) return 0
        return 1
      }
      combined.sort((a, b) => score(a) - score(b) || a.length - b.length)

      combined.forEach((w) => {
        if (!cognates.includes(w) && cognates.length < 14) {
          cognates.push(w)
        }
      })
    } catch (e) {
      console.warn("[Lexicon] HTML parse fallback:", e)
    }
  }

  // Fallback cognates / trigger words if Wiktionary had none
  if (cognates.length === 0 && Array.isArray(dWords)) {
    dWords.forEach((item: any) => {
      const w = String(item.word || "").toLowerCase().trim()
      if (w !== word && /^[a-zA-Z]{3,18}$/.test(w) && !cognates.includes(w) && cognates.length < 8) {
        cognates.push(w)
      }
    })
  }

  const result: LexiconData = {
    word,
    mainTranslation,
    posList,
    etymology: etymology.slice(0, 800),
    cognates,
    examples,
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

    // Make Draggable on PC (Mouse Drag via Header)
    let isDragging = false
    let dragStartX = 0
    let dragStartY = 0
    let cardStartLeft = 0
    let cardStartTop = 0

    card.addEventListener("mousedown", (e) => {
      const target = e.target as HTMLElement
      const header = target.closest(".lex-card-header")
      if (!header || target.closest("input, button, a, form")) return
      if (e.button !== 0) return

      isDragging = true
      dragStartX = e.clientX
      dragStartY = e.clientY

      const rect = card!.getBoundingClientRect()
      cardStartLeft = rect.left
      cardStartTop = rect.top

      card!.style.right = "auto"
      card!.style.bottom = "auto"
      card!.style.left = `${cardStartLeft}px`
      card!.style.top = `${cardStartTop}px`
      card!.classList.add("is-dragging")

      const onMouseMove = (ev: MouseEvent) => {
        if (!isDragging) return
        const dx = ev.clientX - dragStartX
        const dy = ev.clientY - dragStartY
        const maxLeft = Math.max(10, window.innerWidth - card!.offsetWidth - 10)
        const maxTop = Math.max(10, window.innerHeight - card!.offsetHeight - 10)
        const newLeft = Math.max(10, Math.min(maxLeft, cardStartLeft + dx))
        const newTop = Math.max(10, Math.min(maxTop, cardStartTop + dy))
        card!.style.left = `${newLeft}px`
        card!.style.top = `${newTop}px`
      }

      const onMouseUp = () => {
        isDragging = false
        card!.classList.remove("is-dragging")
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseup", onMouseUp)
      }

      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseup", onMouseUp)
    })

    // Corner Resize Grip Drag
    card.addEventListener("mousedown", (e) => {
      const target = e.target as HTMLElement
      if (!target.closest(".lex-resize-grip")) return
      e.preventDefault()

      const startWidth = card!.offsetWidth
      const startHeight = card!.offsetHeight
      const startX = e.clientX
      const startY = e.clientY

      const onResizeMove = (ev: MouseEvent) => {
        const newW = Math.max(300, Math.min(window.innerWidth - 20, startWidth + (ev.clientX - startX)))
        const newH = Math.max(260, Math.min(window.innerHeight - 20, startHeight + (ev.clientY - startY)))
        card!.style.width = `${newW}px`
        card!.style.height = `${newH}px`
      }

      const onResizeUp = () => {
        document.removeEventListener("mousemove", onResizeMove)
        document.removeEventListener("mouseup", onResizeUp)
      }

      document.addEventListener("mousemove", onResizeMove)
      document.addEventListener("mouseup", onResizeUp)
    })

    // Click outside to close (ignoring action pill, cognates, or status badge)
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      if (
        activeLexiconCard &&
        activeLexiconCard.style.display !== "none" &&
        !activeLexiconCard.contains(target) &&
        !target.closest(".lex-action-pill") &&
        !target.closest(".lex-cognate-pill") &&
        !target.closest(".lexicon-status-badge")
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

function formatLexiconMarkdown(data: LexiconData): string {
  const parts: string[] = []
  parts.push(`## ${data.word}` + (data.mainTranslation ? ` — ${data.mainTranslation}` : ""))
  parts.push("")
  if (data.posList && data.posList.length > 0) {
    parts.push("### Sözcük Türleri & Anlamlar")
    data.posList.forEach((p) => {
      parts.push(`- **${p.posTr}:** ${p.meanings.join(", ")}`)
    })
    parts.push("")
  }
  if (data.etymology) {
    parts.push("### Köken & Etimoloji")
    parts.push(data.etymology)
    parts.push("")
  }
  if (data.cognates && data.cognates.length > 0) {
    parts.push("### Aynı Kökten Kelimeler (Word Family)")
    parts.push(data.cognates.join(", "))
    parts.push("")
  }
  if (data.examples && data.examples.length > 0) {
    parts.push("### Örnek Cümleler")
    data.examples.forEach((ex) => {
      parts.push(`- ${ex.replace(/<[^>]+>/g, "").trim()}`)
    })
    parts.push("")
  }
  return parts.join("\n").trim()
}

async function showLexiconInspector(rawWord: string) {
  const word = rawWord.trim().replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, "")
  if (word.length < 2) return

  const card = ensureLexiconCard()
  activeLexiconCard = card
  card.style.display = "flex"

  // Render Skeleton Header & Loading State
  card.innerHTML = `
    <div class="lex-card-header">
      <div class="lex-header-left">
        <div class="lex-drag-indicator" title="Pencereyi taşımak için sürükleyin">${FA_ICONS.grip}</div>
        <form class="lex-search-form">
          <input type="text" class="lex-search-input" value="${escapeHtml(word)}" placeholder="Kelime ara veya düzenle..." />
          <button type="submit" class="lex-search-btn" title="Kelimeyi Ara">${FA_ICONS.search}</button>
        </form>
        <button type="button" class="lex-header-icon-btn lex-audio-btn" title="Telaffuzu Dinle">${FA_ICONS.volume}</button>
        <button type="button" class="lex-header-icon-btn lex-copy-btn" title="Bilgileri Kopyala">${FA_ICONS.copy}</button>
      </div>
      <div class="lex-header-right">
        <button type="button" class="lex-close-btn" title="Kapat">${FA_ICONS.close}</button>
      </div>
    </div>
    <div class="lex-card-body">
      <div class="lex-loading">
        <div class="lex-spinner"></div>
        <span>"${escapeHtml(word)}" araştırılıyor...</span>
      </div>
    </div>
    <div class="lex-resize-grip" title="Yeniden boyutlandırmak için sürükleyin">${FA_ICONS.resize}</div>
  `

  // Attach search form submit to allow editing & re-searching directly in panel
  const searchForm = card.querySelector(".lex-search-form") as HTMLFormElement
  const searchInput = card.querySelector(".lex-search-input") as HTMLInputElement
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const newWord = searchInput.value.trim()
      if (newWord) showLexiconInspector(newWord)
    })
  }

  // Audio button
  const audioBtn = card.querySelector(".lex-audio-btn") as HTMLButtonElement
  if (audioBtn) {
    audioBtn.addEventListener("click", () => speakWord(word))
  }

  // Copy button
  const copyBtn = card.querySelector(".lex-copy-btn") as HTMLButtonElement
  let currentLoadedData: LexiconData | null = null
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      if (!currentLoadedData) return
      const textToCopy = formatLexiconMarkdown(currentLoadedData)
      try {
        await navigator.clipboard.writeText(textToCopy)
        copyBtn.innerHTML = FA_ICONS.circleCheck
        copyBtn.classList.add("btn-copied")
        copyBtn.setAttribute("title", "Kopyalandı!")
        setTimeout(() => {
          copyBtn.innerHTML = FA_ICONS.copy
          copyBtn.classList.remove("btn-copied")
          copyBtn.setAttribute("title", "Bilgileri Kopyala")
        }, 1800)
      } catch (err) {
        console.error("[Lexicon] Copy error:", err)
      }
    })
  }

  // Close button
  const closeBtn = card.querySelector(".lex-close-btn") as HTMLButtonElement
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLexiconInspector)
  }

  try {
    const data = await fetchLexiconData(word)
    currentLoadedData = data

    // If user edited/searched another word while this was loading, discard stale response
    if (searchInput && searchInput.value.trim().toLowerCase() !== word.toLowerCase()) {
      return
    }

    // 1. POS list HTML
    let posHtml = ""
    if (data.posList.length > 0) {
      posHtml = `
        <div class="lex-section">
          <div class="lex-section-title">${FA_ICONS.tag} Sözcük Türleri & Türkçe Karşılıkları</div>
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
          <div class="lex-section-title">${FA_ICONS.tag} Türkçe Karşılığı</div>
          <div class="lex-main-badge">${escapeHtml(data.mainTranslation)}</div>
        </div>
      `
    }

    // 2. Etymology HTML (Genuine Wiktionary etymology)
    let etymologyHtml = ""
    if (data.etymology) {
      etymologyHtml = `
        <div class="lex-section">
          <div class="lex-section-title">${FA_ICONS.landmark} Köken & Etimoloji (Wiktionary)</div>
          <p class="lex-etymology-text">${escapeHtml(data.etymology)}</p>
        </div>
      `
    } else {
      etymologyHtml = `
        <div class="lex-section">
          <div class="lex-section-title">${FA_ICONS.landmark} Köken & Etimoloji</div>
          <p class="lex-etymology-text lex-text-muted">Bu sözcük için doğrudan etimoloji kaydı bulunamadı. Aşağıdaki Etymonline veya Wiktionary bağlantılarından detaylı inceleyebilirsiniz.</p>
        </div>
      `
    }

    // 3. Cognates & Word Family HTML (Genuine derivations & related terms)
    let cognatesHtml = ""
    if (data.cognates.length > 0) {
      cognatesHtml = `
        <div class="lex-section">
          <div class="lex-section-title">${FA_ICONS.codeBranch} Aynı Kökten Kelimeler (Word Family)</div>
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

    // 4. Context Sentences HTML (Genuine examples)
    let examplesHtml = ""
    if (data.examples.length > 0) {
      const reg = new RegExp(`\\b(${escapeHtml(word)})\\b`, "gi")
      examplesHtml = `
        <div class="lex-section lex-examples-section">
          <div class="lex-section-title">${FA_ICONS.quote} Cümle İçi Örnekler</div>
          <div class="lex-examples-list">
            ${data.examples
              .map((ex) => {
                const clean = ex.replace(/<[^>]+>/g, "")
                const highlighted = clean.replace(reg, `<strong class="lex-highlight">$1</strong>`)
                return `<div class="lex-example-item">${highlighted}</div>`
              })
              .join("")}
          </div>
        </div>
      `
    }

    // 5. External Quick Links (Matching pp & oo tool sources)
    const linksHtml = `
      <div class="lex-section lex-links-section">
        <a href="https://tureng.com/en/turkish-english/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">
          <span>Tureng (pp)</span> ${FA_ICONS.externalLink}
        </a>
        <a href="https://sentence.yourdictionary.com/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">
          <span>YourDictionary (pp)</span> ${FA_ICONS.externalLink}
        </a>
        <a href="https://www.etymonline.com/word/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">
          <span>Etymonline (oo)</span> ${FA_ICONS.externalLink}
        </a>
        <a href="https://en.wiktionary.org/wiki/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">
          <span>Wiktionary</span> ${FA_ICONS.externalLink}
        </a>
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
        ${examplesHtml}
        ${linksHtml}
      `

      // Add click listeners to cognate pills to immediately inspect selected word
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
          <p>${FA_ICONS.circleExclamation} Bilgiler alınırken bir sorun oluştu.</p>
          <div class="lex-links-section">
            <a href="https://www.etymonline.com/word/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Etymonline'da Ara ${FA_ICONS.externalLink}</a>
            <a href="https://tureng.com/en/turkish-english/${encodeURIComponent(word)}" target="_blank" rel="noopener noreferrer" class="lex-ext-link">Tureng'de Ara ${FA_ICONS.externalLink}</a>
          </div>
        </div>
      `
    }
  }
}

// ----------------------------------------------------
// Context Menu & Long-Press Floating Action Pill
// ----------------------------------------------------

function ensureActionPill(): HTMLElement {
  let pill = document.getElementById("lex-action-pill")
  if (!pill) {
    pill = document.createElement("div")
    pill.id = "lex-action-pill"
    pill.className = "lex-action-pill"
    pill.style.display = "none"
    pill.innerHTML = `
      <button type="button" class="lex-pill-btn">
        ${FA_ICONS.search}
        <span>Kelimeye Bak: <strong class="lex-pill-word"></strong></span>
      </button>
    `
    document.body.appendChild(pill)
    activeActionPill = pill

    const btn = pill.querySelector(".lex-pill-btn") as HTMLButtonElement
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const word = pill!.getAttribute("data-word")
      hideActionPill()
      if (word) {
        showLexiconInspector(word)
      }
    })

    document.addEventListener("click", (e) => {
      if (pill && pill.style.display !== "none" && !pill.contains(e.target as HTMLElement)) {
        hideActionPill()
      }
    })
  }
  return pill
}

function showActionPill(word: string, clientX: number, clientY: number) {
  const pill = ensureActionPill()
  pill.setAttribute("data-word", word)
  const wordEl = pill.querySelector(".lex-pill-word")
  if (wordEl) wordEl.textContent = word

  // Calculate position keeping within viewport boundaries
  const pillWidth = 210
  const pillHeight = 44
  const posX = Math.max(10, Math.min(window.innerWidth - pillWidth - 10, clientX + 8))
  const posY = Math.max(10, Math.min(window.innerHeight - pillHeight - 10, clientY - 48))

  pill.style.left = `${posX}px`
  pill.style.top = `${posY}px`
  pill.style.display = "block"
}

function hideActionPill() {
  const pill = document.getElementById("lex-action-pill")
  if (pill) pill.style.display = "none"
}

function getWordAtCoordinates(x: number, y: number): string | null {
  // 1. Check if user selected/highlighted text
  const selection = window.getSelection()?.toString().trim()
  if (selection && /^[a-zA-Z'-]{2,30}$/.test(selection)) {
    return selection
  }

  // 2. Fallback: Find word under mouse/touch point
  let range: Range | null = null
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(x, y)
  } else if ((document as any).caretPositionFromPoint) {
    const pos = (document as any).caretPositionFromPoint(x, y)
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
  while (start > 0 && /[a-zA-Z'-]/.test(text[start - 1])) {
    start--
  }
  let end = offset
  while (end < text.length && /[a-zA-Z'-]/.test(text[end])) {
    end++
  }
  const raw = text.slice(start, end).replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, "").trim()
  return raw.length >= 2 ? raw : null
}

function initLexiconInspector() {
  const marker = document.querySelector(".interactive-lexicon-page-marker[data-active='true']")
  if (!marker) {
    closeLexiconInspector()
    hideActionPill()
    document.querySelectorAll(".lexicon-status-badge").forEach((el) => el.remove())
    return
  }

  const article = document.querySelector("article")
  if (!article || article.hasAttribute("data-lexicon-initialized")) return
  article.setAttribute("data-lexicon-initialized", "true")

  // 1. Right Click (Context Menu) on PC
  article.addEventListener("contextmenu", (e) => {
    const target = e.target as HTMLElement
    if (target.closest(".interactive-quiz-widget, .interactive-puzzle-widget, #lexicon-inspector-card, input, button")) {
      return
    }

    const word = getWordAtCoordinates(e.clientX, e.clientY)
    if (word && /^[a-zA-Z'-]{2,}$/.test(word)) {
      e.preventDefault()
      showActionPill(word, e.clientX, e.clientY)
    }
  })

  // 2. Long Press on Mobile (450ms touchhold)
  let touchTimer: number | null = null
  let touchStartX = 0
  let touchStartY = 0

  article.addEventListener(
    "touchstart",
    (e) => {
      const target = e.target as HTMLElement
      if (target.closest(".interactive-quiz-widget, .interactive-puzzle-widget, #lexicon-inspector-card, button, a, input")) {
        return
      }
      if (e.touches.length !== 1) return

      const t = e.touches[0]
      touchStartX = t.clientX
      touchStartY = t.clientY

      if (touchTimer) clearTimeout(touchTimer)
      touchTimer = window.setTimeout(() => {
        const word = getWordAtCoordinates(touchStartX, touchStartY)
        if (word && /^[a-zA-Z'-]{2,}$/.test(word)) {
          showActionPill(word, touchStartX, touchStartY)
        }
      }, 450)
    },
    { passive: true }
  )

  article.addEventListener(
    "touchmove",
    (e) => {
      if (touchTimer && e.touches.length === 1) {
        const t = e.touches[0]
        const dist = Math.hypot(t.clientX - touchStartX, t.clientY - touchStartY)
        if (dist > 10) {
          clearTimeout(touchTimer)
          touchTimer = null
        }
      }
    },
    { passive: true }
  )

  article.addEventListener("touchend", () => {
    if (touchTimer) {
      clearTimeout(touchTimer)
      touchTimer = null
    }
  })

  article.addEventListener("touchcancel", () => {
    if (touchTimer) {
      clearTimeout(touchTimer)
      touchTimer = null
    }
  })

  // 3. Add floating status badge in bottom-right corner (Clean FontAwesome icon, no emoji)
  if (!document.querySelector(".lexicon-status-badge")) {
    const badge = document.createElement("div")
    badge.className = "lexicon-status-badge"
    badge.title = "Kelime & Köken Atlası bu sayfada aktif. Sağ tıklayarak veya basılı tutarak 'Kelimeye Bak' ile inceleyebilirsiniz."
    badge.innerHTML = `<span class="lex-pulse-dot"></span>${FA_ICONS.book}<span>Kelime Atlası</span>`
    badge.addEventListener("click", () => {
      showLexiconInspector("programming")
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

