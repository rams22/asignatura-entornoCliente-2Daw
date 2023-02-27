import { validarCampos, validarCheck } from "./funciones.js";
//*duda si lo importo no me funciona? Mi error era que en html no puse en script el atributo type= module

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    fecha: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
}

//para acceder al formulario y para acceder a todos los imputs de el id formulario. Un array con todos
const formulario=document.getElementById("formulario");
const inputs=document.querySelectorAll("#formulario input");

function validarFormu(e){
    //con un swicth accedo al input donde el evento esta presente
    switch (e.target.name){//me da el nombre del evento que esta referenciado
        case "nombre":
            //console.log("funciona el nombre");//compruebo que funciona
            validarCampos(expresiones.nombre, e.target, e.target.name)   //e.target.name="usuario" en este caso  
                            //exoresion regular     el input   el campo     
            break;
        case "email":
            //console.log("funciona el email");
            validarCampos(expresiones.correo, e.target, e.target.name)
            break;
        case "provincia":
            //console.log("funciona provincia");
            break;
        case "fecha":
            //console.log("funciona el fecha");
            validarCampos(expresiones.fecha,e.target,e.target.name)
            break;
        case "telefono":
            //console.log("funciona el telefono");
            validarCampos(expresiones.telefono, e.target, e.target.name)
            break;
        case "condiciones":
            //console.log("funciona condiciones");
            //validarCheck(e.target.name);//le paso el parametro campo name
        break;
    }
}




inputs.forEach((input)=>{//a cada input le quiero dar un event lstener
    input.addEventListener("blur", validarFormu);//cuando pierda el foco llamare a la funci validarformu
    input.addEventListener("keyup", validarFormu);
});

const campos={//objeto con valores en false. En la duncion validarCampos al final hare que se cambie si es correcto
    nombre: false,
    email:false,
    provincia:true,
    fecha:false,
    telefono:false,
    condiciones:true,
}



formulario.addEventListener("submit",(e)=>{
    e.preventDefault();//prevenimos el comportamiento por defecto del evento enviar,hasta que se cumpla lo que pòndre despues
    if (nombre && email && provincia && fecha && telefono && condiciones){
        formulario.reset();
    }else{

        //que ocurre si hay error
    }
})






/*
function validarCampos(expresion,input,campo){
    if (expresion.test(input.value)){//accedo al valor y el objeto expresiones compruebo el nombre,y el parametro sera el valor del input que es el e.target.value
        document.getElementById(`caja_${campo}`).classList.remove("formulario_incorrecto");
        document.getElementById(`caja_${campo}`).classList.add("formulario_correcto");
    }else{//si no fuera correcto lo de la expresion regular
        document.getElementById(`caja_${campo}`).classList.add("formulario_incorrecto");
        document.getElementById(`caja_${campo}`).classList.remove("formulario_correcto");

    };
}
*/
function validarCondiciones(){
    var campoCheck = document.getElementById("condiciones");
    if (!campoCheck.checked) {
        let condicionesNo="Debes aceptar las condiciones";
        return false
    }
    return true;
}