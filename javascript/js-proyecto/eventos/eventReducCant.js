function reduceCant(btn){

    btn.addEventListener('click', reducir);
    btn.addEventListener('click', traerStorage);//esta funcion actualiza el carrito al cliquear en reducir

}


function reducir(){


    let productStorage = localStorage.getItem(this.id); //obtenemos el producto del storage por medio de la id del boton que es igual a la key
    let productoObj = JSON.parse(productStorage); //lo pasamos a objeto


    productoObj.cantidad = productoObj.cantidad - 1; // le restamos 1 unidad a la propiedad cantidad


    if(productoObj.cantidad <=0){
        localStorage.removeItem(`${this.id}`);      //si la propiedad es menor o igual a 0, directamente la borramos del localStorage
    }
    else{

        localStorage.setItem(`${this.id}`, JSON.stringify(productoObj)); //de lo contrario solo volvemos a cargar el producto al localstorage
    }                                                                    //pero con la propiedad cantidad reducida en una unidad

    alertProducto(productoObj, false, true); //alerta de eliminacion del producto
    contarCantidad(); //llamamos a contar cantidad para actualizar la cantidad total de productos
}