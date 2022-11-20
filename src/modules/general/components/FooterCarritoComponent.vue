<template>
  <div class="row">
    <div class="col mt-5 d-flex justify-content-between">
        <div>
            <p>Personas</p>
            <div class="border rounded-3">
                <button  class="btn">-</button>
                <span>{{}}</span>
                <button  class="btn">+</button>
            </div>
        </div> 
        <button class="btn btn-warning p-4 check">Checkout <i class="mx-3 fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('general', [''])
  }
}
</script>

<style lang="scss" scoped>
.check{
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 50%;
}
</style>