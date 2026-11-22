interface Window {
  __noeticGestures?: { cleanup: () => void }
}

window.__noeticGestures?.cleanup()

const SWIPE_THRESHOLD = 60
const SWIPE_MAX_TIME = 400

let touchStartX = 0
let touchStartY = 0
let touchStartTime = 0

function isMobile(): boolean {
  return window.innerWidth <= 800
}

function handleTouchStart(e: TouchEvent) {
  if (!isMobile()) return
  const touch = e.touches[0]
  touchStartX = touch.clientX
  touchStartY = touch.clientY
  touchStartTime = Date.now()
}

function handleTouchEnd(e: TouchEvent) {
  if (!isMobile()) return

  const touch = e.changedTouches[0]
  const dx = touch.clientX - touchStartX
  const dy = touch.clientY - touchStartY
  const dt = Date.now() - touchStartTime

  if (dt > SWIPE_MAX_TIME) return
  if (Math.abs(dy) > Math.abs(dx)) return
  if (Math.abs(dx) < SWIPE_THRESHOLD) return

  const target = e.target as HTMLElement
  if (target.closest("pre, code, table, .graph, canvas, input, textarea, .explorer")) return

  if (dx > 0 && touchStartX < 30) {
    const hamburger = document.querySelector(".hamburger-menu") as HTMLElement | null
    if (hamburger && !hamburger.classList.contains("active")) {
      hamburger.click()
    }
  } else if (dx < 0) {
    const hamburger = document.querySelector(".hamburger-menu") as HTMLElement | null
    if (hamburger && hamburger.classList.contains("active")) {
      hamburger.click()
    }
  }
}

document.addEventListener("touchstart", handleTouchStart, { passive: true })
document.addEventListener("touchend", handleTouchEnd, { passive: true })

window.__noeticGestures = {
  cleanup: () => {
    document.removeEventListener("touchstart", handleTouchStart)
    document.removeEventListener("touchend", handleTouchEnd)
  },
}
