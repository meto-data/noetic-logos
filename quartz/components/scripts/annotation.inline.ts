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

function findTextNode(root: Node, searchText: string, context: string): Range | null {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode())) {
    const text = node.textContent || ""
    const idx = text.indexOf(searchText)
    if (idx !== -1) {
      const parentText = node.parentElement?.textContent || ""
      if (context && !parentText.includes(context.slice(0, 30))) continue
      const range = document.createRange()
      range.setStart(node, idx)
      range.setEnd(node, idx + searchText.length)
      return range
    }
  }
  return null
}

function applyHighlight(range: Range, color: string, text: string, context: string): HTMLElement | null {
  try {
    const span = document.createElement("span")
    span.className = "noetic-highlight"
    span.setAttribute("data-color", color)
    span.setAttribute("data-text", text)
    range.surroundContents(span)

    span.addEventListener("click", (e) => {
      e.stopPropagation()
      showHighlightToolbar(e.clientX, e.clientY, span, text, context)
    })

    return span
  } catch {
    return null
  }
}

function restoreHighlights() {
  const article = document.querySelector("article")
  if (!article) return

  const highlights = loadHighlights()
  for (const hl of highlights) {
    const range = findTextNode(article, hl.text, hl.context)
    if (range) {
      applyHighlight(range, hl.color, hl.text, hl.context)
    }
  }
}

let activeToolbar: HTMLElement | null = null

function removeToolbar() {
  activeToolbar?.remove()
  activeToolbar = null
}

function showHighlightToolbar(x: number, y: number, existingSpan?: HTMLElement, text?: string, context?: string) {
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
      if (existingSpan) {
        existingSpan.setAttribute("data-color", c.name)
        updateHighlightColor(text || "", c.name)
      } else {
        createHighlightFromSelection(c.name)
      }
      removeToolbar()
    })
    toolbar.appendChild(btn)
  }

  if (existingSpan) {
    const removeBtn = document.createElement("button")
    removeBtn.className = "hl-remove"
    removeBtn.type = "button"
    removeBtn.textContent = "✕"
    removeBtn.title = "Vurguyu Kaldır"
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      removeHighlight(existingSpan, text || "")
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

  const parentEl = range.commonAncestorContainer.parentElement
  const context = parentEl?.textContent?.slice(0, 60) || ""

  const span = applyHighlight(range, color, text, context)
  if (span) {
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

function removeHighlight(span: HTMLElement, text: string) {
  const parent = span.parentNode
  if (parent) {
    while (span.firstChild) {
      parent.insertBefore(span.firstChild, span)
    }
    parent.removeChild(span)
    parent.normalize()
  }

  const highlights = loadHighlights().filter(h => h.text !== text)
  saveHighlights(highlights)
  window.__noeticToast?.("Vurgu kaldırıldı", "info")
}

function handleMouseUp(e: MouseEvent) {
  if ((e.target as HTMLElement)?.closest(".noetic-highlight-toolbar, .noetic-context-menu")) return

  const selection = window.getSelection()
  const text = selection?.toString()?.trim()
  if (text && text.length > 1) {
    const range = selection!.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    setTimeout(() => {
      if (window.getSelection()?.toString()?.trim()) {
        showHighlightToolbar(rect.left + rect.width / 2, rect.top)
      }
    }, 200)
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
document.addEventListener("click", handleClick)
document.addEventListener("nav", handleNav)
handleNav()

window.__noeticAnnotation = {
  cleanup: () => {
    removeToolbar()
    document.removeEventListener("mouseup", handleMouseUp)
    document.removeEventListener("click", handleClick)
    document.removeEventListener("nav", handleNav)
  },
}
