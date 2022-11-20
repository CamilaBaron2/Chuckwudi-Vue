export  default {
    name: 'auth',
    component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
    children:  [      
       {
            path: '',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/registro',
            name: 'registro',
            component: () => import('../views/RegistroView.vue')
        }
    ]
}