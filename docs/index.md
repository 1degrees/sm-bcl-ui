# 数码业务组件库 - Vue3版本

## 简介

@xfsm/bcl-ui 是一个基于 Vue3 和 TypeScript 开发的组件库，提供了一系列美观、实用的 UI 组件，适用于各种 Vue3 项目。

## 特性

- 📦 基于 Vue3 组合式 API 开发
- 🎨 支持自定义主题
- 🔧 完整的 TypeScript 类型支持
- 📖 详细的文档和示例
- 🚀 快速的开发体验

## 安装

```bash
# 使用 npm
npm install @xfsm/bcl-ui

# 使用 yarn
yarn add @xfsm/bcl-ui

# 使用 pnpm
pnpm add @xfsm/bcl-ui
```

## 快速开始

### 全局引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import SmBclUi from '@xfsm/bcl-ui'
import '@xfsm/bcl-ui/dist/styles/index.css'

const app = createApp(App)
app.use(SmBclUi)
app.mount('#app')
```

### 按需引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { AudioPlayer } from '@xfsm/bcl-ui'
import '@xfsm/bcl-ui/dist/styles/index.css'

const app = createApp(App)
app.component('AudioPlayer', AudioPlayer)
app.mount('#app')
```

## 浏览器支持

- Chrome >= 80
- Firefox >= 78
- Safari >= 13
- Edge >= 80

## 贡献

欢迎贡献代码，提交 Issue 或 Pull Request。

## 许可证

MIT
