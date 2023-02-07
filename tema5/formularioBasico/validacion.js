//SELECCION DEL FORMULARIO
import { comprobarNombre} from "./funciones";
//Conociendo el id
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];

//Conociendo el número de formulario que es en la página
var formulario3 = document.getElementsByTagName("form")[0];
var formulario4 = document.forms[0];

//este es el que tiene accseso al html
window.onload = iniciar; //Sin paréntesis

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    let mensajeError=comprobarNombre(elemento.value);//le paso el parametro del evento a comprobar nombre
    if (mensajeError !=''){
        document.querySelector('#nombre+span').textContent = mensajeError;
    }

}
//sigo yo

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)) {
        alert("El campo teléfono tiene que ser numérico");
        return false;
    }
    return true;
}

function validaFecha() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano, mes, dia);
    if (isNaN(fecha)) {
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}

function validaCheck() {
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad");
        return false
    }
    return true;
}

function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}
