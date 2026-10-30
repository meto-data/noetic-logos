interface Window {
  __noeticModules?: { cleanup: () => void }
}

window.__noeticModules?.cleanup()

const NOETIC_MODULES_SEEN_KEY = "noetic-modules-seen"

const setModulesModalLock = (locked: boolean) => {
  document.body.classList.toggle("modules-modal-open", locked)
  document.documentElement.classList.toggle("modules-modal-open", locked)
}

function getBasePath(): string {
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

let cleanupNoeticModules = () => {}

const MODULE_ICONS: Record<string, string> = {
  oop: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>`,
  language: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>`,
  ybs: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>`,
  finance: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>`,
  web: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.7 4 5.7 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.7-4-9s1.5-6.3 4-9Z" /></svg>`,
  ethics: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.2-1.93.3-3 .3s-2.13-.1-3-.3Z" /><path d="m2 16 3-8 3 8c-.87.2-1.93.3-3 .3s-2.13-.1-3-.3Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h18" /></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" /></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>`,
  research: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
}

type NoeticModule = {
  id: string
  title: string
  periodLabel: string
  periodOrder: number
  moduleUrl: string
  iconType: string
  subtitle?: string
  university?: "deu" | "duzce"
  grade?: number
}

function setupNoeticModules() {
  cleanupNoeticModules()
  cleanupNoeticModules = () => {}

  const root = document.querySelector(".noetic-modules-root") as HTMLElement | null
  if (!root) return

  // Eski/stale overlay veya panel varsa temizle ve yenilerini body'ye taşı
  const existingOverlayInBody = document.querySelector("body > #noetic-modules-overlay")
  const existingPanelInBody = document.querySelector("body > #noetic-modules-panel")

  let overlay = root.querySelector("#noetic-modules-overlay") as HTMLElement | null
  let panel = root.querySelector("#noetic-modules-panel") as HTMLElement | null

  if (overlay) {
    existingOverlayInBody?.remove()
    document.body.appendChild(overlay)
  } else {
    overlay = existingOverlayInBody as HTMLElement | null
  }

  if (panel) {
    existingPanelInBody?.remove()
    document.body.appendChild(panel)
  } else {
    panel = existingPanelInBody as HTMLElement | null
  }

  if (!panel || !overlay) return

  const scrollContainer = panel.querySelector("[data-noetic-modules-scroll]") as HTMLElement | null
  const navWrapper = panel.querySelector(".noetic-modules-nav-wrapper") as HTMLElement | null
  const univHeading = panel.querySelector("[data-univ-heading]") as HTMLElement | null
  const gradeHeading = panel.querySelector("[data-grade-heading]") as HTMLElement | null

  if (!scrollContainer) return

  // Modül verisini al
  const rawData = root?.dataset.noeticModules ?? panel.dataset.noeticModules ?? "[]"
  const moduleData = (JSON.parse(rawData) as NoeticModule[]).map((m) => ({
    ...m,
    university: m.university ?? "duzce",
    grade: m.grade ?? (m.periodOrder === 0 ? 1 : 2),
  }))

  // Durum Yönetimi (Varsayılan olarak DEÜ seçilidir)
  let currentUniv: "deu" | "duzce" = "deu"
  let currentGrade: "all" | "1" | "2" | "3" = "all"

  const UNIV_LABELS: Record<string, string> = {
    deu: "DEÜ",
    duzce: "Düzce",
  }

  const GRADE_LABELS: Record<string, string> = {
    all: "Tüm Sınıflar",
    "1": "1. Sınıf",
    "2": "2. Sınıf",
    "3": "3. Sınıf",
  }

  const syncLinks = () => {
    const basePath = getBasePath()
    panel.querySelectorAll("[data-noetic-module-link]").forEach((node) => {
      const link = node as HTMLAnchorElement
      const moduleUrl = link.dataset.moduleUrl
      if (!moduleUrl) return
      link.href = new URL(moduleUrl, basePath).toString()
      link.target = "_blank"
      link.rel = "noopener noreferrer"
    })
  }

  const renderModules = () => {
    scrollContainer.innerHTML = ""
    const basePath = getBasePath()

    let filtered = moduleData.filter((m) => m.university === currentUniv)

    if (currentGrade !== "all") {
      const gradeNum = parseInt(currentGrade, 10)
      filtered = filtered.filter((m) => m.grade === gradeNum)
    }

    if (filtered.length === 0) {
      const emptyDiv = document.createElement("div")
      emptyDiv.className = "noetic-modules-empty"
      emptyDiv.innerHTML = `
        <div class="noetic-modules-empty__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <h3 class="noetic-modules-empty__title">Modül Bulunamadı</h3>
        <p class="noetic-modules-empty__desc">
          Seçili sınıf için henüz modül eklenmemiştir.
        </p>
      `
      scrollContainer.appendChild(emptyDiv)
      return
    }

    // Gruplandırma: Sınıf ve Dönem bilgisine göre
    const grouped = filtered
      .slice()
      .sort((a, b) => a.periodOrder - b.periodOrder || a.title.localeCompare(b.title, "tr"))
      .reduce((acc, module) => {
        const key = `${module.periodOrder}-${module.periodLabel}`
        if (!acc.has(key)) {
          acc.set(key, { label: module.periodLabel, items: [] as NoeticModule[] })
        }
        acc.get(key)!.items.push(module)
        return acc
      }, new Map<string, { label: string; items: NoeticModule[] }>())

    const fragment = document.createDocumentFragment()

    grouped.forEach((group) => {
      const groupEl = document.createElement("div")
      groupEl.className = "noetic-modules-group"

      const groupTitle = document.createElement("h4")
      groupTitle.className = "noetic-modules-group__title"
      groupTitle.textContent = group.label

      const gridEl = document.createElement("div")
      gridEl.className = "noetic-modules-grid"

      group.items.forEach((module) => {
        const card = document.createElement("a")
        card.className = "noetic-modules-card"
        card.dataset.noeticModuleLink = ""
        card.dataset.moduleUrl = module.moduleUrl
        card.target = "_blank"
        card.rel = "noopener noreferrer"
        card.href = new URL(module.moduleUrl, basePath).toString()

        const iconSvg = MODULE_ICONS[module.iconType] ?? MODULE_ICONS.ybs

        card.innerHTML = `
          <div class="noetic-modules-card__icon-box" aria-hidden="true">
            ${iconSvg}
          </div>
          <div class="noetic-modules-card__body">
            <h4 class="noetic-modules-card__title">${module.title}</h4>
            ${module.subtitle ? `<p class="noetic-modules-card__subtitle">${module.subtitle}</p>` : ""}
          </div>
          <div class="noetic-modules-card__arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        `
        gridEl.appendChild(card)
      })

      groupEl.appendChild(groupTitle)
      groupEl.appendChild(gridEl)
      fragment.appendChild(groupEl)
    })

    scrollContainer.appendChild(fragment)
    syncLinks()
  }

  const updateUI = () => {
    const univModules = moduleData.filter((m) => m.university === currentUniv)
    const counts: Record<string, number> = {
      all: univModules.length,
      "1": univModules.filter((m) => m.grade === 1).length,
      "2": univModules.filter((m) => m.grade === 2).length,
      "3": univModules.filter((m) => m.grade === 3).length,
    }

    if (currentGrade !== "all" && (counts[currentGrade] ?? 0) === 0) {
      currentGrade = "all"
    }

    // 1. Masaüstü Üniversite Segmenti
    panel.querySelectorAll(".noetic-modules-segment-item").forEach((btn) => {
      const btnEl = btn as HTMLButtonElement
      const isActive = btnEl.dataset.univ === currentUniv
      btnEl.classList.toggle("is-active", isActive)
      btnEl.setAttribute("aria-selected", isActive ? "true" : "false")
    })

    if (navWrapper) {
      navWrapper.classList.remove("is-hidden")
    }

    // 2. Masaüstü Sınıf Navigasyonu ve Sayı Rozetleri (Sadece o üniversitede var olan sınıflar oluşturulur)
    const gradeNav =
      (panel.querySelector("[data-grade-nav]") as HTMLElement | null) ??
      (panel.querySelector(".noetic-modules-nav") as HTMLElement | null)

    const availableGrades = (["all", "1", "2", "3"] as const).filter(
      (g) => g === "all" || (counts[g] ?? 0) > 0,
    )

    if (gradeNav) {
      gradeNav.innerHTML = availableGrades
        .map((gradeKey) => {
          const isActive = gradeKey === currentGrade
          const count = counts[gradeKey] ?? 0
          const label = GRADE_LABELS[gradeKey] ?? `${gradeKey}. Sınıf`
          return `
            <button
              type="button"
              class="noetic-modules-nav-item${isActive ? " is-active" : ""}"
              data-grade="${gradeKey}"
            >
              <span class="noetic-modules-nav-item__label">${label}</span>
              <span class="noetic-modules-nav-item__badge" data-count="${gradeKey}">${count}</span>
            </button>
          `
        })
        .join("")
    }

    // 3. Masaüstü Başlık Güncellemesi
    if (univHeading) {
      univHeading.textContent =
        currentUniv === "deu" ? "Dokuz Eylül Üniversitesi" : "Düzce Üniversitesi"
    }
    if (gradeHeading) {
      const activeCount = counts[currentGrade] ?? univModules.length
      gradeHeading.textContent =
        currentGrade === "all"
          ? `Tüm Sınıflar • ${activeCount} Modül`
          : `${GRADE_LABELS[currentGrade]} • ${activeCount} Modül`
    }

    // 4. Mobil Üniversite Dropdown Güncellemesi
    const univSelect = panel.querySelector("[data-select-type='univ']")
    if (univSelect) {
      const label = univSelect.querySelector(".noetic-modules-dropdown__label")
      if (label) label.textContent = UNIV_LABELS[currentUniv] ?? currentUniv
      univSelect.querySelectorAll(".noetic-modules-dropdown__option").forEach((opt) => {
        const optEl = opt as HTMLElement
        optEl.classList.toggle("is-selected", optEl.dataset.value === currentUniv)
      })
    }

    // 5. Mobil Sınıf Dropdown Güncellemesi (Sadece o üniversitede var olan sınıflar)
    const gradeSelect = panel.querySelector("[data-select-type='grade']")
    if (gradeSelect) {
      const label = gradeSelect.querySelector(".noetic-modules-dropdown__label")
      if (label) label.textContent = GRADE_LABELS[currentGrade] ?? currentGrade
      const gradeMenu =
        (gradeSelect.querySelector("[data-grade-menu]") as HTMLElement | null) ??
        (gradeSelect.querySelector(".noetic-modules-dropdown__menu") as HTMLElement | null)
      if (gradeMenu) {
        gradeMenu.innerHTML = availableGrades
          .map((gradeKey) => {
            const isSelected = gradeKey === currentGrade
            const optLabel = GRADE_LABELS[gradeKey] ?? `${gradeKey}. Sınıf`
            return `
              <button
                type="button"
                class="noetic-modules-dropdown__option${isSelected ? " is-selected" : ""}"
                data-value="${gradeKey}"
              >
                ${optLabel}
              </button>
            `
          })
          .join("")
      }
    }

    renderModules()
  }

  const markSeen = () => {
    localStorage.setItem(NOETIC_MODULES_SEEN_KEY, "true")
    window.dispatchEvent(new CustomEvent("noetic-modules-seen"))
  }

  const openPanel = () => {
    updateUI()
    markSeen()
    root?.classList.add("open")
    overlay.classList.add("visible")
    panel.classList.add("visible")
    panel.setAttribute("aria-hidden", "false")
    setModulesModalLock(true)
  }

  const closePanel = () => {
    root?.classList.remove("open")
    overlay.classList.remove("visible")
    panel.classList.remove("visible")
    panel.setAttribute("aria-hidden", "true")
    setModulesModalLock(false)

    panel.querySelectorAll(".noetic-modules-dropdown.is-open").forEach((d) => {
      d.classList.remove("is-open")
    })
  }

  // Panel içi etkileşimler
  const onPanelClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement

    // data-action="close" tıklandıysa
    if (target.closest("[data-action='close']")) {
      closePanel()
      return
    }

    // Masaüstü Segment Değişimi ([ DEÜ | Düzce ])
    const segmentItem = target.closest(".noetic-modules-segment-item") as HTMLElement | null
    if (segmentItem && segmentItem.dataset.univ) {
      currentUniv = segmentItem.dataset.univ as "deu" | "duzce"
      updateUI()
      return
    }

    // Masaüstü Sınıf Değişimi ([ Tümü | 1. Sınıf | 2. Sınıf | 3. Sınıf ])
    const navItem = target.closest(".noetic-modules-nav-item") as HTMLElement | null
    if (navItem && navItem.dataset.grade) {
      currentGrade = navItem.dataset.grade as "all" | "1" | "2" | "3"
      updateUI()
      return
    }

    // Mobil Dropdown Aç/Kapa
    const dropdownTrigger = target.closest(
      ".noetic-modules-dropdown__trigger",
    ) as HTMLElement | null
    if (dropdownTrigger) {
      const dropdown = dropdownTrigger.closest(".noetic-modules-dropdown")
      if (dropdown) {
        const wasOpen = dropdown.classList.contains("is-open")
        panel
          .querySelectorAll(".noetic-modules-dropdown.is-open")
          .forEach((d) => d.classList.remove("is-open"))
        if (!wasOpen) dropdown.classList.add("is-open")
      }
      return
    }

    // Mobil Dropdown Seçenek Tıklaması
    const dropdownOption = target.closest(
      ".noetic-modules-dropdown__option",
    ) as HTMLElement | null
    if (dropdownOption && dropdownOption.dataset.value) {
      const selectBox = dropdownOption.closest("[data-select-type]") as HTMLElement | null
      const selectType = selectBox?.dataset.selectType
      const val = dropdownOption.dataset.value

      if (selectType === "univ") {
        currentUniv = val as "deu" | "duzce"
      } else if (selectType === "grade") {
        currentGrade = val as "all" | "1" | "2" | "3"
      }

      dropdownOption.closest(".noetic-modules-dropdown")?.classList.remove("is-open")
      updateUI()
      return
    }

    // Dropdown dışına tıklandıysa menüleri kapa
    if (!target.closest(".noetic-modules-dropdown")) {
      panel
        .querySelectorAll(".noetic-modules-dropdown.is-open")
        .forEach((d) => d.classList.remove("is-open"))
    }
  }

  const onOverlayClick = () => closePanel()

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closePanel()
    }
  }

  const onToggleEvent = () => {
    panel.classList.contains("visible") ? closePanel() : openPanel()
  }

  // GLOBAL EVENT DELEGATION:
  // Sayfada nerede olursa olsun "Modüller" tetikleyicisine basılınca modalı garantili aç
  const onGlobalClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const triggerBtn = target.closest(
      ".noetic-modules-trigger, [data-noetic-modules-trigger], .mobile-modules-btn",
    )
    if (triggerBtn) {
      e.preventDefault()
      e.stopPropagation()
      panel.classList.contains("visible") ? closePanel() : openPanel()
      return
    }

    if (!target.closest(".noetic-modules-dropdown")) {
      panel
        .querySelectorAll(".noetic-modules-dropdown.is-open")
        .forEach((d) => d.classList.remove("is-open"))
    }
  }

  overlay.addEventListener("click", onOverlayClick)
  panel.addEventListener("click", onPanelClick)
  document.addEventListener("keydown", onKeydown)
  document.addEventListener("click", onGlobalClick)
  window.addEventListener("noetic-modules-toggle", onToggleEvent as EventListener)

  updateUI()

  cleanupNoeticModules = () => {
    closePanel()
    overlay.removeEventListener("click", onOverlayClick)
    panel.removeEventListener("click", onPanelClick)
    document.removeEventListener("keydown", onKeydown)
    document.removeEventListener("click", onGlobalClick)
    window.removeEventListener("noetic-modules-toggle", onToggleEvent as EventListener)
  }
}

// Hem nav hem DOMContentLoaded olaylarında başlat
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupNoeticModules)
} else {
  setupNoeticModules()
}
document.addEventListener("nav", setupNoeticModules)

window.__noeticModules = {
  cleanup: () => cleanupNoeticModules(),
}

export {}
