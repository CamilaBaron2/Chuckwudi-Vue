import chukwudiApi from "@/api/chukwudiApi";

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

export const completarProductos = ({commit}, productoSeleccionado) => {   
    commit('completarProductos', productoSeleccionado)
}

export const cargarCategorias = async ({commit}) => {
    const {data} = await chukwudiApi.get('/categorias.json')
    const categorias = [];
    for(let id of Object.keys(data)){
        categorias.push({
            id: id,
            ...data[id]
        })
    }
    commit('setCategorias',categorias)  
}

export const guardarProductos = async ({commit},producto) => {
    console.log(producto)
    const { data } = await chukwudiApi.post('/productos.json', producto)
    const productoGuardado = {
        id: data.name,
        ...producto,
    }
    commit('addProducto', productoGuardado)
}

export const actualizarProductos = async ({commit},producto) => {
    await chukwudiApi.put(`/productos/${producto.id}.json`, producto)
   
    commit('updateProducto', {...producto})
}

export const eliminarProducto = async ({ commit }, id ) => {

    await chukwudiApi.delete(`/productos/${ id }.json`)
    commit('eliminarProducto', id)

    return id
}
