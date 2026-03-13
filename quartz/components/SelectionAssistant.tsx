import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/selectionAssistant.inline"
import style from "./styles/selectionAssistant.scss"

const SelectionAssistant: QuartzComponent = (_props: QuartzComponentProps) => {
  return null
}

SelectionAssistant.afterDOMLoaded = script
SelectionAssistant.css = style

export default (() => SelectionAssistant) satisfies QuartzComponentConstructor
