// ejercicio 286 cambio color

//esto ocurrira despues de 5 segundos
//un event listener
document.getElementById("color").addEventListener("click",seg5);
document.getElementById("color2").addEventListener("click",cambioColor2)
document.getElementById("color3").addEventListener("click",segAzul)

// 1)color verde
function seg5(){
    setTimeout(cambiarColor,2000);
}

function cambiarColor(){
    document.body.style.backgroundColor="green";
}

//color2
function cambioColor2(){
    setTimeout(c=()=>{
        document.body.style.backgroundColor="yellow"
    },3000);


}
/*
cambioColor2=()=>{
    
    setTimeout(document.body.style.backgroundColor="green",5000); esto no funciona

    //modo correcto:

    setTimeout(()=>{
    document.body.style.backgroundColor="green";
    },5000)    
}
*/
//otra forma
 //duda error
function segAzul(){
setTimeout(cambioColor3,5000);//en el settimeout no puedo asignar funciones flecha? Sinembargo me funciona
}
cambioColor3=()=>{
    //function cambioColor3(){
    document.body.style.backgroundColor="blue";
}


