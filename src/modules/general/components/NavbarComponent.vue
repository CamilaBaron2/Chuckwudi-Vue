<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand">Chukwudi</a>
      <form class="search" role="search">
        <div class="input-group bg-info">
          <span class="input-group-text bg-info"><i class="fa-solid fa-magnifying-glass"></i></span>
          <input class="form-control bg-info" type="search" placeholder="Search" aria-label="Search">           
        </div>
      </form>
      <button class="btn btn-white"
        @click="onLogout">
        <i class="fa-solid fa-2x fa-right-from-bracket"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import useAuth from '@/modules/auth/composables/useAuth';


export default {
  setup(){
    const router = useRouter() 
    const { logout } = useAuth()

    return{
      onLogout:() => {
        router.push({name: 'login'})
        logout()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid{
  padding-right: 0;
  .search{
    width: 70%;
  }
}
</style>

