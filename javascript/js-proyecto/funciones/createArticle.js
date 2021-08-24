
//-----------------------------FUNCION PARA RENDERIZAR HTML EN BASE AL PARAMETRO OBTENIDO----------------------------------------

function crearArticle(arr){

    
    for (const item of arr) {    //recorremos el array de la busqueda filtrada de collares

        let article = document.createElement("article");//creamos un articulo por cada objeto relacionado con la busqueda y volcamos sus propiedades
        let texto;
        
        
        article.classList="articles-container" 

        if (item.tipo ==="collares" ){

            texto= "Collar color ";
            item.precio = precioCollares;
        }
            else if(item.tipo === "velas"){

                texto= "Vela aroma a ";
                item.precio = precioVelas;
            }
     
        
        article.innerHTML =
        
                    /*EL DIRECTORIO DE LAS IMAGENES DEBE BUSCARSE COMO SI ESTUVIERAMOS POSICIONADOS EN EL HTML DONDE SE LLAMA A LA FUNCION */
                `       
                    <img src="../assets/imagesProductos/${item.nombreImg}.jpg" alt="" width="300px"> 

                    
                        <span class="titleCard">${texto +item.producto}</span>
                        <span class="stockCard">${item.stock} Unidades disponibles</span>
                        <span class="priceCard">${item.precio}$</span>
                        <button class="articleBut"  id="${item.id}">Añadir al carrito</button>  
                    
                `;

                
                
                //ES NECESARIO AÑADIR CLASE AL BOTON PARA QUE TODOS LOS ARTICULOS PUEDAN TENER EL MISMO EVENTO Y UN ID ASOCIADO A CADA ARTICULO
                //PARA QUE EL EVENTO AFECTE A CADA ARTICULO DE FORMA INDIVIDUAL, PARA OBTENER LOS ARTICULOS Y ASOCIARLOS AL EVENTO ES NECESARIO 
                //RECORRERLOS CON UN BUCLE FOR
                
                //variable global contentArticles de la lista de variablesGlobales
                contentArticles.appendChild(article);
                
                
                
            }
            asignarEventoABotones()
}




