# 数码业务组件库 - Vue3版本

## 📖 项目简介

@xfsm/bcl-ui 是一个基于 Vue3 和 TypeScript 开发的现代化组件库，专为公司内部业务系统打造，提供了一系列美观、实用的 UI 组件。

### 核心特性

- 🎨 现代化设计，符合企业级应用标准
- 📦 支持按需引入和完整引入
- 🔧 完整的 TypeScript 类型支持
- 🎯 基于业务场景的专用组件
- 🛠️ 灵活的主题定制能力
- 📱 响应式设计，适配不同设备

## 🚀 项目启动步骤

### 环境要求

- Node.js >= 18
- pnpm >= 8
- Vue >= 3.5.13

### 安装依赖

```bash
# 安装项目依赖
pnpm install
```

### 开发环境

```bash
# 启动示例开发服务器
pnpm dev

# 启动文档开发服务器
pnpm docs:dev
```

### 构建项目

```bash
# 构建组件库
pnpm build:lib

# 构建组件
pnpm build:components

# 构建文档
pnpm docs:build
```

### 代码质量检查

```bash
# 运行 ESLint 检查
pnpm lint

# 运行 TypeScript 类型检查
pnpm typecheck
```

## 📁 组件开发规范

### 1. 组件的文件夹结构

组件库采用扁平化的目录结构，每个组件都有自己独立的目录，包含完整的实现文件。

```
src/
├── components/          # 组件目录
│   └── ComponentName/   # 组件文件夹（使用 PascalCase 命名）
│       ├── index.vue    # 组件实现文件
│       ├── index.ts     # 组件导出文件
│       ├── index.less   # 组件样式文件
│       └── types.ts     # 组件类型定义文件
├── styles/             # 全局样式
└── index.ts            # 组件库入口
```

**命名规范**：
- 组件文件夹：使用 PascalCase 命名法（如 `AudioPlayer`）
- 组件文件名：统一使用 `index.vue`、`index.ts` 等标准命名
- 类型定义文件：使用 `types.ts` 命名

### 2. 组件的 Type 定义

每个组件都应该有完整的 TypeScript 类型定义，包括 Props、Events、Slots 等。

#### 示例：types.ts

```typescript
// 组件 Props 类型
export interface AudioPlayerProps {
  src: string;           // 音频地址
  title?: string;        // 音频标题
  autoPlay?: boolean;    // 是否自动播放
  showControls?: boolean; // 是否显示控制栏
  theme?: 'light' | 'dark'; // 主题
}

// 组件 Events 类型
export interface AudioPlayerEmits {
  (e: 'play'): void;     // 播放事件
  (e: 'pause'): void;    // 暂停事件
  (e: 'ended'): void;    // 播放结束事件
  (e: 'timeupdate', currentTime: number): void; // 时间更新事件
}

// 组件 Slots 类型
export interface AudioPlayerSlots {
  default?: () => any;    // 默认插槽
  controlBar?: () => any; // 控制栏插槽
}
```

### 3. 组件的主题使用

组件库使用 Less 预处理器和变量系统实现主题定制能力。

#### 3.1 全局变量

全局变量定义在 `src/styles/variables.less` 文件中：

色系结构
```less
// 主色调
@color-primary: #007aff;
@color-secondary: #5856d6;
@color-success: #34c759;
@color-warning: #ff9500;
@color-error: #ff3b30;

// 中性色
@color-black: #000000;
@color-white: #ffffff;
@color-gray-50: #f9fafb;
@color-gray-100: #f3f4f6;
@color-gray-200: #e5e7eb;
@color-gray-300: #d1d5db;
@color-gray-400: #9ca3af;
@color-gray-500: #6b7280;
@color-gray-600: #4b5563;
@color-gray-700: #374151;
@color-gray-800: #1f2937;
@color-gray-900: #111827;

// 背景色
@color-background-primary: #ffffff;
@color-background-secondary: #f9fafb;
@color-background-tertiary: #f3f4f6;

// 文本色
@color-text-primary: #111827;
@color-text-secondary: #6b7280;
@color-text-tertiary: #9ca3af;
@color-text-inverse: #ffffff;

// 边框色
@color-border-primary: #e5e7eb;
@color-border-secondary: #d1d5db;
@color-border-focus: #007aff;
```

字体结构
```less
// 字体族定义
@font-family-sans: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
@font-family-mono: 'SF Mono, Monaco, Inconsolata, Roboto Mono, Consolas, "Courier New", monospace';

// 字号定义
@font-size-xs: 12px;
@font-size-sm: 14px;
@font-size-base: 16px;
@font-size-lg: 18px;
@font-size-xl: 20px;
@font-size-2xl: 24px;
@font-size-3xl: 30px;
@font-size-4xl: 36px;

// 字重定义
@font-weight-light: 300;
@font-weight-regular: 400;
@font-weight-medium: 500;
@font-weight-semibold: 600;
@font-weight-bold: 700;

// 行高定义
@line-height-tight: 1.25;
@line-height-normal: 1.5;
@line-height-relaxed: 1.75;
```

间距结构
```less
@spacing-0: 0;
@spacing-1: 4px;
@spacing-2: 8px;
@spacing-3: 12px;
@spacing-4: 16px;
@spacing-5: 20px;
@spacing-6: 24px;
@spacing-8: 32px;
@spacing-10: 40px;
@spacing-12: 48px;
@spacing-16: 64px;
@spacing-20: 80px;
@spacing-24: 96px;
```

圆角系统
```less
@radius-0: 0;
@radius-1: 4px;
@radius-2: 8px;
@radius-3: 12px;
@radius-4: 16px;
@radius-c: 50%;
```

阴影系统
```less
@shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
@shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
@shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
@shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
@shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

#### 3.2 组件中使用主题变量

在组件的样式文件中，通过 `@import` 引入全局变量并使用：

```less
// 引入全局变量
@import '../../styles/variables.less';

// 使用变量
.audio-player {
  color: @colors[text];
  background-color: @colors[background];
  padding: @spacing[md];
  font-size: @font-size[md];
}
```

### 4. 组件的书写规整格式

#### 4.1 组件实现（index.vue）

组件使用 Vue 3 Composition API 实现，遵循以下格式：

```vue
<template>
  <div class="audio-player" :class="{ 'dark-theme': theme === 'dark' }">
    <!-- 组件模板内容 -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { AudioPlayerProps, AudioPlayerEmits } from './types';

// 定义 Props
const props = withDefaults(defineProps<AudioPlayerProps>(), {
  title: '',
  autoPlay: false,
  showControls: true,
  theme: 'light'
});

// 定义 Emits
const emit = defineEmits<AudioPlayerEmits>();

// 组件逻辑
// ...
</script>

<style lang="less" scoped>
@import './index.less';
</style>
```

#### 4.2 组件导出（index.ts）

每个组件都有一个独立的导出文件，用于导出组件和类型：

```typescript
import AudioPlayer from './index.vue';
export default AudioPlayer;
export * from './types';
```

#### 4.3 组件库入口（index.ts）

组件库的入口文件用于导出所有组件：

```typescript
import AudioPlayer from './components/AudioPlayer';
import type { Component } from 'vue';

const components: Record<string, Component> = {
  AudioPlayer
};

const install = (app: any) => {
  for (const component in components) {
    app.component(component, components[component]);
  }
};

export default {
  install,
  ...components
};

export { AudioPlayer };
export * from './components/AudioPlayer/types';
```

## 🎨 代码风格规范

### ESLint 规则

项目使用 ESLint 进行代码质量检查，遵循 Vue 3 和 TypeScript 的最佳实践。

### TypeScript 规则

- 使用严格的 TypeScript 配置
- 为所有组件和函数添加类型注解
- 避免使用 `any` 类型，除非必要
- 使用接口定义复杂类型

### 提交规范

- 提交信息使用语义化提交格式
- 提交前运行 `pnpm lint` 和 `pnpm typecheck` 确保代码质量

## 🤝 贡献指南

1. **Fork 仓库**：在 GitLab 上 fork 项目仓库
2. **创建分支**：从 `main` 分支创建新的功能分支
3. **开发组件**：按照组件开发规范实现新组件
4. **编写文档**：为新组件编写详细的文档
5. **运行测试**：确保代码通过所有检查
6. **提交 PR**：创建合并请求，等待代码审查

## 📞 支持与反馈

如果您在使用组件库过程中遇到任何问题，或有任何建议和意见，欢迎通过以下方式反馈：

- **技术交流群**：xiaozhang20@kxdigit.com
- **代码仓库**：[内部 GitLab 仓库](https://git.kxdigit.com/ued/public-product/sm-bcl-ui)

## 📄 许可证

MIT License

## 📅 版本历史

### v1.0.0
- 初始版本
- 实现了 AudioPlayer 音频播放器组件
- 搭建了完整的组件库架构
- 配置了文档系统

---

<footer style="margin-top: 4rem; padding: 2rem; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 8px; text-align: center;">
  <p style="margin: 0; color: #4a5568; font-size: 14px;">
    © 2026 @xfsm/bcl-ui 组件库 | 为公司业务系统提供专业的 UI 解决方案
  </p>
</footer>
