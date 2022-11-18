<template>
    <button class="btn btn-secondary save" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa  fa-2x fa-plus"></i>
    </button>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed:{ 
        ...mapGetters('admin', ['getCategorias'])
    },
    methods:{
        ...mapActions('admin', ['cargarCategorias'])
    },
    created(){
        this.cargarCategorias()
    }
}
</script>

<style lang="scss" scoped>
.save{
    border-radius: 100%;
    bottom: 30px;
    height: 80px;
    position: fixed;
    right: 30px;
    width: 80px;
    color: white;
}
.formu{
    display: list-item;
}
.guardar{
    color: white;
    border-radius: 20px;
    height: 50px;
    width: 100px;
}
</style>
