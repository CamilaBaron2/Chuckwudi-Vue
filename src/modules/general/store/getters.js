export const getProductosFiltrados = (state) => {
    const productos = state.productos.filter(producto => 
        producto.categoria.id == state.categoriaSeleccionada || 
        state.categoriaSeleccionada == 'All'
    )
    return [...productos]
}

export const categoriaSeleccionada = ({categoriaSeleccionada}) => {
    return categoriaSeleccionada
}

export const loadingCategorias = ({loadingCategorias}) => {
    return loadingCategorias
}

export const loadingProductos = ({loadingProductos}) => {
    return loadingProductos
}

export const categorias = (state) => {
    return [...state.categorias]
}

export const productosCarrito = (state) => {
    return [...state.productosCarrito]
}

export const totalCompra = (state) => {
    return state.productosCarrito.reduce(
        (acumulado, valorActual) => acumulado + (valorActual.precio*valorActual.cantidad) ,0)
}

export const cantidadProductos = (state) => {
    return state.productosCarrito.reduce((acumulado, producto) => acumulado + producto.cantidad, 0)
}