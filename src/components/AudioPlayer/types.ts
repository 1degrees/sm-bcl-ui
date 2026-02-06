// 音频播放器组件的类型定义

// Props 类型
export interface AudioPlayerProps {
  // 音频文件地址，必填
  src: string;
  // 音频标题
  title?: string;
  // 音频艺术家
  artist?: string;
  // 音频封面图片地址
  cover?: string;
  // 是否自动播放
  autoplay?: boolean;
  // 是否循环播放
  loop?: boolean;
  // 是否静音
  muted?: boolean;
  // 音量，范围 0-1
  volume?: number;
  // 预加载方式，可选值：'none'、'metadata'、'auto'
  preload?: 'none' | 'metadata' | 'auto';
}

// Events 类型
export interface AudioPlayerEvents {
  // 音频开始播放时触发
  play: [];
  // 音频暂停时触发
  pause: [];
  // 音频播放结束时触发
  ended: [];
  // 音频播放时间更新时触发，参数为当前播放时间（秒）
  timeupdate: [time: number];
  // 音量变化时触发，参数为当前音量
  volumechange: [volume: number];
  // 音频加载或播放出错时触发
  error: [error: Error];
}

// 组件实例类型
export interface AudioPlayerInstance {
  // 开始播放音频
  play: () => void;
  // 暂停播放音频
  pause: () => void;
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
