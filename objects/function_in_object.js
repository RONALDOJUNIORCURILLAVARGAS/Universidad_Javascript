let persona ={
    nombre:'Juan',
    apellido:'Perez',
    email: 'jperez@gmail.com',
    edad:{
        antes:45,
        ahora:50,
        futuro:589
    },
    nombrecompleto: function(){
        //referencia el objeto en el que te encuentras;
        return this.nombre+' '+this.apellido ; 
    },
}
console.log(persona);
console.log(persona.nombrecompleto());
