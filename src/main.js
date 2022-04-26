import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.css'
import './styles/fonts.css'

import gallery from './gallery.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.globalProperties.$gallery = gallery


