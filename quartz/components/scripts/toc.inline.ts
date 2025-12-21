const observer = new IntersectionObserver((entries) => {
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

function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

// TOC link click handler - navigasyonu zorla
function handleTocClick(e: Event) {
  const target = e.target as HTMLElement
  const link = target.closest('a[data-for]') as HTMLAnchorElement | null

  if (link) {
    e.preventDefault()
    e.stopPropagation()

    const slug = link.getAttribute('data-for')
    const href = link.getAttribute('href')

    console.log('[TOC Debug] Link clicked:', { slug, href })

    if (slug) {
      const targetElement = document.getElementById(slug)
      console.log('[TOC Debug] Target element:', targetElement)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        console.log('[TOC Debug] Scrolled to:', slug)

        // URL hash'i güncelle
        history.pushState(null, '', `#${slug}`)
      } else {
        console.warn('[TOC Debug] Target element not found for slug:', slug)
      }
    }
  }
}

function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return

    // Toggle için event listener
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))

    // TOC linkleri için click handler
    content.addEventListener("click", handleTocClick)
    window.addCleanup(() => content.removeEventListener("click", handleTocClick))

    console.log('[TOC Debug] TOC setup complete, links found:', content.querySelectorAll('a[data-for]').length)
  }
}

document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  observer.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  console.log('[TOC Debug] Headers found:', headers.length)
  headers.forEach((header) => observer.observe(header))
})

