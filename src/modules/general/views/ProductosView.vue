<template>
    <div class="row mt-5 mb-5">
        <div class="col-md-6 col-lg-4 col-xxl-3 mb-5" v-for="producto of getProductosFiltrados" :key="producto.id">
            <Producto  :product="producto"/>
        </div>
    </div>
 
</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters, mapState} from 'vuex'

export default {
    computed: {
        ...mapState('general',['loadingProductos']),
        ...mapGetters('general', ['getProductosFiltrados'])
    },
    components: {
        Producto: defineAsyncComponent (() => import('../components/ProductoComponent.vue')),
    }
}
</script>

<style lang="scss" scoped>


</style>