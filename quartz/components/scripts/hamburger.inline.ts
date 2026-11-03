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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 -32 576 576" fill="currentColor" width="18" height="18" class="fa-icon" style="overflow: visible;">
          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 10.1-24.6 7.1l-55.6-18.4c-13.7 10.8-28.7 19.9-44.9 26.9l-11.4 57.3c-1.8 9.1-8.9 16.1-18.1 17.5c-12.7 1.9-25.7 2.9-38.9 2.9s-26.2-.9-38.9-2.9c-9.2-1.4-16.3-8.4-18.1-17.5l-11.4-57.3c-16.2-7-31.2-16.1-44.9-26.9L76.5 404c-8.9 3-18.7 .1-24.6-7.1c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C57.9 273.1 57.3 264.6 57.3 256s.6-17.1 1.7-25.4L15.7 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-10.1 24.6-7.1l55.6 18.4c13.7-10.8 28.7-19.9 44.9-26.9l11.4-57.3c1.8-9.1 8.9-16.1 18.1-17.5C215.8 45.7 228.8 44.7 242 44.7s26.2 .9 38.9 2.9c9.2 1.4 16.3 8.4 18.1 17.5l11.4 57.3c16.2 7 31.2 16.1 44.9 26.9l55.6-18.4c8.9-3 18.7-.1 24.6 7.1c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
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
