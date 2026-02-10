# AudioPlayer 音频播放器

## 介绍

AudioPlayer 是一个苹果风格的音频播放器组件，支持音频播放、暂停、进度控制等功能。

## 基础用法

### 基本示例

<preview path="@demo/AudioPlayer/src/base.vue" title="AudioPlayer 音频播放器" description="" />

### 主调色调整
<preview path="@demo/AudioPlayer/src/color.vue" title="AudioPlayer 音频播放器" description="" />

## API

### Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | `string` | - | 音频文件地址，必填 |
| title | `string` | - | 音频标题 |
| artist | `string` | - | 音频艺术家 |
| cover | `string` | - | 音频封面图片地址 |
| autoplay | `boolean` | `false` | 是否自动播放 |
| loop | `boolean` | `false` | 是否循环播放 |
| muted | `boolean` | `false` | 是否静音 |
| volume | `number` | `1` | 音量，范围 0-1 |
| preload | `string` | `'metadata'` | 预加载方式，可选值：`'none'`、`'metadata'`、`'auto'` |

### Events

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| play | - | 音频开始播放时触发 |
| pause | - | 音频暂停时触发 |
| ended | - | 音频播放结束时触发 |
| timeupdate | `time: number` | 音频播放时间更新时触发，参数为当前播放时间（秒） |
| volumechange | `volume: number` | 音量变化时触发，参数为当前音量 |
| error | `error: Error` | 音频加载或播放出错时触发 |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| cover | 自定义封面内容 |
| title | 自定义标题内容 |
| artist | 自定义艺术家内容 |
| controls | 自定义控制按钮区域 |

### Methods

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| play | - | `void` | 开始播放音频 |
| pause | - | `void` | 暂停播放音频 |
| toggle | - | `void` | 切换播放/暂停状态 |
| seek | `time: number` | `void` | 跳转到指定时间（秒） |
| setVolume | `volume: number` | `void` | 设置音量，范围 0-1 |
| setMuted | `muted: boolean` | `void` | 设置静音状态 |

## 主题变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| --audio-player-primary-color | `#007aff` | 主色调，用于进度条、播放按钮等 |
| --audio-player-bg-color | `#ffffff` | 背景色 |
| --audio-player-text-color | `#111827` | 文本颜色 |
| --audio-player-secondary-text-color | `#6b7280` | 次要文本颜色 |
| --audio-player-border-color | `#e5e7eb` | 边框颜色 |
| --audio-player-shadow | `0 1px 3px 0 rgba(0, 0, 0, 0.1)` | 阴影 |
| --audio-player-border-radius | `8px` | 圆角 |
| --audio-player-height | `80px` | 播放器高度 |
| --audio-player-padding | `16px` | 内边距 |
