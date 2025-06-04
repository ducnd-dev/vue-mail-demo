import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import cn from './locales/cn.json'
import jp from './locales/jp.json'
import it from './locales/it.json'
import es from './locales/es.json'

export type MessageLanguages = keyof typeof en

const messages = {
  en,
  cn,
  jp,
  it,
  es
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
