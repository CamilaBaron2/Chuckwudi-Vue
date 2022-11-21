import {useStore} from 'vuex'
import { computed } from 'vue'

const useAuth = () => {
    const store = useStore()

    const crearUsuario = async (usuario) =>{
        const resp = await store.dispatch('auth/crearUsuario', usuario)
        return resp
    }

    const ingresarUsuario = async (usuario) => {
        const resp = await store.dispatch('auth/ingresarUsuario', usuario)
        return resp
    }

    const checkAutenStatus = async() =>{
        const resp = await store.dispatch('auth/checkAutenticacion')
        return resp
    }

    const logout = () => {
        store.commit('auth/logout')
    }
    
    return {
        checkAutenStatus,
        crearUsuario,
        ingresarUsuario,
        logout,

        autenStatus: computed(() => store.getters ['auth/currentState']),
        username: computed(()=> store.getters['auth/username'])
    }
}

export default useAuth