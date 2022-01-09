(function ($) {

  'use strict';

  // STICKY
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".sticky").addClass("nav-sticky");
    } else {
      $(".sticky").removeClass("nav-sticky");
    }
  });

  /* Add your code after this line */


})(jQuery)


