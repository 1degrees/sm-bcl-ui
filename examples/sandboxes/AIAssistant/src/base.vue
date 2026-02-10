<template>
  <div class="example-section">
    <h2>基本用法</h2>
    <div class="example-container">
      <AIAssistant />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AIAssistant } from '@xfsm/bcl-ui';

// 初始消息
const initialMessages = ref([
  {
    id: '1',
    sender: 'ai',
    content: '你好！我是你的 AI 小助手，有什么可以帮助你的吗？',
    timestamp: Date.now() - 3600000
  },
  {
    id: '2',
    sender: 'user',
    content: '你好，你叫什么名字？',
    timestamp: Date.now() - 3500000
  },
  {
    id: '3',
    sender: 'ai',
    content: '我是 AI 小助手，很高兴为你服务！',
    timestamp: Date.now() - 3400000
  }
]);
</script>

<style lang="less" scoped>
.ai-assistant-example {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #333;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0 15px;
    color: #555;
  }

  .example-section {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }

  .example-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
