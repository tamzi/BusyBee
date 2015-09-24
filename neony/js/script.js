        /*Your Custom Javascript file goes here.*/
var tswitch = document.getElementById('switch');
tswitch.onclick = function() {
       this.style.display = 'none';
       document.getElementById('lights').className = 'animate';
};
