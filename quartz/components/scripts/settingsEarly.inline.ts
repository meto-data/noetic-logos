// Early settings restoration script - runs in <head> before DOM renders (beforeDOMLoaded)
;(function () {
  try {
    // 0. Redirect ATLAS path if accessed directly
    if (window.location.pathname.includes("/ATLAS/")) {
      const fixedPath = window.location.pathname.replace(/\/ATLAS\//i, "/")
      window.location.replace(fixedPath + window.location.search + window.location.hash)
      return
    }

    // 1. Restore Theme
    const savedTheme = localStorage.getItem("theme") || "light"
    document.documentElement.setAttribute("saved-theme", savedTheme)

    // 2. Restore Font Size
    const savedSize = localStorage.getItem("font-size") || "1rem"
    document.documentElement.style.setProperty("--baseFontSize", savedSize)

    // 3. Restore Line Height
    const savedLineHeight = localStorage.getItem("line-height")
    if (savedLineHeight) {
      document.documentElement.style.setProperty("--noetic-line-height", savedLineHeight)
    }

    // 4. Restore Content Width
    const savedContentWidth = localStorage.getItem("content-width")
    if (savedContentWidth && savedContentWidth !== "none") {
      document.documentElement.style.setProperty("--noetic-content-max-width", savedContentWidth)
    }

    // 5. Restore Font Family
    const savedFont = localStorage.getItem("font-family")
    if (savedFont) {
      const link = document.createElement("link")
      link.id = "dynamic-google-font"
      link.rel = "stylesheet"
      link.href =
        "https://fonts.googleapis.com/css2?family=" +
        savedFont.replace(/ /g, "+") +
        ":ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
      document.head.appendChild(link)
      document.documentElement.style.setProperty("--bodyFont", `"${savedFont}", system-ui, sans-serif`)
      document.documentElement.style.setProperty("--headerFont", `"${savedFont}", system-ui, sans-serif`)
    }

    // 6. Restore UI Toggle Classes
    if (localStorage.getItem("custom-typography") === "true") {
      document.documentElement.classList.add("noetic-custom-typo")
    }
    if (localStorage.getItem("code-line-numbers") === "true") {
      document.documentElement.classList.add("noetic-code-line-numbers")
    }
    if (localStorage.getItem("code-collapsible") === "true") {
      document.documentElement.classList.add("noetic-code-collapsible")
    }
    if (localStorage.getItem("zen-mode") === "true") {
      document.documentElement.classList.add("noetic-zen-mode")
    }
    if (localStorage.getItem("walk-mode") === "true") {
      document.documentElement.classList.add("noetic-walk-mode")
    }
  } catch (e) {
    // Ignore errors in environments where localStorage is blocked
  }
})()
