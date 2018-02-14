$(document).ready(function () {
  //Setup wow js
  var wow = new WOW({
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init();

  function setCopyrightDate() {
    var year = new Date().getYear();
    if (year < 1900)
      year += 1900;
    document.getElementById("currentYear").innerHTML = year;
  }
  setCopyrightDate();

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 3500
  });

  $('.slider-nav').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });


  $('.product-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.screen-view').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 0,
    fade: true,
    cssEase: 'linear'
  });

  $('.product-view').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          centerPadding: '100px',
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '20px',
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.feedback-view').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    autoplaySpeed: 2000,
    infinite: true
  });
});
