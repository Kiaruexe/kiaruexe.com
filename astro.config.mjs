import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@astrojs/react"
import { defineConfig } from "astro/config"

const root = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig({
  site: "https://kiaruexe.com",
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.join(root, "src"),
      },
    },
  },
  integrations: [react()],
})
