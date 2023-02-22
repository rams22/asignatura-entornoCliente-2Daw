console.log("linkeado Correctamente")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
//para acceder al formulario
const formulario=document.getElementById("formulario");
const inputs =document.querySelectorAll("#formulario input")//acceder a todos los imputs de el id formulario. Un array con todos
//un event listener para comprobar que no hay error en directo, posteriormente al final querre que de el aviso
function validarFormu(e){
    //console.log("tecla arriba"); //compruebo que el keyup funciona
	//console.log(e.target.name); //compruebo
	switch (e.target.name){
		case "usuario":
		console.log("funciona nombre");
		break;

		case "nombre":
		console.log("funciona nombre");
		break;

		case "usuario":
		console.log("funciona nombre");
		break;

		case "usuario":
		console.log("funciona nombre");
		break;

		case "usuario":
		console.log("funciona nombre");
		break;

		case "usuario":
		console.log("funciona nombre");
		break;

	};
}

inputs.forEach((input)=>{//por cada imput quiero generar un eventlistener
    input.addEventListener("keyup", validarFormu);//cada vez que el usuario suelta la tecla algho se ejecuta una funcion de validar formulario
	input.addEventListener("blur",validarFormu);//cuando un elemento pierde su foco
});

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
});