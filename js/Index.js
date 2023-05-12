// Add class "active" to button when clicked
$(document).ready(function() {
   $('.button_row > #Button').on("click", function() {
      $('#Button').removeClass('active');
      $(this).addClass('active');
    });
$(window).resize(function() {
   if ($(window).width() <= '960'){
   $('.button_row').removeClass('button_row')
   $(this).addClass('button_row_v')
  }else if ($(window).width() >= '960'){
   $(this).removeClass('button_row_v')
   $('.button_row').addClass('button_row')
  }})
});