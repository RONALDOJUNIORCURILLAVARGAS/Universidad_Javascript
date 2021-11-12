function Persona(nombre,apellido,email) {
    this.nombre= nombre;
    this.apellido= apellido;
    this.email=email;
    this.nombrecompleto=function() {
        return this.nombre+' '+this.apellido;
        
    }
}

let padre= new Persona('Juan','Perez','jperez@gmail.com');
let madre= new Persona('Laura','Quintero','lquintero@gmail.com');

console.log(padre.nombrecompleto());
console.log(madre.nombrecompleto());

let miObjeto= new Object();
let miobjeto2= {};

let micadena1= new String('hola');
let micadena2= 'hola';

let minumero1= new Number(4);
let minumero2=3;

let miBoolean = new Boolean(true);
let miBoolean2= false;

let miarreglo1= new Array();
let miarreglo2=[];

let mifuncion=new Function();
let mifuncion2=function () {};