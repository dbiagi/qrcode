import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  // GitHub Pages serves the app from /qrcode/; Docker/nginx serves it from /
  base: process.env.GITHUB_PAGES ? '/qrcode/' : '/',
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
