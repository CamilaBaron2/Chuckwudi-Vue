import { createRouter, createWebHashHistory } from 'vue-router'
import GeneralRouter from '@/modules/general/router'
import Admin from '@/modules/admin/router'
import CarritoCompras from '@/modules/carrito-compras/router'
import Pagos from '@/modules/pagos/router'

const routes = [
  {
    path: '/',
    ...GeneralRouter
  },
  {    
    path: '/administrador',
      ...Admin
  },
  {
    path: '/carrito-compras',
    ...CarritoCompras
  },
  {
    path: '/pagos',
    ...Pagos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
