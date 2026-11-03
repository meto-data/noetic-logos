// Mobile Menu & Header Script
// Mobil görünümde: tam ekran koyu menü + header (logo + arama + darkmode)

interface Window {
  __noeticMobileNav?: { cleanup: () => void }
  __noeticSyncSettingsInputs?: () => void
  closeThemePanel?: () => void
  openSettingsModal?: (tab?: string) => void
  closeSettingsModal?: () => void
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" class="fa-icon">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
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
    closeMobileFontPanel()
    window.closeThemePanel?.()
    window.openSettingsModal?.()
  }
  mobileSettingsBtn?.addEventListener("click", onMobileSettingsClick)

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
