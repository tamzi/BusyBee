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

