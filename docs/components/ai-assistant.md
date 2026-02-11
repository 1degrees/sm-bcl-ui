# AIAssistant AI 小助手

## 介绍

AIAssistant 是一个智能 AI 助手组件，支持消息发送、接收、主题切换等功能，可用于实现智能客服、聊天机器人等场景。

## 基础用法

### 基本示例

<preview path="@demo/AIAssistant/src/base.vue" title="AIAssistant 智能助手" description="" />

### 自定义主题

<preview path="@demo/AIAssistant/src/theme.vue" title="AIAssistant 智能助手" description="" />

### 自定义标题

<preview path="@demo/AIAssistant/src/title.vue" title="AIAssistant 智能助手" description="" />

### 禁用状态

<preview path="@demo/AIAssistant/src/disable.vue" title="AIAssistant 智能助手" description="" />


## API

### Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `string` | `'AI 小助手'` | 组件标题 |
| initialMessages | `Array<AIMessage>` | `[]` | 初始消息列表 |
| showHeader | `boolean` | `true` | 是否显示标题栏 |
| showInput | `boolean` | `true` | 是否显示输入框 |
| theme | `'light' | 'dark'` | `'light'` | 主题 |
| placeholder | `string` | `'请输入您的问题...'` | 输入框占位文本 |
| maxMessages | `number` | `50` | 最大消息历史记录数量 |
| disabled | `boolean` | `false` | 是否禁用 |

### Events

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| send-message | `message: string` | 发送消息时触发 |
| receive-message | `message: AIMessage` | 接收消息时触发 |
| message-status | `messageId: string, status: 'sending' | 'sent' | 'error'` | 消息状态更新时触发 |
| theme-change | `theme: 'light' | 'dark'` | 主题变更时触发 |
| error | `error: Error` | 错误时触发 |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 默认插槽，可用于自定义消息列表 |
| header | 标题插槽，可用于自定义标题栏 |
| input | 输入框插槽，可用于自定义输入区域 |
| message | 消息插槽，可用于自定义消息项，参数为 `{ message: AIMessage }` |
| loading | 加载状态插槽，可用于自定义加载状态 |

### Methods

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| sendMessage | `content: string` | `string` | 发送消息，返回消息 ID |
| receiveMessage | `content: string` | `AIMessage` | 接收消息，返回消息对象 |
| clearMessages | - | `void` | 清空消息 |
| setTheme | `theme: 'light' | 'dark'` | `void` | 设置主题 |
| getTheme | - | `'light' | 'dark'` | 获取当前主题 |
| getMessages | - | `Array<AIMessage>` | 获取消息列表 |
| scrollToBottom | - | `void` | 滚动到底部 |

## 类型定义

### AIMessage

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 消息 ID |
| sender | `'user' | 'ai'` | 发送者类型 |
| content | `string` | 消息内容 |
| timestamp | `number` | 消息时间戳 |
| status | `'sending' | 'sent' | 'error' | undefined` | 消息状态（仅用户消息） |

## 主题变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| --ai-assistant-bg-color | `#ffffff` | 背景色 |
| --ai-assistant-text-color | `#111827` | 文本颜色 |
| --ai-assistant-header-bg-color | `#f9fafb` | 标题栏背景色 |
| --ai-assistant-header-border-color | `#e5e7eb` | 标题栏边框颜色 |
| --ai-assistant-messages-bg-color | `#f3f4f6` | 消息列表背景色 |
| --ai-assistant-input-bg-color | `#f9fafb` | 输入区域背景色 |
| --ai-assistant-input-border-color | `#e5e7eb` | 输入区域边框颜色 |
| --ai-assistant-user-message-bg-color | `#007aff` | 用户消息背景色 |
| --ai-assistant-user-message-text-color | `#ffffff` | 用户消息文本颜色 |
| --ai-assistant-ai-message-bg-color | `#ffffff` | AI 消息背景色 |
| --ai-assistant-ai-message-text-color | `#111827` | AI 消息文本颜色 |
| --ai-assistant-button-bg-color | `#007aff` | 按钮背景色 |
| --ai-assistant-button-text-color | `#ffffff` | 按钮文本颜色 |
| --ai-assistant-border-radius | `16px` | 圆角 |
| --ai-assistant-shadow | `0 10px 15px -3px rgba(0, 0, 0, 0.1)` | 阴影 |

## 暗色主题变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| --ai-assistant-bg-color | `#111827` | 背景色 |
| --ai-assistant-text-color | `#ffffff` | 文本颜色 |
| --ai-assistant-header-bg-color | `#1f2937` | 标题栏背景色 |
| --ai-assistant-header-border-color | `#374151` | 标题栏边框颜色 |
| --ai-assistant-messages-bg-color | `#111827` | 消息列表背景色 |
| --ai-assistant-input-bg-color | `#111827` | 输入区域背景色 |
| --ai-assistant-input-border-color | `#374151` | 输入区域边框颜色 |
| --ai-assistant-user-message-bg-color | `#1f2937` | 用户消息背景色 |
| --ai-assistant-user-message-text-color | `#ffffff` | 用户消息文本颜色 |
| --ai-assistant-ai-message-bg-color | `#1f2937` | AI 消息背景色 |
| --ai-assistant-ai-message-text-color | `#ffffff` | AI 消息文本颜色 |
| --ai-assistant-button-bg-color | `#007aff` | 按钮背景色 |
| --ai-assistant-button-text-color | `#ffffff` | 按钮文本颜色 |
