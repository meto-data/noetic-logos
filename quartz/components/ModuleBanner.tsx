import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/moduleBanner.scss"
// @ts-ignore
import script from "./scripts/moduleBanner.inline"

/**
 * ModuleBanner Component
 * 
 * Belirli klasörlerde (OOP, Veri Tabanı vb.) modül butonu gösterir.
 * Client-side script ile base path dinamik hesaplanır.
 */

interface ModuleConfig {
    slugPattern: string // RegExp string olarak (JSON uyumlu)
    title: string
    buttonText: string
    moduleUrl: string // Relative path (static/xxx/index.html)
    icon: string
}

// Modül konfigürasyonları - yeni modüller buraya eklenebilir
const MODULE_CONFIGS: ModuleConfig[] = [
    {
        slugPattern: "nesne-tabanli-programlama|object-oriented-programming",
        title: "Nesne Tabanlı Programlama",
        buttonText: "OOP Modülüne Git",
        moduleUrl: "static/oop1-module/index.html",
        icon: "🎯"
    },
    {
        slugPattern: "veri-tabani|veritabani|database",
        title: "Veri Tabanı Yönetimi",
        buttonText: "Database Modülüne Git",
        moduleUrl: "static/database-module/index.html",
        icon: "🗄️"
    },
    {
        slugPattern: "turk-dili|türk-dili|turk-dili-1",
        title: "Türk Dili",
        buttonText: "Türk Dili Modülüne Git",
        moduleUrl: "static/logos-module/index.html",
        icon: "📚"
    }
]

const ModuleBanner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const slug = fileData.slug ?? ""

    // Slug'a uyan modül var mı kontrol et
    const matchingModule = MODULE_CONFIGS.find(config => {
        const regex = new RegExp(config.slugPattern, "i")
        return regex.test(slug)
    })

    // Eşleşen modül yoksa hiçbir şey gösterme
    if (!matchingModule) {
        return null
    }

    return (
        <div
            class={`module-banner ${displayClass ?? ""}`}
            data-module-url={matchingModule.moduleUrl}
        >
            <div class="module-banner-content">
                <span class="module-banner-icon">{matchingModule.icon}</span>
                <div class="module-banner-text">
                    <span class="module-banner-title">{matchingModule.title}</span>
                    <span class="module-banner-subtitle">Test ve pratik modülü hazır!</span>
                </div>
                <a href="#" class="module-banner-button" data-module-link>
                    {matchingModule.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
