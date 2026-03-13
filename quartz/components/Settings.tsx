// @ts-ignore
import settingsScript from "./scripts/settings.inline"
import styles from "./styles/settings.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Settings: QuartzComponent = (props: QuartzComponentProps) => {
  const { displayClass } = props
  return (
    <div class={classNames(displayClass, "settings")}>
      {/* Font Dropdown */}
      <div class="font-dropdown" id="font-dropdown">
        <button class="dropdown-button font-button" aria-label="Yazı Tipi" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
          </svg>
        </button>
        <div class="dropdown-content font-dropdown-content">
          <div class="section-header">Yazı Tipi</div>

          {/* İlk 5 font */}
          <div class="font-options font-visible">
            <label class="font-item" data-font="Inter">
              <input type="radio" name="font-choice" value="" />
              <span>Varsayılan</span>
            </label>
            <label class="font-item" data-font="Poppins">
              <input type="radio" name="font-choice" value="Poppins" />
              <span>Poppins</span>
            </label>
            <label class="font-item" data-font="Lato">
              <input type="radio" name="font-choice" value="Lato" />
              <span>Lato</span>
            </label>
            <label class="font-item" data-font="Roboto">
              <input type="radio" name="font-choice" value="Roboto" />
              <span>Roboto</span>
            </label>
            <label class="font-item" data-font="Open Sans">
              <input type="radio" name="font-choice" value="Open Sans" />
              <span>Open Sans</span>
            </label>
          </div>

          {/* Diğer Fontlar - Tema seçici gibi */}
          <div class="font-show-more">
            <span>Diğer Fontlar</span>
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
              class="plus-icon"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>

          {/* Gizli fontlar */}
          <div class="font-options font-hidden">
            <label class="font-item" data-font="Quicksand">
              <input type="radio" name="font-choice" value="Quicksand" />
              <span>Quicksand</span>
            </label>
            <label class="font-item" data-font="Montserrat">
              <input type="radio" name="font-choice" value="Montserrat" />
              <span>Montserrat</span>
            </label>
            <label class="font-item" data-font="Merriweather">
              <input type="radio" name="font-choice" value="Merriweather" />
              <span>Merriweather</span>
            </label>
            <label class="font-item" data-font="Source Sans Pro">
              <input type="radio" name="font-choice" value="Source Sans Pro" />
              <span>Source Sans</span>
            </label>
          </div>

          {/* Boyut */}
          <div class="section-header size-header">Boyut</div>
          <div class="size-options">
            <label class="size-item">
              <input type="radio" name="font-size-choice" value="0.9rem" />
              <span>Küçük</span>
            </label>
            <label class="size-item">
              <input type="radio" name="font-size-choice" value="1rem" />
              <span>Normal</span>
            </label>
            <label class="size-item">
              <input type="radio" name="font-size-choice" value="1.15rem" />
              <span>Büyük</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

Settings.afterDOMLoaded = settingsScript
Settings.css = styles

export default (() => Settings) satisfies QuartzComponentConstructor
