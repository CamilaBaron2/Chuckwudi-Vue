<template>
    <div class="container border p-5 mt-5">
        <div class="row">
            <div class="col-md-8">
                <div class="d-flex justify-content-between">
                    <div class="col-md-6">
                        <h1><b>AceCoin</b>Pay</h1>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <div class="btn btn-warning"></div>
                    </div>
                </div>
                <form class="mt-4">
                    <div class="d-flex justify-content-between">
                        <div class="col-md-6">
                            <h5><b>Card Number</b></h5>
                            <p>Enter 16-digit card number on ther card</p>
                        </div>
                        <div class="col-md-6 d-flex justify-content-end"> 
                            <i class="fa-solid fa-pencil"></i>
                            <p>editar</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <input type="text" class="form-control" id="tarjeta" aria-describedby="tarjeta">
                        <div id="tarjetaCode" class="form-text"></div>
                    </div>
                  <div class="row">
                    <div class="col-md-6">
                        <h5 class="mt-4"><b>CCV Number</b></h5>
                        <p>Enter the 3 or 4 digit number on card</p>
                    </div>
                      <div class="col-md-6 mt-4">
                        <input type="text" class="form-control" id="exampleInputPassword1">
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                        <h5 class="mt-4"><b>CCV Number</b></h5>
                        <p>Enter the 3 or 4 digit number on card</p>
                    </div>
                      <div class="d-flex justify-content-between col-md-6 mt-4">
                        <input type="text" class="form-control fecha" id="exampleInputPassword1"> 
                        <h3 class="mt-2">/</h3>
                        <input type="text" class="form-control fecha" id="exampleInputPassword1">
                      </div>
                  </div>          
                  <div class="row">
                    <div class="col-md-6">
                        <h5 class="mt-4"><b>CCV Number</b></h5>
                        <p>Enter the 3 or 4 digit number on card</p>
                    </div>
                      <div class="col-md-6 mt-4">
                        <input type="password" class="form-control" id="exampleInputPassword1">
                      </div>
                  </div>
                      <button type="submit" class="btn btn-warning col-md-12 mt-4 p-3">Play Now</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
input{
    height: 50px;
}
.fecha{
    width: 45%;
}
</style>