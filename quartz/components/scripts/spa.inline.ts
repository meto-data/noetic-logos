import micromorph from "micromorph"
import { FullSlug, RelativeURL, getFullSlug, normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

// adapted from `micromorph`
// https://github.com/natemoo-re/micromorph
const NODE_TYPE_ELEMENT = 1
let announcer = document.createElement("route-announcer")
const isElement = (target: EventTarget | null): target is Element =>
  (target as Node)?.nodeType === NODE_TYPE_ELEMENT
const isLocalUrl = (href: string) => {
  try {
    const url = new URL(href)
    if (window.location.origin === url.origin) {
      return true
    }
  } catch (e) {}
  return false
}

const isSamePage = (url: URL): boolean => {
  const sameOrigin = url.origin === window.location.origin
  const samePath = url.pathname === window.location.pathname
  return sameOrigin && samePath
}

const getOpts = ({ target }: Event): { url: URL; scroll?: boolean } | undefined => {
  if (!isElement(target)) return
  if (target.attributes.getNamedItem("target")?.value === "_blank") return
  const a = target.closest("a")
  if (!a) return
  if ("routerIgnore" in a.dataset) return
  const { href } = a
  if (!isLocalUrl(href)) return
  const url = new URL(href)
  // Harici statik modüller (/static/...) bağımsız uygulama olduğu için SPA ile karıştırılmaz
  if (url.pathname.includes("/static/")) return
  return { url, scroll: "routerNoscroll" in a.dataset ? false : undefined }
}

function notifyNav(url: FullSlug) {
  const event: CustomEventMap["nav"] = new CustomEvent("nav", { detail: { url } })
  document.dispatchEvent(event)
}

const cleanupFns: Set<(...args: any[]) => void> = new Set()
window.addCleanup = (fn) => cleanupFns.add(fn)

// Bellek içi sayfa önbelleği: Link hover veya dokunma anında önceden çekilir, tıklamada 0ms geçiş sağlar
const pageCache = new Map<string, string>()

async function prefetch(url: URL) {
  const href = url.href
  if (pageCache.has(href)) return
  try {
    const res = await fetchCanonical(url)
    const contentType = res.headers.get("content-type")
    if (contentType?.startsWith("text/html")) {
      const text = await res.text()
      pageCache.set(href, text)
      if (pageCache.size > 40) {
        const firstKey = pageCache.keys().next().value
        if (firstKey) pageCache.delete(firstKey)
      }
    }
  } catch {
    // Önyükleme ağ hataları sessizce yoksayılır
  }
}

function startLoading() {
  let loadingBar = document.querySelector<HTMLElement>(".navigation-progress")
  if (!loadingBar) {
    loadingBar = document.createElement("div")
    loadingBar.className = "navigation-progress"
    document.body.appendChild(loadingBar)
  }
  loadingBar.style.width = "0%"
  loadingBar.style.opacity = "1"
  requestAnimationFrame(() => {
    if (loadingBar) loadingBar.style.width = "75%"
  })
}

function stopLoading() {
  const loadingBar = document.querySelector<HTMLElement>(".navigation-progress")
  if (loadingBar) {
    loadingBar.style.width = "100%"
    setTimeout(() => {
      loadingBar.style.opacity = "0"
      setTimeout(() => {
        loadingBar.style.width = "0%"
      }, 200)
    }, 120)
  }
}

let currentNavToken = 0
let p: DOMParser

async function _navigate(url: URL, isBack: boolean = false, navToken: number) {
  p = p || new DOMParser()

  let contents = pageCache.get(url.href)
  if (!contents) {
    startLoading()
    const res = await fetchCanonical(url).catch(() => null)
    if (navToken !== currentNavToken) return // Yeni bir tıklama geldiğinde eski navigasyonu iptal et

    if (!res) {
      window.location.assign(url)
      return
    }

    const contentType = res.headers.get("content-type")
    if (contentType?.startsWith("text/html")) {
      contents = await res.text()
      pageCache.set(url.href, contents)
    } else {
      window.location.assign(url)
      return
    }
  }

  if (navToken !== currentNavToken) return

  // notify about to nav
  const event: CustomEventMap["prenav"] = new CustomEvent("prenav", { detail: {} })
  document.dispatchEvent(event)

  // cleanup old
  cleanupFns.forEach((fn) => fn())
  cleanupFns.clear()

  const html = p.parseFromString(contents, "text/html")
  normalizeRelativeURLs(html, url)

  let title = html.querySelector("title")?.textContent
  if (title) {
    document.title = title
  } else {
    const h1 = document.querySelector("h1")
    title = h1?.innerText ?? h1?.textContent ?? url.pathname
  }
  if (announcer.textContent !== title) {
    announcer.textContent = title
  }
  announcer.dataset.persist = ""
  html.body.appendChild(announcer)

  // Mevcut explorer DOM ağacını koru (1.411 düğümün sıfırdan yıkılıp yeniden yapılmasını engeller)
  const existingExplorers = document.querySelectorAll(".explorer")
  existingExplorers.forEach((el) => el.setAttribute("data-persist", "explorer"))
  const incomingExplorers = html.body.querySelectorAll(".explorer")
  incomingExplorers.forEach((el) => el.setAttribute("data-persist", "explorer"))

  // morph body
  micromorph(document.body, html.body)

  // scroll into place and add history
  if (!isBack) {
    if (url.hash) {
      const el = document.getElementById(decodeURIComponent(url.hash.substring(1)))
      el?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0 })
    }
  } else {
    if (url.hash) {
      const el = document.getElementById(decodeURIComponent(url.hash.substring(1)))
      el?.scrollIntoView()
    }
  }

  // now, patch head, re-executing scripts
  const elementsToRemove = document.head.querySelectorAll(":not([spa-preserve])")
  elementsToRemove.forEach((el) => el.remove())
  const elementsToAdd = html.head.querySelectorAll(":not([spa-preserve])")
  elementsToAdd.forEach((el) => document.head.appendChild(el))

  // delay setting the url until now
  if (!isBack) {
    history.pushState({}, "", url)
  }

  notifyNav(getFullSlug(window))
  delete announcer.dataset.persist
}

async function navigate(url: URL, isBack: boolean = false) {
  const navToken = ++currentNavToken
  try {
    await _navigate(url, isBack, navToken)
  } catch (e) {
    if (navToken === currentNavToken) {
      console.error("SPA navigation error:", e)
      window.location.assign(url)
    }
  } finally {
    if (navToken === currentNavToken) {
      stopLoading()
    }
  }
}

window.spaNavigate = navigate

function createRouter() {
  if (typeof window !== "undefined") {
    let prefetchTimeout: number | undefined
    document.addEventListener(
      "pointerover",
      (event) => {
        const opts = getOpts(event)
        if (!opts) return
        window.clearTimeout(prefetchTimeout)
        prefetchTimeout = window.setTimeout(() => {
          void prefetch(opts.url)
        }, 60)
      },
      { passive: true },
    )

    document.addEventListener(
      "touchstart",
      (event) => {
        const opts = getOpts(event)
        if (!opts) return
        void prefetch(opts.url)
      },
      { passive: true },
    )

    window.addEventListener("click", async (event) => {
      const { url } = getOpts(event) ?? {}
      // dont hijack behaviour, just let browser act normally
      if (!url || event.ctrlKey || event.metaKey) return
      event.preventDefault()

      if (isSamePage(url) && url.hash) {
        const el = document.getElementById(decodeURIComponent(url.hash.substring(1)))
        el?.scrollIntoView()
        history.pushState({}, "", url)
        return
      }

      // Ayrılmadan önce mevcut sayfanın scroll pozisyonunu kaydet
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0
      try {
        sessionStorage.setItem(`scroll_position_${window.location.pathname}`, JSON.stringify({
          path: window.location.pathname,
          scrollY: currentScrollY,
          timestamp: Date.now(),
        }))
        history.replaceState({ ...history.state, scrollY: currentScrollY }, "", window.location.href)
      } catch {}

      navigate(url, false)
    })

    window.addEventListener("popstate", (event) => {
      const { url } = getOpts(event) ?? {}
      if (window.location.hash && window.location.pathname === url?.pathname) return
      navigate(new URL(window.location.toString()), true)
      return
    })
  }

  return new (class Router {
    go(pathname: RelativeURL) {
      const url = new URL(pathname, window.location.toString())
      return navigate(url, false)
    }

    back() {
      return window.history.back()
    }

    forward() {
      return window.history.forward()
    }
  })()
}

createRouter()
notifyNav(getFullSlug(window))

if (!customElements.get("route-announcer")) {
  const attrs = {
    "aria-live": "assertive",
    "aria-atomic": "true",
    style:
      "position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px",
  }

  customElements.define(
    "route-announcer",
    class RouteAnnouncer extends HTMLElement {
      constructor() {
        super()
      }
      connectedCallback() {
        for (const [key, value] of Object.entries(attrs)) {
          this.setAttribute(key, value)
        }
      }
    },
  )
}
