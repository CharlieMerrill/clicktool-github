$(document).ready(function(){
  var dragging = false;
  var spinning = true;
  var degree = 0;
  var start_degree = 0;
  var start_x;
  var mouse_moved = false;
  var last_mouse;
  var right = 100;
  var position = 1;
  var box_position = 110;
  var box_start = -309;
  var box_start_two = box_start + 700;
  var clicked = false;
  var finished = false;
  var start_time = 0;
  var now_time = 0;

  $('.yellowbox').css({"right":-309+'%'});
  $('.yellowbox2').css({"right":391+'%'});

  function milestoneGear(deg, sec) {
    $(".milestone-gear").animate(
      {rotation: deg},
      {
        duration: sec,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({"transform": "rotate(" + now + "deg)"});
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-o-transform', 'rotate(' + now + 'deg)');
          $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
        }
      },
    );
  }

  function smallMilestoneGear(deg, sec) {
    $(".small-gear").animate(
      {rotation: deg},
      {
        duration: sec,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({"transform": "rotate(" + now + "deg)"});
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-o-transform', 'rotate(' + now + 'deg)');
          $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
          degree = now;
        }
      }
    );
  }

  function firstYellowbox(dist, sec) {
    $(".yellowbox").animate(
      {right: dist+'%'},
      {
        duration: sec,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({'right': + now + '%)'});
          box_start = now;
        }
      }
    );
  }

  function secondYellowbox(dist, sec) {
    $(".yellowbox2").animate(
      {right: dist+'%'},
      {
        duration: sec,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({'right': + now + '%)'});
          box_start_two = now;
        }
      }
    );
  }

  function spin() {

    milestoneGear(degree, 1000);
    smallMilestoneGear(degree, 1000);

    firstYellowbox(box_start, 1000);
    secondYellowbox(box_start_two, 1000);

    milestoneGear(degree, 1000);
    smallMilestoneGear(degree, 1000);
    degree += 45;

    $(".yellowbox").animate(
      {right: box_start+'%'},
      {
        duration: 1000,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({'right': + now + '%)'});
        }
      }
    );
    $(".yellowbox2").animate(
      {right: box_start_two+'%'},
      {
        duration: 1000,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({'right': + now + '%)'});
        }
      }
    );

    if (box_start < -870) {
      box_start = 391;
        $(".yellowbox").animate(
        {right: 391+'%'},
        {
          duration: .0001,
          easing: 'linear',
          step: function(now, fx) {
            $(this).css({'right': + now + '%)'});
          }
        }
      );
    }
    box_start -= 139.5;

    if (box_start_two < -870) {
      box_start_two = 391;
        $(".yellowbox2").animate(
        {right: 391+'%'},
        {
          duration: .0001,
          easing: 'linear',
          step: function(now, fx) {
            $(this).css({'right': + now + '%)'});
          }
        }
      );
    }
    box_start_two -= 139.5;

    if(spinning === true) {
      spin();
    }
  }

  $('.directions-lg').mouseenter(function() {
    spinning = false;
    $(".milestone-gear").clearQueue();
    $(".small-gear").clearQueue();
    $(".yellowbox").clearQueue();
    $(".yellowbox2").clearQueue();
  });

  $('.directions-lg').mousedown(function() {
    $(".milestone-gear").clearQueue();
    $(".small-gear").clearQueue();
    $(".yellowbox").clearQueue();
    $(".yellowbox2").clearQueue();
    start_x = event.pageX;
    last_mouse = start_x;
    start_time = now_time;
    now_time = new Date().getTime();
    dragging = true;
    finished = true;
  });

  $('.directions-lg').mouseleave(function(){
    $(".milestone-gear").clearQueue();
    $(".small-gear").clearQueue();
    $(".yellowbox").clearQueue();
    $(".yellowbox2").clearQueue();
    setTimeout(function(){
      spinning = true;
      spin();
    }, 1200);
  });

  $(document).mouseup(function() {
    dragging = false;
    finished = false;
  });

  $(document).mousemove(function(e) {
    if (dragging && now_time > start_time + 550) {
      $(".milestone-gear").clearQueue();
      $(".small-gear").clearQueue();
      $(".yellowbox").clearQueue();
      $(".yellowbox2").clearQueue();
      var mouse_x = e.pageX;
      var mouse_y = e.pageY;

      if (e.pageX > last_mouse + 20 && finished) {

        finished = false;

        milestoneGear((degree+45), 500);
        smallMilestoneGear((degree+45), 500);

        if (box_start < -1000) {
          box_start = 391;
          firstYellowbox(391, .0001);
        }

        if (box_start_two < -1000) {
          box_start_two = 391;
          secondYellowbox(391, .0001);
        }

        firstYellowbox((box_start-139.5), 500);
        secondYellowbox((box_start_two-139.5), 500);

        setTimeout(function() {
          finished = true;
        }, 500);

      } else if (e.pageX < last_mouse - 20 && finished) {

        finished = false;

        milestoneGear((degree-45), 500);
        smallMilestoneGear((degree-45), 500);

        if (box_start > 380) {
          firstYellowbox(-1009, .0001);
        }

        if (box_start_two > 380) {
          secondYellowbox(-1009, .0001);
        }

        firstYellowbox((box_start+139.5), 500);
        secondYellowbox((box_start_two+139.5), 500);

        setTimeout(function() {
          finished = true;
        }, 500);
      }
      last_mouse = e.pageX;
    }
  });

  $('.right-mobile').mousedown(function(){
    spinning = false;
    $(".milestone-gear").clearQueue();
    $(".small-gear").clearQueue();
    $(".yellowbox").clearQueue();
    $(".yellowbox2").clearQueue();

    finished = false;

    milestoneGear((degree+45), 500);
    smallMilestoneGear((degree+45), 500);

    if (box_start < -1000) {
      box_start = 391;
      firstYellowbox(391, .0001);
    }

    if (box_start_two < -1000) {
      box_start_two = 391;
      secondYellowbox(391, .0001);
    }

    firstYellowbox((box_start-139.5), 500);
    secondYellowbox((box_start_two-139.5), 500);

    setTimeout(function() {
      finished = true;
    }, 500);
  });

  $('.left-mobile').mousedown(function() {
    spinning = false;
    $(".milestone-gear").clearQueue();
    $(".small-gear").clearQueue();
    $(".yellowbox").clearQueue();
    $(".yellowbox2").clearQueue();

    finished = false;

    milestoneGear((degree-45), 500);
    smallMilestoneGear((degree-45), 500);

    if (box_start > 380) {
      firstYellowbox(-1009, .0001);
    }

    if (box_start_two > 380) {
      secondYellowbox(-1009, .0001);
    }

    firstYellowbox((box_start+139.5), 500);
    secondYellowbox((box_start_two+139.5), 500);

    setTimeout(function() {
      finished = true;
    }, 500);
  });

  if (spinning) {
    spin();
  }

});
