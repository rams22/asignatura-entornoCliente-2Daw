/*defino el objeto, se usa {}.
var animal=new Object

******************

var animal={
    nombre:"perro",
    tipo:"mamifero",
    patas:"4"
}
*/
//con constructor:
/*this es una palabra reservada para hacer referencia:
    // a la funcion que se esta invocando,
    // y al objeto donde la funcion es un metodo
    */
function Animal(nom,tip, pat, diet){
    this.nombre=nom;
    this.tipo=tip;
    this.patas=pat;
    this.dieta=diet;
}
var perro=new Animal("perro","mamifero",4,"carnivoro");
var serpiente=new Animal("serpiente","reptil",0,"carnivoro");
var paloma=new Animal("paloma","ave",2,"omnivoro");
//Ahora trabajare las propiedades
/*
*objeto.propiedad         
*objeto["propiedad"]  
* objeto[expresion]
*/
//Recorrer las propiedades de un objeto con for in
for (x in perro){
    document.writeln(perro[x]);//recorro todas pas propiedades que tenemos
};
document.write("<br>");
document.writeln("tipo"+perro.tipo);
document.write("<br>");
perro.rabo=true;
for (x in perro){
    document.writeln(perro[x]);//recorro todas pas propiedades que tenemos
};
document.write("<br>");
delete perro.rabo;
for (x in perro){
    document.writeln(perro[x]);//recorro todas pas propiedades que tenemos
};
/*metodos:
funcion dentro de un objeto
nombreObjeto.nombreMetodo(); el parentisis es para invocarlo sin parentisis lo consultas,lo que hay en su interior


*/