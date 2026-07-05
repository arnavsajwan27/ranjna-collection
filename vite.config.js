import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from GitHub Pages at /ranjna-collection/ in production
  base: process.env.NODE_ENV === 'production' ? '/ranjna-collection/' : '/',
  plugins: [react()],
  server: { port: 5175 },
})
