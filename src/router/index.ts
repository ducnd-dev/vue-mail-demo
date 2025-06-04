import { createRouter, createWebHistory } from 'vue-router'
import { useI18n } from 'vue-i18n'
import HomeView from '@/views/HomeView.vue'
import EmailDetailView from '@/views/EmailDetailView.vue'

const supportedLocales = ['en', 'cn', 'jp', 'it', 'es']

const routes = [
  {
    path: '/',
    redirect: '/en'
  },
  {
    path: '/:locale(en|cn|jp|it|es)',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/:locale(en|cn|jp|it|es)/email/:id',
    component: EmailDetailView,
    name: 'email-detail',
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/en'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const locale = to.params.locale as string
  
  if (supportedLocales.includes(locale)) {
    // Set the locale in i18n
    const { locale: i18nLocale } = useI18n()
    i18nLocale.value = locale
  }
  
  next()
})

export default router
