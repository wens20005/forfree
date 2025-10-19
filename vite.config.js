import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/forfree/',
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
})