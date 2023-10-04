class Banco{
  iban
  saldo
  tarjetas 

  constructor(iban,saldo,tarjetas){
    this.iban = iban
    this.saldo = saldo
    this.tarjetas = tarjetas
  }
}

class Tarjeta{
  numero
  cvv
  activa

  constructor(numero,cvv,activa){
    this.numero = numero
    this.cvv = cvv
    this.activa = activa
  }
}



var cuentaBancaria = new Banco("ES24 1111 2222 33 4444444444",500,[]) 

function retirarPulsado(){
  var saldoRetirar = document.getElementById("saldoRetirar").value 
  var aviso = document.getElementById("avisoDineroIngresado/Retirado")
  if(saldoRetirar>cuentaBancaria.saldo){
    aviso.style.color = "red";
    aviso.innerText = "Saldo insuficiente."
  }else{
    aviso.style.color = "green"
    aviso.innerText = "Dinero retirado correctamente: "+saldoRetirar
    cuentaBancaria.saldo -= saldoRetirar
    cargarDatos() 
  }
}

function ingresarPulsado(){

}


function cargarDatos(){
    document.getElementById("iban").value = cuentaBancaria.iban
    document.getElementById("saldo").value = cuentaBancaria.saldo
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
  document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}


