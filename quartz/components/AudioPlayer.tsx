import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/audioPlayer.scss"
// @ts-ignore
import script from "./scripts/audioPlayer.inline"

const AudioPlayer: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const audioSrc = fileData.frontmatter?.audio as string | undefined
  if (!audioSrc) {
    return null
  }

  const title = (fileData.frontmatter?.title as string | undefined) ?? "Sesli Ders Özeti"
  const subtitle =
    (fileData.frontmatter?.konu as string | undefined) ??
    "Noetic FM • Yürüyüş & Podcast Anlatımı"

  return (
    <div
      class={`noetic-audio-player ${displayClass ?? ""}`}
      data-audio-src={audioSrc}
      data-audio-title={title}
      data-audio-subtitle={subtitle}
    >
      <div class="noetic-audio-player__card">
        {/* Oynat / Duraklat (>) Ana Butonu */}
        <button
          type="button"
          class="noetic-audio-player__play-btn"
          data-audio-toggle
          aria-label="Sesli dersi oynat veya duraklat"
          title="Oynat / Duraklat"
        >
          {/* Play Icon (>) */}
          <svg
            class="noetic-audio-player__icon-play"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
          {/* Pause Icon (||) */}
          <svg
            class="noetic-audio-player__icon-pause"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        </button>

        {/* Orta Alan: Başlık + İlerleme Çubuğu */}
        <div class="noetic-audio-player__body">
          <div class="noetic-audio-player__header">
            <div class="noetic-audio-player__titles">
              <span class="noetic-audio-player__badge">PODCAST</span>
              <span class="noetic-audio-player__title">Sesli Ders Anlatımı</span>
            </div>
            <div class="noetic-audio-player__meta">
              <span class="noetic-audio-player__time" data-audio-current>
                00:00
              </span>
              <span class="noetic-audio-player__sep">/</span>
              <span class="noetic-audio-player__duration" data-audio-duration>
                --:--
              </span>
            </div>
          </div>

          {/* İlerleme Çubuğu (Range Input) */}
          <div class="noetic-audio-player__track-wrap">
            <input
              type="range"
              class="noetic-audio-player__seek"
              data-audio-seek
              min="0"
              max="100"
              step="0.1"
              value="0"
              aria-label="Ses ilerleme çubuğu"
            />
          </div>
        </div>

        {/* Sağ Alan: -15s, +15s ve Hız (1x) Kontrolleri */}
        <div class="noetic-audio-player__controls">
          <button
            type="button"
            class="noetic-audio-player__ctrl-btn"
            data-audio-skip="-15"
            title="15 saniye geri sar"
            aria-label="15 saniye geri sar"
          >
            -15s
          </button>
          <button
            type="button"
            class="noetic-audio-player__ctrl-btn"
            data-audio-skip="15"
            title="15 saniye ileri sar"
            aria-label="15 saniye ileri sar"
          >
            +15s
          </button>
          <button
            type="button"
            class="noetic-audio-player__speed-btn"
            data-audio-speed
            title="Oynatma hızını değiştir"
            aria-label="Oynatma hızı"
          >
            1x
          </button>
        </div>
      </div>
    </div>
  )
}

AudioPlayer.css = styles
AudioPlayer.afterDOMLoaded = script

export default (() => AudioPlayer) satisfies QuartzComponentConstructor
