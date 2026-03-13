import { spawn } from "node:child_process"

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
  await run("npx", ["cap", "sync", "android"])
  await run("./gradlew", ["assembleDebug"], { cwd: "android" })
  console.log("\nAPK hazir: android/app/build/outputs/apk/debug/app-debug.apk")
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
