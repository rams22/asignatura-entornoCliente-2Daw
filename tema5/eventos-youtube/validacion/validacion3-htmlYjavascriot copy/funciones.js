export function comprobarNombre (nombre){    //comprobare que la validacion sea correcta con checkValidity
    if (nombre==""){
        return "El campo no puede estar vacio";
    }
    else if (!nombre.checkValidity()){//checkvalidity asegurara que sea correcta la validacion
        error(nombre);//accede a la funcion error y ahi le dire donde esta el error al usuario
        return "Error de formato en el filtro html";
    }
    else{
        return ("")
    }
}   