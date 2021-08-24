
//variables botonCart  y carItems, se encuentran declaradas en el archivo de variables globales

//--------------------Evento para abrir y cerrar el carrito---------------------------------------

botonCart.addEventListener("click", ()=>{
    if(carItems.style.display=="none"){
        
        $("#car-items").fadeIn().css("display", "flex");

    }
    else{
        $("#car-items").fadeOut().css("display", "flex");
    }
})
//--------------------fin Evento para abrir y cerrar el carrito---------------------------------------





