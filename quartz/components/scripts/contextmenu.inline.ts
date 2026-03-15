interface Window {
  __noeticContextMenu?: { cleanup: () => void }
  __noeticToast?: (message: string, type?: "info" | "success" | "warning") => void
}

window.__noeticContextMenu?.cleanup()

const MENU_ID = "noetic-context-menu"

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
    items.push({
      label: "Kopyala",
      icon: "📋",
      action: () => copyToClipboard(selectedText),
    })
    items.push({
      label: "Sitede Ara",
      icon: "🔍",
      action: () => searchInSite(selectedText),
    })
    items.push({ type: "separator" })
  }

  items.push({
    label: "Paragrafı Kopyala",
    icon: "📄",
    action: () => {
      const text = getClosestParagraph(target)
      if (text) copyToClipboard(text)
    },
  })

  items.push({
    label: "Tüm Sayfayı Kopyala",
    icon: "📝",
    action: () => {
      const text = getPageContent()
      if (text) copyToClipboard(text)
    },
  })

  items.push({ type: "separator" })

  items.push({
    label: "Tema Değiştir",
    icon: "🎨",
    action: () => {
      window.toggleThemePanel?.()
    },
  })

  const isZen = document.documentElement.classList.contains("noetic-zen-mode")
  items.push({
    label: isZen ? "Zen Modunu Kapat" : "Zen Modu",
    icon: "🧘",
    action: toggleZenMode,
  })

  items.push({ type: "separator" })

  items.push({
    label: "Varsayılan Menü",
    icon: "⋯",
    action: () => {
      /* do nothing, browser handles it */
    },
  })

  return items
}

function handleContextMenu(e: MouseEvent) {
  if ((e.target as HTMLElement)?.closest("input, textarea, [contenteditable], pre, code")) {
    return
  }

  e.preventDefault()
  const items = buildMenuItems(e)
  showMenu(e.clientX, e.clientY, items)
}

function handleClick() {
  hideMenu()
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") hideMenu()
}

function handleScroll() {
  hideMenu()
}

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
