# D1 Migration - Deploy Talimatları

KV'den D1'e geçiş yapıldı. 100x daha fazla write limiti! (1K → 100K/gün)

## Adımlar

### 1. D1 Database Oluştur
```bash
cd ~/noetic-papers/cloudflare-worker
wrangler d1 create noetic-analytics
```

Çıktıdan `database_id`'yi kopyala.

### 2. wrangler.toml'u Güncelle
`wrangler.toml` dosyasında `YOUR_DATABASE_ID_HERE` yerine aldığın ID'yi yaz.

### 3. Schema'yı Uygula
```bash
wrangler d1 execute noetic-analytics --file=./schema.sql
```

### 4. Deploy Et
```bash
wrangler deploy
```

### 5. Test Et
```bash
curl https://noetic-presence.mselayet.workers.dev/health
```

Çıktı: `{"status":"ok","timestamp":...,"version":"3.0-d1"}`

---

## Önemli Notlar

- KV namespace'leri artık kullanılmıyor
- CORS tüm domain'lere açık (geliştirme için)
- Production'da CORS'u `noetic-logos.pages.dev` ile sınırla

## Limitler (Free Tier)

- **Reads:** 5 milyon / gün
- **Writes:** 100,000 / gün
- **Storage:** 5 GB

Eskiye göre 100 kat daha fazla!
