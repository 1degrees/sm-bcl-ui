<template>
  <div
    ref="playerRef"
    class="audio-player"
  >
    <!-- 封面图片 -->
    <div
      v-if="cover"
      class="audio-cover"
    >
      <img
        :src="cover"
        :alt="title"
      >
    </div>
    <div
      v-else
      class="audio-cover"
    >
      <!-- 默认封面 -->
      <div style="width: 100%; height: 100%; background-color: #f3f4f6; display: flex; align-items: center; justify-content: center;">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    </div>

    <!-- 音频信息 -->
    <div class="audio-info">
      <h3 class="audio-title">
        {{ title || '未知标题' }}
      </h3>
      <p class="audio-artist">
        {{ artist || '未知艺术家' }}
      </p>
    </div>

    <!-- 控制区域 -->
    <div class="audio-controls">
      <button
        class="audio-play-btn"
        @click="togglePlay"
      >
        <svg
          v-if="!isPlaying"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect
            x="6"
            y="4"
            width="4"
            height="16"
          />
          <rect
            x="14"
            y="4"
            width="4"
            height="16"
          />
        </svg>
      </button>
    </div>

    <!-- 进度条区域 -->
    <div class="audio-progress">
      <div
        class="progress-container"
        @click="handleProgressClick"
      >
        <div
          class="progress-bar"
          :style="{ width: `${progressPercentage}%` }"
        />
        <div
          class="progress-handle"
          :style="{ left: `${progressPercentage}%` }"
        />
      </div>
      <div class="time-display">
        <span class="current-time">{{ formatTime(currentTime) }}</span>
        <span class="duration">{{ formatTime(duration) }}</span>
      </div>
    </div>

    <!-- 音量控制 -->
    <div class="audio-volume">
      <button
        class="volume-btn"
        @click="toggleMute"
      >
        <svg
          v-if="isMuted || volume === 0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line
            x1="23"
            y1="9"
            x2="17"
            y2="15"
          />
          <line
            x1="17"
            y1="9"
            x2="23"
            y2="15"
          />
        </svg>
        <svg
          v-else-if="volume < 0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </button>
      <div
        class="volume-slider"
        @click="handleVolumeClick"
      >
        <div
          class="volume-bar"
          :style="{ width: `${(isMuted ? 0 : volume) * 100}%` }"
        />
        <div
          class="volume-handle"
          :style="{ left: `${(isMuted ? 0 : volume) * 100}%` }"
        />
      </div>
    </div>

    <!-- 音频元素 -->
    <audio
      ref="audioRef"
      :src="src"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :volume="volume"
      :preload="preload"
      @play="handlePlay"
      @pause="handlePause"
      @ended="handleEnded"
      @timeupdate="handleTimeUpdate"
      @volumechange="handleVolumeChange"
      @error="handleError"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, defineExpose } from 'vue'
import type { AudioPlayerProps, AudioPlayerInstance } from './types'
// Props
const props = withDefaults(defineProps<AudioPlayerProps>(), {
  title: '',
  artist: '',
  cover: '',
  autoplay: false,
  loop: false,
  muted: false,
  volume: 1,
  preload: 'metadata'
})

// Emits
const emit = defineEmits<{
  play: []
  pause: []
  ended: []
  timeupdate: [time: number]
  volumechange: [volume: number]
  error: [error: Error]
}>()

// Refs
const playerRef = ref<HTMLElement>()
const audioRef = ref<HTMLAudioElement>()

// 状态
const isPlaying = ref(false)
const isMuted = ref(props.muted)
const currentVolume = ref(props.volume)
const currentTime = ref(0)
const duration = ref(0)
const progressPercentage = ref(0)

// 方法
const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const togglePlay = () => {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
}

const handlePlay = () => {
  isPlaying.value = true
  emit('play')
}

const handlePause = () => {
  isPlaying.value = false
  emit('pause')
}

const handleEnded = () => {
  isPlaying.value = false
  emit('ended')
}

const handleTimeUpdate = () => {
  if (!audioRef.value) return
  
  currentTime.value = audioRef.value.currentTime
  duration.value = audioRef.value.duration || 0
  progressPercentage.value = (currentTime.value / duration.value) * 100 || 0
  
  emit('timeupdate', currentTime.value)
}

const handleVolumeChange = () => {
  if (!audioRef.value) return
  
  currentVolume.value = audioRef.value.volume
  isMuted.value = audioRef.value.muted
  
  emit('volumechange', currentVolume.value)
}

const handleError = (event: Event) => {
  const error = (event.target as HTMLAudioElement).error
  if (error) {
    emit('error', new Error(error.message))
  }
}

const handleProgressClick = (event: MouseEvent) => {
  if (!audioRef.value || !event.currentTarget) return
  
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const percentage = (clickX / rect.width) * 100
  const newTime = (percentage / 100) * duration.value
  
  audioRef.value.currentTime = newTime
}

const handleVolumeClick = (event: MouseEvent) => {
  if (!audioRef.value || !event.currentTarget) return
  
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const percentage = (clickX / rect.width) * 100
  const newVolume = percentage / 100
  
  audioRef.value.volume = newVolume
  audioRef.value.muted = false
}

const toggleMute = () => {
  if (!audioRef.value) return
  
  audioRef.value.muted = !audioRef.value.muted
}

// 暴露的方法
const play = () => {
  audioRef.value?.play()
}

const pause = () => {
  audioRef.value?.pause()
}

const toggle = () => {
  togglePlay()
}

const seek = (time: number) => {
  if (audioRef.value) {
    audioRef.value.currentTime = time
  }
}

const setVolume = (volume: number) => {
  if (audioRef.value) {
    audioRef.value.volume = Math.max(0, Math.min(1, volume))
    audioRef.value.muted = false
  }
}

const setMuted = (muted: boolean) => {
  if (audioRef.value) {
    audioRef.value.muted = muted
  }
}

const getCurrentTime = (): number => {
  return currentTime.value
}

const getDuration = (): number => {
  return duration.value
}

const getPlaying = (): boolean => {
  return isPlaying.value
}

// 暴露方法给父组件
defineExpose<AudioPlayerInstance>({
  play,
  pause,
  toggle,
  seek,
  setVolume,
  setMuted,
  getCurrentTime,
  getDuration,
  getPlaying
})

// 生命周期
onMounted(() => {
  // 初始化状态
  isMuted.value = props.muted
  currentVolume.value = props.volume
})

onUnmounted(() => {
  // 清理音频资源
  audioRef.value?.pause()
})

// 监听 Props 变化
watch(() => props.muted, (newMuted) => {
  isMuted.value = newMuted
  if (audioRef.value) {
    audioRef.value.muted = newMuted
  }
})

watch(() => props.volume, (newVolume) => {
  currentVolume.value = newVolume
  if (audioRef.value) {
    audioRef.value.volume = newVolume
  }
})

watch(() => props.src, () => {
  // 重置状态
  currentTime.value = 0
  duration.value = 0
  progressPercentage.value = 0
  isPlaying.value = false
})
</script>
