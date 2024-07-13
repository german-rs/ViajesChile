/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Viajes Chile. 
    Enlace del proyecto: https://german-rs.github.io/ViajesChile/
*/

$(document).ready(function () {

    //Tooltip.
    $('[data-bs-toggle="tooltip"]').tooltip();    


    // Smooth scroll (Movimiento).
    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault(); var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        }
    });

    //Smooth scroll (transparencia).
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-transparente');
            $('.nav-link, .navbar-brand').addClass('navlink-cambio-color');
        } else {
            $('.navbar').removeClass('navbar-transparente');
            $('.nav-link, .navbar-brand').removeClass('navlink-cambio-color');
        }
    });


    //Texto quienes somos.
    $(".fav1").on('click', function () {
        $('.texto1').toggle('slow');
    });

    $(".fav2").on('click', function () {
        $('.texto2').toggle('slow');
    });

    $(".fav3").on('click', function () {
        $('.texto3').toggle('slow');
    });
    

});




