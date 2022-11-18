<template>
    <button class="btn btn-primary car" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-solid fa-2x fa-cart-shopping"></i> 
    </button>
    <div class="offcanvas offcanvas-end bg-info" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        ...
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.car{
    border-radius: 100%;
    bottom: 30px;
    height: 80px;
    position: fixed;
    right: 30px;
    width: 80px;
    color: white;
}
</style>