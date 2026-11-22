interface Window {
  __noeticEnhancements?: { cleanup: () => void }
}

window.__noeticEnhancements?.cleanup()

const cleanupFns: (() => void)[] = []

interface Position {
  x: number
  y: number
}

function escapeHtml(str: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return String(str).replace(/[&<>"']/g, (m) => map[m])
}

function normalizeLanguage(lang: string): string {
  const l = lang.toLowerCase()
  switch (l) {
    case "js":
    case "javascript":
      return "JavaScript"
    case "ts":
    case "typescript":
      return "TypeScript"
    case "py":
    case "python":
      return "Python"
    case "html":
      return "HTML"
    case "css":
      return "CSS"
    case "scss":
    case "sass":
      return "SCSS"
    case "bash":
    case "sh":
    case "shell":
    case "zsh":
      return "Bash"
    case "json":
      return "JSON"
    case "sql":
      return "SQL"
    case "cpp":
    case "c++":
      return "C++"
    case "c":
      return "C"
    case "csharp":
    case "cs":
      return "C#"
    case "rust":
    case "rs":
      return "Rust"
    case "go":
    case "golang":
      return "Go"
    case "java":
      return "Java"
    case "kotlin":
    case "kt":
      return "Kotlin"
    case "swift":
      return "Swift"
    case "php":
      return "PHP"
    case "yaml":
    case "yml":
      return "YAML"
    case "md":
    case "markdown":
      return "Markdown"
    case "xml":
      return "XML"
    case "dockerfile":
    case "docker":
      return "Docker"
    default:
      return lang.toUpperCase()
  }
}

// ----------------------------------------------------
// Image Lightbox with Pinch-to-Zoom & Pan (Mobile Optimized)
// ----------------------------------------------------

class ImageLightbox {
  private overlay: HTMLElement
  private stage: HTMLElement
  private content: HTMLElement
  private img: HTMLImageElement
  private activePointers = new Map<number, Position>()
  private isDragging = false
  private startPointerPos: Position = { x: 0, y: 0 }
  private startPan: Position = { x: 0, y: 0 }
  private currentPan: Position = { x: 0, y: 0 }
  private scale = 1.0
  private readonly MIN_SCALE = 1.0
  private readonly MAX_SCALE = 5.0
  private pinchStartDistance = 0
  private pinchStartScale = 1.0
  private lastTapTime = 0
  private cleanups: (() => void)[] = []
  private movedDistance = 0

  constructor(src: string, alt: string) {
    // 1. Build Overlay DOM
    this.overlay = document.createElement("div")
    this.overlay.className = "noetic-lightbox-overlay"
    this.overlay.setAttribute("role", "dialog")
    this.overlay.setAttribute("aria-modal", "true")

    const header = document.createElement("div")
    header.className = "noetic-lightbox-header"

    const controls = document.createElement("div")
    controls.className = "noetic-lightbox-controls"

    const zoomOutBtn = document.createElement("button")
    zoomOutBtn.type = "button"
    zoomOutBtn.className = "noetic-lightbox-btn"
    zoomOutBtn.title = "Uzaklaştır"
    zoomOutBtn.setAttribute("aria-label", "Uzaklaştır")
    zoomOutBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `

    const resetBtn = document.createElement("button")
    resetBtn.type = "button"
    resetBtn.className = "noetic-lightbox-btn"
    resetBtn.title = "Sıfırla"
    resetBtn.setAttribute("aria-label", "Sıfırla")
    resetBtn.innerHTML = `<span class="noetic-lightbox-btn-label">1:1</span>`

    const zoomInBtn = document.createElement("button")
    zoomInBtn.type = "button"
    zoomInBtn.className = "noetic-lightbox-btn"
    zoomInBtn.title = "Yakınlaştır"
    zoomInBtn.setAttribute("aria-label", "Yakınlaştır")
    zoomInBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `

    controls.appendChild(zoomOutBtn)
    controls.appendChild(resetBtn)
    controls.appendChild(zoomInBtn)

    const closeBtn = document.createElement("button")
    closeBtn.type = "button"
    closeBtn.className = "noetic-lightbox-close"
    closeBtn.title = "Kapat"
    closeBtn.setAttribute("aria-label", "Kapat")
    closeBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `

    header.appendChild(controls)
    header.appendChild(closeBtn)
    this.overlay.appendChild(header)

    this.stage = document.createElement("div")
    this.stage.className = "noetic-lightbox-stage"

    this.content = document.createElement("div")
    this.content.className = "noetic-lightbox-content"

    this.img = document.createElement("img")
    this.img.src = src
    this.img.alt = alt
    this.img.draggable = false

    this.content.appendChild(this.img)
    this.stage.appendChild(this.content)
    this.overlay.appendChild(this.stage)

    if (alt && alt.trim().length > 0) {
      const caption = document.createElement("div")
      caption.className = "noetic-lightbox-caption"
      caption.textContent = alt.trim()
      this.overlay.appendChild(caption)
    }

    // 2. Event Listeners
    const onClose = (e?: Event) => {
      e?.stopPropagation()
      this.close()
    }

    closeBtn.addEventListener("click", onClose)
    zoomInBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.zoom(0.5)
    })
    zoomOutBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.zoom(-0.5)
    })
    resetBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.resetTransform(true)
    })

    const onPointerDown = this.onPointerDown.bind(this)
    const onPointerMove = this.onPointerMove.bind(this)
    const onPointerUp = this.onPointerUp.bind(this)
    const onWheel = this.onWheel.bind(this)

    this.stage.addEventListener("pointerdown", onPointerDown)
    this.stage.addEventListener("pointermove", onPointerMove)
    this.stage.addEventListener("pointerup", onPointerUp)
    this.stage.addEventListener("pointercancel", onPointerUp)
    this.stage.addEventListener("wheel", onWheel, { passive: false })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        this.close()
      }
    }
    document.addEventListener("keydown", onKeyDown)

    this.cleanups.push(
      () => this.stage.removeEventListener("pointerdown", onPointerDown),
      () => this.stage.removeEventListener("pointermove", onPointerMove),
      () => this.stage.removeEventListener("pointerup", onPointerUp),
      () => this.stage.removeEventListener("pointercancel", onPointerUp),
      () => this.stage.removeEventListener("wheel", onWheel),
      () => document.removeEventListener("keydown", onKeyDown),
    )

    // Lock body scroll
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    this.cleanups.push(() => {
      document.body.style.overflow = prevOverflow
    })

    document.body.appendChild(this.overlay)

    // Animate in after append
    requestAnimationFrame(() => {
      this.overlay.classList.add("active")
      this.resetTransform(false)
    })
  }

  private clampScale(scale: number): number {
    return Math.min(Math.max(scale, this.MIN_SCALE), this.MAX_SCALE)
  }

  private getDistance(a: Position, b: Position): number {
    return Math.hypot(a.x - b.x, a.y - b.y)
  }

  private updateTransform(animate: boolean = false) {
    this.content.classList.toggle("animating", animate)
    this.content.style.transform = `translate(${this.currentPan.x}px, ${this.currentPan.y}px) scale(${this.scale})`
  }

  private resetTransform(animate: boolean = true) {
    this.scale = 1.0
    this.currentPan = { x: 0, y: 0 }
    this.updateTransform(animate)
  }

  private zoom(delta: number) {
    const nextScale = this.clampScale(this.scale + delta)
    if (nextScale <= 1.05) {
      this.resetTransform(true)
      return
    }
    this.scale = nextScale
    this.updateTransform(true)
  }

  private onPointerDown(e: PointerEvent) {
    if (e.target instanceof Element && e.target.closest(".noetic-lightbox-header, .noetic-lightbox-caption")) {
      return
    }

    this.stage.setPointerCapture(e.pointerId)
    const pt: Position = { x: e.clientX, y: e.clientY }
    this.activePointers.set(e.pointerId, pt)
    this.movedDistance = 0

    // Double tap / double click detection
    const now = Date.now()
    if (this.activePointers.size === 1 && now - this.lastTapTime < 320) {
      if (this.scale > 1.2) {
        this.resetTransform(true)
      } else {
        this.scale = 2.4
        this.currentPan = { x: 0, y: 0 }
        this.updateTransform(true)
      }
      this.lastTapTime = 0
      return
    }
    this.lastTapTime = now

    if (this.activePointers.size === 1) {
      this.isDragging = true
      this.startPointerPos = pt
      this.startPan = { ...this.currentPan }
      this.stage.classList.add("is-dragging")
      return
    }

    if (this.activePointers.size === 2) {
      const [first, second] = [...this.activePointers.values()]
      this.isDragging = false
      this.stage.classList.remove("is-dragging")
      this.pinchStartDistance = this.getDistance(first, second)
      this.pinchStartScale = this.scale
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (!this.activePointers.has(e.pointerId)) return

    const pt: Position = { x: e.clientX, y: e.clientY }
    const prev = this.activePointers.get(e.pointerId)!
    this.movedDistance += Math.hypot(pt.x - prev.x, pt.y - prev.y)
    this.activePointers.set(e.pointerId, pt)

    if (this.activePointers.size === 1 && this.isDragging) {
      if (this.scale > 1.05) {
        e.preventDefault()
        this.currentPan = {
          x: this.startPan.x + (pt.x - this.startPointerPos.x),
          y: this.startPan.y + (pt.y - this.startPointerPos.y),
        }
        this.updateTransform(false)
      }
      return
    }

    if (this.activePointers.size === 2 && this.pinchStartDistance > 0) {
      e.preventDefault()
      const [first, second] = [...this.activePointers.values()]
      const distance = this.getDistance(first, second)
      if (distance === 0) return

      const ratio = distance / this.pinchStartDistance
      this.scale = this.clampScale(this.pinchStartScale * ratio)
      if (this.scale <= 1.05) {
        this.currentPan = { x: 0, y: 0 }
      }
      this.updateTransform(false)
    }
  }

  private onPointerUp(e: PointerEvent) {
    if (this.activePointers.has(e.pointerId)) {
      this.activePointers.delete(e.pointerId)
    }

    if (this.activePointers.size === 0) {
      const wasDragging = this.isDragging
      this.isDragging = false
      this.stage.classList.remove("is-dragging")

      // Single tap on backdrop (without drag) closes lightbox
      if (wasDragging && this.movedDistance < 8) {
        const isBackdropClick = !(e.target instanceof Element && e.target.closest(".noetic-lightbox-content, .noetic-lightbox-header, .noetic-lightbox-caption"))
        if (isBackdropClick) {
          this.close()
        }
      }

      if (this.scale <= 1.05) {
        this.resetTransform(true)
      }
      return
    }

    if (this.activePointers.size === 1) {
      const [remainingPoint] = [...this.activePointers.values()]
      this.isDragging = true
      this.startPointerPos = remainingPoint
      this.startPan = { ...this.currentPan }
      this.stage.classList.add("is-dragging")
    }
  }

  private onWheel(e: WheelEvent) {
    if (e.target instanceof Element && e.target.closest(".noetic-lightbox-header")) return
    e.preventDefault()
    const delta = e.deltaY < 0 ? 0.35 : -0.35
    this.zoom(delta)
  }

  close() {
    this.overlay.classList.remove("active")
    for (const cleanup of this.cleanups) {
      cleanup()
    }
    this.cleanups.length = 0
    setTimeout(() => {
      this.overlay.remove()
    }, 250)
  }
}

// ----------------------------------------------------
// Setup Functions
// ----------------------------------------------------

function setupLightbox() {
  document.querySelectorAll("article img:not(.no-lightbox):not([data-lightbox-bound])").forEach((img) => {
    const imgEl = img as HTMLImageElement
    imgEl.setAttribute("data-lightbox-bound", "true")

    const handler = (e: MouseEvent) => {
      // Don't intercept clicks inside links that lead elsewhere
      const parentLink = imgEl.closest("a")
      if (parentLink && parentLink.getAttribute("href") && !parentLink.getAttribute("href")?.match(/\.(png|jpe?g|svg|webp|gif)$/i)) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
      new ImageLightbox(imgEl.src, imgEl.alt || imgEl.title || "")
    }

    imgEl.addEventListener("click", handler)
    cleanupFns.push(() => imgEl.removeEventListener("click", handler))
  })
}

function setupLazyLoading() {
  document.querySelectorAll("article img:not([loading])").forEach((img) => {
    img.setAttribute("loading", "lazy")
  })
}

function setupCodeBlocks() {
  document.querySelectorAll("pre:not([data-enhanced])").forEach((pre) => {
    const preEl = pre as HTMLElement
    // NEVER touch Mermaid diagrams! Mermaid has its own dedicated fullscreen & panzoom modal
    if (preEl.querySelector("code.mermaid") || preEl.classList.contains("mermaid")) {
      return
    }

    preEl.setAttribute("data-enhanced", "true")

    const code = preEl.querySelector("code")
    if (!code) return

    const rawLang =
      preEl.getAttribute("data-language") ||
      (code.className || "").match(/language-(\w+)/)?.[1] ||
      code.getAttribute("data-language")

    if (rawLang) {
      const lower = rawLang.toLowerCase()
      const nonCode = ["mermaid", "quiz", "puzzle", "col", "col-md", "dataview", "text", "plain", "plaintext"]
      if (!nonCode.includes(lower)) {
        preEl.setAttribute("data-language", lower)

        // Inject language badge if not already present
        if (!preEl.querySelector(".code-lang-badge")) {
          const badge = document.createElement("span")
          badge.className = "code-lang-badge"
          badge.textContent = normalizeLanguage(lower)
          preEl.prepend(badge)
        }
      }
    }

    // Expand / collapse for very long code snippets
    if (code.textContent && code.textContent.split("\n").length > 18) {
      if (!preEl.querySelector(".code-expand-btn")) {
        const btn = document.createElement("button")
        btn.className = "code-expand-btn"
        btn.textContent = "Devamını Göster"
        btn.type = "button"
        btn.addEventListener("click", () => {
          const isExpanded = preEl.classList.toggle("code-expanded")
          btn.textContent = isExpanded ? "Daralt" : "Devamını Göster"
        })
        preEl.appendChild(btn)
      }
    }
  })
}

function handleNav() {
  requestAnimationFrame(() => {
    setupLightbox()
    setupLazyLoading()
    setupCodeBlocks()
  })
}

document.addEventListener("nav", handleNav)
handleNav()

window.addCleanup?.(() => {
  cleanupFns.forEach((fn) => fn())
  cleanupFns.length = 0
  document.removeEventListener("nav", handleNav)
})

window.__noeticEnhancements = {
  cleanup: () => {
    cleanupFns.forEach((fn) => fn())
    cleanupFns.length = 0
    document.removeEventListener("nav", handleNav)
  },
}
