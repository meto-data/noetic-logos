// @ts-ignore
import studyChatScript from "./scripts/study-chat.inline"
import styles from "./styles/study-chat.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { StudyChatConfig } from "../config/studyChat"

const TARGET_CONTENT_ROOT = "content"

function isEligiblePage(filePath: string | undefined, config: StudyChatConfig): boolean {
  if (!filePath) return false
  const relativePath = filePath.replace(/\\/g, "/")
  if (!relativePath.startsWith(TARGET_CONTENT_ROOT)) {
    return false
  }
  const normalized = relativePath.replace(/^content\//, "")
  return config.eligiblePathPrefixes.some((prefix) => normalized.startsWith(prefix))
}

const StudyChat: QuartzComponent = ({ cfg, fileData }: QuartzComponentProps) => {
  if (!cfg.features?.pageBasedChat) {
    return null
  }

  const chatCfg = cfg.studyChat
  if (!chatCfg) {
    return null
  }

  if (!isEligiblePage(fileData.filePath, chatCfg)) {
    return null
  }

  const slug = fileData.slug
  if (!slug) {
    return null
  }

  const dataAttrs = {
    "data-study-chat": "true",
    "data-room-slug": slug,
    "data-page-title": fileData.frontmatter?.title ?? fileData.slug ?? "Ders Notu",
    "data-signal-url": chatCfg.signalServerUrl,
    "data-default-nickname": chatCfg.defaultNickname,
    "data-nickname-max": String(chatCfg.nicknameMaxLength),
    "data-idle-timeout": String(chatCfg.idleTimeoutMs),
    "data-max-history": String(chatCfg.maxHistory),
    "data-panel-collapsed": chatCfg.panelCollapsed ? "1" : "0",
    "data-auto-join": chatCfg.autoJoin ? "1" : "0",
    "data-ice-servers": encodeURIComponent(JSON.stringify(chatCfg.iceServers ?? [])),
  }

  return (
    <div class="study-chat-entry" {...dataAttrs}>
      {/* Chat script DOM'a yüklenince bu alan doldurulur */}
    </div>
  )
}

StudyChat.css = styles
StudyChat.afterDOMLoaded = studyChatScript

export default (() => StudyChat) satisfies QuartzComponentConstructor
