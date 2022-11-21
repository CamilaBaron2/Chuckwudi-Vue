<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-3 d-flex justify-content-between" v-for="producto of productosCarrito" :key="producto" :product="producto">
        <div class="col-4">
          <img :src="producto.img" alt="comida">
        </div>  
        <div class="col-8 mx-2">
          <p><b>{{producto.nombre}}</b></p>
          <div class="d-flex justify-content-between">
            <button @click="eliminarProducto(producto.id)" class="btn btn-danger submit"><i class="fa-regular fa-trash-can"></i></button>
            <div class="border rounded-3">  
              <button v-if="producto.cantidad > 1" @click="restarCantidad(producto.id)" class="btn btn-white">-</button>
              <span class="p-2">{{producto.cantidad}}</span>
              <button @click="sumarCantidad(producto.id)" class="btn btn-white">+</button>
            </div>
            <p class="mt-2">${{producto.precio*producto.cantidad}}</p>
          </div>
        </div>
      </div>
      <div class="col-12 mt-2 d-flex justify-content-between">
        <img src="https://static.vecteezy.com/system/resources/previews/008/492/236/original/delivery-cartoon-illustration-png.png" alt="delivery">
        <p class="mt-5"><b>Delivery</b></p>
        <p class="mt-5">$0</p>
      </div>
      <div class="col-12 mt-5 d-flex justify-content-between">
        <h4>Total:</h4>
        <h3><b>${{totalCompra}}</b></h3>
      </div>
    </div>
  </div>
  <hr>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('general', ['productosCarrito','totalCompra'])
  },
  methods: {
    ...mapActions('general',['aumentar', 'decrementar', 'eliminar']),
    sumarCantidad(id){
      this.aumentar(id)
    },
    restarCantidad(id){
      this.decrementar(id)
    },
    eliminarProducto(id){
      this.eliminar(id)
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 100px;
}
.border{
  height: 40px;
}
.submit{
  height: 2.5rem;
}
</style>