import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/settings.scss"
// @ts-ignore
import settingsScript from "./scripts/settings.inline"
import { classNames } from "../util/lang"

interface ThemeDefinition {
  id: string
  name: string
  bg: string
  color: string
  desc: string
}

const THEMES: ThemeDefinition[] = [
  {
    id: "light",
    name: "Açık",
    bg: "#ffffff",
    color: "#5993f0",
    desc: "Temiz, ferah ve standart aydınlık arayüz.",
  },
  {
    id: "dark",
    name: "Koyu",
    bg: "#111827",
    color: "#3b82f6",
    desc: "Göz yormayan dengeli ve modern karanlık mod.",
  },
  {
    id: "stone-dark",
    name: "Taş",
    bg: "#1c1917",
    color: "#d97706",
    desc: "Sıcak antrasit ve volkanik kaya tonları.",
  },
  {
    id: "olive-light",
    name: "Fıstık",
    bg: "#f4f6f0",
    color: "#5c7c4f",
    desc: "Açık zeytin ve yumuşak pastel yeşil zemin.",
  },
  {
    id: "olive-dark",
    name: "Koyu Fıstık",
    bg: "#232822",
    color: "#82A370",
    desc: "Derin orman ve zeytin yeşili tonları.",
  },
  {
    id: "library-light",
    name: "Kütüphane",
    bg: "#fbf8f2",
    color: "#8B7355",
    desc: "Eski kitap kağıdı ve parşömen sıcaklığı.",
  },
  {
    id: "nord-light",
    name: "Nord",
    bg: "#ECEFF4",
    color: "#5E81AC",
    desc: "Kutup serinliği, pastel buz mavisi ve gri.",
  },
  {
    id: "deep-sea",
    name: "Okyanus",
    bg: "#0F172A",
    color: "#38BDF8",
    desc: "Süzülen derin deniz balinası efektiyle okyanus mavisi.",
  },
  {
    id: "void",
    name: "Boşluk",
    bg: "#0d0101",
    color: "#ef4444",
    desc: "OLED ekranlar için ultra derin siyah ve keskin kontrast.",
  },
  {
    id: "deep-void",
    name: "Uzay",
    bg: "#050007",
    color: "#a855f7",
    desc: "Kozmik mor partikül ışıltılarıyla derin uzay.",
  },
]

const FONTS = [
  { id: "", label: "Varsayılan (Inter)", font: "Inter" },
  { id: "Poppins", label: "Poppins", font: "Poppins" },
  { id: "Lato", label: "Lato", font: "Lato" },
  { id: "Roboto", label: "Roboto", font: "Roboto" },
  { id: "Open Sans", label: "Open Sans", font: "Open Sans" },
  { id: "Quicksand", label: "Quicksand", font: "Quicksand" },
  { id: "Montserrat", label: "Montserrat", font: "Montserrat" },
  { id: "Merriweather", label: "Merriweather", font: "Merriweather" },
  { id: "Source Sans Pro", label: "Source Sans Pro", font: "Source Sans Pro" },
  { id: "Atkinson Hyperlegible", label: "Atkinson (Disleksi)", font: "Atkinson Hyperlegible" },
]

const Settings: QuartzComponent = (props: QuartzComponentProps) => {
  const { displayClass } = props
  return (
    <div class={classNames(displayClass, "settings-root")}>
      {/* Desktop Trigger Butonu */}
      <button
        class="settings-trigger"
        aria-label="Ayarlar"
        type="button"
        data-action="open-settings"
        title="Ayarlar & Temalar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="17" height="17" class="fa-icon">
          <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.4c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.9-8.2-111.6 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L86.2 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.5 11.2 5.5 14l42.6 24.6c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.5c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.9 8.2 111.6 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.5c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.7-5.4-.5-11.2-5.5-14zm-231.4 44.3c-57.4 0-104-46.6-104-104s46.6-104 104-104 104 46.6 104 104-46.6 104-104 104z"/>
        </svg>
      </button>

      {/* Arka Plan Bulanıklık & Karartma Katmanı */}
      <div id="settings-overlay" class="settings-overlay" data-action="close"></div>

      {/* Ana Modal Penceresi */}
      <section
        id="settings-panel"
        class="settings-panel"
        aria-hidden="true"
        role="dialog"
        aria-modal="true"
        aria-label="Ayarlar Portalı"
      >
        {/* SOL PANEL (Masaüstü: 260px) */}
        <aside class="settings-sidebar">
          {/* Sol Header: Kapat butonu + İkon Rozeti + Başlık */}
          <div class="settings-sidebar__header">
            <button
              type="button"
              class="settings-icon-btn"
              data-action="close"
              title="Kapat"
              aria-label="Kapat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="fa-icon">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div class="settings-badge" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" class="fa-icon">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            </div>

            <div class="settings-sidebar__titles">
              <span class="settings-sidebar__title">Ayarlar</span>
              <span class="settings-sidebar__subtitle">Görünüm & Tercihler</span>
            </div>
          </div>

          {/* Navigasyon Sekmeleri */}
          <div class="settings-nav-wrapper">
            <div class="settings-sidebar__section-title">Kategoriler</div>
            <nav class="settings-nav" aria-label="Ayar Sekmeleri">
              <button
                type="button"
                class="settings-nav-item is-active"
                data-tab="themes"
                role="tab"
                aria-selected="true"
              >
                <span class="settings-nav-icon">
                  <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.5 .4 7 1.1 10.4c2.5 11.7 3.8 24.1 3.8 36.6c0 53-43 96-96 96c-114.9 0-208-93.1-208-208C-3.1 139.1 89.1 46.9 203 46.9c13.7 0 27.2 1.3 40.3 3.8C397.6 77.9 512 173.8 512 256zM152 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-48 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                  </svg>
                </span>
                <span class="settings-nav-label">Temalar</span>
                <span class="settings-nav-badge">10</span>
              </button>

              <button
                type="button"
                class="settings-nav-item"
                data-tab="typography"
                role="tab"
                aria-selected="false"
              >
                <span class="settings-nav-icon">
                  <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="currentColor">
                    <path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H103.4l27-72h187.2l27 72H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8L254 52.8zM154.4 288L224 102.4 293.6 288H154.4z"/>
                  </svg>
                </span>
                <span class="settings-nav-label">Tipografi</span>
              </button>

              <button
                type="button"
                class="settings-nav-item"
                data-tab="preferences"
                role="tab"
                aria-selected="false"
              >
                <span class="settings-nav-icon">
                  <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15" fill="currentColor">
                    <path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm-73.3 48c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 144c-17.7 0-32-14.3-32-32s14.3-32 32-32l101.4 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L240 80c17.7 0 32 14.3 32 32s-14.3 32-32 32l-1.3 0zM205.4 128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 256c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zm-73.3 48c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 304c-17.7 0-32-14.3-32-32s14.3-32 32-32l101.4 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L240 240c17.7 0 32 14.3 32 32s-14.3 32-32 32l-1.3 0zM205.4 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                  </svg>
                </span>
                <span class="settings-nav-label">Tercihler</span>
              </button>
            </nav>
          </div>

          {/* Sol Alt Sabit Bilgi */}
          <div class="settings-sidebar__footer">
            <span class="settings-sidebar__footer-badge">Noetic Logos</span>
            <span class="settings-sidebar__footer-text">Kişiselleştirme</span>
          </div>
        </aside>

        {/* SAĞ PANEL */}
        <main class="settings-main">
          {/* Masaüstü Üst Bilgi Barı */}
          <div class="settings-desktop-bar">
            <div class="settings-desktop-bar__titles">
              <span class="settings-desktop-bar__title" data-tab-heading>Temalar</span>
              <span class="settings-desktop-bar__sub" data-tab-subheading>
                10 farklı renk paleti ile arayüzü özelleştirin
              </span>
            </div>
          </div>

          {/* Mobil İçin Özel Üst Bar */}
          <div class="settings-mobile-bar">
            <div class="settings-mobile-bar__left">
              <button
                type="button"
                class="settings-icon-btn"
                data-action="close"
                title="Geri"
                aria-label="Geri"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="fa-icon"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <span class="settings-mobile-bar__title">Ayarlar</span>
            </div>
          </div>

          {/* Mobil Segmented Tab Kontrolü */}
          <div class="settings-mobile-tabs" role="tablist" aria-label="Ayarlar Sekmeleri">
            <button
              type="button"
              class="settings-mobile-tab is-active"
              data-tab="themes"
              role="tab"
              aria-selected="true"
            >
              <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
                <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.5 .4 7 1.1 10.4c2.5 11.7 3.8 24.1 3.8 36.6c0 53-43 96-96 96c-114.9 0-208-93.1-208-208C-3.1 139.1 89.1 46.9 203 46.9c13.7 0 27.2 1.3 40.3 3.8C397.6 77.9 512 173.8 512 256zM152 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-48 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
              </svg>
              <span>Temalar</span>
            </button>
            <button
              type="button"
              class="settings-mobile-tab"
              data-tab="typography"
              role="tab"
              aria-selected="false"
            >
              <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="13" height="13" fill="currentColor">
                <path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H103.4l27-72h187.2l27 72H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8L254 52.8zM154.4 288L224 102.4 293.6 288H154.4z"/>
              </svg>
              <span>Tipografi</span>
            </button>
            <button
              type="button"
              class="settings-mobile-tab"
              data-tab="preferences"
              role="tab"
              aria-selected="false"
            >
              <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="13" height="13" fill="currentColor">
                <path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm-73.3 48c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 144c-17.7 0-32-14.3-32-32s14.3-32 32-32l101.4 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L240 80c17.7 0 32 14.3 32 32s-14.3 32-32 32l-1.3 0zM205.4 128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 256c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zm-73.3 48c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 304c-17.7 0-32-14.3-32-32s14.3-32 32-32l101.4 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L240 240c17.7 0 32 14.3 32 32s-14.3 32-32 32l-1.3 0zM205.4 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
              </svg>
              <span>Tercihler</span>
            </button>
          </div>

          {/* Kaydırılabilir İçerik Alanı (PC'de kesintisiz scroll) */}
          <div class="settings-scroll">
            {/* SEKME 1: TEMALAR */}
            <div class="settings-tab-pane is-active" data-pane="themes">
              <div class="settings-group">
                <div class="settings-group__title">Renk Paletleri & Temalar</div>
                <div class="settings-theme-grid">
                  {THEMES.map((t) => (
                    <div
                      class="settings-theme-card"
                      data-theme={t.id}
                      role="button"
                      tabindex="0"
                      aria-label={`${t.name} teması`}
                    >
                      <div class="settings-theme-card__swatch" style={`background-color: ${t.bg};`}>
                        <span class="settings-theme-card__dot" style={`background-color: ${t.color};`} />
                      </div>
                      <div class="settings-theme-card__body">
                        <div class="settings-theme-card__header">
                          <span class="settings-theme-card__name">{t.name}</span>
                        </div>
                        <p class="settings-theme-card__desc">{t.desc}</p>
                      </div>
                      <div class="settings-theme-card__check" aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="fa-icon"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SEKME 2: TİPOGRAFİ */}
            <div class="settings-tab-pane" data-pane="typography">
              <div class="settings-group">
                <div class="settings-group__title">Yazı Tipi (Font Family)</div>
                <div class="settings-font-grid">
                  {FONTS.map((f) => (
                    <label class="settings-font-card" data-font={f.font}>
                      <input type="radio" name="font-choice" value={f.id} />
                      <span class="settings-font-card__name" style={`font-family: '${f.font}', system-ui, sans-serif;`}>
                        {f.label}
                      </span>
                      <span class="settings-font-card__radio" />
                    </label>
                  ))}
                </div>
              </div>

              <div class="settings-group">
                <div class="settings-group__title">Yazı Boyutu</div>
                <div class="settings-segmented-control">
                  <label class="settings-segmented-item">
                    <input type="radio" name="font-size-choice" value="0.9rem" />
                    <span>Küçük</span>
                  </label>
                  <label class="settings-segmented-item">
                    <input type="radio" name="font-size-choice" value="1rem" />
                    <span>Normal</span>
                  </label>
                  <label class="settings-segmented-item">
                    <input type="radio" name="font-size-choice" value="1.15rem" />
                    <span>Büyük</span>
                  </label>
                </div>
              </div>

              <div class="settings-group">
                <div class="settings-group__title">Satır Yüksekliği</div>
                <div class="settings-segmented-control">
                  <label class="settings-segmented-item">
                    <input type="radio" name="line-height-choice" value="1.4" />
                    <span>Dar (1.4)</span>
                  </label>
                  <label class="settings-segmented-item">
                    <input type="radio" name="line-height-choice" value="1.6" />
                    <span>Normal (1.6)</span>
                  </label>
                  <label class="settings-segmented-item">
                    <input type="radio" name="line-height-choice" value="1.85" />
                    <span>Geniş (1.85)</span>
                  </label>
                </div>
              </div>

              <div class="settings-group">
                <div class="settings-group__title">Özel Tipografi</div>
                <div class="settings-toggle-card">
                  <div class="settings-toggle-card__body">
                    <span class="settings-toggle-card__title">Özel Tipografi Motoru</span>
                    <span class="settings-toggle-card__desc">
                      Metin bloklarında harf aralığı ve kerning optimizasyonunu etkinleştirir.
                    </span>
                  </div>
                  <label class="toggle-switch">
                    <input type="checkbox" name="custom-typography" />
                    <span class="toggle-slider" />
                  </label>
                </div>
              </div>
            </div>

            {/* SEKME 3: TERCİHLER */}
            <div class="settings-tab-pane" data-pane="preferences">
              <div class="settings-group">
                <div class="settings-group__title">Okuma & Deneyim Modları</div>
                <div class="settings-toggle-list">
                  <div class="settings-toggle-card walk-mode-row">
                    <div class="settings-toggle-card__body">
                      <div class="settings-toggle-card__header">
                        <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14" height="14" fill="currentColor">
                          <path d="M208 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM90.1 143.9C79.7 137.9 66.4 141.4 60.4 151.9L22.9 216.8C16.9 227.3 20.4 240.6 30.9 246.6s23.7-3.5 29.7-14.1l25.8-44.6 22 55.1-40.6 81.3c-7.9 15.7-1.5 35 14.2 42.9s35 1.5 42.9-14.2l39.5-79.1 27.8 27.8c11.8 11.8 18.4 27.8 18.4 44.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32V389c0-33.7-13.4-66-37.2-89.8l-15.5-15.5 15.3-38.3 44.6 37.2c13.6 11.3 33.7 9.5 45.1-4.1s9.5-33.7-4.1-45.1l-64-53.3c-10.7-8.9-24.9-13-38.8-11.2l-68.4 8.6-13.4-33.6 31.8-19.9c15.1-9.4 19.6-29.3 10.2-44.4s-29.3-19.6-44.4-10.2l-47.5 29.7z"/>
                        </svg>
                        <span class="settings-toggle-card__title">Walk Mode (Yürüyüş Modu)</span>
                      </div>
                      <span class="settings-toggle-card__desc">
                        Yürürken okumayı kolaylaştıran genişletilmiş satır ve kontrast optimizasyonu.
                      </span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" name="walk-mode" />
                      <span class="toggle-slider" />
                    </label>
                  </div>

                  <div class="settings-toggle-card zen-mode-row">
                    <div class="settings-toggle-card__body">
                      <div class="settings-toggle-card__header">
                        <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
                          <path d="M256 0c0 141.4-114.6 256-256 256c141.4 0 256 114.6 256 256c0-141.4 114.6-256 256-256C370.6 256 256 141.4 256 0z"/>
                        </svg>
                        <span class="settings-toggle-card__title">Zen Modu</span>
                      </div>
                      <span class="settings-toggle-card__desc">
                        Yan panelleri ve menüleri gizleyerek sadece okuduğunuz nota odaklanın.
                      </span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" name="zen-mode" />
                      <span class="toggle-slider" />
                    </label>
                  </div>

                  <div class="settings-toggle-card">
                    <div class="settings-toggle-card__body">
                      <div class="settings-toggle-card__header">
                        <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14" fill="currentColor">
                          <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.7 67.5 64 132.2 64 208v96l-34.7 69.5C21.7 388.7 26.5 400 36.1 400H411.9c9.6 0 14.4-11.3 6.8-26.5L384 304V208c0-75.8-55.7-140.5-128-158.1V32c0-17.7-14.3-32-32-32zm45.3 448H178.7c5.4 27.6 29.8 48 58.7 48s53.2-20.4 58.7-48z"/>
                        </svg>
                        <span class="settings-toggle-card__title">Sistem Bildirimleri</span>
                      </div>
                      <span class="settings-toggle-card__desc">
                        Kopyalama, tema ve ayar değişikliklerinde geri bildirim toast'ları gösterir.
                      </span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" name="notifications-enabled" />
                      <span class="toggle-slider" />
                    </label>
                  </div>
                </div>
              </div>

              <div class="settings-group">
                <div class="settings-group__title">Kod Blokları</div>
                <div class="settings-toggle-list">
                  <div class="settings-toggle-card">
                    <div class="settings-toggle-card__body">
                      <div class="settings-toggle-card__header">
                        <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="14" height="14" fill="currentColor">
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                        </svg>
                        <span class="settings-toggle-card__title">Satır Numaraları</span>
                      </div>
                      <span class="settings-toggle-card__desc">
                        Kod bloklarının sol tarafında satır numaralarını görüntüler.
                      </span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" name="code-line-numbers" />
                      <span class="toggle-slider" />
                    </label>
                  </div>

                  <div class="settings-toggle-card">
                    <div class="settings-toggle-card__body">
                      <div class="settings-toggle-card__header">
                        <svg class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="14" height="14" fill="currentColor">
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                        </svg>
                        <span class="settings-toggle-card__title">Katlanabilir Bloklar</span>
                      </div>
                      <span class="settings-toggle-card__desc">
                        Uzun kod parçalarını katlanabilir başlık ile daraltılabilir yapar.
                      </span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" name="code-collapsible" />
                      <span class="toggle-slider" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

Settings.afterDOMLoaded = settingsScript
Settings.css = styles

export default (() => Settings) satisfies QuartzComponentConstructor
