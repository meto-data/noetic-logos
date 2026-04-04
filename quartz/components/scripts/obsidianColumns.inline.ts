document.addEventListener("nav", () => {
  const columns = document.querySelectorAll("article .obsidian-col")
  columns.forEach((col) => {
    const element = col as HTMLElement
    const flexGrowRaw = element.dataset.flexGrow
    if (!flexGrowRaw) {
      return
    }

    const value = Number.parseFloat(flexGrowRaw)
    if (Number.isFinite(value) && value > 0) {
      element.style.flexGrow = String(value)
    }
  })
})
