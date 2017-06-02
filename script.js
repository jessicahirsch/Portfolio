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
   baloon.animate({top:'+=20'}, 1000);
   baloon.animate({top:'-=20'}, 1000, runIt);
}

runIt();

$(document).ready(function() {

     $('.arrow-down').jqFloat({
    width: 0,
    height: 20,
    speed: 1000
});

});
