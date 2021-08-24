function alertProducto(arr, value, value2){ //utilizamos 3 valores ya que vamos a evaluar 3 opciones
                                            //si se añade un producto, si se quita o si se vacia el carrito
    const alerta= $("#alerta");             //dependiendo la funcion que llame a alertProducto() los parametros seran diferentes
    const not= $("#boton-cart");            
    let textoProducto;
    let textoTipo;
                                            //las 3 funciones que utilizan esta funcion son:

                                            //eventSaveCar(arr, true, true)         -para guardar en el carrito
                                            //eventReduceCant(arr, false, true)     -para quitar un producto
                                            //eventClearCart(null, false, false)    -para vaciar todo el carrito

            
function agrandarNot(){ //animacion para el boton del carrito al ser vaciado se agrande y se vea rojo

    not.animate({
        width: "80px",
        height: "80px"
    },200).css({backgroundColor: "red"})

}       
function achicarNot(){  //animacion para el boton del carrito al ser vaciado se achique y vuelva a su color de origen

    not.animate({
        width: "70px",
        height: "70px"
    },200).css({backgroundColor: "initial"})

}          




if(arr != null){  

/*-----------Si arr no es null creamos un texto en base a la propiedad tipo del parametro arr-------- */

        if(arr.tipo == "velas"){
                textoProducto= "vela";
                textoTipo="aroma a";
            }
            else if(arr.tipo =="collares"){
                textoProducto= "collar";
                textoTipo = "color";
            }
            


/*-------Si los 2 value son true es por que se guardo un producto en el carrito, el estilo del cuadro sera verde----------- */
            if(value == true && value2 == true){

                alerta.html("");
        
                alerta.css({
                    backgroundColor: "rgb(166, 238, 157)",
                    backgroundColor: "rgba(166, 238, 157, 0.7)"
                })
                .stop(false, true)                                  //el metodo stop evita que se acumulen las animaciones y corta su flujo
                    .html(`Agregaste ${textoProducto} ${textoTipo} ${arr.producto}`)
                        .fadeIn("fast")
                            .fadeOut(2000);
                
        
/*-------Si el primer valor es false y el segundo es true es por que se quito un producto del carrito, el estilo del cuadro sera rojo--- */                
        
            }else if(value == false && value2 == true){
        
                alerta.html("");
        
                alerta.css({
                    backgroundColor: "rgb(230, 111, 111)",
                    backgroundColor: "rgba(230, 111, 111, 0.7)"
                })
                .stop(false, true)
                .html(`Quitaste ${textoProducto} ${textoTipo} ${arr.producto}`)
                    .fadeIn("slow" )
                        .fadeOut("slow");

                        
            }

    }
    else if(value == false && value2 == false && arr == null){ //si el parametro arr es null  y si e los 2 valores son false
                                                            // es por que se vacio el carrito el estilo sera de color rojo
                    alerta.html("");

                    alerta.css({
                        backgroundColor: "rgb(230, 111, 111)",
                        backgroundColor: "rgba(230, 111, 111, 0.7)"
                    })
                    .stop(false, true)
                    .html(`Vaciaste tu carrito`)
                        .fadeIn(600, agrandarNot)
                            .fadeOut(1000, achicarNot); 
                }

}


/*definicion de 2 o mas animaciones en cadena:
Consiste en la ejecucion ordenada de una serie de modificaciones visuales sobre los elementos del dom, generalmente vinculadas 
a eventos y con el fin de mejor la experiencia del usuario en la aplicacion
 */