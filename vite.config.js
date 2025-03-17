import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src')
    }
  },
  plugins: [svgr(),react()],
})
