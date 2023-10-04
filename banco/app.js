

function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
 document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}

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

