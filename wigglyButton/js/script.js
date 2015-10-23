        /*Your Custom Javascript file goes here.*/
'use strict';
var myCircle = document.getElementById('example');
var animations = [
    'click me',
    'pulse',
    'bounce',
    'wiggle'
];
var currentAnimation = 0;
myCircle.addEventListener('click', function () {
    currentAnimation += 1;
    if (currentAnimation > animations.length - 1) {
        currentAnimation = 0;
    }
    myCircle.className = 'circle ' + animations[currentAnimation];
    myCircle.innerHTML = animations[currentAnimation];
});
