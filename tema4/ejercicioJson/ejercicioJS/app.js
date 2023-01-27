console.log("Esto funciona");
//creo una varble donde metere los datos
var app={};
//ahora el callback o funcion donde definir que har
//si tuviera los datos
var miLlamada=function(datos){//js moderno ser: var miLlamada=datos=>{}
   console.log(datos);
   app.animales=datos;//aqui meto los datos en la funcion app
   var html="";
   html+=`<h1>Lista nimales</h1>`;
   //una funcion por caDA elemento de mi mascota
   //js antiguo: app.animales.map(function(animales){})
   //js moderno:
   app.animales.map(animal=>{
    //por cada animal pues pondre imagen, +=para sumarle
    html+="<hr>";
    html+=`<img src='${animal.imagen}'></img>
            <h2>Nombre: ${animal.especie} <br>Tipo: ${animal.familia}</h2>`; 
    })
   document.getElementById("resultado").innerHTML=html;//meto la varble
};
//mostrar cokie
document.getElementById("ver").addEventListener('click',mostrar)
function mostrar(){
    alert (document.cookie);
}

//crear cookie
document.getElementById("crear").addEventListener("click",fabricar);


function fabricar(){
    let nombre=document.getElementById("nombre").value;
    let valor=document.getElementById("valor").value;
    let tiempo=document.getElementById("tiempo").value;
    tiempo=tiempo*60*1000;
    document.cookie=nombre + "=" + valor + "; " + tiempo;
}















