import { QuartzTransformerPlugin } from "../types"
import { Root, Code, Html } from "mdast"
import { visit } from "unist-util-visit"
// @ts-ignore
import interactiveScript from "../../components/scripts/interactive.inline"
import interactiveStyle from "../../components/styles/interactive.inline.scss"
import { JSResource, CSSResource } from "../../util/resources"

function safeJsonParse(raw: string) {
  const cleaned = raw
    .trim()
    // remove potential trailing commas before closing braces/brackets
    .replace(/,\s*([\]}])/g, "$1")
  return JSON.parse(cleaned)
}

export const Interactive: QuartzTransformerPlugin = () => {
  return {
    name: "Interactive",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root, _file) => {
            visit(tree, "code", (node: Code, index, parent) => {
              if (!parent || index === undefined) return
              const lang = (node.lang || "").toLowerCase().trim()

              if (lang === "quiz" || lang === "puzzle") {
                try {
                  const data = safeJsonParse(node.value)

                  // Automatically populate any empty/blank cells with random distractor letters for word searches
                  if (lang === "puzzle" && data && data.type !== "crossword" && Array.isArray(data.grid)) {
                    const DISTRACTOR_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    const totalWords = Array.isArray(data.words) ? data.words.length : 1
                    for (let r = 0; r < data.grid.length; r++) {
                      if (Array.isArray(data.grid[r])) {
                        for (let c = 0; c < data.grid[r].length; c++) {
                          const val = data.grid[r][c]
                          if (!val || typeof val !== "string" || val.trim() === "") {
                            const hash = Math.abs(Math.sin((r + 1) * 997 + (c + 1) * 313 + totalWords * 17) * 10000)
                            data.grid[r][c] = DISTRACTOR_LETTERS[Math.floor(hash) % DISTRACTOR_LETTERS.length]
                          }
                        }
                      }
                    }
                  }

                  const jsonStr = JSON.stringify(data)
                  const base64 = Buffer.from(jsonStr, "utf-8").toString("base64")

                  const htmlNode: Html = {
                    type: "html",
                    value: `<div class="interactive-${lang}-widget" data-widget-type="${lang}" data-payload="${base64}"></div>`,
                  }

                  parent.children.splice(index, 1, htmlNode)
                } catch (err: any) {
                  const errMsg = err?.message || "Geçersiz JSON şablonu"
                  const escapedCode = node.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

                  const errorNode: Html = {
                    type: "html",
                    value: `<div class="interactive-error-box"><div class="interactive-error-title">⚠️ ${lang.toUpperCase()} Şablon Ayrıştırma Hatası</div><p class="interactive-error-desc">${errMsg}</p><pre class="interactive-error-code"><code>${escapedCode}</code></pre></div>`,
                  }

                  parent.children.splice(index, 1, errorNode)
                }
              }
            })
          }
        },
      ]
    },
    externalResources() {
      const js: JSResource[] = [
        {
          script: interactiveScript,
          loadTime: "afterDOMReady",
          contentType: "inline",
          moduleType: "module",
        },
      ]
      const css: CSSResource[] = [
        {
          content: interactiveStyle,
          inline: true,
        },
      ]
      return { js, css }
    },
  }
}
