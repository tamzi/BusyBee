        /*Your Custom Javascript file goes here.*/

// A little task to practice some creativity...

// The Task - given a string eg. 'salamu',
// Animate the words with a scrambling effect

// This really isn't meant to be showcase, rather its a documentation
// of my learning and experimentation process, (if you run it in sequence)

var text = 'SALAMU';

var dom = document.createElement('div');
document.body.appendChild(dom);
// dom.innerHTML = text;

var chars = [];
for (t in text) {
  span = document.createElement('span');
  span.innerHTML = text[t];
  chars[t] = span;
  span.style.display = 'inline-block';
  // span.style.position = 'absolute';
  dom.appendChild(span);

}


var SECONDS = 1000;
var FPS = 30;
var animationLength = 2 * SECONDS;

var time, k;

var rand = Math.random;

animations = [

  function animate1(k) {
    dom.style.webkitTransform = 'translateX(' + ~~(k * 300) + 'px)';
  },

  function animate2(k) {

    for (i = 0; i < 5; i++) {
      chars[i].innerHTML = String.fromCharCode(~~(65 + rand() * 26));
    }

  },

  function animate3(k) {

    // left to right

    kk = k * 5;
    for (i = 0; i < 5; i++) {
      if (kk < i)
        chars[i].innerHTML = String.fromCharCode(~~(65 + rand() * 26)) //65/97
      else
        chars[i].innerHTML = text[i];
    }

  },
