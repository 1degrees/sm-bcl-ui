<template>
  <div class="example-section">
    <h2>基本用法</h2>
    <div class="example-container">
      <AudioPlayer
        style="width: 80%"
        :src="audioSrc"
        :title="audioTitle"
        :artist="audioArtist"
        :cover="audioCover"
        :autoplay="false"
        @play="handlePlay"
        @pause="handlePause"
        @ended="handleEnded"
        @timeupdate="handleTimeUpdate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AudioPlayer } from '@xfsm/bcl-ui'

// 音频播放器测试数据
const audioSrc = 'https://www.w3schools.com/html/horse.mp3'
const audioTitle = '示例音乐'
const audioArtist = '示例艺术家'
const audioCover = 'https://example.com/cover.jpg'

// 播放器状态
const playerStatus = ref('暂停')
const currentTime = ref(0)

// 播放器事件处理
const handlePlay = () => {
  playerStatus.value = '播放中'
  console.log('音频开始播放')
}

const handlePause = () => {
  playerStatus.value = '暂停'
  console.log('音频暂停')
}

const handleEnded = () => {
  playerStatus.value = '播放结束'
  console.log('音频播放结束')
}

const handleTimeUpdate = (time: number) => {
  currentTime.value = time
  console.log('音频时间更新:', time)
}
</script>

<style lang="less" scoped>
.example-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
</style>
