import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@xfsm/bcl-ui': resolve(__dirname, '../../', './src/index.ts'),
      '@': resolve(__dirname, './src'),
    },
  },
})
