interface GlobalAudioState {
  audio: HTMLAudioElement
  currentUrl: string
  rateIndex: number
}

interface Window {
  __noeticAudioState?: GlobalAudioState
}

const SPEEDS = [1, 1.25, 1.5, 1.75, 2]
const STORAGE_PREFIX = "noetic-audio-pos:"

function getBasePath(): string {
  const baseElement = document.querySelector("base")
  if (baseElement?.href) {
    return baseElement.href.endsWith("/") ? baseElement.href : `${baseElement.href}/`
  }

  const pathname = window.location.pathname
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length > 0 && window.location.hostname.endsWith(".github.io")) {
    return `${window.location.origin}/${segments[0]}/`
  }

  const currentDir = pathname.endsWith("/")
    ? pathname
    : `${pathname.slice(0, pathname.lastIndexOf("/") + 1) || "/"}`

  return new URL(currentDir, window.location.origin).toString()
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00"
  const totalSec = Math.floor(seconds)
  const mins = Math.floor(totalSec / 60)
  const secs = totalSec % 60
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

function getOrCreateGlobalAudio(): GlobalAudioState {
  if (!window.__noeticAudioState) {
    const audio = new Audio()
    audio.preload = "metadata"
    // Arka planda ve ekran kapandığında çalmaya devam etmesi için gerekli öznitelikler
    audio.setAttribute("playsinline", "true")
    audio.setAttribute("webkit-playsinline", "true")
    window.__noeticAudioState = {
      audio,
      currentUrl: "",
      rateIndex: 0,
    }
  }
  return window.__noeticAudioState
}

function updateMediaSessionMetadata(title: string, subtitle: string, basePath: string) {
  if (!("mediaSession" in navigator)) return

  const iconUrl = new URL("static/icon.png", basePath).toString()
  navigator.mediaSession.metadata = new MediaMetadata({
    title,
    artist: "Noetic FM",
    album: subtitle,
    artwork: [
      { src: iconUrl, sizes: "192x192", type: "image/png" },
      { src: iconUrl, sizes: "512x512", type: "image/png" },
    ],
  })
}

function updateMediaSessionPosition(audio: HTMLAudioElement) {
  if (!("mediaSession" in navigator) || !("setPositionState" in navigator.mediaSession)) return
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    try {
      navigator.mediaSession.setPositionState({
        duration: audio.duration,
        playbackRate: audio.playbackRate,
        position: Math.min(audio.currentTime, audio.duration),
      })
    } catch {
      // Bazı tarayıcılarda geçici NaN durumlarını yoksay
    }
  }
}

function bindMediaSessionHandlers(audio: HTMLAudioElement, syncAllPlayers: () => void) {
  if (!("mediaSession" in navigator)) return

  const safeSetHandler = (
    action: MediaSessionAction,
    handler: MediaSessionActionHandler | null,
  ) => {
    try {
      navigator.mediaSession.setActionHandler(action, handler)
    } catch {
      // Desteklenmeyen eylem türlerini yoksay
    }
  }

  safeSetHandler("play", () => {
    audio.play().catch(() => {})
    syncAllPlayers()
  })

  safeSetHandler("pause", () => {
    audio.pause()
    syncAllPlayers()
  })

  safeSetHandler("seekbackward", (details) => {
    const offset = details.seekOffset || 15
    audio.currentTime = Math.max(0, audio.currentTime - offset)
    updateMediaSessionPosition(audio)
    syncAllPlayers()
  })

  safeSetHandler("seekforward", (details) => {
    const offset = details.seekOffset || 15
    audio.currentTime = Math.min(audio.duration || Infinity, audio.currentTime + offset)
    updateMediaSessionPosition(audio)
    syncAllPlayers()
  })

  safeSetHandler("previoustrack", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 15)
    updateMediaSessionPosition(audio)
    syncAllPlayers()
  })

  safeSetHandler("nexttrack", () => {
    audio.currentTime = Math.min(audio.duration || Infinity, audio.currentTime + 15)
    updateMediaSessionPosition(audio)
    syncAllPlayers()
  })

  safeSetHandler("seekto", (details) => {
    if (typeof details.seekTime === "number") {
      audio.currentTime = details.seekTime
      updateMediaSessionPosition(audio)
      syncAllPlayers()
    }
  })
}

function initAudioPlayers() {
  const players = document.querySelectorAll<HTMLElement>(".noetic-audio-player")
  if (players.length === 0) return

  const state = getOrCreateGlobalAudio()
  const { audio } = state
  const basePath = getBasePath()

  const firstPlayer = players[0]
  const rawSrc = firstPlayer.dataset.audioSrc
  if (!rawSrc) return

  const resolvedUrl = new URL(rawSrc, basePath).toString()
  const title = firstPlayer.dataset.audioTitle ?? document.title
  const subtitle = firstPlayer.dataset.audioSubtitle ?? "Noetic Logos Sesli Ders"
  const storageKey = `${STORAGE_PREFIX}${rawSrc}`

  // Eğer farklı bir derse geçildiyse ve önceki ses çalmıyorsa yeni sesi yükle
  if (state.currentUrl !== resolvedUrl && audio.paused) {
    state.currentUrl = resolvedUrl
    audio.src = resolvedUrl
    audio.playbackRate = SPEEDS[state.rateIndex] ?? 1

    const savedTime = parseFloat(localStorage.getItem(storageKey) ?? "0")
    if (savedTime > 0) {
      const restorePos = () => {
        if (Number.isFinite(audio.duration) && savedTime < audio.duration - 5) {
          audio.currentTime = savedTime
        }
        audio.removeEventListener("loadedmetadata", restorePos)
      }
      audio.addEventListener("loadedmetadata", restorePos)
    }
  }

  const syncAllPlayers = () => {
    const isCurrentTrack = state.currentUrl === resolvedUrl
    const isPlaying = isCurrentTrack && !audio.paused
    const duration = isCurrentTrack && Number.isFinite(audio.duration) ? audio.duration : 0
    const current = isCurrentTrack ? audio.currentTime : 0
    const pct = duration > 0 ? (current / duration) * 100 : 0
    const currentSpeed = SPEEDS[state.rateIndex] ?? 1

    players.forEach((player) => {
      player.classList.toggle("is-playing", isPlaying)

      const curEl = player.querySelector<HTMLElement>("[data-audio-current]")
      const durEl = player.querySelector<HTMLElement>("[data-audio-duration]")
      const seekEl = player.querySelector<HTMLInputElement>("[data-audio-seek]")
      const speedBtn = player.querySelector<HTMLButtonElement>("[data-audio-speed]")

      if (curEl) curEl.textContent = formatTime(current)
      if (durEl) durEl.textContent = duration > 0 ? formatTime(duration) : "--:--"
      if (seekEl && document.activeElement !== seekEl) {
        seekEl.value = String(pct)
      }
      if (speedBtn) {
        speedBtn.textContent = `${currentSpeed}x`
      }
    })

    if ("mediaSession" in navigator && isCurrentTrack) {
      navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused"
    }
  }

  players.forEach((player) => {
    const toggleBtn = player.querySelector<HTMLButtonElement>("[data-audio-toggle]")
    const seekInput = player.querySelector<HTMLInputElement>("[data-audio-seek]")
    const speedBtn = player.querySelector<HTMLButtonElement>("[data-audio-speed]")
    const skipBtns = player.querySelectorAll<HTMLButtonElement>("[data-audio-skip]")

    toggleBtn?.addEventListener("click", () => {
      if (state.currentUrl !== resolvedUrl) {
        state.currentUrl = resolvedUrl
        audio.src = resolvedUrl
        audio.playbackRate = SPEEDS[state.rateIndex] ?? 1
      }

      if (audio.paused) {
        updateMediaSessionMetadata(title, subtitle, basePath)
        bindMediaSessionHandlers(audio, syncAllPlayers)
        audio.play().catch(() => {})
      } else {
        audio.pause()
      }
      syncAllPlayers()
    })

    seekInput?.addEventListener("input", () => {
      if (state.currentUrl !== resolvedUrl) return
      const duration = audio.duration
      if (Number.isFinite(duration) && duration > 0) {
        const targetTime = (parseFloat(seekInput.value) / 100) * duration
        audio.currentTime = targetTime
        updateMediaSessionPosition(audio)
        syncAllPlayers()
      }
    })

    speedBtn?.addEventListener("click", () => {
      state.rateIndex = (state.rateIndex + 1) % SPEEDS.length
      const nextSpeed = SPEEDS[state.rateIndex] ?? 1
      audio.playbackRate = nextSpeed
      updateMediaSessionPosition(audio)
      syncAllPlayers()
    })

    skipBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.currentUrl !== resolvedUrl) return
        const delta = parseFloat(btn.dataset.audioSkip ?? "0")
        audio.currentTime = Math.max(
          0,
          Math.min(audio.duration || Infinity, audio.currentTime + delta),
        )
        updateMediaSessionPosition(audio)
        syncAllPlayers()
      })
    })
  })

  const onTimeUpdate = () => {
    if (state.currentUrl === resolvedUrl && audio.currentTime > 1) {
      localStorage.setItem(storageKey, String(Math.floor(audio.currentTime)))
    }
    updateMediaSessionPosition(audio)
    syncAllPlayers()
  }

  const onLoadedMetadata = () => {
    updateMediaSessionPosition(audio)
    syncAllPlayers()
  }

  const onPlayOrPause = () => {
    syncAllPlayers()
  }

  const onEnded = () => {
    localStorage.removeItem(storageKey)
    syncAllPlayers()
  }

  audio.addEventListener("timeupdate", onTimeUpdate)
  audio.addEventListener("loadedmetadata", onLoadedMetadata)
  audio.addEventListener("play", onPlayOrPause)
  audio.addEventListener("pause", onPlayOrPause)
  audio.addEventListener("ended", onEnded)

  syncAllPlayers()

  window.addCleanup?.(() => {
    audio.removeEventListener("timeupdate", onTimeUpdate)
    audio.removeEventListener("loadedmetadata", onLoadedMetadata)
    audio.removeEventListener("play", onPlayOrPause)
    audio.removeEventListener("pause", onPlayOrPause)
    audio.removeEventListener("ended", onEnded)
  })
}

document.addEventListener("nav", initAudioPlayers)
