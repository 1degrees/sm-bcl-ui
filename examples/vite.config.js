import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  server: {
    port: 8080,
    proxy: {
      '/airesearch': {
        target: 'http://172.31.243.56:3391',
        changeOrigin: true
      },
    }
  },
  resolve: {
    alias: {
      '@xfsm/bcl-ui': resolve(__dirname, '../src/index.ts'),
      '@sandboxes': resolve(__dirname, 'sandboxes'),
      '@': resolve(__dirname, 'src'),
    }
  },
  plugins: [vue(), vueJsx()],
  define: {
    'process.env': { ...process.env }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always'
      }
    }
  },
  build: {
    minify: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    cssCodeSplit: false
  },
  base: './'
})
