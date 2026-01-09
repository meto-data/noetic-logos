import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/moduleBanner.scss"

/**
 * ModuleBanner Component
 * 
 * Belirli klasörlerde (OOP vb.) modül butonu gösterir.
 * Toast yerine sayfa içinde belirgin bir banner.
 */

interface ModuleConfig {
    slugPattern: RegExp
    title: string
    buttonText: string
    moduleUrl: string
    icon: string
}

// Modül konfigürasyonları - yeni modüller buraya eklenebilir
const MODULE_CONFIGS: ModuleConfig[] = [
    {
        slugPattern: /nesne-tabanli-programlama|object-oriented-programming/i,
        title: "Nesne Tabanlı Programlama",
        buttonText: "OOP Modülüne Git",
        moduleUrl: "/static/oop1-module/index.html",
        icon: "🎯"
    }
]

const ModuleBanner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const slug = fileData.slug ?? ""

    // Slug'a uyan modül var mı kontrol et
    const matchingModule = MODULE_CONFIGS.find(config => config.slugPattern.test(slug))

    // Eşleşen modül yoksa hiçbir şey gösterme
    if (!matchingModule) {
        return null
    }

    return (
        <div class={`module-banner ${displayClass ?? ""}`}>
            <div class="module-banner-content">
                <span class="module-banner-icon">{matchingModule.icon}</span>
                <div class="module-banner-text">
                    <span class="module-banner-title">{matchingModule.title}</span>
                    <span class="module-banner-subtitle">Test ve pratik modülü hazır!</span>
                </div>
                <a href={matchingModule.moduleUrl} class="module-banner-button">
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

export default (() => ModuleBanner) satisfies QuartzComponentConstructor
