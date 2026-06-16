// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/travel-agency-voyagley/',
  // Optional: if you had path aliases in jsconfig/tsconfig
  // resolve: {
  //   alias: {
  //     '@': '/src'
  //   }
  // }
  server: {
    port: 5173,
    host: true
  }
})