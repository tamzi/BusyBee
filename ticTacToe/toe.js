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
