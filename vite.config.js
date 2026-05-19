import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    }
  },
  preview: {
    port: 80,
    host: '0.0.0.0',
    strictPort: true
  }
})
