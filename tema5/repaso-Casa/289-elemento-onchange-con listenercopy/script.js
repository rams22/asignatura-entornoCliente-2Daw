document.getElementById("seleccionador").addEventListener("onchange",seleccionAnimal);


function seleccionAnimal(){
    let animalito=document.getElementById("seleccionador");//recojo del elemento select con id seleccionador y lo meto en la variable animalito
    let animal=animalito.value;

    //ahora sobre el span cambiare el texto por el animal que el usuario seleccionara
    document.getElementById("spanId").innerText=`El animal seleccionado es: ${animal}.`
}