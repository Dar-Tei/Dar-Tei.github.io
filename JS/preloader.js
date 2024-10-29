window.onload = function () {
  var preloader = document.getElementById('preloader');
  preloader.classList.add('loaded'); 
  window.setTimeout(function () {
    preloader.classList.remove('loaded');
    preloader.classList.add('hided'); 
  }, 500); 
}