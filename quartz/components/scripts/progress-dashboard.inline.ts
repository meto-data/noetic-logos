/**
 * Progress Dashboard Script
 *
 * localStorage'dan progress verilerini okur ve dashboard'u doldurur.
 */

interface ModuleProgress {
  totalQuestions: number
  answeredQuestions: number
  correctAnswers: number
  lastAttempt: string
  completionRate: number
  accuracy: number
}

declare global {
  interface Window {
    __progressTracker?: {
      getAllModuleProgress: () => Record<string, ModuleProgress>
    }
  }
}

/**
 * Dashboard'u doldur
 */
function populateProgressDashboard() {
  const dashboardContent = document.querySelector(".progress-dashboard-content")
  if (!dashboardContent) return

  const allProgress = window.__progressTracker?.getAllModuleProgress?.() || {}

  const moduleEntries = Object.entries(allProgress)

  if (moduleEntries.length === 0) {
    dashboardContent.innerHTML = ""
    return
  }

  // Modülleri son deneme zamanına göre sırala
  const sortedModules = moduleEntries.sort((a, b) => {
    const dateA = new Date(a[1].lastAttempt).getTime()
    const dateB = new Date(b[1].lastAttempt).getTime()
    return dateB - dateA // En yeni önce
  })

  const modulesHTML = sortedModules
    .map(([moduleId, progress]) => {
      const completionPercent = Math.round(progress.completionRate * 100)
      const accuracyPercent = Math.round(progress.accuracy * 100)
      const moduleName = formatModuleName(moduleId)

      const statusClass =
        completionPercent === 100 ? "completed" : completionPercent >= 50 ? "in-progress" : "started"

      return `
        <div class="progress-module-card ${statusClass}">
          <div class="progress-module-header">
            <h4 class="progress-module-name">${moduleName}</h4>
            <span class="progress-module-status">${getStatusLabel(completionPercent)}</span>
          </div>

          <div class="progress-stats">
            <div class="progress-stat">
              <span class="progress-stat-label">Tamamlanma</span>
              <span class="progress-stat-value">${progress.answeredQuestions}/${progress.totalQuestions}</span>
            </div>
            <div class="progress-stat">
              <span class="progress-stat-label">Doğruluk</span>
              <span class="progress-stat-value">${accuracyPercent}%</span>
            </div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${completionPercent}%"></div>
            </div>
            <span class="progress-bar-label">${completionPercent}%</span>
          </div>

          <div class="progress-module-meta">
            <span class="progress-last-attempt">
              Son deneme: ${formatDate(progress.lastAttempt)}
            </span>
          </div>
        </div>
      `
    })
    .join("")

  dashboardContent.innerHTML = `
    <div class="progress-modules-grid">
      ${modulesHTML}
    </div>
  `
}

/**
 * Modül ID'sinden insan okunabilir isim oluştur
 */
function formatModuleName(moduleId: string): string {
  // "dikey_yuzdeler_analizi" -> "Dikey Yüzdeler Analizi"
  return moduleId
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * Durum etiketi oluştur
 */
function getStatusLabel(completionPercent: number): string {
  if (completionPercent === 100) return "Tamamlandı"
  if (completionPercent >= 50) return "Devam Ediyor"
  return "Başlandı"
}

/**
 * Tarihi formatla
 */
function formatDate(isoString: string): string {
  const date = new Date(isoString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return "Az önce"
  if (diffMins < 60) return `${diffMins} dakika önce`
  if (diffHours < 24) return `${diffHours} saat önce`
  if (diffDays < 7) return `${diffDays} gün önce`

  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
    year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  })
}

/**
 * Init fonksiyonu
 */
function initProgressDashboard() {
  populateProgressDashboard()

  // Refresh button event listener
  const refreshBtn = document.querySelector(".progress-refresh") as HTMLButtonElement
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      populateProgressDashboard()

      // Rotation animation
      refreshBtn.classList.add("rotating")
      setTimeout(() => {
        refreshBtn.classList.remove("rotating")
      }, 500)
    })
  }

  // Progress güncelleme event'ini dinle
  window.addEventListener("module-progress-updated", () => {
    populateProgressDashboard()
  })
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", initProgressDashboard)

// SPA navigation için
document.addEventListener("nav", initProgressDashboard)
