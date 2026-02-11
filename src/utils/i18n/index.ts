import { createI18n } from 'vue-i18n'
import cn from './cn.ts'
import en from './en.ts'

export const i18n: Record<string, any> = { en, cn, i18n: {} }

export function initI18n(langList: Record<string, any>) {
  const messages: Record<string, any> = { en, cn }
  Object.assign(messages, langList)
  const _i18n = createI18n({
    // ⬅️ 必须设为 false 才能使用 useI18n() 的 Composition API 风格
    legacy: false, 
    locale: 'cn',
    fallbackLocale: 'en',
    messages
  })
  Object.assign(i18n, _i18n)
  return i18n
}

initI18n({})
