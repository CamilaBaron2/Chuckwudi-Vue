export const getCategorias = (state) => {
    const categorias = state.categorias.filter(categoria => 
        categoria.id != 'All' 
    )
    return [...categorias]
}

export const productoSeleccionado = (state) => {
    return {...state.productoSeleccionado}
}

export const productos = (state) => {
    return [...state.productos]
}