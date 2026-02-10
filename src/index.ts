// 导出所有组件
import AudioPlayer from './components/AudioPlayer/index.vue'
import AIAssistant from './components/AIAssistant/index.vue'
import type { Component } from 'vue'

// 导出样式
import './styles/index.less'

// 组件列表
const components: Record<string, Component> = {
  AudioPlayer,
  AIAssistant
}

// 安装函数
const install = (app: any) => {
  for (const component in components) {
    app.component(component, components[component])
  }
}

// 导出默认值
export default {
  install,
  ...components
}

// 单独导出组件
export { AudioPlayer, AIAssistant }
export * from './components/AIAssistant/types'
