// @ts-ignore
import scrollRestoreScript from "./scripts/scroll-restore.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Scroll Position Restore Component
 *
 * [[]] inline linklerden geri dönüşte scroll pozisyonunu hatırlar.
 * Bu component görünmez - sadece script inject eder.
 */
const ScrollRestore: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // Feature toggle kontrolü
  if (!cfg.features?.scrollPositionRestore) {
    return null
  }

  // Görünmez component - sadece script yüklenir
  return null
}

// Script'i DOM yüklenmeden önce çalıştır
ScrollRestore.beforeDOMLoaded = scrollRestoreScript

export default (() => ScrollRestore) satisfies QuartzComponentConstructor
