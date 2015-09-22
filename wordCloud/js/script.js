        /*Your Custom Javascript file goes here.*/

$(document).ready(function() {
  if (!$('#myCanvas').tagcanvas({
      //textColour: '#ff0000',
      outlineColour: '#ff00ff',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      textFont: null,
      textColour: null,
      weightMode: 'both',
      weight: true,
      weightGradient: {
        0: '#f00', // red
        //0.33: '#ff0', // yellow
        //0.66: '#0f0', // green
        1: '#00f' // blue
      }
    }, 'tags')) {
    // something went wrong, hide the canvas container
    $('#myCanvasContainer').hide();
  }
});
