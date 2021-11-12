class Empleado{
    constructor(nombre,sueldo){
        this.nomnre=nombre;
        this.sueldo=sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre ${this.nomnre}, sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(departamento,nombre,sueldo){
        super(nombre,sueldo);
       this.departamento=departamento; 
    }
    obtenerDetalles(){
        return `Gerente: dpto:${this.departamento} ${super.obtenerDetalles()} `;
    }
}

//Metodo generico para acceder a un metodo de diferentes clases
//APLICACION DE POLIMORFISMO
function imprimir(tipo) {
   console.log(tipo.obtenerDetalles()) ;
}

let empleado1=new Empleado('Juan',500)
let gerente1=new Gerente('Sistemas','Carlos',500);

imprimir(empleado1);
imprimir(gerente1);