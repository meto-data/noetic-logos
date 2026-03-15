interface Window {
  __noeticAnnotation?: { cleanup: () => void }
  __noeticToast?: (message: string, type?: "info" | "success" | "warning") => void
}

window.__noeticAnnotation?.cleanup()

const HIGHLIGHT_COLORS = [
  { name: "sarı", css: "rgba(250, 204, 21, 0.4)" },
  { name: "yeşil", css: "rgba(74, 222, 128, 0.35)" },
  { name: "mavi", css: "rgba(96, 165, 250, 0.35)" },
  { name: "mor", css: "rgba(192, 132, 252, 0.35)" },
  { name: "kırmızı", css: "rgba(248, 113, 113, 0.35)" },
  { name: "turuncu", css: "rgba(251, 146, 60, 0.35)" },
  { name: "pembe", css: "rgba(244, 114, 182, 0.35)" },
  { name: "gri", css: "rgba(148, 163, 184, 0.35)" },
]

interface HighlightData {
  text: string
  color: string
  slug: string
  context: string
}

function getSlug(): string {
  return document.body.getAttribute("data-slug") || window.location.pathname
}

function getStorageKey(): string {
  return `noetic-highlights-${getSlug()}`
}

function loadHighlights(): HighlightData[] {
  try {
    return JSON.parse(localStorage.getItem(getStorageKey()) || "[]")
  } catch {
    return []
  }
}

function saveHighlights(highlights: HighlightData[]) {
  localStorage.setItem(getStorageKey(), JSON.stringify(highlights))
}

function getTextNodesIn(range: Range): Text[] {
  const nodes: Text[] = []
  const container = range.commonAncestorContainer

  if (container.nodeType === Node.TEXT_NODE) {
    nodes.push(container as Text)
    return nodes
  }

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode())) {
    if (range.intersectsNode(node)) {
      nodes.push(node as Text)
    }
  }
  return nodes
}

function wrapTextNodes(range: Range, color: string, fullText: string, context: string): HTMLElement[] {
  const textNodes = getTextNodesIn(range)
  const spans: HTMLElement[] = []

  for (const textNode of textNodes) {
    const text = textNode.textContent || ""
    if (!text.trim()) continue

    let startOffset = 0
    let endOffset = text.length

    if (textNode === range.startContainer) startOffset = range.startOffset
    if (textNode === range.endContainer) endOffset = range.endOffset

    if (startOffset >= endOffset) continue

    const before = text.slice(0, startOffset)
    const selected = text.slice(startOffset, endOffset)
    const after = text.slice(endOffset)

    const parent = textNode.parentNode
    if (!parent) continue

    const span = document.createElement("span")
    span.className = "noetic-highlight"
    span.setAttribute("data-color", color)
    span.setAttribute("data-hl-id", fullText.slice(0, 40))
    span.textContent = selected
    span.addEventListener("click", (e) => {
      e.stopPropagation()
      showHighlightToolbar(e.clientX, e.clientY, fullText, color, context)
    })

    if (before) parent.insertBefore(document.createTextNode(before), textNode)
    parent.insertBefore(span, textNode)
    if (after) parent.insertBefore(document.createTextNode(after), textNode)
    parent.removeChild(textNode)

    spans.push(span)
  }
  return spans
}

function findAndHighlightText(root: Node, searchText: string, color: string, context: string): boolean {
  const fullText = root.textContent || ""
  const idx = fullText.indexOf(searchText)
  if (idx === -1) return false

  const range = document.createRange()
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let charCount = 0
  let startSet = false
  let node: Node | null

  while ((node = walker.nextNode())) {
    const len = (node.textContent || "").length
    if (!startSet && charCount + len > idx) {
      range.setStart(node, idx - charCount)
      startSet = true
    }
    if (startSet && charCount + len >= idx + searchText.length) {
      range.setEnd(node, idx + searchText.length - charCount)
      break
    }
    charCount += len
  }

  if (!startSet) return false

  const spans = wrapTextNodes(range, color, searchText, context)
  return spans.length > 0
}

function restoreHighlights() {
  const article = document.querySelector("article")
  if (!article) return

  const highlights = loadHighlights()
  for (const hl of highlights) {
    findAndHighlightText(article, hl.text, hl.color, hl.context)
  }
}

let activeToolbar: HTMLElement | null = null

function removeToolbar() {
  activeToolbar?.remove()
  activeToolbar = null
}

function showHighlightToolbar(x: number, y: number, fullText?: string, currentColor?: string, context?: string) {
  removeToolbar()

  const toolbar = document.createElement("div")
  toolbar.className = "noetic-highlight-toolbar"

  for (const c of HIGHLIGHT_COLORS) {
    const btn = document.createElement("button")
    btn.className = "hl-color"
    btn.type = "button"
    btn.style.backgroundColor = c.css
    btn.title = c.name
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      if (fullText && currentColor) {
        updateHighlightColor(fullText, c.name)
        document.querySelectorAll(`.noetic-highlight[data-hl-id="${fullText.slice(0, 40)}"]`).forEach(el => {
          el.setAttribute("data-color", c.name)
        })
      } else {
        createHighlightFromSelection(c.name)
      }
      removeToolbar()
    })
    toolbar.appendChild(btn)
  }

  if (fullText && currentColor) {
    const removeBtn = document.createElement("button")
    removeBtn.className = "hl-remove"
    removeBtn.type = "button"
    removeBtn.textContent = "✕"
    removeBtn.title = "Vurguyu Kaldır"
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      removeHighlight(fullText)
      removeToolbar()
    })
    toolbar.appendChild(removeBtn)
  }

  document.body.appendChild(toolbar)
  activeToolbar = toolbar

  const rect = toolbar.getBoundingClientRect()
  let fx = x - rect.width / 2
  let fy = y - rect.height - 10
  if (fx < 8) fx = 8
  if (fx + rect.width > window.innerWidth - 8) fx = window.innerWidth - rect.width - 8
  if (fy < 8) fy = y + 20
  toolbar.style.left = `${fx}px`
  toolbar.style.top = `${fy}px`
}

function createHighlightFromSelection(color: string) {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return

  const range = selection.getRangeAt(0)
  const text = selection.toString().trim()
  if (!text) return

  const ancestor = range.commonAncestorContainer
  const parentEl = ancestor.nodeType === Node.TEXT_NODE ? ancestor.parentElement : ancestor as HTMLElement
  const context = parentEl?.textContent?.slice(0, 60) || ""

  const spans = wrapTextNodes(range, color, text, context)
  if (spans.length > 0) {
    const highlights = loadHighlights()
    highlights.push({ text, color, slug: getSlug(), context })
    saveHighlights(highlights)
    window.__noeticToast?.("Metin vurgulandı", "success")
  }

  selection.removeAllRanges()
}

function updateHighlightColor(text: string, newColor: string) {
  const highlights = loadHighlights()
  const found = highlights.find(h => h.text === text)
  if (found) {
    found.color = newColor
    saveHighlights(highlights)
  }
}

function removeHighlight(text: string) {
  const id = text.slice(0, 40)
  document.querySelectorAll(`.noetic-highlight[data-hl-id="${id}"]`).forEach(span => {
    const parent = span.parentNode
    if (parent) {
      while (span.firstChild) parent.insertBefore(span.firstChild, span)
      parent.removeChild(span)
      parent.normalize()
    }
  })

  const highlights = loadHighlights().filter(h => h.text !== text)
  saveHighlights(highlights)
  window.__noeticToast?.("Vurgu kaldırıldı", "info")
}

function tryShowToolbar() {
  const selection = window.getSelection()
  const text = selection?.toString()?.trim()
  if (!text || text.length < 2 || !selection || selection.rangeCount === 0) return
  const range = selection.getRangeAt(0)
  const rect = range.getBoundingClientRect()
  if (rect.width === 0 && rect.height === 0) return
  showHighlightToolbar(rect.left + rect.width / 2, rect.top)
}

function handleMouseUp(e: MouseEvent) {
  if ((e.target as HTMLElement)?.closest(".noetic-highlight-toolbar")) return
  setTimeout(tryShowToolbar, 200)
}

function handleTouchEnd(e: TouchEvent) {
  if ((e.target as HTMLElement)?.closest(".noetic-highlight-toolbar")) return
  setTimeout(tryShowToolbar, 400)
}

function handleSelectionChange() {
  const selection = window.getSelection()
  const text = selection?.toString()?.trim()
  if (!text || text.length < 2) {
    removeToolbar()
  }
}

function handleClick(e: MouseEvent) {
  if (!(e.target as HTMLElement)?.closest(".noetic-highlight-toolbar")) {
    removeToolbar()
  }
}

function handleNav() {
  removeToolbar()
  requestAnimationFrame(restoreHighlights)
}

document.addEventListener("mouseup", handleMouseUp)
document.addEventListener("touchend", handleTouchEnd)
document.addEventListener("selectionchange", handleSelectionChange)
document.addEventListener("click", handleClick)
document.addEventListener("nav", handleNav)
handleNav()

window.__noeticAnnotation = {
  cleanup: () => {
    removeToolbar()
    document.removeEventListener("mouseup", handleMouseUp)
    document.removeEventListener("touchend", handleTouchEnd)
    document.removeEventListener("selectionchange", handleSelectionChange)
    document.removeEventListener("click", handleClick)
    document.removeEventListener("nav", handleNav)
  },
}
