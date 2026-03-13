interface Window {
  __noeticSettings?: { cleanup: () => void }
  __noeticSyncSettingsInputs?: () => void
  closeThemePanel?: () => void
}

window.__noeticSettings?.cleanup()

const getSavedFont = () => localStorage.getItem("font-family") || ""
const getSavedSize = () => localStorage.getItem("font-size") || "1rem"

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

applySavedFontSizeImmediately()
applySavedFontFamilyImmediately()

const fontPreloadList = [
  "Poppins",
  "Lato",
  "Roboto",
  "Open+Sans",
  "Quicksand",
  "Montserrat",
  "Merriweather",
  "Source+Sans+Pro",
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
}

function applyFontSize(size: string) {
  document.documentElement.style.setProperty("--baseFontSize", size)
  localStorage.setItem("font-size", size)
}

function closeFontDropdown() {
  document.querySelectorAll(".font-dropdown.open").forEach((dropdown) => {
    dropdown.classList.remove("open")
  })
}

function syncSettingsInputs() {
  const savedFont = getSavedFont()
  const savedSize = getSavedSize()

  document.querySelectorAll("input[name='font-choice']").forEach((input) => {
    const radio = input as HTMLInputElement
    radio.checked = savedFont === "" ? radio.value === "" : radio.value === savedFont
  })

  document.querySelectorAll("input[name='font-size-choice']").forEach((input) => {
    const radio = input as HTMLInputElement
    radio.checked = radio.value === savedSize
  })
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
