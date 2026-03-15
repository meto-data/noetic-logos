interface Window {
  __noeticSettings?: { cleanup: () => void }
  __noeticSyncSettingsInputs?: () => void
  __noeticToast?: (message: string, type?: "info" | "success" | "warning") => void
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

const setToggle = (key: string, val: boolean) => {
  localStorage.setItem(key, String(val))
}

const applySavedFontSizeImmediately = () => {
  const savedSize = getSavedSize()
  if (savedSize) document.documentElement.style.setProperty("--baseFontSize", savedSize)
}

const applySavedFontFamilyImmediately = () => {
  const savedFont = getSavedFont()
  if (!savedFont) return
  const fontName = savedFont.replace(/ /g, "+")
  const link = document.createElement("link")
  link.id = "dynamic-google-font"
  link.rel = "stylesheet"
  link.href = `https://fonts.googleapis.com/css2?family=${fontName}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap`
  document.head.appendChild(link)
  document.documentElement.style.setProperty("--bodyFont", `"${savedFont}", system-ui, sans-serif`)
  document.documentElement.style.setProperty("--headerFont", `"${savedFont}", system-ui, sans-serif`)
}

const applySavedLineHeight = () => {
  document.documentElement.style.setProperty("--noetic-line-height", getSavedLineHeight())
}

const applySavedContentWidth = () => {
  const val = getSavedContentWidth()
  if (val === "none") document.documentElement.style.removeProperty("--noetic-content-max-width")
  else document.documentElement.style.setProperty("--noetic-content-max-width", val)
}

const applyCustomTypography = () => {
  document.documentElement.classList.toggle("noetic-custom-typo", getToggle("custom-typography"))
}

const applyEffects = () => {
  document.documentElement.classList.toggle("noetic-no-effects", !getToggle("effects-enabled", true))
}

const applyCodeLineNumbers = () => {
  document.documentElement.classList.toggle("noetic-code-line-numbers", getToggle("code-line-numbers"))
}

const applyCodeLangLabel = () => {
  document.documentElement.classList.toggle("noetic-code-lang-label", getToggle("code-lang-label", true))
}

const applyCodeCollapsible = () => {
  document.documentElement.classList.toggle("noetic-code-collapsible", getToggle("code-collapsible"))
}

applySavedFontSizeImmediately()
applySavedFontFamilyImmediately()
applySavedLineHeight()
applySavedContentWidth()
applyCustomTypography()
applyEffects()
applyCodeLineNumbers()
applyCodeLangLabel()
applyCodeCollapsible()

const fontPreloadList = ["Poppins","Lato","Roboto","Open+Sans","Quicksand","Montserrat","Merriweather","Source+Sans+Pro","Atkinson+Hyperlegible"]
fontPreloadList.forEach((font) => {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500&display=swap`
  document.head.appendChild(link)
})

function applyFontFamily(name: string) {
  const existingLink = document.getElementById("dynamic-google-font") as HTMLLinkElement | null
  existingLink?.remove()
  if (name) {
    const fontName = name.replace(/ /g, "+")
    const link = document.createElement("link")
    link.id = "dynamic-google-font"
    link.rel = "stylesheet"
    link.href = `https://fonts.googleapis.com/css2?family=${fontName}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap`
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

// ===== MODAL OPEN/CLOSE =====
function openSettingsModal() {
  const overlay = document.getElementById("settings-overlay")
  overlay?.classList.add("active")
  syncSettingsInputs()
}

function closeSettingsModal() {
  const overlay = document.getElementById("settings-overlay")
  overlay?.classList.remove("active")
}

function syncSettingsInputs() {
  const savedFont = getSavedFont()
  const savedSize = getSavedSize()
  const savedLineHeight = getSavedLineHeight()
  const savedContentWidth = getSavedContentWidth()

  document.querySelectorAll("input[name='font-choice']").forEach((input) => {
    const r = input as HTMLInputElement
    r.checked = savedFont === "" ? r.value === "" : r.value === savedFont
  })
  document.querySelectorAll("input[name='font-size-choice']").forEach((input) => {
    (input as HTMLInputElement).checked = (input as HTMLInputElement).value === savedSize
  })
  document.querySelectorAll("input[name='line-height-choice']").forEach((input) => {
    (input as HTMLInputElement).checked = (input as HTMLInputElement).value === savedLineHeight
  })
  document.querySelectorAll("input[name='content-width-choice']").forEach((input) => {
    (input as HTMLInputElement).checked = (input as HTMLInputElement).value === savedContentWidth
  })

  const toggleMap: Record<string, { key: string; fallback: boolean }> = {
    "custom-typography": { key: "custom-typography", fallback: false },
    "effects-enabled": { key: "effects-enabled", fallback: true },
    "code-line-numbers": { key: "code-line-numbers", fallback: false },
    "code-lang-label": { key: "code-lang-label", fallback: true },
    "code-collapsible": { key: "code-collapsible", fallback: false },
    "notifications-enabled": { key: "noetic-notifications", fallback: true },
  }

  for (const [name, { key, fallback }] of Object.entries(toggleMap)) {
    document.querySelectorAll(`input[name='${name}']`).forEach((input) => {
      const cb = input as HTMLInputElement
      cb.checked = name === "notifications-enabled" ? localStorage.getItem(key) !== "off" : getToggle(key, fallback)
    })
  }

  updateSyncKeyUI()
}

function updateSyncKeyUI() {
  const savedKey = localStorage.getItem("noetic-sync-key") || ""
  const input = document.querySelector(".sync-key-input") as HTMLInputElement | null
  if (!input) return
  input.value = savedKey
  const isLocked = !!savedKey
  input.disabled = isLocked
  if (isLocked) input.classList.add("locked")
  else input.classList.remove("locked")
}

function generateSyncKey(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
  let key = ""
  for (let i = 0; i < 16; i++) key += chars.charAt(Math.floor(Math.random() * chars.length))
  return key
}

function collectAllPreferences(): Record<string, unknown> {
  const prefs: Record<string, unknown> = {}
  const prefKeys = [
    "font-family", "font-size", "line-height", "content-width",
    "custom-typography", "effects-enabled", "code-line-numbers",
    "code-lang-label", "code-collapsible", "noetic-notifications", "theme",
  ]
  for (const k of prefKeys) {
    const v = localStorage.getItem(k)
    if (v !== null) prefs[k] = v
  }

  const highlightKeys: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k && k.startsWith("noetic-highlights-")) highlightKeys.push(k)
  }
  const highlights: Record<string, string> = {}
  for (const k of highlightKeys) {
    const v = localStorage.getItem(k)
    if (v) highlights[k] = v
  }
  prefs["_highlights"] = highlights

  const moduleKeys: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k && (k.startsWith("module-") || k.startsWith("noetic-module") || k.startsWith("quiz-") || k.startsWith("progress-"))) {
      moduleKeys.push(k)
    }
  }
  const modules: Record<string, string> = {}
  for (const k of moduleKeys) {
    const v = localStorage.getItem(k)
    if (v) modules[k] = v
  }
  prefs["_modules"] = modules

  return prefs
}

function restoreAllPreferences(prefs: Record<string, unknown>) {
  const skipKeys = ["_highlights", "_modules", "noetic-sync-key"]
  for (const [k, v] of Object.entries(prefs)) {
    if (skipKeys.includes(k)) continue
    if (typeof v === "string") localStorage.setItem(k, v)
  }

  const highlights = prefs["_highlights"] as Record<string, string> | undefined
  if (highlights) {
    for (const [k, v] of Object.entries(highlights)) localStorage.setItem(k, v)
  }

  const modules = prefs["_modules"] as Record<string, string> | undefined
  if (modules) {
    for (const [k, v] of Object.entries(modules)) localStorage.setItem(k, v)
  }

  applySavedFontSizeImmediately()
  applySavedFontFamilyImmediately()
  applySavedLineHeight()
  applySavedContentWidth()
  applyCustomTypography()
  applyEffects()
  applyCodeLineNumbers()
  applyCodeLangLabel()
  applyCodeCollapsible()

  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) document.documentElement.setAttribute("saved-theme", savedTheme)
}

function handleDocumentClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  if (!target) return

  if (target.closest(".settings-trigger")) {
    e.stopPropagation()
    openSettingsModal()
    return
  }

  if (target.closest(".settings-close") || (target.classList.contains("settings-overlay") && target.id === "settings-overlay")) {
    e.stopPropagation()
    closeSettingsModal()
    return
  }

  const showMoreButton = target.closest(".font-show-more") as HTMLElement | null
  if (showMoreButton && showMoreButton.closest(".settings-modal")) {
    e.stopPropagation()
    const panelRoot = showMoreButton.parentElement
    const fontHidden = panelRoot?.querySelector(".font-hidden") as HTMLElement | null
    fontHidden?.classList.toggle("expanded")
    showMoreButton.classList.toggle("expanded", fontHidden?.classList.contains("expanded") ?? false)
    return
  }

  const syncGenerate = target.closest(".sync-key-generate") as HTMLElement | null
  if (syncGenerate) {
    e.stopPropagation()
    const input = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (input && !input.disabled) input.value = generateSyncKey()
    return
  }

  const syncCopy = target.closest(".sync-key-copy") as HTMLElement | null
  if (syncCopy) {
    e.stopPropagation()
    const input = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (input && input.value) {
      navigator.clipboard.writeText(input.value).then(() => {
        window.__noeticToast?.("Anahtar kopyalandı", "success")
      })
    }
    return
  }

  const syncSave = target.closest(".sync-key-save") as HTMLElement | null
  if (syncSave) {
    e.stopPropagation()
    const input = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (!input || !input.value.trim()) return
    const key = input.value.trim()
    localStorage.setItem("noetic-sync-key", key)

    const prefs = collectAllPreferences()
    localStorage.setItem(`noetic-sync-data-${key}`, JSON.stringify(prefs))

    updateSyncKeyUI()
    window.__noeticToast?.("Anahtar kaydedildi ve tercihler aktarıldı", "success")
    return
  }

  const syncClear = target.closest(".sync-key-clear") as HTMLElement | null
  if (syncClear) {
    e.stopPropagation()
    const currentKey = localStorage.getItem("noetic-sync-key")
    if (currentKey) localStorage.removeItem(`noetic-sync-data-${currentKey}`)
    localStorage.removeItem("noetic-sync-key")
    updateSyncKeyUI()
    window.__noeticToast?.("Anahtar silindi", "info")
    return
  }
}

function handleDocumentChange(e: Event) {
  const target = e.target as HTMLInputElement | null
  if (!target) return

  if (target.matches("input[name='font-choice']")) { applyFontFamily(target.value); syncSettingsInputs(); return }
  if (target.matches("input[name='font-size-choice']")) { applyFontSize(target.value); syncSettingsInputs(); return }
  if (target.matches("input[name='line-height-choice']")) { applyLineHeight(target.value); syncSettingsInputs(); return }
  if (target.matches("input[name='content-width-choice']")) { applyContentWidth(target.value); syncSettingsInputs(); return }

  if (target.matches("input[name='custom-typography']")) {
    setToggle("custom-typography", target.checked); applyCustomTypography()
    window.__noeticToast?.(target.checked ? "Özel tipografi etkinleştirildi" : "Özel tipografi devre dışı", "info"); return
  }
  if (target.matches("input[name='effects-enabled']")) {
    setToggle("effects-enabled", target.checked); applyEffects()
    window.__noeticToast?.(target.checked ? "Efektler etkinleştirildi" : "Efektler devre dışı", "info"); return
  }
  if (target.matches("input[name='code-line-numbers']")) {
    setToggle("code-line-numbers", target.checked); applyCodeLineNumbers()
    window.__noeticToast?.(target.checked ? "Satır numaraları açıldı" : "Satır numaraları kapatıldı", "info"); return
  }
  if (target.matches("input[name='code-lang-label']")) {
    setToggle("code-lang-label", target.checked); applyCodeLangLabel()
    window.__noeticToast?.(target.checked ? "Dil etiketi açıldı" : "Dil etiketi kapatıldı", "info"); return
  }
  if (target.matches("input[name='code-collapsible']")) {
    setToggle("code-collapsible", target.checked); applyCodeCollapsible()
    window.__noeticToast?.(target.checked ? "Katlanabilir bloklar açıldı" : "Katlanabilir bloklar kapatıldı", "info"); return
  }
  if (target.matches("input[name='notifications-enabled']")) {
    localStorage.setItem("noetic-notifications", target.checked ? "on" : "off")
    if (target.checked) window.__noeticToast?.("Bildirimler etkinleştirildi", "success")
    return
  }

  savePrefsToCurrent()
}

function savePrefsToCurrent() {
  const key = localStorage.getItem("noetic-sync-key")
  if (key) {
    const prefs = collectAllPreferences()
    localStorage.setItem(`noetic-sync-data-${key}`, JSON.stringify(prefs))
  }
}

function handleDocumentKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") closeSettingsModal()
}

function handleSettingsNav() {
  requestAnimationFrame(syncSettingsInputs)
}

document.addEventListener("click", handleDocumentClick)
document.addEventListener("change", handleDocumentChange)
document.addEventListener("keydown", handleDocumentKeydown)
document.addEventListener("nav", handleSettingsNav)
syncSettingsInputs()

window.__noeticSyncSettingsInputs = syncSettingsInputs
window.__noeticSettings = {
  cleanup: () => {
    closeSettingsModal()
    document.removeEventListener("click", handleDocumentClick)
    document.removeEventListener("change", handleDocumentChange)
    document.removeEventListener("keydown", handleDocumentKeydown)
    document.removeEventListener("nav", handleSettingsNav)
    if (window.__noeticSyncSettingsInputs === syncSettingsInputs) delete window.__noeticSyncSettingsInputs
  },
}
