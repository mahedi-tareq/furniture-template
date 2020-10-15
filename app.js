$(document).ready(function(){

  $('.categories-slider').slick({
  // dots: true,
  // infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '.slide-btnleftpc',
  nextArrow: '.slide-btnrightpc',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  $('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.slide-btnleft',
    nextArrow: '.slide-btnright'
  });
  // $('.categories-slider').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // });
  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  //Magnific Popup
  $('.hero-slider-img').magnificPopup({
  type: 'image'
  // other options
});


});