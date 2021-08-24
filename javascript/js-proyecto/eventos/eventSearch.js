
const boton = document.getElementById("botonBuscar");
const inputBusqueda = document.getElementById("inputBuscar")

//-------Los siguientes eventos ejecutan una funcion para hacer una peticion http en base al contenido del cuadro de busqueda----------------------

boton.addEventListener("click", filtrosBusqueda2);
inputBusqueda.addEventListener("keyup", filtrosBusqueda2);//si se cambia el contenido del buscador tambien se llama a la peticion


