window.onload = ()=>{
     document.getElementById('crearEmpleado').addEventListener('click', function() {
          const xhr = new XMLHttpRequest();   
          xhr.open('GET', 'empleado.json', true);    
          xhr.onload = function() {
               if(this.status === 200) {
                        const persona =  JSON.parse( this.responseText );
                        const htmlTemplate = `
                         <ul>
                              <li>ID: ${persona.id}</li>
                              <li>Nombre: ${persona.nombre}</li>
                              <li>Empresa: ${persona.empresa}</li>
                              <li>Actividades: ${persona.trabajo}</li>
                         </ul>
                        `;
                        document.getElementById('empleado').innerHTML = htmlTemplate;
               }
          }     
          xhr.send();
     });
     
     document.getElementById('crearEmpleados').addEventListener('click', function() {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', 'empleados.json', true);
          xhr.onload = function() {
               if(this.status === 200) {
                    const personal =  JSON.parse( this.responseText );
                    let htmlTemplate = '';
                    personal.forEach(function(persona) {
                              htmlTemplate += `
                              <ul>
                                   <li>ID: ${persona.id}</li>
                                   <li>Nombre: ${persona.nombre}</li>
                                   <li>Empresa: ${persona.empresa}</li>
                                   <li>Actividades: ${persona.trabajo}</li>
                              </ul>
                              `;
                    })
                    document.getElementById('empleados').innerHTML = htmlTemplate;                   
               }
          }
          xhr.send();
     })
}
