<template>
  <div 
    class="ai-assistant" 
    :class="{ 'dark-theme': currentTheme === 'dark' }"
  >
    <!-- 标题栏 -->
    <div
      v-if="showHeader"
      class="ai-assistant-header"
    >
      <slot name="header">
        <div class="header-title">
          <svg
            class="ai-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          {{ title }}
        </div>
      </slot>
      <button 
        class="theme-toggle" 
        aria-label="Toggle theme"
        @click="toggleTheme"
      >
        <svg
          v-if="currentTheme === 'light'"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <svg
          v-else
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle
            cx="12"
            cy="12"
            r="5"
          />
          <line
            x1="12"
            y1="1"
            x2="12"
            y2="3"
          />
          <line
            x1="12"
            y1="21"
            x2="12"
            y2="23"
          />
          <line
            x1="4.22"
            y1="4.22"
            x2="5.64"
            y2="5.64"
          />
          <line
            x1="18.36"
            y1="18.36"
            x2="19.78"
            y2="19.78"
          />
          <line
            x1="1"
            y1="12"
            x2="3"
            y2="12"
          />
          <line
            x1="21"
            y1="12"
            x2="23"
            y2="12"
          />
          <line
            x1="4.22"
            y1="19.78"
            x2="5.64"
            y2="18.36"
          />
          <line
            x1="18.36"
            y1="5.64"
            x2="19.78"
            y2="4.22"
          />
        </svg>
      </button>
    </div>

    <!-- 消息列表 -->
    <div
      ref="messagesContainer"
      class="ai-assistant-messages"
    >
      <slot>
        <template
          v-for="message in messages"
          :key="message.id"
        >
          <slot
            name="message"
            :message="message"
          >
            <div 
              class="message-item" 
              :class="message.sender === 'user' ? 'user-message' : 'ai-message'"
            >
              <div class="message-content">
                {{ message.content }}
              </div>
              <div class="message-time">
                {{ formatTime(message.timestamp) }}
                <span
                  v-if="message.status"
                  class="message-status"
                  :class="message.status"
                >
                  {{ message.status === 'sending' ? '发送中...' : message.status === 'sent' ? '已发送' : '发送失败' }}
                </span>
              </div>
            </div>
          </slot>
        </template>
        <div
          v-if="isLoading"
          class="loading-indicator"
        >
          <slot name="loading">
            <div class="loading-spinner" />
            <span>AI 正在思考...</span>
          </slot>
        </div>
      </slot>
    </div>

    <!-- 输入区域 -->
    <div
      v-if="showInput"
      class="ai-assistant-input"
    >
      <slot name="input">
        <input
          ref="inputRef"
          v-model="inputValue"
          type="text"
          :placeholder="placeholder"
          :disabled="disabled || isLoading"
          @keyup.enter="handleSendMessage"
        >
        <button 
          :disabled="!inputValue.trim() || disabled || isLoading"
          @click="handleSendMessage"
        >
          发送
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import type { AIAssistantProps, AIAssistantEmits, AIAssistantInstance } from './types';

// 定义 Props
const props = withDefaults(defineProps<AIAssistantProps>(), {
  title: 'AI 小助手',
  initialMessages: () => [],
  showHeader: true,
  showInput: true,
  theme: 'light',
  placeholder: '请输入您的问题...',
  maxMessages: 50,
  disabled: false
});

// 定义 Emits
const emit = defineEmits<AIAssistantEmits>();

// Refs
const messagesContainer = ref<HTMLElement>();
const inputRef = ref<HTMLInputElement>();
const messages = ref<typeof props.initialMessages>([...props.initialMessages]);
const inputValue = ref('');
const isLoading = ref(false);
const currentTheme = ref(props.theme);

// 格式化时间
const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
};

// 生成唯一 ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// 切换主题
const toggleTheme = () => {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

// 设置主题
const setTheme = (theme: 'light' | 'dark') => {
  currentTheme.value = theme;
  emit('theme-change', theme);
};

// 获取当前主题
const getTheme = (): 'light' | 'dark' => {
  return currentTheme.value;
};

// 发送消息
const sendMessage = (content: string): string => {
    if (!content.trim() || props.disabled) return '';

    const messageId = generateId();
    const newMessage = {
      id: messageId,
      sender: 'user' as const,
      content: content.trim(),
      timestamp: Date.now(),
      status: 'sending' as const
    };

  messages.value.push(newMessage);
  emit('send-message', content.trim());
  emit('message-status', messageId, 'sending');

  // 模拟发送成功
  setTimeout(() => {
    const messageIndex = messages.value.findIndex(m => m.id === messageId);
    if (messageIndex !== -1) {
      messages.value[messageIndex].status = 'sent';
      emit('message-status', messageId, 'sent');
    }
  }, 500);

  // 限制消息数量
  if (messages.value.length > props.maxMessages) {
    messages.value = messages.value.slice(-props.maxMessages);
  }

  scrollToBottom();
  return messageId;
};

// 接收消息
const receiveMessage = (content: string): typeof messages.value[0] => {
  const newMessage = {
    id: generateId(),
    sender: 'ai' as const,
    content,
    timestamp: Date.now()
  };

  messages.value.push(newMessage);
  emit('receive-message', newMessage);

  // 限制消息数量
  if (messages.value.length > props.maxMessages) {
    messages.value = messages.value.slice(-props.maxMessages);
  }

  scrollToBottom();
  return newMessage;
};

// 处理发送消息
const handleSendMessage = () => {
  if (!inputValue.value.trim() || props.disabled || isLoading.value) return;

  const content = inputValue.value;
  inputValue.value = '';
  sendMessage(content);

  // 模拟 AI 回复
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    // 简单的回复逻辑
    const reply = getAIReply(content);
    receiveMessage(reply);
  }, 1000);
};

// 简单的 AI 回复逻辑
const getAIReply = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('你好') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return '你好！我是你的 AI 小助手，有什么可以帮助你的吗？';
  } else if (lowerMessage.includes('名字') || lowerMessage.includes('叫什么')) {
    return '我是 AI 小助手，很高兴为你服务！';
  } else if (lowerMessage.includes('天气')) {
    return '抱歉，我目前还不支持天气查询功能。';
  } else if (lowerMessage.includes('时间')) {
    return `当前时间是 ${new Date().toLocaleString('zh-CN')}`;
  } else if (lowerMessage.includes('帮助') || lowerMessage.includes('help')) {
    return '我可以回答你的问题，和你聊天，或者提供一些基本信息。请问有什么我可以帮助你的？';
  } else {
    return `你说："${message}"\n\n我是一个简单的 AI 助手，正在学习中。请尝试问我一些其他问题，比如：\n- 你好\n- 你叫什么名字\n- 现在几点了\n- 帮助`;
  }
};

// 清空消息
const clearMessages = () => {
  messages.value = [];
};

// 获取消息列表
const getMessages = () => {
  return messages.value;
};

// 滚动到底部
const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// 监听初始消息变化
watch(
  () => props.initialMessages,
  (newMessages) => {
    messages.value = [...newMessages];
    scrollToBottom();
  },
  { deep: true }
);

// 组件挂载后滚动到底部
onMounted(() => {
  scrollToBottom();
});

// 暴露组件实例方法
defineExpose<AIAssistantInstance>({
  sendMessage,
  receiveMessage,
  clearMessages,
  setTheme,
  getTheme,
  getMessages,
  scrollToBottom
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
