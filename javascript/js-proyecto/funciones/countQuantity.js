
//----------FUNCION PARA CONTAR LA CANTIDAD DE ARTICULOS EN EL CARRITO Y MOSTRAR LA NOTIFICACION EN EL ICONO DEL CARRITO EN EL NAVBAR-----------

function contarCantidad(){

    let arrayCantidadStorage = [];
    let cantidad = 0;
    const notificacion=document.getElementById("noti");

    
    
    for(let i=0; i<localStorage.length; i++){

        let clave = localStorage.key(i);
        arrayCantidadStorage.push(JSON.parse(localStorage.getItem(clave))); //en cada iteracion se actualiza el estado del array                                                                 //entonces si se redujo la cantidad en otra funcion se actualizara
    }
    
    

    for (const obj of arrayCantidadStorage) { //recorremos el array obtenido del localStorage y modificamos la prop cantidad sumandola

        cantidad= cantidad + obj.cantidad;  //la variable cantidad acumula el total de las propiedades cantidad de los obj del array

        if(cantidad > 0 ){
            notificacion.style.display="block";
        }
        notificacion.innerHTML=`+${cantidad}`;

    }
    

    
    if(cantidad < 1 ){

        cantidad=0;
        notificacion.style.display="none";
        $(".modalCompras").html("<h2>Seleccione los productos antes de realizar la compra</h2>");
        $("#car-items").fadeOut().css("display", "none");
        

        cartContainer.innerHTML=`
        <span>
            <img id="boton-cart" src="../assets/iconos/cart.png" class="ml-5 carri" width="70px" alt="">
            Tu carrito de compras
        </span>
        <hr>
        <h3>No hay articulos</h3>`; 

        }
        else{
            $(".modalCompras").html(``);

            $(".modalCompras").html(`
           
            <input type="text" class="form-control inputCompras" id="inputAddress" placeholder="Nombre y apellido">
            <br>
            <input type="text" class="form-control inputCompras" id="inputAddress" placeholder="Direccion">
            <br>
            <input type="email" class="form-control inputCompras" id="inputEmail4" placeholder="Email">
            <br>
            <input type="submit" class="btn btn-primary" value="Finalizar compra">`);
        }
}

//----------FIN FUNCION CONTARCANTIDAD--------