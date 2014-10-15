
// The amount of segment points we want to create:
var amount = 9;

// The maximum height of the wave:
var height = 60;
var width = 20;

var myCircle = new Path.RegularPolygon(new Point(200, 70), 10, 170);
myCircle.fillColor = '#e9e9ff';
myCircle.selected = true;
myCircle.smooth();

function onFrame(event) {
    var segment = myCircle.segments[0];
    var segment2 = myCircle.segments[1];
    var segment3 = myCircle.segments[2];
    var segment4 = myCircle.segments[3];
    var segment5 = myCircle.segments[4];
    var sinus = Math.sin(event.time * 1 );
    var randomPoint = Math.random() * (100 - 10) + 10;
    //console.log(Math.random() * (100 - 10) + 10);
    segment.point.y = sinus * 100 + 450;
    segment2.point.y = sinus * 30 + 400;
    segment2.point.x = sinus * 10 + 450;
    segment3.point.x = sinus * 50 + 500;
    segment4.point.y = sinus * 50 + 100;
    segment5.point.y = sinus * 60 + 30;

  myCircle.smooth();

    for (var i = 0, l = boids.length; i < l; i++) {
        if (groupTogether) {
            var length = ((i + event.count / 30) % l) / l * heartPath.length;
            var point = heartPath.getPointAt(length);
            if (point)
                boids[i].arrive(point);
        }
        boids[i].run(boids);
    }

    for (var i = 0; i < balls.length - 1; i++) {
        for (var j = i + 1; j < balls.length; j++) {
            balls[i].react(balls[j]);
        }
    }
        for (var i = 0, l = balls.length; i < l; i++) {
            balls[i].iterate();
        }
}



function onResize(event) {
    // Whenever the window is resized, recenter the path:
    myCircle.position = view.center;
}


//ALGUES

    var Boid = Base.extend({
            initialize: function(position, maxSpeed, maxForce) {
                var strength = Math.random() * 0.5;
                this.acceleration = new Point();
                this.vector = Point.random() * 2 - 1;
                this.position = position.clone();
                this.radius = 30;
                this.maxSpeed = maxSpeed + strength;
                this.maxForce = maxForce + strength;
                this.amount = strength * 10 + 10;
                this.count = 0;
                this.createItems();
            },

            run: function(boids) {
                this.lastLoc = this.position.clone();
                if (!groupTogether) {
                    this.flock(boids);
                } else {
                    this.align(boids);
                }
                this.borders();
                this.update();
                this.calculateTail();
                // this.moveHead();
            },

            calculateTail: function() {
                var segments = this.path.segments,
                    shortSegments = this.shortPath.segments;
                var speed = this.vector.length;
                var pieceLength = 15 + speed / 2;
                var point = this.position;
                segments[0].point = shortSegments[0].point = point;
                // Chain goes the other way than the movement
                var lastVector = -this.vector;
                for (var i = 1; i < this.amount; i++) {
                    var vector = segments[i].point - point;
                    this.count += speed * 10;
                    var wave = Math.sin((this.count + i * 3) / 300);
                    var sway = lastVector.rotate(90).normalize(wave);
                    point += lastVector.normalize(pieceLength) + sway;
                    segments[i].point = point;
                    if (i < 3)
                        shortSegments[i].point = point;
                    lastVector = vector;
                }
                this.path.smooth();
            },

            createItems: function() {
                // this.head = new Shape.Ellipse({
                //     center: [0, 0],
                //     size: [30, 30],
                //     fillColor: 'blue'
                // });

                this.path = new Path({
                    strokeColor: 'blue',
                    strokeWidth: 12,
                    strokeCap: 'round'
                });
                for (var i = 0; i < this.amount; i++)
                    this.path.add(new Point());

                this.shortPath = new Path({
                    strokeColor: 'blue',
                    strokeWidth: 8,
                    strokeCap: 'round'
                });
                for (var i = 0; i < Math.min(3, this.amount); i++)
                    this.shortPath.add(new Point());
            },

            // moveHead: function() {
            //     this.head.position = this.position;
            //     this.head.rotation = this.vector.angle;
            // },

            // We accumulate a new acceleration each time based on three rules
            flock: function(boids) {
                var separation = this.separate(boids) * 3;
                var alignment = this.align(boids);
                var cohesion = this.cohesion(boids);
                this.acceleration += separation + alignment + cohesion;
            },

            update: function() {
                // Update velocity
                this.vector += this.acceleration;
                // Limit speed (vector#limit?)
                this.vector.length = Math.min(this.maxSpeed, this.vector.length);
                this.position += this.vector;
                // Reset acceleration to 0 each cycle
                this.acceleration = new Point();
            },

            seek: function(target) {
                this.acceleration += this.steer(target, false);
            },

            arrive: function(target) {
                this.acceleration += this.steer(target, true);
            },

            borders: function() {
                var vector = new Point();
                var position = this.position;
                var radius = this.radius;
                var size = view.size;
                if (position.x < -radius) vector.x = size.width + radius;
                if (position.y < -radius) vector.y = size.height + radius;
                if (position.x > size.width + radius) vector.x = -size.width -radius;
                if (position.y > size.height + radius) vector.y = -size.height -radius;
                if (!vector.isZero()) {
                    this.position += vector;
                    var segments = this.path.segments;
                    for (var i = 0; i < this.amount; i++) {
                        segments[i].point += vector;
                    }
                }
            },

            // A method that calculates a steering vector towards a target
            // Takes a second argument, if true, it slows down as it approaches
            // the target
            steer: function(target, slowdown) {
                var steer,
                    desired = target - this.position;
                var distance = desired.length;
                // Two options for desired vector magnitude
                // (1 -- based on distance, 2 -- maxSpeed)
                if (slowdown && distance < 100) {
                    // This damping is somewhat arbitrary:
                    desired.length = this.maxSpeed * (distance / 100);
                } else {
                    desired.length = this.maxSpeed;
                }
                steer = desired - this.vector;
                steer.length = Math.min(this.maxForce, steer.length);
                return steer;
            },

            separate: function(boids) {
                var desiredSeperation = 60;
                var steer = new Point();
                var count = 0;
                // For every boid in the system, check if it's too close
                for (var i = 0, l = boids.length; i < l; i++) {
                    var other = boids[i];
                    var vector = this.position - other.position;
                    var distance = vector.length;
                    if (distance > 0 && distance < desiredSeperation) {
                        // Calculate vector pointing away from neighbor
                        steer += vector.normalize(1 / distance);
                        count++;
                    }
                }
                // Average -- divide by how many
                if (count > 0)
                    steer /= count;
                if (!steer.isZero()) {
                    // Implement Reynolds: Steering = Desired - Velocity
                    steer.length = this.maxSpeed;
                    steer -= this.vector;
                    steer.length = Math.min(steer.length, this.maxForce);
                }
                return steer;
            },

            // Alignment
            // For every nearby boid in the system, calculate the average velocity
            align: function(boids) {
                var neighborDist = 25;
                var steer = new Point();
                var count = 0;
                for (var i = 0, l = boids.length; i < l; i++) {
                    var other = boids[i];
                    var distance = this.position.getDistance(other.position);
                    if (distance > 0 && distance < neighborDist) {
                        steer += other.vector;
                        count++;
                    }
                }

                if (count > 0)
                    steer /= count;
                if (!steer.isZero()) {
                    // Implement Reynolds: Steering = Desired - Velocity
                    steer.length = this.maxSpeed;
                    steer -= this.vector;
                    steer.length = Math.min(steer.length, this.maxForce);
                }
                return steer;
            },

            // Cohesion
            // For the average location (i.e. center) of all nearby boids,
            // calculate steering vector towards that location
            cohesion: function(boids) {
                var neighborDist = 100;
                var sum = new Point();
                var count = 0;
                for (var i = 0, l = boids.length; i < l; i++) {
                    var other = boids[i];
                    var distance = this.position.getDistance(other.position);
                    if (distance > 0 && distance < neighborDist) {
                        sum += other.position; // Add location
                        count++;
                    }
                }
                if (count > 0) {
                    sum /= count;
                    // Steer towards the location
                    return this.steer(sum, false);
                }
                return sum;
            }
        });

        var heartPath = new Path('M514.69629,624.70313c-7.10205,-27.02441 -17.2373,-52.39453 -30.40576,-76.10059c-13.17383,-23.70703 -38.65137,-60.52246 -76.44434,-110.45801c-27.71631,-36.64355 -44.78174,-59.89355 -51.19189,-69.74414c-10.5376,-16.02979 -18.15527,-30.74951 -22.84717,-44.14893c-4.69727,-13.39893 -7.04297,-26.97021 -7.04297,-40.71289c0,-25.42432 8.47119,-46.72559 25.42383,-63.90381c16.94775,-17.17871 37.90527,-25.76758 62.87354,-25.76758c25.19287,0 47.06885,8.93262 65.62158,26.79834c13.96826,13.28662 25.30615,33.10059 34.01318,59.4375c7.55859,-25.88037 18.20898,-45.57666 31.95215,-59.09424c19.00879,-18.32178 40.99707,-27.48535 65.96484,-27.48535c24.7373,0 45.69531,8.53564 62.87305,25.5957c17.17871,17.06592 25.76855,37.39551 25.76855,60.98389c0,20.61377 -5.04102,42.08691 -15.11719,64.41895c-10.08203,22.33203 -29.54687,51.59521 -58.40723,87.78271c-37.56738,47.41211 -64.93457,86.35352 -82.11328,116.8125c-13.51758,24.0498 -23.82422,49.24902 -30.9209,75.58594z');

        var boids = [];
        var groupTogether = false;

        // Add the boids:
        for (var i = 0; i < 15; i++) {
            var position = Point.random() * view.size;
            boids.push(new Boid(position, 10, 0.05));
        }
//FIN ALGUES

//BALLES CHAMPIGNONS
    function Ball(r, p, v) {
            this.radius = r;
            this.point = p;
            this.vector = v;
            this.maxVec = 15;
            this.numSegment = Math.floor(r / 3 + 2);
            this.boundOffset = [];
            this.boundOffsetBuff = [];
            this.sidePoints = [];
            this.path = new Path({
                fillColor: {
                    hue: Math.random() * 360,
                    saturation: 1,
                    brightness: 2
                },
            blendMode: 'screen'
        });

        for (var i = 0; i < this.numSegment; i ++) {
            this.boundOffset.push(this.radius);
            this.boundOffsetBuff.push(this.radius);
            this.path.add(new Point());
            this.sidePoints.push(new Point({
                angle: 360 / this.numSegment * i,
                length: 1
            }));
        }
    }

    Ball.prototype = {
        iterate: function() {
            this.checkBorders();
            if (this.vector.length > this.maxVec)
                this.vector.length = this.maxVec;
            this.point += this.vector;
            this.updateShape();
        },

        checkBorders: function() {
            var size = view.size;
            if (this.point.x < -this.radius)
                this.point.x = size.width + this.radius;
            if (this.point.x > size.width + this.radius)
                this.point.x = -this.radius;
            if (this.point.y < -this.radius)
                this.point.y = size.height + this.radius;
            if (this.point.y > size.height + this.radius)
                this.point.y = -this.radius;
        },

        updateShape: function() {
            var segments = this.path.segments;
            for (var i = 0; i < this.numSegment; i ++)
                segments[i].point = this.getSidePoint(i);

            this.path.smooth();
            for (var i = 0; i < this.numSegment; i ++) {
                if (this.boundOffset[i] < this.radius / 4)
                    this.boundOffset[i] = this.radius / 4;
                var next = (i + 1) % this.numSegment;
                var prev = (i > 0) ? i - 1 : this.numSegment - 1;
                var offset = this.boundOffset[i];
                offset += (this.radius - offset) / 15;
                offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
                this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
            }
        },

        react: function(b) {
            var dist = this.point.getDistance(b.point);
            if (dist < this.radius + b.radius && dist != 0) {
                var overlap = this.radius + b.radius - dist;
                var direc = (this.point - b.point).normalize(overlap * 0.015);
                this.vector += direc;
                b.vector -= direc;

                this.calcBounds(b);
                b.calcBounds(this);
                this.updateBounds();
                b.updateBounds();
            }
        },

        getBoundOffset: function(b) {
            var diff = this.point - b;
            var angle = (diff.angle + 180) % 360;
            return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
        },

        calcBounds: function(b) {
            for (var i = 0; i < this.numSegment; i ++) {
                var tp = this.getSidePoint(i);
                var bLen = b.getBoundOffset(tp);
                var td = tp.getDistance(b.point);
                if (td < bLen) {
                    this.boundOffsetBuff[i] -= (bLen  - td) / 2;
                }
            }
        },

        getSidePoint: function(index) {
            return this.point + this.sidePoints[index] * this.boundOffset[index];
        },

        updateBounds: function() {
            for (var i = 0; i < this.numSegment; i ++)
                this.boundOffset[i] = this.boundOffsetBuff[i];
        }
    };

    //--------------------- main ---------------------

    var balls = [];
    var numBalls = 10;
    for (var i = 0; i < numBalls; i++) {
        var position = Point.random() * view.size;
        var vector = new Point({
            angle: 360 * Math.random(),
            length: Math.random() * 10
        });
        var radius = Math.random() * 20 + 40;
        balls.push(new Ball(radius, position, vector));
    }
//FIN BALLES CHAMPIGNONS

