<template>
  <div class="container">
    <Header/>
    <Categorias/>
    <Productos/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions } from 'vuex';
export default {
  components: {
    Header: defineAsyncComponent (() => import('../views/HeaderView.vue')),
    Categorias: defineAsyncComponent (() => import('../views/CategoriasView.vue')),
    Productos: defineAsyncComponent (() => import('../views/ProductosView.vue'))
  },
  methods: {
    ...mapActions('general', ['cargarCategorias','cargarProductos'])
  },
  created() {
    this.cargarCategorias()
    this.cargarProductos()
  }
}
</script>

<style>

</style>