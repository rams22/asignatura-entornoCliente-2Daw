window.onload=iniciar;

function iniciar(){
    document.getElementById("Enviar").addEventListener("click",validar,false);

}


function validarNombre(){
    var elemento=document.getElementById("Nombre");
    //comprobare que la validacion sea correcta con checkValidity
    if (!elemento.checkValidity()){//checkvalidity asegurara que sea correcta la validacion
        error(elemento);//accede a la funcion error y ahi le dire donde esta el error al usuario
        return false;
    }
    return true;
}

function validarEdad(){
    var elemento=document.getElementById("Edad");
    if (!elemento.checkValidity()){
        error(elemento);//llamo la funcion error con el parametro elemento
        return false;
    }
    return true;
}
//*************************mi error es llamar validarEdad a validar telefono */
function validarTelefono(){
    var elemento=document.getElementById("Telefono");
    if (!elemento.checkValidity()){
        error(elemento);//llamo la funcion error con el parametro elemento
        return false;
    }
    return true;
}

function validar(e){
    borrarError();//para eliminar lo malo y que se vaya el rojo
    if (validarNombre() && validarTelefono() && validarEdad()  && confirm("Pulsa aceptar para enviar formulario")){
        return true;
    }else{
        e.preventDefault();//evitamos el evento enviar formu
        return false;
    }
}

function error(elemento){
    document.getElementById("MensajeError").innerHTML=elemento.validationMessage;//validationMessage ya existe es prdefinido
    elemento.className="error"; //que el elemento coja la clase error para sacar el rojo del css
    elemento.focus();//aqui obtendra el focus donde el error
}

function borrarError(){
    var formulario=document.forms[0];//cojo el primer formulario(hay otras como get by id...)
    for (var i=0;i<formulario.elements.length;i++){
        formulario.elements[i].className="";//que nos borre la clase, para que???***para que ya no salga en rojo
    }
}