/**
 * Scroll Position Restore
 *
 * [[]] inline linklerden geri dönüşte scroll pozisyonunu hatırlar.
 * - sessionStorage kullanır (5 dakika timeout)
 * - SPA navigation ile uyumlu
 * - Mobil uyumlu (touch events)
 */

interface ScrollPosition {
  path: string
  scrollY: number
  timestamp: number
}

const STORAGE_KEY_PREFIX = "scroll_position_"
const EXPIRY_TIME = 5 * 60 * 1000 // 5 dakika (ms)

/**
 * Mevcut scroll pozisyonunu kaydet
 */
function saveScrollPosition() {
  const path = window.location.pathname
  const scrollY = window.scrollY || document.documentElement.scrollTop || 0

  const position: ScrollPosition = {
    path,
    scrollY,
    timestamp: Date.now(),
  }

  try {
    sessionStorage.setItem(
      `${STORAGE_KEY_PREFIX}${path}`,
      JSON.stringify(position)
    )
    history.replaceState({ ...history.state, scrollY }, "", window.location.href)
  } catch (e) {
    console.debug("Scroll position kaydetme başarısız:", e)
  }
}

/**
 * Kaydedilmiş scroll pozisyonunu geri yükle
 * URL'de hash (#başlık) varsa geri yükleme YAPMA — tarayıcının
 * anchor'a scroll etmesine izin ver.
 */
function restoreScrollPosition() {
  if (window.location.hash) return

  const path = window.location.pathname

  try {
    let targetY = 0
    const saved = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}${path}`)
    if (saved) {
      const position: ScrollPosition = JSON.parse(saved)
      if (Date.now() - position.timestamp <= EXPIRY_TIME) {
        targetY = position.scrollY
      }
    } else if (typeof history.state?.scrollY === "number") {
      targetY = history.state.scrollY
    }

    if (targetY > 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: targetY,
            left: 0,
            behavior: "instant" as ScrollBehavior,
          })
        })
      })
    }
  } catch (e) {
    console.debug("Scroll position geri yükleme başarısız:", e)
  }
}

/**
 * Eski kayıtları temizle (5 dakikadan eski)
 */
function cleanupOldPositions() {
  const now = Date.now()
  const keysToRemove: string[] = []

  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i)
    if (!key || !key.startsWith(STORAGE_KEY_PREFIX)) continue

    try {
      const saved = sessionStorage.getItem(key)
      if (!saved) continue

      const position: ScrollPosition = JSON.parse(saved)
      if (now - position.timestamp > EXPIRY_TIME) {
        keysToRemove.push(key)
      }
    } catch (e) {
      // Bozuk veri - temizle
      keysToRemove.push(key)
    }
  }

  keysToRemove.forEach((key) => sessionStorage.removeItem(key))
}

// ============================================================================
// Event Listeners
// ============================================================================

// Sayfa ilk yüklendiğinde scroll pozisyonunu geri yükle
document.addEventListener("DOMContentLoaded", () => {
  restoreScrollPosition()
  cleanupOldPositions()
})

// SPA navigation başlamadan hemen önce mevcut sayfanın scroll pozisyonunu kaydet
document.addEventListener("prenav", () => {
  saveScrollPosition()
})

// SPA navigation tamamlandığında scroll pozisyonunu geri yükle (eğer hash yoksa)
document.addEventListener("nav", () => {
  if (!window.location.hash) {
    restoreScrollPosition()
  }
})

// Tarayıcı back/forward butonları için
window.addEventListener("popstate", () => {
  if (!window.location.hash) {
    restoreScrollPosition()
  }
})

// Sayfa kapatılırken veya yenilenmeden önce mevcut pozisyonu kaydet
window.addEventListener("beforeunload", () => {
  saveScrollPosition()
})

// Scroll sırasında pozisyonu kaydet (throttled)
let scrollTimeout: ReturnType<typeof setTimeout> | null = null
window.addEventListener("scroll", () => {
  // Throttle: Her scroll'da değil, 200ms'de bir kaydet
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }

  scrollTimeout = setTimeout(() => {
    saveScrollPosition()
  }, 200)
}, { passive: true })

// Cleanup function (SPA için)
window.addCleanup?.(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
    scrollTimeout = null
  }
})
