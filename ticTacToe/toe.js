/* Globals */
var NUM_ROWS = 3,
  NUM_COLS = 3,
  NUM_SQUARES = NUM_ROWS * NUM_COLS,
  GAMEBOARD = new Array(NUM_SQUARES),
  WIN_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  MAX_DEPTH,
  AI_MOVE,
  PLAYER_CLASS = 'cross',
  COMPUTER_CLASS = 'nought',
  RUNNING = false;


$(document).ready(function() {
  /* Start a new game */
  new_game();

  /* Settings cog clicked, show the settings menu */
  $(".board__settings-cog").click(function() {
    if ($(".board__settings").css('visibility') == 'hidden') {
      $(".board__settings").css('visibility', 'visible');
    } else {
      $(".board__settings").css('visibility', 'hidden');
    }
  });

  /* Player class has been switched from the settings menu */
  $(".board__settings__choice-cross").click(function() {
    PLAYER_CLASS = 'cross';
    COMPUTER_CLASS = 'nought';
    $(".board__settings").css('visibility', 'hidden');
    console.log('set class to cross');
  });

  $(".board__settings__choice-nought").click(function() {
    PLAYER_CLASS = 'nought';
    COMPUTER_CLASS = 'cross';
    $(".board__settings").css('visibility', 'hidden');
  });


  /* Difficulty selected */
  $("div[class*=board__difficulty__button]").click(function() {
    var difficulty = $(this).attr("id");

    if (difficulty === 'easy') MAX_DEPTH = 1;
    else if (difficulty === 'medium') MAX_DEPTH = 3;
    else MAX_DEPTH = 6;

    $(".board__difficulty").removeClass('slideDown').addClass('slideUp');
    new_game();

  });
