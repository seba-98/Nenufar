

//---------------------------------------FUNCION PARA ALMACENAR EN EL LOCALSTORAGE---------------------------------------------------------

const almacenar = (clave , valor)=> {localStorage.setItem(clave, valor)}

//--------------------------------------FIN FUNCION PARA ALMACENAR EN EL LOCALSTORAGE---------------------------------------------------------


//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//--------------------FUNCION PARA EVALUAR ARTICULOS DEL LOCALSTORAGE--------------------------------------------------------------------------

//En esta funcion evaluamos en el storage si existe o no el producto y lo agregamos o incrementamos llamando a la funcion almacenar()
function artInStorage(product){ 

    let clave;
    let claves =[];

    
    for(let i = 0; i < localStorage.length; i++){

        claves.push(JSON.stringify(localStorage.key(i))); //guardamos todas las claves del local para despues compararlas con la clave del articulo
    }



    clave = JSON.stringify("productos " + product.id); //creamos clave del producto con el texto productos  mas el id

    let result = claves.find(clv =>clv == clave)        // y buscamos si en el array de claves obtenido de las claves del 
                                                        //storage se encuentra la clave del articulo
    
    

    /*Fue necesario obtener las claves del storage en un array, pasarlo a string y compararlas con una clave creada para el articulo en base 
    a su id y al texto 'productos' pasando esa clave tambien a string, ya que al comparar directamente las claves obteniendolas del localStorage
    con la concatenacion de la palabra productos + el id del articulo, y evaluar si en base a eso el articulo ya existia en el localStorage
    se generaba un error donde se cumplia la condicion del if y tambien el else o else if, entonces fue necesario igualar las 2 comparaciones 
    a string*/



 /*En esta condicion evaluamos si resultado existe entonces traemos  el elemento del localstorage pasandole como key la clave parseada
    luego el producto obtenido del storage lo transformamos en objeto para incrementar la prop cantidad y lo volvemos a parsear
    a string para llevarlo al storage nuevamente */

    if(result){            

        let productStorage = localStorage.getItem(JSON.parse(clave)); //objeto obtenido del storage con sus propiedades
        let productoObj = JSON.parse(productStorage);

        productoObj.cantidad = productoObj.cantidad +1; //objeto con la propiedad cantidad incrementada

        localStorage.setItem(`productos ${product.id}`, JSON.stringify(productoObj));  //objeto enviado nuevamente al storage

        console.log("El producto ya existia, incrementamos su unidad")

    }
    else{
        almacenar(`productos ${product.id}`, JSON.stringify(product)); //Utilizamos la funcion almacenar para guardar el objeto en el storage
        console.log("El producto no estaba en el carrito, lo agregamos")
    }
    
    alertProducto(product, true, true); //alerta se guardo un producto en el carrito
}

//--------------------FIN FUNCION PARA EVALUAR ARTICULOS DEL LOCALSTORAGE--------------------------------------------------------------------------


//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



//--------------------FUNCION PARA TRAER LOS DATOS DEL LOCALSTORAGE Y MOSTRARLOS EN EL HTML DEL CARRITO---------------------------------------------


function traerStorage(){ 

//------------Creamos el boton para vaciar el carrito y la <li> final donde estaran los botones para realizar la compra y para a vaciar-----------
    const botonBorrar = document.createElement("button");
    const infoFinalCart = document.createElement("li");
//--------------------------------------------------------Fin creacion------------------------------------------------------



//---------------------------Añadimos los id y las clases a los elementos creados--------------------------------------------
    precioTotal.setAttribute("id", "precioTotal");
    botonBorrar.setAttribute("class", "borrarCarrito");
    infoFinalCart.setAttribute("id", "infoFinalCart");
//-----------------------------------fin asignacion de atributos---------------------------------------------------------------



//------------------------------editamos el contenido html en funcion de lo que se va a mostrar---------------------------------------
    precioTotal.innerHTML="";
    botonBorrar.innerHTML="Vaciar carrito";
    cartContainer.innerHTML=//limpiamos el carrito para no mostrar los datos duplicados cada vez que clickeamos en agregar al carrito
    ` <span>
        <img id="boton-cart" src="../assets/iconos/cart.png" class="ml-5 carri" width="70px" alt="">
        Tu carrito de compras
    </span>
    <hr>
    <h3 id="noHay">No hay articulos</h3>`; 
//------------------------------------------------------------------------------------------------------------------------


    
    for(let i=0; i<localStorage.length; i++){

        let key = localStorage.key(i);

        if(key.includes("productos")){ //si la key del elemento del localstorage incluye "productos"

            document.getElementById("noHay").innerHTML=""; //si se encuentran productos borramos el texto de carrito vacio

                let text;
                let obten = JSON.parse(localStorage.getItem(key)) //obtenemos ese elemento del localstorage
                let li = document.createElement("li");          //creamos un <li> por cada elemento obtenido


                if(obten.tipo == "collares"){
                    text= "Collar color ";
                }
                else{
                    text= "Vela aroma a ";
                }


                //Rellenamos cada <li> con cada elemento obtenido del localStorage que cumple la condicion
                li.innerHTML += `
                
                    <img src="../assets/imagesProductos/${obten.nombreImg}.jpg" width="70px" height="70px" alt="">
                    <h3>${text} ${obten.producto}</h3>
                    <span>${obten.precio}$ c/u</span>

                    <div>
                        <button id="${obten.id}" class="articleBut aumentarCantidad">+</button>
                        <span class="verCantidad">
                            ${obten.cantidad}
                        </span> 
                        <button id="${localStorage.key(i)}" class="quitarCantidad">-</button>
                    </div>    
                    <span>${obten.precio * obten.cantidad} $ Total/articulo</span>
                    `


                    //A los botones le asignamos clases en comun  para asociar el evento de resta a cada uno le asignamos un id que sea   
                    //igual a la key del producto en el localstorage, de esta forma podemos
                    // referenciarlo en el evento


                    

                    
                    //----------Agregamos el <li> de cada producto en el carrito y el li con los botones de vaciar y de compra---------------------
                    cartContainer.appendChild(li);
                    cartContainer.appendChild(infoFinalCart);
                   //---------------------------fin de agregar elementos al carrito--------------------- 



                    //--------------------Asignacion de eventos--------------------------------------
                    asignarEventoReducir() //volvemos a reasignar el evento para reducir cantidad
                    
                    //--------------------fin de Asignacion de eventos--------------------------------------



                    precioFinal();//llamamos a la funcion para actualizar el precio final en el carrito
                }

                    else{//si no se agrego un producto al carrito solamente mostramos lo siguiente
                        cartContainer.innerHTML=`
                        <span>
                            <img id="boton-cart" src="../assets/iconos/cart.png" class="ml-5 carri" width="70px" alt="">
                            Tu carrito de compras
                        </span>
                        <hr>
                        <h3>No hay articulos</h3>`; 
                    }
                
                    
                asignarEventoABotones() //llamamos a esta funcion para asignar el evento de agregar producto al carrito pero en este caso
                                        // la llamamos para que el evento se pueda usar en el boton de "+" dentro del carrito
                                        
            }//----------------------------------------FIN CICLO FOR--------------------------------------------------------------------
               
            
        //---------------------AGREGAMOS AL <li> AL FINAL, LA INFORMACION DEL PRECIOFINAL Y EL BOTON DE VACIAR CARRITO ------------------------- 
            
            infoFinalCart.appendChild(botonBorrar);
            infoFinalCart.appendChild(precioTotal);

            asignarEventoVaciar()//como al actualizars el carrito se borran los componentes internos y se vuelven a mostrar es necesario
            //volver a asignar el evento de vaciar el carrito al boton llamando a la funcion asignarEventoVaciar()
            


            const divModal = document.createElement("div");
            divModal.setAttribute("class", "botonComprar") //Este div contiene el boton del modal para realizar la compra

            divModal.innerHTML =
                ` 
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-info comprarBTN" data-toggle="modal" data-target="#exampleModal">
                Comprar
                </button>
                `;

            infoFinalCart.appendChild(divModal);  //Agregamos el div con el boton al <li> final

        //---------------------FIN CONFIGURACION DEL <li> FINAL EN EL CARRITO--------------------------------------------------------    -    
             
}

//---------------------------------------FIN FUNCION PARA TRAER LOS DATOS DEL LOCALSTORAGE ---------------------------------------------------

 
