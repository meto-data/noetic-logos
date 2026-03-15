// @ts-ignore
import contextMenuScript from "./scripts/contextmenu.inline"
import styles from "./styles/contextmenu.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ContextMenu: QuartzComponent = (_props: QuartzComponentProps) => {
  return <div id="noetic-context-menu" class="noetic-context-menu" role="menu" aria-hidden="true" />
}

ContextMenu.afterDOMLoaded = contextMenuScript
ContextMenu.css = styles

export default (() => ContextMenu) satisfies QuartzComponentConstructor
