import store from '@/store'

const isAutenticacionGuard = async (to, from, next) => {

    const { ok } = await store.dispatch('auth/checkAutenticacion')

    if (ok) next()
    else next ({name: 'login'})
}

export default isAutenticacionGuard