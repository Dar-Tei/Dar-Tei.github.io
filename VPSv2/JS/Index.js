$(document).ready(function() {
  const $sidebar = $('.sidebar');
  const $openButton = $('.open-sidebar');
// 
  $openButton.on('click', function() {
    $sidebar.toggleClass('open');
    if ($sidebar.hasClass('open')) {
      $openButton.addClass('open_button');
      $(".sidebar_button_icon_open").attr("src", "../Images/Icons/icons8-delete-red.svg")
    } else {
      $openButton.removeClass('open_button');
      $(".sidebar_button_icon_open").attr("src", "../Images/Icons/icons8-menu.svg")
    }
  });
// Adaptive background image
  function resizeBackground() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var aspectRatio = windowHeight / windowWidth;
    var imageAspectRatio = 2048 / 1186 ; 
    if (imageAspectRatio - (aspectRatio*2) < aspectRatio) {

      $('html').css({
        'background-size': 'auto 105%',
        'background-position': 'center top'
      });
    } else {

      $('html').css({
        'background-size': '105%',
        'background-position': 'center center'
      });
    }
  }
  resizeBackground();
  $(window).resize(resizeBackground);
});
