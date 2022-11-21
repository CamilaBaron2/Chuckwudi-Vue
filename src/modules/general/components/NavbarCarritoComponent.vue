<template>
    <div>
        <div class="d-flex justify-content-between">
            <h2 class="title mt-2"><b>Mi Orden 😎</b></h2>
            <div class="text-end">
                <i class=" fa-regular fa-user"></i>
                <span class="badge bg-warning m-2">{{cantidadProductos}}</span>
            </div>
        </div>        
        <div class="card m-4 bg-success">
            <div class=" mx-3 mt-4">
                <input @change="$emit('on:direccion',$event.target.value)" autocomplete="off" type="text" name="direccion" id="direccion" class="form-control" placeholder="Direccion">
            </div>
            <div class="d-flex justify-content-around m-3">              
                <p class="align-top text-white"><i class="fa-regular fa-clock text-warning m-2"></i>30 min</p>
                <p class="text-warning m-1">Tiempo</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('general', ['cantidadProductos'])
    }
}
</script>

<style lang="scss" scoped>
.badge{
    border-radius: 10px;
    color: black;
    padding: .8rem;
}
.card{
    border-radius: 20px;
}
.direccion{
    width: 60%;
}
</style>