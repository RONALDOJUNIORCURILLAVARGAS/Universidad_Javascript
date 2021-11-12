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