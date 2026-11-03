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
// Image Lightbox with Pinch-to-Zoom & Pan
// ----------------------------------------------------

class ImageLightbox {
  private overlay: HTMLElement
  private stage: HTMLElement
  private content: HTMLElement
  private img: HTMLImageElement
  private activePointers = new Map<number, Position>()
  private isDragging = false
  private startPointerPan: Position = { x: 0, y: 0 }
  private currentPan: Position = { x: 0, y: 0 }
  private scale = 1
  private initialFitScale = 1
  private readonly MIN_SCALE = 0.4
  private readonly MAX_SCALE = 5
  private pinchStartDistance = 0
  private pinchStartScale = 1
  private pinchStartCenter: Position = { x: 0, y: 0 }
  private pinchStartPan: Position = { x: 0, y: 0 }
  private lastTapTime = 0
  private lastTapPos: Position = { x: 0, y: 0 }
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
      this.zoom(0.35)
    })
    zoomOutBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.zoom(-0.35)
    })
    resetBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.resetTransform()
    })

    const onPointerDown = this.onPointerDown.bind(this)
    const onPointerMove = this.onPointerMove.bind(this)
    const onPointerUp = this.onPointerUp.bind(this)
    const onWheel = this.onWheel.bind(this)
    const onResize = () => this.resetTransform()

    this.stage.addEventListener("pointerdown", onPointerDown)
    this.stage.addEventListener("pointermove", onPointerMove)
    this.stage.addEventListener("pointerup", onPointerUp)
    this.stage.addEventListener("pointercancel", onPointerUp)
    this.stage.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("resize", onResize)

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
      () => window.removeEventListener("resize", onResize),
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
      if (this.img.complete && this.img.naturalWidth > 0) {
        this.resetTransform()
      } else {
        this.img.onload = () => this.resetTransform()
      }
    })
  }

  private clampScale(scale: number): number {
    return Math.min(Math.max(scale, this.MIN_SCALE), this.MAX_SCALE)
  }

  private getLocalPoint(clientX: number, clientY: number): Position {
    const rect = this.stage.getBoundingClientRect()
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  private getDistance(a: Position, b: Position): number {
    return Math.hypot(a.x - b.x, a.y - b.y)
  }

  private getMidpoint(a: Position, b: Position): Position {
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
  }

  private updateTransform() {
    this.content.style.transform = `translate(${this.currentPan.x}px, ${this.currentPan.y}px) scale(${this.scale})`
  }

  private resetTransform() {
    const stageWidth = this.stage.clientWidth
    const stageHeight = this.stage.clientHeight
    if (stageWidth <= 0 || stageHeight <= 0) return

    const imgWidth = this.img.naturalWidth || 800
    const imgHeight = this.img.naturalHeight || 600

    const padding = 32
    const availableWidth = Math.max(80, stageWidth - padding * 2)
    const availableHeight = Math.max(80, stageHeight - padding * 2)

    const scaleX = availableWidth / imgWidth
    const scaleY = availableHeight / imgHeight
    this.initialFitScale = Math.min(1.0, Math.min(scaleX, scaleY))
    this.scale = this.clampScale(this.initialFitScale)

    this.currentPan = {
      x: (stageWidth - imgWidth * this.scale) / 2,
      y: (stageHeight - imgHeight * this.scale) / 2,
    }

    this.updateTransform()
  }

  private setScaleAtPoint(newScale: number, point: Position) {
    const nextScale = this.clampScale(newScale)
    const scaleRatio = nextScale / this.scale
    this.currentPan = {
      x: point.x - (point.x - this.currentPan.x) * scaleRatio,
      y: point.y - (point.y - this.currentPan.y) * scaleRatio,
    }
    this.scale = nextScale
    this.updateTransform()
  }

  private zoom(delta: number) {
    this.setScaleAtPoint(this.scale + delta, {
      x: this.stage.clientWidth / 2,
      y: this.stage.clientHeight / 2,
    })
  }

  private onPointerDown(e: PointerEvent) {
    if (e.target instanceof Element && e.target.closest(".noetic-lightbox-header, .noetic-lightbox-caption")) {
      return
    }

    this.stage.setPointerCapture(e.pointerId)
    const pt = this.getLocalPoint(e.clientX, e.clientY)
    this.activePointers.set(e.pointerId, pt)
    this.movedDistance = 0

    // Double tap / double click detection
    const now = Date.now()
    if (this.activePointers.size === 1 && now - this.lastTapTime < 300) {
      const distFromLastTap = Math.hypot(pt.x - this.lastTapPos.x, pt.y - this.lastTapPos.y)
      if (distFromLastTap < 25) {
        if (this.scale > this.initialFitScale * 1.2) {
          this.resetTransform()
        } else {
          this.setScaleAtPoint(this.initialFitScale * 2.2, pt)
        }
        this.lastTapTime = 0
        return
      }
    }
    this.lastTapTime = now
    this.lastTapPos = pt

    if (this.activePointers.size === 1) {
      this.isDragging = true
      this.startPointerPan = { x: pt.x - this.currentPan.x, y: pt.y - this.currentPan.y }
      this.stage.classList.add("is-dragging")
      return
    }

    if (this.activePointers.size === 2) {
      const [first, second] = [...this.activePointers.values()]
      this.isDragging = false
      this.stage.classList.remove("is-dragging")
      this.pinchStartDistance = this.getDistance(first, second)
      this.pinchStartScale = this.scale
      this.pinchStartPan = { ...this.currentPan }
      this.pinchStartCenter = this.getMidpoint(first, second)
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (!this.activePointers.has(e.pointerId)) return

    const pt = this.getLocalPoint(e.clientX, e.clientY)
    const prev = this.activePointers.get(e.pointerId)!
    this.movedDistance += Math.hypot(pt.x - prev.x, pt.y - prev.y)
    this.activePointers.set(e.pointerId, pt)

    if (this.activePointers.size === 1 && this.isDragging) {
      e.preventDefault()
      this.currentPan = {
        x: pt.x - this.startPointerPan.x,
        y: pt.y - this.startPointerPan.y,
      }
      this.updateTransform()
      return
    }

    if (this.activePointers.size === 2 && this.pinchStartDistance > 0) {
      e.preventDefault()
      const [first, second] = [...this.activePointers.values()]
      const distance = this.getDistance(first, second)
      if (distance === 0) return

      const midpoint = this.getMidpoint(first, second)
      const nextScale = this.clampScale(this.pinchStartScale * (distance / this.pinchStartDistance))
      const contentPoint = {
        x: (this.pinchStartCenter.x - this.pinchStartPan.x) / this.pinchStartScale,
        y: (this.pinchStartCenter.y - this.pinchStartPan.y) / this.pinchStartScale,
      }

      this.scale = nextScale
      this.currentPan = {
        x: midpoint.x - contentPoint.x * nextScale,
        y: midpoint.y - contentPoint.y * nextScale,
      }
      this.updateTransform()
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
      if (wasDragging && this.movedDistance < 6) {
        const isBackdropClick = !(e.target instanceof Element && e.target.closest(".noetic-lightbox-content, .noetic-lightbox-header, .noetic-lightbox-caption"))
        if (isBackdropClick) {
          this.close()
        }
      }
      return
    }

    if (this.activePointers.size === 1) {
      const [remainingPoint] = [...this.activePointers.values()]
      this.isDragging = true
      this.startPointerPan = { x: remainingPoint.x - this.currentPan.x, y: remainingPoint.y - this.currentPan.y }
      this.stage.classList.add("is-dragging")
    }
  }

  private onWheel(e: WheelEvent) {
    if (e.target instanceof Element && e.target.closest(".noetic-lightbox-header")) return
    e.preventDefault()
    const pt = this.getLocalPoint(e.clientX, e.clientY)
    const factor = e.deltaY < 0 ? 1.15 : 0.85
    this.setScaleAtPoint(this.scale * factor, pt)
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
