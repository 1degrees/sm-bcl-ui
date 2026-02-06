import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// 组件列表
const components = ['AudioPlayer']

const configs = components.map(component => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, `src/components/${component}/index.ts`),
        name: `${component}`,
        fileName: (format) => `${component}.${format}.js`,
        formats: ['es', 'cjs']
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },
      outDir: resolve(__dirname, `dist/components/${component}`)
    }
  }
})

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: 'dist/types/components',
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  ...configs[0] // 暂时使用第一个组件的配置，后续可扩展为批量构建
})
