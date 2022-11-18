<template>
    <Header/>
    <div class="container mt-4">
        <router-view/>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components: {
        Header: defineAsyncComponent (() => import('../components/HeaderComponent.vue')),
    }
}

</script>

<style>

</style>