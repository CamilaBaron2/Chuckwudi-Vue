export const setProductos = (state,productos) => {
    state.productos = [...productos]
    // state.loadingProductos = false
}

export const setCategorias = (state,categorias) => {
    state.categorias = [...categorias]
}

export const completarProductos = (state, productoSeleccionado) => {
    state.productoSeleccionado = productoSeleccionado
}

export const addProducto = (state, producto ) => {
    state.productos = [ producto, ...state.productos]
}

export const updateProducto = (state, producto) => { 

    const idx = state.productos.map(e => e.id).indexOf( producto.id )
    state.productos[idx] = producto   
}

export const eliminarProducto = ( state, id ) => {
    
    state.productos = state.productos.filter( producto => producto.id !== id )
}