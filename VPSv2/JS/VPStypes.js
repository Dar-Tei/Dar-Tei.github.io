$(document).ready(function () {
   const $sidebar = $('.sidebar');
   const $openButton = $('.open-sidebar');
   // 
   $openButton.on('click', function () {
      $sidebar.toggleClass('open');
      if ($sidebar.hasClass('open')) {
         $openButton.addClass('open_button');
         $(".sidebar_button_icon_open").attr("src", "Images/Icons/icons8-delete-red.svg")
      } else {
         $openButton.removeClass('open_button');
         $(".sidebar_button_icon_open").attr("src", "Images/Icons/icons8-menu.svg")
      }
   });
   // Adaptive background image
   function resizeBackground() {
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      var aspectRatio = windowHeight / windowWidth;
      var imageAspectRatio = 1600 / 1067;
      if (imageAspectRatio - aspectRatio < aspectRatio) {

         $('html').css({
            'background-size': 'auto 105%',
            'background-position': 'center top'
         });
      } else {

         $('html').css({
            'background-size': '115%',
            'background-position': 'center center'
         });
      }
   }
   
   resizeBackground();
   $(window).resize(resizeBackground);
   $('.section-text-ul a').click(function() {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top-($(window).height())/2
      }, 500);
      return false;
    });
});
