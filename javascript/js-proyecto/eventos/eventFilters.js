const botonCollares = document.getElementById("filtroCollar"); //boton para filtrar collares
const botonVelas = document.getElementById("filtroVela");//boton para filtrar velas
const botonTodosLosProductos = document.getElementById("filtroProductos"); //boton para filtrar todos los productos




//--------------Los siguientes eventos son para ejecutar las distintas peticiones http en los filtros de busqueda--------------------------
        
/*          En los 3 casos los eventos hacen uso de la funcion filtrosBusqueda(parametro), la cual realiza la peticion http
            luego de hacer la peticion, en base al parametros que se le pase llama a la funcion busqueda(a, arr) a la cual le pasan
            2 parametros, uno el parametro enviado desde estos eventos y el segundo el array de objetos obtenido en la peticion.
*/




//-------------Evento para filtrar collares y cambiar el color del boton del filtro------------------------------------------------

botonCollares.addEventListener("click", (e)=>{
    e.preventDefault();

    $("#contentArticles").fadeOut("slow", function(){

        contentArticles.innerHTML=""; //borramos el contenido del catalogo para mostrar los productos filtrados
        filtrosBusqueda("collares");//esta funcion hace la peticion http para ejecutar los filtros pasamos de "collares" como parametro
        
    }).fadeIn("slow");


    botonCollares.style.backgroundColor="grey";
    botonVelas.style.backgroundColor="rgb(44, 43, 43)";
    botonTodosLosProductos.style.backgroundColor="rgb(44, 43, 43)";
})
//-------------------------------------- Fin Evento para filtrar collares ------------------------------------------------







//-------------Evento para filtrar velas y cambiar el color del boton del filtro------------------------------------------------

botonVelas.addEventListener("click", (e)=>{
    e.preventDefault();

    $("#contentArticles").fadeOut("slow", function(){

        contentArticles.innerHTML=""; //borramos el contenido del catalogo para mostrar los productos filtrados
        filtrosBusqueda("velas"); //esta funcion hace la peticion http para ejecutar los filtros pasamos de "velas" como parametro
       
    }).fadeIn("slow");



    botonCollares.style.backgroundColor="rgb(44, 43, 43)";
    botonVelas.style.backgroundColor="grey";
    botonTodosLosProductos.style.backgroundColor="rgb(44, 43, 43)";
})
//-------------------------------------- Fin Evento para filtrar velas --------------------------------------------------------







//-------------Evento para filtrar todos los productos y cambiar el color del boton del filtro------------------------------------------------
botonTodosLosProductos.addEventListener("click", (e)=>{
    e.preventDefault();

    $("#contentArticles").fadeOut("slow", function(){

        contentArticles.innerHTML=""; //borramos el contenido del catalogo para mostrar los productos filtrados
        filtrosBusqueda("todos"); //esta funcion hace la peticion http para ejecutar los filtros pasamos "todos" como parametro para mostrar todos los productos
        
    }).fadeIn("slow");



    botonCollares.style.backgroundColor="rgb(44, 43, 43)";
    botonVelas.style.backgroundColor="rgb(44, 43, 43)";
    botonTodosLosProductos.style.backgroundColor="grey";
})
//-------------Fin de Evento para filtrar todos los productos---------------------------------------------
