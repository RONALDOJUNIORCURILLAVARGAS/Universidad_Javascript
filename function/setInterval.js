let reloj = ()=>{
    let fecha= new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
//Se ejecuta de manera asincron
setInterval(reloj,1000);