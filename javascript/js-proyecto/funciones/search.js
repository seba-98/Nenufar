
function busqueda(data, a){   //Busqueda

    let filtrado;

    arrayProductos = data;
    contentArticles.innerHTML = "";

    if(a && ( a=="collares" || a == "velas") ){//ai existe el parametro a, es por que se busco por los filtros

        filtrado = data.filter(element=>element.tipo == a);
        evaluarFiltro(filtrado);
    }

        else if(a == "todos"){//si a == "todos" se buscaron todos los productos x filtro
            evaluarFiltro(data);
        }

            else if(!a){    //si a no existe es por que se busco por medio del buscador y no por filtros

                filtrado = data.filter(element => 
                    element.producto.includes( inputBusqueda.value.toLowerCase()) ||       //filtramos por producto
                    element.tipo.includes(inputBusqueda.value.toLowerCase()) ||          //filtramos por tipo
                    inputBusqueda.value.toLowerCase().includes(element.tipo) || 
                    inputBusqueda.value.toLowerCase().includes(element.producto));
                    
                evaluarFiltro(filtrado);

                
            //----------Al usar el buscador quitamos el estilo de seleccion de los botones de filtrado-------------------    
                botonCollares.style.backgroundColor="rgb(44, 43, 43)";
                botonVelas.style.backgroundColor="rgb(44, 43, 43)";
                botonTodosLosProductos.style.backgroundColor="rgb(44, 43, 43)";
            }

}






function evaluarFiltro(arr){ //funcion para evaluar que el filtrado no este vacio y crear el articulo
    
    if (arr != null && arr != undefined && arr != "") {
    
        crearArticle(arr);//llamamos a la variable crearArticle para crear el html con los datos  
    
    }
    
    //----------SI ESTA VACIO ENTONCES MOSTRAMOS UN H3 CON MENSAJE DE ERROR----------------------------------------       
    else {
        console.log("no se encontro el producto")
    
        let article = document.createElement("article");    //Si no se encuentra articulo mostramos un h3 con el error
        article.innerHTML =
            `       
                <h3> No se encontro el producto </h3>       
            `;
    
        contentArticles.appendChild(article);
    }


}