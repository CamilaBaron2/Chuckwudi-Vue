import chukwudiApi from "@/api/chukwudiApi";

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

export const filtrarCategorias = ({commit}, itemSeleccionado) => {
    commit('filtrarCategoria',itemSeleccionado)
}

export const cargarProductos = async ({commit}) => {
    const {data} = await chukwudiApi.get('/productos.json')
    const productos = [];
    for(let id of Object.keys(data)){
        productos.push({
            id: id,
            ...data[id]
        })
    }
    commit('setProductos', productos)
}

