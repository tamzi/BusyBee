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

