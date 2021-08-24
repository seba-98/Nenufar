


/*Variables globales para los precios constantes y para definir el array de productos comprados por el usuario */


const ProductosObtenidosStorage=[];
const precioCollares=400;
const precioVelas=200;


/*Definimos los arrays de objetos correspondientes al stock de productos */

let arrayProductos = [];




/*Variables correspondientes a los precios cambiantes durante la compra del usuario*/
let precio = 0;
let precioUnidad;


//este nodo contiene los articulos que se crearan con la funcion crearArticles
let contentArticles = document.getElementById("contentArticles");
const precioTotal = document.createElement("p");
let final;

//-----------------------------------variables relacionadas al carrito------------------------------------------------

const cartContainer = document.getElementById("car-items");

const botonCart = document.getElementById("boton-cart"); //boton del carrito
let carItems = document.getElementById("car-items"); //contenedor de los items agregados



