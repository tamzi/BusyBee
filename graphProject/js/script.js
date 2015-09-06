        /*Your Custom Javascript file goes here.*/
// don't try to learn anything from the code, it's a
// series of hacks. this one's all about the visuals.
// - @hakimel

var LineChart = function( options ) {

  var data = options.data;
  var canvas = document.body.appendChild( document.createElement( 'canvas' ) );
  var context = canvas.getContext( '2d' );

  var rendering = false,
      paddingX = 40,
      paddingY = 40,
      width = options.width || window.innerWidth,
      height = options.height || window.innerHeight,
      progress = 0;

  canvas.width = width;
  canvas.height = height;

  var maxValue,
      minValue;

  var y1 = paddingY + ( 0.05 * ( height - ( paddingY * 2 ) ) ),
      y2 = paddingY + ( 0.50 * ( height - ( paddingY * 2 ) ) ),
      y3 = paddingY + ( 0.95 * ( height - ( paddingY * 2 ) ) );

  format();
  render();
function format( force ) {

    maxValue = 0;
    minValue = Number.MAX_VALUE;

    data.forEach( function( point, i ) {
      maxValue = Math.max( maxValue, point.value );
      minValue = Math.min( minValue, point.value );
    } );

    data.forEach( function( point, i ) {
      point.targetX = paddingX + ( i / ( data.length - 1 ) ) * ( width - ( paddingX * 2 ) );
      point.targetY = paddingY + ( ( point.value - minValue ) / ( maxValue - minValue ) * ( height - ( paddingY * 2 ) ) );
      point.targetY = height - point.targetY;

      if( force || ( !point.x && !point.y ) ) {
        point.x = point.targetX + 30;
        point.y = point.targetY;
        point.speed = 0.04 + ( 1 - ( i / data.length ) ) * 0.05;
      }
    } );

  }

  function render() {

    if( !rendering ) {
      requestAnimationFrame( render );
      return;
    }

    context.font = '10px sans-serif';
    context.clearRect( 0, 0, width, height );

    context.fillStyle = '#222';
    context.fillRect( paddingX, y1, width - ( paddingX * 2 ), 1 );
    context.fillRect( paddingX, y2, width - ( paddingX * 2 ), 1 );
    context.fillRect( paddingX, y3, width - ( paddingX * 2 ), 1 );

    if( options.yAxisLabel ) {
      context.save();
      context.globalAlpha = progress;
      context.translate( paddingX - 15, height - paddingY - 10 );
      context.rotate( -Math.PI / 2 );
      context.fillStyle = '#fff';
      context.fillText( options.yAxisLabel, 0, 0 );
      context.restore();
    }

    var progressDots = Math.floor( progress * data.length );
    var progressFragment = ( progress * data.length ) - Math.floor( progress * data.length );

    data.forEach( function( point, i ) {
      if( i <= progressDots ) {
        point.x += ( point.targetX - point.x ) * point.speed;
        point.y += ( point.targetY - point.y ) * point.speed;

        context.save();

        var wordWidth = context.measureText( point.label ).width;
        context.globalAlpha = i === progressDots ? progressFragment : 1;
        context.fillStyle = point.future ? '#aaa' : '#fff';
        context.fillText( point.label, point.x - ( wordWidth / 2 ), height - 18 );

        if( i < progressDots && !point.future ) {
          context.beginPath();
          context.arc( point.x, point.y, 4, 0, Math.PI * 2 );
          context.fillStyle = '#1baee1';
          context.fill();
        }

        context.restore();
      }

    } );

    context.save();
    context.beginPath();
    context.strokeStyle = '#1baee1';
    context.lineWidth = 2;

    var futureStarted = false;
