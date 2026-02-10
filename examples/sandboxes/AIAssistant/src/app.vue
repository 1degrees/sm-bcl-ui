<template>
  <div class="ai-assistant-example">
    <h1>AIAssistant 组件示例</h1>
    <Base />
    <Theme />
    <Title />
    <Disable />
  </div>
</template>

<script setup lang="ts">
import Base from './base.vue'
import Disable from './disable.vue'
import Theme from './theme.vue'
import Title from './title.vue';
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
