        /*Your Custom Javascript file goes here.*/

function init() {
  var svg = document.querySelector(".scene");
  var zoom = false;
  var animationOn = false;


var viewBoxes = {
    "overHouses": {
      x: 43,
      y: 290,
      width: 130,
      height: 67
    },
    "overSnowmen": {
      x: 250,
      y: 325,
      width: 225,
      height: 115
    },
    "overPenguins": {
      x: 634,
      y: 310,
      width: 95,
      height: 140
    },
    "overHanging": {
      x: 774,
      y: 416,
      width: 49,
      height: 38
    },
    "overSkilift": {
      x: 897,
      y: 284,
      width: 217,
      height: 130,
    }
  };





//preload images
var glass = new Image()
glass.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png";
var cross = new Image()
cross.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png";

window.onload = function() {
  init();


};
