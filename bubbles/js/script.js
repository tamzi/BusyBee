        /*Your Custom Javascript file goes here.*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var W = canvas.width = window.innerWidth;
var H = canvas.height = window.innerHeight;
var particles = [];
var count = 100;

while ( count-- ) particles.push( new particle() );
