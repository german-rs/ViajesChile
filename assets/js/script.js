
/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Viajes Chile. 
    Enlace del proyecto: https://german-rs.github.io/ViajesChile/
*/


//Toast sección contacto.
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

$(document).ready(function () {

    // Barra de navegación.

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
    // Fin barra de navegación.


    //Sección quienes somos.

    // Animación favicon.
    $(".fav1").on('click', function () {
        $('.texto1').toggle('slow');
    });

    $(".fav2").on('click', function () {
        $('.texto2').toggle('slow');
    });

    $(".fav3").on('click', function () {
        $('.texto3').toggle('slow');
    });

    //Animación h2
    $('.hover-trigger').hover(
        function () {
            //En hover.
            $('#box1').css('transform', 'translateX(-50px)');
            $('#box2').css('transform', 'translateY(50px)');
            $('#box3').css('transform', 'translateX(50px)');
        },
        function () {
            //Sin hover.
            $('#box1').css('transform', 'translateX(0)');
            $('#box2').css('transform', 'translateY(0)');
            $('#box3').css('transform', 'translateX(0)');
        }
    );
    //Fin sección quienes somos.


    // Sección destacados.
    $("#tit-destacados").click(function () {
        $(".tarjeta").each(function () {
            $(this).effect("bounce", { times: 3 }, "slow");
        });
    });
    // Fin sección destacados.


    //Sección contacto.
    $("#tit-contacto").click(function(){
        $("form").effect("shake", { times: 3 }, "slow");
    });
    //Fin sección contacto.
});




