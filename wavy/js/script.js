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


      // Midpoint
      var midpoint = {
        x: oldPosition.x + (position.x - oldPosition.x) * .5,
        y: oldPosition.y + (position.y - oldPosition.y) * .5
      };

      //  Draw a quadratic bezier curve to the next point in the path
      if (previousMidpoint) {
        context.moveTo(previousMidpoint.x, previousMidpoint.y);
        context.quadraticCurveTo(oldPosition.x, oldPosition.y, midpoint.x, midpoint.y);
      } else {}

      context.strokeStyle = "rgba(" + hsv[0] + "," + hsv[1] + "," + hsv[2] + ", 1)";
      context.stroke();
      context.closePath();
      previousMidpoint = midpoint;
      oldPosition.x = position.x;
      oldPosition.y = position.y;
    }
    context.restore();
    t += 0.0016;
   // Loop
    window.requestAnimationFrame(loop, null);
  })();
};

function update() {

};

function draw() {

}

function Spline() {

  var c = [],
    v2 = {
      x: 0,
      y: 0
    },
    point, intPoint, weight;

  this.get2DPoint = function(points, k) {

    point = (points.length - 1) * k;
    intPoint = Math.floor(point);
    weight = point - intPoint;

    c[0] = intPoint == 0 ? intPoint : intPoint - 1;
    c[1] = intPoint;
    c[2] = intPoint > points.length - 2 ? intPoint : intPoint + 1;
    c[3] = intPoint > points.length - 3 ? intPoint : intPoint + 2;

    v2.x = interpolate(points[c[0]].x, points[c[1]].x, points[c[2]].x, points[c[3]].x, weight);
    v2.y = interpolate(points[c[0]].y, points[c[1]].y, points[c[2]].y, points[c[3]].y, weight);

    return v2;
  }

   // Catmull-Rom

  function interpolate(p0, p1, p2, p3, t) {

    var v0 = (p2 - p0) * 0.5;
    var v1 = (p3 - p1) * 0.5;
    var t2 = t * t;
    var t3 = t * t2;
    return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

  }

}

