        /*Your Custom Javascript file goes here.*/
$(document).ready(function(){
  $('.title').click(function(){
    $('.container').addClass('open');
  });


  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});
