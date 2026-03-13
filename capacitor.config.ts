import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "dev.noetic.logos",
  appName: "Noetic Logos",
  webDir: "capacitor-shell",
  server: {
    url: "https://meto-data.github.io/noetic-logos",
    cleartext: false,
    allowNavigation: [
      "meto-data.github.io",
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
