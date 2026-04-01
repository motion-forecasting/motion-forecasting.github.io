window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    try {
        bulmaCarousel.attach('#carousel-model', options);
    } catch (e) {
        console.error("Failed to attach featured carousel", e);
    }

    var carousels = document.querySelectorAll('.carousel:not(#carousel-model)');
    carousels.forEach(function(carousel) {
        try {
            bulmaCarousel.attach(carousel, options);
        } catch (e) {
            console.error("Failed to attach carousel", carousel, e);
        }
    });

    bulmaSlider.attach();

})
