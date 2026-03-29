// Mobile Menu & Header Script
// Mobil görünümde: tam ekran koyu menü + header (logo + arama + darkmode)

interface Window {
  __noeticMobileNav?: { cleanup: () => void }
  __noeticSyncSettingsInputs?: () => void
  closeThemePanel?: () => void
}

window.__noeticMobileNav?.cleanup()

const NOETIC_MODULES_SEEN_KEY = "noetic-modules-seen"

let cleanupMobileChrome = () => { }

const isElementVisible = (element: HTMLElement | null) =>
  !!element && window.getComputedStyle(element).display !== "none"

const setMobileMenuLock = (locked: boolean) => {
  document.body.classList.toggle("mobile-menu-open", locked)
  document.documentElement.classList.toggle("mobile-menu-open", locked)
}

const getBasePath = () => {
  const baseElement = document.querySelector("base")
  if (baseElement?.href) {
    return baseElement.href.endsWith("/") ? baseElement.href : `${baseElement.href}/`
  }

  const pathname = window.location.pathname
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length > 0 && window.location.hostname.endsWith(".github.io")) {
    return `${window.location.origin}/${segments[0]}/`
  }

  const currentDir = pathname.endsWith("/")
    ? pathname
    : `${pathname.slice(0, pathname.lastIndexOf("/") + 1) || "/"}`

  return new URL(currentDir, window.location.origin).toString()
}

const closeMobileFontPanel = () => {
  const panel = document.getElementById("mobile-font-panel")
  if (panel) {
    panel.style.display = "none"
  }
}

const setupMobileChrome = () => {
  cleanupMobileChrome()
  cleanupMobileChrome = () => { }

  const leftSidebar = document.querySelector(".sidebar.left") as HTMLElement
  if (!leftSidebar) return

  // Mevcut elemanları temizle
  document.querySelector(".hamburger-menu")?.remove()
  document.querySelector(".mobile-overlay")?.remove()
  document.querySelector(".mobile-header")?.remove()

  // ===== MOBİL HEADER =====
  const pageTitleLink = leftSidebar.querySelector(".page-title a") as HTMLAnchorElement | null
  const mobileHeader = document.createElement("div")
  mobileHeader.className = "mobile-header"
  mobileHeader.innerHTML = `
    <a href="${getBasePath()}" class="mobile-logo">Noetic Logos</a>
    <input type="text" class="mobile-search" placeholder="Arama..." readonly />
    <div class="mobile-buttons">
      <button class="mobile-modules-btn ${localStorage.getItem(NOETIC_MODULES_SEEN_KEY) ? "" : "is-attention"}" aria-label="Noetic Modüller">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
          <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
          <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
          <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
        </svg>
      </button>
      <button class="mobile-settings-btn" aria-label="Ayarlar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </svg>
      </button>
      <button class="mobile-darkmode" aria-label="Tema değiştir">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      </button>
    </div>
  `
  document.body.appendChild(mobileHeader)

  // ===== HAMBURGER BUTTON =====
  const hamburger = document.createElement("button")
  hamburger.className = "hamburger-menu"
  hamburger.setAttribute("aria-label", "Menüyü aç/kapat")
  hamburger.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon">
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `
  document.body.appendChild(hamburger)

  // ===== OVERLAY =====
  const overlay = document.createElement("div")
  overlay.className = "mobile-overlay"
  document.body.appendChild(overlay)

  // ===== MENÜ AÇMA/KAPAMA =====
  const openMenu = () => {
    leftSidebar.classList.add("mobile-open")
    hamburger.classList.add("active")
    overlay.classList.add("active")
    setMobileMenuLock(true)
  }

  const closeMenu = () => {
    leftSidebar.classList.remove("mobile-open")
    hamburger.classList.remove("active")
    overlay.classList.remove("active")
    setMobileMenuLock(false)
  }

  const toggleMenu = () => {
    if (leftSidebar.classList.contains("mobile-open")) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  // ===== EVENT LISTENERS =====
  const onHamburgerClick = () => toggleMenu()
  const onOverlayClick = () => closeMenu()
  const onSidebarClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null
    if (target?.closest("a")) {
      setTimeout(closeMenu, 100)
    }
  }

  hamburger.addEventListener("click", onHamburgerClick)
  overlay.addEventListener("click", onOverlayClick)
  leftSidebar.addEventListener("click", onSidebarClick)

  // Mobil arama textbox'ı - tıklandığında Quartz arama modalını aç
  const mobileSearchInput = mobileHeader.querySelector(".mobile-search") as HTMLInputElement
  const onMobileSearchClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Sol paneli (menüyü) kapat
    closeMenu()

    let searchContainer = document.querySelector(".search-container") as HTMLElement
    let searchBar = document.querySelector(".search-bar") as HTMLInputElement

    // Eğer container zaten taşınmışsa, body'deki wrapper içindedir
    if (!searchContainer) {
      // Belki wrapper içindedir, tekrar ara
      searchContainer = document.querySelector(
        ".mobile-search-wrapper .search-container",
      ) as HTMLElement
    }

    // Arama barı container içindeyse oradan bul
    if (searchContainer && !searchBar) {
      searchBar = searchContainer.querySelector(".search-bar") as HTMLInputElement
    }

    if (searchContainer) {
      // 1. Container'ı Body'ye taşı (Transform sorununu aşmak için)
      // Wrapper var mı kontrol et
      let wrapper = document.querySelector(".mobile-search-wrapper")
      if (!wrapper) {
        wrapper = document.createElement("div")
        wrapper.className = "search mobile-search-wrapper"
        document.body.appendChild(wrapper)
        // Container'ı wrapper içine taşı
        wrapper.appendChild(searchContainer)
      }

      // 2. Container'ı aktif et
      searchContainer.classList.add("active")

      // 3. Focus
      if (searchBar) {
        requestAnimationFrame(() => {
          searchBar.focus()
        })
      }
    } else {
      // HATA: Arama container bulunamadı!
    }
  }
  mobileSearchInput?.addEventListener("click", onMobileSearchClick)

  // Mobil darkmode - darkmode.inline.ts tarafından yönetiliyor

  const mobileModulesBtn = mobileHeader.querySelector(
    ".mobile-modules-btn",
  ) as HTMLButtonElement | null
  const markModulesSeen = () => {
    localStorage.setItem(NOETIC_MODULES_SEEN_KEY, "true")
    mobileModulesBtn?.classList.remove("is-attention")
  }

  const onModulesSeen = () => markModulesSeen()
  window.addEventListener("noetic-modules-seen", onModulesSeen as EventListener)

  const onMobileModulesClick = (e: MouseEvent) => {
    e.stopPropagation()
    closeMobileFontPanel()
    window.closeThemePanel?.()
    markModulesSeen()
    window.dispatchEvent(
      new CustomEvent("noetic-modules-toggle", {
        detail: { source: "mobile" },
      }),
    )
  }
  mobileModulesBtn?.addEventListener("click", onMobileModulesClick)

  // Mobil ayarlar butonu - settings modal aç
  const mobileSettingsBtn = mobileHeader.querySelector(".mobile-settings-btn") as HTMLButtonElement
  const onMobileSettingsClick = (e: MouseEvent) => {
    e.stopPropagation()
    window.closeThemePanel?.()
    const overlay = document.getElementById("settings-overlay")
    if (overlay) {
      if (overlay.parentElement !== document.body) document.body.appendChild(overlay)
      overlay.classList.add("active")
      window.__noeticSyncSettingsInputs?.()
    }
  }
  mobileSettingsBtn?.addEventListener("click", onMobileSettingsClick)

  // Tema paneli
  const mobileDarkmodeBtn = mobileHeader.querySelector(".mobile-darkmode") as HTMLButtonElement | null

  cleanupMobileChrome = () => {
    closeMenu()
    mobileSearchInput?.removeEventListener("click", onMobileSearchClick)
    mobileModulesBtn?.removeEventListener("click", onMobileModulesClick)
    mobileSettingsBtn?.removeEventListener("click", onMobileSettingsClick)
    window.removeEventListener("noetic-modules-seen", onModulesSeen as EventListener)
    leftSidebar.removeEventListener("click", onSidebarClick)
    overlay.removeEventListener("click", onOverlayClick)
    hamburger.removeEventListener("click", onHamburgerClick)

    hamburger.remove()
    overlay.remove()
    mobileHeader.remove()
  }

  // ===== CLEANUP =====
  window.addCleanup?.(() => cleanupMobileChrome())
}

document.addEventListener("nav", setupMobileChrome)

window.__noeticMobileNav = {
  cleanup: () => {
    document.removeEventListener("nav", setupMobileChrome)
    cleanupMobileChrome()
  },
}
