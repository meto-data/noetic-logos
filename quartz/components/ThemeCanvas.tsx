import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// @ts-ignore
import script from "./scripts/themeCanvas.inline"

const ThemeCanvas: QuartzComponent = (_: QuartzComponentProps) => {
    return null
}

ThemeCanvas.afterDOMLoaded = script

export default (() => ThemeCanvas) satisfies QuartzComponentConstructor
