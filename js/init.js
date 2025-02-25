$('.brands_slider_box').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.brands_slider_arrow_prev'),
  nextArrow: $('.brands_slider_arrow_next'),
  speed: 300,
  slidesToShow: 6,
  adaptiveHeight: false,
  autoplay: true,
});

$('.categories_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: false,
  autoplay: true,
});

