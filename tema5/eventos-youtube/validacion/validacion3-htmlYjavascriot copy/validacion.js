//las finciones que quiera importar debo ponerlas aqui
import { comprobarNombre } from "./funciones";

window.onload=iniciar;

function iniciar(){
    document.getElementById("Enviar").addEventListener("click",validar,false);
}

function validar(e){
    borrarError();//para eliminar lo malo y que se vaya el rojo en las segundas interacciones
    if (validarNombre() && validarTelefono() && validarEdad() && confirm("Pulsa aceptar para enviar formulario")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}

function validarNombre(){
    var elemento=document.getElementById("Nombre");
    //le paso el nombre por parametro a la funcion importada
    let sms=comprobarNombre(elemento.value);//y el resultaod lo recojo en sms
    if (sms!=""){
        document.querySelector("#nombre+span").textContent=sms;//aqui le paso la variable sms que cogera el valor de la funcion
    }else if(sms=""){
        return true;
    }
}

function validarEdad(){
    var elemento=document.getElementById("Edad");
    if (!elemento.checkValidity()){
        error(elemento);//llamo la funcion error con el parametro elemento
        return false;
    }
    return true;
}
function validarTelefono(){
    var elemento=document.getElementById("Telefono");
    if (!elemento.checkValidity()){
        error(elemento);//llamo la funcion error con el parametro elemento
        return false;
    }
    return true;
}


function error(elemento){
    document.getElementById("MensajeError").innerHTML=elemento.validationMessage;
    elemento.className="error"; //que el elemento coja la clase error para sacar el rojo del css
    elemento.focus();//aqui obtendra el focus donde el error
}
function borrarError(){
    var formulario=document.forms[0];//cojo el primer formulario
    for (var i=0;i<formulario.elements.length;i++){
        formulario.elements[i].className="";//qie nos borre la clase, para que???***para que ya no salga en rojo
    }
}