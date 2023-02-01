console.log("linkeado correctamente");

/* Dudas:

var elementoTelefono =document.getElementById("Telefono").value;
console.log(elementoTelefono);

var elementoTelefono2 =document.getElementById("Telefono");
console.log (elementoTelefono2.value)



//primero seleccionamos el formulario

        //1) Si conocemos el id:

var formulario1=document.getElementById("miFormulario");
/*var formulario2= document.forms[0];
        //2) Si no conociera el formu, el dom es un array de formularios, entonces elejiria el de la posicion que quiera gracias a la propiedad forms de document
var formulario_1= document.forms[0];
var formulario_2=document.getElementsByTagName("form")[0];

//como hacer para que una vez la pagina secreara o cargara, ejecutar la validacion? asi evitar el error de no encontrado
*/
window.onload=iniciar; //cuando el dom cargue activare la funcion iniciar

function iniciar(){//asociara un evento a la pulsacion del boton enviar
        document.getElementById("Enviar").addEventListener("click",validarTodas,false);//esta funcion comprobara que todos los campos del formu son correctos. Le paso la funcion validar

}

//el nombre
function validarNombre(){
        var elemento =document.getElementById("Nombre");
        if (elemento.value==""){//si elemento es vacio muestra error
                alert("El elemento nombre no puede estar vacio")
                return false;
        }
        return true;
}

function validarTelefono(){
        //comprobare que lo de dentro solo sea numero
        var elemento =document.getElementById("Telefono");//?podria poner .value?? para abajo solo poner elemento?
        if (isNaN(elemento.value)){
                alert ("El campo telefono tiene que ser numerico");
                return false;
        }
        return true;//si no llega al if devuelve true
        
}
function validarFecha(){
        var dia=document.getElementById("Dia").value;
        var mes=document.getElementById("Mes").value;
        var anio=document.getElementById("Anio").value;

        var fecha=new Date(anio, mes, dia);//si esto nos devuelve un numero la fecha sera correcta
        if (isNaN(fecha)){
                alert("Los campos fecha son incorrectos");
                return false;
        }
        return true;
}

function validarCheckMayor(){
        //para asefurarnos que es mayor de edad
        var checkeo=document.getElementById("Mayor");
        if (!checkeo.checked){//si no da true
                alert("Debes ser mayor de edad");
                return false;
        }
        return true;
}

//Ahora nos queda unir todas las funciones en una para comprobar que todas sean validas

function validarTodas(e){
        if (validarNombre() && validarTelefono() && validarFecha() && validarCheckMayor() && confirm("Pusla aceptar si deseas enviar el formulario")){
                return true;
        } 
        else{
                //el campo e hace referencia al evento que hizo la accion
                e.preventDefault();//evitamos que se ejecute la accion del evento, osea ir a la pagina procesar.php en la etiqueta form
                return false;
        }
}






/*
***Seleccionar elementos de un formulario:****

formulario_2.elements[]; devuelve un array con todos los elementos
getElementById("idElemento") devuelve un elemento determinado
getElements.ByTagName("etiqueta") recuerda la s, devuelve un array con elementos de un tipo de etiqueta.
getElements.ByName("nombre") recupera un array con los elementos que tienen el mismo nombre
*/