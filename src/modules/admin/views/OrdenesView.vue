<template>
  <h1>Ordenes</h1>
  <hr>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
              <th>Referencia</th>
              <th>Nombre cliente</th>
              <th>Dirección</th>
              <th>Cantidad de productos</th>
              <th>Fecha creación</th>
              <th>Valor pagado</th>
              <th>Estado</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="orden of ordenes" :key="orden.id">
            <td>{{orden.id}}</td>
            <td>{{orden.cliente}}</td>
            <td>{{orden.direccion}}</td>
            <td>{{orden.cantidadProductos}}</td>
            <td>{{orden.fechaCreacion}}</td>
            <td>{{orden.valorCompra}}</td>
            <td><span class="badge bg-success">{{orden.estado}}</span></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('admin', ['ordenes'])
  },
  methods: {
    ...mapActions('admin', ['cargarOrdenes'])
  },
  created() {
    this.cargarOrdenes()
  }
}
</script>

<style>

</style>