let persona ={
    nombre:'Juan',
    apellido:'Perez',
    email: 'jperez@gmail.com',
    edad:{
        antes:45,
        ahora:50,
        futuro:589
    },
    //la propiedad se creara como funcion
    get nombrecompleto(){
        //referencia el objeto en el que te encuentras;
        return this.nombre+' '+this.apellido ; 
    },
}

console.log(persona);
//no necesitamos indicar q  es una funcion olvidemos el ()
console.log(persona.nombrecompleto);
