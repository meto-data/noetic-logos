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
  } catch (e) {
    // sessionStorage dolu veya devre dışı olabilir - sessizce devam et
    console.debug("Scroll position kaydetme başarısız:", e)
  }
}

/**
 * Kaydedilmiş scroll pozisyonunu geri yükle
 */
function restoreScrollPosition() {
  const path = window.location.pathname

  try {
    const saved = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}${path}`)
    if (!saved) return

    const position: ScrollPosition = JSON.parse(saved)

    // 5 dakikadan eski kayıtları yoksay
    if (Date.now() - position.timestamp > EXPIRY_TIME) {
      sessionStorage.removeItem(`${STORAGE_KEY_PREFIX}${path}`)
      return
    }

    // Sayfa tam yüklendikten sonra scroll pozisyonunu geri yükle
    // requestAnimationFrame kullanarak DOM'un hazır olmasını bekle
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: position.scrollY,
          left: 0,
          behavior: "instant" as ScrollBehavior, // Smooth değil, instant
        })
      })
    })
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

// SPA navigation olduğunda (Quartz "nav" event'i)
document.addEventListener("nav", () => {
  // Yeni sayfaya geçmeden önce mevcut pozisyonu kaydet
  saveScrollPosition()

  // Yeni sayfanın scroll pozisyonunu geri yükle
  // Kısa bir delay ile (DOM güncellenene kadar bekle)
  setTimeout(() => {
    restoreScrollPosition()
  }, 50)
})

// Tarayıcı back/forward butonları için
window.addEventListener("popstate", () => {
  // popstate sonrası scroll pozisyonunu geri yükle
  setTimeout(() => {
    restoreScrollPosition()
  }, 50)
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
