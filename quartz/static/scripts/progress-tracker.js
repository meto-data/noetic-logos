/**
 * Progress Tracker
 *
 * Test/quiz tamamlanma oranlarını takip eder ve dashboard için veri sağlar.
 * module_engine.js ile entegre çalışır.
 */

const PROGRESS_STORAGE_KEY = "moduleProgress_v1"

/**
 * @typedef {Object} ModuleProgress
 * @property {number} totalQuestions - Toplam soru sayısı
 * @property {number} answeredQuestions - Cevaplanan soru sayısı
 * @property {number} correctAnswers - Doğru cevap sayısı
 * @property {string} lastAttempt - Son deneme zamanı (ISO string)
 * @property {number} completionRate - Tamamlanma oranı (0-1)
 * @property {number} accuracy - Doğruluk oranı (0-1)
 * @property {number[]} attemptHistory - Her sorunun deneme sayısı
 */

/**
 * Tüm modül ilerlemelerini oku
 * @returns {Object.<string, ModuleProgress>}
 */
function getAllModuleProgress() {
  try {
    const data = localStorage.getItem(PROGRESS_STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch (e) {
    console.debug("Progress data okunamadı:", e)
    return {}
  }
}

/**
 * Belirli bir modülün ilerlemesini oku
 * @param {string} moduleId
 * @returns {ModuleProgress | null}
 */
function getModuleProgress(moduleId) {
  const allProgress = getAllModuleProgress()
  return allProgress[moduleId] || null
}

/**
 * Modül ilerlemesini güncelle
 * @param {string} moduleId
 * @param {ModuleProgress} progress
 */
function updateModuleProgress(moduleId, progress) {
  try {
    const allProgress = getAllModuleProgress()
    allProgress[moduleId] = progress
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(allProgress))

    // Progress güncellendi event'i
    window.dispatchEvent(
      new CustomEvent("module-progress-updated", {
        detail: { moduleId, progress },
      }),
    )
  } catch (e) {
    console.debug("Progress güncellenemedi:", e)
  }
}

/**
 * module_engine.js quiz state'inden progress hesapla
 * @param {string} moduleId
 * @param {Object} quiz - module_engine.js'deki quiz object
 * @param {Object[]} questions - Soru listesi
 */
function calculateProgress(moduleId, quiz, questions) {
  if (!quiz || !questions) return

  const totalQuestions = questions.length
  const answeredQuestions = Object.keys(quiz.answers || {}).length
  const correctAnswers = questions.filter((q, idx) => {
    const userAnswer = quiz.answers[idx]
    return userAnswer && userAnswer === q.correctLabel
  }).length

  const completionRate = totalQuestions > 0 ? answeredQuestions / totalQuestions : 0
  const accuracy = answeredQuestions > 0 ? correctAnswers / answeredQuestions : 0

  const progress = {
    totalQuestions,
    answeredQuestions,
    correctAnswers,
    lastAttempt: new Date().toISOString(),
    completionRate,
    accuracy,
    attemptHistory: quiz.attempts || [],
  }

  updateModuleProgress(moduleId, progress)
}

/**
 * module_engine.js'ye hook ekle
 * Bu fonksiyonu module_engine.js çağırabilir
 */
function hookModuleEngine(moduleId, quiz, questions) {
  if (!window.__FEATURE_FLAGS__?.progressTracking) {
    return // Feature kapalı
  }

  // Her cevap sonrası progress güncelle
  calculateProgress(moduleId, quiz, questions)

  // Prerequisite system ile entegre: Modül tamamlanınca course'u işaretle
  if (quiz.answers && Object.keys(quiz.answers).length === questions.length) {
    const accuracy = questions.filter((q, idx) => quiz.answers[idx] === q.correctLabel).length / questions.length

    // %70 ve üzeri başarı oranıyla tamamlanmışsa
    if (accuracy >= 0.7 && window.__markCourseComplete) {
      const currentSlug = window.location.pathname.replace(/^\/|\/$/g, "")
      window.__markCourseComplete(currentSlug)
    }
  }
}

// Global API
window.__progressTracker = {
  getAllModuleProgress,
  getModuleProgress,
  updateModuleProgress,
  calculateProgress,
  hookModuleEngine,
}
