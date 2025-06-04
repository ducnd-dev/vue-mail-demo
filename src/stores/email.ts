import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Email {
  id: string
  from: string
  to: string
  subject: string
  content: string
  date: Date
  isRead: boolean
}

const mockEmails: Email[] = [
  {
    id: '1',
    from: 'noreply@github.com',
    to: 'abc123@tempmail.dev',
    subject: 'Welcome to GitHub',
    content: 'Thank you for signing up for GitHub! Please verify your email address by clicking the link below.',
    date: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    isRead: false
  },
  {
    id: '2',
    from: 'support@netflix.com',
    to: 'abc123@tempmail.dev',
    subject: 'Your Netflix account information',
    content: 'Your Netflix membership has been updated. You can now enjoy unlimited streaming on all your devices.',
    date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    isRead: false
  },
  {
    id: '3',
    from: 'newsletter@techcrunch.com',
    to: 'abc123@tempmail.dev',
    subject: 'TechCrunch Daily Newsletter',
    content: 'Here are the top tech stories of the day. Stay informed about the latest developments in technology.',
    date: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    isRead: true
  }
]

const additionalMockEmails: Email[] = [
  {
    id: '4',
    from: 'alerts@amazon.com',
    to: 'abc123@tempmail.dev',
    subject: 'Your Amazon order has shipped',
    content: 'Great news! Your order #123-456789 has been shipped and is on its way to you.',
    date: new Date(),
    isRead: false
  },
  {
    id: '5',
    from: 'security@google.com',
    to: 'abc123@tempmail.dev',
    subject: 'Security alert for your Google Account',
    content: 'We noticed a new sign-in to your Google Account. If this was you, you can ignore this email.',
    date: new Date(),
    isRead: false
  },
  {
    id: '6',
    from: 'team@slack.com',
    to: 'abc123@tempmail.dev',
    subject: 'You have been added to a Slack workspace',
    content: 'Welcome to the team! You have been added to the "Development Team" workspace.',
    date: new Date(),
    isRead: false
  }
]

export const useEmailStore = defineStore('email', () => {
  const currentEmail = ref('abc123@tempmail.dev')
  const emails = ref<Email[]>([...mockEmails])
  const autoRefreshEnabled = ref(true)
  let mockEmailIndex = 0

  const unreadCount = computed(() => 
    emails.value.filter(email => !email.isRead).length
  )

  const sortedEmails = computed(() => 
    [...emails.value].sort((a, b) => b.date.getTime() - a.date.getTime())
  )

  function generateRandomEmail(): string {
    const prefixes = ['temp', 'demo', 'test', 'mail', 'user', 'inbox']
    const numbers = Math.floor(Math.random() * 9999)
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
    return `${prefix}${numbers}@tempmail.dev`
  }

  function generateNewEmail() {
    currentEmail.value = generateRandomEmail()
    emails.value = [] // Clear inbox when generating new email
  }

  function addRandomEmail() {
    if (mockEmailIndex < additionalMockEmails.length) {
      const newEmail = {
        ...additionalMockEmails[mockEmailIndex],
        to: currentEmail.value,
        date: new Date()
      }
      emails.value.unshift(newEmail)
      mockEmailIndex++
    } else {
      // Generate a completely random email
      const randomSenders = [
        'newsletter@spotify.com',
        'updates@linkedin.com',
        'notifications@facebook.com',
        'alerts@paypal.com',
        'support@discord.com'
      ]
      const randomSubjects = [
        'Important account update',
        'Weekly newsletter',
        'Security notification',
        'Special offer just for you',
        'Your monthly summary'
      ]
      
      const newEmail: Email = {
        id: Date.now().toString(),
        from: randomSenders[Math.floor(Math.random() * randomSenders.length)],
        to: currentEmail.value,
        subject: randomSubjects[Math.floor(Math.random() * randomSubjects.length)],
        content: 'This is a simulated email message. In a real application, this would contain actual email content.',
        date: new Date(),
        isRead: false
      }
      emails.value.unshift(newEmail)
    }
  }

  function getEmailById(id: string): Email | undefined {
    return emails.value.find(email => email.id === id)
  }

  function markAsRead(emailId: string) {
    const email = emails.value.find(e => e.id === emailId)
    if (email) {
      email.isRead = true
    }
  }

  function refreshInbox() {
    // Simulate receiving a new email occasionally
    if (Math.random() < 0.3) { // 30% chance of new email
      addRandomEmail()
    }
  }

  return {
    currentEmail,
    emails: sortedEmails,
    unreadCount,
    autoRefreshEnabled,
    generateNewEmail,
    addRandomEmail,
    getEmailById,
    markAsRead,
    refreshInbox
  }
})
