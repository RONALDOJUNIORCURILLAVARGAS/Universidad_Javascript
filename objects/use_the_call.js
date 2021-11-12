let persona1={
    nombre:'juan',
    apellido:'Perez',
    nombrecompleto: function () {
        return this.nombre+ ' ' +this.apellido;
    }
}
let persona2 ={
    nombre :'Carlos',
    apellido:'Lara'
}
//Uso de call para usar
// el metodo personal nombrecompleto con los datos de la pesona1
console.log(persona1.nombrecompleto());
console.log(persona1.nombrecompleto.call(persona2)) ;
//La funcion de un objeto se usara en el otro con la ayuda de call
//Estamos pasando la propiedad de la funcion