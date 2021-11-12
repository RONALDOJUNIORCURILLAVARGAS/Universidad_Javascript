let miPromesa = new Promise((resolve,rejected)=>{
    let expresion= false;
    if(expresion){
        resolve('resolvio correcto');
    }else{
        rejected('Se produjo un error');
    }

}
);

//THEN sin el uso del catch
/*
miPromesa.then(
     valor => console.log(valor),
     error => console.log(error)
);*/

//Uso del catch
miPromesa.then(valor=> console.log(valor)).catch(error=>console.log(error));

