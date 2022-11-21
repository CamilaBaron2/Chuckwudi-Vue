<template>
    <button class="btn btn-primary car" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-solid fa-2x fa-cart-shopping"></i> 
    </button>
    <div class="offcanvas offcanvas-end bg-info" data-bs-scroll="true"  tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Orden para: <b>{{username}}</b></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body"> 
            <NavbarCarrito @on:direccion="changeDireccion"/>
            <BodyCarrito/>
            <FooterCarrito @on:checkout="checkoutOrden()"/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2'

export default {
    data(){
        return {
            direccionOrden: null
        }
    },
    computed: {
        ...mapGetters('auth',['username']),
        ...mapGetters('general', ['productosCarrito','totalCompra','cantidadProductos'])
    },
    components: {
        NavbarCarrito: defineAsyncComponent (() => import('../components/NavbarCarritoComponent.vue')),
        BodyCarrito: defineAsyncComponent (() => import('../components/BodyCarritoComponent.vue')),
        FooterCarrito: defineAsyncComponent (() => import('../components/FooterCarritoComponent.vue'))
    },
    methods: {
        ...mapActions('general',['nuevaCompra']),
        changeDireccion(direccion){
            this.direccionOrden = direccion
        },
        checkoutOrden(){
            Swal.fire({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()
            if(this.productosCarrito.length === 0){
                Swal.fire('Error', 'Debe ingresar al menos un producto', 'error')
                return
            }
            if(!this.direccionOrden){
                Swal.fire('Error', 'Debe ingresar una dirección', 'error')
                return
            }
            const ordenCompra = {
                cliente: this.username,
                direccion: this.direccionOrden,
                fechaCreacion: new Date(),
                productos: this.productosCarrito,
                valorCompra: this.totalCompra,
                estado: 'Pendiente pago',
                cantidadProductos: this.cantidadProductos
            }
            this.nuevaCompra(ordenCompra)
            Swal.fire('Guardado', 'Orden registrada', 'success')
        }
    }
}
</script>

<style lang="scss" scoped>
.car{
    border-radius: 100%;
    bottom: 30px;
    height: 80px;
    position: fixed;
    right: 30px;
    width: 80px;
    color: white;
}
</style>