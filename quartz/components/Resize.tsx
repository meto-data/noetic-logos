import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// @ts-ignore
import script from "./scripts/resize.inline"

const Resize: QuartzComponent = (_: QuartzComponentProps) => {
    return null
}

Resize.afterDOMLoaded = script

export default (() => Resize) satisfies QuartzComponentConstructor
