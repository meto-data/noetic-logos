import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "dev.noetic.logos",
  appName: "Noetic Logos",
  webDir: "public",
  server: {
    url: "https://noetic-logos.pages.dev",
    cleartext: false,
    allowNavigation: [
      "noetic-logos.pages.dev",
      "*.googleapis.com",
      "*.gstatic.com",
      "cdnjs.cloudflare.com",
      "cdn.jsdelivr.net",
    ],
  },
  android: {
    allowMixedContent: false,
    webContentsDebuggingEnabled: true,
  },
}

export default config
