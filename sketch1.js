var max_distance;

function setup() {
	createCanvas(800,800);
}

function draw() {
noStroke();
colorMode(HSB, 800);
for (var i = 0; i < 800; i++) {
  for (var j = 0; j < 800; j++) {
    stroke(i, j, 800);
    point(i, j);
  }
}
}