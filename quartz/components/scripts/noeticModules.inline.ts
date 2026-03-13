interface Window {
  __noeticModules?: { cleanup: () => void }
}

window.__noeticModules?.cleanup()

const NOETIC_MODULES_SEEN_KEY = "noetic-modules-seen"

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
  oop: `<svg class="noetic-modules-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>`,
  language: `<svg class="noetic-modules-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>`,
  ybs: `<svg class="noetic-modules-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>`,
  finance: `<svg class="noetic-modules-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>`,
}

type NoeticModule = {
  id: string
  title: string
  periodLabel: string
  periodOrder: number
  moduleUrl: string
  iconType: string
}

function setupNoeticModules() {
  cleanupNoeticModules()
  cleanupNoeticModules = () => {}

  const root = document.querySelector(".noetic-modules-root") as HTMLElement | null
  if (!root) return

  const trigger = root.querySelector(
    "[data-noetic-modules-trigger='desktop']",
  ) as HTMLButtonElement | null
  const overlay = root.querySelector(".noetic-modules-overlay") as HTMLElement | null
  const panel = root.querySelector(".noetic-modules-panel") as HTMLElement | null
  const grid = root.querySelector("[data-noetic-modules-grid]") as HTMLElement | null
  const closeButton = root.querySelector(".noetic-modules-panel__close") as HTMLButtonElement | null
  if (!overlay || !panel || !grid) return

  document.body.appendChild(overlay)
  document.body.appendChild(panel)

  const moduleData = JSON.parse(root.dataset.noeticModules ?? "[]") as NoeticModule[]

  const renderModulesIfNeeded = () => {
    if (grid.childElementCount > 0) return

    const basePath = getBasePath()
    const fragment = document.createDocumentFragment()

    const groupedModules = moduleData
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

    groupedModules.forEach((group) => {
      const section = document.createElement("section")
      section.className = "noetic-modules-section"
      section.innerHTML = `<h4 class="noetic-modules-section__title">${group.label}</h4><div class="noetic-modules-section__grid"></div>`

      const sectionGrid = section.querySelector(".noetic-modules-section__grid") as HTMLElement

      group.items.forEach((module) => {
        const card = document.createElement("a")
        card.className = "noetic-modules-card"
        card.dataset.noeticModuleLink = ""
        card.dataset.moduleUrl = module.moduleUrl
        card.target = "_blank"
        card.rel = "noopener noreferrer"
        card.href = new URL(module.moduleUrl, basePath).toString()
        card.innerHTML = `
          <span class="noetic-modules-card__icon">${MODULE_ICONS[module.iconType] ?? MODULE_ICONS.ybs}</span>
          <span class="noetic-modules-card__body">
            <span class="noetic-modules-card__title">${module.title}</span>
          </span>
          <span class="noetic-modules-card__arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
        `
        sectionGrid.appendChild(card)
      })

      fragment.appendChild(section)
    })

    grid.appendChild(fragment)
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

  const markSeen = () => {
    localStorage.setItem(NOETIC_MODULES_SEEN_KEY, "true")
    window.dispatchEvent(new CustomEvent("noetic-modules-seen"))
  }

  const positionPanel = (source: "desktop" | "mobile") => {
    if (source === "desktop" && window.innerWidth >= 800) {
      panel.style.top = "88px"
      panel.style.left = "50%"
      return
    }

    panel.style.top = "72px"
    panel.style.left = "50%"
  }

  const openPanel = (source: "desktop" | "mobile") => {
    renderModulesIfNeeded()
    syncLinks()
    markSeen()
    root.classList.add("open")
    overlay.classList.add("visible")
    panel.classList.add("visible")
    panel.setAttribute("aria-hidden", "false")
    positionPanel(source)
  }

  const closePanel = () => {
    root.classList.remove("open")
    overlay.classList.remove("visible")
    panel.classList.remove("visible")
    panel.setAttribute("aria-hidden", "true")
  }

  const onTriggerClick = (event: MouseEvent) => {
    event.stopPropagation()
    root.classList.contains("open") ? closePanel() : openPanel("desktop")
  }

  const onOverlayClick = () => closePanel()
  const onCloseClick = () => closePanel()

  const onDocumentClick = (event: MouseEvent) => {
    const target = event.target as Node
    if (!root.classList.contains("open")) return
    if (root.contains(target)) return
    closePanel()
  }

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closePanel()
    }
  }

  const onResize = () => {
    if (root.classList.contains("open")) {
      positionPanel(window.innerWidth >= 800 ? "desktop" : "mobile")
    }
  }

  const onToggleEvent = (event: Event) => {
    const customEvent = event as CustomEvent<{ source?: "desktop" | "mobile" }>
    if (root.classList.contains("open")) {
      closePanel()
      return
    }
    openPanel(customEvent.detail?.source ?? "mobile")
  }

  trigger?.addEventListener("click", onTriggerClick)
  overlay.addEventListener("click", onOverlayClick)
  closeButton?.addEventListener("click", onCloseClick)
  document.addEventListener("click", onDocumentClick)
  document.addEventListener("keydown", onKeydown)
  window.addEventListener("resize", onResize)
  window.addEventListener("noetic-modules-toggle", onToggleEvent as EventListener)
  syncLinks()

  cleanupNoeticModules = () => {
    closePanel()
    trigger?.removeEventListener("click", onTriggerClick)
    overlay.removeEventListener("click", onOverlayClick)
    closeButton?.removeEventListener("click", onCloseClick)
    document.removeEventListener("click", onDocumentClick)
    document.removeEventListener("keydown", onKeydown)
    window.removeEventListener("resize", onResize)
    window.removeEventListener("noetic-modules-toggle", onToggleEvent as EventListener)
    root.appendChild(overlay)
    root.appendChild(panel)
  }
}

document.addEventListener("nav", setupNoeticModules)

window.__noeticModules = {
  cleanup: () => cleanupNoeticModules(),
}
