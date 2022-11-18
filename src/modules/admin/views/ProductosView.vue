<template>
  <h1>Productos</h1>
  <hr>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Tiempo estimado preparación</th>
              <th>Calificación</th>
              <th>Categoria</th>
              <th><i class="fa fa-cogs"></i></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="producto of productos" :key="producto.id">
            <td>{{producto.nombre}}</td>
            <td>{{producto.precio}}</td>
            <td>{{producto.tiempo}}</td>
            <td>{{producto.calificacion}}</td>
            <td>{{producto.categoria.nombre}}</td>
            <td>
              <button class="btn btn-success"><i class="fa fa-edit"></i></button>
              <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
  <Fab/>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import {defineAsyncComponent} from 'vue'

export default {
  computed:{
    ...mapState('admin', ['productos'])
  },
  methods: {
    ...mapActions('admin', ['cargarProductos'])
  },
  created(){
    this.cargarProductos()
  },
  components: {
        Fab: defineAsyncComponent (() => import('../components/FabComponent.vue')),
    }
  
}
</script>

<style>

</style>