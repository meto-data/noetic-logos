import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/noeticModules.scss"
// @ts-ignore
import script from "./scripts/noeticModules.inline"
import { NOETIC_MODULES, NoeticModuleDefinition, NoeticModuleIcon } from "./data/noeticModules"

const ICONS: Record<NoeticModuleIcon, JSX.Element> = {
  oop: (
    <svg
      class="noetic-modules-icon"
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
      class="noetic-modules-icon"
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
      class="noetic-modules-icon"
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
      class="noetic-modules-icon"
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
}

const ModuleCard = ({ module }: { module: NoeticModuleDefinition }) => (
  <a
    href="#"
    class="noetic-modules-card"
    data-noetic-module-link
    data-module-url={module.moduleUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="noetic-modules-card__icon">{ICONS[module.iconType]}</span>
    <span class="noetic-modules-card__body">
      <span class="noetic-modules-card__title">{module.title}</span>
      <span class="noetic-modules-card__subtitle">{module.subtitle}</span>
      {module.warningNote && <span class="noetic-modules-card__note">{module.warningNote}</span>}
    </span>
    <span class="noetic-modules-card__arrow" aria-hidden="true">
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
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </span>
  </a>
)

const NoeticModules: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="noetic-modules-root">
      <button type="button" class="noetic-modules-trigger" data-noetic-modules-trigger="desktop">
        <span class="noetic-modules-trigger__icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </span>
        <span class="noetic-modules-trigger__label">Modüller</span>
      </button>

      <div class="noetic-modules-overlay"></div>

      <section class="noetic-modules-panel" aria-hidden="true" role="dialog">
        <div class="noetic-modules-panel__header">
          <div class="noetic-modules-panel__heading">
            <span class="noetic-modules-panel__eyebrow">Noetic Modüller</span>
            <h3>Tüm modüller tek yerde</h3>
          </div>
          <button type="button" class="noetic-modules-panel__close" aria-label="Kapat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div class="noetic-modules-panel__grid">
          {NOETIC_MODULES.map((module) => (
            <ModuleCard module={module} />
          ))}
        </div>
      </section>
    </div>
  )
}

NoeticModules.css = styles
NoeticModules.afterDOMLoaded = script

export default (() => NoeticModules) satisfies QuartzComponentConstructor
