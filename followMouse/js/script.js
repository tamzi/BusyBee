        /*Your Custom Javascript file goes here.*/

(function () {
	var Particle, particleCount, particles, sketch, z;
    sketch = Sketch.create();
    particles = [];
    particleCount = 750;
    sketch.mouse.x = sketch.width / 2;
    sketch.mouse.y = sketch.height / 2;
    sketch.strokeStyle = 'hsla(200, 50%, 50%, .4)';
    sketch.globalCompositeOperation = 'lighter';
    Particle = function () {
        this.x = random(sketch.width);
        this.y = random(sketch.height, sketch.height * 2);
        this.vx = 0;
        this.vy = -random(1, 10) / 5;
        this.radius = this.baseRadius = 1;
        this.maxRadius = 50;
        this.threshold = 150;
        return this.hue = random(180, 240);
    };
	Particle.prototype = {
        update: function () {
            var dist, distx, disty, radius;
            distx = this.x - sketch.mouse.x;
            disty = this.y - sketch.mouse.y;
            dist = sqrt(distx * distx + disty * disty);
            if (dist < this.threshold) {
                radius = this.baseRadius + (this.threshold - dist) / this.threshold * this.maxRadius;
                this.radius = radius > this.maxRadius ? this.maxRadius : radius;
            } else {
                this.radius = this.baseRadius;
            }
            this.vx += (random(100) - 50) / 1000;
            this.vy -= random(1, 20) / 10000;
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < -this.maxRadius || this.x > sketch.width + this.maxRadius || this.y < -this.maxRadius) {
                this.x = random(sketch.width);
                this.y = random(sketch.height + this.maxRadius, sketch.height * 2);
                this.vx = 0;
                return this.vy = -random(1, 10) / 5;
            }
        },



}.call(this));
