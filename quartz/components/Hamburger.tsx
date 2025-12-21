import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// @ts-ignore
import script from "./scripts/hamburger.inline"

const Hamburger: QuartzComponent = (_: QuartzComponentProps) => {
    return null
}

Hamburger.afterDOMLoaded = script

export default (() => Hamburger) satisfies QuartzComponentConstructor
