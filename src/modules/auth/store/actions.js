import authApi from "@/api/authApi"

export const crearUsuario = async ({commit}, usuario) => {
    const { nombre, telefono, email, password} = usuario

        try{ 
            const {data} = await authApi.post(':signUp', {email, password, returnSecureToken: true})
            const {idToken, refreshToken} =data
            
            await authApi.post(':update', {displayName: nombre, telefono, idToken})
            
            delete usuario.password
            commit('loginUsuario', {usuario, idToken, refreshToken})

            return {ok: true}
        } catch(error) {
            return {ok: false, message: error.response.data.error.message}
        }
}

export const ingresarUsuario = async ({commit}, usuario) => {
    const { email, password } = usuario

        try{ 
            const {data} = await authApi.post(':signInWithPassword', {email, password, returnSecureToken: true})
            console.log(data)
            const {displayName, idToken, refreshToken} = data
            usuario.nombre = displayName
            commit('loginUsuario', {usuario, idToken, refreshToken})

            return {ok: true}

        } catch(error) {
            return {ok: false, message: error.response.data.error.message}
        }
}

export const checkAutenticacion = async ({commit}) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken){
        commit('logout')
        return { ok: false, message: 'No hay token'}

    }

    try{
        const {data} = await authApi.post(':lookup', {idToken})
        console.log(data)
        const { displayName, email} = data.users[0]

        const usuario = {
            name: displayName,
            email
        }
        commit('loginUsuario', {usuario,idToken, refreshToken})
        return {ok: true}
    }catch (error){
        commit('logout')
        return {ok: false, message: error.response.data.error.message}
    }
}