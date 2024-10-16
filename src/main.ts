import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3Marquee from 'vue3-marquee'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(Vue3Marquee)
  .mount('#app')
