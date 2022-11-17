<template>
    <div class="d-flex justify-content-between mt-6">
        <h2>Restaurants</h2>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Delivery: Now
            </button>           
        </div>       
    </div>
    <div v-if="loadingCategorias" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
   <Categoria v-else v-for="categoria of categorias" :key="categoria.id" :categorie="categoria"/>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState('general',['categorias','loadingCategorias']),
    },
    components: {
        Categoria: defineAsyncComponent (() => import('../components/CategoriaComponent.vue')),
    }

}
</script>

<style lang="scss" scoped>
.btn{
  border-radius: 20px;
  color: white;
}
</style>