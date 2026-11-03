// @ts-ignore
import enhancementsScript from "./scripts/enhancements.inline"
import styles from "./styles/enhancements.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Enhancements: QuartzComponent = (_props: QuartzComponentProps) => {
  return null
}

Enhancements.afterDOMLoaded = enhancementsScript
Enhancements.css = styles

export default (() => Enhancements) satisfies QuartzComponentConstructor
