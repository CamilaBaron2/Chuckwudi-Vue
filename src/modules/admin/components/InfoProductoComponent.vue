<template>
    <div class="offcanvas offcanvas-end bg-white" tabindex="-1" id="seccionProducto" aria-labelledby="seccionProductoLabel">
        <div class="offcanvas-header">
            <h5 v-if="!productoSeleccionado.id" class="offcanvas-title" id="seccionProductoLabel">INGRESE NUEVO PRODUCTO</h5>
            <h5 v-else class="offcanvas-title" id="seccionProductoLabel">ACTUALIZAR PRODUCTO</h5>

            <button type="button" ref="botonCerrar" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body formu text-start">
            <form @submit.prevent="guardar" class="row g-3">
                <div class="col-md-12">
                    <label for="inputName" class="form-label">Nombre</label>
                    <input type="text" autocomplete="off" placeholder="Hamburguesa Triple Carne..." v-model="productoSeleccionado.nombre" class="form-control" id="inputName" required>
                </div>
                <div class="col-md-12">
                    <label for="input" class="form-label">Precio</label>
                    <input type="number" autocomplete="off" placeholder="14.000" v-model="productoSeleccionado.precio" class="form-control" id="inputPrice" required>
                </div>
                <div class="col-md-12">
                    <label for="inputTime" class="form-label">Tiempo de preparacion</label>
                    <input type="text" autocomplete="off" placeholder="25 - 30 min." v-model="productoSeleccionado.tiempo" class="form-control" id="inputTime" required>
                </div>
                <div class="col-md-12">
                    <label for="inputState" class="form-label">Categorias</label>
                    <select v-model="productoSeleccionado.categoria" id="inputState" class="form-select" required>
                        <option 
                            :value="categoria"
                            v-for="categoria of getCategorias" :key="categoria.nombre"
                        >
                            {{categoria.nombre}}
                        </option>
                    </select>
                </div>
                <div class="col-md-12 text-center">
                    <button class="btn btn-dark" type="button" @click="onSelectImage">
                        Subir foto
                        <i class="fa fa-upload"></i>
                    </button>
                    <input type="file" 
                        @change="onSelectedImage"
                        ref="imageSelector"
                        v-show="false"
                        accept="image/png, image/jpeg"
                        class="form-control" name="Imagen" id="img"
                        
                    >
                    <div class="mt-3 col-md-8 offset-md-2">
                        <img 
                            v-if="localImage"
                            :src="localImage" 
                            alt="producto-picture"
                            class="img-thumbnail"                          
                        >
                        <img 
                            v-if="productoSeleccionado.img && !localImage"
                            :src="productoSeleccionado.img" 
                            alt="producto-picture"
                            class="img-thumbnail"                          
                        >
                    </div>
                </div>
                <div class="col-md-12 text-end">
                    <button type="submit" class="btn btn-secondary guardar">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2'
import cargarImagen from '../helpers/cargarImagen'

export default {
    data() {
        return {
            file: null,
            localImage: null
        }
    },

    computed:{ 
        ...mapGetters('admin', ['getCategorias','productoSeleccionado']),
    },
    methods:{
        ...mapActions('admin', ['cargarCategorias', 'guardarProductos', 'actualizarProductos']),
        async guardar() {
            if (!this.file && !this.productoSeleccionado.img){
                Swal.fire('Error', 'Imagen Requerida' , 'error')
                return
            }
            Swal.fire({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()
            if(this.file){
                const picture = await cargarImagen( this.file )
                this.productoSeleccionado.img = picture
            }

            if(!this.productoSeleccionado.id){
                await this.guardarProductos(this.productoSeleccionado)
                Swal.fire({
                    icon: 'success',
                    title: 'Producto creado.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else{
                await this.actualizarProductos(this.productoSeleccionado)
                Swal.fire({
                    icon: 'success',
                    title: 'Producto actualizado.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            this.$refs.botonCerrar.click()
            this.localImage = null
            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')
        },
        onSelectedImage(event) {
            const file = event.target.files[0]
            if ( !file) {
                this.localImage = null
                this.file = null
                return
            }
            this.file = file
    
            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL(file)
        },
        onSelectImage(){
            console.log(22)
            this.$refs.imageSelector.click()
        },
    },

    created(){
        this.cargarCategorias()
    }
}
</script>

<style lang="scss" scoped>
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