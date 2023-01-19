/*
*****************************************************************************************************************************************

a. Mostrar el número de elementos del array.
b. Mostrar todos los elementos del array.
c. Mostrar los elementos del array en sentido inverso.
d. Mostrar los elementos del array ordenados alfabéticamente (pero sin modificar el array).
e. Añadir un elemento al principio del array.
f. Añadir un elemento al final del array.
g. Borrar un elemento al principio del array (y decir cuál se ha borrado).
h. Borrar un elemento al final del array (y decir cuál se ha borrado).
i. Mostrar el elemento que se encuentra en una posición que el usuario indica.
j. Mostrar la posición en la que se encuentra un elemento que le indica el usuario.
k. Mostrar los elementos que se encuentran en un intervalo que el usuario indica.

******************************************************************************************************************************************
*/    
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

const animales3=[
    ["oso","perro","foca"],
    ["paloma","pollo"],
    ["culebra","cocodrilo","lagarto"]
]

const listaPersonas = [
    {nombre: "Ana", apellido1: "Álvarez", apellido2: "Cabado", edad: 22},
    {nombre: "Abel", apellido1: "Liste", apellido2: "Souto", edad: 23},
    {nombre: "Barca", apellido1: "Pereira", apellido2: "Aguiar", edad: 29},
    {nombre: "Benito", apellido1: "Riaño", apellido2: "Amenedo", edad: 21},
];


//a. Mostrar el número de elementos del array.
document.write("El array anumales tiene: "+animales.length+" elementos<br>");
document.write("El array animales 2 tiene: "+animales2.length+"elementos<br>");
document.write("El array lista de personas tiene: "+listaPersonas.length+"elementos<br><hr>");

//b. Mostrar todos los elementos del array.
    //1)Con for:
        console.log(Array.isArray(animales));//aqui compruebo que mi variable es un array. Con animales instanceof Array tambien podria
        for(let i=0;i<animales.length;i++){
            document.writeln(animales[i]);//me sale objeto objeto......
        }
        document.write("<hr>")
        for(let i=0;i<animales3.length;i++){
            for(let j=0;j<animales3[i].length;j++){
                document.writeln(animales3[i][j]);
            }
            document.write("<br>")
        }
        document.write("<hr>")
        document.write(animales3[1][0]+"<br>");
        document.write(animales[1][2]);//undefinied
        document.write(`<br>El maximo: ${animales3[animales3.length-1]}`);//el largo es 3 pero como cuenta desde 0, el 3 equivale al 2
        document.write(`<br>El ultimo de la ultima: ${animales3[animales3[animales3.length-1].length-1]}`);/*********Duda
        Duda
        */

        document.write("<hr>")
    //2 Con for each
    animales3.forEach(element => document.write(element+"<br>"));
    //si funcion flecha
    //parametros: valor o elemento--- indice--- arreglo
    document.write("<br>")
    animales2.forEach(function(valor,indice,animales2){
        document.write("<b>"+valor+"</b> "+"se encuentra en el indice: "+indice+" del array "+animales2+"<br>");
    });
document.write("<hr>");
//c. Mostrar los elementos del array en sentido inverso.
    //1)con un bucle for:
    for (let i=animales2.length-1;i>=0;i--){
        document.writeln(animales2[i]);
    }
    document.write("<hr>");

    //2)con array reverse:
    var animales2Revertido=animales2.reverse();
    document.write(animales2Revertido);
    document.write("<br>El metodo reverse es destructivo: "+animales2);//porque si se lo aplique a una nueva variable me cambia el otro?¿
    animales2.reverse();
    document.write(`<br><b><i>Lo acabo de recolocar otra vez:</i></b><br> ${animales2}`)
    document.write("<hr>");

//d. Mostrar los elementos del array ordenados alfabéticamente (pero sin modificar el array).
    //metodo sort ordena los valores en unicode por defecto
var numeritos=[3,2,5,2,7,3,52];//el 5 lo toma antes que el siete, ordena los caracteres en cuanto al primer unicode
animales2.push("camello","cobra","araña","perrete");//añado al final del array , con array pop() eliminaria el ultimo
numeritos.sort();
animales2.sort();
document.writeln(numeritos);
document.write("<br>")
document.write(animales2);
document.write("<hr>");

//e. Añadir un elemento al principio del array.
    //con unshift() puedo agregar uno o varios elementos al principio del array
    animales2.unshift("abispa");
    document.write(animales2)
    document.write("<hr>");

//g. Borrar un elemento al principio del array (y decir cuál se ha borrado).
    //con shift()
    var eliminarConShift=animales2.shift();
    document.write(animales2);
    document.write(`<br>el valor eliminado es:<b> ${eliminarConShift}</b>`)
    document.write("<hr>");

//h. Borrar un elemento al final del array (y decir cuál se ha borrado).
    //con pop()
    var eliminarConPop=animales2.pop();
    document.write(`el valor eliminado es: ${eliminarConPop}<br>`)
    document.write(animales2+"<br>");

   // i. Mostrar el elemento que se encuentra en una posición que el usuario indica.
    // j. Mostrar la posición en la que se encuentra un elemento que le indica el usuario.
   //  k. Mostrar los elementos que se encuentran en un intervalo que el usuario indica.ç


   //El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
   //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    //array.splice(start[, deleteCount[, item1[, item2[, ...]]]])