interface Window {
  __noeticContextMenu?: { cleanup: () => void }
  __noeticToast?: (message: string, type?: "info" | "success" | "warning") => void
  toggleThemePanel?: () => void
}

window.__noeticContextMenu?.cleanup()

const MENU_ID = "noetic-context-menu"

const ICONS = {
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  paragraph: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4v16"/><path d="M17 4v16"/><path d="M19 4H9.5a4.5 4.5 0 1 0 0 9H13"/></svg>`,
  page: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  zen: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  zenOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  menu: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
}

function getMenu(): HTMLElement | null {
  return document.getElementById(MENU_ID)
}

function hideMenu() {
  const menu = getMenu()
  if (menu) {
    menu.style.display = "none"
    menu.setAttribute("aria-hidden", "true")
  }
}

function showMenu(x: number, y: number, items: MenuItem[]) {
  const menu = getMenu()
  if (!menu) return
  menu.innerHTML = ""

  for (const item of items) {
    if (item.type === "separator") {
      const sep = document.createElement("div")
      sep.className = "ctx-separator"
      menu.appendChild(sep)
      continue
    }
    const btn = document.createElement("button")
    btn.className = "ctx-item"
    btn.type = "button"
    btn.setAttribute("role", "menuitem")
    btn.innerHTML = `<span class="ctx-icon">${item.icon || ""}</span><span class="ctx-label">${item.label}</span>`
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      hideMenu()
      item.action?.()
    })
    menu.appendChild(btn)
  }

  const vw = window.innerWidth
  const vh = window.innerHeight
  menu.style.display = "block"
  menu.setAttribute("aria-hidden", "false")

  const rect = menu.getBoundingClientRect()
  let finalX = x
  let finalY = y
  if (x + rect.width > vw - 8) finalX = vw - rect.width - 8
  if (y + rect.height > vh - 8) finalY = vh - rect.height - 8
  if (finalX < 8) finalX = 8
  if (finalY < 8) finalY = 8

  menu.style.left = `${finalX}px`
  menu.style.top = `${finalY}px`
}

interface MenuItem {
  type?: "item" | "separator"
  label?: string
  icon?: string
  action?: () => void
}

function getSelectedText(): string {
  return window.getSelection()?.toString()?.trim() || ""
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    window.__noeticToast?.("Panoya kopyalandı", "success")
  }).catch(() => {
    window.__noeticToast?.("Kopyalama başarısız", "warning")
  })
}

function searchInSite(text: string) {
  const searchBar = document.querySelector(".search-bar") as HTMLInputElement | null
  const searchContainer = document.querySelector(".search-container") as HTMLElement | null
  if (searchBar && searchContainer) {
    searchContainer.classList.add("active")
    searchBar.value = text
    searchBar.focus()
    searchBar.dispatchEvent(new Event("input"))
  }
}

function getClosestParagraph(el: HTMLElement | null): string {
  if (!el) return ""
  const p = el.closest("p, li, blockquote, h1, h2, h3, h4, h5, h6, td, th, .callout-content")
  return p?.textContent?.trim() || ""
}

function getPageContent(): string {
  const article = document.querySelector("article")
  return article?.textContent?.trim() || ""
}

function toggleZenMode() {
  document.documentElement.classList.toggle("noetic-zen-mode")
  const isZen = document.documentElement.classList.contains("noetic-zen-mode")
  window.__noeticToast?.(isZen ? "Zen modu açıldı" : "Zen modu kapatıldı", "info")
}

function buildMenuItems(e: MouseEvent): MenuItem[] {
  const selectedText = getSelectedText()
  const target = e.target as HTMLElement | null
  const items: MenuItem[] = []

  if (selectedText) {
    items.push({ label: "Kopyala", icon: ICONS.copy, action: () => copyToClipboard(selectedText) })
    items.push({ label: "Sitede Ara", icon: ICONS.search, action: () => searchInSite(selectedText) })
    items.push({ type: "separator" })
  }

  items.push({
    label: "Paragrafı Kopyala",
    icon: ICONS.paragraph,
    action: () => { const t = getClosestParagraph(target); if (t) copyToClipboard(t) },
  })

  items.push({
    label: "Tüm Sayfayı Kopyala",
    icon: ICONS.page,
    action: () => { const t = getPageContent(); if (t) copyToClipboard(t) },
  })

  items.push({ type: "separator" })

  const isZen = document.documentElement.classList.contains("noetic-zen-mode")
  items.push({
    label: isZen ? "Zen Modunu Kapat" : "Zen Modu",
    icon: isZen ? ICONS.zenOff : ICONS.zen,
    action: toggleZenMode,
  })

  items.push({ type: "separator" })

  items.push({ label: "Varsayılan Menü", icon: ICONS.menu, action: () => {} })

  return items
}

function handleContextMenu(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target.closest("input, textarea, [contenteditable]")) return

  e.preventDefault()
  const items = buildMenuItems(e)
  showMenu(e.clientX, e.clientY, items)
}

function handleClick() { hideMenu() }
function handleKeydown(e: KeyboardEvent) { if (e.key === "Escape") hideMenu() }
function handleScroll() { hideMenu() }

document.addEventListener("contextmenu", handleContextMenu)
document.addEventListener("click", handleClick)
document.addEventListener("keydown", handleKeydown)
document.addEventListener("scroll", handleScroll, { passive: true })

window.__noeticContextMenu = {
  cleanup: () => {
    hideMenu()
    document.removeEventListener("contextmenu", handleContextMenu)
    document.removeEventListener("click", handleClick)
    document.removeEventListener("keydown", handleKeydown)
    document.removeEventListener("scroll", handleScroll)
  },
}
