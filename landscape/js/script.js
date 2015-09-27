        /*Your Custom Javascript file goes here.*/
var canvas, c, w, h,
  twoPI = Math.PI * 2,
  mX, mY,
  resize = true,
  mousemove = true,
  per = {
    x: 0,
    y: 0
  },
  mtn, trackmouse = false;

window.onload = function() {
  canvas = document.createElement('canvas')
  w = canvas.width = window.innerWidth - 40;
  h = canvas.height = window.innerHeight - 40;
  c = canvas.getContext('2d');
  document.body.appendChild(canvas);

  !resize || window.addEventListener('resize', function(e) {
    w = canvas.width = window.innerWidth - 40;
    h = canvas.height = window.innerHeight - 40;
  });
  !mousemove || canvas.addEventListener('mousemove', function(e) {
    trackmouse = true;
    mX = e.pageX - 20;
    mY = e.pageY - 20;
    per = {
      x: mX,
      y: mY
    };
  });

  mX = w / 2;
  mY = w / 2;

  per = {
    x: w / 2,
    y: h / 2,
    step: 1
  }
  mtn = new Mountains(300, "10");
  window.setInterval(animate, 17);
}

function newGradient(gradient) {
  var grad;
  switch (gradient.type) {
    case "radial":
      grad = c.createRadialGradient(gradient.x1, gradient.y1, gradient.r1, gradient.x1, gradient.y1, gradient.r2);
      break;
    case "linear":
      grad = c.createLinearGradient(gradient.x1, gradient.y1, gradient.x2, gradient.y2);
      break;
  }

  for (var i = 0; i < gradient.stops.length; i++) {
    grad.addColorStop(gradient.stops[i].s, gradient.stops[i].c);
  }

  return grad;
}

function animate() {
  if (!trackmouse) {
    per.x = mX = w / 2 + Math.round(Math.cos(per.step) * w / 2);
    per.y = mY = h / 2 + Math.round(Math.sin(per.step) * h / 2);
    per.step += 0.03;
    if (per.step > twoPI)
      per.step = 0;
  }

  c.save();
  c.globalCompositeOperation = "source-over";
  c.fillStyle = newGradient({
    type: "radial",
    x1: mX,
    y1: mY,
    r1: 0,
    r2: w,
    stops: [{
        s: 0,
        c: "rgba(" + (h - mY) + "," + (h - mY) + "," + (h - mY) + ",0.5)"
      }, {
        s: 0.05,
        c: "rgba(" + (h - mY) + "," + (h - mY - 128) + ",128,0.5)"
      }, {
        s: 1,
        c: "rgba(0," + (h - mY - 128) + "," + (h - mY) + ",0.5)"
      }

    ]
  });
  c.fillRect(0, 0, w, h);
  mtn.draw();
}

function Mountains(peaks, seed) {
  var points = [];
  this.init = function() {
    var step = w / peaks,
      y = 0;

    points.push({
      x: 0,
      y: y
    });
    for (var i = 1; i <= peaks; i++) {
      y = y + (Math.random() * 20) - 10;
      points.push({
        x: i * step,
        y: y
      });
    }
  };
  this.draw = function() {
    c.save();
    //c.fillStyle = "rgba(20,20,20,1)";
    c.fillStyle = newGradient({
      type: "linear",
      x1: 0,
      y1: 0,
      x2: 0,
      y2: h,
      stops: [{
        s: 1,
        c: "rgba(0,0,0,1)"
      }, {
        s: 0,
        c: "rgba(80,80,80,1)"
      }]
    });
    c.beginPath();
    c.moveTo(points[0].x, h / 2 - points[0].y);
    for (var p = 1; p < points.length; p++) {
      c.lineTo(points[p].x, h / 2 - points[p].y);
    }
    c.lineTo(w, h);
    c.lineTo(0, h);
    c.closePath();
    c.fill();
    c.restore();

    c.globalCompositeOperation = "lighter";
    c.fillStyle = "rgba(" + (h - mY) + "," + (h - mY) + "," + (h - mY) + ",0.03)";
    for (var p = 0; p < points.length - 1; p++) {
      var va1 = Math.atan2(h / 2 - points[p].y - per.y, points[p].x - per.x),
        va2 = Math.atan2(h / 2 - points[p + 1].y - per.y, points[p + 1].x - per.x);

      c.beginPath();
      c.moveTo(points[p].x, h / 2 - points[p].y);
      c.lineTo(points[p + 1].x, h / 2 - points[p + 1].y);
      c.lineTo(points[p + 1].x + Math.cos(va2) * w, h / 2 - points[p + 1].y + Math.sin(va2) * w);
      c.lineTo(points[p].x + Math.cos(va1) * w, h / 2 - points[p].y + Math.sin(va1) * w);
      c.closePath();
      c.fill();
    }
  };

  this.init();

}

