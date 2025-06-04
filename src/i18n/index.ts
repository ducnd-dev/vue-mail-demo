import { createI18n } from 'vue-i18n'

// Import locale messages directly as objects
const messages = {
  en: {
    app: {
      title: "TempMail Vue",
      subtitle: "Temporary Email Service"
    },
    nav: {
      inbox: "Inbox",
      language: "Language"
    },
    email: {
      tempEmailTitle: "Your Temporary Email",
      generateNew: "Generate New Email",
      refreshInbox: "Refresh Inbox",
      autoRefresh: "Auto-refresh every 10 seconds",
      noEmails: "No emails yet. Your inbox is empty.",
      emailDetails: "Email Details",
      from: "From",
      to: "To", 
      subject: "Subject",
      date: "Date",
      backToInbox: "← Back to Inbox",
      unread: "Unread"
    },
    languages: {
      en: "English",
      cn: "中文",
      jp: "日本語",
      it: "Italiano",
      es: "Español"
    }
  },  cn: {
    app: {
      title: "临时邮箱 Vue",
      subtitle: "临时邮箱服务"
    },
    nav: {
      inbox: "收件箱",
      language: "语言"
    },
    email: {
      tempEmailTitle: "您的临时邮箱",
      generateNew: "生成新邮箱",
      refreshInbox: "刷新收件箱",
      autoRefresh: "每10秒自动刷新",
      noEmails: "暂无邮件。您的收件箱是空的。",
      emailDetails: "邮件详情",
      from: "发件人",
      to: "收件人",
      subject: "主题",
      date: "日期",
      backToInbox: "← 返回收件箱",
      unread: "未读"
    },
    languages: {
      en: "English",
      cn: "中文",
      jp: "日本語",
      it: "Italiano",
      es: "Español"
    }
  },  jp: {
    app: {
      title: "TempMail Vue",
      subtitle: "一時メールサービス"
    },
    nav: {
      inbox: "受信箱",
      language: "言語"
    },
    email: {
      tempEmailTitle: "あなたの一時メール",
      generateNew: "新しいメールを生成",
      refreshInbox: "受信箱を更新",
      autoRefresh: "10秒ごとに自動更新",
      noEmails: "メールはまだありません。受信箱は空です。",
      emailDetails: "メール詳細",
      from: "送信者",
      to: "宛先",
      subject: "件名",
      date: "日付",
      backToInbox: "← 受信箱に戻る",
      unread: "未読"
    },
    languages: {
      en: "English",
      cn: "中文",
      jp: "日本語",
      it: "Italiano",
      es: "Español"
    }
  },  it: {
    app: {
      title: "TempMail Vue",
      subtitle: "Servizio Email Temporanea"
    },
    nav: {
      inbox: "Posta in arrivo",
      language: "Lingua"
    },
    email: {
      tempEmailTitle: "La tua Email Temporanea",
      generateNew: "Genera Nuova Email",
      refreshInbox: "Aggiorna Posta",
      autoRefresh: "Aggiornamento automatico ogni 10 secondi",
      noEmails: "Nessuna email ancora. La tua posta è vuota.",
      emailDetails: "Dettagli Email",
      from: "Da",
      to: "A",
      subject: "Oggetto",
      date: "Data",
      backToInbox: "← Torna alla Posta",
      unread: "Non letto"
    },
    languages: {
      en: "English",
      cn: "中文",
      jp: "日本語",
      it: "Italiano",
      es: "Español"
    }
  },  es: {
    app: {
      title: "TempMail Vue",
      subtitle: "Servicio de Email Temporal"
    },
    nav: {
      inbox: "Bandeja de entrada",
      language: "Idioma"
    },
    email: {
      tempEmailTitle: "Tu Email Temporal",
      generateNew: "Generar Nuevo Email",
      refreshInbox: "Actualizar Bandeja",
      autoRefresh: "Actualización automática cada 10 segundos",
      noEmails: "Aún no hay emails. Tu bandeja está vacía.",
      emailDetails: "Detalles del Email",
      from: "De",
      to: "Para",
      subject: "Asunto",
      date: "Fecha",
      backToInbox: "← Volver a Bandeja",
      unread: "No leído"
    },
    languages: {
      en: "English",
      cn: "中文",
      jp: "日本語",
      it: "Italiano",
      es: "Español"
    }
  }
}

export type MessageLanguages = keyof typeof messages.en

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
