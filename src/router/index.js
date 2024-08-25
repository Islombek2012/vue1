import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
const router = createRouter({
      history: createWebHistory(),
      routes: [
            {
                  path: '/',
                  name: 'home-page',
                  component: HomeView
            },
            {
                  path: '/about',
                  name: 'about-page',
                  component: ()=> import('../views/AboutView.vue')
            },
            {
                  path: '/contact',
                  name: 'contact-page',
                  component: ()=> import('../views/ContactView.vue')
            }
      ]
})
export default router