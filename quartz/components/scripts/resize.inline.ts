// Panel Resize Script
// Sol ve sağ panelleri yeniden boyutlandırma işlevselliği

document.addEventListener("nav", () => {
    const body = document.querySelector("#quartz-body") as HTMLElement
    if (!body) return

    const leftSidebar = document.querySelector(".sidebar.left") as HTMLElement
    const rightSidebar = document.querySelector(".sidebar.right") as HTMLElement

    if (!leftSidebar || !rightSidebar) return

    // Resize handle elementlerini oluştur
    const createResizeHandle = (side: "left" | "right") => {
        const handle = document.createElement("div")
        handle.className = `resize-handle resize-handle-${side}`
        handle.innerHTML = "⋮"
        return handle
    }

    // Sol resize handle
    const leftHandle = createResizeHandle("left")
    leftSidebar.appendChild(leftHandle)

    // Sağ resize handle
    const rightHandle = createResizeHandle("right")
    rightSidebar.appendChild(rightHandle)

    // Resize state
    let isResizing = false
    let currentHandle: "left" | "right" | null = null
    let startX = 0
    let startWidth = 0

    // Minimum ve maximum genişlikler
    const MIN_WIDTH = 150
    const MAX_WIDTH = 400

    // Mouse down - resize başlat
    const onMouseDown = (e: MouseEvent, side: "left" | "right") => {
        isResizing = true
        currentHandle = side
        startX = e.clientX

        const sidebar = side === "left" ? leftSidebar : rightSidebar
        startWidth = sidebar.offsetWidth

        document.body.style.cursor = "col-resize"
        document.body.style.userSelect = "none"

        e.preventDefault()
    }

    // Mouse move - resize devam
    const onMouseMove = (e: MouseEvent) => {
        if (!isResizing || !currentHandle) return

        const sidebar = currentHandle === "left" ? leftSidebar : rightSidebar
        let diff = e.clientX - startX

        // Sağ panel için ters yön
        if (currentHandle === "right") {
            diff = -diff
        }

        let newWidth = startWidth + diff
        newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, newWidth))

        sidebar.style.width = `${newWidth}px`
        sidebar.style.minWidth = `${newWidth}px`
        sidebar.style.maxWidth = `${newWidth}px`
    }

    // Mouse up - resize bitir
    const onMouseUp = () => {
        if (!isResizing) return

        isResizing = false
        currentHandle = null
        document.body.style.cursor = ""
        document.body.style.userSelect = ""

        // Genişlikleri localStorage'a kaydet
        localStorage.setItem("leftSidebarWidth", leftSidebar.style.width)
        localStorage.setItem("rightSidebarWidth", rightSidebar.style.width)
    }

    // Event listeners ekle
    leftHandle.addEventListener("mousedown", (e) => onMouseDown(e, "left"))
    rightHandle.addEventListener("mousedown", (e) => onMouseDown(e, "right"))
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)

    // localStorage'dan genişlikleri yükle
    const savedLeftWidth = localStorage.getItem("leftSidebarWidth")
    const savedRightWidth = localStorage.getItem("rightSidebarWidth")

    if (savedLeftWidth) {
        leftSidebar.style.width = savedLeftWidth
        leftSidebar.style.minWidth = savedLeftWidth
        leftSidebar.style.maxWidth = savedLeftWidth
    }

    if (savedRightWidth) {
        rightSidebar.style.width = savedRightWidth
        rightSidebar.style.minWidth = savedRightWidth
        rightSidebar.style.maxWidth = savedRightWidth
    }

    // Cleanup
    window.addCleanup(() => {
        leftHandle.removeEventListener("mousedown", (e) => onMouseDown(e, "left"))
        rightHandle.removeEventListener("mousedown", (e) => onMouseDown(e, "right"))
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseup", onMouseUp)
    })
})
