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
let empleado1=new Empleado('Juan',500)
console.log(empleado1.obtenerDetalles());
let gerente1=new Gerente('Sistemas','Carlos',500);
console.log(gerente1.obtenerDetalles());