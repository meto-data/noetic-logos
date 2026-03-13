import { QuartzEmitterPlugin } from "../types"
import { FullSlug } from "../../util/path"
import { write } from "./helpers"

type PWAOptions = {
  shortName?: string
  description?: string
}

export const PWA: QuartzEmitterPlugin<PWAOptions> = (opts) => ({
  name: "PWA",
  async *emit(ctx) {
    const pageTitle = ctx.cfg.configuration.pageTitle
    const description =
      opts?.description ?? `${pageTitle} notlarini ana ekrana kurulabilir uygulama olarak kullan.`
    const shortName = opts?.shortName ?? pageTitle.slice(0, 12)
    const buildId = ctx.buildId

    const manifest = JSON.stringify(
      {
        id: ".",
        name: pageTitle,
        short_name: shortName,
        description,
        lang: ctx.cfg.configuration.locale ?? "tr-TR",
        dir: "ltr",
        start_url: ".",
        scope: ".",
        display: "standalone",
        display_override: ["standalone", "minimal-ui", "browser"],
        background_color: "#f8fafc",
        theme_color: "#2563eb",
        icons: [
          {
            src: "static/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "static/icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      null,
      2,
    )

    const offlineHtml = `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${pageTitle}</title>
    <style>
      :root {
        color-scheme: light dark;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        background: #f8fafc;
        color: #0f172a;
        font: 16px/1.5 system-ui, sans-serif;
      }

      main {
        max-width: 28rem;
        border: 1px solid rgba(148, 163, 184, 0.35);
        border-radius: 20px;
        padding: 24px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
      }

      h1 {
        margin: 0 0 0.75rem;
        font-size: 1.4rem;
      }

      p {
        margin: 0;
      }

      @media (prefers-color-scheme: dark) {
        body {
          background: #020617;
          color: #e2e8f0;
        }

        main {
          background: rgba(15, 23, 42, 0.92);
          border-color: rgba(100, 116, 139, 0.45);
          box-shadow: none;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Baglanti yok</h1>
      <p>Notlar tekrar baglanti geldiginde otomatik olarak guncellenecek.</p>
    </main>
  </body>
</html>
`

    const sw = `const PWA_VERSION = "pwa-${buildId}";
const SHELL_CACHE = \`\${PWA_VERSION}-shell\`;
const RUNTIME_CACHE = \`\${PWA_VERSION}-runtime\`;
const CDN_CACHE = \`\${PWA_VERSION}-cdn\`;
const CDN_HOSTS = new Set([
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "cdnjs.cloudflare.com",
  "cdn.jsdelivr.net",
]);

const toScopedUrl = (path) => new URL(path, self.registration.scope).toString();
const OFFLINE_URL = toScopedUrl("offline.html");
const PRECACHE_URLS = [
  OFFLINE_URL,
  toScopedUrl("manifest.webmanifest"),
  toScopedUrl("static/icon-192.png"),
  toScopedUrl("static/icon.png"),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => ![SHELL_CACHE, RUNTIME_CACHE, CDN_CACHE].includes(key))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

const cacheFirst = async (request, cacheName) => {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) {
    void fetch(request)
      .then((response) => {
        if (response && (response.ok || response.type === "opaque")) {
          cache.put(request, response.clone());
        }
      })
      .catch(() => undefined);
    return cached;
  }

  const response = await fetch(request);
  if (response && (response.ok || response.type === "opaque")) {
    cache.put(request, response.clone());
  }
  return response;
};

const networkFirst = async (request) => {
  const cache = await caches.open(RUNTIME_CACHE);

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return (await cache.match(request)) || (await caches.match(OFFLINE_URL));
  }
};

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;
  const isDocument = request.mode === "navigate";
  const isStaticAsset =
    sameOrigin &&
    (url.pathname.includes("/static/") ||
      /\\.(?:css|js|mjs|png|jpg|jpeg|svg|gif|webp|ico|woff2?|json)$/i.test(url.pathname));

  if (isDocument) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isStaticAsset) {
    event.respondWith(cacheFirst(request, RUNTIME_CACHE));
    return;
  }

  if (CDN_HOSTS.has(url.hostname)) {
    event.respondWith(cacheFirst(request, CDN_CACHE));
  }
});
`

    yield write({
      ctx,
      slug: "manifest" as FullSlug,
      ext: ".webmanifest",
      content: manifest,
    })

    yield write({
      ctx,
      slug: "offline" as FullSlug,
      ext: ".html",
      content: offlineHtml,
    })

    yield write({
      ctx,
      slug: "sw" as FullSlug,
      ext: ".js",
      content: sw,
    })
  },
  async *partialEmit() {},
})
