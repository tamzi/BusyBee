        /*Your Custom Javascript file goes here.*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var W = canvas.width = window.innerWidth;
var H = canvas.height = window.innerHeight;
var particles = [];
var count = 100;

while ( count-- ) particles.push( new particle() );

function particle () {
  this.clr = "#f1f1f1";
  this.rad = Math.random() * 10;
  this.vel = {
    x: Math.random() * 2,
    y: Math.random() * 2
  };
  this.pos = {
    x: Math.random() * W,
    y: Math.random() * H
  };
  this.show = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = "rgba(0,0,0,.5)";
    ctx.arc(this.pos.x, this.pos.y, this.rad, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    this.updatePos();
  };
  this.updatePos = function () {
    if ( this.pos.x < 0 || this.pos.x > W ) this.vel.x *= -1;
    if ( this.pos.y < 0 || this.pos.y > H ) this.vel.y *= -1;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  };
}
