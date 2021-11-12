let persona1={
    nombre:'juan',
    apellido:'Perez',
    nombrecompleto: function (titulo,telefono) {
        return titulo+' , '+this.nombre+ ' ' +this.apellido+' , '+telefono;
    }
}
let persona2 ={
    nombre :'Carlos',
    apellido:'Lara'
}
//Uso de apply para usar
// el metodo personal nombrecompleto con los datos de la pesona1
console.log(persona1.nombrecompleto('DOCTOR','445-4658'));
let arreglo =['Ingeniero de Sistemas','987-4561'];
//Para enviar argumentos se hace por medio de un arreglo
console.log(persona1.nombrecompleto.apply(persona2,arreglo)) ;
