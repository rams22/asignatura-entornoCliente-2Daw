const iniciar= ()=>{
    const imagenFondo = ["url('./img/a.jpg')","url('./img/b.jpg')","url('./img/c.jpg')","url('./img/d.jpg')"];
    const imagenFondoMinis = ["url('./img/miniaturas/a.jpg')","url('./img/miniaturas/b.jpg')","url('./img/miniaturas/c.jpg')","url('./img/miniaturas/d.jpg')"];
    
    const imagenPrincipal = document.querySelectorAll(".imagen-ampliada")[0]; // querySelectorAll devuelve una lista, tengo que indicar cuál quiero CustomElementRegistry.
    // es equivalente a document.getelementsByClassname("imagen-ampliada")
    const miniaturas = document.querySelectorAll('[class *= "miniatura-"]');
    
    imagenPrincipal.style.backgroundImage = imagenFondo[0];

    miniaturas[0].style.backgroundImage = imagenFondoMinis[0];
    miniaturas[1].style.backgroundImage = imagenFondoMinis[1];
    miniaturas[2].style.backgroundImage = imagenFondoMinis[2];
    miniaturas[3].style.backgroundImage = imagenFondoMinis[3];

    // asociar evento a cada una de las miniaturas
    //miniaturas.forEach(miniatura => miniatura.addEventListener("mouseover", mostrarEnAmpliada));
    miniaturas[0].addEventListener("mouseover",mostrarEnAmpliada0);
    miniaturas[1].addEventListener("mouseover",mostrarEnAmpliada1);
    miniaturas[2].addEventListener("mouseover",mostrarEnAmpliada2);
    miniaturas[3].addEventListener("mouseover",mostrarEnAmpliada3);  
    
    function mostrarEnAmpliada0(){
        imagenPrincipal.style.backgroundImage = imagenFondo[0];
    } 
    function mostrarEnAmpliada1(){ 
        imagenPrincipal.style.backgroundImage = imagenFondo[1];
    } 
    function mostrarEnAmpliada2(){ 
        imagenPrincipal.style.backgroundImage = imagenFondo[2];
    } 
    function mostrarEnAmpliada3(){ 
        imagenPrincipal.style.backgroundImage = imagenFondo[3];
    }  
}
document.addEventListener("DOMContentLoaded", iniciar);
