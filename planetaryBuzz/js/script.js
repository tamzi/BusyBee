Magnetic = new function() {

  var SCREEN_WIDTH = window.innerWidth;
  var SCREEN_HEIGHT = window.innerHeight;

  var MAGNETS_AT_START = 4;
  var PARTICLES_PER_MAGNET = 20;
  var MAGNETIC_FORCE_THRESHOLD = 300;

  var canvas;
  var context;
  var particles = [];
  var magnets = [];

  var mouseX = (window.innerWidth - SCREEN_WIDTH);
  var mouseY = (window.innerHeight - SCREEN_HEIGHT);
  var mouseIsDown = false;
  var mouseDownTime = 0;

  var skinIndex = 0;
  var skins = [{
    glowA: 'rgba(0,200,250,0.3)',
    glowB: 'rgba(0,200,250,0.0)',
    particleFill: '#ffffff',
    fadeFill: 'rgba(22,22,22,.6)',
    useFade: true
  }, {
    glowA: 'rgba(230,0,0,0.3)',
    glowB: 'rgba(230,0,0,0.0)',
    particleFill: '#ffffff',
    fadeFill: 'rgba(22,22,22,.6)',
    useFade: true
  }, {
    glowA: 'rgba(0,230,0,0.3)',
    glowB: 'rgba(0,230,0,0.0)',
    particleFill: 'rgba(0,230,0,0.7)',
    fadeFill: 'rgba(22,22,22,.6)',
    useFade: true
  }, {
    glowA: 'rgba(0,0,0,0.3)',
    glowB: 'rgba(0,0,0,0.0)',
    particleFill: '#333333',
    fadeFill: 'rgba(255,255,255,.6)',
    useFade: true
  }, {
    glowA: 'rgba(0,0,0,0.0)',
    glowB: 'rgba(0,0,0,0.0)',
    particleFill: '#333333',
    fadeFill: 'rgba(255,255,255,.2)',
    useFade: true
  }, {
    glowA: 'rgba(230,230,230,0)',
    glowB: 'rgba(230,230,230,0.0)',
    particleFill: '#ffffff',
    fadeFill: '',
    useFade: false
  }];

  this.init = function() {

    canvas = document.getElementById('world');

    if (canvas && canvas.getContext) {
      context = canvas.getContext('2d');

      // Register event listeners
      window.addEventListener('mousemove', documentMouseMoveHandler, false);
      window.addEventListener('mousedown', documentMouseDownHandler, false);
      window.addEventListener('mouseup', documentMouseUpHandler, false);
      document.getElementById('prevSkin').addEventListener('click', previousSkinClickHandler, false);
      document.getElementById('nextSkin').addEventListener('click', nextSkinClickHandler, false);
      window.addEventListener('resize', windowResizeHandler, false);

      createMagnets();

      windowResizeHandler();

      setInterval(loop, 1000 / 60);
    }
  }

  function createMagnets() {
    var w = 300;
    var h = 300;

    for (var i = 0; i < MAGNETS_AT_START; i++) {
      var position = {
        x: (SCREEN_WIDTH - w) * 0.5 + (Math.random() * w),
        y: (SCREEN_HEIGHT - h) * 0.5 + (Math.random() * h)
      };

      createMagnet(position);
    }
  }

  function createMagnet(position) {
    var m = new Magnet();
    m.position.x = position.x;
    m.position.y = position.y;

    magnets.push(m);

    createParticles(m.position);
  }

