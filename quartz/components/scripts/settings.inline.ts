interface Window {
  __noeticSettings?: { cleanup: () => void }
  __noeticSyncSettingsInputs?: () => void
  __noeticToast?: (message: string, type?: "info" | "success" | "warning") => void
  openSettingsModal?: (tab?: string) => void
  closeSettingsModal?: () => void
  setTheme?: (theme: string) => void
  closeThemePanel?: () => void
}

window.__noeticSettings?.cleanup()

const getSavedFont = () => localStorage.getItem("font-family") || ""
const getSavedSize = () => localStorage.getItem("font-size") || "1rem"
const getSavedLineHeight = () => localStorage.getItem("line-height") || "1.6"
const getSavedContentWidth = () => localStorage.getItem("content-width") || "none"

const getToggle = (key: string, fallback: boolean = false): boolean => {
  const val = localStorage.getItem(key)
  if (val === null) return fallback
  return val === "true"
}

const setToggle = (key: string, val: boolean) => localStorage.setItem(key, String(val))

const setSettingsModalLock = (locked: boolean) => {
  document.body.classList.toggle("settings-modal-open", locked)
  document.documentElement.classList.toggle("settings-modal-open", locked)
}

const applySavedFontSizeImmediately = () => {
  const s = getSavedSize()
  if (s) document.documentElement.style.setProperty("--baseFontSize", s)
}

const applySavedFontFamilyImmediately = () => {
  const f = getSavedFont()
  if (!f) return
  const link = document.createElement("link")
  link.id = "dynamic-google-font"
  link.rel = "stylesheet"
  link.href = `https://fonts.googleapis.com/css2?family=${f.replace(/ /g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap`
  document.head.appendChild(link)
  document.documentElement.style.setProperty("--bodyFont", `"${f}", system-ui, sans-serif`)
  document.documentElement.style.setProperty("--headerFont", `"${f}", system-ui, sans-serif`)
}

const applySavedLineHeight = () => document.documentElement.style.setProperty("--noetic-line-height", getSavedLineHeight())

const applySavedContentWidth = () => {
  const v = getSavedContentWidth()
  if (v === "none") document.documentElement.style.removeProperty("--noetic-content-max-width")
  else document.documentElement.style.setProperty("--noetic-content-max-width", v)
}

const applyClass = (cls: string, key: string, fallback = false) =>
  document.documentElement.classList.toggle(cls, getToggle(key, fallback))

const applyCustomTypography = () => applyClass("noetic-custom-typo", "custom-typography")
const applyCodeLineNumbers = () => applyClass("noetic-code-line-numbers", "code-line-numbers")
const applyCodeCollapsible = () => applyClass("noetic-code-collapsible", "code-collapsible")
const applyZenMode = () => applyClass("noetic-zen-mode", "zen-mode")
const applyWalkMode = () => {
  const isWalk = getToggle("walk-mode", false)
  document.documentElement.classList.toggle("noetic-walk-mode", isWalk)
}

function syncChoiceState() {
  document.querySelectorAll(".settings-font-card, .settings-segmented-item").forEach((item) => {
    const input = item.querySelector("input") as HTMLInputElement | null
    if (!input) return
    ;(item as HTMLElement).dataset.checked = input.checked ? "true" : "false"
  })
}

// Initial direct execution
applySavedFontSizeImmediately()
applySavedFontFamilyImmediately()
applySavedLineHeight()
applySavedContentWidth()
applyCustomTypography()
applyCodeLineNumbers()
applyCodeCollapsible()
applyZenMode()
applyWalkMode()
if (getToggle("zen-mode")) createZenExitButton()

let fontsPreloaded = false
function preloadTypographyFonts() {
  if (fontsPreloaded) return
  fontsPreloaded = true
  const fonts = ["Poppins", "Lato", "Roboto", "Open+Sans", "Quicksand", "Montserrat", "Merriweather", "Source+Sans+Pro", "Atkinson+Hyperlegible"]
  for (const f of fonts) {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.media = "print"
    link.href = `https://fonts.googleapis.com/css2?family=${f}:wght@400;500;700&display=swap`
    link.onload = () => { link.media = "all" }
    document.head.appendChild(link)
  }
}

function applyFontFamily(name: string) {
  const el = document.getElementById("dynamic-google-font") as HTMLLinkElement | null
  el?.remove()
  if (name) {
    const link = document.createElement("link")
    link.id = "dynamic-google-font"
    link.rel = "stylesheet"
    link.href = `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap`
    document.head.appendChild(link)
    document.documentElement.style.setProperty("--bodyFont", `"${name}", system-ui, sans-serif`)
    document.documentElement.style.setProperty("--headerFont", `"${name}", system-ui, sans-serif`)
  } else {
    document.documentElement.style.removeProperty("--bodyFont")
    document.documentElement.style.removeProperty("--headerFont")
  }
  localStorage.setItem("font-family", name)
  window.__noeticToast?.("Yazı tipi değiştirildi", "success")
}

function applyFontSize(size: string) {
  document.documentElement.style.setProperty("--baseFontSize", size)
  localStorage.setItem("font-size", size)
  window.__noeticToast?.("Yazı boyutu değiştirildi", "success")
}

function applyLineHeight(val: string) {
  document.documentElement.style.setProperty("--noetic-line-height", val)
  localStorage.setItem("line-height", val)
  window.__noeticToast?.("Satır yüksekliği değiştirildi", "success")
}

function applyContentWidth(val: string) {
  if (val === "none") document.documentElement.style.removeProperty("--noetic-content-max-width")
  else document.documentElement.style.setProperty("--noetic-content-max-width", val)
  localStorage.setItem("content-width", val)
  window.__noeticToast?.("İçerik genişliği değiştirildi", "success")
}

// ===== TEMA YÖNETİMİ =====
function setTheme(newTheme: string) {
  document.documentElement.setAttribute("saved-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  const event = new CustomEvent("themechange", { detail: { theme: newTheme } })
  document.dispatchEvent(event)
  updateActiveThemeUI(newTheme)
}

function updateActiveThemeUI(activeTheme?: string) {
  const current = activeTheme || document.documentElement.getAttribute("saved-theme") || "light"
  document.querySelectorAll(".settings-theme-card").forEach((card) => {
    const theme = card.getAttribute("data-theme")
    const isSelected = theme === current
    card.classList.toggle("is-active", isSelected)
    card.setAttribute("aria-selected", isSelected ? "true" : "false")
  })
}

// ===== SEKME YÖNETİMİ =====
function switchTab(tabId: string) {
  // Sol masaüstü butonları
  document.querySelectorAll(".settings-nav-item").forEach((btn) => {
    const isTarget = btn.getAttribute("data-tab") === tabId
    btn.classList.toggle("is-active", isTarget)
    btn.setAttribute("aria-selected", isTarget ? "true" : "false")
  })

  // Mobil sekmeler
  document.querySelectorAll(".settings-mobile-tab").forEach((btn) => {
    const isTarget = btn.getAttribute("data-tab") === tabId
    btn.classList.toggle("is-active", isTarget)
    btn.setAttribute("aria-selected", isTarget ? "true" : "false")
  })

  // İçerik panelleri
  document.querySelectorAll(".settings-tab-pane").forEach((pane) => {
    pane.classList.toggle("is-active", pane.getAttribute("data-pane") === tabId)
  })

  // Masaüstü bar başlık güncellemesi
  const headingEl = document.querySelector("[data-tab-heading]")
  const subHeadingEl = document.querySelector("[data-tab-subheading]")
  if (tabId === "themes") {
    if (headingEl) headingEl.textContent = "Temalar"
    if (subHeadingEl) subHeadingEl.textContent = "10 farklı renk paleti ile arayüzü özelleştirin"
  } else if (tabId === "typography") {
    preloadTypographyFonts()
    if (headingEl) headingEl.textContent = "Tipografi"
    if (subHeadingEl) subHeadingEl.textContent = "Yazı tipi, boyut ve satır yüksekliği ayarları"
  } else if (tabId === "preferences") {
    if (headingEl) headingEl.textContent = "Tercihler"
    if (subHeadingEl) subHeadingEl.textContent = "Okuma ve arayüz deneyimi tercihleri"
  }
}

// ===== MODAL AÇMA / KAPAMA =====
function openSettingsModal(initialTab?: string) {
  const overlay = document.getElementById("settings-overlay")
  const panel = document.getElementById("settings-panel")
  if (!overlay || !panel) return

  if (overlay.parentElement !== document.body) {
    document.body.appendChild(overlay)
  }
  if (panel.parentElement !== document.body) {
    document.body.appendChild(panel)
  }

  overlay.classList.add("visible")
  panel.classList.add("visible")
  panel.setAttribute("aria-hidden", "false")
  setSettingsModalLock(true)

  if (initialTab) {
    switchTab(initialTab)
  }
  syncSettingsInputs()
}

function closeSettingsModal() {
  const overlay = document.getElementById("settings-overlay")
  const panel = document.getElementById("settings-panel")
  overlay?.classList.remove("visible")
  panel?.classList.remove("visible")
  panel?.setAttribute("aria-hidden", "true")
  setSettingsModalLock(false)
}

function syncSettingsInputs() {
  updateActiveThemeUI()

  const savedFont = getSavedFont()
  const savedSize = getSavedSize()
  const savedLineHeight = getSavedLineHeight()
  const savedContentWidth = getSavedContentWidth()

  const radioSync = (name: string, val: string) => {
    document.querySelectorAll(`input[name='${name}']`).forEach((input) => {
      (input as HTMLInputElement).checked = (input as HTMLInputElement).value === val
    })
  }

  document.querySelectorAll("input[name='font-choice']").forEach((input) => {
    const r = input as HTMLInputElement
    r.checked = savedFont === "" ? r.value === "" : r.value === savedFont
  })
  radioSync("font-size-choice", savedSize)
  radioSync("line-height-choice", savedLineHeight)
  radioSync("content-width-choice", savedContentWidth)

  const toggleMap: Record<string, { key: string; fallback: boolean }> = {
    "custom-typography": { key: "custom-typography", fallback: false },
    "code-line-numbers": { key: "code-line-numbers", fallback: false },
    "code-collapsible": { key: "code-collapsible", fallback: false },
    "notifications-enabled": { key: "noetic-notifications", fallback: true },
    "walk-mode": { key: "walk-mode", fallback: false },
    "zen-mode": { key: "zen-mode", fallback: false },
  }

  for (const [name, { key, fallback }] of Object.entries(toggleMap)) {
    document.querySelectorAll(`input[name='${name}']`).forEach((input) => {
      const cb = input as HTMLInputElement
      cb.checked = name === "notifications-enabled" ? localStorage.getItem(key) !== "off" : getToggle(key, fallback)
    })
  }

  syncChoiceState()
}

function handleDocumentClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  if (!target) return

  // Açma butonu
  if (target.closest(".settings-trigger, [data-action='open-settings']")) {
    e.stopPropagation()
    openSettingsModal()
    return
  }

  // Kapatma butonu veya backdrop
  if (target.closest("[data-action='close']") || target.id === "settings-overlay") {
    e.stopPropagation()
    closeSettingsModal()
    return
  }

  // Sekme değiştirme (Sol menü veya mobil sekmeler)
  const tabBtn = target.closest(".settings-nav-item, .settings-mobile-tab") as HTMLElement | null
  if (tabBtn) {
    e.stopPropagation()
    const tab = tabBtn.getAttribute("data-tab")
    if (tab) switchTab(tab)
    return
  }

  // Tema seçimi
  const themeCard = target.closest(".settings-theme-card") as HTMLElement | null
  if (themeCard) {
    e.stopPropagation()
    const theme = themeCard.getAttribute("data-theme")
    if (theme) {
      setTheme(theme)
      window.__noeticToast?.("Tema değiştirildi", "success")
    }
    return
  }
}

function handleDocumentChange(e: Event) {
  const t = e.target as HTMLInputElement | null
  if (!t) return

  if (t.matches("input[name='font-choice']")) {
    applyFontFamily(t.value)
    syncSettingsInputs()
    return
  }
  if (t.matches("input[name='font-size-choice']")) {
    applyFontSize(t.value)
    syncSettingsInputs()
    return
  }
  if (t.matches("input[name='line-height-choice']")) {
    applyLineHeight(t.value)
    syncSettingsInputs()
    return
  }
  if (t.matches("input[name='content-width-choice']")) {
    applyContentWidth(t.value)
    syncSettingsInputs()
    return
  }

  const toggleActions: Record<string, { apply: () => void; onMsg: string; offMsg: string }> = {
    "custom-typography": { apply: applyCustomTypography, onMsg: "Özel tipografi etkinleştirildi", offMsg: "Özel tipografi devre dışı" },
    "code-line-numbers": { apply: applyCodeLineNumbers, onMsg: "Satır numaraları açıldı", offMsg: "Satır numaraları kapatıldı" },
    "code-collapsible": { apply: applyCodeCollapsible, onMsg: "Katlanabilir bloklar açıldı", offMsg: "Katlanabilir bloklar kapatıldı" },
    "walk-mode": { apply: applyWalkMode, onMsg: "Walk Mode (Yürüyüş Modu) açıldı", offMsg: "Walk Mode kapatıldı" },
    "zen-mode": {
      apply: () => {
        applyZenMode()
        if (getToggle("zen-mode")) createZenExitButton()
        else removeZenExitButton()
      },
      onMsg: "Zen modu açıldı",
      offMsg: "Zen modu kapatıldı",
    },
  }

  for (const [name, { apply, onMsg, offMsg }] of Object.entries(toggleActions)) {
    if (t.matches(`input[name='${name}']`)) {
      setToggle(name, t.checked)
      apply()
      window.__noeticToast?.(t.checked ? onMsg : offMsg, "info")
      return
    }
  }

  if (t.matches("input[name='notifications-enabled']")) {
    localStorage.setItem("noetic-notifications", t.checked ? "on" : "off")
    if (t.checked) window.__noeticToast?.("Bildirimler etkinleştirildi", "success")
    return
  }
}

function exitZenMode() {
  if (!document.documentElement.classList.contains("noetic-zen-mode")) return
  setToggle("zen-mode", false)
  applyZenMode()
  removeZenExitButton()
  window.__noeticToast?.("Zen modu kapatıldı", "info")
}

function createZenExitButton() {
  if (document.getElementById("zen-exit-btn")) return
  const btn = document.createElement("button")
  btn.id = "zen-exit-btn"
  btn.className = "zen-exit-btn"
  btn.type = "button"
  btn.title = "Zen Modundan Çık (ESC)"
  btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
  btn.addEventListener("click", exitZenMode)
  document.body.appendChild(btn)
}

function removeZenExitButton() {
  document.getElementById("zen-exit-btn")?.remove()
}

function handleDocumentKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    const panel = document.getElementById("settings-panel")
    if (panel?.classList.contains("visible")) {
      closeSettingsModal()
    } else if (document.documentElement.classList.contains("noetic-zen-mode")) {
      exitZenMode()
    }
  }
}

function handleSettingsNav() {
  requestAnimationFrame(syncSettingsInputs)
}

document.addEventListener("click", handleDocumentClick)
document.addEventListener("change", handleDocumentChange)
document.addEventListener("keydown", handleDocumentKeydown)
document.addEventListener("nav", handleSettingsNav)
syncSettingsInputs()

window.openSettingsModal = openSettingsModal
window.closeSettingsModal = closeSettingsModal
window.setTheme = setTheme
window.closeThemePanel = closeSettingsModal
window.__noeticSyncSettingsInputs = syncSettingsInputs

window.__noeticSettings = {
  cleanup: () => {
    closeSettingsModal()
    document.removeEventListener("click", handleDocumentClick)
    document.removeEventListener("change", handleDocumentChange)
    document.removeEventListener("keydown", handleDocumentKeydown)
    document.removeEventListener("nav", handleSettingsNav)
    if (window.openSettingsModal === openSettingsModal) delete window.openSettingsModal
    if (window.closeSettingsModal === closeSettingsModal) delete window.closeSettingsModal
    if (window.setTheme === setTheme) delete window.setTheme
    if (window.__noeticSyncSettingsInputs === syncSettingsInputs) delete window.__noeticSyncSettingsInputs
  },
}
