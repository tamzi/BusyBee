        /*Your Custom Javascript file goes here.*/
var clouds = document.getElementById('clouds')
sun = document.getElementById('sun')
sky = document.getElementById('XMLID_1_')
cars = document.getElementById('cars')
trees = document.getElementById('trees')
travelTime = 1
changeTime = 0
positionTop = 30
positionBottom = 200;

var sunTl = new TimelineMax({
  repeat: -1
})
carsTl = new TimelineMax({
  repeat: -1
})
skyTl = new TimelineMax({
  repeat: -1
})
cloudsTl = new TimelineMax({
  repeat: -1
})
treesTl = new TimelineMax({
  repeat: -1
})

sunTl.fromTo(sun, travelTime, {
    y: positionTop,
    scaleY: 0.8,
    scaleX: 1
  }, {
    ease: Power1.easeIn,
    y: positionBottom,
    scaleY: 1,
    scaleX: 0.4
  })
  .to(sun, changeTime, {
    fill: "#f7e4ba"
  })
  .to(sun, travelTime, {
    y: positionTop,
    scaleY: 0.8,
    scaleX: 1
  })
  .to(sun, travelTime, {
    ease: Power1.easeIn,
    y: positionBottom,
    scaleX: 0.4
  })
  .to(sun, changeTime, {
    fill: "#ffc808"
  })
  .to(sun, travelTime, {
    y: positionTop,
    scaleY: 0.8,
    scaleX: 1
  });

skyTl.to(sky, travelTime / 1, {
    fill: "#83D1DB"
  })
  .to(sky, travelTime / 1, {
    fill: "#091730"
  })
  .to(sky, travelTime / 1, {
    fill: "#091730"
  })
  .to(sky, travelTime / 1, {
    fill: "#83D1DB"
  })

cloudsTl.fromTo(clouds, 1, {
  x: -500,
  ease: Power0.easeNone
}, {
  x: 500,
  ease: Power0.easeNone
});

carsTl.fromTo(cars, 0.15, {
  x: 500,
  ease: Power0.easeNone
}, {
  x: -500,
  ease: Power0.easeNone
});

treesTl.to(trees, 1, {
    scaleY: 0.4,
    transformOrigin: "50% 100%"
  })
  .to(trees, 1, {
    scaleY: 1,
    transformOrigin: "50% 100%"
  })
