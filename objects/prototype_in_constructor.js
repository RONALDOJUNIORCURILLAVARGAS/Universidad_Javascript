function Persona(nombre,apellido,email) {
    this.nombre= nombre;
    this.apellido= apellido;
    this.email=email;
    this.nombrecompleto=function() {
        return this.nombre+' '+this.apellido;
        
    }
}
//Altera elconstructor del objeto
Persona.prototype.tel='445645-54';
Persona.prototype.autor=function () {
    return 'hola mundo';
};

let padre= new Persona('Juan','Perez','jperez@gmail.com');
padre.tel='123456789';
let madre= new Persona('Laura','Quintero','lquintero@gmail.com');
madre.tel='999-456';
console.log(padre.tel);
console.log(madre.tel);
console.log(padre);
