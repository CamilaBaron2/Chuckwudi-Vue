<template>
    <Navbar/>
    <Delivery class="mt-6"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Navbar: defineAsyncComponent (() => import('../components/NavbarComponent.vue')),
        Delivery: defineAsyncComponent (() => import('../components/DeliveryComponent.vue')),
    }
}
</script>

<style>

</style>