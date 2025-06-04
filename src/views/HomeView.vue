<template>
  <div class="max-w-4xl mx-auto">
    <!-- Current Email Display -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">
        {{ $t('email.tempEmailTitle') }}
      </h2>
      
      <div class="flex items-center justify-between bg-gray-50 rounded-lg p-4">
        <div class="flex items-center space-x-3">
          <div class="bg-blue-100 rounded-full p-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.95a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <span class="text-lg font-mono bg-white px-3 py-2 rounded border">
            {{ emailStore.currentEmail }}
          </span>
        </div>
        
        <button 
          @click="generateNewEmail"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          {{ $t('email.generateNew') }}
        </button>
      </div>
    </div>

    <!-- Inbox Controls -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800">
          {{ $t('nav.inbox') }}
        </h3>
        
        <div class="flex items-center space-x-4">
          <label class="flex items-center space-x-2 text-sm text-gray-600">
            <input 
              v-model="emailStore.autoRefreshEnabled"
              type="checkbox" 
              class="rounded"
            >
            <span>{{ $t('email.autoRefresh') }}</span>
          </label>
          
          <button 
            @click="refreshInbox"
            :disabled="isRefreshing"
            class="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <svg 
              class="w-4 h-4" 
              :class="{ 'animate-spin': isRefreshing }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span>{{ $t('email.refreshInbox') }}</span>
          </button>
        </div>
      </div>
      
      <!-- Email List -->
      <EmailList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useEmailStore } from '@/stores/email'
import EmailList from '@/components/EmailList.vue'

const emailStore = useEmailStore()
const isRefreshing = ref(false)
let autoRefreshInterval: number | null = null

function generateNewEmail() {
  emailStore.generateNewEmail()
}

async function refreshInbox() {
  isRefreshing.value = true
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
  emailStore.refreshInbox()
  isRefreshing.value = false
}

function startAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval)
  }
  
  autoRefreshInterval = setInterval(() => {
    if (emailStore.autoRefreshEnabled) {
      emailStore.refreshInbox()
    }
  }, 10000) // 10 seconds
}

onMounted(() => {
  startAutoRefresh()
})

onUnmounted(() => {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval)
  }
})
</script>
