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

