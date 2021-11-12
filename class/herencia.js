//No es posible crear objetos antes de crear la clase objeto
//No se aplica el concepto de hosting

class Persona{
    constructor(nombre,apellido){
        //Se usa una barra inferior para utilizar en un metodo
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
}
//Clase hija
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        //Se utiliza super para enviar parametros a la clase padre
        super(nombre,apellido);
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }

}
let persona1= new Persona('Juan','Perez');
console.log(persona1);

let empleado1=new Empleado('Ronaldo','Curilla','Sistemas');
console.log(empleado1);
//cambiamos el departamento
empleado1.departamento='Finanzas';
console.log(empleado1);