import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EmailDetailView from '@/views/EmailDetailView.vue'

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

export default router
