// @ts-ignore
import enhancementsScript from "./scripts/enhancements.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Enhancements: QuartzComponent = (_props: QuartzComponentProps) => {
  return null
}

Enhancements.afterDOMLoaded = enhancementsScript

export default (() => Enhancements) satisfies QuartzComponentConstructor
