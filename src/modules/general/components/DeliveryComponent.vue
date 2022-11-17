<template>
  <div class="card bg-light">
    <div class="d-flex justify-content-around mb-2">
        <div class="container-image">
          <img class="image" src="@/assets/images/headerimage.png" alt="delivery">
        </div>
        <div class="d-flex align-items-center">
          <div>
            <h2><b>$0 Delivery for 30 days!</b></h2>
            <p>$0 delivery free for orders over $10 for 30 days</p>
          </div>
        </div>
        <div class="d-flex align-items-end">
        <button class="btn btn-outline-primary">
          Learn more
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h2{
  color: #fc4b08;
  margin: 0;
}
p{
  font-size: 14px;
  color: #9d9d9d;
}
.btn{
  border-radius: 20px;
  border: none;

  &:hover{
    color: white;
  }
}
.container-image {
  margin-top: -3rem;
  .image{
    width: 250px;
  }
}
</style>