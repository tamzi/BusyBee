        /*Your Custom Javascript file goes here.*/


window.onload = function() {
  var count = 200;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var flakes = {};
  var winds = {};
  var elm = document.createElement('canvas');
  var pixelDensity = window.devicePixelRatio || 1;

  elm.setAttribute('id', "snow");
  elm.setAttribute('width', width * pixelDensity);
  elm.setAttribute('height', height * pixelDensity);

  elm.style.width = width + "px";
  elm.style.height = height + "px";

  var ctx = elm.getContext('2d');
  ctx.globalCompositeOperation = 'xor';
  document.body.appendChild(elm);

 var Snow = function(canvas) {
    this.canvas = canvas;
    this.depth = Math.floor(Math.random() * 20);
    this.seed = Math.random() * 2500;
    this.data = this.generateFlake();
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.ctx = this.canvas.getContext('2d');
  }

  Snow.prototype.generateFlake = function() {
    var fauxCanvas = document.createElement('canvas');
    fauxCanvas.setAttribute("height", 150);
    fauxCanvas.setAttribute("width", 150);
    var fauxContext = fauxCanvas.getContext('2d');

    fauxContext.beginPath();
    fauxContext.fillStyle = "#FFF";

    fauxContext.rect(this.depth, this.depth, this.depth % 20, this.depth % 20);
    fauxContext.fill();
    fauxContext.closePath();
    stackBlurCanvasRGBA(fauxCanvas, 0, 0, 100, 100, this.depth)

    return fauxCanvas;
  }

  Snow.prototype.draw = function() {
    this.ctx.drawImage(this.data, this.x, this.y);
    return this;
  };

  Snow.prototype.tick = function() {
    ++this.seed;
    if (this.outOfBounds()) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
    this.y += this.depth / 7;
    this.applyWind();
    this.draw();
  }

  Snow.prototype.outOfBounds = function() {
    return this.y + 1 > this.canvas.height || this.x > this.canvas.width || this.x < 0;
  }

  Snow.prototype.applyWind = function() {
    if (winds[this.depth]) {
      this.y += winds[this.depth].yRate;
      this.x += winds[this.depth].xRate;
    }
  }

  for (var i = 0; i < count; ++i) {
    var id = i + "_" + (new Date()).getTime()
    flakes[id] = new Snow(elm, id).draw();
  }

  for (var i = 0; i < 3; ++i) {
    depth = ~~(Math.random() * 20);
    winds[depth] = {
      xRate: Math.random() * 2,
      yRate: Math.random() * 2,
      depth: depth
    };
  }

  function tick() {
    ctx.clearRect(0, 0, elm.width, elm.height);
    for (flake in flakes) {
      flakes[flake].tick();
    }
  }

  tick();

  setInterval(tick, 16)
}

var mul_table = [
  512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512,
  454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512,
  482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456,
  437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512,
  497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328,
  320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456,
  446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
  329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512,
  505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
  399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328,
  324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271,
  268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456,
  451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388,
  385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
  332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
  289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259
];
var shg_table = [
  9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
  17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
  19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
  20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
  21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
  21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
  22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
  22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
  23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
  23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
  23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
  23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24
];

function stackBlurImage(imageID, canvasID, radius, blurAlphaChannel) {

  var img = document.getElementById(imageID);
  var w = img.naturalWidth;
  var h = img.naturalHeight;

  var canvas = document.getElementById(canvasID);

  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.width = w;
  canvas.height = h;

  var context = canvas.getContext("2d");
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0);

  if (isNaN(radius) || radius < 1) return;

  if (blurAlphaChannel)
    stackBlurCanvasRGBA(canvasID, 0, 0, w, h, radius);
  else
    stackBlurCanvasRGB(canvasID, 0, 0, w, h, radius);
}

function stackBlurCanvasRGBA(canvas, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) return;
  radius |= 0;

  var context = canvas.getContext("2d");
  var imageData;

  try {
    try {
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {

			/*
			NOTE: this part is supposedly only needed if you want to work with local files
			so it might be okay to remove the whole try/catch block and just use:

			imageData = context.getImageData( top_x, top_y, width, height );
*/
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = context.getImageData(top_x, top_y, width, height);
      } catch (e) {
        alert("Cannot access local image");
        throw new Error("unable to access local image data: " + e);
        return;
      }
    }
  } catch (e) {
    alert("Cannot access image");
    throw new Error("unable to access image data: " + e);
  }



