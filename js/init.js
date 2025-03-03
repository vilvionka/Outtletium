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

$('.catalog_head_slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  prevArrow: $('.catalog_head_slider_arrow_prev'),
  nextArrow: $('.catalog_head_slider_arrow_next'),
});



$('.main_slider').slick({
  infinite: false,
  breakpoint: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        nfinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
  ]
});

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.delivery_accordion_header');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.delivery_accordion_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.delivery_accordion'), false);
});

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.returnGoods_accordion_header');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.returnGoods_accordion_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.returnGoods_accordion'), false);
});


$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.payment_accordion_header');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.payment_accordion_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.payment_accordion'), false);
});

$('.card_box_slider_big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.card_box_slider_small'
});
$('.card_box_slider_small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.card_box_slider_big',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
});



