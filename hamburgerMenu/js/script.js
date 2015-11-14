        /*Your Custom Javascript file goes here.*/

$(document).ready(function() {

  var $demo = $(".demo");
  var menuTextAT = 500;

  $(document).on("click", ".demo__menu-btn", function() {
    $demo.addClass("menu-active");
  });

$(document).on("click", ".demo__menu-item", function() {
    var $item = $(this);
    var targetSection = $item.data("section");
    $item.addClass("clicked");
    $demo.removeClass("menu-active");
    $(".demo__section.active-section").removeClass("active-section");
    $(".demo__section--" + targetSection).addClass("active-section");

    setTimeout(function() {
      $item.removeClass("clicked");
    }, menuTextAT);
  });


});
