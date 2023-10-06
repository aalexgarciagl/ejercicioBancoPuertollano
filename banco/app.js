//Clases
class Cuenta{
    iban
    saldo
    tarjetas 
  
    constructor(iban,saldo,tarjetas){
      this.iban = iban
      this.saldo = saldo
      this.tarjetas = tarjetas
    }

    getIban(){
      return this.iban
    }

    setSaldo(saldo){
      this.saldo = saldo
    }

    agregarTarjeta(tarjeta){
      this.tarjetas.push(tarjeta)
    } 

  }
  
  
  class Persona{
    nombre
    pApe
    sApe
    nacionalidad
    cuentaBancaria
    constructor(nombre,pApe,sApe,nacionalidad,cuentaBancaria){
      this.nombre = nombre
      this.pApe = pApe
      this.sApe = sApe
      this.nacionalidad = nacionalidad
      this.cuentaBancaria = cuentaBancaria
    }

    setNombre(nombre){
      this.nombre = nombre
    }

    setPApe(pApe){
      this.pApe = pApe
    }

    setSApe(sApe){
      this.sApe = sApe
    }
    setNacionalidad(nacionalidad){
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

  //Creacion de usuario

  
function crearCuenta() {
  //los setters y el metodo agregarTarjeta se usara luego en las funciones de tarjeta.html
  var tarjetaInicial1= new Tarjeta("1234 12345 123456	","123",true)
  var tarjetaInicial2= new Tarjeta("1234 12345 123457	","123",false)
  var cuentaBancaria = new Cuenta("ES21 1465 0100 72 2030876293",500,[tarjetaInicial1,tarjetaInicial2]) 
  return cuentaBancaria
}
cuentaBancaria = crearCuenta()
var persona = new Persona("Lolito","Fernandez","Gill","Sueco",cuentaBancaria)


  //index.html

  function mostrarUsuario(){
    document.getElementById("nombre").value = persona.nombre
    document.getElementById("apellido1").value = persona.pApe
    document.getElementById("apellido2").value = persona.sApe
    document.getElementById("nacionalidad").value = persona.nacionalidad
  }

  function modificarUsuario(){
    var nombre = document.getElementById('nombre').value
    var apellido1 = document.getElementById('apellido1').value
    var apellido2 = document.getElementById('apellido2').value
    var nacionalidad = document.getElementById('nacionalidad').value
    const mensajeError = document.getElementById("mensaje_error")
    if(validarCampos(nombre,apellido1,apellido2,nacionalidad)){   
      mensajeError.style.color = "green"
      mensajeError.textContent = "Guardado los datos correctamente."
      console.log(persona)
    }
  }




function validarCampos(nombre,apellido1,apellido2,nacionalidad) {
    const mensajeError = document.getElementById("mensaje_error")
    const mensajeError2 = document.getElementById("mensaje_error2")
    const mensajeError3 = document.getElementById("mensaje_error3")
    const mensajeError4 = document.getElementById("mensaje_error4")
    mensajeError.textContent = ""
    mensajeError2.textContent = ""
    mensajeError3.textContent = ""
    mensajeError4.textContent = ""
    var validacion = true
    var fallos=0

    if (nombre != '' && apellido1 != '' && apellido2 != '' && nacionalidad != '') {

        if (validlength(nombre, 20, 3) !== "") { 
            mensajeError.textContent =("El campo nombre " + validlength(nombre,  20, 3)) 
            fallos++
        }
        if (validlength(apellido1, 20, 3) !== "") { 
            mensajeError2.textContent =("El campo apellido1 " + validlength(apellido1, 20, 3)) 
            fallos++
        }
        if (validlength(apellido2, 20, 3) !== "") { 
            mensajeError3.textContent =("El campo apellido2 " + validlength(apellido2, 20, 3)) 
            fallos++
        }
        if (validlength(nacionalidad, 15, 3) !== "") { 
            mensajeError4.textContent = ("El campo nacionalidad" + validlength(nacionalidad, 15, 3)) 
            fallos++
        }
        agregarTarjetaIniciales(nombre,apellido1,apellido2,nacionalidad)
        
    } else {
        alert("Debe rellenar todos los campos")
        fallos++
    }

    if(fallos >0){
      validacion = false  
    }

    return validacion
}

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


  //infoCuenta.html

  function focusIngresar(){
    document.getElementById("saldoRetirar").value = ""
  }
  
  function focusRetirar(){
    document.getElementById("saldoIngresar").value = ""
  }
  
  
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
    var saldoIngresar = document.getElementById("saldoIngresar").value 
    var aviso = document.getElementById("avisoDineroIngresado/Retirado")
    if(/^\d+(\.\d+)?$/.test(saldoIngresar)){       
      aviso.style.color = "green"
      aviso.innerText = "Dinero ingresado correctamente: "+saldoIngresar
      cuentaBancaria.saldo = parseInt(cuentaBancaria.saldo)+parseInt(saldoIngresar)
      cargarDatos()     
    }else{
      aviso.style.color = "red"
      aviso.innerText = "Debes introducir un numero positivo."
    }   
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
  
  //tarjetas.html

  function mostrarTarjetas(){ 
    var tabla = document.getElementById('tarjetas').getElementsByTagName('tbody')[0];
    for (var i = 0; i < cuentaBancaria.tarjetas.length; i++) {
      var row = tabla.insertRow(tabla.rows.length);
  
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);    
  
      cell1.innerHTML = cuentaBancaria.iban; 
      cell2.innerHTML = cuentaBancaria.tarjetas[i].numero;
      cell3.innerHTML = cuentaBancaria.tarjetas[i].activa;
    }
  }

  function agregarTarjeta() {
    if (numeroTarjeta == "" || cvv == "") {
      alert("Debe rellenar todos los campos");
    }
  
    var numeroTarjeta = document.getElementById('numero-tarjeta').value;
    var cvv = document.getElementById('cvv').value;
    var activa = document.getElementById('activa').checked;
    
    var activaTexto = "No";
    if (activa) {
      activaTexto = "Si";
    }
  
    persona.cuentaBancaria.agregarTarjeta(new Tarjeta(numeroTarjeta,cvv,activa));
    mostrarTarjetas();

  }

  
  
  
  