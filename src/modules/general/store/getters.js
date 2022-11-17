export const getProductosFiltrados = (state) => {
    const productos = state.productos.filter(producto => 
        producto.categoria == state.categoriaSeleccionada || 
        state.categoriaSeleccionada == 'All'
    )
    return [...productos]
}