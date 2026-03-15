# Noetic Sync Worker

Ayarları, vurguları ve modül verilerini cihazlar arası senkronize eden Cloudflare Worker.

## Kurulum

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages → KV → "Create a namespace" → İsim: `noetic-sync-data`
2. Oluşan KV namespace ID'sini `wrangler.toml` dosyasındaki `id = ""` kısmına yapıştır
3. Deploy et:

```bash
cd sync-worker
npx wrangler deploy
```

4. Deploy edilen Worker URL'ini (örn: `https://noetic-sync.KULLANICI.workers.dev`) `quartz.config.ts` dosyasındaki `syncApiUrl` alanına yaz.

## API

- `GET /:key` — Anahtara bağlı verileri getir
- `PUT /:key` — Verileri kaydet (body: JSON)
- `DELETE /:key` — Anahtarı sil

Ücretsiz plan: 100.000 istek/gün, 1 GB KV depolama.
