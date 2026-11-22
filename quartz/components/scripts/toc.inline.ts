let currentActiveSlug: string | null = null
let isUserClicking = false
let clickTimeout: number | null = null

function centerTocItem(target: HTMLElement, smooth = true) {
  const container = (target.closest("ul.toc-content") || target.closest(".sidebar.right")) as HTMLElement | null
  if (!container) return

  const targetRect = target.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  const currentScrollTop = container.scrollTop
  const relativeTop = targetRect.top - containerRect.top + currentScrollTop
  const targetScrollTop = relativeTop - container.clientHeight / 2 + target.clientHeight / 2

  container.scrollTo({
    top: Math.max(0, targetScrollTop),
    behavior: smooth ? "smooth" : "auto",
  })
}

function setActiveTocItem(slug: string, smooth = true) {
  document.querySelectorAll(".toc-content a, .toc-content li").forEach((el) => {
    el.classList.remove("is-active")
  })

  let link: HTMLElement | null = null
  try {
    link = document.querySelector(`.toc-content a[data-for="${CSS.escape(slug)}"]`)
  } catch {
    link = document.querySelector(`.toc-content a[data-for="${slug}"]`)
  }

  if (!link) return

  link.classList.add("is-active")
  const li = link.closest("li")
  if (li) {
    li.classList.add("is-active")
    centerTocItem(li, smooth)
  } else {
    centerTocItem(link, smooth)
  }
}

function updateActiveHeadingOnScroll() {
  if (isUserClicking) return

  const headers = Array.from(
    document.querySelectorAll("article h1[id], article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]")
  ) as HTMLElement[]

  if (headers.length === 0) return

  const topThreshold = 140
  let activeHeader: HTMLElement | null = null

  for (let i = 0; i < headers.length; i++) {
    const rect = headers[i].getBoundingClientRect()
    if (rect.top <= topThreshold) {
      activeHeader = headers[i]
    } else {
      break
    }
  }

  if (!activeHeader && headers.length > 0) {
    const firstRect = headers[0].getBoundingClientRect()
    if (firstRect.top > topThreshold && firstRect.top < window.innerHeight / 2) {
      activeHeader = headers[0]
    }
  }

  if (activeHeader && activeHeader.id !== currentActiveSlug) {
    currentActiveSlug = activeHeader.id
    setActiveTocItem(currentActiveSlug, true)
  }
}

const observer =
  typeof window.IntersectionObserver === "function"
    ? new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const slug = entry.target.id
          const tocEntryElements = document.querySelectorAll(`a[data-for="${slug}"]`)
          const windowHeight = entry.rootBounds?.height
          if (windowHeight && tocEntryElements.length > 0) {
            if (entry.boundingClientRect.y < windowHeight) {
              tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.add("in-view"))
            } else {
              tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.remove("in-view"))
            }
          }
        }
      })
    : null

function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.closest(".toc")?.classList.toggle("collapsed", this.classList.contains("collapsed"))
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

// TOC link click handler - navigasyonu zorla ve ortala
function handleTocClick(e: Event) {
  const target = e.target as HTMLElement
  const link = target.closest("a[data-for]") as HTMLAnchorElement | null

  if (link) {
    e.preventDefault()
    e.stopPropagation()

    const slug = link.getAttribute("data-for")

    if (slug) {
      const targetElement = document.getElementById(slug)

      if (targetElement) {
        isUserClicking = true
        if (clickTimeout) clearTimeout(clickTimeout)
        clickTimeout = window.setTimeout(() => {
          isUserClicking = false
        }, 850)

        currentActiveSlug = slug
        setActiveTocItem(slug, true)

        targetElement.scrollIntoView({ behavior: "smooth", block: "start" })

        // URL hash'i güncelle
        history.pushState(null, "", `#${slug}`)
      }
    }
  }
}

function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return
    toc.classList.toggle("collapsed", button.classList.contains("collapsed"))

    // Toggle için event listener
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))

    // TOC linkleri için click handler
    content.addEventListener("click", handleTocClick)
    window.addCleanup(() => content.removeEventListener("click", handleTocClick))
  }
}

let scrollTicking = false
function onWindowScroll() {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      updateActiveHeadingOnScroll()
      scrollTicking = false
    })
    scrollTicking = true
  }
}

document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  observer?.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer?.observe(header))

  window.addEventListener("scroll", onWindowScroll, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", onWindowScroll))

  // İlk yüklemede aktif başlığı ve ortalamayı ayarla
  if (window.location.hash) {
    const hashSlug = decodeURIComponent(window.location.hash.slice(1))
    currentActiveSlug = hashSlug
    setTimeout(() => setActiveTocItem(hashSlug, false), 100)
  } else {
    setTimeout(updateActiveHeadingOnScroll, 100)
  }
})
