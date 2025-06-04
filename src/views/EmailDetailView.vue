<template>
  <div class="max-w-4xl mx-auto">
    <div v-if="email" class="bg-white rounded-lg shadow-md">
      <!-- Header -->
      <div class="border-b border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <button 
            @click="goBack"
            class="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span>{{ $t('email.backToInbox') }}</span>
          </button>
          
          <div class="text-sm text-gray-500">
            {{ formatFullDate(email.date) }}
          </div>
        </div>
        
        <h1 class="text-2xl font-bold text-gray-900 mb-4">
          {{ email.subject }}
        </h1>
        
        <!-- Email metadata -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span class="font-medium text-gray-700">{{ $t('email.from') }}:</span>
            <span class="ml-2 text-gray-900">{{ email.from }}</span>
          </div>
          <div>
            <span class="font-medium text-gray-700">{{ $t('email.to') }}:</span>
            <span class="ml-2 text-gray-900">{{ email.to }}</span>
          </div>
          <div>
            <span class="font-medium text-gray-700">{{ $t('email.date') }}:</span>
            <span class="ml-2 text-gray-900">{{ formatFullDate(email.date) }}</span>
          </div>
        </div>
      </div>
      
      <!-- Email content -->
      <div class="p-6">
        <div class="prose max-w-none">
          <div class="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {{ email.content }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Email not found -->
    <div v-else class="bg-white rounded-lg shadow-md p-6 text-center">
      <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
      <h2 class="text-xl font-semibold text-gray-700 mb-2">Email Not Found</h2>
      <p class="text-gray-500 mb-4">The email you're looking for doesn't exist or has been deleted.</p>
      <button 
        @click="goBack"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        {{ $t('email.backToInbox') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useEmailStore } from '@/stores/email'

interface Props {
  id: string
}

const props = defineProps<Props>()
const router = useRouter()
const route = useRoute()
const emailStore = useEmailStore()

const email = computed(() => emailStore.getEmailById(props.id))

function goBack() {
  const locale = route.params.locale as string
  router.push(`/${locale}`)
}

function formatFullDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

onMounted(() => {
  // Mark email as read when viewing
  if (email.value) {
    emailStore.markAsRead(props.id)
  }
})
</script>
