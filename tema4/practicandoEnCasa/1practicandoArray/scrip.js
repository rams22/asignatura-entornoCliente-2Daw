let animales=new Array; //aqui no podria declarar constante, solo puedo asignar en el momento que declaro, osea abajo
//creacion de array de arrays
animales= [
    {nombre:"perro",familia:"mamífero",patas:4},
    {nombre:"mono", familia:"mamifero",patas:2},
    {nombre:"cocodrilo",familia:"reptil",patas:4},
    {nombre:"paloma",familia:"ave",patas:2,},
    {nombre:"cangrejo",familia:"crustaceo",patas:8}
];
//crear array 2
const animales2=["paloma","perro","gato","bicha"];
        // Apartado a) Obtener array nombres personas utilizando map
//crear array 3 
let animales3 =new Array();
animales3[0]='oso';
animales3[1]="perro";
animales3[2]="cabra";
animales3[3]='cobra';

/********************************************************** */
document.write ("El largo del array es: "+animales.length+"<br>");
document.write (animales);
document.write("<hr>");
//print (animales); abre impresora
document.write(animales2);
console.log(animales2);
console.log(animales);

document.write("<hr>");

//recorrer el array con for:
for (let i=0; i<animales3.length;i++){
    document.writeln(animales3[i]);
}
document.write("<br>")
//ahora con for in
for (let i in animales3){
    document.writeln(animales3[i]);
}
document.write("<br>")
//ahora con for-each
animales3.forEach( animalito => document.writeln(animalito))
document.write("<br>");
//mapeado del array numeros
let numeritos=[0,1,2,3,4,5,6,7,8,9,10];
var tabla5=[];
        //Con for
for (var i=0,max=numeritos.length;i<max;i+=1){
    tabla5.push(numeritos[i]*5);
}
console.log("Tabla del 5: ");
console.log(tabla5);
        //con map
