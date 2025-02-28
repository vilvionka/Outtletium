$('.brands_slider_box').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.brands_slider_arrow_prev'),
  nextArrow: $('.brands_slider_arrow_next'),
  speed: 300,
  slidesToShow: 6,
  adaptiveHeight: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.categories_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 500,
      settings: "unslick"
    }
  ]
});

$('.bestsellers_box_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.bestsellers_slider_arrow_prev'),
  nextArrow: $('.bestsellers_slider_arrow_next'),
});



$('.main_slider').slick({
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
  ]
});

