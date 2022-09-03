import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/accueil.vue'
import projet from '../views/projet.vue'
import team from '../views/team.vue'


Vue.use(VueRouter)

const routes = [
   {
    path:'/',
    name:'home',
    component:home
   },
   {
    path:'/projet',
    name:'projet',
    component:projet
   },
   {
    path:'/team',
    name:'team',
    component:team
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
