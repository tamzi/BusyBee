        /*Your Custom Javascript file goes here.*/
window.onload = function() {

  setTimeout(function() {
  $(".typed-text").typed({
    strings: ["Ballooning Classes", "Flying", "Rooftops","Savannah trips","Balloon Mornings","Cartification of Safety","Ballooning Engineering"],
    typeSpeed: 100,
    backDelay: 500,
    showCursor: false
  });
    }, 2000);

  var s = Snap('#mysvg');

  var durLong = 300;
  var durShort = 100;
  var durXShort = 50;
  var timeOutDelayExtraLong = 1500;
  var timeOutDelayLong = 300;
  var timeOutDelay = 50;
  var timeOutDelayXShort = 50;
  var animType = mina.elastic;

  var path = s.path("M497.5,21.8L497.5,21.8L497.5,21.8L497.5,21.8L497.5,21.8L497.5,21.8L497.5,21.8L497.5,21.8v21.1l0,0l0,0H0l0,0h0.4L0,0h497.5l0,0l0,0l0.7,0.1L497.5,0l0,0V21.8L497.5,21.8L497.5,21.8z").attr({
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: 2
  });

  function ButtonDown() {
    $('.typed-text-button').addClass('down');

  }

  function ButtonUp() {
    $('.typed-text-button').removeClass('down');

  }

  function zoom() {
    $('.wrapper').addClass('zoom');
    $('.web-address').addClass('zoom');

  }

  setTimeout(function() {
    ButtonDown()
  }, 4500);

  setTimeout(function() {
    ButtonUp()
  }, 4700);

  setTimeout(function() {
    frameZero()
  }, 5000);

  function frameZero() {
    $('.typed-text').hide();
    $('.typed-text-button').hide();
    path.animate({
      d: "M42.2,21.8L42.2,21.8L42.2,21.8L42.2,21.8L42.2,21.8L42.2,21.8L42.2,21.8L42.2,21.8v21.1l0,0l0,0H0l0,0h0L0,0h42.2l0,0l0,0l0.1,0.1L42.2,0l0,0V21.8L42.2,21.8L42.2,21.8z"
    }, durLong, animType, function() {
      setTimeout(frameOne, timeOutDelayExtraLong);

    });

  }

