# AGENTS.md

## Cursor Cloud specific instructions

This is a **Quartz v4.5.1** static site generator (digital garden) — a single-product Node.js codebase with no backend services or databases.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Dev server | `npx quartz build --serve` | 8080 | Builds site + serves with WebSocket hot-reload |

### Key commands

- **Install deps**: `npm ci`
- **Dev server**: `npx quartz build --serve` (serves at `http://localhost:8080`)
- **Tests**: `npm test` (runs `tsx --test`)
- **Type check + format**: `npm run check` (runs `tsc --noEmit && npx prettier . --check`)
- **Format fix**: `npm run format`
- **Full rebuild**: `npm run build` (clears `.quartz-cache` first)

### Caveats

- `npm run check` has pre-existing TypeScript errors and Prettier warnings in the codebase; these are not regressions.
- The build processes ~1165 Markdown files and takes ~11 seconds; LaTeX-related warnings during build are expected and harmless.
- Node.js >= 22 is required (`.node-version` specifies `v22.16.0`).
- No external services or environment variables are required for core dev. `CLOUDFLARE_BEACON_TOKEN` and `STUDY_CHAT_SIGNAL_URL` are optional.
