// @ts-ignore
import prerequisiteScript from "./scripts/prerequisite.inline"
import styles from "./styles/prerequisite.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"

/**
 * Prerequisite Banner Component
 *
 * Frontmatter'da tanımlı ön koşulları kontrol eder.
 * Eksik ön koşul varsa kullanıcıya uyarı banner'ı gösterir.
 */
const PrerequisiteBanner: QuartzComponent = ({
  fileData,
  displayClass,
  cfg,
}: QuartzComponentProps) => {
  // Feature toggle kontrolü
  if (!cfg.features?.prerequisiteSystem) {
    return null
  }

  const prerequisites = fileData.frontmatter?.prerequisites as string[] | undefined

  // Prerequisite yoksa hiçbir şey gösterme
  if (!prerequisites || !Array.isArray(prerequisites) || prerequisites.length === 0) {
    return null
  }

  const recommendedOrder = fileData.frontmatter?.recommendedOrder as number | undefined

  // Banner sunucu tarafında render edilmez - client-side script tarafından doldurulur
  // Bu sayede localStorage'a erişebiliriz
  return (
    <div
      class={`prerequisite-banner ${displayClass ?? ""}`}
      data-prerequisites={JSON.stringify(prerequisites)}
      data-recommended-order={recommendedOrder}
      data-current-slug={fileData.slug}
    >
      {/* Client-side script tarafından doldurulacak */}
    </div>
  )
}

PrerequisiteBanner.css = styles
PrerequisiteBanner.afterDOMLoaded = prerequisiteScript

export default (() => PrerequisiteBanner) satisfies QuartzComponentConstructor
