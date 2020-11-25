$(function(){




  $('.nav_toggle').on('click', function () {
      $('.nav_toggle, .nav, .nav_menu, .main-content').toggleClass('show');
  });




$(".home a").mouseover(function() {

  $(".hover").css('visibility','visible');

});
$(".home a").mouseout(function() {

  $(".hover").css('visibility','hidden');

});



$(".page a").mouseover(function() {

  $(".hover2").css('visibility','visible');

});
$(".page a").mouseout(function() {

  $(".hover2").css('visibility','hidden');

});




});
