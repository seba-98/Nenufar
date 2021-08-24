
//----------------FUNCION PARA CALCULAR EL PRECIO FINAL DE LA COMPRA----------------------------

function precioFinal(){
    let cantCollar = 0;
    let cantVelas = 0;
    let arrayCantidadStorage = [];
    final=0;
    

    for(let i=0; i<localStorage.length; i++){
        
        let clave = localStorage.key(i);
        arrayCantidadStorage.push(JSON.parse(localStorage.getItem(clave))); //en cada iteracion se actualiza el estado del array 
                                                                        //entonces si se redujo la cantidad en otra funcion se actualizara
    }

    for (const obj of arrayCantidadStorage) { //recorremos el array obtenido del localStorage y modificamos la prop cantidad sumandola

        if(obj.tipo === "collares"){
            cantCollar = obj.cantidad + cantCollar;

            final = final + (obj.precio * obj.cantidad);
        }
         else if(obj.tipo === "velas"){
             cantVelas = obj.cantidad + cantVelas;
             final = final + (obj.precio * obj.cantidad);
         }

        
         precioTotal.innerHTML=`Precio final: <span id="price"> ${final}$ </span>`;

    }
}

//----------------FUN FUNCION PRECIOFINAL----------------------------