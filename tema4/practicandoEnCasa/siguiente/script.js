var perro={
    nombre:"nellie",
    edad:"3",
    colores:{
        color1:"blanco",
        color2:"marron",
        color3:"negro"
    },
    caracter:"docil",
    juguetes:["naranjito","dragon crujiente","astronauta","ballena","conejo"],
    dueños:{
        joaquin:["seijas",33,"oleiros"],
        sergio:["fernandez",22,"coruña"]
    },
};

document.write (perro.nombre);
document.write ("<br>");
document.write (perro.edad);
document.write ("<br>");
//como obtener el objeto dentro de un objeto que esta dentro de otro?
//primero accedo al objeto padre y despues al hijo
document.write(perro.colores.color1);

document.write ("<hr>");
document.write(perro.juguetes[1])