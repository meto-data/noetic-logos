import { spawn } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: false,
      ...options,
    })

    child.on("exit", (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`))
      }
    })

    child.on("error", reject)
  })
}

async function main() {
  const rootDir = process.cwd()
  const localSdkRoot = path.join(rootDir, ".android-sdk")
  const gradleUserHome = path.join(rootDir, ".gradle-home")
  const java25Home = "/usr/lib/jvm/java-25-openjdk"

  const env = { ...process.env }
  if (fs.existsSync(localSdkRoot)) {
    env.ANDROID_HOME = localSdkRoot
    env.ANDROID_SDK_ROOT = localSdkRoot
  }

  env.GRADLE_USER_HOME = gradleUserHome

  if (fs.existsSync(java25Home)) {
    env.JAVA_HOME = java25Home
    env.PATH = `${path.join(java25Home, "bin")}:${env.PATH ?? ""}`
  }

  await run("npx", ["cap", "sync", "android"])
  await run("./gradlew", ["assembleDebug"], {
    cwd: "android",
    env,
  })
  console.log("\nAPK hazir: android/app/build/outputs/apk/debug/app-debug.apk")
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
