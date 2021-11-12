
class Persona{
    static contadorObjetosPersona=0;
    constructor(nombre,apellido){
        //Se usa una barra inferior para utilizar en un metodo
        this._nombre=nombre;
        this._apellido=apellido;

        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador : "+ Persona.contadorObjetosPersona);
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
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
    //Sobreescribiendo el metodo de la clase padre(object)
    toString(){
        //Se aplica polimorfismo(Multiples formas en tiempo de ejecucion)
        //El metodo que se ejecuta depende si es una referencia de un tipo padre o hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("saludos desde metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}
//Clase hija
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        //Se utiliza super para enviar parametros a la clase padre
        //Super sirvve para acceder a los atributos y metodos de la clase padre
        super(nombre,apellido);
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    //Sobreescritura del metodo nombreCompleto()
    nombreCompleto(){
         //Super sirvve para acceder a los atributos y metodos de la clase padre
        return super.nombreCompleto()+' , '+this._departamento;
    }

}
let persona1= new Persona('Juan','Perez');
console.log(persona1);
console.log(persona1.toString());


let empleado1=new Empleado('Ronaldo','Curilla','Sistemas');
console.log(empleado1);


let arbe=new Empleado('Rudeos','Curilla','Finanzas');
console.log(arbe); 

console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar();
//No es posible llamar un metodo static desde un objeto
Persona.saludar();
//Se puede llamar desde la clase Persona

Persona.saludar2(persona1);
Persona.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);