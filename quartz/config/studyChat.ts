export interface StudyChatConfig {
  eligiblePathPrefixes: string[]
  signalServerUrl: string
  defaultNickname: string
  nicknameMaxLength: number
  idleTimeoutMs: number
  panelCollapsed: boolean
  maxHistory: number
  iceServers: { urls: string[] }[]
  autoJoin: boolean
}

export const defaultStudyChatConfig: StudyChatConfig = {
  eligiblePathPrefixes: ["1- Ders Notları (YBS)"],
  signalServerUrl: process.env.STUDY_CHAT_SIGNAL_URL?.trim() ?? "",
  defaultNickname: "İsimsiz",
  nicknameMaxLength: 24,
  idleTimeoutMs: 10 * 60 * 1000,
  panelCollapsed: true,
  maxHistory: 120,
  autoJoin: true,
  iceServers: [
    { urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"] },
    { urls: ["stun:stun.cloudflare.com:3478"] },
  ],
}
