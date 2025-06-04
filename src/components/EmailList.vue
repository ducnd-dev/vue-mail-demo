<template>
  <div class="space-y-2">
    <!-- No emails state -->
    <div 
      v-if="emailStore.emails.length === 0" 
      class="text-center py-12 text-gray-500"
    >
      <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0L12 14 4 13"></path>
      </svg>
      <p class="text-lg">{{ $t('email.noEmails') }}</p>
    </div>

    <!-- Email items -->
    <div 
      v-for="email in emailStore.emails" 
      :key="email.id"
      @click="openEmail(email.id)"
      class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
      :class="{ 'bg-blue-50 border-blue-200': !email.isRead }"
    >
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <div 
              class="w-3 h-3 rounded-full"
              :class="email.isRead ? 'bg-gray-300' : 'bg-blue-500'"
            ></div>
          </div>
          <div class="font-medium text-gray-900 truncate">
            {{ email.from }}
          </div>
        </div>
        <div class="text-sm text-gray-500">
          {{ formatDate(email.date) }}
        </div>
      </div>
      
      <div class="mb-2">
        <h4 
          class="font-semibold text-gray-800 truncate"
          :class="{ 'font-bold': !email.isRead }"
        >
          {{ email.subject }}
        </h4>
      </div>
      
      <div class="text-sm text-gray-600 truncate">
        {{ email.content }}
      </div>
      
      <div class="flex items-center justify-between mt-3 text-xs text-gray-500">
        <span>{{ $t('email.to') }}: {{ email.to }}</span>
        <span v-if="!email.isRead" class="text-blue-600 font-medium">
          {{ $t('email.unread') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useEmailStore } from '@/stores/email'

const router = useRouter()
const route = useRoute()
const emailStore = useEmailStore()

function openEmail(emailId: string) {
  const locale = route.params.locale as string
  router.push(`/${locale}/email/${emailId}`)
}

function formatDate(date: Date): string {
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) {
    return 'Just now'
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`
  } else if (diffInMinutes < 1440) { // 24 hours
    const hours = Math.floor(diffInMinutes / 60)
    return `${hours}h ago`
  } else {
    const days = Math.floor(diffInMinutes / 1440)
    return `${days}d ago`
  }
}
</script>
