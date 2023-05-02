import { createApp } from 'vue'
import App from './App.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Experience from './views/Experience.vue'
import Contact from './views/Contact.vue'
import Navbar from './components/Navbar.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/global.css'

const routes = [
  { path: '/about', component: About},
  { path: '/projects', component: Projects },
  { path: '/experience', component: Experience },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.component('Navbar', Navbar)

app.use(router)

app.mount('#app')
