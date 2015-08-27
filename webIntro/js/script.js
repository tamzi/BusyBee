        /*Your Custom Javascript file goes here.*/
window.onload = function() {

  setTimeout(function() {
  $(".typed-text").typed({
    strings: ["Law Outlines", "Casebriefs", "Quizzes","Legal Database","LegalPad","Essay Exams","Progress Statistics"],
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

  function frameOne() {
    path.animate({
      d: "M56.5,21.7L56.5,21.7L56.5,21.7L56.5,21.7L56.5,21.7L56.5,21.7L56.5,21.7L56.5,21.7l1.4,21l0,0l0,0L0,46.7l0,0l0,0L12.9,2.8L55.1,0l0,0l0,0l0.1,0.1L55.1,0l0,0L56.5,21.7L56.5,21.7L56.5,21.7z"
    }, durLong, animType, function() {
      setTimeout(frameTwo, timeOutDelayLong);
    });

  }

  function frameTwo() {
    path.animate({
      d: "M44.7,27.3L44.7,27.3L44.7,27.3L44.7,27.3L44.7,27.3L44.7,27.3L44.7,27.3L44.7,27.3l-2.8,20.9l0,0l0,0L0,42.5l0,0l0,0L5.8,0l41.8,5.7l0,0l0,0l0,0.1l0-0.1l0,0L44.7,27.3L44.7,27.3L44.7,27.3z"
    }, durLong, animType, function() {
      setTimeout(frameThree, timeOutDelayExtraLong);
    });

  }

  function frameThree() {
    path.animate({
      d: "M37.8,22.3L37.8,22.3L37.8,22.3L37.8,22.3L37.8,22.3L37.8,22.3L37.8,22.3L37.8,22.3l19.1,8.9l0,0l0,0L39.2,69.5l0,0l0,0L0,52.1L24.1,0l0,0l0,0l0.1,0l-0.1,0l0,0L37.8,22.3L37.8,22.3L37.8,22.3z"
    }, durLong, animType, function() {

      setTimeout(frameFour, timeOutDelayLong);
    });
  }

  function frameFour() {
    path.animate({
      d: "M89.8,59.6L89.8,59.6L89.8,59.6L89.8,59.6L89.8,59.6L89.8,59.6L89.8,59.6L89.8,59.6l-48.3-9.4l0,0l0,0L0,42.2l0,0l0,0L7.5,0l56.3,10.9l0,0l0,0l0,0.1l0-0.1l0,0L89.8,59.6L89.8,59.6L89.8,59.6z"
    }, durShort, animType, function() {
      setTimeout(frameFive, timeOutDelay);
    });
  }

  function frameFive() {
    path.animate({
      d: "M81,78.9L81,78.9L81,78.9L81,78.9L81,78.9L81,78.9L81,78.9L81,78.9l40.3,235.9l0,0l0,0L0,38.4l0,0l0,0L19,0l51.1,26.2l0,0l0,0l0,0.1l0-0.1l0,0L81,78.9L81,78.9L81,78.9z"
    }, durShort, animType, function() {
      setTimeout(frameSix, timeOutDelayLong);
    });
  }

  function frameSix() {
    path.animate({
      d: "M91.2,41.8L91.2,41.8L91.2,41.8L91.2,41.8L91.2,41.8L91.2,41.8L91.2,41.8L91.2,41.8l143.6,191.4l0,0l0,0L187,249.2l0,0h0L0,0h57.4l0,0l0,0l0.1,0.1L57.4,0l0,0L91.2,41.8L91.2,41.8L91.2,41.8z"
    }, durShort, animType, function() {
      setTimeout(frameSeven, timeOutDelay);
    });
  }

  function frameSeven() {
    path.animate({
      d: "M98.5,32.7L98.5,32.7L98.5,32.7L98.5,32.7L98.5,32.7L98.5,32.7L98.5,32.7L98.5,32.7l184.7,152.1l48.5,200.6l0,0l-79.2-124.2l0,0l-12-49.6L0,13.6L55.8,0l0,0l0,0l0.1,0.1L55.8,0l0,0L98.5,32.7L98.5,32.7L98.5,32.7z"
    }, durShort, animType, function() {
      setTimeout(frameEight, timeOutDelayLong);
    });
  }

  function frameEight() {
    path.animate({
      d: "M129.4,47L129.4,47L129.4,47L129.4,47L129.4,47L129.4,47L129.4,47L129.4,47l132.4,199.4l-12.1,206L0,83l60.4,3.5l149.7,224l3-50.9L40.7,0L98,3.3l0,0l0,0l0.1,0.1L98,3.3l0,0L129.4,47L129.4,47L129.4,47z"
    }, durShort, animType, function() {
      setTimeout(frameNine, timeOutDelay);
    });
  }

  function frameNine() {
    path.animate({
      d: "M78.7,0L78.7,0L78.7,0L78.7,0L78.7,0l14.5,0.1c55.5,0,100.7,45.2,100.7,100.7c0,43.7-27.9,80.9-66.9,94.8l143.6,191.3l-0.2,206.4L0,238.9h60.5l162.3,215l0-51l-187-249.2h57.4c29.2,0,52.9-23.7,52.9-52.9c0-29.2-23.7-52.9-52.9-52.9H78.8l-0.1-0.1l0,0V0L78.7,0L78.7,0z"
    }, durXShort, animType, function() {
      setTimeout(frameTen, timeOutDelay);
    });
  }

  function frameTen() {
    path.animate({
      d: "M0,0L0,0L0,0L0,0l54.6,21.7l193.3,76.5c51.6,20.4,77,79,56.6,130.7c-16.1,40.6-55.7,65-97.1,63.6l63.2,230.7L194.4,715L73.3,285.9l56.3,22.3l71.9,259.6l18.8-47.4L138,219.9l53.4,21.1c27.1,10.7,57.9-2.6,68.7-29.7c10.7-27.1-2.6-57.9-29.7-68.7L13.9,57l0-0.1l0,0L0,0L0,0L0,0z"
    }, durXShort, animType, function() {
      setTimeout(frameEleven, timeOutDelay);
    });
  }

  function frameEleven() {
    path.animate({
      d: "M196.4,190.8L196.4,190.8L196.4,190.8L196.4,190.8l18.6,29.2h207.9c55.5,0,100.7,45.2,100.7,100.7c0,43.7-27.9,80.9-66.9,94.8l143.6,191.3l-0.2,206.4L329.7,458.7h60.5l162.3,215l0-51l-187-249.2h57.4c29.2,0,52.9-23.7,52.9-52.9c0-29.2-23.7-52.9-52.9-52.9H190.2L0,0l0,0L196.4,190.8L196.4,190.8L196.4,190.8z"
    }, durXShort, animType, function() {
      setTimeout(frameTwelve, timeOutDelay);
    });
  }

  function frameTwelve() {
    path.animate({
      d: "M504.8,47.6C454,52.3,434.2,54.1,392.3,58c-22.6,2.1,7.4-0.7-63.5,5.9L97.3,85.2l24.2,29.5l207-19.1c55.3-5.1,104.4,35.7,109.5,91c4,43.5-20.4,83.1-57.9,100.6l160.6,177.3L559.5,670l-301.9-328l60.3-5.6l181.4,199.2l-4.7-50.8L285.5,253.8l57.2-5.3c29.1-2.7,50.5-28.5,47.8-57.6c-2.7-29.1-28.5-50.5-57.6-47.8l-231.8,21.4L0,46.2l324.4-30c97.1-9,37.6-3.5,94-8.7C475.7,2.3,435,6,500.4,0C502.2,18.8,502.6,23.8,504.8,47.6z"
    }, durXShort, animType, function() {
      setTimeout(frameThirt, timeOutDelayXShort);
    });
  }

  function frameThirt() {
    path.animate({
      d: "M402.3,283.8c31.9-23.7,52.5-61.6,52.5-103.8c0-71.2-57.9-132.3-129.1-132.3H93.3l21.4,31.6h207.9c55.5,0,100.7,45.2,100.7,100.7c0,43.7-27.9,80.9-66.9,94.8L500,466.2l-0.2,206.4L229.3,318.1h60.5l162.3,215l0-51L265.2,233h57.4c29.2,0,52.9-23.7,52.9-52.9c0-29.2-23.7-52.9-52.9-52.9H89.8L0,0h325.7c97.5,0,176.8,82.5,176.8,180c0,57.6-28.1,109.4-71.6,141.9C415.3,301,415.1,300.7,402.3,283.8z"
    }, durXShort, animType, function() {
      setTimeout(frameFourt, 1000);
    });
  }

  function frameFourt() {

    $('.passbook').toggleClass('rotate-3d');
    setTimeout(zoom, 2000);

  }

};
