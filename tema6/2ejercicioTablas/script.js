////p.cloneNode(true)
//mayus alt f --configurar el formateo
window.onload

//1)CREO EL ENLACE CON EL BOTON QUE LLAMARA A LA SIG FUNCION
document.getElementById("pintarTitulo").addEventListener("click", pintarTitulo);
//creo una vari global que usare en mas ocasiones
var tBody = document.getElementsByTagName("tbody")[0];
function pintarTitulo() {
    tBody.firstChild.style.backgroundColor="red";
}

document.getElementById("pintarFilas").addEventListener("click",pintarFilas);
function pintarFilas(){   
    let longitud= tBody.getElementsByTagName("tr").length; 
    let filas= tBody.getElementsByTagName("tr"); 

    for (let i=2;i<longitud;i+2){
        filas[i].style.backgroundColor="green";
    }
}



document.getElementById("anadirFilaInicio").addEventListener("click",anadirFilaInicio);
document.getElementById("anadirFilaFinTabla").addEventListener("click",anadirFilaFinTabla);
document.getElementById("eliminarFila").addEventListener("click",eliminarFila);
