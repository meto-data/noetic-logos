import { registerEscapeHandler, removeAllChildren } from "./util"

declare global {
  interface Window {
    __noeticMermaid?: { cleanup: () => void }
  }
}

interface Position {
  x: number
  y: number
}

export function sanitizeMermaidLabel(text: string): string {
  return text
    .replace(/(^|<br\s*\/?>|\n)(\s*)(\d+)\.\s+/gi, "$1$2$3.\u00A0")
    .replace(/(^|<br\s*\/?>|\n)(\s*)(?:[-*+]|\u2022)\s+/gi, "$1$2•\u00A0")
    .replace(/(^|<br\s*\/?>|\n)(\s*)#{1,6}\s+/gi, (_match, prefix, spaces) => `${prefix}${spaces}&#35;\u00A0`)
    .replace(/(^|<br\s*\/?>|\n)(\s*)>\s+/gi, "$1$2&gt;\u00A0")
}

export function sanitizeMermaidSource(source: string): string {
  let sanitized = source.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (_match, inner) => {
    return `"${sanitizeMermaidLabel(inner)}"`
  })
  sanitized = sanitized.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (_match, inner) => {
    return `'${sanitizeMermaidLabel(inner)}'`
  })
  sanitized = sanitized.replace(/(\[|\(|\{|\/|\|)(\s*)(\d+)\.\s+/g, "$1$2$3.\u00A0")
  sanitized = sanitized.replace(/(\[|\(|\{|\/|\|)(\s*)[-*+]\s+/g, "$1$2•\u00A0")
  return sanitized
}

class DiagramPanZoom {
  private isDragging = false
  private pointers = new Map<number, Position>()
  private pinchStartDistance = 0
  private pinchStartScale = 1
  private pinchStartPan: Position = { x: 0, y: 0 }
  private pinchStartCenter: Position = { x: 0, y: 0 }
  private startPan: Position = { x: 0, y: 0 }
  private startPointer: Position = { x: 0, y: 0 }
  private currentPan: Position = { x: 0, y: 0 }
  private scale = 1
  private readonly MIN_SCALE = 0.08
  private readonly MAX_SCALE = 8.0

  cleanups: (() => void)[] = []

  constructor(
    private container: HTMLElement,
    private content: HTMLElement,
    private svgWidth: number,
    private svgHeight: number,
  ) {
    this.setupEventListeners()
    this.resetTransform()
  }

  private setupEventListeners() {
    const pointerDownHandler = this.onPointerDown.bind(this)
    const pointerMoveHandler = this.onPointerMove.bind(this)
    const pointerUpHandler = this.onPointerUp.bind(this)
    const wheelHandler = this.onWheel.bind(this)
    const resizeHandler = this.resetTransform.bind(this)

    this.container.addEventListener("pointerdown", pointerDownHandler)
    this.container.addEventListener("pointermove", pointerMoveHandler)
    this.container.addEventListener("pointerup", pointerUpHandler)
    this.container.addEventListener("pointercancel", pointerUpHandler)
    this.container.addEventListener("wheel", wheelHandler, { passive: false })
    window.addEventListener("resize", resizeHandler)

    this.cleanups.push(
      () => this.container.removeEventListener("pointerdown", pointerDownHandler),
      () => this.container.removeEventListener("pointermove", pointerMoveHandler),
      () => this.container.removeEventListener("pointerup", pointerUpHandler),
      () => this.container.removeEventListener("pointercancel", pointerUpHandler),
      () => this.container.removeEventListener("wheel", wheelHandler),
      () => window.removeEventListener("resize", resizeHandler),
    )
  }

  cleanup() {
    for (const cleanup of this.cleanups) {
      cleanup()
    }
    this.cleanups = []
    this.pointers.clear()
    this.isDragging = false
  }

  private isControlTarget(target: EventTarget | null) {
    return (
      target instanceof Element &&
      !!target.closest(".mermaid-modal-controls, .mermaid-controls, .mermaid-modal-close, .mermaid-close-btn")
    )
  }

  private getLocalPoint(clientX: number, clientY: number): Position {
    const rect = this.container.getBoundingClientRect()
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  private getDistance(a: Position, b: Position) {
    return Math.hypot(a.x - b.x, a.y - b.y)
  }

  private getMidpoint(a: Position, b: Position): Position {
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
  }

  private updateCursor() {
    this.container.style.cursor = this.isDragging ? "grabbing" : "grab"
  }

  private clampScale(scale: number) {
    return Math.min(Math.max(scale, this.MIN_SCALE), this.MAX_SCALE)
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

  private onPointerDown(e: PointerEvent) {
    if (this.isControlTarget(e.target)) return
    if (e.pointerType === "mouse" && e.button !== 0) return

    this.container.setPointerCapture(e.pointerId)
    const pt = this.getLocalPoint(e.clientX, e.clientY)
    this.pointers.set(e.pointerId, pt)

    if (this.pointers.size === 1) {
      this.isDragging = true
      this.startPointer = pt
      this.startPan = { ...this.currentPan }
      this.updateCursor()
      return
    }

    if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()]
      this.isDragging = false
      this.pinchStartDistance = this.getDistance(first, second)
      this.pinchStartScale = this.scale
      this.pinchStartPan = { ...this.currentPan }
      this.pinchStartCenter = this.getMidpoint(first, second)
      this.updateCursor()
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (!this.pointers.has(e.pointerId)) return

    const pt = this.getLocalPoint(e.clientX, e.clientY)
    this.pointers.set(e.pointerId, pt)

    if (this.pointers.size === 1 && this.isDragging) {
      e.preventDefault()
      this.currentPan = {
        x: this.startPan.x + (pt.x - this.startPointer.x),
        y: this.startPan.y + (pt.y - this.startPointer.y),
      }
      this.updateTransform()
      return
    }

    if (this.pointers.size === 2 && this.pinchStartDistance > 0) {
      e.preventDefault()
      const [first, second] = [...this.pointers.values()]
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
    if (this.pointers.has(e.pointerId)) {
      this.pointers.delete(e.pointerId)
    }

    if (this.pointers.size === 0) {
      this.isDragging = false
      this.updateCursor()
      return
    }

    if (this.pointers.size === 1) {
      const [remainingPoint] = [...this.pointers.values()]
      this.isDragging = true
      this.startPointer = remainingPoint
      this.startPan = { ...this.currentPan }
      this.updateCursor()
      return
    }

    if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()]
      this.pinchStartDistance = this.getDistance(first, second)
      this.pinchStartScale = this.scale
      this.pinchStartPan = { ...this.currentPan }
      this.pinchStartCenter = this.getMidpoint(first, second)
    }
  }

  private onWheel(e: WheelEvent) {
    if (this.isControlTarget(e.target)) return
    e.preventDefault()
    const point = this.getLocalPoint(e.clientX, e.clientY)
    const factor = e.deltaY < 0 ? 1.15 : 0.85
    this.setScaleAtPoint(this.scale * factor, point)
  }

  zoom(delta: number) {
    const center = {
      x: this.container.clientWidth / 2,
      y: this.container.clientHeight / 2,
    }
    this.setScaleAtPoint(this.scale + delta, center)
  }

  resetTransform() {
    const containerW = this.container.clientWidth || window.innerWidth * 0.95
    const containerH = this.container.clientHeight || window.innerHeight * 0.9

    const padding = 36
    const availW = Math.max(80, containerW - padding * 2)
    const availH = Math.max(80, containerH - padding * 2)

    const scaleX = availW / this.svgWidth
    const scaleY = availH / this.svgHeight
    const fitScale = Math.min(scaleX, scaleY, 1.15)

    this.scale = this.clampScale(Math.max(this.MIN_SCALE, fitScale))
    this.currentPan = {
      x: (containerW - this.svgWidth * this.scale) / 2,
      y: (containerH - this.svgHeight * this.scale) / 2,
    }
    this.updateTransform()
    this.updateCursor()
  }

  private updateTransform() {
    this.content.style.transform = `translate(${this.currentPan.x}px, ${this.currentPan.y}px) scale(${this.scale})`
  }
}

/**
 * Global Singleton Mermaid Modal
 */
class MermaidGlobalModal {
  private static instance: MermaidGlobalModal | null = null
  private modalEl: HTMLElement
  private backdropEl: HTMLElement
  private boxEl: HTMLElement
  private stageEl: HTMLElement
  private canvasEl: HTMLElement
  private closeBtn: HTMLButtonElement
  private controlsEl: HTMLElement
  private panZoom: DiagramPanZoom | null = null

  private constructor() {
    this.modalEl = document.createElement("div")
    this.modalEl.id = "mermaid-global-modal"
    this.modalEl.className = "mermaid-modal"
    this.modalEl.setAttribute("role", "dialog")
    this.modalEl.setAttribute("aria-modal", "true")
    this.modalEl.setAttribute("aria-label", "Mermaid Diyagramı")

    this.backdropEl = document.createElement("div")
    this.backdropEl.className = "mermaid-modal-backdrop"

    this.boxEl = document.createElement("div")
    this.boxEl.className = "mermaid-modal-box"

    this.stageEl = document.createElement("div")
    this.stageEl.className = "mermaid-modal-stage"

    this.canvasEl = document.createElement("div")
    this.canvasEl.className = "mermaid-modal-canvas"

    this.closeBtn = document.createElement("button")
    this.closeBtn.type = "button"
    this.closeBtn.className = "mermaid-modal-close"
    this.closeBtn.setAttribute("aria-label", "Kapat")
    this.closeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `

    this.controlsEl = document.createElement("div")
    this.controlsEl.className = "mermaid-modal-controls"

    const zoomOut = document.createElement("button")
    zoomOut.type = "button"
    zoomOut.className = "mermaid-modal-btn zoom-out"
    zoomOut.setAttribute("aria-label", "Küçült")
    zoomOut.textContent = "−"
    zoomOut.addEventListener("click", (e) => {
      e.stopPropagation()
      this.panZoom?.zoom(-0.25)
    })

    const resetBtn = document.createElement("button")
    resetBtn.type = "button"
    resetBtn.className = "mermaid-modal-btn zoom-reset"
    resetBtn.setAttribute("aria-label", "Sıfırla")
    resetBtn.textContent = "Sıfırla"
    resetBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.panZoom?.resetTransform()
    })

    const zoomIn = document.createElement("button")
    zoomIn.type = "button"
    zoomIn.className = "mermaid-modal-btn zoom-in"
    zoomIn.setAttribute("aria-label", "Büyüt")
    zoomIn.textContent = "+"
    zoomIn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.panZoom?.zoom(0.25)
    })

    this.controlsEl.appendChild(zoomOut)
    this.controlsEl.appendChild(resetBtn)
    this.controlsEl.appendChild(zoomIn)

    this.stageEl.appendChild(this.canvasEl)
    this.boxEl.appendChild(this.closeBtn)
    this.boxEl.appendChild(this.stageEl)
    this.boxEl.appendChild(this.controlsEl)

    this.modalEl.appendChild(this.backdropEl)
    this.modalEl.appendChild(this.boxEl)

    // Events
    this.backdropEl.addEventListener("click", () => this.close())
    this.closeBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      this.close()
    })

    registerEscapeHandler(this.modalEl, () => this.close())

    document.body.appendChild(this.modalEl)
  }

  static getInstance(): MermaidGlobalModal {
    if (!MermaidGlobalModal.instance || !document.body.contains(MermaidGlobalModal.instance.modalEl)) {
      MermaidGlobalModal.instance = new MermaidGlobalModal()
    }
    return MermaidGlobalModal.instance
  }

  open(sourceSvg: SVGElement) {
    if (this.modalEl.parentElement !== document.body) {
      document.body.appendChild(this.modalEl)
    }

    this.panZoom?.cleanup()
    this.panZoom = null
    removeAllChildren(this.canvasEl)

    // Clone source SVG
    const clonedSvg = sourceSvg.cloneNode(true) as SVGElement

    // Determine intrinsic dimensions
    let svgW = 800
    let svgH = 600

    const vb = clonedSvg.viewBox?.baseVal
    if (vb && vb.width > 0 && vb.height > 0) {
      svgW = vb.width
      svgH = vb.height
    } else {
      const bbox = sourceSvg.getBoundingClientRect()
      if (bbox.width > 0 && bbox.height > 0) {
        svgW = bbox.width
        svgH = bbox.height
      }
    }

    clonedSvg.removeAttribute("style")
    clonedSvg.style.display = "block"
    clonedSvg.style.maxWidth = "none"
    clonedSvg.style.maxHeight = "none"
    clonedSvg.style.width = `${svgW}px`
    clonedSvg.style.height = `${svgH}px`
    clonedSvg.setAttribute("width", `${svgW}`)
    clonedSvg.setAttribute("height", `${svgH}`)

    this.canvasEl.style.width = `${svgW}px`
    this.canvasEl.style.height = `${svgH}px`
    this.canvasEl.appendChild(clonedSvg)

    this.modalEl.classList.add("active")
    document.body.style.overflow = "hidden"

    // Allow browser to calculate stage bounding rect before initializing PanZoom
    requestAnimationFrame(() => {
      this.panZoom = new DiagramPanZoom(this.stageEl, this.canvasEl, svgW, svgH)
    })
  }

  close() {
    this.modalEl.classList.remove("active")
    this.panZoom?.cleanup()
    this.panZoom = null
    removeAllChildren(this.canvasEl)
    document.body.style.overflow = ""
  }
}

const cssVars = [
  "--secondary",
  "--tertiary",
  "--gray",
  "--light",
  "--lightgray",
  "--highlight",
  "--dark",
  "--darkgray",
  "--codeFont",
] as const

let mermaidImport: any = undefined
window.__noeticMermaid?.cleanup()

let cleanupCurrentMermaids = () => {}

const setupMermaids = async () => {
  cleanupCurrentMermaids()
  cleanupCurrentMermaids = () => {}

  const center = document.querySelector(".center") as HTMLElement
  if (!center) return
  const nodes = center.querySelectorAll("code.mermaid") as NodeListOf<HTMLElement>
  if (nodes.length === 0) return

  mermaidImport ||= await import(
    // @ts-ignore
    "https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.4.0/mermaid.esm.min.mjs"
  )
  const mermaid = mermaidImport.default

  const textMapping: WeakMap<HTMLElement, string> = new WeakMap()
  for (const node of nodes) {
    const raw = node.textContent ?? ""
    const sanitized = sanitizeMermaidSource(raw)
    textMapping.set(node, sanitized)
    node.textContent = sanitized
    node.dataset.mermaidSource = sanitized
  }

  async function renderMermaid() {
    for (const node of nodes) {
      node.removeAttribute("data-processed")
      const oldText = textMapping.get(node)
      if (oldText) {
        node.textContent = oldText
      }
    }

    const computedStyleMap = cssVars.reduce(
      (acc, key) => {
        acc[key] = window.getComputedStyle(document.documentElement).getPropertyValue(key)
        return acc
      },
      {} as Record<(typeof cssVars)[number], string>,
    )

    const darkMode = document.documentElement.getAttribute("saved-theme") === "dark"
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      suppressErrors: true,
      theme: darkMode ? "dark" : "base",
      themeVariables: {
        fontFamily: computedStyleMap["--codeFont"],
        primaryColor: computedStyleMap["--light"],
        primaryTextColor: computedStyleMap["--darkgray"],
        primaryBorderColor: computedStyleMap["--tertiary"],
        lineColor: computedStyleMap["--darkgray"],
        secondaryColor: computedStyleMap["--secondary"],
        tertiaryColor: computedStyleMap["--tertiary"],
        clusterBkg: computedStyleMap["--light"],
        edgeLabelBackground: computedStyleMap["--highlight"],
      },
    })

    try {
      await mermaid.run({ nodes, suppressErrors: true })
    } catch (err) {
      console.warn("Mermaid run caught non-fatal diagram error:", err)
    }
  }

  await renderMermaid()
  document.addEventListener("themechange", renderMermaid)
  const cleanups: Array<() => void> = [
    () => document.removeEventListener("themechange", renderMermaid),
  ]

  const modal = MermaidGlobalModal.getInstance()

  for (let i = 0; i < nodes.length; i++) {
    const codeBlock = nodes[i] as HTMLElement
    const pre = codeBlock.parentElement as HTMLPreElement
    if (!pre) continue

    const clipboardBtn = pre.querySelector(".clipboard-button") as HTMLButtonElement | null
    const expandBtn = pre.querySelector(".expand-button") as HTMLButtonElement | null

    if (expandBtn) {
      if (clipboardBtn) {
        const clipboardStyle = window.getComputedStyle(clipboardBtn)
        const clipboardWidth =
          clipboardBtn.offsetWidth +
          parseFloat(clipboardStyle.marginLeft || "0") +
          parseFloat(clipboardStyle.marginRight || "0")
        expandBtn.style.right = `calc(${clipboardWidth}px + 0.35rem)`
      } else {
        expandBtn.style.right = "0.5rem"
      }
      pre.prepend(expandBtn)
    }

    const getDiagramSvg = (): SVGElement | null => {
      return (pre.querySelector("svg:not(.expand-button svg)") ||
        codeBlock.querySelector("svg")) as SVGElement | null
    }

    const openDiagram = (e?: Event) => {
      e?.preventDefault()
      e?.stopPropagation()
      const svg = getDiagramSvg()
      if (svg) {
        modal.open(svg)
      }
    }

    if (expandBtn) {
      expandBtn.addEventListener("click", openDiagram)
    }

    // Pre element click to expand (ignoring clicks on buttons)
    const onPreClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(".clipboard-button, .expand-button, .code-expand-btn")) return
      openDiagram(e)
    }

    pre.addEventListener("click", onPreClick)
    pre.style.cursor = "zoom-in"

    cleanups.push(() => {
      if (expandBtn) {
        expandBtn.removeEventListener("click", openDiagram)
      }
      pre.removeEventListener("click", onPreClick)
    })
  }

  cleanupCurrentMermaids = () => {
    cleanups.forEach((cleanup) => cleanup())
    modal.close()
  }

  window.addCleanup?.(() => cleanupCurrentMermaids())
}

document.addEventListener("nav", setupMermaids)

window.__noeticMermaid = {
  cleanup: () => {
    document.removeEventListener("nav", setupMermaids)
    cleanupCurrentMermaids()
  },
}
