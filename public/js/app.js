//gallery JS
$(document).ready(function () {
  $(".owl-carousel-img").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      900: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".owl-prev").html('<img src="left-chevron.png" alt="chevron left">');
  $(".owl-next").html('<img src="chevron.png" alt="chevron right">');
});

//amenities JS

$(document).ready(function () {
  $(".owl-carousel-fp").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      900: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

//floor plan

$(document).ready(function () {
  $(".owl-carousel-floor").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

//pricing
$(document).ready(function () {
  $(".owl-carousel-price").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

//banner
$(document).ready(function () {
  $(".owl-carousel-banner").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: false,
    autoplay: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      900: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});
