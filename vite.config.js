import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true // Add this to allow external access
  },
  resolve: {
    alias: {
      // Ensure proper path resolution
      '@': '/src'
    }
  },
  build: {
    // Add build optimizations
    minify: 'esbuild',
    sourcemap: false
  }
})