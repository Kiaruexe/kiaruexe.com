import { spawnSync } from "node:child_process"
import { existsSync, mkdirSync, cpSync, rmSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { tmpdir } from "node:os"
import process from "node:process"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const isWindows = process.platform === "win32"

function run(cmd, args, opts = {}) {
  return spawnSync(cmd, args, {
    stdio: "inherit",
    shell: true,
    env: process.env,
    ...opts,
  })
}

function ensureWasiFallback() {
  const wasiDir = join(root, "node_modules", "@bruits", "satteri-wasm32-wasi")
  const wasiEntry = join(wasiDir, "satteri_napi.wasi.cjs")
  const wasmRuntime = join(root, "node_modules", "@napi-rs", "wasm-runtime")

  process.env.NAPI_RS_FORCE_WASI ??= "true"

  if (!existsSync(wasiEntry)) {
    const packDir = join(tmpdir(), "satteri-wasi-pack")
    mkdirSync(packDir, { recursive: true })
    const pack = run("npm", ["pack", "@bruits/satteri-wasm32-wasi@0.10.5"], {
      cwd: packDir,
      stdio: "pipe",
      encoding: "utf8",
    })
    if (pack.status !== 0) {
      console.error("Failed to download satteri WASI fallback.")
      process.exit(pack.status ?? 1)
    }
    const tgz = (pack.stdout || "").trim().split(/\r?\n/).pop()
    run("tar", ["-xf", tgz], { cwd: packDir })
    mkdirSync(wasiDir, { recursive: true })
    cpSync(join(packDir, "package"), wasiDir, { recursive: true })
    rmSync(join(packDir, tgz), { force: true })
  }

  if (!existsSync(wasmRuntime)) {
    const install = run("npm", ["install", "@napi-rs/wasm-runtime", "--no-save"], {
      cwd: root,
    })
    if (install.status !== 0) process.exit(install.status ?? 1)
  }
}

// Windows Application Control can block satteri's native .node binary.
if (isWindows) ensureWasiFallback()

const result = run("astro", process.argv.slice(2), { cwd: root })
process.exit(result.status ?? 1)
