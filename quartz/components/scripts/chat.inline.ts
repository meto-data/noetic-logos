// Floating Chat Widget - Noetic Logos
// Uses Quartz CSS variables for theme compatibility

const WORKER_URL = "https://noetic-presence.mselayet.workers.dev"
const HEARTBEAT_INTERVAL = 45000 // 45 seconds
const POLL_INTERVAL = 2000 // 2 seconds when panel open (no polling when closed)
const MESSAGE_DEBOUNCE = 500 // 500ms debounce

interface ChatMessage {
  id: number
  type: "user" | "system"
  nickname: string
  message: string
  timestamp: number
}

class NoeticChat {
  private sessionId: string
  private nickname: string = ""
  private lastMessageTimestamp: number = 0
  private lastMessageId: number = 0
  private heartbeatTimer: number | null = null
  private pollTimer: number | null = null
  private isJoined: boolean = false
  private isOpen: boolean = false
  private isSending: boolean = false
  private container: HTMLElement | null = null
  private bubble: HTMLElement | null = null
  private panel: HTMLElement | null = null
  private messagesEl: HTMLElement | null = null
  private inputEl: HTMLInputElement | null = null
  private onlineCountEl: HTMLElement | null = null
  private statusEl: HTMLElement | null = null
  private joinModal: HTMLElement | null = null
  private sendBtn: HTMLButtonElement | null = null

  constructor() {
    this.sessionId =
      localStorage.getItem("noetic_chat_session") ||
      "chat_" + Date.now().toString(36) + Math.random().toString(36).substr(2)
    localStorage.setItem("noetic_chat_session", this.sessionId)
    this.nickname = localStorage.getItem("noetic_chat_nickname") || ""

    if (localStorage.getItem("noetic_chat_active") === "true") {
      this.init()
    }

    window.addEventListener("noetic-chat-activate", () => this.activate())
    window.addEventListener("noetic-chat-deactivate", () => this.deactivate())
  }

  deactivate() {
    localStorage.setItem("noetic_chat_active", "false")
    this.cleanup()

    // Remove chat UI
    if (this.container) {
      this.container.remove()
      this.container = null
      this.bubble = null
      this.panel = null
      this.messagesEl = null
      this.inputEl = null
      this.onlineCountEl = null
      this.statusEl = null
      this.joinModal = null
      this.sendBtn = null
    }

    this.isJoined = false
    this.isOpen = false
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
        font-family: var(--bodyFont);
      }

      #noetic-chat-bubble {
        width: 52px;
        height: 52px;
        background: var(--secondary);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px color-mix(in srgb, var(--secondary) 40%, transparent);
        transition: transform 0.2s, box-shadow 0.2s;
        position: relative;
      }

      #noetic-chat-bubble:hover {
        transform: scale(1.08);
        box-shadow: 0 6px 16px color-mix(in srgb, var(--secondary) 50%, transparent);
      }

      #noetic-chat-bubble svg {
        width: 26px;
        height: 26px;
        fill: var(--light);
      }

      #noetic-chat-bubble .badge {
        position: absolute;
        top: -2px;
        right: -2px;
        background: #ef4444;
        color: white;
        font-size: 10px;
        font-weight: 600;
        min-width: 18px;
        height: 18px;
        padding: 0 4px;
        border-radius: 9px;
        display: none;
        align-items: center;
        justify-content: center;
      }

      #noetic-chat-panel {
        position: absolute;
        bottom: 64px;
        right: 0;
        width: 340px;
        min-width: 280px;
        max-width: calc(100vw - 40px);
        height: 450px;
        min-height: 300px;
        max-height: calc(100vh - 100px);
        background: var(--light);
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        display: none;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--lightgray);
        resize: both;
        overflow: auto;
      }

      #noetic-chat-panel.open {
        display: flex;
        animation: chatSlideUp 0.15s ease-out;
      }

      @keyframes chatSlideUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .nch-header {
        background: var(--lightgray);
        padding: 8px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--gray);
      }

      .nch-header-left {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .nch-header .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        flex-shrink: 0;
      }

      .nch-header.connected .status-dot {
        background: #22c55e;
      }

      .nch-header .nick {
        font-size: 12px;
        color: var(--dark);
        font-weight: 500;
      }

      .nch-header .online-count {
        font-size: 10px;
        color: var(--gray);
        margin-left: auto;
        margin-right: 8px;
      }

      .nch-header .online-count span {
        color: var(--tertiary);
        font-weight: 600;
      }

      .nch-header .close-btn {
        background: none;
        border: none;
        color: var(--gray);
        cursor: pointer;
        font-size: 16px;
        padding: 2px 6px;
        line-height: 1;
        border-radius: 4px;
      }

      .nch-header .close-btn:hover {
        color: var(--dark);
        background: var(--gray);
      }

      .nch-messages {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        background: var(--light);
      }

      .nch-msg {
        max-width: 82%;
        padding: 6px 10px;
        border-radius: 8px;
        font-size: 12px;
        line-height: 1.4;
        word-wrap: break-word;
      }

      .nch-msg.user {
        background: var(--secondary);
        color: var(--light);
        align-self: flex-start;
        border-bottom-left-radius: 2px;
      }

      .nch-msg.own {
        background: var(--tertiary);
        color: var(--light);
        align-self: flex-end;
        border-bottom-right-radius: 2px;
      }

      .nch-msg.system {
        background: var(--lightgray);
        color: var(--gray);
        align-self: center;
        font-size: 10px;
        font-style: italic;
        padding: 3px 10px;
        border-radius: 6px;
      }

      .nch-msg .nick {
        font-size: 9px;
        font-weight: 600;
        opacity: 0.85;
        margin-bottom: 2px;
      }

      .nch-msg .time {
        font-size: 8px;
        opacity: 0.7;
        margin-top: 3px;
        text-align: right;
      }

      .nch-msg .delete-btn {
        position: absolute;
        top: 4px;
        right: 4px;
        background: rgba(239, 68, 68, 0.8);
        color: white;
        border: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        font-size: 10px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        line-height: 1;
      }

      .nch-msg.own {
        position: relative;
      }

      .nch-msg.own:hover .delete-btn {
        display: flex;
      }

      .nch-msg .delete-btn:hover {
        background: #dc2626;
      }

      .nch-input {
        padding: 10px;
        background: var(--lightgray);
        border-top: 1px solid var(--gray);
        display: flex;
        gap: 6px;
      }

      .nch-input input {
        flex: 1;
        background: var(--light);
        border: 1px solid var(--gray);
        color: var(--dark);
        padding: 7px 10px;
        border-radius: 6px;
        font-size: 12px;
        outline: none;
        font-family: var(--bodyFont);
      }

      .nch-input input:focus {
        border-color: var(--secondary);
      }

      .nch-input input:disabled {
        opacity: 0.5;
      }

      .nch-input button {
        background: var(--secondary);
        color: var(--light);
        border: none;
        padding: 7px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        font-family: var(--bodyFont);
        transition: opacity 0.15s;
      }

      .nch-input button:hover:not(:disabled) {
        opacity: 0.9;
      }

      .nch-input button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .nch-join {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: color-mix(in srgb, var(--light) 95%, transparent);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .nch-join-inner {
        text-align: center;
        width: 100%;
      }

      .nch-join h4 {
        color: var(--secondary);
        margin: 0 0 10px 0;
        font-size: 14px;
      }

      .nch-join input {
        width: 100%;
        background: var(--light);
        border: 1px solid var(--gray);
        color: var(--dark);
        padding: 9px;
        border-radius: 6px;
        font-size: 13px;
        margin-bottom: 6px;
        outline: none;
        text-align: center;
        font-family: var(--bodyFont);
      }

      .nch-join input:focus {
        border-color: var(--secondary);
      }

      .nch-join button {
        width: 100%;
        background: var(--secondary);
        color: var(--light);
        border: none;
        padding: 9px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        font-family: var(--bodyFont);
      }

      .nch-join button:hover {
        filter: brightness(1.1);
      }

      .nch-join .error {
        color: #ef4444;
        font-size: 11px;
        margin-bottom: 6px;
        display: none;
      }

      @media (max-width: 480px) {
        #noetic-chat-panel {
          width: calc(100vw - 40px);
          height: calc(100vh - 120px);
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
        <div class="nch-header">
          <div class="nch-header-left">
            <span class="status-dot"></span>
            <span class="nick">-</span>
          </div>
          <div class="online-count"><span>0</span> çevrim içi</div>
          <button class="close-btn">&times;</button>
        </div>
        <div class="nch-messages"></div>
        <div class="nch-input">
          <input type="text" placeholder="Mesaj..." maxlength="500" disabled>
          <button disabled>Gönder</button>
        </div>
        <div class="nch-join">
          <div class="nch-join-inner">
            <h4>Sohbete Katıl</h4>
            <div class="error"></div>
            <input type="text" placeholder="Takma ad..." maxlength="20">
            <button>Katıl</button>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(this.container)

    this.bubble = this.container.querySelector("#noetic-chat-bubble")
    this.panel = this.container.querySelector("#noetic-chat-panel")
    this.messagesEl = this.container.querySelector(".nch-messages")
    this.inputEl = this.container.querySelector(".nch-input input")
    this.sendBtn = this.container.querySelector(".nch-input button")
    this.onlineCountEl = this.container.querySelector(".online-count span")
    this.statusEl = this.container.querySelector(".nch-header")
    this.joinModal = this.container.querySelector(".nch-join")
  }

  private attachEvents() {
    this.bubble?.addEventListener("click", () => this.toggle())
    this.panel?.querySelector(".close-btn")?.addEventListener("click", () => this.close())

    // Send with debounce
    this.sendBtn?.addEventListener("click", () => this.handleSend())
    this.inputEl?.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        this.handleSend()
      }
    })

    // Join
    const joinBtn = this.joinModal?.querySelector("button")
    const joinInput = this.joinModal?.querySelector("input") as HTMLInputElement
    joinBtn?.addEventListener("click", () => this.handleJoin(joinInput))
    joinInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleJoin(joinInput)
    })

    if (this.nickname && joinInput) {
      joinInput.value = this.nickname
    }

    this.checkConnection()
  }

  private async checkConnection() {
    try {
      const res = await fetch(`${WORKER_URL}/health`)
      if (res.ok && this.statusEl) {
        this.statusEl.textContent = "Hazır"
      }
    } catch {
      if (this.statusEl) {
        this.statusEl.textContent = "Bağlantı hatası"
      }
    }
  }

  private show() {
    if (this.container) {
      this.container.style.display = "block"
    }
  }

  private toggle() {
    this.isOpen = !this.isOpen
    this.panel?.classList.toggle("open", this.isOpen)
    if (this.isOpen && this.isJoined) {
      this.inputEl?.focus()
      // Load everything when panel opens (like Reddit)
      this.fetchMessages()
      this.fetchOnlineUsers()
      this.startPolling()
      this.startHeartbeat()
    } else if (this.isJoined) {
      // Stop everything when closed - zero requests!
      this.stopPolling()
      this.stopHeartbeat()
    }
  }

  private close() {
    this.isOpen = false
    this.panel?.classList.remove("open")
    // Stop everything when closed
    if (this.isJoined) {
      this.stopPolling()
      this.stopHeartbeat()
    }
  }

  private async handleJoin(input: HTMLInputElement) {
    const nick = input.value.trim()
    if (!nick) {
      this.showJoinError("Takma ad gerekli")
      return
    }

    const btn = this.joinModal?.querySelector("button") as HTMLButtonElement
    if (btn) {
      btn.textContent = "Bağlanıyor..."
      btn.disabled = true
    }

    try {
      await this.joinChat(nick)
    } catch (err: any) {
      this.showJoinError(err.message)
      if (btn) {
        btn.textContent = "Katıl"
        btn.disabled = false
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
    if (!res.ok) throw new Error(data.error || "Bağlantı başarısız")

    this.nickname = data.nickname
    localStorage.setItem("noetic_chat_nickname", this.nickname)
    this.isJoined = true

    if (this.joinModal) this.joinModal.style.display = "none"
    if (this.inputEl) this.inputEl.disabled = false
    if (this.sendBtn) this.sendBtn.disabled = false

    if (this.statusEl) {
      const nickSpan = this.statusEl.querySelector(".nick")
      if (nickSpan) nickSpan.textContent = this.nickname
      this.statusEl.classList.add("connected")
    }

    // Load messages immediately on join
    await this.fetchMessages()
    await this.fetchOnlineUsers()

    // Only start polling/heartbeat if panel is open
    if (this.isOpen) {
      this.startPolling()
      this.startHeartbeat()
    }
  }

  private async handleSend() {
    if (!this.inputEl || !this.isJoined || this.isSending) return

    let msg = this.inputEl.value.trim()
    if (!msg) return

    // Handle /sayfa command
    if (msg.toLowerCase() === "/sayfa") {
      const currentPath = window.location.pathname
      const pageTitle = document.title.replace(" | Noetic Logos", "").trim()
      msg = `📄 ${pageTitle}\n${window.location.origin}${currentPath}`
    }

    this.isSending = true
    if (this.sendBtn) this.sendBtn.disabled = true

    try {
      const res = await fetch(`${WORKER_URL}/chat/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: this.sessionId, message: msg }),
      })

      if (res.ok) {
        this.inputEl.value = ""
        // Fetch immediately after send
        setTimeout(() => this.fetchMessages(), 100)
      } else {
        const data = await res.json()
        if (data.error) {
          alert(data.error)
        }
      }
    } catch (err) {
      console.error("Send error:", err)
    } finally {
      // Debounce to prevent double send
      setTimeout(() => {
        this.isSending = false
        if (this.sendBtn) this.sendBtn.disabled = false
        this.inputEl?.focus()
      }, MESSAGE_DEBOUNCE)
    }
  }

  private async fetchMessages() {
    try {
      const res = await fetch(`${WORKER_URL}/chat/messages?since=${this.lastMessageTimestamp}`)
      const data = await res.json()

      if (data.messages && data.messages.length > 0) {
        let hasNew = false
        data.messages.forEach((msg: ChatMessage) => {
          // Prevent duplicates by checking message ID
          if (msg.id > this.lastMessageId) {
            this.addMessageToUI(msg)
            this.lastMessageId = msg.id
            hasNew = true
          }
          if (msg.timestamp > this.lastMessageTimestamp) {
            this.lastMessageTimestamp = msg.timestamp
          }
        })

        // Scroll only if new messages
        if (hasNew && this.messagesEl) {
          this.messagesEl.scrollTop = this.messagesEl.scrollHeight
        }
      }
    } catch (err) {
      console.error("Fetch error:", err)
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
      console.error("Online error:", err)
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
    div.className = "nch-msg"
    div.dataset.id = msg.id.toString()

    if (msg.type === "system") {
      div.classList.add("system")
      // Safe: textContent prevents XSS
      div.textContent = msg.message
    } else {
      const isOwn = msg.nickname === this.nickname
      div.classList.add(isOwn ? "own" : "user")

      // Build DOM safely without innerHTML (XSS protection)
      const nickDiv = document.createElement("div")
      nickDiv.className = "nick"
      nickDiv.textContent = msg.nickname // Safe

      const msgDiv = document.createElement("div")
      msgDiv.textContent = msg.message // Safe - no HTML parsing

      const timeDiv = document.createElement("div")
      timeDiv.className = "time"
      const time = new Date(msg.timestamp).toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      timeDiv.textContent = time

      div.appendChild(nickDiv)
      div.appendChild(msgDiv)
      div.appendChild(timeDiv)

      // Add delete button for own messages
      if (isOwn) {
        const deleteBtn = document.createElement("button")
        deleteBtn.className = "delete-btn"
        deleteBtn.textContent = "×"
        deleteBtn.title = "Mesajı sil"
        deleteBtn.addEventListener("click", () => this.deleteMessage(msg.id, div))
        div.appendChild(deleteBtn)
      }
    }

    this.messagesEl.appendChild(div)
  }

  private async deleteMessage(messageId: number, element: HTMLElement) {
    // No confirmation - direct delete
    try {
      const res = await fetch(`${WORKER_URL}/chat/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: this.sessionId, messageId }),
      })

      if (res.ok) {
        element.remove()
      }
    } catch (err) {
      console.error("Delete error:", err)
    }
  }

  private escapeHtml(text: string): string {
    // Defense in depth - escape HTML entities
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  }

  private startPolling() {
    if (this.pollTimer) clearInterval(this.pollTimer)
    this.pollTimer = window.setInterval(async () => {
      await this.fetchMessages()
      await this.fetchOnlineUsers()
    }, POLL_INTERVAL)
  }

  private stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer)
      this.pollTimer = null
    }
  }

  private stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }

  private startHeartbeat() {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer)
    // Send initial heartbeat
    this.sendHeartbeat()
    this.heartbeatTimer = window.setInterval(() => this.sendHeartbeat(), HEARTBEAT_INTERVAL)
  }

  cleanup() {
    if (this.pollTimer) clearInterval(this.pollTimer)
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer)
    if (this.isJoined) {
      navigator.sendBeacon(
        `${WORKER_URL}/chat/leave`,
        JSON.stringify({ sessionId: this.sessionId }),
      )
    }
  }
}

// Initialize
let chatInstance: NoeticChat | null = null

document.addEventListener("DOMContentLoaded", () => {
  chatInstance = new NoeticChat()
})

window.addEventListener("beforeunload", () => {
  chatInstance?.cleanup()
})
