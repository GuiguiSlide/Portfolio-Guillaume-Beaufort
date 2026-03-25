import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/Home.vue') },
  { path: '/projects', component: () => import('../views/Projects.vue') },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/contact', component: () => import('../views/Contact.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})