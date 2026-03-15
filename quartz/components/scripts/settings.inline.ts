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
  if (savedSize) {
    document.documentElement.style.setProperty("--baseFontSize", savedSize)
  }
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
  document.documentElement.style.setProperty(
    "--headerFont",
    `"${savedFont}", system-ui, sans-serif`,
  )
}

const applySavedLineHeight = () => {
  const val = getSavedLineHeight()
  document.documentElement.style.setProperty("--noetic-line-height", val)
}

const applySavedContentWidth = () => {
  const val = getSavedContentWidth()
  if (val === "none") {
    document.documentElement.style.removeProperty("--noetic-content-max-width")
  } else {
    document.documentElement.style.setProperty("--noetic-content-max-width", val)
  }
}

const applyCustomTypography = () => {
  document.documentElement.classList.toggle("noetic-custom-typo", getToggle("custom-typography"))
}

const applyNightReading = () => {
  document.documentElement.classList.toggle("noetic-night-reading", getToggle("night-reading"))
}

const applyEffects = () => {
  const enabled = getToggle("effects-enabled", true)
  document.documentElement.classList.toggle("noetic-no-effects", !enabled)
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
applyNightReading()
applyEffects()
applyCodeLineNumbers()
applyCodeLangLabel()
applyCodeCollapsible()

const fontPreloadList = [
  "Poppins",
  "Lato",
  "Roboto",
  "Open+Sans",
  "Quicksand",
  "Montserrat",
  "Merriweather",
  "Source+Sans+Pro",
  "Atkinson+Hyperlegible",
]

fontPreloadList.forEach((font) => {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500&display=swap`
  document.head.appendChild(link)
})

function applyFontFamily(name: string) {
  const linkId = "dynamic-google-font"
  const existingLink = document.getElementById(linkId) as HTMLLinkElement | null
  existingLink?.remove()

  if (name) {
    const fontName = name.replace(/ /g, "+")
    const link = document.createElement("link")
    link.id = linkId
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
  if (val === "none") {
    document.documentElement.style.removeProperty("--noetic-content-max-width")
  } else {
    document.documentElement.style.setProperty("--noetic-content-max-width", val)
  }
  localStorage.setItem("content-width", val)
  window.__noeticToast?.("İçerik genişliği değiştirildi", "success")
}

function closeFontDropdown() {
  document.querySelectorAll(".font-dropdown.open").forEach((dropdown) => {
    dropdown.classList.remove("open")
  })
}

function syncSettingsInputs() {
  const savedFont = getSavedFont()
  const savedSize = getSavedSize()
  const savedLineHeight = getSavedLineHeight()
  const savedContentWidth = getSavedContentWidth()

  document.querySelectorAll("input[name='font-choice']").forEach((input) => {
    const radio = input as HTMLInputElement
    radio.checked = savedFont === "" ? radio.value === "" : radio.value === savedFont
  })

  document.querySelectorAll("input[name='font-size-choice']").forEach((input) => {
    const radio = input as HTMLInputElement
    radio.checked = radio.value === savedSize
  })

  document.querySelectorAll("input[name='line-height-choice']").forEach((input) => {
    const radio = input as HTMLInputElement
    radio.checked = radio.value === savedLineHeight
  })

  document.querySelectorAll("input[name='content-width-choice']").forEach((input) => {
    const radio = input as HTMLInputElement
    radio.checked = radio.value === savedContentWidth
  })

  const toggleMap: Record<string, { key: string; fallback: boolean }> = {
    "custom-typography": { key: "custom-typography", fallback: false },
    "night-reading": { key: "night-reading", fallback: false },
    "effects-enabled": { key: "effects-enabled", fallback: true },
    "code-line-numbers": { key: "code-line-numbers", fallback: false },
    "code-lang-label": { key: "code-lang-label", fallback: true },
    "code-collapsible": { key: "code-collapsible", fallback: false },
    "notifications-enabled": { key: "noetic-notifications", fallback: true },
  }

  for (const [name, { key, fallback }] of Object.entries(toggleMap)) {
    document.querySelectorAll(`input[name='${name}']`).forEach((input) => {
      const cb = input as HTMLInputElement
      if (name === "notifications-enabled") {
        cb.checked = localStorage.getItem(key) !== "off"
      } else {
        cb.checked = getToggle(key, fallback)
      }
    })
  }

  const syncKeyInput = document.querySelector(".sync-key-input") as HTMLInputElement | null
  if (syncKeyInput) {
    syncKeyInput.value = localStorage.getItem("noetic-sync-key") || ""
  }
}

function generateSyncKey(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
  let key = ""
  for (let i = 0; i < 16; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return key
}

function handleDocumentClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  if (!target) return

  const showMoreButton = target.closest(".font-show-more") as HTMLElement | null
  if (showMoreButton) {
    e.stopPropagation()
    const panelRoot = showMoreButton.parentElement
    const fontHidden = panelRoot?.querySelector(".font-hidden") as HTMLElement | null
    fontHidden?.classList.toggle("expanded")
    showMoreButton.classList.toggle("expanded", fontHidden?.classList.contains("expanded") ?? false)
    return
  }

  const settingsShowMore = target.closest(".settings-show-more") as HTMLElement | null
  if (settingsShowMore) {
    e.stopPropagation()
    const panelRoot = settingsShowMore.parentElement
    const extraOptions = panelRoot?.querySelector(".settings-extra-options") as HTMLElement | null
    if (extraOptions) {
      const isHidden = extraOptions.style.display === "none"
      extraOptions.style.display = isHidden ? "block" : "none"
      settingsShowMore.classList.toggle("expanded", isHidden)
    }
    return
  }

  const syncGenerate = target.closest(".sync-key-generate") as HTMLElement | null
  if (syncGenerate) {
    e.stopPropagation()
    const input = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (input) {
      input.value = generateSyncKey()
    }
    return
  }

  const syncSave = target.closest(".sync-key-save") as HTMLElement | null
  if (syncSave) {
    e.stopPropagation()
    const input = document.querySelector(".sync-key-input") as HTMLInputElement | null
    const status = document.querySelector(".sync-key-status") as HTMLElement | null
    if (input && input.value.trim()) {
      localStorage.setItem("noetic-sync-key", input.value.trim())
      if (status) {
        status.textContent = "Anahtar kaydedildi."
        status.className = "sync-key-status saved"
        setTimeout(() => { status.textContent = ""; status.className = "sync-key-status" }, 3000)
      }
      window.__noeticToast?.("Senkronizasyon anahtarı kaydedildi", "success")
    }
    return
  }

  const syncClear = target.closest(".sync-key-clear") as HTMLElement | null
  if (syncClear) {
    e.stopPropagation()
    localStorage.removeItem("noetic-sync-key")
    const input = document.querySelector(".sync-key-input") as HTMLInputElement | null
    if (input) input.value = ""
    const status = document.querySelector(".sync-key-status") as HTMLElement | null
    if (status) {
      status.textContent = "Anahtar silindi."
      status.className = "sync-key-status cleared"
      setTimeout(() => { status.textContent = ""; status.className = "sync-key-status" }, 3000)
    }
    window.__noeticToast?.("Anahtar silindi", "info")
    return
  }

  const fontButton = target.closest(".font-button") as HTMLButtonElement | null
  if (fontButton) {
    e.stopPropagation()
    const dropdown = fontButton.closest(".font-dropdown") as HTMLElement | null
    const willOpen = !dropdown?.classList.contains("open")
    closeFontDropdown()
    window.closeThemePanel?.()
    if (willOpen) {
      dropdown?.classList.add("open")
    }
    return
  }

  if (target.closest(".font-dropdown")) {
    return
  }

  closeFontDropdown()
}

function handleDocumentChange(e: Event) {
  const target = e.target as HTMLInputElement | null
  if (!target) return

  if (target.matches("input[name='font-choice']")) {
    applyFontFamily(target.value)
    syncSettingsInputs()
    return
  }

  if (target.matches("input[name='font-size-choice']")) {
    applyFontSize(target.value)
    syncSettingsInputs()
    return
  }

  if (target.matches("input[name='line-height-choice']")) {
    applyLineHeight(target.value)
    syncSettingsInputs()
    return
  }

  if (target.matches("input[name='content-width-choice']")) {
    applyContentWidth(target.value)
    syncSettingsInputs()
    return
  }

  if (target.matches("input[name='custom-typography']")) {
    setToggle("custom-typography", target.checked)
    applyCustomTypography()
    window.__noeticToast?.(target.checked ? "Özel tipografi etkinleştirildi" : "Özel tipografi devre dışı", "info")
    return
  }

  if (target.matches("input[name='night-reading']")) {
    setToggle("night-reading", target.checked)
    applyNightReading()
    window.__noeticToast?.(target.checked ? "Gece okuma modu açıldı" : "Gece okuma modu kapatıldı", "info")
    return
  }

  if (target.matches("input[name='effects-enabled']")) {
    setToggle("effects-enabled", target.checked)
    applyEffects()
    window.__noeticToast?.(target.checked ? "Efektler etkinleştirildi" : "Efektler devre dışı", "info")
    return
  }

  if (target.matches("input[name='code-line-numbers']")) {
    setToggle("code-line-numbers", target.checked)
    applyCodeLineNumbers()
    window.__noeticToast?.(target.checked ? "Kod satır numaraları açıldı" : "Kod satır numaraları kapatıldı", "info")
    return
  }

  if (target.matches("input[name='code-lang-label']")) {
    setToggle("code-lang-label", target.checked)
    applyCodeLangLabel()
    window.__noeticToast?.(target.checked ? "Kod dil etiketi açıldı" : "Kod dil etiketi kapatıldı", "info")
    return
  }

  if (target.matches("input[name='code-collapsible']")) {
    setToggle("code-collapsible", target.checked)
    applyCodeCollapsible()
    window.__noeticToast?.(target.checked ? "Katlanabilir kod blokları açıldı" : "Katlanabilir kod blokları kapatıldı", "info")
    return
  }

  if (target.matches("input[name='notifications-enabled']")) {
    localStorage.setItem("noetic-notifications", target.checked ? "on" : "off")
    if (target.checked) {
      window.__noeticToast?.("Bildirimler etkinleştirildi", "success")
    }
    return
  }
}

function handleDocumentKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    closeFontDropdown()
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
    closeFontDropdown()
    document.removeEventListener("click", handleDocumentClick)
    document.removeEventListener("change", handleDocumentChange)
    document.removeEventListener("keydown", handleDocumentKeydown)
    document.removeEventListener("nav", handleSettingsNav)
    if (window.__noeticSyncSettingsInputs === syncSettingsInputs) {
      delete window.__noeticSyncSettingsInputs
    }
  },
}
