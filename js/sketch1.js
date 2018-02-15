var max_distance;

function setup() {
	createCanvas(800,800);
}

function draw() {
noStroke();
colorMode(HSB, 100);
for (var i = 1; i < 100; i++) {
  for (var j = 1; j < 100; j++) {
  	var x1=20*i-10;
  	var y1=20*j-10
    
    fill(2.5*i,2.5*j,100);
    rect(x1,y1,20,20);
  }
}
}