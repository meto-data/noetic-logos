interface Window {
  __noeticTheme?: { cleanup: () => void }
  closeThemePanel?: () => void
  toggleThemePanel?: (e?: Event) => void
  setTheme?: (theme: string) => void
  openSettingsModal?: (tab?: string) => void
  closeSettingsModal?: () => void
  __noeticSyncSettingsInputs?: () => void
}

window.__noeticTheme?.cleanup()

// Tema listesi
const themes = [
  "light",
  "dark",
  "stone-dark",
  "olive-light",
  "olive-dark",
  "library-light",
  "nord-light",
  "deep-sea",
  "void",
  "deep-void",
] as const

type Theme = (typeof themes)[number]

// Mevcut temayı hemen al ve uygula (FOUC engellemek için)
const currentTheme = (localStorage.getItem("theme") as Theme) ?? "light"
document.documentElement.setAttribute("saved-theme", currentTheme)

// Gecikmesiz, anında tema olayı tetikleyici
const emitThemeChangeEvent = (theme: Theme) => {
  const event = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

const applyThemeCore = (newTheme: Theme) => {
  document.documentElement.setAttribute("saved-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  emitThemeChangeEvent(newTheme)
  window.__noeticSyncSettingsInputs?.()
}

const isMobileDevice = () => window.innerWidth < 800 || window.matchMedia("(max-width: 799px)").matches

const setTheme = (newTheme: Theme) => {
  // Mobilde CPU/GPU takılmasını önlemek için anında (0ms) doğrudan geçiş
  if (isMobileDevice()) {
    applyThemeCore(newTheme)
    return
  }

  // Masaüstünde destekleniyorsa View Transitions API, yoksa hafif sınıf geçişi
  // @ts-ignore
  if (typeof document.startViewTransition === "function") {
    // @ts-ignore
    document.startViewTransition(() => {
      applyThemeCore(newTheme)
    })
  } else {
    document.documentElement.classList.add("theme-transitioning")
    applyThemeCore(newTheme)
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning")
    }, 280)
  }
}

// Buton tıklaması: Ayarlar modalini doğrudan 'themes' sekmesiyle açar
const onThemeButtonClick = (e: Event) => {
  e.stopPropagation()
  e.preventDefault()
  if (typeof window.openSettingsModal === "function") {
    window.openSettingsModal("themes")
  }
}

const setupThemeListeners = () => {
  // Masaüstü darkmode / palet butonları
  document.querySelectorAll(".darkmode").forEach((btn) => {
    btn.removeEventListener("click", onThemeButtonClick)
    btn.addEventListener("click", onThemeButtonClick)
  })

  // Mobil darkmode / palet butonu
  const mobileDarkmode = document.querySelector(".mobile-darkmode")
  if (mobileDarkmode) {
    mobileDarkmode.removeEventListener("click", onThemeButtonClick)
    mobileDarkmode.addEventListener("click", onThemeButtonClick)
  }
}

const handleThemeNav = () => {
  requestAnimationFrame(setupThemeListeners)
}

document.addEventListener("nav", handleThemeNav)
requestAnimationFrame(setupThemeListeners)

window.setTheme = setTheme as (theme: string) => void
window.closeThemePanel = () => {
  window.closeSettingsModal?.()
}
window.toggleThemePanel = (e?: Event) => {
  onThemeButtonClick(e || new Event("click"))
}

window.__noeticTheme = {
  cleanup: () => {
    document.removeEventListener("nav", handleThemeNav)
    document.querySelectorAll(".darkmode").forEach((btn) => {
      btn.removeEventListener("click", onThemeButtonClick)
    })
    const mobileDarkmode = document.querySelector(".mobile-darkmode")
    if (mobileDarkmode) {
      mobileDarkmode.removeEventListener("click", onThemeButtonClick)
    }
  },
}
