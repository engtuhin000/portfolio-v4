import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',              // 👈 root directory explicitly set
  base: './',             // 👈 relative base path for Netlify
  build: {
    outDir: 'dist',       // 👈 ensure output folder name
  },
})
