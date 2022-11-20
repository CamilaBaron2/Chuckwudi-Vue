<template>
    <div 
        @click="filtrarCategoria(categorie.id)" 
        v-if="categoriaSeleccionada == categorie.id" 
        class="btn btn-warning m-4">
      <button class="redondo"><i :class="categorie.icono"></i></button>
      <p class="mt-2 text-dark">{{categorie.nombre}}</p>
    </div>
    <div 
        @click="filtrarCategoria(categorie.id)" 
        v-else class="btn btn-outline-warning m-4">
      <button class="redondo"><i :class="categorie.icono"></i></button>
      <p class="mt-2 text-dark">{{categorie.nombre}}</p>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    props: {
        categorie: {
            id: String,
            nombre: String,
            icono: String
        }
    },
    computed: {
        ...mapGetters('general',['categoriaSeleccionada']),
    },
    methods: {
        ...mapActions('general',['filtrarCategorias']),
        filtrarCategoria(idCategoria) {
            this.filtrarCategorias(idCategoria);
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    padding-bottom:70px;
    border-radius:35px;
    border: none;
    max-height:130px;
    box-shadow: 5px 5px 5px 5px beige;
    font-size: 13px;
    .redondo{
        width: 55px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid;
        border-color:beige;
        background-color: white;
        font-size: 25px;
    }
}
</style>