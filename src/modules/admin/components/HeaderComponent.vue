<template>
    <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Chukwudi</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{name: 'clientes'}" class="nav-link">Clientes</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'productos'}" class="nav-link">Productos</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'ordenes'}" class="nav-link">Ordenes</router-link>    
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-dark" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>