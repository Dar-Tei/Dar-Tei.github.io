$(document).ready(function () {

   function isSectionVisible(section) {
      var rect = section.getBoundingClientRect();
      return rect.bottom-200 >= 0 && rect.top <= window.innerHeight-200;
   }

 
   function handleScroll() {
      $('.section-wrap').each(function () {
         var section = $(this);
         if (isSectionVisible(section[0]) && !section.hasClass('animate')) {
            section.addClass('animate');
         }
      });
   }


   function showVisibleSectionsOnLoad() {
      $('.section-wrap').each(function () {
         var section = $(this);
         if (isSectionVisible(section[0])) {
            section.addClass('animate');
         }
      });
   }

   $(window).scroll(handleScroll);

   $(window).on('load', showVisibleSectionsOnLoad);
});