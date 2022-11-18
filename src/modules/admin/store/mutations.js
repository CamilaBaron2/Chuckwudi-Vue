export const setProductos = (state,productos) => {
    state.productos = [...productos]
    // state.loadingProductos = false
}

export const setCategorias = (state,categorias) => {
    state.categorias = [...categorias]
}