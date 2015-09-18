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

  // Loop
  var count = 0;
  (function loop() {
    //  tn += 0.00000000;
    tn += 0.04;
    for (var i = 0; i < pointCount; i++) {
      var p = points[i];
      //       var noise = CanvasPS3.noise(p.o.x+tn, p.o.y+tn, tn);
      var noise = CanvasPS3.noise(p.o.x * 0.005 + tn, p.o.y * 0.01, tn * 0.3);
      //var noise = CanvasPS3.noise(p.o.x, p.o.y, tn);
      p.x = p.o.x;
      p.y = (noise * 200);
    }

   console.log(points);

    var spline = new Spline();
    var position = spline.get2DPoint(points, 0);
    var oldPosition = {
      x: position.x,
      y: position.y
    };
    var previousMidpoint = null;

   // Slowly erase after drawing
    context.fillStyle = "rgba(0, 0, 0,0.04)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.lineWidth = 0.5;
    context.translate(0, canvas.height / 2);
    context.globalCompositeOperation = "lighter";
    for (i = 0; i < points.length; ++i) {
      var hsv = CanvasPS3.HSVRGB((t * 360 * 5) % 360, 60, 100);
      position = spline.get2DPoint(points, i / pointCount);
      context.beginPath();

