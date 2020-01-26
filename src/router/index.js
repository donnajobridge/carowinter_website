import Vue from 'vue'
import VueRouter from 'vue-router'
import carowinter from "@/views/carowinter.vue";
import home from "@/views/home.vue";
import about from "@/views/about.vue";
import articles from "@/views/articles.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: carowinter,
    children: [
      {
        path: '/home',
        name: 'redirect',
        redirect: '/'
      },
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: '/articles',
        name: 'articles',
        component: articles
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return {x: 0, y:0}
  },
})

export default router
