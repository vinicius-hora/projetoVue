import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Vendas from '../components/Vendas.vue'
import Estoques from '../components/Estoques.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Estoques',
    component: Estoques
   
  },
  {
    path: '/Vendas',
    component: Vendas
   
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
