$(document).ready(function () {
   // Page navigation
   $('.section-text-ul a').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top - ($(window).height()) / 2
      }, 500);
      return false;
   });

});
