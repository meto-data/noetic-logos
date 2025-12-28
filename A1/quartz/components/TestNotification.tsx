import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/testNotification.scss"
// @ts-ignore
import script from "./scripts/testNotification.inline"
import { classNames } from "../util/lang"

/**
 * Test Modülü Bildirimi - Toast Notification
 * 
 * Davranış:
 * - Tüm notlarda gösterilir
 * - Kapatıldığında gider
 * - Türk Dili notlarında: sayfa yenilenince/geçişte tekrar gösterilir
 * - Türk Dili notlarında: scroll ile birlikte kayar (fixed değil)
 * - Tema uyumlu renkler
 */
const TestNotification: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const moduleUrl = "/logos-module/index.html"
    const slug = fileData.slug ?? ""

    // Türk Dili notu mu kontrol et
    const isTurkDili = slug.includes("turk-dili") || slug.includes("türk-dili")

    return (
        <div
            class={classNames(displayClass, "test-notification-container")}
            data-is-turk-dili={isTurkDili ? "true" : "false"}
            data-slug={slug}
        >
            <div class="toast-notification">
                <div class="toast-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                </div>
                <div class="toast-content">
                    <span class="toast-title">Türk Dili Test Modülü</span>
                    <a href={moduleUrl} class="toast-link" target="_blank">Test modüllerine ulaşmak için tıklayın.</a>
                </div>
                <button class="toast-close" aria-label="Kapat">×</button>
            </div>
        </div>
    )
}

TestNotification.css = style
TestNotification.afterDOMLoaded = script

export default (() => TestNotification) satisfies QuartzComponentConstructor
