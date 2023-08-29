import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({

  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../pages/HomePageView.vue') },
    { path: '/post', name: 'post', component: () => import('../pages/BlogPostView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../pages/ContactView.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/NotFoundView.vue') }
  ]

})

export default router
