// console.log('ready');

// $('body').videoBG({
//     position:"fixed",
//     zIndex:-1,
//     mp4:'christmas_snow.mp4',
//     ogv:'christmas_snow.ogv',
//     webm:'christmas_snow.webm',
//     poster:'christmas_snow.jpg',
//     opacity:0.5
//   });

$(document).ready(function(){
   $(".anchorClick").click(function(){
      $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top
      }, 2000);
   });
});

// $('.arrow-down').on('click', function(){
//     $(this).parent().parent().remove();
// });

$(".arrow-down")
  .click(function() {
    $("#bounce")
      .animate({height: 0}, 1000,"linear", function() {
    $(this).remove();
    })
  }
);

var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}

// $(document).ready(function() {

//      $('.arrow-down').jqFloat({
//     width: 0,
//     height: 20,
//     speed: 1000
// });

// });

// $(function() {
//     $( "#transparency1" ).tooltip({
//         show: {
//         effect: "slideDown",
//         delay: 300
//         }
//     });
// });
