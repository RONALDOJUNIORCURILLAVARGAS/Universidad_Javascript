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

}
let persona1= new Persona('Juan','Perez');
persona1.nombre="Juan Carlos";//set nombre
console.log(persona1.nombre);//get nombre
