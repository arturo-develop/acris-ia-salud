import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist'
  },
  preview: {
    port: 3000,
    host: '0.0.0.0'
  }
})
