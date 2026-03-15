interface Window {
  __noeticEnhancements?: { cleanup: () => void }
}

window.__noeticEnhancements?.cleanup()

const cleanupFns: (() => void)[] = []

function setupLightbox() {
  document.querySelectorAll("article img:not(.no-lightbox):not([data-lightbox-bound])").forEach((img) => {
    const imgEl = img as HTMLImageElement
    imgEl.setAttribute("data-lightbox-bound", "true")
    const handler = () => {
      const overlay = document.createElement("div")
      overlay.className = "noetic-lightbox-overlay"
      const bigImg = document.createElement("img")
      bigImg.src = imgEl.src
      bigImg.alt = imgEl.alt
      overlay.appendChild(bigImg)
      overlay.addEventListener("click", () => overlay.remove())
      const escHandler = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          overlay.remove()
          document.removeEventListener("keydown", escHandler)
        }
      }
      document.addEventListener("keydown", escHandler)
      document.body.appendChild(overlay)
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

    const className = code.className || ""
    const langMatch = className.match(/language-(\w+)/)
    if (langMatch) {
      preEl.setAttribute("data-language", langMatch[1])
    }

    if (code.textContent && code.textContent.split("\n").length > 15) {
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

window.__noeticEnhancements = {
  cleanup: () => {
    cleanupFns.forEach(fn => fn())
    cleanupFns.length = 0
    document.removeEventListener("nav", handleNav)
  },
}
