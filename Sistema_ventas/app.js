class Producto{
    static contadorProductos=0;
    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this._idProducto= ++Producto.contadorProductos;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }
    toString(){
        return 'ID_PRODUCTO: '+this._idProducto+', NOMBRE: '+this._nombre+', PRECIO: '+this._precio;
    }
}

class Orden{
    static contadorOrdenes=0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    //static MAX_PRODUCTOS=5;
    constructor(){
        
        this._idOrden=++Orden.contadorOrdenes;
        this._productos=[];
        this._contadorProductosAgregados=0; 
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //la manera mas formal de agregar en el arreglo
            //this._productos[this._contadorProductosAgregados++]=producto;
        }
        else{
            console.log("No se puede agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta=0;
        for (let producto of this._productos){
            totalVenta+=producto.precio;
        }
    return totalVenta;
    }
    mostrarOrden(){
        let productoOrden='';
        for(let producto of this._productos){
            productoOrden+= '\n{'+producto.toString()+'}';
        }
        console.log(`Orden: ${this._idOrden} Total: $ ${this.calcularTotal()}, Productos : ${productoOrden}`)
    }
}


let producto1= new Producto('CARTAS',1560);
let producto2=new Producto('HOJAS A4',50);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

console.log(orden1);
orden1.mostrarOrden();
let orden2=new Orden();
let producto3= new Producto('cinturon',450);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();
console.log(orden2);