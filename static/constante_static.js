
class Persona{
    static contadorPersona=0;//atributo de nuestra clase por ser STATIC
    static get MAX_OBJETOS(){
        return 5;
    }
    constructor(nombre,apellido){
        //Se usa una barra inferior para utilizar en un metodo get y set
        this._nombre=nombre;
        this._apellido=apellido;
        //No ponemos un yombajo (_) debido a que no utilizaremos un get ni set
       if(Persona.contadorPersona<Persona.MAX_OBJETOS){
           this.idPersona= ++ Persona.contadorPersona; 
       }
       else{
           console.log("se ha superado el maximo cantidad de objetos permitidos");
       }
       
       
        console.log("Se incrementa contador : "+ Persona.contadorPersona);
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
        return this.idPersona+': '+this._nombre+' '+this._apellido;
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
console.log(persona1.toString());

let empleado1=new Empleado('Ronaldo','Curilla','Sistemas');
console.log(empleado1.toString());

let persona2= new Persona('Karla','Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersona)

console.log(Persona.MAX_OBJETOS);
Persona.MAX_OBJETOS*10;
console.log(Persona.MAX_OBJETOS);
let persona3= new Persona('Mariano','Lara');
let persona4= new Persona('Armando','Toledo');
let persona5= new Persona('Laura','Quintero');
//No se crea el atributo id establecido en la creación de la clase persona por llegar al limite de 5
console.log(persona5.toString());