// @ts-ignore
import gesturesScript from "./scripts/gestures.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const MobileGestures: QuartzComponent = (_props: QuartzComponentProps) => {
  return null
}

MobileGestures.afterDOMLoaded = gesturesScript

export default (() => MobileGestures) satisfies QuartzComponentConstructor
