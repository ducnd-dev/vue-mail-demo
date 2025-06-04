import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

// Handle locale switching in router
router.beforeEach((to, _from, next) => {
  const locale = to.params.locale as string
  const supportedLocales = ['en', 'cn', 'jp', 'it', 'es']
  
  if (supportedLocales.includes(locale)) {
    i18n.global.locale.value = locale as any
  }
  
  next()
})

app.mount('#app')
