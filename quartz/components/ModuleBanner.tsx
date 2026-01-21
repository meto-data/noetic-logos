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
    slugPattern: string
    title: string
    buttonText: string
    moduleUrl: string
    iconType: "oop" | "database" | "language" | "ybs"
}

// Modül konfigürasyonları
const MODULE_CONFIGS: ModuleConfig[] = [
    {
        slugPattern: "nesne-tabanli-programlama|object-oriented-programming",
        title: "Nesne Tabanlı Programlama",
        buttonText: "OOP Modülüne Git",
        moduleUrl: "static/oop1-module/index.html",
        iconType: "oop"
    },
    {
        slugPattern: "veri-tabani|veritabani|database",
        title: "Veri Tabanı Yönetimi",
        buttonText: "Database Modülüne Git",
        moduleUrl: "static/database-module/index.html",
        iconType: "database"
    },
    {
        slugPattern: "turk-dili|türk-dili|turk-dili-1",
        title: "Türk Dili",
        buttonText: "Türk Dili Modülüne Git",
        moduleUrl: "static/logos-module/index.html",
        iconType: "language"
    },
    {
        slugPattern: "yonetim-bilisim-sistemleri|ybs|management-information-systems",
        title: "Yönetim Bilişim Sistemleri",
        buttonText: "YBS Modülüne Git",
        moduleUrl: "static/ybs-module/index.html",
        iconType: "ybs"
    }
]

// Tema uyumlu SVG ikonlar
const ICONS = {
    oop: (
        <svg class="module-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    ),
    database: (
        <svg class="module-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    language: (
        <svg class="module-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
    ybs: (
        <svg class="module-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    )
}

const ModuleBanner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const slug = fileData.slug ?? ""

    const matchingModule = MODULE_CONFIGS.find(config => {
        const regex = new RegExp(config.slugPattern, "i")
        return regex.test(slug)
    })

    if (!matchingModule) {
        return null
    }

    return (
        <div
            class={`module-banner ${displayClass ?? ""}`}
            data-module-url={matchingModule.moduleUrl}
        >
            <div class="module-banner-content">
                <span class="module-banner-icon">{ICONS[matchingModule.iconType]}</span>
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
