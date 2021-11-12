'use strict'
//Se validad la ejeucion
try {
   let x=10;
    //miFuncion();
}
//Se capturan los errores y se muestra en consola
catch (error) {
 console.log(error);   
}
//El bloque finally es opcionañ
//se ejecuta despues del bloque catch se ejecuta siempre
finally{
    console.log('Termina la revision de errores');
}
console.log('Continuamos ...');
