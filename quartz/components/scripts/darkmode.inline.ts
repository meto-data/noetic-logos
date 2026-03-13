interface Window {
  __noeticTheme?: { cleanup: () => void }
  closeThemePanel?: () => void
  toggleThemePanel?: (e?: Event) => void
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

const themeNames: Record<Theme, string> = {
  light: "Açık",
  dark: "Koyu",
  "stone-dark": "Taş",
  "olive-light": "Fıstık",
  "olive-dark": "Koyu Fıstık",
  "library-light": "Kütüphane",
  "nord-light": "Nord",
  "deep-sea": "Okyanus",
  void: "Boşluk",
  "deep-void": "Uzay",
}

const themeColors: Record<Theme, string> = {
  light: "#5993f0ff",
  dark: "#1f2937",
  "stone-dark": "#1c1917",
  "olive-light": "#82A370",
  "olive-dark": "#364135",
  "library-light": "#8B7355",
  "nord-light": "#88C0D0",
  "deep-sea": "#0F172A",
  void: "#0d0101eb",
  "deep-void": "rgba(5, 0, 7, 1)",
}

// Mevcut temayı al ve uygula
const currentTheme = (localStorage.getItem("theme") as Theme) ?? "light"
document.documentElement.setAttribute("saved-theme", currentTheme)

const emitThemeChangeEvent = (theme: Theme) => {
  const event = new CustomEvent("themechange", {
    detail: { theme },
  }) as any
  document.dispatchEvent(event)
}

const isThemePanelVisible = () => {
  const panel = document.getElementById("theme-selector-panel")
  return !!panel && window.getComputedStyle(panel).display !== "none"
}

const toggleThemePanel = (e?: Event) => {
  e?.stopPropagation()
  e?.preventDefault()

  if (!document.getElementById("theme-selector-panel")) {
    createThemePanel()
  }

  const panel = document.getElementById("theme-selector-panel")
  if (panel) {
    panel.style.display = isThemePanelVisible() ? "none" : "block"
  }
}

const closeThemePanel = () => {
  const panel = document.getElementById("theme-selector-panel")
  if (panel) {
    panel.style.display = "none"
  }
}

const setTheme = (newTheme: Theme) => {
  document.documentElement.setAttribute("saved-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  emitThemeChangeEvent(newTheme)

  // Paneli kapat
  closeThemePanel()

  // Aktif tema işareti güncelle
  updateActiveTheme(newTheme)
}

const updateActiveTheme = (activeTheme: Theme) => {
  document.querySelectorAll(".theme-option").forEach((el) => {
    el.classList.remove("active")
    if (el.getAttribute("data-theme") === activeTheme) {
      el.classList.add("active")
    }
  })
}

// Tema seçici paneli oluştur
const createThemePanel = () => {
  // Mevcut paneli kaldır
  document.getElementById("theme-selector-panel")?.remove()

  const panel = document.createElement("div")
  panel.id = "theme-selector-panel"
  panel.className = "theme-selector-panel"

  const savedTheme = document.documentElement.getAttribute("saved-theme") || "light"

  // İlk 5 tema ve diğerleri ayrımı
  const primaryThemes = themes.slice(0, 5)
  // Diğer temalar (5. indexten sonrakiler)
  const secondaryThemes = themes.slice(5)

  let htmlContent = `
      <div class="theme-panel-header">Tema Seçin</div>
      <div class="theme-list-primary">
        ${primaryThemes
          .map(
            (theme) => `
          <div class="theme-option ${theme === savedTheme ? "active" : ""}" data-theme="${theme}">
            <span class="theme-color" style="background-color: ${themeColors[theme]}"></span>
            <span class="theme-name">${themeNames[theme]}</span>
          </div>
        `,
          )
          .join("")}
      </div>
    `

  if (secondaryThemes.length > 0) {
    htmlContent += `
          <div class="theme-show-more">
            <span>Diğer Temalar</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>

          <div class="theme-list-secondary" style="display: none;">
            ${secondaryThemes
              .map(
                (theme) => `
              <div class="theme-option ${theme === savedTheme ? "active" : ""}" data-theme="${theme}">
                <span class="theme-color" style="background-color: ${themeColors[theme]}"></span>
                <span class="theme-name">${themeNames[theme]}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        `
  }

  panel.innerHTML = htmlContent

  // Desktop'ta darkmode butonunun parent'ına, mobilde body'ye ekle
  const isMobile = window.innerWidth < 800

  if (isMobile) {
    // Mobilde fixed pozisyon, body'ye ekle
    panel.style.position = "fixed"
    panel.style.top = "65px"
    panel.style.right = "15px"
    panel.style.left = "auto"
    document.body.appendChild(panel)
  } else {
    // Desktop'ta darkmode butonunun yanına absolute pozisyon
    const darkmodeBtn = document.querySelector(".darkmode")
    if (darkmodeBtn && darkmodeBtn.parentElement) {
      // Parent'ı relative yap
      darkmodeBtn.parentElement.style.position = "relative"
      panel.style.position = "absolute"
      panel.style.top = "calc(100% + 8px)"
      panel.style.right = "0"
      panel.style.left = "auto"
      darkmodeBtn.parentElement.appendChild(panel)
    } else {
      document.body.appendChild(panel)
    }
  }

  // Her tema seçeneğine tıklama eventi ekle
  panel.querySelectorAll(".theme-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation()
      const theme = (e.currentTarget as HTMLElement).getAttribute("data-theme") as Theme
      if (theme) setTheme(theme)
    })
  })

  // Daha fazla göster butonu
  const showMoreBtn = panel.querySelector(".theme-show-more")
  const secondaryList = panel.querySelector(".theme-list-secondary") as HTMLElement

  showMoreBtn?.addEventListener("click", (e) => {
    e.stopPropagation()
    if (secondaryList) {
      const isHidden = secondaryList.style.display === "none"
      secondaryList.style.display = isHidden ? "block" : "none"
      showMoreBtn.classList.toggle("expanded", isHidden)

      // İkonu değiştir (+ / -)
      const svg = showMoreBtn.querySelector("svg")
      if (svg) {
        // Eğer şimdi açıldıysa (isHidden true), eksi göster
        // Eğer şimdi kapandıysa (isHidden false), artı göster
        if (isHidden) {
          svg.innerHTML = '<line x1="5" y1="12" x2="19" y2="12"></line>'
        } else {
          svg.innerHTML =
            '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
        }
      }
    }
  })
}

// Dışarı tıklandığında paneli kapat
const handleClickOutside = (e: MouseEvent) => {
  const panel = document.getElementById("theme-selector-panel")
  const target = e.target as HTMLElement | null

  if (
    panel &&
    isThemePanelVisible() &&
    !panel.contains(e.target as Node) &&
    !target?.closest(".darkmode, .mobile-darkmode")
  ) {
    closeThemePanel()
  }
}

const setupThemeListeners = () => {
  // Desktop darkmode butonları
  document.querySelectorAll(".darkmode").forEach((btn) => {
    btn.removeEventListener("click", toggleThemePanel)
    btn.addEventListener("click", toggleThemePanel)
  })

  // Mobil darkmode butonu
  const mobileDarkmode = document.querySelector(".mobile-darkmode")
  if (mobileDarkmode) {
    mobileDarkmode.removeEventListener("click", toggleThemePanel)
    mobileDarkmode.addEventListener("click", toggleThemePanel)
  }

  // Paneli oluştur
  createThemePanel()
}

// Pencere boyutu değiştiğinde tema panelini kapat ve kaldır
const handleResize = () => {
  const panel = document.getElementById("theme-selector-panel")
  if (panel) {
    // Paneli DOM'dan tamamen kaldır - sonraki açılışta yeniden oluşturulacak
    panel.remove()
  }
}

const handleThemeNav = () => {
  requestAnimationFrame(setupThemeListeners)
}

document.addEventListener("click", handleClickOutside)
document.addEventListener("nav", handleThemeNav)
window.addEventListener("resize", handleResize)
requestAnimationFrame(setupThemeListeners)

window.closeThemePanel = closeThemePanel
window.toggleThemePanel = toggleThemePanel
window.__noeticTheme = {
  cleanup: () => {
    closeThemePanel()
    document.removeEventListener("click", handleClickOutside)
    document.removeEventListener("nav", handleThemeNav)
    window.removeEventListener("resize", handleResize)
    if (window.closeThemePanel === closeThemePanel) {
      delete window.closeThemePanel
    }
    if (window.toggleThemePanel === toggleThemePanel) {
      delete window.toggleThemePanel
    }
  },
}
