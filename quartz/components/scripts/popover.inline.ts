import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const p = new DOMParser()
let activeAnchor: HTMLAnchorElement | null = null
let hoverTimer: ReturnType<typeof setTimeout> | null = null
const htmlCache = new Map<string, string>()

async function executePopover(
  link: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  if (link.dataset.noPopover === "true") {
    return
  }

  async function setPosition(popoverElement: HTMLElement) {
    const { x, y } = await computePosition(link, popoverElement, {
      strategy: "fixed",
      middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
    })
    Object.assign(popoverElement.style, {
      transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
    })
  }

  function showPopover(popoverElement: HTMLElement) {
    clearActivePopover(false)
    activeAnchor = link
    popoverElement.classList.add("active-popover")
    setPosition(popoverElement as HTMLElement)

    if (hash !== "") {
      const targetAnchor = `#popover-internal-${hash.slice(1)}`
      const heading = popoverInner.querySelector(targetAnchor) as HTMLElement | null
      if (heading) {
        // leave ~12px of buffer when scrolling to a heading
        popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
      }
    }
  }

  const targetUrl = new URL(link.href)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""
  const popoverId = `popover-${link.pathname}`
  const prevPopoverElement = document.getElementById(popoverId)

  // don't refetch if there's already a popover in the DOM
  if (prevPopoverElement) {
    showPopover(prevPopoverElement)
    return
  }

  let contents = htmlCache.get(targetUrl.pathname)
  let contentTypeCategory = "text"
  let typeInfo = "html"

  if (!contents) {
    const response = await fetchCanonical(targetUrl).catch((err) => {
      console.error(err)
    })

    if (!response) return
    const rawContentType = response.headers.get("Content-Type") ?? "text/html"
    const [contentType] = rawContentType.split(";")
    const [cat, info] = contentType.split("/")
    contentTypeCategory = cat
    typeInfo = info

    if (contentTypeCategory === "image" || contentTypeCategory === "application") {
      // Direct asset
    } else {
      contents = await response.text()
      htmlCache.set(targetUrl.pathname, contents)
    }
  }

  const popoverElement = document.createElement("div")
  popoverElement.id = popoverId
  popoverElement.classList.add("popover")
  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverInner.dataset.contentType = `${contentTypeCategory}/${typeInfo}`
  popoverElement.appendChild(popoverInner)

  switch (contentTypeCategory) {
    case "image": {
      const img = document.createElement("img")
      img.src = targetUrl.toString()
      img.alt = targetUrl.pathname
      popoverInner.appendChild(img)
      break
    }
    case "application": {
      if (typeInfo === "pdf") {
        const pdf = document.createElement("iframe")
        pdf.src = targetUrl.toString()
        popoverInner.appendChild(pdf)
      }
      break
    }
    default: {
      if (!contents) return
      const html = p.parseFromString(contents, "text/html")
      normalizeRelativeURLs(html, targetUrl)
      // prepend all IDs inside popovers to prevent duplicates
      html.querySelectorAll("[id]").forEach((el) => {
        const targetID = `popover-internal-${el.id}`
        el.id = targetID
      })
      const elts = [...html.getElementsByClassName("popover-hint")]
      if (elts.length === 0) return

      elts.forEach((elt) => popoverInner.appendChild(elt))

      // Popover önizlemesinde sadece saf içerik bilgisi gösterilsin:
      popoverInner
        .querySelectorAll(
          ".breadcrumb-container, .article-title, .module-banner, .prerequisite-banner, .noetic-audio-player, .content-meta, .tags, ul.tags",
        )
        .forEach((el) => el.remove())
    }
  }

  if (document.getElementById(popoverId)) {
    return
  }

  document.body.appendChild(popoverElement)
  if (activeAnchor !== link) {
    return
  }

  showPopover(popoverElement)
}

function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = (activeAnchor = this)
  if (link.dataset.noPopover === "true") {
    return
  }

  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }

  // 65ms hover intent: Hızlı fare kaydırmalarında gereksiz fetch'i engeller,
  // kullanıcının odaklandığı linki anında önbellekten/ağdan getirir.
  hoverTimer = setTimeout(() => {
    if (activeAnchor === link) {
      void executePopover(link, { clientX, clientY })
    }
  }, 65)
}

function clearActivePopover(resetAnchor: boolean = true) {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  if (resetAnchor) {
    activeAnchor = null
  }
  const allPopoverElements = document.querySelectorAll(".popover")
  allPopoverElements.forEach((popoverElement) => popoverElement.classList.remove("active-popover"))
}

document.addEventListener("nav", () => {
  // Dokunmatik veya hover desteklemeyen cihazlarda dinleyici ekleme (mobil optimizasyonu)
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
  if (!canHover) return

  const links = [...document.querySelectorAll("a.internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseenter", mouseEnterHandler)
    link.addEventListener("mouseleave", () => clearActivePopover(true))
    window.addCleanup(() => {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      link.removeEventListener("mouseleave", () => clearActivePopover(true))
    })
  }
})
