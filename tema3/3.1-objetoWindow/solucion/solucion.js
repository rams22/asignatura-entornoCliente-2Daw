let idVentana = null;
function crearVentana(url, nombre, ancho, alto) {
    // idVentana = window.open("","",`height=${alto},width=${ancho}`);
    if (idVentana == null || idVentana.closed) {
        idVentana = window.open("", "", "height=" + alto + ",width=" + ancho);
    }
    else {
        idVentana.focus();
	}
}

//cerrar la ventana (comprobando antes si está abierta para control de errores
function cerrarVentana() {
    if (idVentana) {
        idVentana.close();
    }
}

//Mueve la ventana los valores indicados en los parámetros de la función.
function desplazarVentana(x, y) {
    idVentana.moveBy(x,y);
    idVentana.focus();
}

// Mostrar todas las propiedade de la ventana creada
function mostrarPropiedades() {
    if (idVentana){
        idVentana.document.write("<br>Propiedades de la ventana: <br>");
        for (let prop in idVentana){
            //idVentana.document.write(prop + " : " + idVentana[prop] + "<br>");
            idVentana.document.write(`${prop}:  ${idVentana[prop]}<br>`);
        } 
    }
    idVentana.focus();
}

// Maximizar la ventana creada
function maximizarVentana() {
	//idVentana.resizeTo(screen.availWidth,screen.availHeight);
    idVentana.resizeTo(screen.width,screen.height);
}

// Temporizadores
//setTimeout(crearVentana,1000,200,300);
//setTimeout(maximizarVentana,5000);
//setTimeout(cerrarVentana,7000);

// Ejercicio 2 
function ejercicio2(){
    // variable que almacena nombre y apellidos
    let nombre = "    Elisa Souto Mosquera   ";
    // recuperamos el contenedor con id "resultado" del documento para mostrar los datos de salida
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // a) Eliminamos espacios al principio y al final únicamente
    resultado.innerHTML+= `Longitud de la cadena "${nombre}" sin eliminar los espacios: ${nombre.length} <br>`;
    nombre = nombre.trim(); // en estecaso nons interesa ya modificar la cadena eliminando los espacios extra
    resultado.innerHTML+= `Longitud de la cadena "${nombre}" sin espacios: ${nombre.trim().length} <br>`;

    // b) Mostramos las cadenas convertidas a mayúsculas y minúsculas, pero solo para mostrarlas
    resultado.innerHTML+= `cadena en mayúsculas: ${nombre.toUpperCase()}<br>
                           cadena en minúsculas: ${nombre.toLowerCase()}<br>`;

    // c) Para obtener el nombre y cada uno de los apellidos los separamos por el espacio (separador de palabras)
    // Solo consideramos que lapersona tenga un nombre y dos apellidos, nada más.
    let palabras = nombre.split(" ");
    /*  Una vez separado obtendremos en la variable palabras una lista con los tres componentes del nombre, en el índice 0 
        se guardará el nombre, el segundo elemento (índice 1) tendrá el primer apellido y el tercer elemento (índice 2) el 
        segundo apellido
    */
    resultado.innerHTML += `Nombre: ${palabras[0]}<br>
                           Apellido 1: ${palabras[1]}<br>
                           Apellido 2: ${palabras[2]}<br>`;

    //  d) Generamos la nueva cadena de la forma nombre.apellido1apellido2 contactenando tal cual así los elementos
    let usuario = `${palabras[0]}.${palabras[1]}${palabras[2]}`;

    // nos quedamos solo con los 20 primeros caracteres y lo convertimos a minúsculas y ese será nuestro nobre de usuario
    let idUsuario = `${usuario.slice(0,20).toLowerCase()}`;

    // e) Mostrar los datos en una nueva ventana, nos aseguramos de que no existe ninguna porque este es un ejercicio nuevo
    crearVentana("","",300,300);
    idVentana.document.write(`Usuario: ${nombre} <br> 
                            Identificador: ${idUsuario}`);
}