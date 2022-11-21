import { createRouter, createWebHashHistory } from 'vue-router'
import GeneralRouter from '@/modules/general/router'
import Admin from '@/modules/admin/router'
import Autenticacion from '@/modules/auth/router'
import isAutenticacionGuard from '@/modules/auth/router/auth-guard'
import isAuthenticatedLogoutGuard  from '@/modules/auth/router/logout-guard'

const routes = [
  {
    path: '/general',
    beforeEnter: [isAutenticacionGuard],
    ...GeneralRouter
  },
  {
    path: '/administrador',
    beforeEnter: [isAutenticacionGuard],
      ...Admin
  },
  {
    path: '/autenticacion',
    beforeEnter: [isAuthenticatedLogoutGuard],
    ...Autenticacion
  },
  {
    path: '/pagos/:id',
    name: 'pagos',
    beforeEnter: [isAutenticacionGuard],
    component: () => import('@/modules/general/views/PagosView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
