// router.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Zero from '../src/components/ZeroDp.vue'
import One from '../src/components/OneDp.vue'
import Two from '../src/components/TwoDp.vue'
import Three from '../src/components/ThreeDp.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/zero', component: Zero },
  { path: '/one', component: One },
  { path: '/two', component: Two },
  { path: '/three', component: Three },
]

const router = new VueRouter({
  routes,
})

export default router
