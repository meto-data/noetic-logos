// @ts-ignore
import annotationScript from "./scripts/annotation.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Annotation: QuartzComponent = (_props: QuartzComponentProps) => {
  return null
}

Annotation.afterDOMLoaded = annotationScript

export default (() => Annotation) satisfies QuartzComponentConstructor
