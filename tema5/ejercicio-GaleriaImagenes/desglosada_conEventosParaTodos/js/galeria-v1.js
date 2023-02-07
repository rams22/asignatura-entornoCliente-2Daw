const iniciar= ()=>{
    const imagenFondo = ["url('./img/a.jpg')","url('./img/b.jpg')","url('./img/c.jpg')","url('./img/d.jpg')", "url('./img/e.jpg')", "url('./img/f.jpg')"];
    const imagenFondoMinis = ["url('./img/miniaturas/a.jpg')","url('./img/miniaturas/b.jpg')","url('./img/miniaturas/c.jpg')","url('./img/miniaturas/d.jpg')","url('./img/miniaturas/e.jpg')","url('./img/miniaturas/f.jpg')"];
    
    const imagenPrincipal = document.querySelectorAll(".imagen-ampliada")[0]; // querySelectorAll devuelve una lista, tengo que indicar cuál quiero CustomElementRegistry.elijo el elemento
    const miniaturas = document.querySelectorAll('[class *= "miniatura-"]');
    
    // asignamos imagen de fondo al contenedor para la imagen en grande.
    imagenPrincipal.style.backgroundImage = imagenFondo[0];
    
    // definimos la función para rellenar las miniaturas con las imágenes del array de forma aleatoria
    const rellenarMiniaturas = () =>{
        miniaturas.forEach ((miniatura,indice) => {
            miniatura.style.backgroundImage = imagenFondoMinis[indice];
        });
    }

    const mostrarEnAmpliada = (event) =>{
        console.log(event.target, event.currentTarget); 
        let ruta = event.target.style.backgroundImage;
        // usamos una expresión regular para eliminar de la ruta la carpeta miniaturas, ya que los archivos se llaman igual
        let rutaAmpliada = ruta.replace(/\/miniaturas/, "");//remplazo la palabra miniaturas por nada ----las barras rojas  indican que es expresion regular,la barra ruta  va precedida por la barra de escape \
        if (miniaturas.indexOf(event.target)>=0){
        imagenPrincipal.style.backgroundImage = rutaAmpliada;
    }}

    // rellenamos nuestra galería con las miniaturas
    rellenarMiniaturas();
    // asociar evento a cada una de las miniaturas
   // ****Esto lo muevo arriva miniaturas.forEach(miniatura => miniatura.addEventListener("mouseover", mostrarEnAmpliada)); 
   document.getElementsByClassName(".contenedor")[0].addEventListener("mouseover",mostrarEnAmpliada);
}

document.addEventListener("DOMContentLoaded", iniciar);
