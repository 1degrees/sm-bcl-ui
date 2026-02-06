<template>
  <div class="container">
    <div class="aside">
      <h3>组件总览</h3>
      <nav>
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </nav>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { config } from './router/index'
console.log(config)
const navItems = computed(() => {
  return config?.map((item: any) => ({
    name: item.name,
    path: item.path
  }))
})
</script>
<style lang="less" scoped>
.container {
  display: flex;
}
.aside {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 200px;
  height: 100vh;
  background-color: #f5f5f5;
  li {
    list-style: none;
  }
}
.content {
  flex: 1;
}
</style>