import { createRouter, createWebHistory } from "vue-router"
import Home from './views/Home.vue'


const routes =
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () =>
    import('./views/Portfolio.vue')
  },
//   {
//     path: '/pricing',
//     name: 'Pricing',
//     component: () =>
//     import('../views/Pricing.vue')
//   },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router