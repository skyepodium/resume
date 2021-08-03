import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes/index.js'
import 'normalize.css'
import '@/styles/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

