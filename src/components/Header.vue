<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <h1 class="text-2xl font-bold text-blue-600">
          {{ $t('app.title') }}
        </h1>
        <span class="text-gray-500 text-sm">
          {{ $t('app.subtitle') }}
        </span>
      </div>
      
      <div class="flex items-center space-x-4">
        <!-- Language Switcher -->
        <div class="relative">
          <select 
            v-model="selectedLocale"
            @change="changeLanguage"
            class="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="en">{{ $t('languages.en') }}</option>
            <option value="cn">{{ $t('languages.cn') }}</option>
            <option value="jp">{{ $t('languages.jp') }}</option>
            <option value="it">{{ $t('languages.it') }}</option>
            <option value="es">{{ $t('languages.es') }}</option>
          </select>
        </div>
        
        <!-- Inbox indicator -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-600">{{ $t('nav.inbox') }}</span>
          <span 
            v-if="unreadCount > 0"
            class="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center"
          >
            {{ unreadCount }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useEmailStore } from '@/stores/email'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()
const emailStore = useEmailStore()

const selectedLocale = ref(route.params.locale as string || 'en')

const unreadCount = computed(() => emailStore.unreadCount)

function changeLanguage() {
  const newLocale = selectedLocale.value
  locale.value = newLocale
  
  // Navigate to the same route but with new locale
  const currentPath = route.path.replace(/^\/[a-z]{2}/, '')
  router.push(`/${newLocale}${currentPath}`)
}
</script>
