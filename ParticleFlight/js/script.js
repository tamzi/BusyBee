        /*Your Custom Javascript file goes here.*/


var $c = $(".c"),
		$wrap = $(".wrap"),
		w = window.innerWidth,
		h = window.innerHeight;

function random(min, max){
	return (Math.random() * (max - min)) + min;
}
$c.each(function(i){

	var x = random(0, w),
			y = random(0, h),
			z = random(-1000, -200),
			color = "hsla("+i * 1.8+", 50%, 50%, 1)",
			size = random(2, 30),
			c = $(this);

	c.css({
		background: color,
		height: size,
		width: size,
		borderRadius: "50%",
		boxShadow: "0 0 "+size+"px " + color
	})

