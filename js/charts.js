$(document).ready(function(){
  // Gear Charts
  function chartGearSpin(item){
    $(item).stop(true);
    $(item).animate(
      {rotation: 180},
      {
        duration: 500,
        easing: 'swing',
        step: function(now, fx) {
          $(this).css({"transform": "rotate(" + now + "deg)"});
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-o-transform', 'rotate(' + now + 'deg)');
          $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
        }
      }
    );
    $(item).animate(
      {rotation: 0},
      {
        duration: .0001,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({"transform": "rotate(" + now + "deg)"});
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-o-transform', 'rotate(' + now + 'deg)');
          $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
        }
      }
    );
  }

  $('.chart-gear').mouseenter(function(){
    chartGearSpin(this);
  });

  $('#chart1b').mouseenter(function(){
    $('#marketing').addClass('chart-active chart-active1a');
  });

  $('.chart-text1a').mouseenter(function(){
    $('#marketing').addClass('chart-active chart-active1a');
  });

  $('#chart1b').mouseleave(function(){
    $('#marketing').removeClass('chart-active chart-active1a');
  });

  $('.chart-text1a').mouseleave(function(){
    $('#marketing').removeClass('chart-active chart-active1a');
  });

  $('#marketing').mouseenter(function(){
    chartGearSpin('#chart1b');
  });

  $('#chart1a').mouseenter(function(){
    $('#development').addClass('chart-active chart-active2a');
  });

  $('.chart-text1b').mouseenter(function(){
    $('#development').addClass('chart-active chart-active2a');
  });

  $('#chart1a').mouseleave(function(){
    $('#development').removeClass('chart-active chart-active2a');
  });

  $('.chart-text1b').mouseleave(function(){
    $('#development').removeClass('chart-active chart-active2a');
  });

  $('#development').mouseenter(function(){
    chartGearSpin('#chart1a');
  });

  $('#chart1c').mouseenter(function(){
    $('#acquisition').addClass('chart-active chart-active3a');
  });

  $('.chart-text1c').mouseenter(function(){
    $('#acquisition').addClass('chart-active chart-active3a');
  });

  $('#chart1c').mouseleave(function(){
    $('#acquisition').removeClass('chart-active chart-active3a');
  });

  $('.chart-text1c').mouseleave(function(){
    $('#acquisition').removeClass('chart-active chart-active3a');
  });

  $('#acquisition').mouseenter(function(){
    chartGearSpin('#chart1c');
  });

  $('#chart1d').mouseenter(function(){
    $('#legal').addClass('chart-active chart-active4a');
  });

  $('.chart-text1d').mouseenter(function(){
    $('#legal').addClass('chart-active chart-active4a');
  });

  $('#chart1d').mouseleave(function(){
    $('#legal').removeClass('chart-active chart-active4a');
  });

  $('.chart-text1d').mouseleave(function(){
    $('#legal').removeClass('chart-active chart-active4a');
  });

  $('#legal').mouseenter(function(){
    chartGearSpin('#chart1d');
  });

  $('#chart2a').mouseenter(function(){
    $('#ico').addClass('chart-active chart-active1b');
  });

  $('.chart-text2a').mouseenter(function(){
    $('#ico').addClass('chart-active chart-active1b');
  });

  $('#chart2a').mouseleave(function(){
    $('#ico').removeClass('chart-active chart-active1b');
  });

  $('.chart-text2a').mouseleave(function(){
    $('#ico').removeClass('chart-active chart-active1b');
  });

  $('#ico').mouseenter(function(){
    chartGearSpin('#chart2a');
  });

  $('#chart2c').mouseenter(function(){
    $('#liquidity').addClass('chart-active chart-active2b');
  });

  $('.chart-text2b').mouseenter(function(){
    $('#liquidity').addClass('chart-active chart-active2b');
  });

  $('#chart2c').mouseleave(function(){
    $('#liquidity').removeClass('chart-active chart-active2b');
  });

  $('.chart-text2b').mouseleave(function(){
    $('#liquidity').removeClass('chart-active chart-active2b');
  });

  $('#liquidity').mouseenter(function(){
    chartGearSpin('#chart2c');
  });

  $('#chart2b').mouseenter(function(){
    $('#distribution').addClass('chart-active chart-active3b');
  });

  $('.chart-text2c').mouseenter(function(){
    $('#distribution').addClass('chart-active chart-active3b');
  });

  $('#chart2b').mouseleave(function(){
    $('#distribution').removeClass('chart-active chart-active3b');
  });

  $('.chart-text2c').mouseleave(function(){
    $('#distribution').removeClass('chart-active chart-active3b');
  });

  $('#distribution').mouseenter(function(){
    chartGearSpin('#chart2b');
  });

  $('#chart2d').mouseenter(function(){
    $('#presale').addClass('chart-active chart-active4b');
  });

  $('.chart-text2d').mouseenter(function(){
    $('#presale').addClass('chart-active chart-active4b');
  });

  $('#chart2d').mouseleave(function(){
    $('#presale').removeClass('chart-active chart-active4b');
  });

  $('.chart-text2d').mouseleave(function(){
    $('#presale').removeClass('chart-active chart-active4b');
  });

  $('#presale').mouseenter(function(){
    chartGearSpin('#chart2d');
  });

  $('#chart2e').mouseenter(function(){
    $('#community').addClass('chart-active chart-active5');
  });

  $('.chart-text2e').mouseenter(function(){
    $('#community').addClass('chart-active chart-active5');
  });

  $('#chart2e').mouseleave(function(){
    $('#community').removeClass('chart-active chart-active5');
  });

  $('.chart-text2e').mouseleave(function(){
    $('#community').removeClass('chart-active chart-active5');
  });

  $('#community').mouseenter(function(){
    chartGearSpin('#chart2e');
  });
});
