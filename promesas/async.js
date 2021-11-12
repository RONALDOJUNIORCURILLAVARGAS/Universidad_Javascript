let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvió correcto');
    }  
    else{
        rechazar('Se produjo un error');    
    }
       
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));
//Palabra async:
//Significa que el metodo está obligado a regresar una promesa
async function mifunctionconpromesa(){
   return 'saludos conm promesa y async';
}
//como es una funcion tiene q llamarse con parentesis

mifunctionconpromesa().then(valor=>console.log(valor));

