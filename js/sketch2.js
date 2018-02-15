var max_distance;

function setup() {
  createCanvas(600, 600);
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(255);
  colorMode(HSB, 100);
  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 35;
      strokeWeight(1);
      stroke("#525252");
      var distcolor=dist(mouseX, mouseY, i, j);
      if (distcolor>max_distance){
        fill(255);
      } else {
        fill((distcolor*255)/2000);
      }
      ellipse(i, j, size, size);
    }
  }
}