<template>
    <div class="row mt-5 mb-5">
        <div class="col-md-6 col-lg-4 col-xxl-3 mb-5" v-for="producto of getProductosFiltrados" :key="producto.id">
            <Producto :product="producto"/>
        </div>
    </div>
 
</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters('general', ['getProductosFiltrados', 'loadingProductos'])
    },
    components: {
        Producto: defineAsyncComponent (() => import('../components/ProductoComponent.vue')),
    }
}
</script>

<style lang="scss" scoped>


</style>