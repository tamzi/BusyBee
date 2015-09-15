        /*Your Custom Javascript file goes here.*/

/*
 Added to start the time at your local time.
*/

var d = new Date(),
		hr  = d.getHours()%12,
		min = d.getMinutes(),
		sec = d.getSeconds(),

		// Base Values (-90 since that's where 12 starts)
		baseDegSEC = -90 + Math.round(sec * 6),
    baseDegMIN = -90 + Math.round(min*6 + (6 / (60/sec))),
    baseDegHR  = -90 + Math.round(hr*30 + (30 / ( (60/min)+(60/sec) )) ),

		// End Values
		endDegSEC = baseDegSEC + 360,
    endDegMIN = baseDegMIN + 360,
    endDegHR  = baseDegHR  + 360,

    keyframes = "",
    VENDORS = [ '-webkit-', '-moz-', '-o-', '-ms-', '' ];

