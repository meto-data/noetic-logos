// @ts-ignore
import toastScript from "./scripts/toast.inline"
import styles from "./styles/toast.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Toast: QuartzComponent = (_props: QuartzComponentProps) => {
  return <div id="noetic-toast-container" class="noetic-toast-container" />
}

Toast.afterDOMLoaded = toastScript
Toast.css = styles

export default (() => Toast) satisfies QuartzComponentConstructor
