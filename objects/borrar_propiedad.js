let persona ={
    nombre:'Juan',
    apellido:'Perez',
    email: 'jperez@gmail.com',
    edad:{
        antes:45,
        ahora:50,
        futuro:589
    },
    nombrecompleto: function() {
        //referencia el objeto en el que te encuentras;
        return this.nombre+' '+this.apellido; 
    } 
}
persona.tel='415641';

console.log(persona);

console.log(persona);
delete persona.tel;