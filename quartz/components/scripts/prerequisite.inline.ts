/**
 * Prerequisite Banner Script
 *
 * localStorage'dan tamamlanan dersleri okur ve eksik ön koşulları gösterir.
 */

const COMPLETED_COURSES_KEY = "completedCourses_v1"

interface CompletedCoursesData {
  courses: string[] // Tamamlanan ders slug'ları
  lastUpdated: number // Timestamp
}

/**
 * Tamamlanan dersleri localStorage'dan oku
 */
function getCompletedCourses(): string[] {
  try {
    const data = localStorage.getItem(COMPLETED_COURSES_KEY)
    if (!data) return []

    const parsed: CompletedCoursesData = JSON.parse(data)
    return Array.isArray(parsed.courses) ? parsed.courses : []
  } catch (e) {
    console.debug("Completed courses okunamadı:", e)
    return []
  }
}

/**
 * Ders tamamlandı olarak işaretle
 */
function markCourseComplete(slug: string) {
  try {
    const completed = getCompletedCourses()
    if (!completed.includes(slug)) {
      completed.push(slug)

      const data: CompletedCoursesData = {
        courses: completed,
        lastUpdated: Date.now(),
      }

      localStorage.setItem(COMPLETED_COURSES_KEY, JSON.stringify(data))
    }
  } catch (e) {
    console.debug("Ders tamamlama kaydedilemedi:", e)
  }
}

/**
 * Banner'ı doldur
 */
function populatePrerequisiteBanner(banner: HTMLElement) {
  const prerequisitesStr = banner.getAttribute("data-prerequisites")
  const currentSlug = banner.getAttribute("data-current-slug")

  if (!prerequisitesStr) return

  try {
    const prerequisites: string[] = JSON.parse(prerequisitesStr)
    const completedCourses = getCompletedCourses()

    // Eksik ön koşulları bul
    const missingPrerequisites = prerequisites.filter(
      (prereq) => !completedCourses.includes(prereq),
    )

    if (missingPrerequisites.length === 0) {
      // Tüm ön koşullar tamamlanmış - banner gösterme
      banner.style.display = "none"

      // Mevcut dersi de tamamlanmış olarak işaretle (otomatik)
      if (currentSlug) {
        markCourseComplete(currentSlug)
      }

      return
    }

    // Eksik ön koşulları göster
    const ul = document.createElement("ul")
    ul.className = "prerequisite-list"

    missingPrerequisites.forEach((prereq) => {
      const li = document.createElement("li")
      const a = document.createElement("a")
      a.href = `/${prereq}`
      a.textContent = formatSlugTitle(prereq)
      a.className = "internal"

      li.appendChild(a)
      ul.appendChild(li)
    })

    const warningIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`

    banner.innerHTML = `
      <div class="prerequisite-banner-content warning">
        <div class="prerequisite-header">
          ${warningIcon}
          <span class="prerequisite-title">Önkoşul Uyarısı</span>
        </div>
        <p class="prerequisite-message">
          Bu dersi almadan önce şu dersleri tamamlamanız önerilir:
        </p>
        ${ul.outerHTML}
        <button class="prerequisite-dismiss" data-slug="${currentSlug}">
          Anladım, devam et
        </button>
      </div>
    `

    banner.style.display = "block"

    // Dismiss button event listener
    const dismissBtn = banner.querySelector(".prerequisite-dismiss") as HTMLButtonElement
    if (dismissBtn) {
      dismissBtn.addEventListener("click", () => {
        banner.style.display = "none"

        // Kullanıcı "devam et" derse, mevcut dersi tamamlanmış olarak işaretle
        if (currentSlug) {
          markCourseComplete(currentSlug)
        }
      })
    }
  } catch (e) {
    console.debug("Prerequisite banner populate edilemedi:", e)
    banner.style.display = "none"
  }
}

/**
 * Slug'dan insan okunabilir başlık oluştur
 */
function formatSlugTitle(slug: string): string {
  // "oop1/basics" -> "OOP1 / Basics"
  return slug
    .split("/")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" / ")
}

/**
 * Tüm prerequisite banner'ları işle
 */
function initPrerequisiteBanners() {
  const banners = document.querySelectorAll(".prerequisite-banner")
  banners.forEach((banner) => {
    if (banner instanceof HTMLElement) {
      populatePrerequisiteBanner(banner)
    }
  })
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", initPrerequisiteBanners)

// SPA navigation için
document.addEventListener("nav", initPrerequisiteBanners)

// Global API (diğer script'ler için)
;(window as any).__markCourseComplete = markCourseComplete
;(window as any).__getCompletedCourses = getCompletedCourses
