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

const setToggle = (key: string, val: boolean) => localStorage.setItem(key, String(val))

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
const applyEffects = () => document.documentElement.classList.toggle("noetic-no-effects", !getToggle("effects-enabled", true))
const applyCodeLineNumbers = () => applyClass("noetic-code-line-numbers", "code-line-numbers")
const applyCodeCollapsible = () => applyClass("noetic-code-collapsible", "code-collapsible")
const applyZenMode = () => applyClass("noetic-zen-mode", "zen-mode")

applySavedFontSizeImmediately()
applySavedFontFamilyImmediately()
applySavedLineHeight()
applySavedContentWidth()
applyCustomTypography()
applyEffects()
applyCodeLineNumbers()
applyCodeCollapsible()
applyZenMode()
if (getToggle("zen-mode")) createZenExitButton()

requestIdleCallback(() => {
  const fonts = ["Poppins","Lato","Roboto","Open+Sans","Quicksand","Montserrat","Merriweather","Source+Sans+Pro","Atkinson+Hyperlegible"]
  for (const f of fonts) {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.media = "print"
    link.href = `https://fonts.googleapis.com/css2?family=${f}:wght@400;500&display=swap`
    link.onload = () => { link.media = "all" }
    document.head.appendChild(link)
  }
})

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

function openSettingsModal() {
  const overlay = document.getElementById("settings-overlay")
  if (!overlay) return
  if (overlay.parentElement !== document.body) {
    document.body.appendChild(overlay)
  }
  overlay.classList.add("active")
  syncSettingsInputs()
}

function closeSettingsModal() {
  document.getElementById("settings-overlay")?.classList.remove("active")
}

function syncSettingsInputs() {
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
    "effects-enabled": { key: "effects-enabled", fallback: true },
    "code-line-numbers": { key: "code-line-numbers", fallback: false },
    "code-collapsible": { key: "code-collapsible", fallback: false },
    "notifications-enabled": { key: "noetic-notifications", fallback: true },
    "zen-mode": { key: "zen-mode", fallback: false },
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
  input.classList.toggle("locked", isLocked)
}

function generateSyncKey(): string {
  const c = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
  let k = ""
  for (let i = 0; i < 16; i++) k += c.charAt(Math.floor(Math.random() * c.length))
  return k
}

function collectAllPreferences(): Record<string, unknown> {
  const prefs: Record<string, unknown> = {}
  for (const k of ["font-family","font-size","line-height","content-width","custom-typography","effects-enabled","code-line-numbers","code-collapsible","noetic-notifications","theme","zen-mode"]) {
    const v = localStorage.getItem(k)
    if (v !== null) prefs[k] = v
  }
  const hl: Record<string, string> = {}
  const mod: Record<string, string> = {}
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)!
    const v = localStorage.getItem(k)!
    if (k.startsWith("noetic-highlights-")) hl[k] = v
    else if (k.startsWith("module-") || k.startsWith("noetic-module") || k.startsWith("quiz-") || k.startsWith("progress-")) mod[k] = v
  }
  prefs["_highlights"] = hl
  prefs["_modules"] = mod
  return prefs
}

function restoreAllPreferences(prefs: Record<string, unknown>) {
  for (const [k, v] of Object.entries(prefs)) {
    if (k === "_highlights" || k === "_modules" || k === "noetic-sync-key") continue
    if (typeof v === "string") localStorage.setItem(k, v)
  }
  for (const sub of ["_highlights", "_modules"] as const) {
    const data = prefs[sub] as Record<string, string> | undefined
    if (data) for (const [k, v] of Object.entries(data)) localStorage.setItem(k, v)
  }
  applySavedFontSizeImmediately(); applySavedFontFamilyImmediately()
  applySavedLineHeight(); applySavedContentWidth()
  applyCustomTypography(); applyEffects(); applyCodeLineNumbers(); applyCodeCollapsible(); applyZenMode()
  const t = localStorage.getItem("theme")
  if (t) document.documentElement.setAttribute("saved-theme", t)
}

function savePrefsToCurrent() {
  const key = localStorage.getItem("noetic-sync-key")
  if (key) localStorage.setItem(`noetic-sync-data-${key}`, JSON.stringify(collectAllPreferences()))
}

function handleDocumentClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  if (!target) return

  if (target.closest(".settings-trigger")) { e.stopPropagation(); openSettingsModal(); return }
  if (target.closest(".settings-close") || (target.id === "settings-overlay")) { e.stopPropagation(); closeSettingsModal(); return }

  const showMore = target.closest(".font-show-more") as HTMLElement | null
  if (showMore?.closest(".settings-modal")) {
    e.stopPropagation()
    const h = showMore.parentElement?.querySelector(".font-hidden") as HTMLElement | null
    h?.classList.toggle("expanded")
    showMore.classList.toggle("expanded", h?.classList.contains("expanded") ?? false)
    return
  }

  if (target.closest(".sync-key-generate")) {
    e.stopPropagation()
    const inp = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (inp && !inp.disabled) inp.value = generateSyncKey()
    return
  }
  if (target.closest(".sync-key-copy")) {
    e.stopPropagation()
    const inp = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (inp?.value) navigator.clipboard.writeText(inp.value).then(() => window.__noeticToast?.("Anahtar kopyalandı", "success"))
    return
  }
  if (target.closest(".sync-key-save")) {
    e.stopPropagation()
    const inp = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (!inp?.value.trim()) return
    const key = inp.value.trim()
    localStorage.setItem("noetic-sync-key", key)
    localStorage.setItem(`noetic-sync-data-${key}`, JSON.stringify(collectAllPreferences()))
    updateSyncKeyUI()
    window.__noeticToast?.("Anahtar kaydedildi ve tercihler aktarıldı", "success")
    return
  }
  if (target.closest(".sync-key-clear")) {
    e.stopPropagation()
    const ck = localStorage.getItem("noetic-sync-key")
    if (ck) localStorage.removeItem(`noetic-sync-data-${ck}`)
    localStorage.removeItem("noetic-sync-key")
    updateSyncKeyUI()
    window.__noeticToast?.("Anahtar silindi", "info")
    return
  }
}

function handleDocumentChange(e: Event) {
  const t = e.target as HTMLInputElement | null
  if (!t) return

  if (t.matches("input[name='font-choice']")) { applyFontFamily(t.value); syncSettingsInputs(); return }
  if (t.matches("input[name='font-size-choice']")) { applyFontSize(t.value); syncSettingsInputs(); return }
  if (t.matches("input[name='line-height-choice']")) { applyLineHeight(t.value); syncSettingsInputs(); return }
  if (t.matches("input[name='content-width-choice']")) { applyContentWidth(t.value); syncSettingsInputs(); return }

  const toggleActions: Record<string, { apply: () => void; onMsg: string; offMsg: string }> = {
    "custom-typography": { apply: applyCustomTypography, onMsg: "Özel tipografi etkinleştirildi", offMsg: "Özel tipografi devre dışı" },
    "effects-enabled": { apply: applyEffects, onMsg: "Efektler etkinleştirildi", offMsg: "Efektler devre dışı" },
    "code-line-numbers": { apply: applyCodeLineNumbers, onMsg: "Satır numaraları açıldı", offMsg: "Satır numaraları kapatıldı" },
    "code-collapsible": { apply: applyCodeCollapsible, onMsg: "Katlanabilir bloklar açıldı", offMsg: "Katlanabilir bloklar kapatıldı" },
    "zen-mode": { apply: () => { applyZenMode(); if (getToggle("zen-mode")) createZenExitButton(); else removeZenExitButton() }, onMsg: "Zen modu açıldı", offMsg: "Zen modu kapatıldı" },
  }

  for (const [name, { apply, onMsg, offMsg }] of Object.entries(toggleActions)) {
    if (t.matches(`input[name='${name}']`)) {
      setToggle(name, t.checked); apply()
      window.__noeticToast?.(t.checked ? onMsg : offMsg, "info")
      savePrefsToCurrent(); return
    }
  }

  if (t.matches("input[name='notifications-enabled']")) {
    localStorage.setItem("noetic-notifications", t.checked ? "on" : "off")
    if (t.checked) window.__noeticToast?.("Bildirimler etkinleştirildi", "success")
    savePrefsToCurrent(); return
  }
}

function exitZenMode() {
  if (!document.documentElement.classList.contains("noetic-zen-mode")) return
  setToggle("zen-mode", false)
  applyZenMode()
  removeZenExitButton()
  window.__noeticToast?.("Zen modu kapatıldı", "info")
  savePrefsToCurrent()
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
    if (document.getElementById("settings-overlay")?.classList.contains("active")) {
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
