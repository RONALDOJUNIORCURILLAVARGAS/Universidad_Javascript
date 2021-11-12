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
function determinartipo(tipo) {
   console.log(tipo.obtenerDetalles()) ;
   //Nos verifica lla instaancia de donde viene en este casp
   //La clase que hereda o con la que fue creada
   if(tipo instanceof Gerente)
   {
       console.log('Es un objeto de tipo Gerente');
       console.log(tipo.departamento);
   }
   else if(tipo instanceof Empleado){
       console.log("Es un tipo empleado");
       //Este atributo no existe en Empleado x eso aparece UNDEFINED
       console.log(tipo.departamento);
   }
   else if(tipo instanceof Object){
      console.log("Es un tipo object") ;
   }
}

let empleado1=new Empleado('Juan',500)
let gerente1=new Gerente('Sistemas','Carlos',500);

determinartipo(empleado1);
determinartipo(gerente1);