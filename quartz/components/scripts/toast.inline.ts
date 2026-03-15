interface Window {
  __noeticToast?: (message: string, type?: "info" | "success" | "warning") => void
  __noeticToastCleanup?: { cleanup: () => void }
}

window.__noeticToastCleanup?.cleanup()

const MAX_TOASTS = 3
const TOAST_DURATION = 3000
const FADE_DURATION = 300

function getContainer(): HTMLElement | null {
  return document.getElementById("noetic-toast-container")
}

function dismissToast(el: HTMLElement) {
  el.classList.add("noetic-toast-exit")
  setTimeout(() => el.remove(), FADE_DURATION)
}

function enforceLimit() {
  const container = getContainer()
  if (!container) return
  const toasts = container.querySelectorAll(".noetic-toast:not(.noetic-toast-exit)")
  while (toasts.length > MAX_TOASTS) {
    const oldest = toasts[0] as HTMLElement
    dismissToast(oldest)
    break
  }
}

function showToast(message: string, type: "info" | "success" | "warning" = "info") {
  if (localStorage.getItem("noetic-notifications") === "off") return

  const container = getContainer()
  if (!container) return

  enforceLimit()

  const toast = document.createElement("div")
  toast.className = `noetic-toast noetic-toast-${type}`
  toast.setAttribute("role", "alert")

  const msgSpan = document.createElement("span")
  msgSpan.className = "noetic-toast-message"
  msgSpan.textContent = message

  const closeBtn = document.createElement("button")
  closeBtn.className = "noetic-toast-close"
  closeBtn.setAttribute("aria-label", "Kapat")
  closeBtn.textContent = "×"
  closeBtn.addEventListener("click", () => dismissToast(toast))

  toast.appendChild(msgSpan)
  toast.appendChild(closeBtn)
  container.appendChild(toast)

  requestAnimationFrame(() => {
    toast.classList.add("noetic-toast-enter")
  })

  setTimeout(() => dismissToast(toast), TOAST_DURATION)
}

window.__noeticToast = showToast
window.__noeticToastCleanup = {
  cleanup: () => {
    const container = getContainer()
    if (container) container.innerHTML = ""
  },
}
