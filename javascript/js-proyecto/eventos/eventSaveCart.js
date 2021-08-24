

function saveArtInCart(e){  /*Obtenemos el boton iterado en el ciclo del evento onload */

    //cada vez que se clickea se actualizan los datos del dom y del carrito
    //llamando a estas funciones

    e.addEventListener('click', filtrarArrayArticulos);
    e.addEventListener('click', traerStorage);  //Esta funcion es la que trae los elementos del storage y los muestra en el carrito          
    e.addEventListener('click', contarCantidad); //Esta funcion actualiza la cantidad total de articulos en la vista       
    e.addEventListener('click', precioFinal);   //Esta funcion actualiza el precioFinal en la vista
    
}


//-FUNCION PARA FILTRAR EL arrayProductos CREADO EN SEARCH , PARA EVALUAR SI EL Producto que se agrega al carrito ya existe en el localStorge
function filtrarArrayArticulos(){
                            //arrayProductos esta definido en la funcion search, se carga al realizarse las peticiones http 
    const filtrarProducto= arrayProductos.find(producto=>producto.id == this.id);
      
    if(filtrarProducto!= null && filtrarProducto != undefined && filtrarProducto !=""){

        artInStorage(filtrarProducto); //La funcion artInStorage() se encuentra en funciones/storageFunctions.js
    }           
}






        
       




   