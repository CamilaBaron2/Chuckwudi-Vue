import chukwudiApi from "@/api/chukwudiApi";

export const cargarCategorias = async ({commit}) => {
    const {data} = await chukwudiApi.get('/categorias.json')
    if ( !data ){
        commit('setCategorias', [] )
        return
    }

    const categorias = [];
    for(let id of Object.keys(data)){
        categorias.push({
            id: id,
            ...data[id]
        })
    }
    commit('setCategorias',categorias)  
}

export const filtrarCategorias = ({commit}, itemSeleccionado) => {
    commit('filtrarCategoria',itemSeleccionado)
}

export const cargarProductos = async ({commit}) => {
    const {data} = await chukwudiApi.get('/productos.json')
    if ( !data ){
        commit('setProductos', [] )
        return
    }
    const productos = [];
    for(let id of Object.keys(data)){
        productos.push({
            id: id,
            ...data[id]
        })
    }
    commit('setProductos', productos)
}

export const agregarProductosCarrito = ({commit}, producto) => {
    const productoNuevo = {...producto, cantidad: 1}
    commit('agregarProductosCarrito',productoNuevo)
}

export const aumentar = ({commit}, id) => {
    commit('sumarProducto', id)
}

export const decrementar = ({commit}, id) => {
    commit('restarProducto', id)
}

export const eliminar = ({commit},id) => {
    commit('eliminarProducto', id)
}

export const eliminarOrden = ({commit}) => {
    commit('eliminarLaOrden')
}

export const nuevaCompra = async ({commit}, orden) => {
    const { data } = await chukwudiApi.post('/ordenes.json', orden)
    const ordenGuardada = {
        id: data.name,
        ...orden,
    }
    commit('guardarOrden',ordenGuardada);
    commit('eliminarLaOrden')
}