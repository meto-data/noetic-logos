// Mobile Menu & Header Script
// Mobil görünümde: tam ekran koyu menü + header (logo + arama + darkmode)

document.addEventListener("nav", () => {
  const leftSidebar = document.querySelector(".sidebar.left") as HTMLElement
  if (!leftSidebar) return

  // Mevcut elemanları temizle
  document.querySelector(".hamburger-menu")?.remove()
  document.querySelector(".mobile-overlay")?.remove()
  document.querySelector(".mobile-header")?.remove()

  // ===== MOBİL HEADER =====
  const mobileHeader = document.createElement("div")
  mobileHeader.className = "mobile-header"
  mobileHeader.innerHTML = `
    <a href="/" class="mobile-logo">Noetic Logos</a>
    <input type="text" class="mobile-search" placeholder="Arama..." readonly />
    <div class="mobile-buttons">
      <button class="mobile-font-btn" aria-label="Yazı Tipi">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
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
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    leftSidebar.classList.remove("mobile-open")
    hamburger.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = ""
  }

  const toggleMenu = () => {
    if (leftSidebar.classList.contains("mobile-open")) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  // ===== EVENT LISTENERS =====
  hamburger.addEventListener("click", toggleMenu)
  overlay.addEventListener("click", closeMenu)

  // Menüdeki linklere tıklandığında kapat
  leftSidebar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      setTimeout(closeMenu, 100)
    })
  })

  // Mobil arama textbox'ı - tıklandığında Quartz arama modalını aç
  const mobileSearchInput = mobileHeader.querySelector(".mobile-search") as HTMLInputElement
  mobileSearchInput?.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()

    // Sol paneli (menüyü) kapat
    closeMenu()

    let searchContainer = document.querySelector(".search-container") as HTMLElement
    let searchBar = document.querySelector(".search-bar") as HTMLInputElement

    // Eğer container zaten taşınmışsa, body'deki wrapper içindedir
    if (!searchContainer) {
      // Belki wrapper içindedir, tekrar ara
      searchContainer = document.querySelector(".mobile-search-wrapper .search-container") as HTMLElement
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
  })

  // Mobil darkmode - darkmode.inline.ts tarafından yönetiliyor

  // Mobil font butonu - font dropdown'ı aç/kapat
  const mobileFontBtn = mobileHeader.querySelector(".mobile-font-btn") as HTMLButtonElement

  // Mobil font paneli oluştur (tema paneli gibi)
  const createMobileFontPanel = () => {
    let panel = document.getElementById("mobile-font-panel")
    if (panel) panel.remove()

    const fontDropdownContent = document.querySelector(".font-dropdown-content") as HTMLElement
    if (!fontDropdownContent) return null

    panel = document.createElement("div")
    panel.id = "mobile-font-panel"
    panel.className = "theme-selector-panel" // Tema paneli ile aynı stil
    panel.style.position = "fixed"
    panel.style.top = "65px"
    panel.style.right = "60px"
    panel.style.left = "auto"
    panel.style.display = "none"
    panel.innerHTML = fontDropdownContent.innerHTML
    document.body.appendChild(panel)

    // Event listener'ları ekle
    const radios = panel.querySelectorAll("input[type='radio']") as NodeListOf<HTMLInputElement>
    radios.forEach(radio => {
      radio.addEventListener("change", () => {
        const originalRadio = document.querySelector(`.font-dropdown-content input[value="${radio.value}"][name="${radio.name}"]`) as HTMLInputElement
        if (originalRadio) {
          originalRadio.checked = true
          originalRadio.dispatchEvent(new Event("change", { bubbles: true }))
        }
      })
    })

    // Diğer Fontlar toggle
    const showMore = panel.querySelector(".font-show-more") as HTMLElement
    const fontHidden = panel.querySelector(".font-hidden") as HTMLElement
    showMore?.addEventListener("click", (e) => {
      e.stopPropagation()
      fontHidden?.classList.toggle("expanded")
      showMore?.classList.toggle("expanded")

      // İkon değiştir
      const svg = showMore.querySelector("svg")
      if (svg) {
        if (fontHidden?.classList.contains("expanded")) {
          svg.innerHTML = '<line x1="5" y1="12" x2="19" y2="12"></line>'
        } else {
          svg.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
        }
      }
    })

    return panel
  }

  let fontPanelOpen = false

  mobileFontBtn?.addEventListener("click", (e) => {
    e.stopPropagation()

    // Tema panelini kapat
    const themePanel = document.getElementById("theme-selector-panel")
    if (themePanel) themePanel.style.display = "none"

    // Font paneli
    let panel = document.getElementById("mobile-font-panel")
    if (!panel) {
      panel = createMobileFontPanel()
    }

    if (panel) {
      fontPanelOpen = !fontPanelOpen
      panel.style.display = fontPanelOpen ? "block" : "none"
    }
  })

  // Dışarı tıklayınca mobil font panelini kapat
  document.addEventListener("click", (e) => {
    const panel = document.getElementById("mobile-font-panel")
    const target = e.target as Node
    if (panel && fontPanelOpen && !panel.contains(target) && !mobileFontBtn?.contains(target)) {
      panel.style.display = "none"
      fontPanelOpen = false
    }
  })

  // Tema paneli açıldığında font panelini kapat
  document.querySelectorAll(".mobile-darkmode").forEach(btn => {
    btn.addEventListener("click", () => {
      const fontPanel = document.getElementById("mobile-font-panel")
      if (fontPanel) {
        fontPanel.style.display = "none"
        fontPanelOpen = false
      }
    })
  })

  // ===== CLEANUP =====
  window.addCleanup(() => {
    hamburger.remove()
    overlay.remove()
    mobileHeader.remove()
  })
})
