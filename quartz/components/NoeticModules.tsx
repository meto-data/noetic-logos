import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/noeticModules.scss"
// @ts-ignore
import script from "./scripts/noeticModules.inline"
import { NOETIC_MODULES } from "./data/noeticModules"

const NoeticModules: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="noetic-modules-root" data-noetic-modules={JSON.stringify(NOETIC_MODULES)}>
      {/* Masaüstü Tetikleyici Butonu */}
      <button
        type="button"
        class="noetic-modules-trigger"
        data-noetic-modules-trigger="desktop"
        aria-label="Modüller"
      >
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

      {/* Arka Plan Bulanıklık & Karartma Katmanı */}
      <div id="noetic-modules-overlay" class="noetic-modules-overlay" data-action="close"></div>

      {/* Ana Modal Penceresi */}
      <section
        id="noetic-modules-panel"
        class="noetic-modules-panel"
        aria-hidden="true"
        role="dialog"
        aria-modal="true"
        aria-label="Ders Modülleri Portalı"
      >
        {/* SOL PANEL (Masaüstü: 270px genişliğinde, mobilde gizlenir) */}
        <aside class="noetic-modules-sidebar">
          {/* Sol Header: < Geri/Kapat butonu + Renkli İkon Rozeti + Başlık */}
          <div class="noetic-modules-sidebar__header">
            <button
              type="button"
              class="noetic-modules-icon-btn"
              data-action="close"
              title="Geri / Kapat"
              aria-label="Geri / Kapat"
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

            <div class="noetic-modules-badge" aria-hidden="true">
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
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
              </svg>
            </div>

            <div class="noetic-modules-sidebar__titles">
              <span class="noetic-modules-sidebar__title">Modüller</span>
              <span class="noetic-modules-sidebar__subtitle">Pratik & Sınav</span>
            </div>
          </div>

          {/* Segmented Control: DEÜ / Düzce Hap Butonları */}
          <div class="noetic-modules-segment" role="tablist" aria-label="Üniversite Seçimi">
            <button
              type="button"
              class="noetic-modules-segment-item is-active"
              data-univ="deu"
              role="tab"
              aria-selected="true"
            >
              DEÜ
            </button>
            <button
              type="button"
              class="noetic-modules-segment-item"
              data-univ="duzce"
              role="tab"
              aria-selected="false"
            >
              Düzce
            </button>
          </div>

          {/* Sınıf Tasnif Menüsü */}
          <div class="noetic-modules-nav-wrapper" data-univ-dependent="duzce">
            <div class="noetic-modules-sidebar__section-title">Sınıflar</div>
            <nav class="noetic-modules-nav" aria-label="Sınıf Filtreleri">
              <button
                type="button"
                class="noetic-modules-nav-item is-active"
                data-grade="all"
              >
                <span class="noetic-modules-nav-item__label">Tüm Sınıflar</span>
                <span class="noetic-modules-nav-item__badge" data-count="all">3</span>
              </button>
              <button
                type="button"
                class="noetic-modules-nav-item"
                data-grade="1"
              >
                <span class="noetic-modules-nav-item__label">1. Sınıf</span>
                <span class="noetic-modules-nav-item__badge" data-count="1">1</span>
              </button>
              <button
                type="button"
                class="noetic-modules-nav-item"
                data-grade="2"
              >
                <span class="noetic-modules-nav-item__label">2. Sınıf</span>
                <span class="noetic-modules-nav-item__badge" data-count="2">1</span>
              </button>
              <button
                type="button"
                class="noetic-modules-nav-item"
                data-grade="3"
              >
                <span class="noetic-modules-nav-item__label">3. Sınıf</span>
                <span class="noetic-modules-nav-item__badge" data-count="3">1</span>
              </button>
            </nav>
          </div>

          {/* Sol Alt Sabit Bilgi */}
          <div class="noetic-modules-sidebar__footer">
            <span class="noetic-modules-sidebar__footer-badge">Noetic Papers</span>
            <span class="noetic-modules-sidebar__footer-text">Ders & Test Sistemi</span>
          </div>
        </aside>

        {/* SAĞ PANEL (Masaüstü Header, Mobil Header, 2'li Combobox ve Kart Alanı) */}
        <main class="noetic-modules-main">
          {/* Masaüstü Üst Bilgi Barı */}
          <div class="noetic-modules-desktop-bar">
            <div class="noetic-modules-desktop-bar__titles">
              <span class="noetic-modules-desktop-bar__univ" data-univ-heading>Dokuz Eylül Üniversitesi</span>
              <span class="noetic-modules-desktop-bar__sub" data-grade-heading>Müfredat Modülleri</span>
            </div>
            <button
              type="button"
              class="noetic-modules-icon-btn"
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

          {/* Mobil İçin Özel Üst Bar (md:hidden) */}
          <div class="noetic-modules-mobile-bar">
            <div class="noetic-modules-mobile-bar__left">
              <button
                type="button"
                class="noetic-modules-icon-btn"
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
              <span class="noetic-modules-mobile-bar__title">Ders Modülleri</span>
            </div>
            <button
              type="button"
              class="noetic-modules-icon-btn"
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

          {/* Mobil İçin Özel 2'li Seçici / Combobox Grid (md:hidden) */}
          <div class="noetic-modules-mobile-selects">
            {/* Üniversite Seçimi */}
            <div class="noetic-modules-select-box" data-select-type="univ">
              <span class="noetic-modules-select-label">Üniversite</span>
              <div class="noetic-modules-dropdown">
                <button type="button" class="noetic-modules-dropdown__trigger">
                  <span class="noetic-modules-dropdown__label">DEÜ</span>
                  <svg
                    class="noetic-modules-dropdown__chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div class="noetic-modules-dropdown__menu">
                  <button
                    type="button"
                    class="noetic-modules-dropdown__option is-selected"
                    data-value="deu"
                  >
                    DEÜ (Dokuz Eylül)
                  </button>
                  <button
                    type="button"
                    class="noetic-modules-dropdown__option"
                    data-value="duzce"
                  >
                    Düzce Üniversitesi
                  </button>
                </div>
              </div>
            </div>

            {/* Sınıf Seçimi */}
            <div class="noetic-modules-select-box" data-select-type="grade">
              <span class="noetic-modules-select-label">Sınıf</span>
              <div class="noetic-modules-dropdown">
                <button type="button" class="noetic-modules-dropdown__trigger">
                  <span class="noetic-modules-dropdown__label">Tüm Sınıflar</span>
                  <svg
                    class="noetic-modules-dropdown__chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div class="noetic-modules-dropdown__menu">
                  <button
                    type="button"
                    class="noetic-modules-dropdown__option is-selected"
                    data-value="all"
                  >
                    Tüm Sınıflar
                  </button>
                  <button
                    type="button"
                    class="noetic-modules-dropdown__option"
                    data-value="1"
                  >
                    1. Sınıf
                  </button>
                  <button
                    type="button"
                    class="noetic-modules-dropdown__option"
                    data-value="2"
                  >
                    2. Sınıf
                  </button>
                  <button
                    type="button"
                    class="noetic-modules-dropdown__option"
                    data-value="3"
                  >
                    3. Sınıf
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Kart Grid & İçerik Alanı */}
          <div class="noetic-modules-scroll" data-noetic-modules-scroll></div>
        </main>
      </section>
    </div>
  )
}

NoeticModules.css = styles
NoeticModules.afterDOMLoaded = script

export default (() => NoeticModules) satisfies QuartzComponentConstructor
