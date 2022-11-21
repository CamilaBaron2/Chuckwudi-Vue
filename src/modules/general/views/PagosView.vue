<template>
    <div class="container border p-5 mt-5">
        <div class="row">
            <div class="col-md-7">
                <div class="d-flex justify-content-between">
                    <div class="col-md-6">
                        <h2 ><b>AceCoin</b>Pay</h2>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <div class="btn btn-dark">1</div>
                        <div class="btn btn-dark">0</div>
                        <h3><b>:</b></h3>
                        <div class="btn btn-dark">5</div>
                        <div class="btn btn-dark">0</div>
                    </div>
                </div>
                <form class="mt-4">
                    <div class="d-flex justify-content-between">
                        <div class="col-md-6 mt-3">
                            <h5><b>Card Number</b></h5>
                            <p>Enter 16-digit card number on ther card</p>
                        </div>
                        <div class="col-md-6 mt-3 d-flex justify-content-end"> 
                            <i class="fa-solid fa-pencil"></i>
                            <label>editar</label>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <input v-model="numeroTarjeta" type="text" class="form-control" id="tarjeta" aria-describedby="tarjeta">
                        <div id="tarjetaCode" class="form-text"></div>
                    </div>
                  <div class="row">
                    <div class="col-md-6 mt-4">
                        <h5 class="mt-3"><b>CCV Number</b></h5>
                        <p>Enter the 3 or 4 digit number on card</p>
                    </div>
                      <div class="col-md-6 mt-4">
                        <input type="text" class="form-control mt-3">
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mt-3">
                        <h5 class="mt-3"><b>Expiry date</b></h5>
                        <p>Enter the expiration date of the card</p>
                    </div>
                      <div class="d-flex justify-content-between col-md-6 mt-4">
                        <input v-model="mesExpiracion" type="text" class="form-control fecha mt-3"> 
                        <h3 class="mt-4">/</h3>
                        <input v-model="añoExpiracion" type="text" class="form-control fecha mt-3">
                      </div>
                  </div>          
                  <div class="row">
                    <div class="col-md-6 mt-3">
                        <h5 class="mt-3"><b>Password</b></h5>
                        <p>Enter your Dynamic password</p>
                    </div>
                      <div class="col-md-6 mt-4">
                        <input type="password" class="form-control mt-3">
                      </div>
                  </div>
                      <button type="submit" class="btn btn-warning col-md-12 mt-5 p-3">Play Now</button>
                </form>
            </div>
            <div class="col-md-5">
                <div class="container border tarjeta">
                    <div class="card-body">
                        <h5 class="card-title text-white">Camila</h5>
                        <label class="card-text text-white">{{numeroTarjeta}}</label>
                        <p class="card-text text-white mt-3">{{mesExpiracion}}/{{añoExpiracion}} </p>
                    </div>
                </div>
                <div class="container p-5 bg-info">
                    <div class="d-flex justify-content-between mt-3" >
                        <h5>Compañia</h5>
                        <h6><b>Chuckwudi</b></h6>
                    </div>
                    <div class="d-flex justify-content-between mt-3" >
                        <h5>Numero de orden</h5>
                        <h6><b>1234567</b></h6>
                    </div>
                    <div class="d-flex justify-content-between mt-3" >
                        <h5>Producto</h5>
                        <h6><b>Comida</b></h6>
                    </div>
                    <div class="d-flex justify-content-between mt-3" >
                        <h5>IVA (19%)</h5>
                        <h6><b>$dinero</b></h6>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between mt-3" >
                        <div>
                            <h6>Tienes que pagar</h6>
                            <h5>$<b>550000</b></h5>
                        </div>
                        <i class="fa-solid fa-2x fa-file-invoice-dollar mt-2"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            numeroTarjeta: null,
            mesExpiracion: null,
            añoExpiracion: null,
            idOrden: this.$route.params.id
        } 
    }
}
</script>

<style lang="scss" scoped>
input{
    height: 50px;
}
.fecha{
    width: 45%;
}
.tarjeta{
 background-image: url('@/assets/images/tarjet.png');
 background-size: cover;
 height: 260px;
}
.card-body{
    margin-top: 10rem;
    margin-right: 20rem;
}
p{
    text-align: left;
    font-size: 12px;
}
h5{
    text-align: left;
}

</style>