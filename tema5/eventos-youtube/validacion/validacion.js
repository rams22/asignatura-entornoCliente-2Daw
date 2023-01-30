console.log("linkeado correctamente")
//primero seleccionamos el formulario

        //1) Si conocemos el id:

var formulario1=document.getElementById("miFormulario");
var formulario2= document.forms[0];
        //2) Si no conociera el formu, el dom es un array de formularios, entonces elejiria el de la posicion que quiera gracias a la propiedad forms de document
var formulario_1= document.forms[0];
var formulario_2=document.getElementsByTagName("form")[0];

//como hacer para que una vez la pagina cargara ejecutar la validacion? asi evitar el error de no encontrado

window.onload=iniciar;

function iniciar(){//asociara un evento a la pulsacion del boton enviar
        document.getElementById("enviar").addEventListener("click",validar,false);//esta funcion comprobara que todos son correctos
}






//console.log(formulario_2.elements)