import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import eslint from '@rollup/plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true },
  plugins: [eslint({ include: '**/*.+(vue|js|jsx|ts|tsx)' }), createVuePlugin()]
})
