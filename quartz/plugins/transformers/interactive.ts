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
