
/*Para poder asociar el evento de guardar un producto en un carrito, es necesario al que al ejecutarse cualquier evento donde se
    filtren los productos o se cargen los productos en la pagina  recorramos todos los elementos botones creados dinamicamente de cada 
    articulo con un FOR y al recorrerlos, en cada iteracion pasamos el boton[i] como parametro a una funcion en la cual esta el evento
    click que se asignara al boton pasado como parametro en cada instancia del ciclo   */


function asignarEventoABotones(){

    const botonDelArticulo = document.getElementsByClassName("articleBut"); 
    
        for( let i=0; i< botonDelArticulo.length; i++){
            saveArtInCart(botonDelArticulo[i]);
        }

    }
    

    
    function asignarEventoReducir(){ //asignamos el evento a los botones para reducir cantidad
        
        const botonQuitar = document.getElementsByClassName("quitarCantidad");
        
        for(let i = 0; i < botonQuitar.length; i++){
    
           reduceCant(botonQuitar[i]);
        }

}


function asignarEventoVaciar(){ //asignamos el evento para vaciar el carrito

    const  botonBorrar= document.getElementsByClassName("borrarCarrito");

    for(let i=0; i< botonBorrar.length; i++){

        clearCart(botonBorrar[i]);
        
    }

}
