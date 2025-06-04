# Vue Temporary Email Demo

A beautiful and responsive temporary email service demo built with Vue 3, featuring multilingual support and modern UI design.

## 🚀 Features

- **Vue 3 with Composition API**: Modern Vue.js development
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS v4**: Beautiful, responsive, and minimal UI design
- **Pinia**: State management for email handling
- **Vue Router**: Multi-language routing with sub-paths
- **vue-i18n**: Complete internationalization support
- **Auto-refresh**: Simulates real-time email reception every 10 seconds
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🌍 Supported Languages

The application supports 5 languages with dedicated sub-paths:

- `/` or `/en` - English (default)
- `/cn` - Chinese (中文)
- `/jp` - Japanese (日本語)
- `/it` - Italian (Italiano)
- `/es` - Spanish (Español)

## 📦 Core Functionality

### Email Management
- **Generate Random Email**: Create new temporary email addresses
- **Mock Inbox**: Display received emails with realistic data
- **Email Details**: View full email content by clicking on emails
- **Auto-refresh**: Automatically check for new emails every 10 seconds
- **Read Status**: Track read/unread status with visual indicators

### Multilingual Support
- **Language Switcher**: Dropdown to change languages instantly
- **URL-based Locales**: Each language has its own URL path
- **Complete Translation**: All UI text is translatable
- **Auto-detection**: Language is detected from the URL path

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Pinia** - Vue state management
- **Vue Router** - Official router for Vue.js
- **vue-i18n** - Internationalization plugin
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Header.vue      # App header with language switcher
│   └── EmailList.vue   # Email list component
├── views/              # Page components
│   ├── HomeView.vue    # Main inbox view
│   └── EmailDetailView.vue # Email detail view
├── stores/             # Pinia stores
│   └── email.ts        # Email state management
├── router/             # Vue Router configuration
│   └── index.ts        # Route definitions
├── locales/            # Translation files
│   ├── en.json         # English translations
│   ├── cn.json         # Chinese translations
│   ├── jp.json         # Japanese translations
│   ├── it.json         # Italian translations
│   └── es.json         # Spanish translations
├── i18n/               # Internationalization setup
│   └── index.ts        # i18n configuration
├── App.vue             # Root component
├── main.ts             # Application entry point
└── style.css           # Global styles (Tailwind)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vue-mail-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Key Features Demo

### 1. Generate Temporary Email
- Click "Generate New Email" to create a new random email address
- Format: `{randomPrefix}{randomNumber}@tempmail.dev`
- Inbox is cleared when generating a new email

### 2. Email Reception Simulation
- Auto-refresh enabled by default (every 10 seconds)
- Manual refresh button available
- Random emails are generated to simulate real email reception
- Visual feedback with spinning refresh icon

### 3. Multilingual Experience
- Switch languages using the dropdown in the header
- URL automatically updates to reflect the selected language
- All interface text changes instantly
- Browser back/forward buttons work correctly with language paths

### 4. Email Management
- Click any email in the list to view full details
- Unread emails are highlighted with blue background
- Read status updates automatically when viewing emails
- Responsive design works on all screen sizes

## 🎨 UI/UX Features

- **Clean Design**: Minimal and modern interface
- **Visual Indicators**: Unread count badges, read/unread status
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Mobile-first design approach
- **Loading States**: Visual feedback for user actions
- **Empty States**: Helpful messages when inbox is empty

## 🔧 Customization

### Adding New Languages
1. Add translation file in `src/locales/{locale}.json`
2. Update the locale list in `src/router/index.ts`
3. Update the language options in `src/components/Header.vue`

### Modifying Email Templates
Edit the mock data in `src/stores/email.ts` to customize:
- Email senders
- Subject lines  
- Email content
- Arrival frequency

### Styling Customization
The app uses Tailwind CSS v4. Modify styles in:
- Component templates (utility classes)
- `src/style.css` (global styles)

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- vue-i18n team for internationalization support
