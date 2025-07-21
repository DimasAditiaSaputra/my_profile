import './assets/main.css'
import './assets/sidebar_css/sidebar.css'
import './assets/navbar/navbar.css'

// home
import './assets/home_css/home.css'
import './assets/home_css/content_home.css'
import './assets/home_css/container_content_home.css'

// about
import './assets/about_css/about.css'
import './assets/about_css/content_about.css'
import './assets/about_css/container_conten_about.css'

// CV
import './assets/CV_css/cv.css'
import './assets/CV_css/content_cv.css'
import './assets/CV_css/container_content_cv.css'

// aos
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init()

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
