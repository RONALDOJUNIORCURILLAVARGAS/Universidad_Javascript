let x = 20;
console.log(x.length);
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
persona.edad.antes=48;
console.log(persona);
console.log(persona.nombrecompleto());