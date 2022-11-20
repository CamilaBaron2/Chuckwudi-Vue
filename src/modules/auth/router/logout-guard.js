import store from '@/store'

const isAuthenticatedLogoutGuard = async (to, from, next) => {

    const { ok } = await store.dispatch('auth/checkAutenticacion')

    if (ok) next({name: 'general'})
    else next ()
}

export default isAuthenticatedLogoutGuard