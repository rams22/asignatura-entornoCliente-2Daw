window.addEventListener("load", () => {
  const form = document.getElementById("formulario1");
  console.log(form); //reviso que me coge el form
  //ahora capturare cada elemento del formulario
  const usuario = document.querySelector("#usuario");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const passConfirmada = document.getElementById("passConfirm");

  console.log(pass); //me mostraria por consola por ejemplo la pass
  //ahora mi siguiente paso es prevenir el evento submit para que no redireccione

  //primero como ya tengo referenciado el formulario en la linea 2 con form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormu(); //esto llama a linea 20*
  });
  //primero con esta funcion capturare lo que el usuario meta
  const validarFormu = () => {
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const passValor = pass.value.trim();
    const passConfirmaValor = passConfirmada.value.trim();
    /*
		console.log(usuarioValor)//puedo verificar que si le doy a enviar ya estoy capturando lo que el usuario introduce
		console.log("contiene: "+usuarioValor.length)
		*/
    if (!usuarioValor) {
      //if (usuarioValor ==="")
      console.log("campo vacio");
      error(usuario, "campo vacio");
    } else {
      console.log(usuarioValor);
      correcto(usuario);
    }
  };

  const error = (input, mensaje) => {
    const control = input.parentElement;
    const aviso = control.querySelector("span");
    aviso.innerText = mensaje; //le pasamos en innertext el mensaje

    control.className = "falloControl";
  };
  const correcto = (input, mensaje) => {
    const control = input.parentElement;
    control.className = "ok";
  };

  
});
