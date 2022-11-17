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
    </div>
  </nav>
</template>

<script>
export default {

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

