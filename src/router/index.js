import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'


//Layoutss

Vue.use(VueRouter)

const router = new Router({
    base: '/',
    mode: 'history',
    routes: [
    {
      path: '/',
      component: () => import('@/components/pages/landing/Index')
    },
   
  
  ]
  })
  
  
  export default router
  /* eslint-disable */
