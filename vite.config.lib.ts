import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      // outputDir: 'dist/types',
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SmBclUi',
      fileName: (format) => `sm-bcl-ui.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: 'theme/[name].[ext]',
        banner: (chunk) => {
          return ['index'].includes(chunk.name) ? `import "./theme/${chunk.name}.css"` : ''
        }
      }
    },
    outDir: 'dist'
  }
})
