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
