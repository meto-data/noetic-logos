interface StudyChatDataset {
  roomSlug: string
  pageTitle: string
  signalUrl: string
  defaultNickname: string
  nicknameMax: number
  idleTimeout: number
  maxHistory: number
  panelCollapsed: boolean
  autoJoin: boolean
  iceServers: RTCIceServer[]
}

interface ChatMessage {
  id: string
  authorId: string
  authorName: string
  text: string
  createdAt: number
}

type NetworkStatus = "idle" | "connecting" | "connected" | "error"

const ROOT_SELECTOR = "[data-study-chat]"
const LOCAL_STORAGE_KEY = "studyChatNickname"
const MESSAGE_ID_PREFIX = "scm"

class MessageStore {
  private limit: number
  private items: Map<string, ChatMessage>

  constructor(limit: number) {
    this.limit = limit
    this.items = new Map()
  }

  add(message: ChatMessage) {
    if (this.items.has(message.id)) return
    this.items.set(message.id, message)
    if (this.items.size > this.limit) {
      const sorted = Array.from(this.items.values()).sort((a, b) => a.createdAt - b.createdAt)
      while (sorted.length > this.limit) {
        const removed = sorted.shift()
        if (removed) {
          this.items.delete(removed.id)
        }
      }
    }
  }

  merge(messages: ChatMessage[]) {
    messages.forEach((msg) => this.add(msg))
  }

  all(): ChatMessage[] {
    return Array.from(this.items.values()).sort((a, b) => a.createdAt - b.createdAt)
  }
}

class StudyChatWidget {
  private root: HTMLElement
  private dataset: StudyChatDataset
  private ui!: {
    widget: HTMLDivElement
    toggleButton: HTMLButtonElement
    panel: HTMLDivElement
    headerStatus: HTMLDivElement
    connectionBadge: HTMLSpanElement
    statusLabel: HTMLSpanElement
    messageContainer: HTMLDivElement
    emptyState: HTMLDivElement
    nicknameInput: HTMLInputElement
    nicknameButton: HTMLButtonElement
    form: HTMLFormElement
    textarea: HTMLTextAreaElement
  }
  private nickname: string
  private collapsed: boolean
  private status: NetworkStatus = "idle"
  private network?: StudyChatNetwork
  private messages: MessageStore
  private idleTimeout?: ReturnType<typeof setTimeout>

  constructor(root: HTMLElement, dataset: StudyChatDataset) {
    this.root = root
    this.dataset = dataset
    this.collapsed = dataset.panelCollapsed
    this.nickname = loadNickname(dataset.defaultNickname, dataset.nicknameMax)
    this.messages = new MessageStore(dataset.maxHistory)
  }

  mount() {
    this.buildUI()
    this.attachEvents()
    if (this.dataset.autoJoin && this.dataset.signalUrl) {
      this.connectNetwork()
    } else if (!this.dataset.signalUrl) {
      this.setStatus("error", "Sinyal sunucusu yapılandırılmadı")
    }
  }

  private buildUI() {
    const widget = document.createElement("div")
    widget.className = "study-chat-widget"

    const toggleBtn = document.createElement("button")
    toggleBtn.className = "study-chat-toggle"
    toggleBtn.type = "button"
    toggleBtn.innerHTML = `<span>Sayfa Sohbeti</span>`

    const panel = document.createElement("div")
    panel.className = "study-chat-panel"
    if (!this.collapsed) {
      panel.classList.add("open")
    }

    const closeBtn = document.createElement("button")
    closeBtn.className = "study-chat-close"
    closeBtn.type = "button"
    closeBtn.setAttribute("aria-label", "Sohbet panelini kapat")
    closeBtn.textContent = "×"

    const header = document.createElement("div")
    header.className = "study-chat-header"
    const title = document.createElement("div")
    title.className = "study-chat-title"
    title.textContent = `${this.dataset.pageTitle} · Chat`
    const statusLine = document.createElement("div")
    statusLine.className = "study-chat-status"
    statusLine.innerHTML = `<span class="study-chat-connection offline">Bağlantı yok</span><span class="study-chat-status-label"></span>`
    header.appendChild(title)
    header.appendChild(statusLine)
    header.appendChild(closeBtn)

    const body = document.createElement("div")
    body.className = "study-chat-body"
    const messages = document.createElement("div")
    messages.className = "study-chat-messages"
    const emptyState = document.createElement("div")
    emptyState.className = "study-chat-empty"
    emptyState.textContent = "Sohbet başlatılmadı."
    body.appendChild(messages)
    body.appendChild(emptyState)

    const footer = document.createElement("div")
    footer.className = "study-chat-footer"

    const nicknameRow = document.createElement("div")
    nicknameRow.className = "study-chat-nickname"
    const nickInput = document.createElement("input")
    nickInput.type = "text"
    nickInput.value = this.nickname
    nickInput.maxLength = this.dataset.nicknameMax
    nickInput.placeholder = "Rumuz (isteğe bağlı)"
    const nickButton = document.createElement("button")
    nickButton.type = "button"
    nickButton.textContent = "Kaydet"
    nicknameRow.appendChild(nickInput)
    nicknameRow.appendChild(nickButton)

    const form = document.createElement("form")
    form.className = "study-chat-form"
    const textarea = document.createElement("textarea")
    textarea.placeholder = "Mesaj yaz..."
    textarea.required = true
    const sendBtn = document.createElement("button")
    sendBtn.type = "submit"
    sendBtn.textContent = "Gönder"
    form.appendChild(textarea)
    form.appendChild(sendBtn)

    footer.appendChild(nicknameRow)
    footer.appendChild(form)

    panel.appendChild(header)
    panel.appendChild(body)
    panel.appendChild(footer)

    widget.appendChild(toggleBtn)
    widget.appendChild(panel)

    this.root.replaceChildren(widget)
    this.ui = {
      widget,
      toggleButton: toggleBtn,
      panel,
      headerStatus: statusLine,
      connectionBadge: statusLine.querySelector(".study-chat-connection") as HTMLSpanElement,
      statusLabel: statusLine.querySelector(".study-chat-status-label") as HTMLSpanElement,
      messageContainer: messages,
      emptyState,
      nicknameInput: nickInput,
      nicknameButton: nickButton,
      form,
      textarea,
    }
    this.updateEmptyState()
  }

  private attachEvents() {
    this.ui.toggleButton.addEventListener("click", () => {
      this.collapsed = !this.collapsed
      this.updatePanelState()
      if (!this.collapsed) {
        this.ensureConnected()
      }
    })
    this.ui.panel.querySelector(".study-chat-close")?.addEventListener("click", () => {
      this.collapsed = true
      this.updatePanelState()
    })
    this.ui.nicknameButton.addEventListener("click", () => this.saveNickname())
    this.ui.form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this.handleSend()
    })
    this.ui.textarea.addEventListener("input", () => {
      this.ui.textarea.style.height = "auto"
      this.ui.textarea.style.height = `${Math.min(this.ui.textarea.scrollHeight, 160)}px`
    })
  }

  private updatePanelState() {
    if (this.collapsed) {
      this.ui.panel.classList.remove("open")
    } else {
      this.ui.panel.classList.add("open")
    }
  }

  private saveNickname() {
    const raw = this.ui.nicknameInput.value.trim()
    const nick = raw || this.dataset.defaultNickname
    this.nickname = nick.slice(0, this.dataset.nicknameMax)
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, this.nickname)
    } catch (error) {
      console.debug("Rumuz kaydedilemedi:", error)
    }
    this.ensureConnected()
    this.network?.broadcastSystem({
      type: "nickname",
      nickname: this.nickname,
    })
  }

  private handleSend() {
    const text = this.ui.textarea.value.trim()
    if (!text) return
    const message: ChatMessage = {
      id: `${MESSAGE_ID_PREFIX}-${crypto.randomUUID?.() ?? Date.now().toString(36)}`,
      authorId: this.network?.clientId ?? "local",
      authorName: this.nickname,
      text,
      createdAt: Date.now(),
    }
    this.ui.textarea.value = ""
    this.ui.textarea.style.height = "auto"
    this.addMessage(message, true)
    this.ensureConnected()
    this.network?.sendChat(message)
  }

  private addMessage(message: ChatMessage, local: boolean = false) {
    this.messages.add(message)
    this.renderMessages()
    this.resetIdleTimer()
  }

  private renderMessages() {
    const items = this.messages.all()
    this.ui.messageContainer.replaceChildren(
      ...items.map((msg) => {
        const wrapper = document.createElement("div")
        wrapper.className = "study-chat-message"
        const meta = document.createElement("div")
        meta.className = "meta"
        const name = document.createElement("strong")
        name.textContent = msg.authorName || this.dataset.defaultNickname
        const time = document.createElement("span")
        time.textContent = formatTime(msg.createdAt)
        meta.appendChild(name)
        meta.appendChild(time)
        const textNode = document.createElement("div")
        textNode.className = "text"
        textNode.textContent = msg.text
        wrapper.appendChild(meta)
        wrapper.appendChild(textNode)
        return wrapper
      }),
    )
    this.updateEmptyState()
    requestAnimationFrame(() => {
      this.ui.messageContainer.parentElement?.scrollTo({
        top: this.ui.messageContainer.scrollHeight + 999,
      })
    })
  }

  private updateEmptyState() {
    if (this.messages.all().length === 0) {
      this.ui.emptyState.style.display = "block"
    } else {
      this.ui.emptyState.style.display = "none"
    }
  }

  private connectNetwork() {
    if (!this.dataset.signalUrl) {
      this.setStatus("error", "Sinyal adresi ayarlı değil")
      return
    }
    if (this.network && this.status === "connected") {
      return
    }
    if (typeof window.RTCPeerConnection === "undefined") {
      this.setStatus("error", "Tarayıcınız sohbeti desteklemiyor")
      return
    }
    this.setStatus("connecting", "Bağlanıyor...")
    this.network?.destroy()
    this.network = new StudyChatNetwork(
      {
        nickname: this.nickname,
        roomSlug: this.dataset.roomSlug,
        signalUrl: this.dataset.signalUrl,
        iceServers: this.dataset.iceServers,
      },
      {
        onStatus: (next) => {
          if (next === "connected") {
            this.setStatus("connected", "Bağlı")
            this.network?.syncHistory(this.messages.all())
          } else if (next === "error") {
            this.setStatus("error", "Bağlantı koptu")
          } else {
            this.setStatus(next, "")
          }
        },
        onChatMessage: (message) => {
          this.messages.add(message)
          this.renderMessages()
        },
        onHistorySync: (history) => {
          this.messages.merge(history)
          this.renderMessages()
        },
      },
    )
    this.network.connect()
    this.resetIdleTimer()
  }

  private ensureConnected() {
    if (!this.network || this.status === "idle" || this.status === "error") {
      this.connectNetwork()
    }
  }

  private setStatus(status: NetworkStatus, label: string) {
    this.status = status
    if (!this.ui) return
    const badge = this.ui.connectionBadge
    if (status === "connected") {
      badge.textContent = "Çevrimiçi"
      badge.classList.remove("offline")
      badge.classList.add("online")
    } else if (status === "connecting") {
      badge.textContent = "Bağlanıyor"
      badge.classList.remove("online")
      badge.classList.add("offline")
    } else if (status === "error") {
      badge.textContent = "Hata"
      badge.classList.remove("online")
      badge.classList.add("offline")
    } else {
      badge.textContent = "Bağlantı yok"
      badge.classList.remove("online")
      badge.classList.add("offline")
    }
    if (this.ui.statusLabel) {
      this.ui.statusLabel.textContent = label ?? ""
    }
  }

  private resetIdleTimer() {
    if (this.idleTimeout) {
      clearTimeout(this.idleTimeout)
    }
    if (!this.dataset.idleTimeout) return
    this.idleTimeout = setTimeout(() => {
      this.network?.destroy()
      this.setStatus("idle", "Otomatik ayrıldı")
    }, this.dataset.idleTimeout)
  }
}

type NetworkCallbacks = {
  onStatus: (status: NetworkStatus) => void
  onChatMessage: (message: ChatMessage) => void
  onHistorySync: (messages: ChatMessage[]) => void
}

type SignalPayload = {
  type: "offer" | "answer" | "candidate"
  sdp?: RTCSessionDescriptionInit
  candidate?: RTCIceCandidateInit
}

interface NetworkOptions {
  nickname: string
  roomSlug: string
  signalUrl: string
  iceServers: RTCIceServer[]
}

class StudyChatNetwork {
  private options: NetworkOptions
  private callbacks: NetworkCallbacks
  private socket?: WebSocket
  private peers: Map<string, PeerConnection>
  private established: boolean = false
  public readonly clientId: string
  private latestHistory: ChatMessage[] = []

  constructor(options: NetworkOptions, callbacks: NetworkCallbacks) {
    this.options = options
    this.callbacks = callbacks
    this.peers = new Map()
    this.clientId = crypto.randomUUID?.() ?? `client-${Date.now().toString(36)}`
  }

  connect() {
    try {
      this.socket = new WebSocket(this.options.signalUrl)
    } catch (error) {
      console.error("Sinyal sunucusuna bağlanılamadı", error)
      this.callbacks.onStatus("error")
      return
    }
    this.socket.addEventListener("open", () => {
      this.callbacks.onStatus("connecting")
      this.send({
        type: "join",
        clientId: this.clientId,
        roomId: roomIdFromSlug(this.options.roomSlug),
        nickname: this.options.nickname,
      })
    })
    this.socket.addEventListener("message", (event) => this.handleSignalMessage(event))
    this.socket.addEventListener("close", () => {
      this.callbacks.onStatus("error")
      this.destroy()
    })
    this.socket.addEventListener("error", () => {
      this.callbacks.onStatus("error")
    })
  }

  destroy() {
    this.socket?.close()
    this.peers.forEach((peer) => peer.destroy())
    this.peers.clear()
    this.established = false
  }

  sendChat(message: ChatMessage) {
    this.broadcast({ type: "chat", message })
  }

  syncHistory(messages: ChatMessage[]) {
    if (!Array.isArray(messages)) return
    this.latestHistory = messages.slice()
    if (!messages.length) return
    this.broadcast({ type: "history", messages: this.latestHistory })
  }

  broadcastSystem(payload: unknown) {
    this.broadcast({ type: "system", payload })
  }

  private broadcast(payload: any) {
    this.peers.forEach((peer) => peer.send(payload))
  }

  private send(body: unknown) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(body))
    }
  }

  private handleSignalMessage(event: MessageEvent) {
    let data: any
    try {
      data = JSON.parse(String(event.data))
    } catch (error) {
      console.warn("Geçersiz sinyal verisi", error)
      return
    }
    if (!data) return
    const { type } = data
    switch (type) {
      case "joined":
        this.established = true
        this.callbacks.onStatus("connected")
        this.handleExistingPeers(data.peers ?? [])
        break
      case "peer-joined":
        this.createPeer(data.clientId, true)
        break
      case "peer-left":
        this.removePeer(data.clientId)
        break
      case "signal":
        this.routeSignal(data.source, data.payload)
        break
      default:
        break
    }
  }

  private handleExistingPeers(peers: string[]) {
    peers.forEach((peerId: string) => {
      if (peerId && peerId !== this.clientId) {
        this.createPeer(peerId, true)
      }
    })
  }

  private createPeer(peerId: string, initiator: boolean): PeerConnection | undefined {
    if (!peerId || peerId === this.clientId) return
    if (this.peers.has(peerId)) return
    const connection = new PeerConnection({
      peerId,
      initiator,
      rtcConfig: { iceServers: this.options.iceServers },
      signal: (payload: SignalPayload) => {
        this.send({
          type: "signal",
          target: peerId,
          source: this.clientId,
          payload,
        })
      },
      onMessage: (payload) => this.handlePeerPayload(payload),
      onClose: () => this.removePeer(peerId),
      onReady: () => {
        if (this.latestHistory.length) {
          connection.send({ type: "history", messages: this.latestHistory })
        }
      },
    })
    this.peers.set(peerId, connection)
    return connection
  }

  private removePeer(peerId: string) {
    const peer = this.peers.get(peerId)
    if (peer) {
      peer.destroy()
      this.peers.delete(peerId)
    }
  }

  private routeSignal(sourceId: string, payload: SignalPayload) {
    if (!sourceId || sourceId === this.clientId) return
    let peer = this.peers.get(sourceId)
    if (!peer) {
      peer = this.createPeer(sourceId, false)
    }
    peer?.handleSignal(payload)
  }

  private handlePeerPayload(payload: any) {
    if (!payload || typeof payload !== "object") return
    switch (payload.type) {
      case "chat":
        if (payload.message) {
          this.callbacks.onChatMessage(payload.message as ChatMessage)
        }
        break
      case "history":
        if (Array.isArray(payload.messages)) {
          this.callbacks.onHistorySync(payload.messages as ChatMessage[])
        }
        break
      default:
        break
    }
  }
}

type PeerConnectionOptions = {
  peerId: string
  initiator: boolean
  rtcConfig: RTCConfiguration
  signal: (payload: SignalPayload) => void
  onMessage: (payload: unknown) => void
  onClose: () => void
  onReady?: () => void
}

class PeerConnection {
  private options: PeerConnectionOptions
  private pc: RTCPeerConnection
  private channel?: RTCDataChannel
  public readonly peerId: string

  constructor(options: PeerConnectionOptions) {
    this.options = options
    this.peerId = options.peerId
    this.pc = new RTCPeerConnection(options.rtcConfig)
    this.pc.onicecandidate = (event) => {
      if (event.candidate) {
        this.options.signal({
          type: "candidate",
          candidate: event.candidate.toJSON(),
        })
      }
    }
    this.pc.oniceconnectionstatechange = () => {
      if (["closed", "failed"].includes(this.pc.iceConnectionState)) {
        this.options.onClose()
      }
    }
    if (options.initiator) {
      const channel = this.pc.createDataChannel("study-chat")
      this.registerChannel(channel)
      this.pc.createOffer()
        .then((offer) => this.pc.setLocalDescription(offer))
        .then(() => {
          if (this.pc.localDescription) {
            this.options.signal({
              type: "offer",
              sdp: this.pc.localDescription.toJSON(),
            })
          }
        })
        .catch((error) => console.error("Offer oluşturulamadı:", error))
    } else {
      this.pc.ondatachannel = (event) => {
        this.registerChannel(event.channel)
      }
    }
  }

  handleSignal(payload: SignalPayload) {
    if (!payload) return
    if (payload.type === "offer" && payload.sdp) {
      this.pc
        .setRemoteDescription(new RTCSessionDescription(payload.sdp))
        .then(() => this.pc.createAnswer())
        .then((answer) => this.pc.setLocalDescription(answer))
        .then(() => {
          if (this.pc.localDescription) {
            this.options.signal({
              type: "answer",
              sdp: this.pc.localDescription.toJSON(),
            })
          }
        })
        .catch((error) => console.error("Offer işlenemedi:", error))
    } else if (payload.type === "answer" && payload.sdp) {
      this.pc
        .setRemoteDescription(new RTCSessionDescription(payload.sdp))
        .catch((error) => console.error("Answer işlenemedi:", error))
    } else if (payload.type === "candidate" && payload.candidate) {
      this.pc
        .addIceCandidate(new RTCIceCandidate(payload.candidate))
        .catch((error) => console.error("ICE candidate eklenemedi:", error))
    }
  }

  send(payload: any) {
    if (this.channel && this.channel.readyState === "open") {
      this.channel.send(JSON.stringify(payload))
    }
  }

  destroy() {
    this.channel?.close()
    this.pc.close()
  }

  private registerChannel(channel: RTCDataChannel) {
    this.channel = channel
    channel.onmessage = (event) => {
      try {
        const data = JSON.parse(String(event.data))
        this.options.onMessage(data)
      } catch {
        console.warn("Geçersiz mesaj verisi")
      }
    }
    channel.onopen = () => {
      this.options.onReady?.()
    }
    channel.onclose = () => {
      this.options.onClose()
    }
  }
}

function parseDataset(root: HTMLElement): StudyChatDataset | null {
  const dataset = root.dataset
  if (!dataset.roomSlug) return null
  return {
    roomSlug: dataset.roomSlug,
    pageTitle: dataset.pageTitle ?? "Ders Notu",
    signalUrl: dataset.signalUrl ?? "",
    defaultNickname: dataset.defaultNickname ?? "İsimsiz",
    nicknameMax: Number(dataset.nicknameMax || 24),
    idleTimeout: Number(dataset.idleTimeout || 10 * 60 * 1000),
    maxHistory: Number(dataset.maxHistory || 100),
    panelCollapsed: dataset.panelCollapsed !== "0",
    autoJoin: dataset.autoJoin !== "0",
    iceServers: parseIceServers(dataset.iceServers),
  }
}

function parseIceServers(value?: string): RTCIceServer[] {
  if (!value) return []
  try {
    return JSON.parse(decodeURIComponent(value))
  } catch {
    return []
  }
}

function loadNickname(defaultNickname: string, maxLength: number): string {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      return saved.slice(0, maxLength)
    }
  } catch {
    // ignore
  }
  return defaultNickname
}

function formatTime(timestamp: number): string {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(timestamp))
  } catch {
    const date = new Date(timestamp)
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`
  }
}

function roomIdFromSlug(slug: string): string {
  const normalized = slug.toLowerCase().trim()
  let hash = 0
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) - hash + normalized.charCodeAt(i)
    hash |= 0
  }
  return `study-${Math.abs(hash)}`
}

function mountStudyChats() {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    if (root.dataset.chatMounted === "1") return
    const dataset = parseDataset(root)
    if (!dataset) return
    const widget = new StudyChatWidget(root, dataset)
    widget.mount()
    root.dataset.chatMounted = "1"
  })
}

document.addEventListener("DOMContentLoaded", mountStudyChats)
document.addEventListener("nav", mountStudyChats)
