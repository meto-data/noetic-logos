// @ts-ignore
import progressScript from "./scripts/progress-dashboard.inline"
import styles from "./styles/progress-dashboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Progress Dashboard Component
 *
 * Kullanıcının test/quiz ilerlemesini gösterir.
 * localStorage'dan veri okur ve görselleştirir.
 */
const ProgressDashboard: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  // Feature toggle kontrolü
  if (!cfg.features?.progressTracking) {
    return null
  }

  return (
    <div class={`progress-dashboard ${displayClass ?? ""}`}>
      <div class="progress-dashboard-header">
        <h3>İlerleme</h3>
        <button class="progress-refresh" aria-label="Yenile" title="Yenile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        </button>
      </div>
      <div class="progress-dashboard-content">
        <div class="progress-loading">İlerleme yükleniyor...</div>
        {/* Client-side script tarafından doldurulacak */}
      </div>
    </div>
  )
}

ProgressDashboard.css = styles
ProgressDashboard.afterDOMLoaded = progressScript

export default (() => ProgressDashboard) satisfies QuartzComponentConstructor
