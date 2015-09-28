        /*Your Custom Javascript file goes here.*/

/*=============================================================================*/
/* Canvas Lightning v1
/*=============================================================================*/
var canvasLightning = function(c, cw, ch) {

  /*=============================================================================*/
  /* Initialize
  /*=============================================================================*/
  this.init = function() {
    this.loop();
  };

/*=============================================================================*/
  /* Variables
  /*=============================================================================*/
  var _this = this;
  this.c = c;
  this.ctx = c.getContext('2d');
  this.cw = cw;
  this.ch = ch;
  this.mx = 0;
  this.my = 0;

  this.lightning = [];
  this.lightTimeCurrent = 0;
  this.lightTimeTotal = 50;

/*=============================================================================*/
  /* Utility Functions
  /*=============================================================================*/
  this.rand = function(rMi, rMa) {
    return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
  };
  this.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
  };

 /*=============================================================================*/
  /* Create Lightning
  /*=============================================================================*/
  this.createL = function(x, y, canSpawn) {
    this.lightning.push({
      x: x,
      y: y,
      xRange: this.rand(5, 30),
      yRange: this.rand(5, 25),
      path: [{
        x: x,
        y: y
      }],
      pathLimit: this.rand(10, 35),
      canSpawn: canSpawn,
      hasFired: false
    });
  };

