$(document).ready(function () {


  // Smooth scrolling:
  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    } /* speed */);
  });


  // Slick carousel :

  $(document).ready(function () {
    $('.test-car').slick({
      autoplay: true,
      arrows: false,
      dots: false,
      autoplaySpeed: 1000,
      centerPadding: '10px',
      slidesToShow: 3,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            slidesToShow: 1

          }
        }
      ]
    });
  });
});