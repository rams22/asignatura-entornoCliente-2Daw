/*
**********************************************************************************************************************
Partimos del array siguiente:
const listaPersonas = [
{nombre: "Ana", apellido1: "Álvarez", apellido2: "Cabado", edad: 22},
{nombre: "Abel", apellido1: "Liste", apellido2: "Souto", edad: 23},
{nombre: "Barca", apellido1: "Pereira", apellido2: "Aguiar", edad: 29},
{nombre: "Benito", apellido1: "Riaño", apellido2: "Amenedo", edad: 21},
];
a. Queremos obtener un nuevo array con solo los nombres y apellidos de las personas, utilizando el método map y 
plantillas literales.

b. Queremos obtener un listado de las personas mayores de 25 años.
***********************************************************************************************************************
*/


//*ejemplo:
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  let materiales2=materials.map(material => material.length);
  // Expected output: Array [8, 6, 7, 9]
  console.log("Este es el array materiales: "+materials)
  console.log(materiales2);

//ejemplo2
 const duplicado=materiales2.map(valor =>{
    return valor/2;//devuelve el valor original /2, sin modificar el array original
 });
 //el primer parametro valor, es con el que voy a coger cada elemento a verificar, primero el valor 8, 2 el valor 6...
//el segundo valor seria el indice pero no se suele usar, 
//el tercero es el array completo o la referencia al array por si estuviera en otro lugar, pero es poco usado
console.log ("No modifica el array original, este sigue intacto: "+materiales2);
console.log ("Este es el nuevo array"+duplicado)

  /****************** fin del ejemplo **************************** */


var listaPersonas = [
    {nombre: "Ana", apellido1: "Álvarez", apellido2: "Cabado", edad: 22 ,email:"ana@hotmail.com"},
    {nombre: "Abel", apellido1: "Liste", apellido2: "Souto", edad: 23, email:"lordAbel@gMail.Com"},
    {nombre: "Amanda", apellido1: "Pereira", apellido2: "Aguiar", edad: 29, email:"AmandaMix@hotlow.mix"},
    {nombre: "Benito", apellido1: "Riaño", apellido2: "Amenedo", edad: 21, email:"itoBeN@hotmail"},
];
//a.1 Queremos obtener un nuevo array con solo los nombres y apellidos de las personas, utilizando el método **map** y plantillas literales.
    //map itera cada elemento del array y hace cambios en el, por ejemplo crear un nuevo array multiplicado por 2
 var listaNueva=listaPersonas.map(valor=>`${valor.apellido1} ${valor.apellido2}-${valor.nombre}`);
 listaNueva.forEach(valor=>document.write(`${valor}<br>`))
document.write("<hr>")
//a.2 Ahora serializare los emails para que queden correctos
var serializar=listaPersonas.map(function(listaPersonas){
    listaPersonas.email=listaPersonas.email.toLocaleLowerCase();
    document.write(listaPersonas.email+"<br>");
    return listaPersonas;
});
//console.log(listaPersonas.email); esto da undefienied porque necesito un foreach o algo que interaccione cada elemento

//********************************************************* */

//ahora lo hare con funcion flecha
document.write("<hr>")

const serializarPersona= listaPersonas=>{
    listaPersonas.email = listaPersonas.email.toLocaleLowerCase();
    return listaPersonas;
}
const despuesDeSerializar= listaPersonas.map(serializarPersona);
console.log(despuesDeSerializar.forEach(valor=>document.write(valor.email+"<br>")))



//b. Queremos obtener un listado de las personas mayores de 25 años.