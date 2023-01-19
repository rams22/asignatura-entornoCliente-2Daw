//declarar un objeto a traves de funciones

function Casa(valor,terreno,color){//ahi en el parentisis van los 3 constructores
    //atributos: el valor, el tamaño...
    this.valor=valor;
    this.terreno=terreno;
    this.color=color;



    //metodos: las funciones que cumple, acoger gente, dar proteccion, guardar bienes...
    this.acogerGente= function(){
        alert("estais dentro de la casa");
    }
    this.darProteccion=function(){
        alert("Estas protegido");
    }
}

//Ahora creare el objeto a trabes de nuestra clase casa

var casaRams=new Casa();//cree un objeto pero vacio, aqui ya estaria definido
//alert (casaRams.valor);//al estar vacio da undefined

//Creare un objeto lleno
var casa1=new Casa(30000,250,"azul");
document.write(casa1.valor);

//ahora ejecuto el metodo
casa1.acogerGente();
console.log(casa1.__proto__);//sirve para saver de donde viene un objeto, osea cual es su clase y eso

//agregar otro atributo a el objeto casa1:
casa1.numeroPuertas=8;
console.log("la casa tiene "+casa1.numeroPuertas+" puertas");

//ahora definire una funcion fuera de la clase llamada contar Habitantes:
casa1.contarHabitantes= function(numero){
    alert("hay "+numero+" habitantes");
}
casa1.contarHabitantes(8);
