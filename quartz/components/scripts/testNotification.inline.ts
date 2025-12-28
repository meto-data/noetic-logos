/**
 * Test Modülü Bildirimi - Toast Notification
 * 
 * Davranış:
 * - Tüm notlarda gösterilir
 * - Kapatıldığında gider (normal notlar için kalıcı)
 * - Türk Dili notlarında: sayfa yenilenince/geçişte HER ZAMAN tekrar gösterilir
 * - Türk Dili notlarında: scroll ile birlikte kayar (fixed değil, relative)
 */

const STORAGE_KEY = 'testModuleToastDismissed'

// GitHub Pages ve Cloudflare Pages uyumlu base path hesaplama
function getBasePath(): string {
    // Try to get base from <base> tag first
    const baseElement = document.querySelector("base")
    if (baseElement?.href) {
        return baseElement.href.endsWith("/") ? baseElement.href : baseElement.href + "/"
    }

    // Fallback: detect from current URL
    const pathname = window.location.pathname
    const segments = pathname.split("/").filter(Boolean)

    // GitHub Pages için: ilk segment repo adı
    if (segments.length > 0 && window.location.hostname.endsWith(".github.io")) {
        return `${window.location.origin}/${segments[0]}/`
    }

    // Root deployment (Cloudflare Pages vb.)
    return window.location.origin + "/"
}

function initTestNotification() {
    const container = document.querySelector('.test-notification-container') as HTMLElement
    if (!container) return

    const toast = container.querySelector('.toast-notification') as HTMLElement
    const closeBtn = container.querySelector('.toast-close') as HTMLElement
    const moduleLink = container.querySelector('.toast-link[data-module-link]') as HTMLAnchorElement

    if (!toast || !closeBtn) return

    const isTurkDili = container.dataset.isTurkDili === 'true'
    const currentSlug = container.dataset.slug || ''
    const moduleUrl = container.dataset.moduleUrl || 'static/logos-module/index.html'

    // Modül linkini dinamik olarak ayarla
    if (moduleLink) {
        const basePath = getBasePath()
        moduleLink.href = new URL(moduleUrl, basePath).toString()
    }

    // Kapatma durumunu kontrol et
    const dismissedData = localStorage.getItem(STORAGE_KEY)

    if (dismissedData && !isTurkDili) {
        // Normal notlar: kapatıldıysa gösterme
        const dismissed = JSON.parse(dismissedData)
        if (dismissed.permanent) {
            toast.classList.add('hidden')
            return
        }
    }

    // Türk Dili notları: her zaman göster (sayfa yenilendiğinde/geçişte)
    // Sadece mevcut oturumda kapatıldıysa kontrol et
    if (isTurkDili) {
        const sessionDismissed = sessionStorage.getItem('turkDiliToastDismissed')
        if (sessionDismissed === currentSlug) {
            // Aynı not için bu oturumda kapatıldı
            toast.classList.add('hidden')
        } else {
            // Yeni not veya yenileme - göster
            toast.classList.remove('hidden')
        }
    }

    // Toast kapatma işlevi
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault()

        if (isTurkDili) {
            // Türk Dili notları: inline olduğu için direkt gizle
            toast.classList.add('hidden')
            // Sadece bu oturum için bu notu kaydet
            sessionStorage.setItem('turkDiliToastDismissed', currentSlug)
        } else {
            // Normal notlar: animasyonlu kapanış + kalıcı kaydet
            toast.style.animation = 'toast-slide-out 0.3s ease forwards'

            setTimeout(() => {
                toast.classList.add('hidden')
                toast.style.animation = ''

                // Kalıcı olarak kaydet
                localStorage.setItem(STORAGE_KEY, JSON.stringify({
                    permanent: true,
                    timestamp: Date.now()
                }))
            }, 300)
        }
    })
}

document.addEventListener("nav", initTestNotification)
