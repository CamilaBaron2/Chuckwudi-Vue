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
            <td>5,0</td>
            <td>{{producto.categoria.nombre}}</td>
            <td>
              <button @click="filtrar(producto)" class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#seccionProducto"><i class="fa fa-edit"></i></button>
              <button @click="eliminar(producto.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
  <Fab/>
  <InfoProducto/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {defineAsyncComponent} from 'vue'
import Swal from 'sweetalert2'

export default {
  computed:{
    ...mapGetters('admin', ['productos'])
  },
  methods: {
    ...mapActions('admin', ['cargarProductos', 'completarProductos', 'eliminarProducto']),
    filtrar(productoSeleccionado){
      this.completarProductos(productoSeleccionado)
    },
    async eliminar(id){
      const { isConfirmed } = await Swal.fire({
        title: '¿Está seguro?',
        text: 'Una vez borrado, no se puede recuperar',
        showDenyButton: true,
        confirmButtonText: 'Si, estoy seguro'
      })
      
      if ( isConfirmed ) {
        Swal.fire({
            title: 'Espere por favor',
            allowOutsideClick: false
        })
        Swal.showLoading()
        await this.eliminarProducto(id)
        Swal.fire('Eliminado','','success')
      }
    }

  },
  created(){
    this.cargarProductos()
  },
  components: {
        Fab: defineAsyncComponent (() => import('../components/FabComponent.vue')),
        InfoProducto: defineAsyncComponent (() => import('../components/InfoProductoComponent.vue')),
    }
  
}
</script>

<style>

</style>