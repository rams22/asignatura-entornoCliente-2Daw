function usuario(name,user,mail,age,pass){
    this.nombre=name;
    this.usuario=user;
    this.mail=mail;
    this.edad=age;
    this.contrasena=pass;
    this.usuarioMail=function(){
        return this.usuario+"<br>"+this.contrasena;
    }
}

var rams=new usuario("joaquin","rams22","rams8557@gmail.com","33","8557");
var monseri=new usuario("fransua","monseri","monseri@gmail.com","mon123");

document.write(rams.usuarioMail());
//metodo moderno
class Persona{
    constructor (name,nick){
        this.nombre=name;
        this.alias=nick;
    }
}
document.write("<br>");
let usuario1= new Persona("jacinto","jaci");
document.write (usuario1.alias);