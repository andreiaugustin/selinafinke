import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'

import './styles/index.css'
import './styles/fonts.css'

import gallery from './gallery.js'
import portfolio from './portfolio.js'

const app = createApp(App)
app.use(router)
app.use(VueLazyLoad)
app.mount('#app')

app.config.globalProperties.$gallery = gallery
app.config.globalProperties.$portfolio = portfolio


