import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
  }
]

const router = new VueRouter({
  mode: 'history', // This enables HTML5 history mode for cleaner URLs.
  routes
})

export default router
