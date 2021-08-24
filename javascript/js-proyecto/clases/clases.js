


class StockProductos{ /*CLASE PARA CONTROL DE STOCK */

    constructor(producto, stock, id, precio, nombreImg, tipo, cantidad){
        this.producto= producto;
        this.stock=stock;
        this.id = id;
        this.precio= precio;
        this.nombreImg= nombreImg;
        this.tipo=tipo;
        this.cantidad= cantidad;
    }

    reducirStock(cantidad){
        this.stock= this.stock-cantidad;
    }


}