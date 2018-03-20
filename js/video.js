// Video Modal:

$('.launch-modal').on('click', function(e){
  e.preventDefault();
  $( '#' + $(this).data('modal-id') ).modal();
  if ($( $(this).data('modal-id')).modal().selector == 'modal-video1') {
    document.getElementById('video-frame1').play();
  } else if ($( $(this).data('modal-id')).modal().selector == 'modal-video2') {
    document.getElementById('video-frame2').play();
  }
});

$(".modal-video-div").on("hidden.bs.modal", function () {
  document.getElementById('video-frame1').pause();
  document.getElementById('video-frame2').pause();
});
