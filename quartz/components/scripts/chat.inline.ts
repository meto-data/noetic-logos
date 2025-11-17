// Floating Chat Widget - Noetic Logos
const WORKER_URL = "https://noetic-presence.mselayet.workers.dev"
const HEARTBEAT_INTERVAL = 30000
const POLL_INTERVAL = 3000

interface ChatMessage {
  id: string
  type: "user" | "system"
  nickname: string
  message: string
  timestamp: number
}

interface ChatUser {
  nickname: string
  joinedAt: number
  idleTime: number
}

class NoeticChat {
  private sessionId: string
  private nickname: string = ""
  private lastMessageTimestamp: number = 0
  private heartbeatTimer: number | null = null
  private pollTimer: number | null = null
  private isJoined: boolean = false
  private isOpen: boolean = false
  private isVisible: boolean = false

  private container: HTMLElement | null = null
  private bubble: HTMLElement | null = null
  private panel: HTMLElement | null = null
  private messagesEl: HTMLElement | null = null
  private inputEl: HTMLInputElement | null = null
  private onlineCountEl: HTMLElement | null = null
  private onlineListEl: HTMLElement | null = null
  private statusEl: HTMLElement | null = null
  private joinModal: HTMLElement | null = null

  constructor() {
    this.sessionId =
      localStorage.getItem("noetic_chat_session") ||
      "chat_" + Date.now().toString(36) + Math.random().toString(36).substr(2)
    localStorage.setItem("noetic_chat_session", this.sessionId)

    this.nickname = localStorage.getItem("noetic_chat_nickname") || ""

    // Check if chat was activated
    if (localStorage.getItem("noetic_chat_active") === "true") {
      this.init()
    }

    // Listen for activation from search
    window.addEventListener("noetic-chat-activate", () => this.activate())
  }

  activate() {
    localStorage.setItem("noetic_chat_active", "true")
    if (!this.container) {
      this.init()
    }
    this.show()
  }

  private init() {
    this.createStyles()
    this.createDOM()
    this.attachEvents()
    this.isVisible = true

    // Auto-join if nickname exists
    if (this.nickname && !this.isJoined) {
      this.joinChat(this.nickname)
    }
  }

  private createStyles() {
    if (document.getElementById("noetic-chat-styles")) return

    const style = document.createElement("style")
    style.id = "noetic-chat-styles"
    style.textContent = `
      #noetic-chat-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      #noetic-chat-bubble {
        width: 56px;
        height: 56px;
        background: #4a9eff;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(74, 158, 255, 0.4);
        transition: transform 0.2s, box-shadow 0.2s;
      }

      #noetic-chat-bubble:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(74, 158, 255, 0.5);
      }

      #noetic-chat-bubble svg {
        width: 28px;
        height: 28px;
        fill: white;
      }

      #noetic-chat-bubble .badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background: #ef4444;
        color: white;
        font-size: 11px;
        font-weight: bold;
        padding: 2px 6px;
        border-radius: 10px;
        display: none;
      }

      #noetic-chat-panel {
        position: absolute;
        bottom: 70px;
        right: 0;
        width: 360px;
        max-width: calc(100vw - 40px);
        height: 480px;
        max-height: calc(100vh - 100px);
        background: #1a1a1a;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        display: none;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid #333;
      }

      #noetic-chat-panel.open {
        display: flex;
      }

      .noetic-chat-header {
        background: #252525;
        padding: 12px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #333;
      }

      .noetic-chat-header h3 {
        margin: 0;
        font-size: 14px;
        color: #4a9eff;
        font-weight: 600;
      }

      .noetic-chat-header .close-btn {
        background: none;
        border: none;
        color: #888;
        cursor: pointer;
        font-size: 20px;
        padding: 0;
        line-height: 1;
      }

      .noetic-chat-header .close-btn:hover {
        color: #fff;
      }

      .noetic-chat-status {
        font-size: 11px;
        color: #888;
        padding: 6px 16px;
        background: #1f1f1f;
        border-bottom: 1px solid #333;
      }

      .noetic-chat-status.connected {
        color: #4ade80;
      }

      .noetic-chat-online {
        padding: 8px 16px;
        background: #1f1f1f;
        border-bottom: 1px solid #333;
        font-size: 11px;
        color: #888;
      }

      .noetic-chat-online span {
        color: #4ade80;
        font-weight: 600;
      }

      .noetic-chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .noetic-chat-msg {
        max-width: 85%;
        padding: 8px 12px;
        border-radius: 12px;
        font-size: 13px;
        line-height: 1.4;
        word-wrap: break-word;
      }

      .noetic-chat-msg.user {
        background: #2563eb;
        color: white;
        align-self: flex-start;
        border-bottom-left-radius: 4px;
      }

      .noetic-chat-msg.own {
        background: #059669;
        color: white;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
      }

      .noetic-chat-msg.system {
        background: #333;
        color: #888;
        align-self: center;
        font-size: 11px;
        font-style: italic;
        padding: 4px 12px;
      }

      .noetic-chat-msg .nick {
        font-size: 10px;
        font-weight: 600;
        opacity: 0.8;
        margin-bottom: 2px;
      }

      .noetic-chat-msg .time {
        font-size: 9px;
        opacity: 0.6;
        margin-top: 4px;
        text-align: right;
      }

      .noetic-chat-input {
        padding: 12px;
        background: #252525;
        border-top: 1px solid #333;
        display: flex;
        gap: 8px;
      }

      .noetic-chat-input input {
        flex: 1;
        background: #333;
        border: 1px solid #444;
        color: #e0e0e0;
        padding: 8px 12px;
        border-radius: 20px;
        font-size: 13px;
        outline: none;
      }

      .noetic-chat-input input:focus {
        border-color: #4a9eff;
      }

      .noetic-chat-input input:disabled {
        opacity: 0.5;
      }

      .noetic-chat-input button {
        background: #4a9eff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
      }

      .noetic-chat-input button:hover {
        background: #3b82f6;
      }

      .noetic-chat-input button:disabled {
        background: #555;
        cursor: not-allowed;
      }

      .noetic-chat-join {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .noetic-chat-join-inner {
        text-align: center;
        width: 100%;
      }

      .noetic-chat-join h4 {
        color: #4a9eff;
        margin: 0 0 12px 0;
        font-size: 16px;
      }

      .noetic-chat-join input {
        width: 100%;
        background: #333;
        border: 1px solid #444;
        color: #e0e0e0;
        padding: 10px;
        border-radius: 6px;
        font-size: 14px;
        margin-bottom: 8px;
        outline: none;
        text-align: center;
      }

      .noetic-chat-join input:focus {
        border-color: #4a9eff;
      }

      .noetic-chat-join button {
        width: 100%;
        background: #4a9eff;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
      }

      .noetic-chat-join button:hover {
        background: #3b82f6;
      }

      .noetic-chat-join .error {
        color: #ef4444;
        font-size: 12px;
        margin-bottom: 8px;
        display: none;
      }

      @media (max-width: 480px) {
        #noetic-chat-panel {
          width: calc(100vw - 40px);
          height: calc(100vh - 100px);
          bottom: 70px;
        }
      }
    `
    document.head.appendChild(style)
  }

  private createDOM() {
    this.container = document.createElement("div")
    this.container.id = "noetic-chat-container"

    this.container.innerHTML = `
      <div id="noetic-chat-bubble">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        <span class="badge">0</span>
      </div>
      <div id="noetic-chat-panel">
        <div class="noetic-chat-header">
          <h3>Noetic Chat</h3>
          <button class="close-btn">&times;</button>
        </div>
        <div class="noetic-chat-status">Bağlanıyor...</div>
        <div class="noetic-chat-online">Çevrimiçi: <span>0</span></div>
        <div class="noetic-chat-messages"></div>
        <div class="noetic-chat-input">
          <input type="text" placeholder="Mesajınızı yazın..." maxlength="500" disabled>
          <button disabled>Gönder</button>
        </div>
        <div class="noetic-chat-join">
          <div class="noetic-chat-join-inner">
            <h4>Sohbete Katıl</h4>
            <div class="error"></div>
            <input type="text" placeholder="Takma adınız..." maxlength="20">
            <button>Katıl</button>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(this.container)

    this.bubble = this.container.querySelector("#noetic-chat-bubble")
    this.panel = this.container.querySelector("#noetic-chat-panel")
    this.messagesEl = this.container.querySelector(".noetic-chat-messages")
    this.inputEl = this.container.querySelector(".noetic-chat-input input")
    this.onlineCountEl = this.container.querySelector(".noetic-chat-online span")
    this.statusEl = this.container.querySelector(".noetic-chat-status")
    this.joinModal = this.container.querySelector(".noetic-chat-join")
  }

  private attachEvents() {
    // Bubble click
    this.bubble?.addEventListener("click", () => this.toggle())

    // Close button
    this.panel?.querySelector(".close-btn")?.addEventListener("click", () => this.close())

    // Send message
    const sendBtn = this.panel?.querySelector(".noetic-chat-input button")
    sendBtn?.addEventListener("click", () => this.handleSend())

    this.inputEl?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleSend()
    })

    // Join
    const joinBtn = this.joinModal?.querySelector("button")
    const joinInput = this.joinModal?.querySelector("input") as HTMLInputElement
    joinBtn?.addEventListener("click", () => this.handleJoin(joinInput))
    joinInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleJoin(joinInput)
    })

    // Pre-fill nickname
    if (this.nickname && joinInput) {
      joinInput.value = this.nickname
    }

    // Check connection
    this.checkConnection()
  }

  private async checkConnection() {
    try {
      const res = await fetch(`${WORKER_URL}/health`)
      if (res.ok && this.statusEl) {
        this.statusEl.textContent = "Bağlantı hazır"
      }
    } catch {
      if (this.statusEl) {
        this.statusEl.textContent = "Bağlantı hatası"
        this.statusEl.classList.add("error")
      }
    }
  }

  private show() {
    if (this.container) {
      this.container.style.display = "block"
    }
    this.isVisible = true
  }

  private toggle() {
    this.isOpen = !this.isOpen
    this.panel?.classList.toggle("open", this.isOpen)

    if (this.isOpen && this.isJoined) {
      this.inputEl?.focus()
    }
  }

  private close() {
    this.isOpen = false
    this.panel?.classList.remove("open")
  }

  private async handleJoin(input: HTMLInputElement) {
    const nick = input.value.trim()
    if (!nick) {
      this.showJoinError("Takma ad gerekli")
      return
    }

    const btn = this.joinModal?.querySelector("button")
    if (btn) {
      btn.textContent = "Katılınıyor..."
      ;(btn as HTMLButtonElement).disabled = true
    }

    try {
      await this.joinChat(nick)
    } catch (err: any) {
      this.showJoinError(err.message)
      if (btn) {
        btn.textContent = "Katıl"
        ;(btn as HTMLButtonElement).disabled = false
      }
    }
  }

  private showJoinError(msg: string) {
    const errorEl = this.joinModal?.querySelector(".error") as HTMLElement
    if (errorEl) {
      errorEl.textContent = msg
      errorEl.style.display = "block"
    }
  }

  private async joinChat(nick: string) {
    const res = await fetch(`${WORKER_URL}/chat/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: this.sessionId, nickname: nick }),
    })

    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.error || "Katılım başarısız")
    }

    this.nickname = data.nickname
    localStorage.setItem("noetic_chat_nickname", this.nickname)
    this.isJoined = true

    // Hide join modal
    if (this.joinModal) {
      this.joinModal.style.display = "none"
    }

    // Enable input
    if (this.inputEl) {
      this.inputEl.disabled = false
    }
    const sendBtn = this.panel?.querySelector(".noetic-chat-input button") as HTMLButtonElement
    if (sendBtn) {
      sendBtn.disabled = false
    }

    // Update status
    if (this.statusEl) {
      this.statusEl.textContent = `Bağlı - ${this.nickname}`
      this.statusEl.classList.add("connected")
    }

    // Start polling
    this.startPolling()
    this.startHeartbeat()

    // Fetch initial data
    await this.fetchMessages()
    await this.fetchOnlineUsers()
  }

  private async handleSend() {
    if (!this.inputEl || !this.isJoined) return

    const msg = this.inputEl.value.trim()
    if (!msg) return

    const sendBtn = this.panel?.querySelector(".noetic-chat-input button") as HTMLButtonElement
    if (sendBtn) sendBtn.disabled = true

    try {
      const res = await fetch(`${WORKER_URL}/chat/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: this.sessionId, message: msg }),
      })

      if (res.ok) {
        this.inputEl.value = ""
        await this.fetchMessages()
      }
    } catch (err) {
      console.error("Send error:", err)
    }

    if (sendBtn) sendBtn.disabled = false
    this.inputEl.focus()
  }

  private async fetchMessages() {
    try {
      const res = await fetch(`${WORKER_URL}/chat/messages?since=${this.lastMessageTimestamp}`)
      const data = await res.json()

      if (data.messages && data.messages.length > 0) {
        data.messages.forEach((msg: ChatMessage) => {
          this.addMessageToUI(msg)
          if (msg.timestamp > this.lastMessageTimestamp) {
            this.lastMessageTimestamp = msg.timestamp
          }
        })
      }
    } catch (err) {
      console.error("Fetch messages error:", err)
    }
  }

  private async fetchOnlineUsers() {
    try {
      const res = await fetch(`${WORKER_URL}/chat/online`)
      const data = await res.json()

      if (this.onlineCountEl) {
        this.onlineCountEl.textContent = data.count
      }
    } catch (err) {
      console.error("Fetch online error:", err)
    }
  }

  private async sendHeartbeat() {
    if (!this.isJoined) return

    try {
      await fetch(`${WORKER_URL}/chat/heartbeat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: this.sessionId }),
      })
    } catch (err) {
      console.error("Heartbeat error:", err)
    }
  }

  private addMessageToUI(msg: ChatMessage) {
    if (!this.messagesEl) return

    const div = document.createElement("div")
    div.className = "noetic-chat-msg"

    if (msg.type === "system") {
      div.classList.add("system")
      div.textContent = msg.message
    } else {
      const isOwn = msg.nickname === this.nickname
      div.classList.add(isOwn ? "own" : "user")

      const time = new Date(msg.timestamp).toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      })

      div.innerHTML = `
        <div class="nick">${msg.nickname}</div>
        <div>${msg.message}</div>
        <div class="time">${time}</div>
      `
    }

    this.messagesEl.appendChild(div)
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight
  }

  private startPolling() {
    this.pollTimer = window.setInterval(async () => {
      await this.fetchMessages()
      await this.fetchOnlineUsers()
    }, POLL_INTERVAL)
  }

  private startHeartbeat() {
    this.heartbeatTimer = window.setInterval(() => this.sendHeartbeat(), HEARTBEAT_INTERVAL)
  }

  private stopTimers() {
    if (this.pollTimer) clearInterval(this.pollTimer)
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer)
  }

  cleanup() {
    this.stopTimers()
    if (this.isJoined) {
      fetch(`${WORKER_URL}/chat/leave`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: this.sessionId }),
      }).catch(() => {})
    }
  }
}

// Initialize chat
let chatInstance: NoeticChat | null = null

document.addEventListener("DOMContentLoaded", () => {
  chatInstance = new NoeticChat()
})

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  chatInstance?.cleanup()
})
