let persona1={
    nombre:'juan',
    apellido:'Perez',
    nombrecompleto: function (titulo,tel) {
        return titulo+' , '+this.nombre+ ' ' +this.apellido+','+ tel;
    }
}
let persona2 ={
    nombre :'Carlos',
    apellido:'Lara'
}
//Uso de call para usar
// el metodo personal nombrecompleto con los datos de la pesona1
console.log(persona1.nombrecompleto('Doctor general','987-4561'));
console.log(persona1.nombrecompleto.call(persona2,'Ingeniero de sistemas','999-4564')) ;
//La funcion de un objeto se usara en el otro con la ayuda de call
//Estamos pasando la propiedad de la funcion