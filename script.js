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

var arrow = $('#arrow-down');
function runIt() {
   arrow.animate({top:'+=20'}, 1000);
   arrow.animate({top:'-=20'}, 1000, runIt);
}

runIt();

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


$('.parallax-window').parallax({imageSrc: 'media/coffee.jpg'});

// var $fullstack = $('.fullstack').toUpperCase();
