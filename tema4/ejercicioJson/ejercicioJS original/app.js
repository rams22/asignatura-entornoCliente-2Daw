//1) primero creo una variable en la que metere el json .
const variableJson= new XMLHttpRequest();
//2)abro una nueva solicitud utilizando el método open()
variableJson.open('GET','jason.json', true);
//3) cuando cargue hare:
variableJson.onload =function(){
    //en caso de que todo sea ok o 200, recuperare el contenido de la respuesta el cual convertire a json
    if(this.status ===200){
        //Es necesario convertir el json a un objeto de javascript con la funcion parse() al que llamare animal
        let animal= jason.parse(this.responseText);
        document.getElementById('respuesta').innerText=animal;
    }
    //para enviar la solicitud get
    animal.send();
}
