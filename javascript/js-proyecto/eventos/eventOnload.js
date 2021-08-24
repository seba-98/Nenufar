window.addEventListener("load", ()=>{

    
   $("#contentArticles").fadeOut("slow", function(){

        filtrosBusqueda("todos");// PETICION HTTP PARA TRAER TODOS LOS PRODUCTOS


    }).fadeIn("slow");
    
    

    /**Llamamos a las funciones necesarias al cargar la pagina para que se muestren elementos html actualizados */

    asignarEventoReducir();
    traerStorage();     
    contarCantidad();
    asignarEventoVaciar();
    precioFinal();

})


