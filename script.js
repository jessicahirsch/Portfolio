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
