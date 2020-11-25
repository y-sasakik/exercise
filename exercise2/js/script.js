$(function(){




  $('.nav_toggle').on('click', function () {
      $('.nav_toggle, .nav, .nav_menu, .main-content, .nav_menu_li ').toggleClass('show');
  });




$(".nav_menu_li_home").mouseover(function() {

  $(".hover").css('visibility','visible');

});
$(".nav_menu_li_home").mouseout(function() {

  $(".hover").css('visibility','hidden');

});



$(".page a").mouseover(function() {

  $(".page_hover li").css('visibility','visible');

});
$(".page a").mouseout(function() {

  $(".page_hover li").css('visibility','hidden');

});




});
