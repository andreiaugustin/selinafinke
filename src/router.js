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
  // Portfolio
  {
    path: '/portfolio/ChrisAndMelissa',
    name: 'Chris and Melissa',
    component: () =>
    import('./views/portfolio/ChrisAndMelissa.vue')
  },
  {
    path: '/portfolio/PeterAndSandy',
    name: 'Peter and Sandy',
    component: () =>
    import('./views/portfolio/PeterAndSandy.vue')
  },
  {
    path: '/portfolio/NeeshaAndNitin',
    name: 'Neesha and Nitin',
    component: () =>
    import('./views/portfolio/NeeshaAndNitin.vue')
  },
  {
    path: '/portfolio/CrystalAndLewis',
    name: 'Crystal and Lewis',
    component: () =>
    import('./views/portfolio/CrystalAndLewis.vue')
  },
  {
    path: '/portfolio/SamanthaAndJaideep',
    name: 'Samantha and Jaideep',
    component: () =>
    import('./views/portfolio/SamanthaAndJaideep.vue')
  },
  {
    path: '/portfolio/LaurenAndBen',
    name: 'Lauren and Ben',
    component: () =>
    import('./views/portfolio/LaurenAndBen.vue')
  },
  {
    path: '/portfolio/SarahAndJames',
    name: 'Sarah and James',
    component: () =>
    import('./views/portfolio/SarahAndJames.vue')
  },
  {
    path: '/portfolio/RoshnaAndAlistair',
    name: 'Roshna and Alistair',
    component: () =>
    import('./views/portfolio/RoshnaAndAlistair.vue')
  },
  {
    path: '/portfolio/SavannaAndAdam',
    name: 'Savanna and Adam',
    component: () =>
    import('./views/portfolio/SavannaAndAdam.vue')
  },
  {
    path: '/portfolio/EmilyAndRobert',
    name: 'Emily and Robert',
    component: () =>
    import('./views/portfolio/EmilyAndRobert.vue')
  },
  


]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router