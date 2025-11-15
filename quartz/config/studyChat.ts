export interface StudyChatConfig {
  eligiblePathPrefixes: string[]
  signalServerUrl: string
  defaultNickname: string
  nicknameMaxLength: number
  idleTimeoutMs: number
  panelCollapsed: boolean
  maxHistory: number
  autoJoin: boolean
}

export const defaultStudyChatConfig: StudyChatConfig = {
  eligiblePathPrefixes: ["1- Ders Notları (YBS)"],
  signalServerUrl: process.env.STUDY_CHAT_SIGNAL_URL?.trim() ?? "",
  defaultNickname: "İsimsiz",
  nicknameMaxLength: 24,
  idleTimeoutMs: 10 * 60 * 1000,
  panelCollapsed: false,
  maxHistory: 120,
  autoJoin: true,
}
