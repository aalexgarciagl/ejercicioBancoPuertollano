

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


    if (nombre != '' && apellido1 != '' && apellido2 != '' && nacionalidad != '') {

        if (validlength(nombre, 20, 3) !== "") { 
            mensajeError.textContent =("El campo nombre " + validlength(nombre,  20, 3)) 
        }
        if (validlength(apellido1, 20, 3) !== "") { 
            mensajeError2.textContent =("El campo apellido1 " + validlength(apellido1, 20, 3)) 
        }
        if (validlength(apellido2, 20, 3) !== "") { 
            mensajeError3.textContent =("El campo apellido2 " + validlength(apellido2, 20, 3)) 
        }
        if (validlength(nacionalidad, 15, 3) !== "") { 
            mensajeError4.textContent = ("El campo nacionalidad" + validlength(nacionalidad, 15, 3)) 
        }


    } else {
        alert("Debe rellenar todos los campos")
    }
}