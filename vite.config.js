import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true },
  plugins: [
    checker({
      eslint: { lintCommand: 'eslint "./src/**/*.{vue,js,jsx,ts,tsx}"' }
    }),
    createVuePlugin()
  ]
})
