let persona ={
    nombre:'Juan',
    apellido:'Perez',
    email: 'jperez@gmail.com',
   
}
persona.tel='415641';

console.log(persona);
let ar=JSON.stringify(persona);
//Volviendo a su estado natural
let convertidoDeJSON= JSON.parse(ar);
console.log(convertidoDeJSON);
let psfd=Object.values(persona)
console.log(persona);
delete persona.tel;
console.log(ar);
console.log(psfd);