const rooms = new Map()

function getRoom(roomId) {
  if (!rooms.has(roomId)) {
    rooms.set(roomId, new Map())
  }
  return rooms.get(roomId)
}

function cleanup(roomId, clientId) {
  const room = rooms.get(roomId)
  if (!room) return
  room.delete(clientId)
  if (room.size === 0) {
    rooms.delete(roomId)
  }
}

function handleWebSocket(ws) {
  let joined = false
  let roomId = ""
  let clientId = ""

  ws.accept()
  ws.addEventListener("message", (event) => {
    try {
      const data = JSON.parse(event.data)
      if (!joined && data.type === "join") {
        roomId = data.roomId
        clientId = data.clientId
        if (!roomId || !clientId) {
          ws.send(JSON.stringify({ type: "error", message: "roomId/clientId missing" }))
          ws.close(1011, "missing info")
          return
        }
        joined = true
        const room = getRoom(roomId)
        const others = Array.from(room.keys())
        room.set(clientId, ws)
        ws.send(JSON.stringify({ type: "joined", peers: others }))
        others.forEach((peerId) => {
          const peerSocket = room.get(peerId)
          try {
            peerSocket?.send(JSON.stringify({ type: "peer-joined", clientId }))
          } catch (error) {
            console.error("Peer notification failed", error)
          }
        })
        return
      }

      if (!joined) {
        ws.send(JSON.stringify({ type: "error", message: "Join gerekli" }))
        return
      }

      if (data.type === "signal" && data.target) {
        const room = getRoom(roomId)
        const target = room.get(data.target)
        if (target) {
          target.send(
            JSON.stringify({
              type: "signal",
              source: clientId,
              payload: data.payload,
            }),
          )
        }
      }
    } catch (error) {
      console.error("WebSocket mesajı parse edilemedi", error)
    }
  })

  const close = () => {
    if (joined) {
      const room = getRoom(roomId)
      room.delete(clientId)
      room.forEach((peerSocket, peerId) => {
        try {
          peerSocket?.send(JSON.stringify({ type: "peer-left", clientId }))
        } catch (error) {
          console.error("Peer-leave gönderilemedi", error)
        }
      })
      cleanup(roomId, clientId)
    }
  }

  ws.addEventListener("close", close)
  ws.addEventListener("error", close)
}

export default {
  async fetch(request) {
    if (request.headers.get("Upgrade") === "websocket") {
      const pair = new WebSocketPair()
      handleWebSocket(pair[1])
      return new Response(null, { status: 101, webSocket: pair[0] })
    }
    return new Response("Study Chat Signal Worker aktif", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    })
  },
}
