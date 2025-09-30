(function() {
  const EXCLUDED_FOLDERS = [
    "ekler", "görseller", "pdf", "pdfler", "images", "assets", 
    "attachments", "files", "media", "resimler", "dosyalar"
  ]

  interface TreeNode {
    name: string
    slug: string
    isFolder: boolean
    children: TreeNode[]
    level: number
  }

  function shouldExcludeFolder(folderName: string): boolean {
    const lower = folderName.toLowerCase()
    return EXCLUDED_FOLDERS.some(excluded => 
      lower.includes(excluded) || lower === excluded
    )
  }

  function buildTreeFromData(): TreeNode {
    const root: TreeNode = { name: "root", slug: "", isFolder: true, children: [], level: 0 }
    const allSlugs = Object.keys(window.contentIndex || {})
    
    // Group by directory structure
    const pathMap = new Map<string, TreeNode>()
    pathMap.set("", root)
    
    for (const slug of allSlugs) {
      const parts = slug.split("/").filter(p => p.length > 0)
      let currentPath = ""
      let currentNode = root
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i]
        const isLastPart = i === parts.length - 1
        const newPath = currentPath ? `${currentPath}/${part}` : part
        
        if (isLastPart && !part.endsWith(".md")) {
          continue // skip non-markdown files
        }
        
        let childNode = pathMap.get(newPath)
        if (!childNode) {
          const isFolder = !isLastPart || !part.endsWith(".md")
          
          // Skip if folder should be excluded
          if (isFolder && shouldExcludeFolder(part)) {
            break
          }
          
          childNode = {
            name: isFolder ? part : part.replace(/\.md$/, ""),
            slug: newPath,
            isFolder,
            children: [],
            level: i + 1
          }
          
          pathMap.set(newPath, childNode)
          currentNode.children.push(childNode)
        }
        
        currentNode = childNode
        currentPath = newPath
      }
    }
    
    // Sort: folders first, then files alphabetically
    function sortTree(node: TreeNode) {
      node.children.sort((a, b) => {
        if (a.isFolder && !b.isFolder) return -1
        if (!a.isFolder && b.isFolder) return 1
        return a.name.localeCompare(b.name)
      })
      node.children.forEach(sortTree)
    }
    
    sortTree(root)
    return root
  }

  function renderTreeNode(node: TreeNode, isRoot = false): string {
    if (isRoot) {
      return node.children.map(child => renderTreeNode(child)).join("")
    }
    
    const indent = "  ".repeat(Math.max(0, node.level - 1))
    const icon = node.isFolder ? "📁" : "📄"
    const prefix = node.level > 1 ? "├── " : ""
    
    let html = `<div class="tree-item ${node.isFolder ? 'folder' : 'file'}" data-level="${node.level}">
      ${indent}${prefix}${icon} `
    
    if (node.isFolder) {
      html += `<span class="tree-folder-name">${node.name}</span>`
    } else {
      html += `<a href="/${node.slug}" class="tree-file-link">${node.name}</a>`
    }
    
    html += `</div>`
    
    if (node.children.length > 0) {
      html += node.children.map(child => renderTreeNode(child)).join("")
    }
    
    return html
  }

  function calculateStats(node: TreeNode): { folders: number; files: number } {
    let folders = 0
    let files = 0
    
    if (node.isFolder) {
      folders = 1
    } else {
      files = 1
    }
    
    for (const child of node.children) {
      const childStats = calculateStats(child)
      folders += childStats.folders
      files += childStats.files
    }
    
    return { folders, files }
  }

  function openModal(outer: HTMLElement) {
    outer.setAttribute("aria-hidden", "false")
    outer.classList.add("active")
  }

  function closeModal(outer: HTMLElement) {
    outer.setAttribute("aria-hidden", "true")
    outer.classList.remove("active")
  }

  document.addEventListener("nav", async () => {
    const fileTreeRoot = document.querySelector(".file-tree") as HTMLElement | null
    if (!fileTreeRoot) return

    const outer = fileTreeRoot.querySelector(".file-tree-modal-outer") as HTMLElement
    const btn = fileTreeRoot.querySelector(".file-tree-button") as HTMLButtonElement
    const closeBtn = fileTreeRoot.querySelector(".file-tree-close") as HTMLButtonElement
    const content = fileTreeRoot.querySelector(".file-tree-content") as HTMLElement
    const statsFolder = fileTreeRoot.querySelector(".stats-folders") as HTMLElement
    const statsFiles = fileTreeRoot.querySelector(".stats-files") as HTMLElement

    const onOpen = () => {
      openModal(outer)
      
      // Build and render tree
      const tree = buildTreeFromData()
      const stats = calculateStats(tree)
      
      statsFolder.textContent = `${stats.folders - 1} klasör` // -1 for root
      statsFiles.textContent = `${stats.files} dosya`
      
      content.innerHTML = `<div class="tree-view">${renderTreeNode(tree, true)}</div>`
    }
    
    const onClose = () => closeModal(outer)
    const onOutsideClick = (e: MouseEvent) => {
      if (e.target === outer) closeModal(outer)
    }

    btn.addEventListener("click", onOpen)
    closeBtn.addEventListener("click", onClose)
    outer.addEventListener("click", onOutsideClick)

    window.addCleanup(() => btn.removeEventListener("click", onOpen))
    window.addCleanup(() => closeBtn.removeEventListener("click", onClose))
    window.addCleanup(() => outer.removeEventListener("click", onOutsideClick))
  })
})()
