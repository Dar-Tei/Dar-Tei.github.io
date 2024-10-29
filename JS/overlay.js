$(document).ready(function () {
   var images = $('.content-image, .image1, .content-image2, .custom-marker');
   var currentIndex = 0;

   function showImage(index) {
      var imgSrc = images.eq(index).attr('src');
      var imgAlt = images.eq(index).attr('alt');
      var imgTitle = images.eq(index).attr('title');

      $('.full-image').attr('src', imgSrc);
      $('.full-image').attr('alt', imgAlt);
      $('.description').text(imgTitle);
   }

   function showPrevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
   }

   function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
   }

   $('.prev-button').click(function () {
      showPrevImage();
   });

   $('.next-button').click(function () {
      showNextImage();
   });

   $('.close-button').click(function () {
      hideOverlay();
   });

   images.click(function () {
      currentIndex = images.index(this);
      showImage(currentIndex);
      showOverlay();
   });

   $('.overlay').click(function (e) {
      if (e.target === this) {
         hideOverlay();
      }
   });

   function hideOverlay() {
      $('.overlay').removeClass('active');
      $('.full-image').css('transition', 'transform 0.3s ease-in-out');
      $('.full-image').css('transform', 'scale(0.90)');
   }

   function showOverlay() {
      $('.overlay').addClass('active');
      $('.full-image').css('transition', 'transform 0.3s ease-in-out');
      $('.full-image').css('transform', 'scale(1)');
   }
});
