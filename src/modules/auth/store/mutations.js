export const loginUsuario = ( state, { usuario, idToken, refreshToken}) => {
    if (idToken) {
        localStorage.setItem('idToken', idToken)
        state.idToken = idToken
    }
    if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken)
        state.refreshToken = refreshToken
    }

    state.usuario = usuario
    state.status = 'authenticated'
}

export const logout = (state) => {
    console.log(state)
    state.usuario = null
    state.idToken = null
    state.refreshToken = null
    state.status = 'not-authenticated'

    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
}