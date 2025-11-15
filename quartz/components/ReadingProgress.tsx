// @ts-ignore
import readingProgressScript from "./scripts/reading-progress.inline"
import styles from "./styles/reading-progress.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Reading Progress Tracker
 *
 * Faz 2 özelliği: Okuma ilerlemesini takip eder, scroll pozisyonunu kalıcı saklar.
 * Varsayılan olarak görünmez (CSS ile gizlenir), sadece script çalışır.
 */
const ReadingProgress: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  if (!cfg.features?.readingProgressBar) {
    return null
  }

  return (
    <div class="reading-progress" aria-hidden="true" data-visual="subtle">
      <div class="reading-progress__track">
        <div class="reading-progress__indicator" />
      </div>
    </div>
  )
}

ReadingProgress.css = styles
ReadingProgress.beforeDOMLoaded = readingProgressScript

export default (() => ReadingProgress) satisfies QuartzComponentConstructor
