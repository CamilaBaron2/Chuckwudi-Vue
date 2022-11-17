export const setCategorias = (state,categorias) => {
    state.categorias = [...categorias]
    state.loadingCategorias = false
}

export const filtrarCategoria = (state, itemSeleccionado) => {
    state.categoriaSeleccionada = itemSeleccionado
}

export const setProductos = (state,productos) => {
    state.productos = [...productos]
    state.loadingProductos = false
}