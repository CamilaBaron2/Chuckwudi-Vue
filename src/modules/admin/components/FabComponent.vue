<template>
    <button @click="agregar()" class="btn btn-secondary save" type="button" data-bs-toggle="offcanvas" data-bs-target="#seccionProducto" aria-controls="offcanvasRight">
        <i class="fa  fa-2x fa-plus"></i>
    </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods:{
        ...mapActions('admin', ['completarProductos']),
        agregar() {
            this.completarProductos({})
        }
    }
}
</script>

<style lang="scss" scoped>
.save{
    border-radius: 100%;
    bottom: 30px;
    height: 80px;
    position: fixed;
    right: 30px;
    width: 80px;
    color: white;
}
</style>
