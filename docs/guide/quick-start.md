# 快速开始

## 安装

### 使用包管理器

```bash
# 使用 npm
npm install @xfsm/bcl-ui

# 使用 yarn
yarn add @xfsm/bcl-ui

# 使用 pnpm
pnpm add @xfsm/bcl-ui
```

### 引入样式

```js
// 引入全部样式
import '@xfsm/bcl-ui/dist/styles/index.css'
```

## 全局引入

在 main.ts 中全局引入组件库：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import SmBclUi from '@xfsm/bcl-ui'
import '@xfsm/bcl-ui/dist/styles/index.css'

const app = createApp(App)
app.use(SmBclUi)
app.mount('#app')
```

## 按需引入

在需要使用的组件中按需引入：

```vue
<template>
  <AudioPlayer 
    src="https://example.com/audio.mp3"
    title="示例音乐"
    artist="示例艺术家"
    cover="https://example.com/cover.jpg"
  />
</template>

<script setup lang="ts">
import { AudioPlayer } from '@xfsm/bcl-ui'
import '@xfsm/bcl-ui/dist/styles/index.css'
</script>
```

## TypeScript 支持

组件库内置了 TypeScript 类型定义，无需额外安装。

```ts
import type { AudioPlayerProps } from '@xfsm/bcl-ui'

const props: AudioPlayerProps = {
  src: 'https://example.com/audio.mp3',
  title: '示例音乐'
}
```

## 开发环境

### 启动开发服务器

```bash
npm run dev
```

### 构建组件库

```bash
npm run build
```

### 构建文档

```bash
npm run docs:build
```

## 浏览器兼容性

- Chrome >= 80
- Firefox >= 78
- Safari >= 13
- Edge >= 80
