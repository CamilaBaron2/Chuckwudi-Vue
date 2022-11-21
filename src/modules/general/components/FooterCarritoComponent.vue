<template>
  <div class="row">
    <div class="col mt-5 d-flex justify-content-between">
        <button @click="eliminarLaOrden()" class="btn btn-danger eliminar p-3 "><i class="fa-regular fa-trash-can"></i> Eliminar Orden</button>
        <button @click="$emit('on:checkout')" class="btn btn-warning p-3 check">Checkout <i class="mx-3 fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'


export default {
  methods: {
    ...mapActions('general', ['eliminarOrden']),
    async eliminarLaOrden(){
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
        await this.eliminarOrden()
        Swal.fire('Eliminado','','success')
      }
    },
  } 
}
</script>

<style lang="scss" scoped>
.check{
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.eliminar{
  border-top-right-radius:20px ;
  border-bottom-right-radius:20px ;
}
</style>