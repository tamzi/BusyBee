        /*Your Custom Javascript file goes here.*/

$(document).ready(function() {

  var $demo = $(".demo");
  var menuTextAT = 500;

  $(document).on("click", ".demo__menu-btn", function() {
    $demo.addClass("menu-active");
  });


});
