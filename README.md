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
- 🌍 国际化支持，内置中英文语言包

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
  // 音频地址
  src: string;
  // 音频标题
  title?: string;
  // 是否自动播放
  autoPlay?: boolean;
  // 是否显示控制栏
  showControls?: boolean;
  // 主题
  theme?: 'light' | 'dark';
}

// 组件 Events 类型
export interface AudioPlayerEmits {
  // 播放事件
  (e: 'play'): void;     
  // 暂停事件
  (e: 'pause'): void;    
  // 播放结束事件
  (e: 'ended'): void;    
  // 时间更新事件
  (e: 'timeupdate', currentTime: number): void; 
}

// 组件 Slots 类型
export interface AudioPlayerSlots {
  // 默认插槽
  default?: () => any;    
  // 控制栏插槽
  controlBar?: () => any; 
}

// 组件内置方法
export interface AudioPlayerInstance {
  // 切换播放/暂停状态
  toggle: () => void;
  // 跳转到指定时间（秒）
  seek: (time: number) => void;
  // 设置音量，范围 0-1
  setVolume: (volume: number) => void;
  // 设置静音状态
  setMuted: (muted: boolean) => void;
  // 获取当前播放时间（秒）
  getCurrentTime: () => number;
  // 获取音频总时长（秒）
  getDuration: () => number;
  // 获取当前播放状态
  getPlaying: () => boolean;
}

```

### 3. 组件的如何定义主题

组件库使用 css 变量系统完成主题定制能力。

#### 3.1 组件主题变量token定义
eg: audio-player
```less
// 组件主题变量token定义
// 音频播放器容器
.audio-player {
  --audio-player-primary-color: #007aff;
  --audio-player-bg-color: #ffffff;
  --audio-player-text-color: #111827;
  --audio-player-secondary-text-color: #6b7280;
  --audio-player-border-color: #e5e7eb;
  --audio-player-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --audio-player-border-radius: 6px;
  --audio-player-height: 80px;
  --audio-player-padding: 16px;

  // 控制栏样式
  .control-bar {
    color: var(--audio-player-text-color);
  }
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

### 5. 组件的国际化支持

组件库内置了国际化支持，使用 Vue I18n 实现，默认提供中英文语言包。

#### 5.1 国际化文件结构

```
src/utils/i18n/
├── cn.ts      # 中文语言包
├── en.ts      # 英文语言包
└── index.ts   # 国际化配置和初始化
```

#### 5.2 语言包示例

##### 中文语言包（cn.ts）

```typescript
export default {
  assistant: {
    title: 'AI 小助手',
    send: '发送'
  },
  audioPlayer: {
    title: '音频播放器',
    artist: '艺术家'
  }
};
```

##### 英文语言包（en.ts）

```typescript
export default {
  assistant: {
    title: 'AI Assistant',
    send: 'Send'
  },
  audioPlayer: {
    title: 'Audio Player',
    artist: 'Artist'
  }
};
```

#### 5.3 在项目中使用国际化

```vue
<template>
  <div class="ai-assistant">
    <h2>{{ t('assistant.title') }}</h2>
    <button>{{ t('assistant.send') }}</button>
  </div>
</template>

<script setup lang="ts">
import { initI18n, i18n } from '@xfsm/bcl-ui';
const { en, cn } = i18n;
// 重置组件库国际化配置, 添加日语语言包
initI18n({en, cn, ja: { assistant: { title: 'AI アシスタント', send: '送信' }}});

// 在组件或方法中使用国际化
const { t } = i18n.global;
t('assistant.title')
</script>
```
#### 5.4 切换语言

```typescript
import { i18n } from '@xfsm/bcl-ui';

const { locale } = i18n.global;

// 切换到英文
locale.value = 'en';

// 切换到中文
locale.value = 'cn';
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
