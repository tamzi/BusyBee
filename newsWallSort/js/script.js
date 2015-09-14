        /*Your Custom Javascript file goes here.*/
			/*Adding the sorting js*/
var $orgPage = $('.page').clone();

/**
 * Filters at most 3 random tiles
 */
function filter() {
  var $tiles = $('.tile'),
    numTiles = $tiles.length,
    rand = -1,
    filtered = Math.floor(Math.random() * (numTiles - 1)) + 1,
    i;

  $tiles.find('.live').data('filtered', false);

  // Filter out some random tiles
  for (i = 0; i < filtered; i++) {
    rand = Math.floor(Math.random() * numTiles) + 1;

    if ($('.tile:nth-child(' + rand + ')').data('filtered')) {
      continue;
    }

    $('.tile:nth-child(' + rand + ')')
      .find('.live')
      .animate({
        opacity: 0
      }, {
        duration: 500,
        easing: 'easeOutExpo',
        complete: function() {
          $(this).find('.live').css({
            top: 120
          });
        }
      })
      .data('filtered', true);
  }

  setTimeout(function() {
    repositionTiles();
  }, 100);
}
