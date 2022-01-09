/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2022. MIT licensed.
 */
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


