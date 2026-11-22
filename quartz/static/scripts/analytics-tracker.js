/**
 * Module Analytics Tracker
 *
 * Soru bazlı istatistikler toplar:
 * - Soru zorluğu (zorluk, süre, hata oranı)
 * - Kullanıcı performansı
 * - Zaman metrikleri
 */

const ANALYTICS_STORAGE_KEY = "questionAnalytics_v1"
const MODULE_ANALYTICS_KEY = "moduleAnalytics_v1"

/**
 * @typedef {Object} QuestionAttempt
 * @property {string} answer - Verilen cevap
 * @property {boolean} correct - Doğru mu?
 * @property {number} time - Harcanan süre (saniye)
 * @property {string} timestamp - ISO timestamp
 */

/**
 * @typedef {Object} QuestionAnalytics
 * @property {number} attempts - Toplam deneme sayısı
 * @property {boolean} correctOnFirstTry - İlk denemede doğru mu?
 * @property {number} totalTimeSpent - Toplam harcanan süre (saniye)
 * @property {boolean} lastAttemptCorrect - Son deneme doğru mu?
 * @property {QuestionAttempt[]} attemptHistory - Tüm denemeler
 */

/**
 * Tüm soru analitiğini oku
 * @returns {Object.<string, QuestionAnalytics>}
 */
function getAllQuestionAnalytics() {
  try {
    const data = localStorage.getItem(ANALYTICS_STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch (e) {
    console.debug("Analytics data okunamadı:", e)
    return {}
  }
}

/**
 * Soru analitiğini güncelle
 * @param {string} questionId - "moduleId_q5" formatında
 * @param {QuestionAttempt} attempt - Yeni deneme
 */
function trackQuestionAttempt(questionId, attempt) {
  try {
    const allAnalytics = getAllQuestionAnalytics()
    const existing = allAnalytics[questionId] || {
      attempts: 0,
      correctOnFirstTry: false,
      totalTimeSpent: 0,
      lastAttemptCorrect: false,
      attemptHistory: [],
    }

    existing.attempts += 1
    existing.totalTimeSpent += attempt.time
    existing.lastAttemptCorrect = attempt.correct
    existing.attemptHistory.push(attempt)

    // İlk denemede doğru mu?
    if (existing.attempts === 1 && attempt.correct) {
      existing.correctOnFirstTry = true
    }

    allAnalytics[questionId] = existing
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(allAnalytics))

    // Event dispatch
    window.dispatchEvent(
      new CustomEvent("question-analytics-updated", {
        detail: { questionId, analytics: existing },
      }),
    )
  } catch (e) {
    console.debug("Analytics güncellenemedi:", e)
  }
}

/**
 * Modül seviyesi analitiği hesapla
 * @param {string} moduleId
 * @param {Object} quiz
 * @param {Object[]} questions
 */
function updateModuleAnalytics(moduleId, quiz, questions) {
  try {
    const allModuleAnalytics = JSON.parse(localStorage.getItem(MODULE_ANALYTICS_KEY) || "{}")

    const existing = allModuleAnalytics[moduleId] || {
      totalAttempts: 0,
      averageScore: 0,
      averageTimePerQuestion: 0,
      completionDates: [],
      improvementRate: 0,
    }

    existing.totalAttempts += 1

    // Average score hesapla
    const correctAnswers = questions.filter((q, idx) => quiz.answers[idx] === q.correctLabel).length
    const currentScore = questions.length > 0 ? correctAnswers / questions.length : 0

    // İyileşme oranı hesapla
    if (existing.averageScore > 0) {
      existing.improvementRate = (currentScore - existing.averageScore) / existing.averageScore
    }

    existing.averageScore = (existing.averageScore * (existing.totalAttempts - 1) + currentScore) / existing.totalAttempts

    // Completion date ekle
    const today = new Date().toISOString().split("T")[0]
    if (!existing.completionDates.includes(today)) {
      existing.completionDates.push(today)
    }

    allModuleAnalytics[moduleId] = existing
    localStorage.setItem(MODULE_ANALYTICS_KEY, JSON.stringify(allModuleAnalytics))
  } catch (e) {
    console.debug("Module analytics güncellenemedi:", e)
  }
}

/**
 * Soru zorluğu istatistiklerini al
 * @param {string} moduleId
 * @returns {Object} Difficulty stats
 */
function getQuestionDifficultyStats(moduleId) {
  const allAnalytics = getAllQuestionAnalytics()
  const moduleQuestions = Object.entries(allAnalytics).filter(([id]) => id.startsWith(moduleId))

  if (moduleQuestions.length === 0) return null

  const stats = {
    easy: 0,
    medium: 0,
    hard: 0,
    averageTimePerQuestion: 0,
    mostDifficultQuestions: [],
  }

  let totalTime = 0
  const difficultyData = []

  moduleQuestions.forEach(([questionId, analytics]) => {
    const avgTime = analytics.totalTimeSpent / analytics.attempts
    const successRate = analytics.attemptHistory.filter((a) => a.correct).length / analytics.attempts

    totalTime += avgTime

    // Zorluk kategorisi belirleme
    if (successRate >= 0.7 && avgTime < 30) {
      stats.easy++
    } else if (successRate >= 0.4 || (successRate < 0.7 && avgTime < 60)) {
      stats.medium++
    } else {
      stats.hard++
    }

    difficultyData.push({
      questionId,
      successRate,
      avgTime,
      attempts: analytics.attempts,
    })
  })

  stats.averageTimePerQuestion = totalTime / moduleQuestions.length

  // En zor soruları bul (düşük başarı oranı + uzun süre)
  stats.mostDifficultQuestions = difficultyData
    .sort((a, b) => a.successRate - b.successRate || b.avgTime - a.avgTime)
    .slice(0, 5)
    .map((q) => ({
      questionId: q.questionId.split("_").pop(), // "moduleId_q5" -> "q5"
      successRate: Math.round(q.successRate * 100),
      avgTime: Math.round(q.avgTime),
    }))

  return stats
}

// Global API
window.__analyticsTracker = {
  getAllQuestionAnalytics,
  trackQuestionAttempt,
  updateModuleAnalytics,
  getQuestionDifficultyStats,
}
