class Persona{
    static contadorPersonas=0;
    constructor(nombre,apellido,edad){
            this._nombre=nombre;
            this._apellido=apellido;
            this._edad=edad;
            this._idPersona=++Persona.contadorPersonas;
    }
    get idPersona(){
        return this._idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad=edad;
    }
    toString(){
        return 'ID_PERSONA :'+this._idPersona+' y se llama '+this._nombre+' '+this._apellido+' y su edad es : '+this._edad;
    }

}
class Empleado extends Persona{
    static contadorEmpleado=0;
    constructor(sueldo,nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._sueldo=sueldo;
        this._idEmpleado=++Empleado.contadorEmpleado;
        //Poner el id de la clase padre(Persona) a la clase empleado
        //this._idEmpleado=super.idPersona;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return 'ID_EMPLEADO : '+this._idEmpleado+' '+super.toString()+' y su sueldo es de: '+this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorCliente=0;
    constructor(fecharegistro,nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._fecharegistro=fecharegistro;
       this._idCliente=++Cliente.contadorCliente;
       //Poner el id de la clase padre(Persona) a la clase hija Cliente
      // this._idCliente=super.idPersona;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fecharegistro(){
        return this._fecharegistro;
    }
    set fecharegistro(fecharegistro){
        this._fecharegistro=fecharegistro;
    }
    toString(){
        return 'ID_CLIENTE: '+this._idCliente+' '+super.toString()+' y la fecha de registro es : '+this._fecharegistro;
    }
}

let persona1= new Persona('Juan','Perez',15);
let persona2= new Persona('Lucas','Ramos',26);
let persona3= new Persona('Rude','Rica',24);

let empleado1=new Empleado(1654,'Ronaldo','Curilla',21);
empleado1.apellido="Rivera";
let empleado2=new Empleado(1460,'Rivaldo','Ferna',23);

let cliente1=new Cliente('16-02-2021','Lisa','Simpson',15);
cliente1.fecharegistro='02-01-2001';
let cliente2=new Cliente('24-07-2018','Andres','Gharni',21);


console.log(persona1);
console.log(persona2);
console.log(Persona.contadorPersonas);

console.log(empleado1);
console.log(empleado1.toString());
console.log(Empleado.contadorEmpleado)



console.log(cliente1);
console.log(cliente1.toString());
console.log(Cliente.contadorCliente);