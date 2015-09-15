        /*Your Custom Javascript file goes here.*/

/*
From:

http://thesisb.com
Realistic wristwatch in pure HTML/CSS

---
No images!
CSS texture for the band borrowed from http://lea.verou.me/css3patterns/
Idea by Brian Shumate - http://news.ycombinator.com/item?id=4373036
---

Click details above and drop a comment/suggestion/critique
*/


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


for( var i = 0, len = VENDORS.length; i < len; i++ ) {

  keyframes += "@"+VENDORS[i]+"keyframes seconds {"+
    "0%{"+VENDORS[i]+"transform: rotate("+baseDegSEC+"deg);}"+
    "to{"+VENDORS[i]+"transform: rotate("+endDegSEC+"deg);}}"+

    "@"+VENDORS[i]+"keyframes minutes {"+
    "0%{"+VENDORS[i]+"transform: rotate("+baseDegMIN+"deg);}"+
    "to{"+VENDORS[i]+"transform: rotate("+endDegMIN+"deg);}}"+

    "@"+VENDORS[i]+"keyframes hours {"+
    "0%{"+VENDORS[i]+"transform: rotate("+baseDegHR+"deg);}"+
    "to{"+VENDORS[i]+"transform: rotate("+endDegHR+"deg);}}";
}

// Add the Keyframes in a <style> tag in the <head>
var cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';

var rules = document.createTextNode(keyframes);
cssAnimation.appendChild(rules);

document.getElementsByTagName("head")[0].appendChild(cssAnimation);


// Reloading the stylesheets
var links = document.getElementsByTagName("link");

for (var i = 0; i < links.length; i++) {
  var link = links[i];
  if (link.rel === "stylesheet") {
    link.href += "?";
  }
}
