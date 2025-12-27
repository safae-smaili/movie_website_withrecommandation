// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // base:"/movies/",
//   base: process.env.VITE_BASE_PATH || "/movies/",

// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Important pour Vercel
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
