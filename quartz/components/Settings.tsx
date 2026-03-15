// @ts-ignore
import settingsScript from "./scripts/settings.inline"
import styles from "./styles/settings.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Settings: QuartzComponent = (props: QuartzComponentProps) => {
  const { displayClass } = props
  return (
    <div class={classNames(displayClass, "settings")}>
      <button class="settings-trigger" aria-label="Ayarlar" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </svg>
      </button>
      {/* Overlay + Modal */}
      <div class="settings-overlay" id="settings-overlay">
        <div class="settings-modal" id="settings-modal">
          <div class="settings-modal-header">
            <h3>Ayarlar</h3>
            <button class="settings-close" type="button" aria-label="Kapat">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div class="settings-modal-body">
            <div class="settings-columns">
              {/* Sol Kolon */}
              <div class="settings-col">
                <div class="section-header">Yazı Tipi</div>
                <div class="font-options font-visible">
                  <label class="font-item" data-font="Inter"><input type="radio" name="font-choice" value="" /><span>Varsayılan</span></label>
                  <label class="font-item" data-font="Poppins"><input type="radio" name="font-choice" value="Poppins" /><span>Poppins</span></label>
                  <label class="font-item" data-font="Lato"><input type="radio" name="font-choice" value="Lato" /><span>Lato</span></label>
                  <label class="font-item" data-font="Roboto"><input type="radio" name="font-choice" value="Roboto" /><span>Roboto</span></label>
                  <label class="font-item" data-font="Open Sans"><input type="radio" name="font-choice" value="Open Sans" /><span>Open Sans</span></label>
                </div>
                <div class="font-show-more">
                  <span>Diğer Fontlar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plus-icon"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </div>
                <div class="font-options font-hidden">
                  <label class="font-item" data-font="Quicksand"><input type="radio" name="font-choice" value="Quicksand" /><span>Quicksand</span></label>
                  <label class="font-item" data-font="Montserrat"><input type="radio" name="font-choice" value="Montserrat" /><span>Montserrat</span></label>
                  <label class="font-item" data-font="Merriweather"><input type="radio" name="font-choice" value="Merriweather" /><span>Merriweather</span></label>
                  <label class="font-item" data-font="Source Sans Pro"><input type="radio" name="font-choice" value="Source Sans Pro" /><span>Source Sans</span></label>
                  <label class="font-item" data-font="Atkinson Hyperlegible"><input type="radio" name="font-choice" value="Atkinson Hyperlegible" /><span>Atkinson (Disleksi)</span></label>
                </div>

                <div class="section-header size-header">Boyut</div>
                <div class="size-options">
                  <label class="size-item"><input type="radio" name="font-size-choice" value="0.9rem" /><span>Küçük</span></label>
                  <label class="size-item"><input type="radio" name="font-size-choice" value="1rem" /><span>Normal</span></label>
                  <label class="size-item"><input type="radio" name="font-size-choice" value="1.15rem" /><span>Büyük</span></label>
                </div>

                <div class="section-header size-header">Satır Yüksekliği</div>
                <div class="size-options">
                  <label class="size-item"><input type="radio" name="line-height-choice" value="1.4" /><span>Dar</span></label>
                  <label class="size-item"><input type="radio" name="line-height-choice" value="1.6" /><span>Normal</span></label>
                  <label class="size-item"><input type="radio" name="line-height-choice" value="1.85" /><span>Geniş</span></label>
                </div>

                <div class="section-header size-header">İçerik Genişliği</div>
                <div class="size-options">
                  <label class="size-item"><input type="radio" name="content-width-choice" value="55ch" /><span>Dar</span></label>
                  <label class="size-item"><input type="radio" name="content-width-choice" value="none" /><span>Normal</span></label>
                  <label class="size-item"><input type="radio" name="content-width-choice" value="80ch" /><span>Geniş</span></label>
                </div>
              </div>

              {/* Sağ Kolon */}
              <div class="settings-col">
                <div class="section-header">Görünüm</div>
                <div class="toggle-row"><span>Özel Tipografi</span><label class="toggle-switch"><input type="checkbox" name="custom-typography" /><span class="toggle-slider" /></label></div>
                <div class="toggle-row"><span>Animasyonlar ve Efektler</span><label class="toggle-switch"><input type="checkbox" name="effects-enabled" /><span class="toggle-slider" /></label></div>
                <div class="toggle-row"><span>Bildirimler</span><label class="toggle-switch"><input type="checkbox" name="notifications-enabled" /><span class="toggle-slider" /></label></div>
                <div class="toggle-row"><span>Zen Modu</span><label class="toggle-switch"><input type="checkbox" name="zen-mode" /><span class="toggle-slider" /></label></div>

                <div class="section-header size-header">Kod Blokları</div>
                <div class="toggle-row"><span>Satır Numaraları</span><label class="toggle-switch"><input type="checkbox" name="code-line-numbers" /><span class="toggle-slider" /></label></div>
                <div class="toggle-row"><span>Katlanabilir Bloklar</span><label class="toggle-switch"><input type="checkbox" name="code-collapsible" /><span class="toggle-slider" /></label></div>

                <div class="section-header size-header">Senkronizasyon Anahtarı</div>
                <div class="sync-key-section">
                  <p class="sync-key-info">
                    Anahtar oluşturup kaydedin. Vurgularınız, ayarlarınız, modül verileriniz ve tercihleriniz
                    bu anahtara bağlı olarak saklanır. Başka tarayıcı veya cihazdan aynı
                    anahtarı girerek verilerinize ulaşabilirsiniz.
                  </p>
                  <div class="sync-key-input-row">
                    <input type="text" class="sync-key-input" placeholder="Anahtar girin veya oluşturun" />
                    <button type="button" class="sync-key-generate" aria-label="Yeni anahtar oluştur" title="Yeni Anahtar">⟳</button>
                    <button type="button" class="sync-key-copy" aria-label="Anahtarı kopyala" title="Kopyala">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                  </div>
                  <div class="sync-key-actions">
                    <button type="button" class="sync-key-save">Anahtarı Kaydet</button>
                    <button type="button" class="sync-key-clear">Anahtarı Sil</button>
                  </div>
                  <div class="sync-key-status" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Settings.afterDOMLoaded = settingsScript
Settings.css = styles

export default (() => Settings) satisfies QuartzComponentConstructor
