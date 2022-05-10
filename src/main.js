import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.css'
import './styles/fonts.css'

import gallery from './gallery.js'
import portfolio from './portfolio.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.globalProperties.$gallery = gallery
app.config.globalProperties.$portfolio = portfolio


