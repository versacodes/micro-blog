import {createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../pages/HomePageView.vue') },
    { path: '/post', name: 'post', component: () => import('../pages/BlogPostAllView.vue') },
    { path: '/post/:id', name: 'postId', component: () => import('../pages/BlogPostView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../pages/ContactView.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/NotFoundView.vue') }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 40 }
  }

})

export default router
