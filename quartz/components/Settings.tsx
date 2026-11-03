import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/settings.scss"
// @ts-ignore
import settingsScript from "./scripts/settings.inline"
import { classNames } from "../util/lang"

interface ThemeDefinition {
  id: string
  name: string
  badge: string
  bg: string
  color: string
  desc: string
}

const THEMES: ThemeDefinition[] = [
  {
    id: "light",
    name: "Açık",
    badge: "Klasik",
    bg: "#ffffff",
    color: "#5993f0",
    desc: "Temiz, ferah ve standart aydınlık arayüz.",
  },
  {
    id: "dark",
    name: "Koyu",
    badge: "Modern",
    bg: "#111827",
    color: "#3b82f6",
    desc: "Göz yormayan dengeli ve modern karanlık mod.",
  },
  {
    id: "stone-dark",
    name: "Taş",
    badge: "Sıcak Koyu",
    bg: "#1c1917",
    color: "#d97706",
    desc: "Sıcak antrasit ve doğal taş tonları.",
  },
  {
    id: "olive-light",
    name: "Fıstık",
    badge: "Doğal Pastel",
    bg: "#f4f6f0",
    color: "#5c7c4f",
    desc: "Açık zeytin ve yumuşak pastel yeşil zemin.",
  },
  {
    id: "olive-dark",
    name: "Koyu Fıstık",
    badge: "Doğal Koyu",
    bg: "#232822",
    color: "#82A370",
    desc: "Derin orman ve zeytin yeşili tonları.",
  },
  {
    id: "library-light",
    name: "Kütüphane",
    badge: "Sepya",
    bg: "#fbf8f2",
    color: "#8B7355",
    desc: "Eski kitap kağıdı ve parşömen sıcaklığı.",
  },
  {
    id: "nord-light",
    name: "Nord",
    badge: "Arktik",
    bg: "#ECEFF4",
    color: "#5E81AC",
    desc: "Kutup serinliği, pastel buz mavisi ve gri.",
  },
  {
    id: "deep-sea",
    name: "Okyanus",
    badge: "Animasyonlu 🐋",
    bg: "#0F172A",
    color: "#38BDF8",
    desc: "Süzülen derin deniz balinası efektiyle okyanus mavisi.",
  },
  {
    id: "void",
    name: "Boşluk",
    badge: "Yüksek Kontrast",
    bg: "#0d0101",
    color: "#ef4444",
    desc: "OLED ekranlar için ultra derin siyah ve keskin kontrast.",
  },
  {
    id: "deep-void",
    name: "Uzay",
    badge: "Animasyonlu ✨",
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </svg>
      </button>

      {/* Arka Plan Bulanıklık & Karartma Katmanı */}
      <div id="settings-overlay" class="settings-overlay" data-action="close"></div>

      {/* Ana Modal Penceresi (Modüller Portalı Tarzında) */}
      <section
        id="settings-panel"
        class="settings-panel"
        aria-hidden="true"
        role="dialog"
        aria-modal="true"
        aria-label="Ayarlar Portalı"
      >
        {/* SOL PANEL (Masaüstü: 260px sabit genişlik, mobilde gizlenir) */}
        <aside class="settings-sidebar">
          {/* Sol Header: < Kapat butonu + Renkli İkon Rozeti + Başlık */}
          <div class="settings-sidebar__header">
            <button
              type="button"
              class="settings-icon-btn"
              data-action="close"
              title="Kapat"
              aria-label="Kapat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div class="settings-badge" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
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
                <span class="settings-nav-icon">🎨</span>
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
                <span class="settings-nav-icon">🔤</span>
                <span class="settings-nav-label">Tipografi</span>
              </button>
              <button
                type="button"
                class="settings-nav-item"
                data-tab="preferences"
                role="tab"
                aria-selected="false"
              >
                <span class="settings-nav-icon">⚙️</span>
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
            <button
              type="button"
              class="settings-icon-btn"
              data-action="close"
              title="Kapat (Esc)"
              aria-label="Kapat"
            >
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
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
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
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <span class="settings-mobile-bar__title">Ayarlar</span>
            </div>
            <button
              type="button"
              class="settings-icon-btn"
              data-action="close"
              title="Kapat"
              aria-label="Kapat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
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
              🎨 Temalar
            </button>
            <button
              type="button"
              class="settings-mobile-tab"
              data-tab="typography"
              role="tab"
              aria-selected="false"
            >
              🔤 Tipografi
            </button>
            <button
              type="button"
              class="settings-mobile-tab"
              data-tab="preferences"
              role="tab"
              aria-selected="false"
            >
              ⚙️ Tercihler
            </button>
          </div>

          {/* Kaydırılabilir İçerik Alanı */}
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
                          <span class="settings-theme-card__badge">{t.badge}</span>
                        </div>
                        <p class="settings-theme-card__desc">{t.desc}</p>
                      </div>
                      <div class="settings-theme-card__check" aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                      <span class="settings-toggle-card__title">🚶‍♂️ Walk Mode (Yürüyüş Modu)</span>
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
                      <span class="settings-toggle-card__title">🧘 Zen Modu</span>
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
                      <span class="settings-toggle-card__title">🔔 Sistem Bildirimleri</span>
                      <span class="settings-toggle-card__desc">
                        Kopyalama, tema ve ayar değişikliklerinde toast bildirimleri gösterir.
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
                      <span class="settings-toggle-card__title">Satır Numaraları</span>
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
                      <span class="settings-toggle-card__title">Katlanabilir Bloklar</span>
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
