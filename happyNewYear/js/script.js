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

  var skiliftDom = svg.querySelector("#skilift"),
    houses = {
      dom: svg.querySelector("#houses")
    },
    penguinsDom = svg.querySelectorAll("#penguins > g"),
    babyPenguins = [penguinsDom[2], penguinsDom[3], penguinsDom[4]],
    snowManHat = svg.querySelector("#hatman"),
    handHat = snowManHat.querySelector("#handhat_1_"),
    eyesHat = snowManHat.querySelector("#eyesHatMan"),
    elfMan = svg.querySelector("#elfman"),
    elfButtons = elfMan.querySelectorAll("#elfButtons circle"),
    elfBow = elfMan.querySelectorAll("#bowElf"),
    scarfMan = svg.querySelector("#scarfman"),
    hangingDom = svg.querySelectorAll("#hanging > g"),
    letters = svg.querySelectorAll("#letters path");


function startScene() {

    TweenMax.set([svg.querySelector("#leftSkiLift"), svg.querySelector("#rightSkiLift")], {
      y: -600
    });
    TweenMax.set(svg.querySelector("#trailSkiLift"), {
      scaleX: 0,
      transformOrigin: "left bottom"
    });
    TweenMax.set(svg.querySelector("#lift"), {
      opacity: 0
    });
    TweenMax.set(houses.dom, {
      scaleY: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(svg.querySelector("#snowPenguins"), {
      y: -600,
      opacity: 0
    });
    TweenMax.set(svg.querySelector("#penguins"), {
      scale: 0,
      transformOrigin: "10% 50%"
    });
    TweenMax.set([svg.querySelector("#snowManSnow1"), svg.querySelector("#snowManSnow2")], {
      y: -600,
      opacity: 0
    });
    TweenMax.set(snowManHat, {
      rotationZ: -60,
      scale: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(elfMan, {
      rotationZ: 60,
      scale: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(scarfMan, {
      rotationZ: 90,
      scale: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(hangingDom, {
      opacity: 0
    });

    //Letters intro
    for (var i = 0; i < letters.length; i++) {
      TweenMax.set(letters[i], {
        transformOrigin: "center top",
        rotationZ: Math.random() * 180,
        scale: 0,
      });
    }

    copyAnim();

  }


//SNOW
  var snow = svg.querySelector("#snow").querySelectorAll("ellipse, path");
  var snows = [
    [],
    []
  ];
  for (var i = 0; i < snow.length; i++) {
    rand = Math.floor(Math.random() * 2);
    var offset = snow[i].getBoundingClientRect();
    TweenMax.set(snow[i], {
      y: -(offset.top + offset.width + 100)
    });
    TweenMax.to(snow[i], Math.random() * 50 + 50, {
      y: 920,
      repeat: -1,
      delay: -Math.random() * 100
    });
  }

  function copyAnim() {
    var appearance = new TimelineMax({
      onComplete: startAnimations
    }).timeScale(1);
    appearance.staggerTo(letters, 3, {
        scale: 1,
        rotationZ: 0,
        ease: Elastic.easeOut
      }, 0.1)
      .to(houses.dom, 1, {
        scaleY: 1,
        ease: Elastic.easeOut
      }, "-=2")
      .to(svg.querySelector("#snowManSnow1"), 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, "-=1.7")
      .to(svg.querySelector("#snowManSnow2"), 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, "-=1.2")
      .to(scarfMan, 1, {
        rotationZ: 0,
        scale: 1,
        ease: Elastic.easeOut
      }, "-=0.8")
      .to(snowManHat, 1, {
        rotationZ: 0,
        scale: 1,
        ease: Elastic.easeOut
      }, "-=0.8")
      .to(elfMan, 1, {
        rotationZ: 0,
        scale: 1,
        ease: Elastic.easeOut
      }, "-=0.8")
      .to(svg.querySelector("#snowPenguins"), 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, "-=.8")
      .to(svg.querySelector("#penguins"), 1, {
        scale: 1,
        ease: Power2.easeOut
      })
      .to(hangingDom, 0.3, {
        opacity: 1
      })
      .to(svg.querySelector("#leftSkiLift"), 0.7, {
        y: 0,
        ease: Power1.easeOut
      })
      .to(svg.querySelector("#rightSkiLift"), 0.7, {
        y: 0,
        ease: Power1.easeOut
      })
      .to(svg.querySelector("#trailSkiLift"), 0.7, {
        scaleX: 1
      })
      .to(svg.querySelector("#lift"), 0.3, {
        opacity: 1
      }, "-=0.7")
  }

  //HOVER EFFECTS
  function enterOverlay(e) {
    if (!zoom && animationOn) {
      svg.style.cursor = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png) 20 20, auto";
      TweenMax.to(e.target, .3, {
        opacity: 1,
        ease: Power2.easeOut
      });
    }
  }

  function leaveOverlay(e, el) {
    if (!el) {
      el = e.target;
    }
    if (!zoom) {
      svg.style.cursor = "auto";
    }
    TweenMax.to(el, .5, {
      opacity: 0,
      ease: Power2.easeOut
    });
  }

  function zoomViewBox(e) {
    if (zoom || !animationOn) {
      return;
    }
    e.stopPropagation();
    var id = this.getAttribute("id");

    TweenMax.to(svg, 2, {
      attr: {
        viewBox: viewBoxes[id].x + " " + viewBoxes[id].y + " " + viewBoxes[id].width + " " + viewBoxes[id].height
      },
      ease: Power3.easeOut
    });

    zoom = true;
    leaveOverlay(false, this);
    svg.style.cursor = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png) 20 20, auto";
  }

  function unZoom() {
    zoom = false;
    svg.style.cursor = "auto";
    TweenMax.to(svg, 2, {
      attr: {
        viewBox: "0 0 1600 900"
      },
      ease: Power3.easeOut
    });
  }

  var overlays = svg.querySelectorAll("#overlays > g");
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener("mouseenter", enterOverlay);
    overlays[i].addEventListener("mouseleave", leaveOverlay);
    overlays[i].addEventListener("click", zoomViewBox);
  }
  svg.addEventListener("click", unZoom);

  document.querySelector(".gift").addEventListener("click", openBox);
  document.body.style.background = "#bfe2dc";
  document.querySelector(".scene").style.display = "block";

}


//preload images
var glass = new Image()
glass.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png";
var cross = new Image()
cross.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png";

window.onload = function() {
  init();


};
