////p.cloneNode(true)
//mayus alt f --configurar el formateo


//1)CREO EL ENLACE CON EL BOTON QUE LLAMARA A LA SIG FUNCION
document.getElementById("pintarTitulo").addEventListener("click", pintarTitulo);
//creo una vari global que usare en mas ocasiones
var tBody = document.getElementsByTagName("tbody")[0];
function pintarTitulo() {
    tBody.firstChild.style.backgroundColor="yellow";
}

document.getElementById("pintarFilas").addEventListener("click",pintarFilas);
function pintarFilas(){   
    let longitud= tBody.getElementsByTagName("tr").length; 
    let filas= tBody.getElementsByTagName("tr");

    for (let i=2;i<longitud;i=i+2){//mi error era poner i+2
        filas[i].style.backgroundColor="yellowgreen";
        
    }
}
//crear una fila al inicio


//esta duncion me creara el td dentro 
function crearTD(texto){
    const tdNuevo=document.createElement("td");
    const textoNuevo=document.createTextNode(texto);
    //aqui creo el tdnuevo que es el elemento,y despues con el textnode meto texto a ese nodo nuevo
    tdNuevo.appendChild(textoNuevo);//aqui introduzco el texto en el cuadrado o td que cree, porque al crearlo estaba vacio
    return tdNuevo;//devuelvo ese td
}

document.getElementById("anadirFilaInicio").addEventListener("click",anadirFilaInicio);

function anadirFilaInicio(){
    const filaNueva=document.createElement("tr"); //creo la etiqueta vacia
    //le meto un texto
    const celdaNueva1=crearTD("texto....");
    //añado las 3 celdas:
    //1º aqui uso la variable de la linea 39
    filaNueva.appendChild(celdaNueva1);
    //2º aqui en el parametro introduzco directamente lo de la linea 39
    filaNueva.appendChild(crearTD("texto2..."));
    //3º
    filaNueva.appendChild(crearTD("texto3"));
    /* ************************************* */

    //aqui en la l-50 dire donde quiero seleccionar con elemento 
    const tBody=document.getElementsByTagName("tbody")[0];//mi error era que le di el hijo al tr y es en tbody
    //aqui selecciono donde 
    tBody.firstElementChild.nextElementSibling.insertBefore(filaNueva);//aqui inserto en el elemento posicion la filanueva
    //otra forma let x=tBody.getElementsByTagName("tr");
}

//añadir fila final
document.getElementById("anadirFilaFinTabla").addEventListener("click",anadirFilaFinal);

function anadirFilaFinal(){
    const filaNueva=document.createElement("tr"); //creo la etiqueta vacia
    //le meto un texto
    const celdaNueva1=crearTD("texto....");
    //añado la primera celda a la fila
    filaNueva.appendChild(celdaNueva1);

    filaNueva.appendChild(crearTD("texto2..."));

    filaNueva.appendChild(crearTD("texto3"));

    const elemento=document.getElementsByTagName("tbody")[0];//mi error era que le di el hijo al tr y es en tbody
    elemento.appendChild(filaNueva);//aqui inserto en el elemento posicion la filanueva

}




document.getElementById("anadirFilaFinTabla").addEventListener("click",anadirFilaFinTabla);
document.getElementById("eliminarFila").addEventListener("click",eliminarFila);
