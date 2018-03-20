// New Countdown Timer

// Set the date we're counting down to
var countDownDate = new Date("Jul 1, 2018 12:00:00").getTime();
var secondsDegree = 0;
var minutesDegree = 15;
window.addEventListener('blur', x);
// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

secondsDegree += 30;
minutesDegree -= 30;

// Display the result in the element with id="demo"
document.getElementById("days").innerHTML = days + "<br /><span>DAYS</span>";
document.getElementById("hours").innerHTML = hours + "<br /><span>HOURS</span>";
document.getElementById("minutes").innerHTML = minutes + "<br /><span>MINUTES</span>";
document.getElementById("seconds").innerHTML = seconds + "<br /><span>SECONDS</span>";

document.getElementById("days2").innerHTML = days + "<br /><span>DAYS</span>";
document.getElementById("hours2").innerHTML = hours + "<br /><span>HOURS</span>";
document.getElementById("minutes2").innerHTML = minutes + "<br /><span>MINUTES</span>";
document.getElementById("seconds2").innerHTML = seconds + "<br /><span>SECONDS</span>";

$("#second-gear,#hour-gear").animate(
  {rotation: secondsDegree},
  {
    duration: 350,
    easing: 'swing',
    step: function(now, fx) {
      $(this).css({"transform": "rotate("+now+"deg)"});
      $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
      $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
      $(this).css('-o-transform', 'rotate(' + now + 'deg)');
      $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
    }
  }
);
$("#day-gear,#minute-gear").animate(
  {rotation: minutesDegree},
  {
    duration: 350,
    easing: 'swing',
    step: function(now, fx) {
      $(this).css({"transform": "rotate("+now+"deg)"});
      $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
      $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
      $(this).css('-o-transform', 'rotate(' + now + 'deg)');
      $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
    }
  }
);


// If the count down is finished, write some text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);

