
$(document).ready(function () {

$(".div-detail").fadeOut("fast");
$(".contact-text").fadeOut("fast");

 function timeout(){

    setTimeout(()=>{

        $(".content-pre-load").css("display", "none");
        $(".content-post-load").css("display", "block");

    },800)

 }   

 timeout();



 $(window).scroll(function(){

    if($(this).scrollTop() <= 2){

        $(".header--bg").css({
            backgroundColor: "rgb(138,145,129)",
            backgroundColor: "rgba(138,145,129, 0.0)",
            transition: "all .50s ease-in-out"
        })

        $(".nav-link").css({
            textShadow: "3px 3px 3px  rgb(32, 32, 32)",
            fontSize: "1.2rem",
            transition: "all .50s ease-in-out"
        })

    }else{

        $(".nav-link").css({
            textShadow: "none"
        })

        $(".header--bg").css({
            backgroundColor: "rgb(138,145,129)"
        })
    }


    if($(this).scrollTop() <= 30){

            $(".div-detail").fadeIn(4000);
        }

    if($(this).scrollTop() <= 70){
        $(".contact-text").fadeIn(4000);
    }


  })

    
});


/*Este breve script de jquery es para hacer el preload del sitio en el index y en la seccion de compras
el setTimeout tiene como funcion simular la carga de la pagina para poder observar la implementacion del preload
para la animacion del preload de utilizo la libreria lottie


Un algoritmo en javascript con métodos jquery consiste en una serie de instrucciones interpretadas de manera ordenada que utilizan
métodos de la libreria jquery los cuales cumplen la misma funcionalidad que el codigo vanilla de javascript pero simplificado, para
reducir el tiempo de codificacion aumentando el nivel de desarrollo.
*/


//--------------------------------Animacion para anclar items html--------------------------------------

$("#botonDetail").click(function(e){

    e.preventDefault();

    $("html, body").animate({

        scrollTop: $("#detail").offset().top
    },1000)


});


$("#botonContact").click(function(e){

    e.preventDefault();

    $("html, body").animate({

        scrollTop: $("#contact").offset().top
    },1000)


});


//--------------------------------Animacion para cambiar estilo del navbar en base a la posicion del scrollbar-------------------------------------





