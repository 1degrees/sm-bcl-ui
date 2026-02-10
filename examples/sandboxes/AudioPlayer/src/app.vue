<template>
  <AudioPlayer 
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

<style scoped>
.audio-player-example {
  padding: 20px;
}

.example-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
}

.example-section h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.example-info {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  font-size: 14px;
  color: #6b7280;
}

.example-info p {
  margin-bottom: 8px;
}

.custom-audio-player {
  --audio-player-primary-color: #ff6b6b;
  --audio-player-bg-color: #f8f9fa;
}
</style>
