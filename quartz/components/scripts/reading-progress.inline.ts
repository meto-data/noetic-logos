/**
 * Reading Progress Tracker (Faz 2)
 *
 * - Scroll ilerlemesini takip eder (nerede kaldıysan kaydeder)
 * - localStorage üzerinde kalıcı saklanır (her path için)
 * - Script görünmez; CSS ile opsiyonel olarak gösterilebilir
 */

interface ReadingProgressEntry {
  percent: number
  scrollY: number
  updatedAt: number
}

const STORAGE_PREFIX = "reading_progress_"
const ENTRY_EXPIRY = 30 * 24 * 60 * 60 * 1000 // 30 gün
const MAX_ENTRIES = 80
const SAVE_THROTTLE = 400
const RESTORE_ATTEMPTS = 6
const RESTORE_DELAY = 120

let indicatorEl: HTMLElement | null = null
let scrollSaveTimer: ReturnType<typeof setTimeout> | null = null
let restoreTimers: Set<ReturnType<typeof setTimeout>> = new Set()
let lastInteractionSave = 0
const canUseStorage = (() => {
  try {
    const testKey = "__reading_progress_test__"
    window.localStorage.setItem(testKey, "1")
    window.localStorage.removeItem(testKey)
    return true
  } catch {
    return false
  }
})()

function getStorageKey(path: string = window.location.pathname): string {
  return `${STORAGE_PREFIX}${path}`
}

function clamp01(value: number): number {
  return Math.min(Math.max(value, 0), 1)
}

function getScrollableDistance(): number {
  const doc = document.documentElement
  return Math.max(doc.scrollHeight - window.innerHeight, 0)
}

function calculateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
  const scrollable = getScrollableDistance()
  const percent = scrollable > 0 ? clamp01(scrollTop / scrollable) : 0
  return { scrollTop, percent }
}

function updateIndicator(percent: number) {
  if (!indicatorEl) return
  indicatorEl.style.setProperty("--reading-progress-ratio", percent.toString())
}

function cleanupEntries() {
  if (!canUseStorage) return
  try {
    const now = Date.now()
    const entries: { key: string; updatedAt: number }[] = []

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key || !key.startsWith(STORAGE_PREFIX)) continue

      const raw = localStorage.getItem(key)
      if (!raw) {
        localStorage.removeItem(key)
        continue
      }

      try {
        const entry = JSON.parse(raw) as ReadingProgressEntry
        if (!entry?.updatedAt || now - entry.updatedAt > ENTRY_EXPIRY) {
          localStorage.removeItem(key)
          continue
        }
        entries.push({ key, updatedAt: entry.updatedAt })
      } catch {
        localStorage.removeItem(key)
      }
    }

    if (entries.length > MAX_ENTRIES) {
      const sorted = [...entries].sort((a, b) => b.updatedAt - a.updatedAt)
      sorted.slice(MAX_ENTRIES).forEach(({ key }) => localStorage.removeItem(key))
    }
  } catch (error) {
    console.debug("Reading progress cleanup başarısız:", error)
  }
}

function persistProgress(scrollTop: number, percent: number, path: string) {
  if (!canUseStorage) return
  try {
    const payload: ReadingProgressEntry = {
      percent: Number(percent.toFixed(4)),
      scrollY: Math.round(scrollTop),
      updatedAt: Date.now(),
    }
    localStorage.setItem(getStorageKey(path), JSON.stringify(payload))
  } catch (error) {
    console.debug("Reading progress kaydedilemedi:", error)
  }
}

function immediatePersistCurrentPosition() {
  const path = window.location.pathname
  const { scrollTop, percent } = calculateProgress()
  persistProgress(scrollTop, percent, path)
}

function scheduleSave(scrollTop: number, percent: number, path: string) {
  if (!canUseStorage) return
  if (scrollSaveTimer) {
    clearTimeout(scrollSaveTimer)
  }
  scrollSaveTimer = window.setTimeout(() => {
    scrollSaveTimer = null
    persistProgress(scrollTop, percent, path)
  }, SAVE_THROTTLE)
}

function loadEntry(path: string = window.location.pathname): ReadingProgressEntry | null {
  if (!canUseStorage) return null
  try {
    const raw = localStorage.getItem(getStorageKey(path))
    if (!raw) return null
    const entry = JSON.parse(raw) as ReadingProgressEntry
    if (!entry || typeof entry.percent !== "number" || typeof entry.scrollY !== "number") {
      localStorage.removeItem(getStorageKey(path))
      return null
    }

    if (Date.now() - entry.updatedAt > ENTRY_EXPIRY) {
      localStorage.removeItem(getStorageKey(path))
      return null
    }

    return entry
  } catch (error) {
    console.debug("Reading progress yüklenemedi:", error)
    localStorage.removeItem(getStorageKey(path))
    return null
  }
}

function clearRestoreTimers() {
  restoreTimers.forEach((timer) => clearTimeout(timer))
  restoreTimers.clear()
}

function queueRestoreAttempt(callback: () => void, delay: number) {
  const timer = window.setTimeout(() => {
    restoreTimers.delete(timer)
    callback()
  }, delay)
  restoreTimers.add(timer)
}

function restoreProgressFromStorage() {
  if (!canUseStorage) return
  const entry = loadEntry()
  if (!entry) return

  if (window.location.hash) return

  clearRestoreTimers()

  let attempt = 0
  const tryRestore = () => {
    if (attempt >= RESTORE_ATTEMPTS) {
      return
    }

    const scrollable = getScrollableDistance()
    if (scrollable <= 0) {
      attempt++
      queueRestoreAttempt(tryRestore, RESTORE_DELAY * (attempt + 1))
      return
    }

    const candidate = Math.max(
      Math.round(entry.percent * scrollable),
      Math.min(entry.scrollY, scrollable),
    )

    window.scrollTo({
      top: Math.min(candidate, scrollable),
      left: 0,
      behavior: "auto",
    })
    attempt = RESTORE_ATTEMPTS // stop further attempts once applied
  }

  queueRestoreAttempt(tryRestore, RESTORE_DELAY)
}

function refreshIndicatorReferences() {
  indicatorEl = document.querySelector(".reading-progress__indicator")
  if (indicatorEl) {
    indicatorEl.style.setProperty("--reading-progress-ratio", "0")
  }
}

function handlePageReady() {
  refreshIndicatorReferences()
  cleanupEntries()
  const { percent } = calculateProgress()
  updateIndicator(percent)
  restoreProgressFromStorage()
}

function handleScroll() {
  const { scrollTop, percent } = calculateProgress()
  updateIndicator(percent)
  scheduleSave(scrollTop, percent, window.location.pathname)
}

function handleResize() {
  // Scrollable mesafe değiştiyse bar'ı yeniden hesapla
  const { percent } = calculateProgress()
  updateIndicator(percent)
}

function handleVisibilityChange() {
  if (document.visibilityState === "hidden") {
    const { scrollTop, percent } = calculateProgress()
    persistProgress(scrollTop, percent, window.location.pathname)
  }
}

function handleBeforeUnload() {
  const { scrollTop, percent } = calculateProgress()
  persistProgress(scrollTop, percent, window.location.pathname)
}

function isInternalLink(anchor: HTMLAnchorElement | null): boolean {
  if (!anchor) return false
  const href = anchor.getAttribute("href")
  if (!href || href.startsWith("#")) return false
  if (anchor.target === "_blank") return false
  if ("routerIgnore" in anchor.dataset) return false
  try {
    const url = new URL(href, window.location.href)
    return url.origin === window.location.origin
  } catch {
    return false
  }
}

function initReadingProgress() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return
  }

  const onScroll = () => handleScroll()
  const onResize = () => handleResize()
  const onNav = () => setTimeout(handlePageReady, 10)

  const onInteraction = (event: MouseEvent) => {
    const anchor = (event.target as Element | null)?.closest("a")
    if (!isInternalLink(anchor)) return
    // Çok sık yazmamak için 150ms throttle
    const now = Date.now()
    if (now - lastInteractionSave < 150) return
    lastInteractionSave = now
    immediatePersistCurrentPosition()
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("resize", onResize)
  window.addEventListener("beforeunload", handleBeforeUnload)
  window.addEventListener("pageshow", handlePageReady)
  document.addEventListener("visibilitychange", handleVisibilityChange)
  document.addEventListener("nav", onNav)
  document.addEventListener("prenav", handleBeforeUnload)
  document.addEventListener("click", onInteraction, true)

  const readyFn = () => {
    handlePageReady()
    document.removeEventListener("DOMContentLoaded", readyFn)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", readyFn)
  } else {
    handlePageReady()
  }

  window.addCleanup?.(() => {
    clearRestoreTimers()
    if (scrollSaveTimer) {
      clearTimeout(scrollSaveTimer)
      scrollSaveTimer = null
    }
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", onResize)
    window.removeEventListener("beforeunload", handleBeforeUnload)
    window.removeEventListener("pageshow", handlePageReady)
    document.removeEventListener("visibilitychange", handleVisibilityChange)
    document.removeEventListener("nav", onNav)
    document.removeEventListener("prenav", handleBeforeUnload)
    document.removeEventListener("click", onInteraction, true)
  })
}

initReadingProgress()
