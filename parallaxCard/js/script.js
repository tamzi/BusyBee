        /*Your Custom Javascript file goes here.*/


//simple jQuery Parallax Mouse Movement
// by Hugh Balboa
$('#Parallax-content').mousemove(function (e) {
   var amountMovedX = (e.pageX * -0.3 / 6);
   var amountMovedY = (e.pageY * -1.29 / 6);
   $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px ');
});
