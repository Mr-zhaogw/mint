import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // { 
    //   path: "/",
    //   redirect: '/home',
    // },
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/pages/home')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('@/components/pages/about')
    // },
    {
      path: '/mint',
      name: 'mint',
      component: () => import('@/components/pages/mint/index')
    }
  ]
})
