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

class Persona{
  nombre
  pApe
  sApe
  nacionalidad

  constructor(nombre,pApe,sApe,nacionalidad){
    this.nombre = nombre
    this.pApe = pApe
    this.sApe = sApe
    this.nacionalidad = nacionalidad
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
  if(/^\d+(\.\d+)?$/.test(saldoRetirar)){    
    if(saldoRetirar>cuentaBancaria.saldo){
      aviso.style.color = "red";
      aviso.innerText = "Saldo insuficiente."
    }else{
      aviso.style.color = "green"
      aviso.innerText = "Dinero retirado correctamente: "+saldoRetirar
      cuentaBancaria.saldo -= saldoRetirar
      cargarDatos() 
    }
  }else{
    aviso.style.color = "red"
    aviso.innerText = "Debes introducir un numero positivo."
  }
}

function ingresarPulsado(){

}

function cargarDatosIndex(){  
  menu = document.getElementById('menu').innerHTML
}

function cargarDatos(){
    document.getElementById("iban").value = cuentaBancaria.iban
    document.getElementById("saldo").value = cuentaBancaria.saldo
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
  document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}


//FUNCIONES DE VALIDACION

function validlength(name, lengthmax, lengthmin) {
    var length = ''
    if (name.length < lengthmin && lengthmin != 0) {
        length = ' debe tener mas de ' + lengthmin + ' caracteres'
    }
    if (name.length > lengthmax && lengthmax != 0) {
        length = ' debe tener menos de ' + lengthmax + ' caracteres'

    }
    return length
}

//FUNCIONES DE USO

function compareLogin() {
    var nombre = document.getElementById('nombre').value
    var apellido1 = document.getElementById('apellido1').value
    var apellido2 = document.getElementById('apellido2').value
    var nacionalidad = document.getElementById('nacionalidad').value
    const mensajeError = document.getElementById("mensaje_error");
    const mensajeError2 = document.getElementById("mensaje_error2");
    const mensajeError3 = document.getElementById("mensaje_error3");
    const mensajeError4 = document.getElementById("mensaje_error4");
    mensajeError.textContent = "";
    mensajeError2.textContent = "";
    mensajeError3.textContent = "";
    mensajeError4.textContent = "";   
    var valido = 0 


    if (nombre != '' && apellido1 != '' && apellido2 != '' && nacionalidad != '') {

        if (validlength(nombre, 20, 3) !== "") { 
            mensajeError.textContent =("El campo nombre " + validlength(nombre,  20, 3)) 
        }else{valido++}
        if (validlength(apellido1, 20, 3) !== "") { 
            mensajeError2.textContent =("El campo apellido1 " + validlength(apellido1, 20, 3)) 
        }else{valido++}
        if (validlength(apellido2, 20, 3) !== "") { 
            mensajeError3.textContent =("El campo apellido2 " + validlength(apellido2, 20, 3)) 
        }else{valido++}
        if (validlength(nacionalidad, 15, 3) !== "") { 
            mensajeError4.textContent = ("El campo nacionalidad" + validlength(nacionalidad, 15, 3)) 
        }else{valido++}

        if(valido == 4){
          var persona = new Persona(nombre,apellido1,apellido2,nacionalidad)
          mensajeError.style.color = "green"
          mensajeError.textContent = "Datos guardados en objeto persona."
        }


    } else {
        alert("Debe rellenar todos los campos")
    }
}

