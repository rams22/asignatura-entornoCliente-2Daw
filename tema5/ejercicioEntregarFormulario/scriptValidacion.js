const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//para acceder al formulario
const formulario=document.getElementById("formulario");
//para acceder a todos los imputs de el id formulario. Un array con todos
const inputs=document.querySelectorAll("#formulario input");

function validarFormu(e){
    //console.log("el blur funciona");//compruebo que funciona
    //con un swicth accedo al input donde el evento esta presente
    switch (e.target.name){//me da el nombre del evento que esta referenciado
        case "nombre":
            console.log("funciona el nombre");//compruebo que funciona
            if (expresiones.nombre.test(e.target.value)){//accedo al valor del input y si fuera true o correcto
            }else{//si no fuera correcto lo de la expresion regular
                document.getElementById("caja_nombre").classList.add("formulario_grupo-incorrecto")
            };
            break;
        case "email":
            console.log("funciona el email");
            break;
        case "provincia":
            console.log("funciona provincia");
            break;
        case "fecha":
            console.log("funciona el fecha");
            break;
        case "email":
            console.log("funciona el email");
            break;
        case "telefono":
            console.log("funciona el telefono");
            break;
        case "condiciones":
            console.log("funciona condiciones");
        break;
    }
}




inputs.forEach((input)=>{
    input.addEventListener("blur", validarFormu);//cuando pierda el foco llamare a la funci validarformu
    input.addEventListener("keyup", validarFormu);
});

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
})