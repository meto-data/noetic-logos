import { QuartzTransformerPlugin } from "../types"

export interface PrerequisiteData {
  /**
   * Önkoşul derslerin slug'ları (örn: ["oop1/basics", "finance/dikey-analiz"])
   */
  prerequisites?: string[]
  /**
   * Dersin önerilen sırası (isteğe bağlı)
   */
  recommendedOrder?: number
}

/**
 * Prerequisites Transformer
 *
 * Frontmatter'dan prerequisite bilgisini parse eder ve fileData'ya ekler.
 *
 * Örnek frontmatter:
 * ---
 * title: "İleri Düzey OOP"
 * prerequisites:
 *   - "oop1/basics"
 *   - "oop1/inheritance"
 * recommendedOrder: 3
 * ---
 */
export const Prerequisites: QuartzTransformerPlugin<Partial<PrerequisiteData>> = (
  userOpts,
) => {
  const opts: PrerequisiteData = {
    ...userOpts,
  }

  return {
    name: "Prerequisites",
    markdownPlugins() {
      return []
    },
    htmlPlugins() {
      return []
    },
    externalResources() {
      return {
        css: [],
        js: [],
      }
    },
  }
}

declare module "vfile" {
  interface DataMap {
    prerequisites?: string[]
    recommendedOrder?: number
  }
}
