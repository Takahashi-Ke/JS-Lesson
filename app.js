// $(function (){
//   $('.bg1').on('click',function(){
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click',function(){
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click',function(){
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click',function(){
//     $('.bg4').slideUp();
//   });
// });
// 以下、thisを使用した省略型
// コード上では何をクリックしたのかわかりづらいと言うデメリットがある
$(function (){
  $('.box1').on('click',function(){
    $(this).slideUp();
  });
});

$(function (){
  $('button').on('click', function(){
    $('ul').children().css('color','red')
  });
});
