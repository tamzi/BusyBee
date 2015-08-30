        /*Your Custom Javascript file goes here.*/
$(document).ready(function(){
	var menuItemNum=$(".menu-item").length;
	var angle=360;
	var distance=80;
	var startingAngle=180+(-angle/2);
	var slice=angle/(menuItemNum);
	TweenMax.globalTimeScale(0.8);
	$(".menu-item").each(function(i){
		var angle=startingAngle+(slice*i);
		$(this).css({
			transform:"rotate("+(angle)+"deg)"
		})
		$(this).find(".menu-item-icon").css({
			transform:"rotate("+(-angle)+"deg)"
		})
	})
	var on=false;


});
