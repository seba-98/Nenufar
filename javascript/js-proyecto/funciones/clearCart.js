
function clearCart(btn){
    
    btn.addEventListener("click", cleared);
}



function cleared(compra){

    const cartContainer = document.getElementById("car-items");
    cartContainer.innerHTML=`
    <span>
        <img id="boton-cart" src="../assets/iconos/cart.png" class="ml-5 carri" width="70px" alt="">
        Tu carrito de compras
    </span>
    <hr>
    <h3>No hay articulos</h3>`; 

    localStorage.clear(); //limpiamos storage
    contarCantidad(); //actualizamos la cantidad



    if(compra && compra == "compra"){       //en la condicion evaluamos si el carrito se limpia por que se realizo una compra o por que el usuario
        console.log("compra realizada")     //lo quiso vaciar en base a eso mostramos o no la alerta
    }
    else {
        alertProducto(null, false, false); //alerta de se vacio el carrito
    }


    $("#car-items").fadeOut().css("display", "flex");

}