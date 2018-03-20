$(document).ready(function(){
  $('#sign-in').on('click', function(){
    $('#reg-form1').removeClass('reg-active').addClass('reg-hide');
    $('#sign-in-form').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#sign-in-form').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#sign-in2').on('click', function(){
    $('#reg-form2').removeClass('reg-active').addClass('reg-hide');
    $('#sign-in-form').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#sign-in-form').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#sign-in3').on('click', function(){
    $('#reg-form4').removeClass('reg-active').addClass('reg-hide');
    $('#sign-in-form').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#sign-in-form').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#sign-up').on('click', function(){
    $('#sign-in-form').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form1').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#reg-form1').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#sign-up2').on('click', function(){
    $('#reg-form1').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form2').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#reg-form2').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#continue').on('click', function(){
    $('#reg-form2').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form3').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#reg-form3').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#12ethereum').on('click', function(){
    $('#reg-form3').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form4').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#reg-form4').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#back').on('click', function(){
    $('#reg-form2').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form1').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#reg-form1').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#back2').on('click', function(){
    $('#reg-form4').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form3').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#reg-form3').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
  $('#back3').on('click', function(){
    $('#reg-form3').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form2').removeClass('reg-hide invisible').addClass('reg-active');
    $('.reg-container').css('height', ($('#reg-form2').height()+200+'px'));
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
});
