$(document).ready(function() {
   function adjustScrollToTopButton() {
     if ($(window).scrollTop() > 100) {
       $('#scrollToTopBtn').fadeIn();
     } else {
       $('#scrollToTopBtn').fadeOut();
     }
 
     if ($("footer").hasClass("footer_wrap_display")) {
       $('#scrollToTopBtn').css({
         "transition": "bottom 0.2s",
         "bottom": "85px"
       });
     } else {
       $('#scrollToTopBtn').css({
         "transition": "bottom 0.2s",
         "bottom": "20px"
       });
     }
   }
 
   $(window).scroll(adjustScrollToTopButton);
 
   $('#scrollToTopBtn').click(function() {
     $('html, body').animate({ scrollTop: 0 }, 500);
     return false;
   });
 
   adjustScrollToTopButton(); 
 });
 