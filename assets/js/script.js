/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Viajes Chile. 
*/


$(document).ready(function () {

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

    //Tooltip.
    $('[data-bs-toggle="tooltip"]').tooltip();

});