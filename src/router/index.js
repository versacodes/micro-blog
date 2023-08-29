import {createRouter, createWebHistory} from 'vue-router'
import HomePageView from '../pages/HomePageView.vue'
import BlogPost from '../components/BlogPost.vue'
import ContactSection from '../components/ContactSection.vue'

const router = createRouter({

  history: createWebHistory(),
  routes: [
  
    {
      path: '/',
      name: 'home',
      component: HomePageView
    },
    {
      path: '/post',
      name: 'post',
      component: BlogPost
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactSection
    },
  
  ]

})

export default router
