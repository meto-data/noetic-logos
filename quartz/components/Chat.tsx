import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/chat.inline"

export default (() => {
  const Chat: QuartzComponent = ({}: QuartzComponentProps) => {
    // No visible component, just loads the script
    return null
  }

  Chat.afterDOMLoaded = script

  return Chat
}) satisfies QuartzComponentConstructor
