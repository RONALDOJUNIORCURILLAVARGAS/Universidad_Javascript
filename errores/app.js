'use strict'
let resultado='4';
try {

    //Con el throw podemos generar un error 
    if( isNaN(resultado))throw 'No es un numero';
    else if(resultado==='') throw 'Es cadena vacia';
    else if(resultado >=0) throw 'Valor positivo';
    else if(resultado <0) throw 'Valor negativo';
} catch (error) {
    //Se imprimira el error debido al throw creado 
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina la revision de errores');
}