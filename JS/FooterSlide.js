$(document).ready(function () {
  var triggerDistance = 5;
  adjustFooter();

  $(window).resize(function () {
    adjustFooter();
  });

  function adjustFooter() {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var distanceFromBottom = documentHeight - (scrollPos + windowHeight);

    if (documentHeight  > windowHeight) {
      $('.footer_wrap_display').removeClass().addClass("footer_wrap");
      if (distanceFromBottom < triggerDistance) {
        $('.footer_wrap').removeClass().addClass("footer_wrap_display");
      } else {
        $('.footer_wrap_display').removeClass().addClass("footer_wrap");
      }
    } else {
      $('.footer_wrap').removeClass().addClass("footer_wrap_display");
    }
  }

  $(window).scroll(function () {
    adjustFooter();
  });
});
