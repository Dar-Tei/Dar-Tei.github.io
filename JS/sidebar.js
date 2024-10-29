$(document).ready(function () {
   var sidebar = $('.sidebar');
   var openButton = $('.open-sidebar');

   openButton.on('click', function () {
      sidebar.toggleClass('open');
      if (sidebar.hasClass('open')) {
         openButton.addClass('open_button');
         $(".sidebar_button_icon_open").attr("src", "Images/Icons/icons8-delete-red.svg");
      } else {
         openButton.removeClass('open_button');
         $(".sidebar_button_icon_open").attr("src", "Images/Icons/icons8-menu.svg");
      }
   });

   // Обработчик клика на пустую область
   $(document).on('click', function (event) {
      var target = $(event.target);
      if (!target.closest('.sidebar').length && !target.closest('.open-sidebar').length) {
         sidebar.removeClass('open');
         openButton.removeClass('open_button');
         $(".sidebar_button_icon_open").attr("src", "Images/Icons/icons8-menu.svg");
      }
   });
});
