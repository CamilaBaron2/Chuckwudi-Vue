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
export const agregarProductosCarrito = (state, producto) => {
    const existeProducto = state.productosCarrito.find(p => p.id === producto.id);
    if(!existeProducto){
        state.productosCarrito = [...state.productosCarrito, producto]
    }
}

export const sumarProducto = (state, id) => {
    const idx = state.productosCarrito.map(e => e.id).indexOf( id )
    state.productosCarrito[idx].cantidad++
}

export const restarProducto = (state, id) => {
    const idx = state.productosCarrito.map(e => e.id).indexOf( id )
    state.productosCarrito[idx].cantidad--
}

export const eliminarProducto = (state, id) => {
    const productos = state.productosCarrito.filter(producto => 
        producto.id != id 
    )
    state.productosCarrito = [ ...productos ]
}

export const eliminarLaOrden = (state) => {
    state.productosCarrito = []
}

export const guardarOrden = (state, ordenNueva) => {
    state.ordenActual = {...ordenNueva}
}