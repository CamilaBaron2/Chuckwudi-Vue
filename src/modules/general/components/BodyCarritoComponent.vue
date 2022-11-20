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
            <p>${{producto.precio}}</p>
            <div class="border rounded-3">  
              <button  class="btn btn-white">-</button>
              <span>{{20}}</span>
              <button  class="btn btn-white">+</button>
            </div>
          </div>
        </div>
     </div>
     <div class="col-12 mt-5 d-flex justify-content-between">
      <h4>Total:</h4>
      <h3><b>${{totalCompra}}</b></h3>
     </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
        ...mapGetters('general', ['productosCarrito','totalCompra'])
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
</style>