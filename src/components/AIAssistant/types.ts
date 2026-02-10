// 消息类型
export interface AIMessage {
  // 消息ID
  id: string;
  // 发送者类型
  sender: 'user' | 'ai';
  // 消息内容
  content: string;
  // 消息时间
  timestamp: number;
  // 消息状态
  status?: 'sending' | 'sent' | 'error';
}

// 组件 Props 类型
export interface AIAssistantProps {
  // 组件标题
  title?: string;
  // 初始消息列表
  initialMessages?: AIMessage[];
  // 是否显示标题栏
  showHeader?: boolean;
  // 是否显示输入框
  showInput?: boolean;
  // 主题
  theme?: 'light' | 'dark';
  // 占位文本
  placeholder?: string;
  // 最大消息历史记录数量
  maxMessages?: number;
  // 是否禁用
  disabled?: boolean;
}

// 组件 Events 类型
export interface AIAssistantEmits {
  // 发送消息事件
  (e: 'send-message', message: string): void;
  // 接收消息事件
  (e: 'receive-message', message: AIMessage): void;
  // 消息状态更新事件
  (e: 'message-status', messageId: string, status: 'sending' | 'sent' | 'error'): void;
  // 主题变更事件
  (e: 'theme-change', theme: 'light' | 'dark'): void;
  // 错误事件
  (e: 'error', error: Error): void;
}

// 组件 Slots 类型
export interface AIAssistantSlots {
  // 默认插槽
  default?: () => any;
  // 标题插槽
  header?: () => any;
  // 输入框插槽
  input?: () => any;
  // 消息插槽
  message?: (props: { message: AIMessage }) => any;
  // 加载状态插槽
  loading?: () => any;
}

// 组件内置方法
export interface AIAssistantInstance {
  // 发送消息
  sendMessage: (content: string) => string;
  // 接收消息
  receiveMessage: (content: string) => AIMessage;
  // 清空消息
  clearMessages: () => void;
  // 设置主题
  setTheme: (theme: 'light' | 'dark') => void;
  // 获取当前主题
  getTheme: () => 'light' | 'dark';
  // 获取消息列表
  getMessages: () => AIMessage[];
  // 滚动到底部
  scrollToBottom: () => void;
}
