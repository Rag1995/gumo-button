import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from '~pages'

const history = import.meta.env.MODE === 'development' ? createWebHashHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL)

const router = createRouter({
  history,
  routes,
  scrollBehavior: () => ({ top: 0, left: 0, behavior: 'smooth' }),
})

export default router
