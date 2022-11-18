export const getCategorias = (state) => {
    const categorias = state.categorias.filter(categoria => 
        categoria.id != 'All' 
    )
    return [...categorias]
}