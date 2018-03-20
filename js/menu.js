$(document).ready(function(){

  function menu() {
    var $window = $(window);
    if ($window.width() < 768) {
      return $('#myNavbar').removeClass('collapse navbar-collapse').addClass('dropdown-menu');
    }
    if ($window.width() > 767) {
      return $('#myNavbar').removeClass('dropdown-menu').addClass('collapse navbar-collapse');
    }
  }

  menu();

  $(window).on('resize', function(){
    var $window = $(window);
    if ($window.width() < 768) {
      return $('#myNavbar').removeClass('collapse navbar-collapse').addClass('dropdown-menu');
    }

    if ($window.width() > 767) {
      return $('#myNavbar').removeClass('dropdown-menu').addClass('collapse navbar-collapse');
    }
  });

});
