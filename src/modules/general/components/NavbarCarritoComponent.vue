<template>
    <div>
        <div class="text-end">
            <i class=" fa-regular fa-user"></i>
            <span class="badge bg-warning m-2">3</span>
        </div>
        <div class="text-start m-4">
            <h2 class="title"><b>Mi Orden 😎</b></h2>
        </div>
        <div class="card m-5 bg-success">
            <span>              
                <input type="text" name="direccion" id="direccion" class="bg-success mt-4 text-white">
                <button class="btn text-warning">Edit</button>
                <div class="d-flex justify-content-around m-3">              
                    <p class="align-top text-white"><i class="fa-regular fa-clock text-warning m-2"></i>30 min</p>
                    <p class="text-warning m-1">Tiempo</p>
                </div>
            </span>
        </div>
    </div>
</template>

<script>
export default {

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
</style>