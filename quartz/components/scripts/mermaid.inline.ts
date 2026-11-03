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

class DiagramPanZoom {
  private isDragging = false
  private pointers = new Map<number, Position>()
  private pinchStartDistance = 0
  private pinchStartScale = 1
  private pinchStartPan: Position = { x: 0, y: 0 }
  private pinchStartCenter: Position = { x: 0, y: 0 }
  private controls?: HTMLElement
  private startPan: Position = { x: 0, y: 0 }
  private currentPan: Position = { x: 0, y: 0 }
  private scale = 1
  private readonly MIN_SCALE = 0.2
  private readonly MAX_SCALE = 5

  cleanups: (() => void)[] = []

  constructor(
    private container: HTMLElement,
    private content: HTMLElement,
  ) {
    this.setupEventListeners()
    this.setupNavigationControls()
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
    this.controls?.remove()
  }

  private setupNavigationControls() {
    this.container.querySelector(".mermaid-controls")?.remove()

    this.controls = document.createElement("div")
    this.controls.className = "mermaid-controls"

    // Zoom controls
    const zoomIn = this.createButton("+", () => this.zoom(0.15))
    const zoomOut = this.createButton("-", () => this.zoom(-0.15))
    const resetBtn = this.createButton("Reset", () => this.resetTransform())

    this.controls.appendChild(zoomOut)
    this.controls.appendChild(resetBtn)
    this.controls.appendChild(zoomIn)

    this.container.appendChild(this.controls)
  }

  private createButton(text: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement("button")
    button.textContent = text
    button.className = "mermaid-control-button"
    button.addEventListener("click", onClick)
    this.cleanups.push(() => button.removeEventListener("click", onClick))
    return button
  }

  private isControlTarget(target: EventTarget | null) {
    return target instanceof Element && !!target.closest(".mermaid-controls, .mermaid-close-btn")
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

  private beginPan(point: Position) {
    this.isDragging = true
    this.startPan = { x: point.x - this.currentPan.x, y: point.y - this.currentPan.y }
    this.updateCursor()
  }

  private onPointerDown(e: PointerEvent) {
    if (this.isControlTarget(e.target)) return
    if (e.pointerType === "mouse" && e.button !== 0) return

    this.container.setPointerCapture(e.pointerId)
    this.pointers.set(e.pointerId, this.getLocalPoint(e.clientX, e.clientY))

    if (this.pointers.size === 1) {
      this.beginPan(this.getLocalPoint(e.clientX, e.clientY))
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

    const point = this.getLocalPoint(e.clientX, e.clientY)
    this.pointers.set(e.pointerId, point)

    if (this.pointers.size === 1 && this.isDragging) {
      e.preventDefault()
      this.currentPan = {
        x: point.x - this.startPan.x,
        y: point.y - this.startPan.y,
      }
      this.updateTransform()
      return
    }

    if (this.pointers.size < 2) return
    e.preventDefault()

    const [first, second] = [...this.pointers.values()]
    const distance = this.getDistance(first, second)
    if (distance === 0 || this.pinchStartDistance === 0) return

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
      this.beginPan(remainingPoint)
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
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9
    this.setScaleAtPoint(this.scale * zoomFactor, point)
  }

  private zoom(delta: number) {
    this.setScaleAtPoint(this.scale + delta, {
      x: this.container.clientWidth / 2,
      y: this.container.clientHeight / 2,
    })
  }

  private updateTransform() {
    this.content.style.transform = `translate(${this.currentPan.x}px, ${this.currentPan.y}px) scale(${this.scale})`
  }

  private resetTransform() {
    const svg = this.content.querySelector("svg")
    if (!svg) return

    const viewBox = svg.viewBox?.baseVal
    const svgWidth = viewBox?.width || svg.getBBox()?.width || svg.getBoundingClientRect().width || 400
    const svgHeight = viewBox?.height || svg.getBBox()?.height || svg.getBoundingClientRect().height || 300

    const padding = 24
    const availableWidth = Math.max(80, this.container.clientWidth - padding * 2)
    const availableHeight = Math.max(80, this.container.clientHeight - padding * 2)

    const scaleX = availableWidth / svgWidth
    const scaleY = availableHeight / svgHeight
    const fitScale = Math.min(1.0, Math.min(scaleX, scaleY))
    this.scale = this.clampScale(Math.max(this.MIN_SCALE, fitScale))

    this.currentPan = {
      x: (this.container.clientWidth - svgWidth * this.scale) / 2,
      y: (this.container.clientHeight - svgHeight * this.scale) / 2,
    }
    this.updateTransform()
    this.updateCursor()
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

let mermaidImport = undefined
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
    const source = node.innerText
    textMapping.set(node, source)
    node.dataset.mermaidSource = source
  }

  async function renderMermaid() {
    // de-init any other diagrams
    for (const node of nodes) {
      node.removeAttribute("data-processed")
      const oldText = textMapping.get(node)
      if (oldText) {
        node.innerHTML = oldText
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

    await mermaid.run({ nodes })
  }

  await renderMermaid()
  document.addEventListener("themechange", renderMermaid)
  const cleanups: Array<() => void> = [
    () => document.removeEventListener("themechange", renderMermaid),
  ]

  for (let i = 0; i < nodes.length; i++) {
    const codeBlock = nodes[i] as HTMLElement
    const pre = codeBlock.parentElement as HTMLPreElement
    const clipboardBtn = pre.querySelector(".clipboard-button") as HTMLButtonElement | null
    const expandBtn = pre.querySelector(".expand-button") as HTMLButtonElement | null
    if (!expandBtn) continue

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

    // query popup container
    const popupContainer = pre.querySelector("#mermaid-container") as HTMLElement
    if (!popupContainer) continue

    let panZoom: DiagramPanZoom | null = null
    function showMermaid() {
      const container = popupContainer.querySelector("#mermaid-space") as HTMLElement
      const content = popupContainer.querySelector(".mermaid-content") as HTMLElement
      if (!content || !container) return
      removeAllChildren(content)

      // Add prominent close button if not present
      let closeBtn = container.querySelector(".mermaid-close-btn") as HTMLButtonElement | null
      if (!closeBtn) {
        closeBtn = document.createElement("button")
        closeBtn.type = "button"
        closeBtn.className = "mermaid-close-btn"
        closeBtn.setAttribute("aria-label", "Kapat")
        closeBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `
        closeBtn.addEventListener("click", (e) => {
          e.stopPropagation()
          e.preventDefault()
          hideMermaid()
        })
        container.appendChild(closeBtn)
      }

      // Clone the mermaid content
      const sourceSvg = codeBlock.querySelector("svg")
      if (!sourceSvg) return
      const mermaidContent = sourceSvg.cloneNode(true) as SVGElement
      content.appendChild(mermaidContent)

      // Show container
      popupContainer.classList.add("active")
      container.style.cursor = "grab"

      // Initialize pan-zoom after showing the popup
      panZoom = new DiagramPanZoom(container, content)
    }

    function hideMermaid() {
      popupContainer.classList.remove("active")
      panZoom?.cleanup()
      panZoom = null
    }

    expandBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      showMermaid()
    })

    // Mobilde veya dokunmatik ekranda diyagrama tıklandığında da büyütme modali açılsın
    const onCodeBlockClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".clipboard-button, .expand-button")) return
      showMermaid()
    }
    codeBlock.addEventListener("click", onCodeBlockClick)

    // Backdrop tıklandığında kapat
    const onPopupClick = (e: MouseEvent) => {
      if (e.target === popupContainer) {
        hideMermaid()
      }
    }
    popupContainer.addEventListener("click", onPopupClick)

    registerEscapeHandler(popupContainer, hideMermaid)

    cleanups.push(() => {
      hideMermaid()
      expandBtn.removeEventListener("click", showMermaid)
      codeBlock.removeEventListener("click", onCodeBlockClick)
      popupContainer.removeEventListener("click", onPopupClick)
    })
  }

  cleanupCurrentMermaids = () => {
    cleanups.forEach((cleanup) => cleanup())
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
