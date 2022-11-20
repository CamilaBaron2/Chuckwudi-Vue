<template>
    <span class="login100-form-title p-b-41">
        Registro
    </span>
        <form class="login100-form validate-form p-b-33 p-t-5"
        @submit.prevent="onSubmit">
        
            <div class="wrap-input100 validate-input" data-validate = "Nombre">
                <input v-model="userForm.nombre" class="input100" type="text" placeholder="Nombre" required>
                <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Apellido">
                <input v-model="userForm.apellido" class="input100" type="text" placeholder="Apellido" required>
                <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Direccion">
                <input v-model="userForm.direccion" class="input100" type="text" placeholder="Direccion" required>
                <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Telefono">
                <input v-model="userForm.telefono" class="input100" type="number" placeholder="Telefono" required>
                <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Correo">
                <input v-model="userForm.email" class="input100" type="email" placeholder="Correo" required>
                <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Password">
                <input v-model="userForm.password" class="input100" type="password" placeholder="Contraseña" required>
                <span class="focus-input100" data-placeholder="&#xe80f;"></span>
            </div>
            <div class="container-login100-form-btn m-t-32">
                <button class="login100-form-btn">
                Registrar
                </button>
            </div>
            <div class="container-login100-form-btn m-t-32">
                <router-link :to="{name: 'login'}">¿Ya tienes cuenta?</router-link>
            </div>
        </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
import Swal from 'sweetalert2'

export default {
    setup() {
        const router = useRouter()
        const {crearUsuario} = useAuth()
        const userForm = ref({
            nombre: '',
            apellido: '',
            direccion: '',
            telefono: '',
            email: '',
            password: ''
        })
        return {
            userForm,
            onSubmit: async() => {
                const {ok, message} = await crearUsuario(userForm.value);
                if (!ok) Swal.fire('Error', message, 'error')
                else router.push({name:'general'}) 
            }

        }
    }
    
}
</script>

<style>

</style>