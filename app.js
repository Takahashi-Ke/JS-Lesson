// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!</h1>');
// });
// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
  // jQueryプログラムの内容
// });

$(function (){
  $('.box1').on('click',function (){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function (){
    $('.box1').removeClass('box1-ext');
  });
});


