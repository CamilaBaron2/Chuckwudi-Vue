export  default {
    name: 'administrador',
    component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
    children:  [
        {
            path: 'ordenes',
            name: 'ordenes',
            component: () => import('../views/OrdenesView')
        },
        {
            path: 'productos',
            name: 'productos',
            component: () => import('../views/ProductosView')
        },
    ]
}