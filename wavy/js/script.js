        /*Your Custom Javascript file goes here.*/
// 'trying stuff' below
CanvasPS3 = {};
console.log("Hi");

init = function(event) {

  // Create canvas element
  var canvas = document.createElement('canvas');
  canvas.width = container.parentElement.clientWidth;
  canvas.height = document.body.scrollHeight - 4;
  document.getElementById('container').appendChild(canvas);

  var context = canvas.getContext("2d");
  context.lineWidth = 0.5;
  context.strokeStyle = "rgb(255,255, 255,255)";

  context.fillStyle = "rgba(0, 0, 0,1)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  var t = Math.random() * 1000;
  var tn = Math.random() * 1000;

  var points = [];
  var pointCount = 100;
  for (var i = 0; i <= pointCount; i++) {
    points[i] = {
      x: (i / pointCount) * (canvas.width + 200),
      y: 100
    };
	      points[i].o = {
      x: points[i].x,
      y: points[i].y
    };
  }
  console.log(points);


