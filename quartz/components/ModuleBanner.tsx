import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/moduleBanner.scss"
// @ts-ignore
import script from "./scripts/moduleBanner.inline"
import { NOETIC_MODULES } from "./data/noeticModules"

const ICONS = {
  oop: (
    <svg
      class="module-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  language: (
    <svg
      class="module-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  ybs: (
    <svg
      class="module-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  finance: (
    <svg
      class="module-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  web: (
    <svg
      class="module-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 4 5.7 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.7-4-9s1.5-6.3 4-9Z" />
    </svg>
  ),
}

const ModuleBanner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""

  const matchingModule = NOETIC_MODULES.find((config) => {
    const regex = new RegExp(config.slugPattern, "i")
    return regex.test(slug)
  })

  if (!matchingModule) {
    return null
  }

  return (
    <div class={`module-banner ${displayClass ?? ""}`} data-module-url={matchingModule.moduleUrl}>
      <div class="module-banner-content">
        <span class="module-banner-icon">{ICONS[matchingModule.iconType]}</span>
        <div class="module-banner-text">
          <span class="module-banner-title">{matchingModule.title}</span>
          <span class="module-banner-subtitle">
            {matchingModule.subtitle ?? "Test ve pratik modülü hazır!"}
          </span>
          {matchingModule.warningNote && (
            <span class="module-banner-warning">{matchingModule.warningNote}</span>
          )}
        </div>
        <a
          href="#"
          class="module-banner-button"
          data-module-link
          target="_blank"
          rel="noopener noreferrer"
        >
          Modülü Aç
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

ModuleBanner.css = styles
ModuleBanner.afterDOMLoaded = script

export default (() => ModuleBanner) satisfies QuartzComponentConstructor
