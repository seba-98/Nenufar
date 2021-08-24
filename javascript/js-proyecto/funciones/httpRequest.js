

function filtrosBusqueda(a){   //peticion http para los filtros

    fetch('../data/products.json')
        .then(Response=>Response.json())
                .then(data=>busqueda(data, a) )
                    .catch(err=>console.log(err));                                   
}
function filtrosBusqueda2(){  
    
    fetch('../data/products.json')
        .then(Response=>Response.json())
                .then(data=>busqueda(data) )
                    .catch(err=>console.log(err));

}






//------------------------------PETICION POST---------------------------------------------------------


const formCompras = document.getElementById("formCompra");
formCompras.addEventListener("submit", comprar); //evento para el formulario de compra




function comprar(e){
    e.preventDefault();

    const url= "https://jsonplaceholder.typicode.com/posts";//url para hacer la peticion

    const inputs = document.getElementsByClassName("inputCompras"); //obtenemos el htmlCollection

    const dataClient = []; //datos del cliente
    const dataProduct =[];  //datos de los productos comprados
    const allData=[]; //array con un id: + array con los datos del cliente + array con los datos de productos





 //---------------------CARGA EN LOS Arrays que llenaremos y enviaremos por post------------------------------------------------------   


    dataClient.push({               //obtenemos datos del cliente a tavez de los inputs
        nombre: inputs[0].value,
        direccion: inputs[1].value,
        email: inputs[2].value,
                  
    });

    guardado(localStorage, dataProduct); //utilizamos esta funcion para recorrer el storage y guardar los productos en el array

//------------------------FIN DE CARGA EN LOS Arrays de, de datos de productos  y de datos del cliente -----------------------------------      






//----------------------------CARGA DEL ARRAY GENERAL CON UN OBJETO ------------------------------------------------------   
    
//llenamos el array general con un objeto que contiene el id, el preciofinal, los dos arrays de datos del cliente y los productos

    allData.push({  
        id:101,
        precio: final,  //para el precio utilizamos la variable global llamada final, donde se acumula el precio total
        data1: dataClient,  //array con datos del cliente  
        data2: dataProduct  //array con datos de la compra
    })
//----------------------------FIN DE CARGA DEL ARRAY GENERAL ------------------------------------------------------   






//--------------------------------------Con los datos ya cargados hacemos la peticion POST---------------------------------------------    

    fetch(url, {   
        method: 'POST', 
        body: JSON.stringify(allData),  
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));


      this.reset(); //borramos el contenido del formulario

      cleared("compra");
      $(".modalCompras").html("<h2>Gracias por su compra!</h2>");

}



/*Funcion para guardar los articulos del localStorage en el array de productos que enviaremos por post*/
const guardado = (elements, arr)=>{
 
    for (let i=0; i < elements.length; i++) {     
            arr.push(JSON.parse(elements.getItem(elements.key(i))))  
    }

}



/*Un algoritmo de javascript que utiliza jquery para realizar peticiones ajax, consiste en el uso de la libreria jquery para ejecutar
una serie de instrucciones de forma ordenada con el fin de realizar una o mas peticiones asincronas, en este trabajo por preferencia
se utilizo vanilla javascript en lugar de jquery     */