        /*Your Custom Javascript file goes here.*/
;(function() {

	'use strict';

	function bythenose () {

		requestAnimationFrame( bythenose );
		pixels.clearRect(0, 0, canvas.width, canvas.height);

		var

		iable = first;
		while (iable) iable = iable.anim();

		iable = last;
		while (iable) iable = iable.draw();

	}

	function Of (the, body) {

		var iola          = Math.max (image.width, image.height) / number;
		this.size         = (the + 5) * iola * 0.5;
		this.slice        = document.createElement('canvas');
		this.slice.width  = this.size * 2;
		this.slice.height = this.size * 2;
		this.ddx          = 0;
		this.ddy          = 0;
		this.px           = canvas.width  * 0.5;
		this.py           = canvas.height * 0.5;
		this.x            = this.px;
		this.y            = this.py;
		this.prev         = body;
		this.next         = null;
		this.pixels       = pixels;
		this.parent       = body ? body : pointer;
		var slice         = this.slice.getContext('2d');
		slice.beginPath();
		slice.arc(this.size, this.size, this.size, 0, 2 * Math.PI);
		slice.clip();
		slice.drawImage(image, -(image.width * 0.5 - this.size), -(image.height * 0.5 - this.size));
		if (the < number) this.next = new Of (the + 1, this);
		else last = this;

	}

	Of.prototype.anim = function () {

		this.x = this.px += this.ddx = (this.parent.x - this.px) * 0.8;
		this.y = this.py += this.ddy = (this.parent.y - this.py) * 0.8;
		return this.next;

	};

	Of.prototype.draw = function () {

		this.pixels.drawImage(this.slice, this.x - this.size, this.y - this.size);
		return this.prev;

	};

	var canvas = {

		width:  0,
		height: 0,
		elem: document.createElement('canvas'),
		resize: function () {
			this.width  = this.elem.width  = this.elem.offsetWidth;
			this.height = this.elem.height = this.elem.offsetHeight;
		},
		init: function () {
			var iable = this.elem.getContext('2d');
			document.body.appendChild(this.elem);
			window.addEventListener('resize', this.resize.bind(this), false);
			this.resize();
			return iable;
		}

	};

	var pixels = canvas.init();

	var pointer = {

		x:  canvas.width  * 0.5,
		y:  canvas.height * 0.5,
		pointer: function (e) {
			var pointer;
			if (e.targetTouches) {
				e.preventDefault();
				pointer = e.targetTouches[0];
			} else pointer = e;
			return pointer;
		},
		move: function (e) {
			var pointer = this.pointer(e);
			this.x = pointer.clientX;
			this.y = pointer.clientY;
		}

	};

	window.addEventListener("mousemove", pointer.move.bind(pointer), false );
	canvas.elem.addEventListener("touchmove", pointer.move.bind(pointer), false );

	var number = 200;
	var image = new Image();
	var first, last;

	image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/222599/head6.jpg';
	image.onload = function () {

		first = new Of ( 0 );
		bythenose();

	};

}());
