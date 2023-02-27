function validarCampos(expresion,input,campo){
    if (expresion.test(input.value)){//accedo al valor y el objeto expresiones compruebo el nombre,y el parametro sera el valor del input que es el e.target.value
        document.getElementById(`caja_${campo}`).classList.remove("formulario_incorrecto");
        document.getElementById(`caja_${campo}`).classList.add("formulario_correcto");
        campos[campo]=true;
    }else{//si no fuera correcto lo de la expresion regular
        document.getElementById(`caja_${campo}`).classList.add("formulario_incorrecto");
        document.getElementById(`caja_${campo}`).classList.remove("formulario_correcto");
        campos[campo]=false;
    };
}

function validarCheck(campo){
    var campoChekeado=document.getElementById("condiciones");
    if (campoChekeado){
    campos[campo]=true;
}else{
    campos[campo]=false;
}
}

//ahi guardare el numero de intentos
function contador(intentos){
    intentos++;
    return contador;
}



export{validarCampos,contador,validarCheck};