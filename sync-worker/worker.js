export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const key = url.pathname.slice(1).trim()

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    }

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers })

    if (!key || key.length < 4 || key.length > 64) {
      return new Response(JSON.stringify({ error: "Anahtar 4-64 karakter olmalı" }), { status: 400, headers })
    }

    if (request.method === "GET") {
      const data = await env.SYNC_DATA.get(key)
      if (!data) return new Response(JSON.stringify({ error: "Anahtar bulunamadı" }), { status: 404, headers })
      return new Response(data, { headers })
    }

    if (request.method === "PUT") {
      const body = await request.text()
      if (body.length > 512000) {
        return new Response(JSON.stringify({ error: "Veri çok büyük (max 500KB)" }), { status: 413, headers })
      }
      await env.SYNC_DATA.put(key, body, { expirationTtl: 60 * 60 * 24 * 365 })
      return new Response(JSON.stringify({ ok: true }), { headers })
    }

    if (request.method === "DELETE") {
      await env.SYNC_DATA.delete(key)
      return new Response(JSON.stringify({ ok: true }), { headers })
    }

    return new Response(JSON.stringify({ error: "Desteklenmeyen metod" }), { status: 405, headers })
  },
}
