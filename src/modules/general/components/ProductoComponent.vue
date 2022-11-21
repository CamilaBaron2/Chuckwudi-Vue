<template>
 <div class="card">
    <img v-if="product.img" :src="product.img" class="image" alt="food">
    <img v-else src="@/assets/images/notfound.jpg" class="image" alt="food">
    <div class="time bg-info">
        <h5>{{product.tiempo}}</h5>
    </div>
    <div class="card-body">
        <h5 class="card-title" :title="product.nombre">
            {{product.nombre.substring(0,27)}}
            <label v-if="product.nombre.length > 27">...</label>
        </h5>
        <div class="card-text d-flex justify-content-between">
            <label><i class="fa-regular fa-star"></i> 4,5</label>
            <label><i class="fa-solid fa-dollar-sign"></i> {{product.precio}}</label>
            <button @click="addProductoCompra()" class="btn btn-warning"><i class="fa fa-plus"></i></button>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';
import Swal from 'sweetalert2'

export default {
    props:{
        product: {
            id: String,
            nombre: String,
            calificacion: Number,
            tiempo: String,
            precio: Number,
            img: String
        }
    },
    methods: {
        ...mapActions('general',['filtrarProductos','agregarProductosCarrito']),
        filtrarProductos(productos){
            this.filtrarProductos(productos);
        },
        addProductoCompra(){
            this.agregarProductosCarrito(this.product);
            Swal.fire({
                icon: 'success',
                title: 'Producto Agregado',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    border-radius: 10%;
    .image{
    border-radius: 10%;
    height: 200px;
    }
    .time{
        margin-top: -3rem; 
        width: 35%;
        max-height: 3rem;
        border-top-right-radius:  10px;
        padding: 15px;
    }
}
</style>
