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
document.getElementById("anadirFilaInicio").addEventListener("click",anadirFilaInicio);

//const celdaNueva=document.createElement("td");
function añadirFilaInicio(){
    const filaNueva=document.createElement("tr"); //creo la etiqueta vacia
    //le meto un texto
    
    const elemento=document.getElementsByTagName("tr")[0];//aqui abro una posicion
    elemento.appendChild(filaNueva);//aqui inserto en el elemento posicion la filanueva

}




document.getElementById("anadirFilaFinTabla").addEventListener("click",anadirFilaFinTabla);
document.getElementById("eliminarFila").addEventListener("click",eliminarFila);
