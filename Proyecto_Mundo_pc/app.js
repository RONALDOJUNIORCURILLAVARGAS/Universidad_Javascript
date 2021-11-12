class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }

}
class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.idRaton=++Raton.contadorRatones;
    }
    toString(){
        return ` { ID_RATON: ${this.idRaton}, TIPO_ENTRADA: ${super.tipoEntrada}, MARCA: ${super.marca} }`;
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclado=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.idTeclado=++Teclado.contadorTeclado;
    }
    toString(){
        return ` { ID_TECLADO: ${this.idTeclado}, TIPO_ENTRADA: ${super.tipoEntrada}, MARCA: ${super.marca} }`;
    }
}

class Monitor{
    static contadorMonitor=0;
    constructor(marca,tamaño){
        this._idMonitor=++Monitor.contadorMonitor;
        this._marca=marca;
        this._tamaño=tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño=tamaño;
    }
    toString(){
        return ` { ID_MONITOR: ${this._idMonitor},  MARCA: ${this._marca},  TAMAÑO: ${this._tamaño} }`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor=monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado=teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton=raton;
    }
    toString(){
        return ` ID_COMPUTADORA : ${this._idComputadora} \n NOMBRE : ${this._nombre} \n MONITOR : ${this._monitor.toString()} \n RATON   : ${this._raton.toString()} \n TECLADO : ${this._teclado.toString()} `;
    }
}

class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }
    get idOrden(){
        return this._idOrden;
    }
    get computadora(){
        return this._computadoras;
    }
    set computadoras(computadora){
        for(computador in this._computadoras){
            this._computadoras[nombrepropiedad]=computadora;
        }

    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadoraorden='';
        for(let computadora of this._computadoras){
            computadoraorden+= '\n{'+computadora.toString()+'}';
        }
       // console.log(`COMPUTADORAS : \n ${computadoraorden}`);
        return ` COMPUTADORAS : \n ${computadoraorden}`;
    }
    toString(){
        console.log(` ORDEN_DE_COMPRA : ${this._idOrden} \n ${this.mostrarOrden()}`);
    }

}

//let dispositivo1= new DispositivoEntrada('raton','Razer');

let raton1= new Raton('USB 2.0','Razer') ;
let raton2= new Raton('minijack','ACER') ;

let teclado1=new Teclado('USB 2.0','ANTRYX');
let teclado2=new Teclado('USB 3.0','LOGITECH');
let teclado3=new Teclado('ESTANDAR','HYPER-X');

let monitor1=new Monitor('RAZER','27 " ');
let monitor2=new Monitor('ASUS','24 " ');


let computadora1=new Computadora('ACER RT100',monitor1,teclado2,raton2);
let computadora2=new Computadora('HP-PAVILLION-GAMING 16',monitor2,teclado3,raton1);

let orden1=new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.toString();

/*

console.log(computadora1.toString());
console.log(monitor2.toString());

console.log(raton1.toSring());
console.log(raton2.toSring());

console.log(teclado1.toString());
console.log(teclado1.marca);
console.log(teclado2.toString());
console.log(teclado3.toString());

console.log(monitor1.toSring());
console.log(monitor2.toSring());


*/