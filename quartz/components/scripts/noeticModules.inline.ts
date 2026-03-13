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
  const closeButton = root.querySelector(".noetic-modules-panel__close") as HTMLButtonElement | null
  if (!overlay || !panel) return

  const syncLinks = () => {
    const basePath = getBasePath()
    root.querySelectorAll("[data-noetic-module-link]").forEach((node) => {
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

  const positionDesktopPanel = () => {
    if (!trigger) return
    const rect = trigger.getBoundingClientRect()
    const panelRect = panel.getBoundingClientRect()
    const top = Math.max(76, rect.bottom + 10)
    const left = Math.min(
      window.innerWidth - panelRect.width - 16,
      Math.max(16, rect.right - panelRect.width),
    )

    panel.style.top = `${top}px`
    panel.style.left = `${left}px`
  }

  const openPanel = (source: "desktop" | "mobile") => {
    syncLinks()
    markSeen()
    root.classList.add("open")
    panel.setAttribute("aria-hidden", "false")

    if (source === "desktop" && window.innerWidth >= 800) {
      positionDesktopPanel()
    } else {
      panel.style.left = "12px"
    }
  }

  const closePanel = () => {
    root.classList.remove("open")
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
    if (root.classList.contains("open") && window.innerWidth >= 800) {
      positionDesktopPanel()
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
  }
}

document.addEventListener("nav", setupNoeticModules)

window.__noeticModules = {
  cleanup: () => cleanupNoeticModules(),
}
