$(document).ready(function () {


  // Smooth scrolling:
  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    } /* speed */);
  });


  // Slick :

  $(document).ready(function () {
    $('.test-car').slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 12000,
      centerPadding: '10px',
      slidesToShow: 3,
      variableWidth: true,
      // responsive: [
      //   {
      //     breakpoint: 991,
      //     settings: {
      //       arrows: false,
      //       // centerMode: true,
      //       centerPadding: '10px',
      //       slidesToShow: 1
      //     }
      //   }
      // ]
    });
  });
});