interface Window {
  __noeticSelectionAssistant?: { cleanup: () => void }
}

type ActionType = "copy" | "share" | "chatgpt" | "gemini" | "copyPrompt"

type PromptPayload = {
  prompt: string
  focusText: string
  charCount: number
}

const CHATGPT_URL = "https://chatgpt.com/"
const GEMINI_URL = "https://gemini.google.com/app"
const DESKTOP_BREAKPOINT = 800
const MAX_PAGE_CONTEXT_CHARS = 14000
const MAX_SHARE_CONTEXT_CHARS = 6000
const MAX_MERMAID_BLOCKS = 4
const RECENT_CACHE_KEY = "noetic-offline-recent"
const MAX_RECENT_URLS = 24

window.__noeticSelectionAssistant?.cleanup()

let selectionAssistantCleanup = () => {}

function normalizeWhitespace(text: string) {
  return text
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function isMobileViewport() {
  return window.innerWidth < DESKTOP_BREAKPOINT
}

function isEditableTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    !!target.closest("input, textarea, select, [contenteditable='true']")
  )
}

function getArticleFromTarget(target: EventTarget | null) {
  if (!(target instanceof Node)) return null
  const article = target instanceof Element ? target.closest(".center article") : null
  return article as HTMLElement | null
}

function getSelectionData() {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    return null
  }

  const text = normalizeWhitespace(selection.toString())
  if (!text) return null

  const range = selection.getRangeAt(0)
  const article = getArticleFromTarget(range.commonAncestorContainer)
  if (!article) return null

  const rect = range.getBoundingClientRect()
  if (rect.width === 0 && rect.height === 0) return null

  return { selection, range, article, text, rect }
}

function getBlockText(target: HTMLElement | null) {
  if (!target) return ""

  const block = target.closest(
    "p, li, blockquote, td, th, pre, figcaption, summary, details, h1, h2, h3, h4, h5, h6",
  ) as HTMLElement | null

  return normalizeWhitespace(block?.innerText ?? "")
}

function getCurrentArticle() {
  return document.querySelector(".center article") as HTMLElement | null
}

function getCurrentTitle(article: HTMLElement | null) {
  const heading = article?.querySelector(
    "h1.article-title, h1, h2.article-title, h2",
  ) as HTMLElement | null
  return normalizeWhitespace(heading?.innerText ?? document.title)
}

function getCurrentUrl() {
  return window.location.href
}

function getNearestHeading(article: HTMLElement, anchorRect: DOMRect) {
  const headings = [...article.querySelectorAll("h1, h2, h3, h4, h5, h6")] as HTMLElement[]
  let currentHeading = ""

  for (const heading of headings) {
    const rect = heading.getBoundingClientRect()
    if (rect.top <= anchorRect.top + 8) {
      currentHeading = normalizeWhitespace(heading.innerText)
      continue
    }
    break
  }

  return currentHeading
}

function getMermaidSources(article: HTMLElement) {
  return [...article.querySelectorAll("code.mermaid")]
    .map((node) => {
      const el = node as HTMLElement
      return normalizeWhitespace(el.dataset.mermaidSource ?? el.innerText ?? "")
    })
    .filter(Boolean)
    .slice(0, MAX_MERMAID_BLOCKS)
}

function getPageContext(article: HTMLElement, maxChars: number) {
  return normalizeWhitespace(article.innerText).slice(0, maxChars)
}

function buildPromptPayload(
  article: HTMLElement,
  anchorRect: DOMRect,
  focusText: string,
  maxChars: number,
): PromptPayload {
  const title = getCurrentTitle(article)
  const pageUrl = getCurrentUrl()
  const sectionHeading = getNearestHeading(article, anchorRect)
  const pageContext = getPageContext(article, maxChars)
  const mermaidSources = getMermaidSources(article)

  const promptParts = [
    "Aşağıdaki not içeriğini bağlam olarak kullanarak Türkçe cevap ver.",
    "Önce seçili/paragraf metnini açıkla, sonra sayfanın genel bağlamındaki yerini özetle.",
    "Mermaid diyagramları varsa onları da yorumuna dahil et.",
    "",
    `Sayfa başlığı: ${title}`,
    `Sayfa bağlantısı: ${pageUrl}`,
    sectionHeading ? `İlgili bölüm: ${sectionHeading}` : "",
    focusText ? `Seçili veya hedef metin:\n"""${focusText}"""` : "",
    `Sayfa bağlamı:\n${pageContext}`,
    mermaidSources.length > 0
      ? `Mermaid diyagramları:\n${mermaidSources
          .map((source) => `\`\`\`mermaid\n${source}\n\`\`\``)
          .join("\n\n")}`
      : "",
  ].filter(Boolean)

  return {
    prompt: promptParts.join("\n\n"),
    focusText,
    charCount: focusText.length || pageContext.length,
  }
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer")
}

const svgIcons = {
  copy: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>`,
  ai: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.39 4.85L20 9.27l-4 3.9.94 5.48L12 16.77l-4.94 1.88.94-5.48-4-3.9 5.61-2.42L12 2z"></path></svg>`,
  chatgpt: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a4.6 4.6 0 014.29 2.95 4.6 4.6 0 015.43 5.99 4.6 4.6 0 01-1.12 8.53 4.6 4.6 0 01-7.48 2.73 4.6 4.6 0 01-6.24-.8 4.6 4.6 0 01-4.7-7.35A4.6 4.6 0 015.6 5.13 4.58 4.58 0 0112 2zm-4.17 8.5l3.08 1.78 1.09-.63-3.08-1.78a2.36 2.36 0 00-1.09-3.16 2.36 2.36 0 00-2.37.05 2.36 2.36 0 00-.01 4.09 2.36 2.36 0 002.38-.35zm8.34 0a2.36 2.36 0 002.38.35 2.36 2.36 0 00-.01-4.09 2.36 2.36 0 00-2.37-.05 2.36 2.36 0 00-1.09 3.16l-3.08 1.78 1.09.63 3.08-1.78zm-1.08 5.9L12 14.62l-3.09 1.79a2.36 2.36 0 00-2.38-.35 2.36 2.36 0 00.01 4.09 2.36 2.36 0 002.37.05 2.36 2.36 0 001.09-3.16l3.09-1.79 1.08.63a2.36 2.36 0 001.09 3.16 2.36 2.36 0 002.37-.05 2.36 2.36 0 00.01-4.09 2.36 2.36 0 00-2.38.35z"></path></svg>`,
  gemini: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.98 5.52L19.5 9.5l-5.52 1.98L12 17l-1.98-5.52L4.5 9.5l5.52-1.98L12 2zm7 10l.96 2.54L22.5 15.5l-2.54.96L19 19l-.96-2.54L15.5 15.5l2.54-.96L19 12zM6 14l1.1 2.9L10 18l-2.9 1.1L6 22l-1.1-2.9L2 18l2.9-1.1L6 14z"></path></svg>`,
} as const

type MenuState = {
  root: HTMLElement
  panel: HTMLElement
  title: HTMLElement
  hint: HTMLElement
  toast: HTMLElement
  visible: boolean
  mobileMode: boolean
  anchorRect: DOMRect | null
  contextTarget: HTMLElement | null
}

let menuState: MenuState | null = null
let toastTimer: number | null = null

function createMenu() {
  const root = document.createElement("div")
  root.className = "noetic-selection-menu"
  root.innerHTML = `
    <div class="noetic-selection-menu__panel" role="menu" aria-label="Noetic secim yardimcisi">
      <div class="noetic-selection-menu__meta">
        <span class="noetic-selection-menu__title">Seçili metin</span>
        <span class="noetic-selection-menu__hint">Hazır</span>
      </div>
      <div class="noetic-selection-menu__actions">
        <button type="button" class="noetic-selection-menu__button" data-action="copy">${svgIcons.copy}<span>Kopyala</span></button>
        <button type="button" class="noetic-selection-menu__button noetic-selection-menu__button--primary" data-action="share">${svgIcons.ai}<span>AI'ye Paylaş</span></button>
        <button type="button" class="noetic-selection-menu__button" data-action="chatgpt">${svgIcons.chatgpt}<span>ChatGPT</span></button>
        <button type="button" class="noetic-selection-menu__button" data-action="gemini">${svgIcons.gemini}<span>Gemini</span></button>
        <button type="button" class="noetic-selection-menu__button" data-action="copyPrompt">${svgIcons.ai}<span>Promptu Kopyala</span></button>
      </div>
    </div>
  `

  const toast = document.createElement("div")
  toast.className = "noetic-selection-toast"
  document.body.appendChild(root)
  document.body.appendChild(toast)

  const panel = root.querySelector(".noetic-selection-menu__panel") as HTMLElement
  const title = root.querySelector(".noetic-selection-menu__title") as HTMLElement
  const hint = root.querySelector(".noetic-selection-menu__hint") as HTMLElement

  menuState = {
    root,
    panel,
    title,
    hint,
    toast,
    visible: false,
    mobileMode: false,
    anchorRect: null,
    contextTarget: null,
  }

  root.addEventListener("click", async (event) => {
    const button = (event.target as HTMLElement | null)?.closest(
      "[data-action]",
    ) as HTMLButtonElement | null
    if (!button) return
    await handleAction(button.dataset.action as ActionType)
  })
}

function showToast(message: string) {
  if (!menuState) return

  if (toastTimer !== null) {
    window.clearTimeout(toastTimer)
  }

  menuState.toast.textContent = message
  menuState.toast.classList.add("visible")
  toastTimer = window.setTimeout(() => {
    menuState?.toast.classList.remove("visible")
    toastTimer = null
  }, 2200)
}

function hideMenu() {
  if (!menuState) return
  menuState.visible = false
  menuState.anchorRect = null
  menuState.root.classList.remove("visible", "mobile")
}

function positionMenu(anchorRect: DOMRect) {
  if (!menuState) return

  menuState.mobileMode = isMobileViewport()
  menuState.anchorRect = anchorRect
  menuState.root.classList.toggle("mobile", menuState.mobileMode)

  if (menuState.mobileMode) {
    menuState.root.style.left = "12px"
    menuState.root.style.top = "auto"
    return
  }

  const panelRect = menuState.panel.getBoundingClientRect()
  const top = Math.max(12, anchorRect.top - panelRect.height - 12)
  const left = Math.min(
    window.innerWidth - panelRect.width - 12,
    Math.max(12, anchorRect.left + anchorRect.width / 2 - panelRect.width / 2),
  )

  menuState.root.style.top = `${top}px`
  menuState.root.style.left = `${left}px`
}

function getPromptPayload(maxChars: number) {
  const selectionData = getSelectionData()
  const article = selectionData?.article ?? getCurrentArticle()
  if (!article) return null

  const focusText =
    selectionData?.text ||
    getBlockText(menuState?.contextTarget ?? null) ||
    getCurrentTitle(article)

  const anchorRect =
    selectionData?.rect ??
    menuState?.contextTarget?.getBoundingClientRect() ??
    article.getBoundingClientRect()

  return buildPromptPayload(article, anchorRect, focusText, maxChars)
}

async function copyText(text: string, successMessage: string) {
  try {
    await navigator.clipboard.writeText(text)
    showToast(successMessage)
  } catch (error) {
    console.error(error)
    showToast("Panoya kopyalanamadı")
  }
}

async function handleAction(action: ActionType) {
  const shortPayload = getPromptPayload(MAX_SHARE_CONTEXT_CHARS)
  const fullPayload = getPromptPayload(MAX_PAGE_CONTEXT_CHARS)
  if (!shortPayload || !fullPayload) {
    showToast("Kullanılabilir bir metin bulunamadı")
    hideMenu()
    return
  }

  switch (action) {
    case "copy":
      await copyText(shortPayload.focusText, "Metin panoya kopyalandı")
      break
    case "copyPrompt":
      await copyText(fullPayload.prompt, "AI promptu panoya kopyalandı")
      break
    case "share":
      if ("share" in navigator) {
        try {
          await navigator.share({
            title: getCurrentTitle(getCurrentArticle()),
            text: shortPayload.prompt,
            url: getCurrentUrl(),
          })
          showToast("Paylaşım paneli açıldı")
        } catch (error) {
          if ((error as Error).name !== "AbortError") {
            await copyText(shortPayload.prompt, "Paylaşım açılamadı, prompt panoya kopyalandı")
          }
        }
      } else {
        await copyText(shortPayload.prompt, "Paylaşım yok, prompt panoya kopyalandı")
      }
      break
    case "chatgpt":
      await copyText(fullPayload.prompt, "Prompt panoya kopyalandı, ChatGPT açılıyor")
      openExternal(CHATGPT_URL)
      break
    case "gemini":
      await copyText(fullPayload.prompt, "Prompt panoya kopyalandı, Gemini açılıyor")
      openExternal(GEMINI_URL)
      break
  }

  hideMenu()
}

function updateMenuCopy(selectionExists: boolean, charCount: number) {
  if (!menuState) return

  menuState.title.textContent = selectionExists ? "Seçili metin" : "Paragraf menüsü"
  menuState.hint.textContent = `${charCount} karakter`
}

function showMenuForRect(anchorRect: DOMRect, selectionExists: boolean, charCount: number) {
  if (!menuState) return

  updateMenuCopy(selectionExists, charCount)
  menuState.visible = true
  menuState.root.classList.add("visible")
  positionMenu(anchorRect)
}

function maybeShowSelectionMenu() {
  const selectionData = getSelectionData()
  if (!selectionData) return

  showMenuForRect(selectionData.rect, true, selectionData.text.length)
}

function getPrefetchUrls() {
  const urls = new Set<string>()
  urls.add(window.location.href)
  urls.add(new URL("static/contentIndex.json", window.location.href).toString())

  const article = getCurrentArticle()
  if (article) {
    const links = article.querySelectorAll("a[href]")
    for (const link of links) {
      const href = (link as HTMLAnchorElement).href
      if (!href) continue
      try {
        const url = new URL(href, window.location.href)
        if (url.origin === window.location.origin) {
          urls.add(url.toString())
        }
      } catch {}

      if (urls.size >= MAX_RECENT_URLS) break
    }
  }

  const recent = JSON.parse(localStorage.getItem(RECENT_CACHE_KEY) ?? "[]") as string[]
  for (const url of recent) {
    urls.add(url)
  }

  const nextRecent = [
    window.location.href,
    ...recent.filter((url) => url !== window.location.href),
  ].slice(0, MAX_RECENT_URLS)
  localStorage.setItem(RECENT_CACHE_KEY, JSON.stringify(nextRecent))

  return [...urls]
}

async function requestOfflineCache() {
  if (!("serviceWorker" in navigator)) return

  const urls = getPrefetchUrls()
  const registration = await navigator.serviceWorker.ready.catch(() => null)
  const worker = navigator.serviceWorker.controller ?? registration?.active
  worker?.postMessage({ type: "CACHE_URLS", urls })
}

function handleSelectionContextMenu(event: MouseEvent) {
  if (isEditableTarget(event.target)) return

  const article = getArticleFromTarget(event.target)
  if (!article) return

  event.preventDefault()

  menuState!.contextTarget = event.target as HTMLElement
  const selectionData = getSelectionData()
  const anchorRect = selectionData?.rect ?? new DOMRect(event.clientX, event.clientY, 1, 1)
  const charCount = selectionData?.text.length || getBlockText(menuState!.contextTarget).length || 0

  showMenuForRect(anchorRect, !!selectionData, charCount)
}

function handlePointerDown(event: PointerEvent) {
  if (!menuState?.visible) return
  if ((event.target as HTMLElement | null)?.closest(".noetic-selection-menu")) return
  hideMenu()
}

function handlePointerUp() {
  window.setTimeout(() => {
    if (!menuState?.visible || menuState.mobileMode) {
      maybeShowSelectionMenu()
    }
  }, 30)
}

function handleTouchEnd() {
  window.setTimeout(() => {
    maybeShowSelectionMenu()
  }, 60)
}

function handleSelectionChange() {
  if (!menuState) return

  const selectionData = getSelectionData()
  if (!selectionData && !menuState.visible) {
    return
  }

  if (!selectionData && menuState.visible && !menuState.contextTarget) {
    hideMenu()
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === "Escape") {
    hideMenu()
  }
}

function handleViewportChange() {
  if (!menuState?.visible || !menuState.anchorRect) return
  positionMenu(menuState.anchorRect)
}

function handleNavSelectionAssistant() {
  hideMenu()
  menuState!.contextTarget = null
  requestAnimationFrame(() => {
    requestOfflineCache().catch((error) => console.error(error))
  })
}

createMenu()

document.addEventListener("contextmenu", handleSelectionContextMenu)
document.addEventListener("pointerdown", handlePointerDown, true)
document.addEventListener("mouseup", handlePointerUp, true)
document.addEventListener("touchend", handleTouchEnd, true)
document.addEventListener("selectionchange", handleSelectionChange)
document.addEventListener("keydown", handleEscape)
document.addEventListener("nav", handleNavSelectionAssistant)
window.addEventListener("scroll", handleViewportChange, true)
window.addEventListener("resize", handleViewportChange)
requestOfflineCache().catch((error) => console.error(error))

selectionAssistantCleanup = () => {
  hideMenu()
  document.removeEventListener("contextmenu", handleSelectionContextMenu)
  document.removeEventListener("pointerdown", handlePointerDown, true)
  document.removeEventListener("mouseup", handlePointerUp, true)
  document.removeEventListener("touchend", handleTouchEnd, true)
  document.removeEventListener("selectionchange", handleSelectionChange)
  document.removeEventListener("keydown", handleEscape)
  document.removeEventListener("nav", handleNavSelectionAssistant)
  window.removeEventListener("scroll", handleViewportChange, true)
  window.removeEventListener("resize", handleViewportChange)
  menuState?.root.remove()
  menuState?.toast.remove()
}

window.__noeticSelectionAssistant = {
  cleanup: () => selectionAssistantCleanup(),
}
