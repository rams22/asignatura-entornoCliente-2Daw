

window.onload=()=>{                                            //tipo click
    document.getElementById('crearAnimales').addEventListener('click',function(){
        var variableXhr= new XMLHttpRequest();
        variableXhr.open('GET','animales.json',true);
        variableXhr.onload=function(){//despues pondre el send linea 51
            if (this.status ===200) {
                const animalito= JSON.parse( this.responseText);
                let html='';
                animalito.forEach(function(animal){
                    html+=`
                        <table>
                            <tr>
                                <th>
                                    ${animal.especie}
                                </th>
                                <th>
                                    <img src='${animal.imagen}'></img>
                                </th>
                                <th>
                                    ${animal.familia}
                                </th>
                            </tr>
                        </table>    
                    `;
                })
                document.getElementById('animales1').innerHTML=html;
            }

        }
        variableXhr.send();
    })
}