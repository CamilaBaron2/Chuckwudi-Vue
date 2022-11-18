<template>
    <div class="offcanvas offcanvas-end bg-white" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">INGRESE NUEVO PRODUCTO</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body formu">
            <form class="row g-3">
                <div class="col-md-12">
                    <label for="inputName" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputName">
                </div>
                <div class="col-md-12">
                    <label for="input" class="form-label">Precio</label>
                    <input type="text" class="form-control" id="inputPrice">
                </div>
                <div class="col-md-12">
                    <label for="inputTime" class="form-label">Tiempo de preparacion</label>
                    <input type="text" class="form-control" id="inputTime">
                </div>
                <div class="col-md-12">
                    <label for="inputState" class="form-label">Categorias</label>
                    <select id="inputState" class="form-select">
                    <option 
                        :value="categoria"
                        v-for="categoria of getCategorias" :key="categoria.nombre"
                    >
                        {{categoria.nombre}}
                    </option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label for="image">Imagen</label>
                    <input type="file" class="form-control" name="Imagen" id="img">
                </div>
                <div class="col-md-12">
                    <button type="submit" class="btn btn-secondary guardar">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>