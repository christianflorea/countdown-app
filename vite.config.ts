import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://<user>.github.io/countdown-app/ on GitHub Pages.
export default defineConfig({
  base: '/countdown-app/',
  plugins: [react()],
})
