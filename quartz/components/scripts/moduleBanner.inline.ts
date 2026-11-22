/**
 * ModuleBanner Client-Side Script
 *
 * Base path'i dinamik olarak hesaplar ve modül linklerini düzeltir.
 * Search.inline.ts ile aynı getBasePath() mantığını kullanır.
 */

function getBasePath(): string {
  // Try to get base from <base> tag first
  const baseElement = document.querySelector("base")
  if (baseElement?.href) {
    return baseElement.href.endsWith("/") ? baseElement.href : baseElement.href + "/"
  }

  // Fallback: detect from current URL
  const pathname = window.location.pathname
  const segments = pathname.split("/").filter(Boolean)

  // For GitHub Pages (github.io domain), first segment is repo name
  if (segments.length > 0 && window.location.hostname.endsWith(".github.io")) {
    return `${window.location.origin}/${segments[0]}/`
  }

  const currentDir = pathname.endsWith("/")
    ? pathname
    : `${pathname.slice(0, pathname.lastIndexOf("/") + 1) || "/"}`

  return new URL(currentDir, window.location.origin).toString()
}

function initModuleBanner() {
  const banners = document.querySelectorAll(".module-banner")

  banners.forEach((banner) => {
    const moduleUrl = banner.getAttribute("data-module-url")
    const link = banner.querySelector("[data-module-link]") as HTMLAnchorElement

    if (moduleUrl && link) {
      const basePath = getBasePath()
      const fullUrl = new URL(moduleUrl, basePath).toString()
      link.href = fullUrl
      link.target = "_blank"
      link.rel = "noopener noreferrer"
    }
  })
}

document.addEventListener("nav", initModuleBanner)
